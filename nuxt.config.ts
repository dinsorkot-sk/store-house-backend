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
  devtools: { enabled: true }
});
