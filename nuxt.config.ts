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
      debug: process.env.DEBUG || false,
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
          href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
        },
      ],
      title: 'font-end',
    },
  },
});
