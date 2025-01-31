<!-- pages/announcements.vue -->
<template>
    <headers>
        <NavBArUsr />
    </headers>
    <div class=" bg-[#1e1e1e] sm:px-20 px-5 py-6 ">
        <div class="bg-[#fe7702] w-full ">
            <div class="flex text-white font-medium">
                <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                    :class="{ 'active': activeMenu === 'all' }" @click="activeMenu = 'all'">
                    ทั้งหมด
                </div>
                <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                    :class="{ 'active': activeMenu === 'approved' }" @click="activeMenu = 'approved'">
                    อนุมัติแล้ว
                </div>
                <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                    :class="{ 'active': activeMenu === 'hidden' }" @click="activeMenu = 'hidden'">
                    ซ่อนโกดัง
                </div>
                <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                    :class="{ 'active': activeMenu === 'pending' }" @click="activeMenu = 'pending'">
                    รอดำเนินการ
                </div>
            </div>
        </div>
        <div class=" p-6  bg-white">
            <div class="flex justify-between gap-4 items-center mb-6 ">
                <div class="flex items-center gap-4">
                    <i class="fa-solid fa-clipboard fa-2xl" style="color: #fe7702;"></i>
                    <div class="flex justify-center  w-full">
                        <h1 class="text-lg sm:text-2xl font-bold text-black">คำขอสร้าง</h1>
                    </div>
                </div>
                <div></div>
                <div class="relative ">
                    <div class="form-control ">
                        <div class="relative">
                            <input type="text" v-model="searchQuery" placeholder="Search"
                                class="input input-bordered w-[35vw] pl-10" />
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="table  w-full">
                    <thead>
                        <tr class="bg-white text-black text-base">
                            <th>ลำดับ</th>
                            <th>ชื่อ-นามสกุล</th>
                            <th>อีเมล</th>
                            <th>เบอร์โทร</th>
                            <th>รูปภาพ</th>
                            <th>สถานะ</th>
                            <th class="text-center">แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white text-black">
                        <tr v-for="(item, index) in paginatedAnnouncements" :key="index">
                            <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>
                                <img :src="item.image" :alt="item.name" class="w-24 h-16 object-cover rounded-lg" />
                            </td>
                            <td>
                                <div class="truncate px-2 sm:px-0 bg-yellow-100 gap-2 py-2 rounded-lg text-yellow-400 text-center">
                                    {{ item.status }}
                                </div>
                            </td>
                            <td>
                                <div class="flex gap-2 flex justify-center">
                                    <button class=" btn-sm" @click="editAnnouncement(item)">
                                        <i class="fa-solid fa-pencil fa-xl" style="color: #63E6BE;"></i>
                                    </button>
                                    <button class=" btn-sm" @click="deleteAnnouncement(item.id)">
                                        <i class="fa-solid fa-trash fa-xl" style="color: #ff0000;"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex justify-center gap-2 mt-4">
                <button class="btn btn-outline" @click="prevPage" :disabled="currentPage === 1">
                    &lt;
                </button>
                <button class="btn btn-outline">{{ currentPage }}</button>
                <button class="btn btn-outline" @click="nextPage" :disabled="!hasNextPage">
                    &gt;
                </button>
            </div>
        </div>
    </div>

    <footer>
        <FootBar />
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
const activeMenu = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10
const announcements = ref([
    {
        id: 1,
        name: 'test',
        email: 'admin@gmail.com',
        phone: '0987654321',
        image: '../public/home/Logo_Home.png',
        status: 'รอดำเนินการ'
    }
])

// จัดการ pagination
const paginatedAnnouncements = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredAnnouncements.value.slice(start, end)
})

const hasNextPage = computed(() => {
    return filteredAnnouncements.value.length > currentPage.value * itemsPerPage
})

const editAnnouncement = (item) => {
    console.log('Edit item:', item)
}

const deleteAnnouncement = (id) => {
    console.log('Delete item:', id)
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (hasNextPage.value) {
        currentPage.value++
    }
}

// กรองข้อมูลตาม search query และ activeMenu
const filteredAnnouncements = computed(() => {
    const query = searchQuery.value.toLowerCase()
    let filtered = announcements.value

    // กรองตาม activeMenu
    if (activeMenu.value !== 'all') {
        const statusMap = {
            'approved': 'อนุมัติแล้ว',
            'hidden': 'ซ่อนโกดัง',
            'pending': 'รอดำเนินการ'
        }
        filtered = filtered.filter(item => item.status === statusMap[activeMenu.value])
    }

    // กรองตาม search query
    if (query) {
        filtered = filtered.filter(item => {
            return (
                item.name.toLowerCase().includes(query) ||
                item.email.toLowerCase().includes(query) ||
                item.phone.includes(query) ||
                item.status.toLowerCase().includes(query)
            )
        })
    }

    return filtered
})
</script>


<style scoped>
.menu-item.active::after {
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