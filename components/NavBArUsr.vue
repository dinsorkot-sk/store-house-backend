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

        <!-- เมนู -->
        <!-- <nav class="flex space-x-6">
            <nuxt-link to="/warehouse" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">เช่าโกดัง</nuxt-link>
            <nuxt-link to="/form" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">ลงประกาศให้เช่า</nuxt-link>
            <nuxt-link to="/formwarehouserent" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">สร้างโกดังให้เช่า</nuxt-link>
            <nuxt-link to="/performance" class="text-gray-700 hover:text-orange-600 transition-colors duration-300">ผลงานและบริการ</nuxt-link>
          </nav> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarUsr',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

.font-kanit {
  font-family: 'Kanit', sans-serif;
}
</style>