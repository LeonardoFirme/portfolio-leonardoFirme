/*
* file: src/components/Sidebar.vue
* description: Componente de sidebar com estrutura de pastas e arquivos, incluindo lógica de colapsar e expandir seções, além de tooltips para visualização em modo colapsado
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { ref } from 'vue';
import { fileSystem } from '../data/files';

defineProps<{
  activeFile: string,
  isCollapsed: boolean
}>();

const emit = defineEmits<{
  (e: 'select-file', fileName: string): void,
  (e: 'toggle-sidebar'): void
}>();

const isRootOpen = ref(true);
const isSrcOpen = ref(true);
const isPagesOpen = ref(false);
const isDataOpen = ref(false);

const colors = {
  src: '#4caf50',
  pages: '#ff7043',
  data: '#ffd54f'
};

const folderPath = "M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z";
</script>

<template>
  <aside :class="[
    'flex flex-col border-r border-gray-200 dark:border-dracula-bor bg-gray-50 dark:bg-dracula-bg select-none transition-all duration-300 relative z-40',
    isCollapsed ? 'w-12 overflow-visible' : 'w-64 overflow-hidden'
  ]">
    <div class="p-3 flex items-center justify-between shrink-0">
      <span v-if="!isCollapsed" class="text-[11px] font-bold text-gray-500 dark:text-dracula-fg uppercase tracking-widest">Explorer</span>
      <button @click="emit('toggle-sidebar')" class="relative -top-1 text-xl text-white hover:text-dracula-fg transition-colors cursor-pointer">
        {{ isCollapsed ? '→' : '←' }}
      </button>
    </div>

    <div :class="['flex-1 flex flex-col py-2 no-scrollbar', !isCollapsed ? 'overflow-y-auto' : 'overflow-visible']">

      <div class="group relative">
        <div v-if="!isCollapsed" @click="isRootOpen = !isRootOpen"
          class="px-4 py-1 flex items-center gap-2 text-[17px] font-bold text-gray-800 dark:text-gray-50 whitespace-nowrap cursor-pointer hover:bg-gray-200/30 dark:hover:bg-dracula-cur/20 transition-colors">
          <span class="relative -top-0.5 text-[11px] w-3 transition-transform duration-200 text-gray-200" :class="!isRootOpen && '-rotate-90'">﹀</span>
          PORTFOLIO_LEONARDO
        </div>
        <div v-else class="custom-tooltip">PORTFOLIO_LEONARDO</div>
      </div>

      <div v-show="isRootOpen || isCollapsed" class="flex flex-col overflow-visible">

        <div class="group relative">
          <div v-if="!isCollapsed" @click="isSrcOpen = !isSrcOpen"
            class="pl-8 py-1 flex items-center gap-2 text-[17px] font-medium text-gray-700 dark:text-dracula-cmt whitespace-nowrap cursor-pointer hover:bg-gray-200/30 dark:hover:bg-dracula-cur/20 transition-colors">
            <span class="relative -top-[0.5px] text-[12px] w-3 transition-transform duration-200 text-gray-200" :class="!isSrcOpen && '-rotate-90'">﹀</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="transition-all duration-200 transform" :class="isSrcOpen ? 'scale-110 opacity-100' : 'scale-100 opacity-70'">
              <path :d="folderPath" :fill="colors.src"/>
            </svg>
            src
          </div>
          <div v-else class="custom-tooltip">src</div>
        </div>

        <div v-show="isSrcOpen || isCollapsed" class="flex flex-col overflow-visible">
          <div class="group relative">
            <div v-if="!isCollapsed" @click="isPagesOpen = !isPagesOpen"
              class="pl-12 py-1 flex items-center gap-2 text-[17px] font-medium text-gray-500 dark:text-dracula-cmt whitespace-nowrap cursor-pointer hover:bg-gray-200/30 dark:hover:bg-dracula-cur/20 transition-colors">
              <span class="relative -top-[0.5px] text-[12px] w-3 transition-transform duration-200 text-gray-200" :class="!isPagesOpen && '-rotate-90'">﹀</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="transition-all duration-200 transform" :class="isPagesOpen ? 'scale-110 opacity-100' : 'scale-100 opacity-70'">
                <path :d="folderPath" :fill="colors.pages"/>
              </svg>
              pages
            </div>
            <div v-if="isCollapsed" class="custom-tooltip">src > pages</div>
          </div>

          <div v-show="isPagesOpen || isCollapsed" class="flex flex-col overflow-visible">
            <div v-for="file in fileSystem.filter(f => f.path.includes('src > pages >') && f.label !== 'Readme.md')" :key="file.name"
              @click="emit('select-file', file.name)"
              :class="['py-1 flex items-center gap-3 text-[17px] cursor-pointer transition-colors group relative',
                isCollapsed ? 'justify-center px-0' : 'pl-16 pr-4',
                activeFile === file.name ? 'bg-gray-200 dark:bg-dracula-cur text-gray-800 dark:text-dracula-fg' : 'text-gray-500 dark:text-dracula-cmt hover:bg-gray-100 dark:hover:bg-dracula-cur/40']">
              <span :class="['relative -top-0.5 font-bold w-4 text-center text-lg']">
                <span class="text-dracula-grn">{{ file.icon }}</span>
              </span>
              <span v-if="!isCollapsed">{{ file.label }}</span>
              <div v-if="isCollapsed" class="custom-tooltip">{{ file.label }}</div>
            </div>
          </div>

          <div class="group relative">
            <div v-if="!isCollapsed" @click="isDataOpen = !isDataOpen"
              class="pl-12 py-1 flex items-center gap-2 text-[17px] font-medium text-gray-500 dark:text-dracula-cmt whitespace-nowrap cursor-pointer hover:bg-gray-200/30 dark:hover:bg-dracula-cur/20 transition-colors">
              <span class="relative -top-[0.5px] text-[12px] w-3 transition-transform duration-200 text-gray-200" :class="!isDataOpen && '-rotate-90'">﹀</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="transition-all duration-200 transform" :class="isDataOpen ? 'scale-110 opacity-100' : 'scale-100 opacity-70'">
                <path :d="folderPath" :fill="colors.data"/>
              </svg>
              data
            </div>
            <div v-if="isCollapsed" class="custom-tooltip">src > data</div>
          </div>

          <div v-show="isDataOpen || isCollapsed" class="flex flex-col overflow-visible">
            <div v-for="file in fileSystem.filter(f => f.path.includes('src > data >'))" :key="file.name"
              @click="emit('select-file', file.name)"
              :class="['py-1 flex items-center gap-3 text-[17px] cursor-pointer transition-colors group relative',
                isCollapsed ? 'justify-center px-0' : 'pl-16 pr-4',
                activeFile === file.name ? 'bg-gray-200 dark:bg-dracula-cur text-gray-800 dark:text-dracula-fg' : 'text-gray-500 dark:text-dracula-cmt hover:bg-gray-100 dark:hover:bg-dracula-cur/40']">
              <span :class="['relative -top-0.5 font-bold w-4 text-center text-md']">
                <span class="text-dracula-ylw">{{ file.icon }}</span>
              </span>
              <span v-if="!isCollapsed">{{ file.label }}</span>
              <div v-if="isCollapsed" class="custom-tooltip">{{ file.label }}</div>
            </div>
          </div>

          <div v-for="file in fileSystem.filter(f => f.label === 'Readme.md')" :key="file.name"
            @click="emit('select-file', file.name)"
            :class="['py-1 flex items-center gap-3 text-[17px] cursor-pointer transition-colors group relative',
              isCollapsed ? 'justify-center px-0' : 'pl-12 pr-4',
              activeFile === file.name ? 'bg-gray-200 dark:bg-dracula-cur text-gray-800 dark:text-dracula-fg' : 'text-gray-500 dark:text-dracula-cmt hover:bg-gray-100 dark:hover:bg-dracula-cur/40']">
            <span :class="['relative -top-0.5 font-bold w-4 text-center text-md']">
              <span class="rounded-full bg-brand-ts text-white px-1 py-[0.5px] text-sm">
                {{ file.icon }}
              </span>
            </span>
            <span v-if="!isCollapsed">{{ file.label }}</span>
            <div v-if="isCollapsed" class="custom-tooltip">{{ file.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>