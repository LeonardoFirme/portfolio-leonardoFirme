/*
* file: src/components/Editor.vue
* description: Renderização com ícone e label amigável, com mapeamento de cores dinâmico sincronizado com a Sidebar.
* author: Leonardo Firme
* version: 1.0.0
*/


<script setup lang="ts">
import { computed } from 'vue';
import { fileSystem } from '../data/files';
import AboutMe from '../pages/AboutMe.vue';
import ProjectsPage from '../pages/Projects.vue';
import ContactPage from '../pages/Contact.vue';
import ReadmeMd from '../pages/ReadmeMd.vue';
import MySkills from '../pages/MySkills.vue';

const props = defineProps<{
  fileName: string;
}>();

const currentFile = computed(() =>
  fileSystem.find(f => f.name === props.fileName)
);


const getFileColor = computed(() => {
  const name = props.fileName;
  if (name === 'ReadmeMd.vue') return 'bg-brand-ts text-white rounded-full px-1 py-[0.5px] text-[10px]';
  if (name.endsWith('.vue') || name.endsWith('.ts')) {
     return name === 'Projects.ts' ? 'text-dracula-grn' : 'text-dracula-grn';
  }
  if (name.endsWith('.json')) return 'text-dracula-ylw';
  return 'text-dracula-cmt';
});


const breadcrumb = computed(() => {
  if (!currentFile.value?.path) return { folders: '', fileLabel: props.fileName };

  const parts = currentFile.value.path.split(' > ');
  parts.pop();

  return {
    folders: parts.length > 0 ? parts.join(' > ') + ' > ' : '',
    fileLabel: currentFile.value.label
  };
});

const lineCount = computed(() => {
  switch (props.fileName) {
    case 'AboutMe.vue': return 40;
    case 'Projects.ts': return 40;
    case 'Contact.json': return 40;
    case 'MySkills.vue': return 40;
    case 'ReadmeMd.vue': return 95;
    default: return 40;
  }
});

const lineNumbers = computed(() => Array.from({ length: lineCount.value }, (_, i) => i + 1));
</script>

<template>
  <div class="absolute inset-0 overflow-x-hidden overflow-y-auto bg-white dark:bg-dracula-bg transition-colors duration-300 no-scrollbar">

    <div class="sticky top-0 z-20 flex items-center bg-gray-50 dark:bg-dracula-bg border-b border-gray-100 dark:border-dracula-bor h-9 px-4">
      <div class="flex items-center h-full font-mono text-[11px] italic tracking-tight text-gray-400 dark:text-dracula-cmt">

        <span>{{ breadcrumb.folders }}</span>

        <span :class="['font-bold mx-1.5 flex items-center justify-center', getFileColor]">
          {{ currentFile?.icon }}
        </span>

        <span>
          {{ breadcrumb.fileLabel }}
        </span>
      </div>
    </div>

    <div class="flex relative min-h-full font-mono text-sm md:text-base pl-3">

      <div class="absolute left-115 md:left-340 top-0 bottom-0 w-px bg-gray-100 dark:bg-dracula-cur pointer-events-none z-0"></div>

      <div class="w-10 flex flex-col text-right pr-4 text-gray-400 dark:text-dracula-cmt select-none border-r border-gray-100 dark:border-dracula-bor leading-7 z-10 bg-white dark:bg-dracula-bg sticky left-0">
        <span v-for="n in lineNumbers" :key="n" class="text-[12px] h-7 flex items-center justify-end">{{ n }}</span>
      </div>

      <div class="flex-1 pl-0 pt-0 pb-0 leading-7 whitespace-pre-wrap wrap-break-word text-gray-600 dark:text-dracula-fg z-10">
        <template v-if="fileName === 'AboutMe.vue'">
          <AboutMe />
        </template>
        <template v-else-if="fileName === 'Projects.ts'">
          <ProjectsPage />
        </template>
        <template v-else-if="fileName === 'Contact.json'">
          <ContactPage />
        </template>
        <template v-else-if="fileName === 'ReadmeMd.vue'">
          <ReadmeMd />
        </template>
        <template v-else-if="fileName === 'MySkills.vue'">
          <MySkills />
        </template>
        <template v-else>
          <div class="p-6 text-dracula-cmt italic font-mono">// [SYSTEM]: Falha crítica de mapeamento.</div>
        </template>
      </div>

    </div>
  </div>
</template>