<template>
  <nav>
    <div class="bg-white shadow-md ">
      <div class="container mx-auto flex items-center justify-between md:px-5 lg:px-20 py-2">
        <!-- โลโก้ -->
        <nuxt-link to="/">
          <div class="flex items-center p-3">
            <img src="/public/logo/LogoBar2.png" alt="Logo" class="h-5 mr-2" />
          </div>
        </nuxt-link>
<div v-if="isAdminDashboard" class="flex gap-4 items-center">
  <div >Username</div>
  <div class="rounded-full bg-[#D9D9D9] w-10 h-10">.</div>
</div>


        <!-- เมนู -->
        <!-- <nav class="flex space-x-6">
            <nuxt-link to="/warehouse" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">เช่าโกดัง</nuxt-link>
            <nuxt-link to="/form" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">ลงประกาศให้เช่า</nuxt-link>
            <nuxt-link to="/formwarehouserent" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">สร้างโกดังให้เช่า</nuxt-link>
            <nuxt-link to="/performance" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">ผลงานและบริการ</nuxt-link>
          </nav> -->
      </div>
      <div v-if="isMenuPage" class="bg-[#FF9800] w-full">
    <div class="flex text-white font-medium">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.id"
        :to="item.path"
        class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
        :class="{ 'border-b-2 border-white': isCurrentPath(item.path) }"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { defineOptions } from 'vue'
import { useRoute } from 'vue-router';

defineOptions({
  name: 'NavBarUsr'
})

const route = useRoute();
// เพิ่มฟังก์ชันเช็คว่าอยู่ที่ path ไหน
// const isCurrentPath = (path) => {
//   return route.path === path
// }
const menuItems = [
  { id: 'all', path: '/allwarehouse', label: 'โกดังทั้งหมด' },
  { id: 'approved', path: '/annourequest', label: 'คำขอประกาศ' },
  { id: 'hidden', path: '/Admin_Request_Create', label: 'คำขอสร้าง' },
  { id: 'contact', path: '/contactus', label: 'ติดต่อสอบถาม' },
  { id: 'portfolio', path: '/Admin_Custom', label: 'ปรับแต่งผลงาน' }
];

// ตรวจสอบว่าอยู่ในหน้า Admin_Dashboard หรือไม่
const isAdminDashboard = computed(() => route.path === '/Admin_Dashboard');
const isMenuPage = computed(() => menuItems.some(item => item.path === route.path));
// ตรวจสอบว่า path ปัจจุบันตรงกับเมนูหรือไม่
const isCurrentPath = (path) => {
  console.log('Current Path:', route.path); // แสดง path ปัจจุบัน
  console.log('Checking Path:', path); // แสดง path ที่กำลังตรวจสอบ
  return route.path === path;
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

.font-kanit {
  font-family: 'Kanit', sans-serif;
}

menu-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 2px;
}
</style>