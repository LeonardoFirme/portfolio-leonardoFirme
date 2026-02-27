/*
* file: src/pages/Projects.vue
* description: Listagem de projetos com cards responsivos e stack adaptativa.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { Motion } from "@motionone/vue";
import { projects } from '../data/projects';
</script>

<template>
  <section class="p-6 min-h-full transition-colors selection:bg-dracula-cur overflow-x-hidden">
    <Motion tag="header" :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" class="mb-8 md:mb-12">
      <h1 class="text-2xl md:text-3xl font-bold text-dracula-ylw neon-ylw mb-2 tracking-tight">// Portfolio_Projects</h1>
      <p class="text-dracula-cmt font-mono text-[10px] md:text-sm italic">/* Repositórios e soluções de alta performance */</p>
    </Motion>

    <div class="grid grid-cols-1 gap-6 md:gap-8 max-w-5xl">
      <Motion
        v-for="(project, index) in projects"
        :key="project.id"
        :initial="{ opacity: 0, scale: 0.95 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ delay: index * 0.15, duration: 0.4 }"
        class="group p-5 md:p-6 border border-dracula-cur bg-dracula-bg hover:border-dracula-pnk transition-all flex flex-col"
      >
        <div class="flex justify-between items-start mb-4 gap-4">
          <div class="min-w-0">
            <span class="text-[9px] md:text-[10px] font-bold text-dracula-cyn neon-cyn uppercase tracking-widest font-mono">type: {{ project.type }}</span>
            <h3 class="text-xl md:text-2xl font-bold text-dracula-fg neon-fg mt-1 group-hover:text-dracula-pnk group-hover:neon-pnk transition-all truncate">{{ project.title }}</h3>
          </div>
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-dracula-cmt hover:text-dracula-pnk transition-colors shrink-0 p-1">
            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </a>
        </div>

        <p class="text-sm md:text-base text-dracula-fg/80 neon-fg mb-6 leading-relaxed max-w-3xl italic md:not-italic">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-auto">
          <span v-for="tech in project.stack" :key="tech"
                class="px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[11px] font-mono bg-dracula-cur/40 text-dracula-pnk neon-pnk border border-dracula-pnk/30">
            {{ tech }}
          </span>
        </div>
      </Motion>
    </div>
  </section>
</template>