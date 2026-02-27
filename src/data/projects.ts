/*
* file: src/data/projects.ts
* description: Definição detalhada dos projetos do portfólio pessoal de Leonardo Firme.
* author: Leonardo Firme
* version: 1.0.0
*/

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link: string;
  type: 'PACKAGE' | 'GITHUB';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NPM Public Packages",
    description: "Desenvolvimento de pacotes e utilitários de alta precisão para o ecossistema JavaScript/TypeScript. Foco em bibliotecas performáticas, tipagem estrita e ferramentas de produtividade para desenvolvedores.",
    stack: ["Node.js", "TypeScript", "NPM"],
    link: "https://www.npmjs.com/~leonardofirme",
    type: "PACKAGE"
  },
  {
    id: 2,
    title: "Repositórios Open Source",
    description: "Contribuições significativas para projetos open source, incluindo correções de bugs, melhorias de desempenho e desenvolvimento de novas funcionalidades. Participação ativa em comunidades de código aberto e colaboração com outros desenvolvedores para promover o crescimento do ecossistema.",
    stack: ["GitHub", "JavaScript", "TypeScript", "Vue.js", "React", "Python"],
    link: "https://github.com/LeonardoFirme",
    type: "GITHUB"
  },
];