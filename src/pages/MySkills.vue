/*
* file: src/pages/MySkills.vue
* description: Interface técnica de visualização de stack com sintaxe de easing corrigida para Motion One.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { Motion } from "@motionone/vue";

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
  fromColor: string;
  toColor: string;
}

const skills: Skill[] = [
  { name: 'Next.js 16+ (TS)', level: 95, category: 'Frontend', fromColor: 'from-brand-next', toColor: 'to-gray-700' },
  { name: 'React 19 (JS)', level: 95, category: 'Frontend', fromColor: 'from-brand-react', toColor: 'to-blue-400' },
  { name: 'TypeScript', level: 98, category: 'Frontend', fromColor: 'from-brand-ts', toColor: 'to-blue-700' },
  { name: 'Tailwind CSS v4', level: 100, category: 'Frontend', fromColor: 'from-brand-tailwind', toColor: 'to-cyan-400' },
  { name: 'Laravel 12 (ERP)', level: 95, category: 'Backend', fromColor: 'from-brand-laravel', toColor: 'to-red-700' },
  { name: 'Node.js', level: 88, category: 'Backend', fromColor: 'from-brand-node', toColor: 'to-green-700' },
  { name: 'Prisma / SQL', level: 90, category: 'Backend', fromColor: 'from-brand-prisma', toColor: 'to-slate-800' },
  { name: 'GraphQL', level: 85, category: 'Backend', fromColor: 'from-brand-graphql', toColor: 'to-pink-600' },
  { name: 'Git / GitHub', level: 90, category: 'Tools', fromColor: 'from-brand-github', toColor: 'to-gray-900' }
];

const categories = ['Frontend', 'Backend', 'Tools'] as const;
</script>

<template>
  <section class="flex flex-col p-6 min-h-full transition-colors duration-300 selection:bg-dracula-cur/50 w-full overflow-x-hidden font-mono">
    <div class="max-w-6xl w-full">

      <Motion :initial="{ opacity: 0, x: -20 }" :animate="{ opacity: 1, x: 0 }" class="pb-8 mb-10 border-b border-gray-200 dark:border-gray-800">
        <h2 class="text-xs font-bold text-dracula-pnk neon-pnk uppercase tracking-[0.3em] mb-4">// Technical_Capabilities</h2>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-50 tracking-tight leading-tight">
          Stack & Proficiência
        </h1>
      </Motion>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div v-for="category in categories" :key="category" class="flex flex-col gap-6">
          <h3 class="text-sm font-bold text-dracula-cmt uppercase tracking-widest flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-dracula-cur"></span>
            {{ category }}
          </h3>

          <div class="space-y-8">
            <div v-for="skill in skills.filter(s => s.category === category)" :key="skill.name" class="group">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-bold text-gray-700 dark:text-dracula-fg group-hover:neon-fg transition-all">
                  {{ skill.name }}
                </span>
                <span class="text-[10px] text-gray-200 italic">{{ skill.level }}%</span>
              </div>

              <div class="h-1 w-full bg-gray-100 dark:bg-dracula-cur/20 overflow-hidden rounded-full border border-gray-200 dark:border-transparent">
                <Motion
                  :initial="{ width: 0 }"
                  :animate="{ width: `${skill.level}%` }"
                  :transition="{ duration: 1.2, easing: 'ease-out' }"
                  :class="['h-full bg-linear-to-r', skill.fromColor, skill.toColor]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 italic text-[10px] md:text-xs text-gray-400 dark:text-dracula-cmt uppercase tracking-widest">
          <p>// Proficiência baseada em arquiteturas SaaS/ERP reais.</p>
          <p class="sm:text-right">/* Skills_Module_v1.1.1 */</p>
        </div>
      </footer>
    </div>
  </section>
</template>