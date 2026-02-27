/*
* file: src/pages/ReadmeMd.vue
* description: Renderização estilizada de README.md com estética de IDE e responsividade total.
* author: Leonardo Firme
* version: 1.0.0
*/

<script setup lang="ts">
import { Motion } from "@motionone/vue";
</script>

<template>
  <section class="flex flex-col p-4 transition-colors duration-300 selection:bg-dracula-cur/50 w-full overflow-x-hidden">
    <div class="max-w-4xl w-full">

      <Motion :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" class="pb-6 mb-8">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight leading-tight">
          # Olá, eu sou o Leonardo Firme 👋
        </h1>
        <div class="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Leonardo_Firme-fff1f0?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAADAAAAABAAAAMAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAFAAAAAOgBAABAAAAFAAAAAAAAABI3lMXAAAACXBIWXMAAAdiAAAHYgE4epnbAAAFTmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTAyLTI0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhDUDFxOFZJbyZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRGVpdFlhb0RJJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O0VRVUlQRSBQUklNRSAyLjAmcXVvdDt9PC9BdHRyaWI6RGF0YT4KICAgICA8QXR0cmliOkV4dElkPjc0NjJmMDZkLWNlMjYtNDgyNS04NmVjLTRmM2ZjMTYyYzAxMjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5MZW9uYXJkbyBGaXJtZSAtIDE8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TGVvbmFyZG8gRmlybWU8L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSBkb2M9REFIQ1AxcThWSW8gdXNlcj1VQURlaXRZYW9ESSBicmFuZD1FUVVJUEUgUFJJTUUgMi4wPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PmClpIcAAAONSURBVDiNjZRbbxw1FMenTYEiWkUUVEhKGyXtzoyvMx7PJtuFdgARpaRcWiBtUlHSZFOgNyF4gCIhRUIgQAKeEDwhBI/9EnwBHnlH6lsVLrtje7z7wmDPZVm1acEv67U9P//POf9jx6mGnnWn09DtiMB7Juf8PruWb27udG4buePsqNcVY5Pd0G3mm87Oam/MyRNnl4y8BRnC1b8one5if14R/7Km7nQNuBOa75AULejQ3xABOJNS95IKGgeKzX4TXheh/90vTqnKjpsQ7tMB+LEfwtfs/xtLzlgNzpNkt4rIVzIEi8MLZvi4IuDzPseLjg7Q05LC65K6nRQ0jmdHwZQO3Q1B3WdFAK9stb29ldIirC6DRzKOv8mYvzygPs4pfahLvYWMwQ/6jLzr/Mn5eBaj8zl07lfMf0Vz8KXyvEn7sYzQC2mAniyARqX93YqJp+boq7mJSAbwolH2mcCYCkr3G87ZQnJG/JUBJ6SAcLgquT9Rzv0JycD6qMItjv1Bi5wr1MZkRjP8VrFvz8Z4rQD2wrAhGVwr56itOHi5zo9dV4Q8Uf8XR+l+U8APf280DkjOJwaMLheiKFoWAT4zrKJJcqfX9B/5FUITOn47n5raXViDgznF0ItFcZyyOBlCBwUFZxXx3tER+tqEfkEQ8FzBqkNJQz/ph+D54jZOltQc4UUonrdXRuSiPZdxeEjHYF1ytCEAQIqCOR15F/KnyMP27GbFKkvPZ8YVR5fs/I8YHbSK672BvYDBq4LDlQzyQ7cg3KOMpTRzTxRmrk09hFVOz0J/RYYosHMdwTfr3PU5el8F/vcWNPzGNETG0Q+a42ulC5ZGgFUetfGYjsvipBE4Jrg/n7e9yWwWnbdFEBS+123i2LanNF1icvtxl6PDo4w7oTZfLbjvZqv1YI/hNR3TddMBfnlmaUzE+AvVDE4b7z1mcvnGtrBRn6UxTnrcP1n6EHUUp5/WZ9KEPyoZLnwpYrrcZV58V+C/xTF9GaHLZe7wKeP+9hDIwSk1S1pWvWnBq3Xu7zpuVJUSpoUsqBfj9d/MY2DXbiVwj4jhlVI5WMxmybHRyLZXV0nfarNJxfFPVk29Jziet0Uq5gxe+/vEkQfuqe52qDH3R3Uuf06SXVmMX5cQPm7C7qQMHP9PdduB0wifFiE8JwN80jxP35rHYlVgl45e/P+B1TOvETqsI/yJ6duXavPeC/YPs8xznmb7DmIAAAAASUVORK5CYII=&logoColor=white" alt="Leonardo Firme" />
          <img src="https://img.shields.io/badge/Focus-ERP_&_SaaS_Systems-06B6D4?style=for-the-badge" alt="Focus" class="h-6 sm:h-7 md:h-auto" />
          <img src="https://img.shields.io/badge/Status-Building_the_Future-white?style=for-the-badge" alt="Status" class="h-6 sm:h-7 md:h-auto" />
        </div>
      </Motion>

      <div class="space-y-8 text-gray-600 dark:text-gray-200">

        <section>
          <h3 class="mb-4 text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 tracking-tight">### 👨‍💻 My Identity in Code</h3>
          <div class="relative overflow-x-hidden border border-gray-200 bg-gray-50 p-4 font-mono text-xs sm:text-sm leading-relaxed dark:border-gray-800 dark:bg-gray-900 shadow-sm rounded-sm mb-4">
            <pre class="text-gray-600 dark:text-gray-300 whitespace-pre sm:whitespace-pre-wrap">
              <span class="text-purple-500">interface</span> <span class="text-blue-500">Developer</span> {
                name: <span class="text-green-600">string</span>;
                education: <span class="text-green-600">string[]</span>;
                currentMainStack: <span class="text-green-600">string[]</span>;
                loveLanguages: <span class="text-green-600">string[]</span>;
                loveTopics: <span class="text-green-600">string[]</span>;
                philosophy: <span class="text-green-600">string</span>;
              }

              <span class="text-purple-500">const</span> <span class="text-blue-600">LeonardoFirme</span>: <span class="text-blue-500">Developer</span> = {
                name: <span class="text-orange-600">"Leonardo Firme"</span>,
                education: [
                  <span class="text-orange-600">"Graduado em Análise e Desenvolvimento de Sistemas (ADS) - FAQI"</span>
                ],
                currentMainStack: [
                  <span class="text-orange-600">"Next.js 16+"</span>,
                  <span class="text-orange-600">"React 19"</span>,
                  <span class="text-orange-600">"Laravel 12"</span>,
                  <span class="text-orange-600">"Vue.js 3"</span>,
                  <span class="text-orange-600">"TypeScript"</span>,
                  <span class="text-orange-600">"Tailwind v4"</span>
                ],
                loveLanguages: [
                  <span class="text-orange-600">"TypeScript"</span>,
                  <span class="text-orange-600">"Prisma ORM"</span>,
                  <span class="text-orange-600">"PHP"</span>,
                  <span class="text-orange-600">"SQL"</span>
                ],
                loveTopics: [
                  <span class="text-orange-600">"ERP Architecture"</span>,
                  <span class="text-orange-600">"SaaS Scalability"</span>,
                  <span class="text-orange-600">"DX (Developer Experience)"</span>,
                  <span class="text-orange-600">"UX (User Experience)"</span>,
                  <span class="text-orange-600">"Minimalist UI"</span>
                ],
                philosophy: <span class="text-orange-600">"Profissionalismo exato e precisão técnica."</span>
              };</pre>
          </div>
          <p class="text-gray-500 dark:text-gray-200 italic leading-relaxed text-xs sm:text-sm md:text-base">
            Acredito no **profissionalismo exato**: cada linha de código deve ser precisa, cada interface deve ser minimalista e toda arquitetura deve ser escalável.
          </p>
        </section>

        <hr class="border-gray-200 dark:border-gray-800" />

        <section>
          <h3 class="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight">🧑‍💻 Minha Stack de Desenvolvimento</h3>
          <div class="flex flex-wrap gap-2 mb-3">
            <img src="https://img.shields.io/npm/v/next?style=for-the-badge&logo=next.js&logoColor=white&color=000000&label=next" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/react?style=for-the-badge&logo=react&logoColor=white&color=61DAFB&label=react" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/vue?style=for-the-badge&logo=vue.js&logoColor=white&color=4FC08D&label=vue.js" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/typescript?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6&label=typescript" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/tailwindcss?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4&label=tailwindcss" class="h-5 md:h-7" />
            <img src="https://img.shields.io/badge/python-3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white" class="h-5 md:h-7" />
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <img src="https://img.shields.io/packagist/v/laravel/framework?style=for-the-badge&logo=laravel&logoColor=white&color=FF2D20&label=laravel" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/graphql?style=for-the-badge&logo=graphql&logoColor=white&color=E10098&label=graphql" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/prisma?style=for-the-badge&logo=prisma&logoColor=white&color=2D3748&label=prisma" class="h-5 md:h-7" />
            <img src="https://img.shields.io/badge/managed%20by-uv-de5fe9?style=for-the-badge&logo=astral&logoColor=white" class="h-5 md:h-7" />
          </div>
          <div class="flex flex-wrap gap-2">
            <img src="https://img.shields.io/npm/v/npm?style=for-the-badge&logo=npm&logoColor=white&color=C53636&label=npm" class="h-5 md:h-7" />
            <img src="https://img.shields.io/npm/v/node?style=for-the-badge&logo=node.js&logoColor=white&color=339933&label=node" class="h-5 md:h-7" />
          </div>
        </section>

        <hr class="border-gray-200 dark:border-gray-800" />

        <section>
          <h3 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight">### 🚀 Minha Stack de Elite (2026)</h3>
          <p class="mb-4 text-sm md:text-base">Trabalho exclusivamente com o que há de mais moderno e estável para garantir performance e longevidade:</p>
          <ul class="list-disc space-y-2 pl-5 sm:pl-6 text-sm md:text-base">
            <li><strong>Frontend Pro:</strong> Domino o ecossistema <strong>React 19</strong> e <strong>Next.js 16+</strong>.</li>
            <li><strong>Styling & UX:</strong> Especialista em <strong>Tailwind CSS v4</strong>.</li>
            <li><strong>Backend & ERP:</strong> Construo núcleos complexos utilizando <strong>Laravel 11</strong>.</li>
            <li><strong>Infraestrutura:</strong> Desenvolvo ferramentas de deploy (CLI) e pacotes modulares (NPM).</li>
          </ul>
        </section>

        <hr class="border-gray-200 dark:border-gray-800" />

        <section>
          <h3 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight">### 🛠️ Meu Ecossistema Open Source</h3>
          <p class="mb-4 text-sm md:text-base text-gray-600 dark:text-gray-200">Eu não apenas utilizo bibliotecas; eu crio as ferramentas:</p>
          <ul class="space-y-3 text-sm md:text-base">
            <li>📦 <strong><a href="https://www.npmjs.com/package/@leonardofirme/package-npm" target="_blank" class="text-blue-500 hover:underline">@leonardofirme/package-npm</a></strong></li>
            <li>🚀 <strong><a href="https://www.npmjs.com/package/@leonardofirme/deploy-nextjs16" target="_blank" class="text-blue-500 hover:underline">@leonardofirme/deploy-nextjs16</a></strong></li>
          </ul>
        </section>

        <hr class="border-gray-200 dark:border-gray-800" />

        <section>
          <h3 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight">### 📐 Meus Padrões de Qualidade</h3>
          <ul class="list-none space-y-2 text-sm md:text-base">
            <li>- <strong>Consistência Visual:</strong> Layouts responsivos com paletas exatas.</li>
            <li>- <strong>Integridade de Dados:</strong> Inputs limpos (anti-uppercase).</li>
            <li>- <strong>Tipagem Estrita:</strong> 100% TypeScript.</li>
            <li>- <strong>Performance:</strong> Build otimizado com <code>Next Turbo</code>.</li>
          </ul>
        </section>

        <hr class="border-gray-200 dark:border-gray-800" />

        <section>
          <h3 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 mb-4 tracking-tight">### 📫 Vamos construir algo grande?</h3>
          <div class="flex flex-wrap gap-3">
            <a href="https://github.com/LeonardoFirme" target="_blank" class="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" class="h-8 sm:h-9" />
            </a>
            <a href="https://www.linkedin.com/in/leonardofirme" target="_blank" class="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" class="h-8 sm:h-9" />
            </a>
          </div>
        </section>
      </div>

      <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <blockquote class="italic text-gray-500 dark:text-gray-400 text-xs sm:text-sm border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
          "A precisão no fornecimento de informações é o que diferencia um software comum de uma ferramenta de elite."
        </blockquote>
        <p class="text-[10px] md:text-xs text-gray-400 dark:text-gray-50 font-mono italic tracking-widest uppercase mt-6">
          /* End of README.md */
        </p>
      </footer>
    </div>
  </section>
</template>