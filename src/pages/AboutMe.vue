/*
* file: src/pages/Profile.vue
* description: Página de perfil profissional 100% responsiva com stack dinâmica.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Motion } from "@motionone/vue";
import { typewriterData } from '../data/typewriter';
import { openWhatsApp } from "../data/whatsapp";

const handleContactClick = (): void => {
  openWhatsApp("5551997421833");
};

interface Skill {
  category: string;
  items: string[];
}

const displayText = ref<string>("");
const currentTitleIndex = ref<number>(0);
const isDeleting = ref<boolean>(false);

const handleType = (): void => {
  const { titles, typingSpeed, deletingSpeed, pauseDuration } = typewriterData;
  const currentFullText = titles[currentTitleIndex.value];
  let nextSpeed = isDeleting.value ? deletingSpeed : typingSpeed;

  if (isDeleting.value) {
    displayText.value = currentFullText.substring(0, displayText.value.length - 1);
  } else {
    displayText.value = currentFullText.substring(0, displayText.value.length + 1);
  }

  if (!isDeleting.value && displayText.value === currentFullText) {
    isDeleting.value = true;
    nextSpeed = pauseDuration;
  } else if (isDeleting.value && displayText.value === "") {
    isDeleting.value = false;
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length;
    nextSpeed = 500;
  }
  setTimeout(handleType, nextSpeed);
};

onMounted(() => handleType());

const professionalProfile = {
  bio: "Desenvolvedor focado na criação de ecossistemas empresariais de alta performance. Especialista em arquitetura Laravel integrada a interfaces reativas com React e Vue, priorizando tipagem estrita e escalabilidade.",
  experience: "15+ anos construindo soluções escaláveis e de alta performance.",
};

const skills: Skill[] = [
  { category: "Backend & Infra", items: ["Laravel", "Node.js", "Python", "GraphQL", "Prisma ORM"] },
  { category: "Frontend & UI", items: ["Next.JS", "React", "Vue.JS", "TypeScript", "TailwindCSS", "Vite"] },
  { category: "DevOps & Tools", items: ["GitHub", "NPM", "Vercel"] }
];
</script>

<template>
  <section class="flex flex-col p-6 min-h-full transition-colors duration-300">
    <Motion
      tag="header"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }"
      class="mb-8 md:mb-12 max-w-4xl min-h-40 md:min-h-48"
    >
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-dracula-pnk neon-pnk mb-4 leading-tight">
        {{ displayText }}<span class="text-dracula-fg animate-pulse neon-fg">|</span>
      </h1>
      <h2 class="text-lg md:text-2xl text-dracula-pur neon-pur font-medium tracking-tight">
        Fullstack Developer | Especialista em Laravel & React/Vue | Criador de Soluções Empresariais de Alta Performance.
      </h2>
    </Motion>

    <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.3, duration: 0.8 }" class="max-w-3xl mb-8 md:mb-12">
      <p class="text-base md:text-lg text-dracula-fg neon-fg leading-relaxed mb-6">
        {{ professionalProfile.bio }}
      </p>
      <div class="inline-flex items-center gap-2 px-4 py-2 border border-dracula-cur rounded-sm bg-dracula-cur/20">
        <span class="w-2 h-2 rounded-full bg-dracula-grn animate-pulse shadow-[0_0_10px_#50fa7b]"></span>
        <span class="text-xs md:text-sm text-dracula-grn neon-grn italic font-mono">{{ professionalProfile.experience }}</span>
      </div>
    </Motion>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
      <Motion
        v-for="(skill, index) in skills"
        :key="skill.category"
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ delay: 0.5 + (index * 0.1) }"
        class="space-y-4"
      >
        <h3 class="text-sm font-bold text-dracula-cyn neon-cyn uppercase tracking-widest font-mono">
          // {{ skill.category }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="item in skill.items" :key="item"
              class="px-3 py-1 bg-dracula-bg border border-dracula-pur text-dracula-pur neon-pur text-[10px] md:text-xs font-mono transition-colors hover:border-dracula-pnk hover:text-dracula-pnk hover:neon-pnk cursor-default">
            {{ item }}
          </li>
        </ul>
      </Motion>
    </div>

    <Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.8 }" class="mt-12 md:mt-16">
      <button
          @click="handleContactClick"
          class="w-full sm:w-auto bg-dracula-cur hover:bg-dracula-pur text-dracula-fg px-10 py-4 font-bold transition-all cursor-pointer active:scale-95 border border-dracula-pur shadow-[0_0_15px_rgba(189,147,249,0.3)] neon-fg text-sm md:text-base">
        Contact_Me()
      </button>
    </Motion>
  </section>
</template>