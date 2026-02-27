/*
* file: src/App.vue
* description: Gerenciador de abas com cores sincronizadas e correção de importações.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { ref, computed } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Editor from './components/Editor.vue';
import { fileSystem } from './data/files';

const isSidebarCollapsed = ref(false);
const openTabs = ref<string[]>([]);
const activeTabIndex = ref(0);
const currentFile = computed(() => openTabs.value[activeTabIndex.value] || '');


const getFileColor = (name: string) => {
  if (name === 'ReadmeMd.vue') return 'bg-brand-ts text-white rounded-full px-1 py-[0.5px] text-[10px]';
  if (name.endsWith('.vue') || name.endsWith('.ts')) return 'text-dracula-grn';
  if (name.endsWith('.json')) return 'text-dracula-ylw';
  return 'text-dracula-cmt';
};

const getFileMeta = (name: string) => {
  return fileSystem.find(f => f.name === name) || { name, label: name, icon: '?', color: '' };
};

const handleFileSelect = (fileName: string) => {
  const index = openTabs.value.indexOf(fileName);
  if (index === -1) {
    openTabs.value.push(fileName);
    activeTabIndex.value = openTabs.value.length - 1;
  } else {
    activeTabIndex.value = index;
  }
};

const closeTab = (index: number) => {
  openTabs.value.splice(index, 1);
  if (activeTabIndex.value >= openTabs.value.length) {
    activeTabIndex.value = Math.max(0, openTabs.value.length - 1);
  }
};
</script>

<template>
  <div class="h-screen w-full flex flex-col bg-white dark:bg-dracula-bg overflow-hidden border border-gray-200 dark:border-dracula-cur font-mono transition-colors duration-300">
    <header class="h-10 border-b border-gray-200 dark:border-dracula-bor flex items-center px-4 bg-gray-50 dark:bg-dracula-bg justify-between select-none">
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-dracula-red"></div>
        <div class="w-3 h-3 rounded-full bg-dracula-ylw"></div>
        <div class="w-3 h-3 rounded-full bg-dracula-grn"></div>
      </div>
      <div class="text-sm text-gray-500 dark:text-white">Portfolio — Leonardo Firme</div>
      <div class="w-10"></div>
    </header>
    <div class="flex-1 flex overflow-hidden">
      <Sidebar
        :active-file="currentFile"
        :is-collapsed="isSidebarCollapsed"
        @select-file="handleFileSelect"
        @toggle-sidebar="isSidebarCollapsed = !isSidebarCollapsed"
      />

      <div class="flex-1 flex flex-col min-w-0">
        <div class="flex h-9 bg-gray-100 dark:bg-dracula-cur border-b border-gray-200 dark:border-dracula-bor overflow-x-auto no-scrollbar">
          <div v-for="(tab, index) in openTabs" :key="tab"
               @click="activeTabIndex = index"
               :class="['flex items-center px-3 gap-2 min-w-32 max-w-48 border-r border-gray-200 dark:border-dracula-bor text-xs cursor-pointer transition-all relative group h-full select-none shrink-0',
                 activeTabIndex === index ? 'bg-white dark:bg-dracula-bg text-gray-800 dark:text-dracula-fg' : 'text-gray-500 dark:text-dracula-cmt dark:bg-dracula-cur hover:bg-gray-200/50 dark:hover:bg-dracula-cur']">

            <span :class="['font-bold w-4 flex items-center justify-center', getFileColor(tab)]">
              {{ getFileMeta(tab).icon }}
            </span>

            <span class="truncate">{{ getFileMeta(tab).label }}</span>
            <span @click.stop="closeTab(index)" class="ml-auto opacity-0 group-hover:opacity-100 px-1 hover:bg-dracula-red/20 rounded text-sm text-dracula-red transition-all">×</span>
          </div>
        </div>

        <div class="flex-1 relative bg-white dark:bg-dracula-bg">
          <Editor v-if="currentFile" :file-name="currentFile" />
          <div v-else class="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-dracula-fg text-sm italic">
            <div class="relative -top-10 flex flex-col justify-center items-center text-center p-6">
                <img
                  src="/src/assets/vue.svg"
                  alt="Logo"
                  class="w-60 h-60 object-contain mb-4 grayscale-0 opacity-10"
                >
                <div class="flex flex-col justify-center items-center text-center p-6">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">Bem-vindo ao meu portfólio!</h2>
                  <p class="text-sm text-gray-500 dark:text-gray-400 italic">Selecione um arquivo no menu lateral para começar a explorar.</p>
                  <p class="text-xs dark:text-dracula-cmt opacity-70 mt-4 italic">Criado por Leonardo Firme com Vue 3 + Tailwind v4.</p>
                  <span class="text-xs dark:text-dracula-cmt opacity-70 mt-2 italic">
                    Dica: Clique no botão Contact_Me() na pasta src/pages/AboutMe.vue ou no botão "Initialize_Contact()" na pasta src/data/Contact.json para iniciar uma conversa comigo no WhatsApp!
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <footer class="h-6 bg-gray-800 dark:bg-dracula-cur flex items-center px-3 justify-between text-[10px] text-white">
      <div class="flex gap-4 items-center">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-dracula-grn"></span> main*</span>
        <span class="text-dracula-red">0 errors</span>
      </div>
      <div class="flex gap-4 items-center">
        <span>UTF-8</span>
        <span class="bg-dracula-pur px-2 h-full flex items-center font-bold italic text-dracula-bg">Vue 3 + Tailwind v4</span>
      </div>
    </footer>
  </div>
</template>