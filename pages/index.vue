<template>
  <header class="fixed top-0 w-full z-50 bg-white shadow-md">
    <NavBArUsr />
  </header>

  <body>
    <div class=" md:min-h-[60vw] lg:min-h-[50vw] xl:min-h-[40vw] flex mt-14 overflow-y-hidden">
      <!-- Left side - Image -->
      <div class="hidden lg:block lg:w-1/2">
        <img src="../public/home/Bg_home_full_edit.png" alt="Modern white house exterior"
          class="object-cover w-full h-full" />
      </div>

      <!-- Right side - Login Form -->
      <div class="flex-1 flex flex-col justify-center items-center bg-zinc-900 p-8">
        <div class="w-full max-w-md space-y-8">
          <!-- Logo -->
          <div class="flex justify-center mb-4">
            <div class="flex justify-center mb-2">
              <img src="../public/home/Logo_Home.png" alt="" class="w-32 sm:w-40 md:w-48 lg:w-40 xl:w-40">
            </div>
          </div>

          <form class="space-y-6">
            <div>
              <input type="text" placeholder="username"
                class="w-full px-4 py-3 bg-transparent border-b-2 rounded-md text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
              <input type="password" placeholder="password"
                class="w-full px-4 py-3 bg-transparent border-b-2 rounded-md text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500" />
            </div>
            <div class=" flex justify-center ">
              <button
                class=" px-20 py-3 mt-5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
                @click="handleLogin()">
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </body>
  <footer>
    <FootBar />
  </footer>
</template>

<script setup>
import { useRouter } from 'nuxt/app';
import { useCookie } from '#app';

// ใช้ `ref` เก็บค่าจากฟอร์ม
const username = ref('');
const password = ref('');

// ใช้ router สำหรับการนำทาง
const router = useRouter();

// ฟังก์ชันเข้าสู่ระบบ
const handleLogin = () => {
  // ตัวอย่างการตรวจสอบ username/password แบบง่าย
  
    // ใช้ useCookie เพื่อสร้าง cookie
    const userCookie = useCookie('Admin-Token-login');
    userCookie.value = "login";

    alert('เข้าสู่ระบบสำเร็จ!');
    // router.push('/dashboard'); // นำทางไปที่หน้า Dashboard
  
};
definePageMeta({
  middleware: 'auth' // ใช้ middleware auth เฉพาะในหน้า login
});
</script>