/*
* file: src/data/files.ts
* description: Definição única para ícones, cores, labels e caminhos dos arquivos.
* author: Leonardo Firme
* version: 1.0.0
*/

export interface FileMeta {
  name: string;
  label: string;
  path: string;
  icon: string;
}

export const fileSystem: FileMeta[] = [
  {
    name: 'AboutMe.vue',
    label: 'AboutMe.vue',
    path: 'src > pages > AboutMe.vue',
    icon: 'V'
  },
  {
    name: 'Projects.ts',
    label: 'Projects.vue',
    path: 'src > pages > Projects.vue',
    icon: 'V'
  },
  {
    name: 'Contact.json',
    label: 'Contact.json',
    path: 'src > data > Contact.json',
    icon: '{}'
  },
  {
    name: 'ReadmeMd.vue',
    label: 'Readme.md',
    path: 'src > pages > ReadmeMd.vue',
    icon: 'i'
  },
  {
    name: 'MySkills.vue',
    label: 'MySkills.vue',
    path: 'src > pages > MySkills.vue',
    icon: 'V'
  }
];