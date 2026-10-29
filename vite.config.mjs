import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

const pages = [
    'index',
    'login',
    'signup',
    'dashboard',
    'calls',
    'contacts',
    'faqs',
    'messages',
    'settings',
    'urgent',
];

export default defineConfig({
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                pages.map((page) => [page, resolve(projectRoot, `${page}.html`)]),
            ),
        },
    },
});
