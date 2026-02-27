/*
* file: src/pages/Contact.vue
* description: Interface de contato responsiva com links dinâmicos mapeados corretamente.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { Motion } from "@motionone/vue";
import contact from "../data/contact.json";
import { openWhatsApp } from "../data/whatsapp";

const handleContactClick = (): void => {
  openWhatsApp("5551997421833");
};

const contactLinks = [
  { label: 'Primary_Email', value: contact.email, url: `mailto:${contact.email}` },
  { label: 'GitHub_Profile', value: '@LeonardoFirme', url: contact.github },
  { label: 'LinkedIn_Profile', value: 'leonardofirme', url: contact.linkedin },
  { label: 'NPM_Profile', value: '~leonardofirme', url: contact.npm }
];
</script>

<template>
  <section class="flex flex-col p-6 min-h-full transition-colors selection:bg-dracula-cur overflow-x-hidden">
    <div class="w-full max-w-6xl">
      <Motion :initial="{ opacity: 0, x: -30 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6 }">
        <h2 class="text-xs font-bold text-dracula-pnk neon-pnk uppercase tracking-[0.3em] mb-4 font-mono">// Connect_With_Me</h2>
        <h1 class="text-3xl md:text-5xl font-bold text-dracula-fg neon-fg mb-12 tracking-tight leading-tight">Vamos construir algo excepcional?</h1>
      </Motion>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        <Motion
          v-for="(item, index) in contactLinks"
          :key="item.label"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2 + (index * 0.1) }"
          class="p-6 md:p-8 border border-dracula-cur bg-dracula-bg hover:border-dracula-cyn transition-colors group flex flex-col justify-center min-w-0"
        >
          <span class="text-[10px] text-dracula-cmt uppercase tracking-widest font-mono block mb-2">{{ item.label }}</span>
          <a :href="item.url" target="_blank" rel="noopener noreferrer"
            class="text-base md:text-xl font-bold text-dracula-cyn neon-cyn group-hover:text-dracula-ylw group-hover:neon-ylw transition-colors whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal md:break-all">
            {{ item.value }}
          </a>
        </Motion>
      </div>

      <Motion :initial="{ opacity: 0, scale: 0.98 }" :animate="{ opacity: 1, scale: 1 }" :transition="{ delay: 0.6 }"
        class="p-6 md:p-8 border border-dracula-cur mb-12 bg-dracula-bg/50 max-w-3xl"
      >
        <div class="flex items-center gap-3 mb-2">
          <span class="w-2 h-2 rounded-full bg-dracula-grn animate-pulse shadow-[0_0_10px_#50fa7b]"></span>
          <span class="text-[10px] text-dracula-cmt uppercase tracking-widest font-mono">Status</span>
        </div>
        <p class="text-xl md:text-2xl font-bold text-dracula-fg neon-fg">{{ contact.availability }}</p>
        <p class="text-[10px] md:text-xs text-dracula-cmt font-mono mt-2 italic">// Base: {{ contact.location }}</p>
      </Motion>

      <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.8 }">
        <button
          @click="handleContactClick"
          class="w-full sm:w-auto bg-dracula-cur hover:bg-dracula-grn text-dracula-fg px-12 py-4 font-bold transition-all cursor-pointer border border-dracula-grn/30 active:scale-95 text-sm md:text-base shadow-[0_0_15px_rgba(189,147,249,0.3)] neon-fg"
        >
          Initialize_Contact()
        </button>
      </Motion>
    </div>
  </section>
</template>