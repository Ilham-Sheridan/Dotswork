// @ts-check
import { defineConfig } from 'astro/config';

//import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
    site: 'https://ilham-sheridan.github.io/Dotswork/',

    //base: '/Dotswork/', //repo name
    //does fucking nothing.
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            wrap: true,
            langAlias: {
                cjs: "javascript"
            }
        }
    },

    //integrations: [mdx()],
});