/*
* file: src/data/typewriter.ts
* description: Configuração dos títulos rotativos e definições de velocidade do efeito Typewriter.
* author: Leonardo Firme
* version: 1.0.0
*/

export interface TypewriterConfig {
  titles: string[];
  typingSpeed: number;
  deletingSpeed: number;
  pauseDuration: number;
}

export const typewriterData: TypewriterConfig = {
  titles: [
    "Leonardo Firme",
    "FullSatck Developer",
    "UX Experience",
    "Laravel Expert",
    "Next.JS, React, Vue, Py Enthusiast",
    "Open Source Contributor"
  ],
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 2000
};