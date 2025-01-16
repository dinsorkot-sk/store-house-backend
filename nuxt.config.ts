// โหลด .env ไฟล์
import { config } from 'dotenv';
config({
  path: `.env.${process.env.NODE_ENV || 'development'}`, // โหลดตามโหมด
});

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:3000/api',
      // debug: process.env.DEBUG || false,
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com',
          defer: true,
        },
        {
          src: 'https://kit.fontawesome.com/4c6f392e56.js',
          defer: true,
        },
      ],
      title: 'back-end',
    },
  },
});
