export default defineNuxtRouteMiddleware((to, from) => {
    // เช็ค cookie ว่ามีค่าหรือไม่
    const userCookie = useCookie('Admin-Token-login');
    console.log("+++++++++",to.path,"------------",userCookie.value)
    // ถ้ามี cookie (แสดงว่าผู้ใช้ล็อกอินแล้ว) ไม่ให้เข้าไปที่หน้า login
    if (to.path === '/' && userCookie.value) {
      return navigateTo('/allwarehouse'); // เปลี่ยนไปหน้า dashboard ถ้ามี cookie
    }
  
    // ถ้าไม่มี cookie และกำลังไปหน้าอื่น ให้ไปหน้า login
    if (!userCookie.value && to.path !== '/') {
      return navigateTo('/');
    }
  });
  