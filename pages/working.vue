<!-- pages/announcements.vue -->
<template>
    <headers>
        <NavBArUsr />
    </headers>

    <body>
        <div class=" bg-[#1e1e1e]  min-h-screen">
            <div class="bg-[#fe7702] w-full ">
                <div class="flex text-white font-medium">
                    <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                        :class="{ 'active': activeMenu === 'all' }" @click="activeMenu = 'all'">
                        ทั้งหมด
                    </div>
                    <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                        :class="{ 'active': activeMenu === 'approved' }" @click="activeMenu = 'approved'">
                        ผลงานที่เปิดอยู่
                    </div>
                    <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                        :class="{ 'active': activeMenu === 'hidden' }" @click="activeMenu = 'hidden'">
                        ผลงานที่ปิดอยู่
                    </div>
                    <div class="cursor-pointer hover:opacity-80 pb-2 relative menu-item py-3 px-4"
                        :class="{ 'active': activeMenu === 'add' }" @click="activeMenu = 'add'">
                        เพิ่มผลงาน
                    </div>
                </div>
            </div>
            <div v-if="activeMenu !== 'add'" class=" p-6  bg-white">
                <div class="grid grid-cols-4 items-center mb-6 ">
                    <div class="flex items-center">
                        <i class="fa-solid fa-clipboard fa-2xl" style="color: #fe7702;"></i>
                        <div class="flex justify-center  w-full">
                            <h1 class="text-2xl font-bold text-black">คำขอสร้าง</h1>
                        </div>
                    </div>
                    <div></div>
                    <div class="relative col-span-2">
                        <div class="form-control ">
                            <div class="relative">
                                <input type="text" v-model="searchQuery" placeholder="Search"
                                    class="input input-bordered w-full pl-10" />
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
                                <th>ชื่อผลงาน</th>
                                <th>รายละเอียด</th>

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

                                <td>
                                    <img :src="item.image" :alt="item.name" class="w-24 h-16 object-cover rounded-lg" />
                                </td>
                                <td>
                                    <div class=" bg-yellow-100 gap-2 py-2 rounded-lg text-yellow-400 text-center">
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

            <div v-if="activeMenu == 'add'" class=" px-2 sm:px-20 py-6  bg-black min-h-screen">
                <h2 class="text-white text-2xl">ลงผลงาน</h2>
                <div class="px-6 py-2">
                    <input class="bg-black min-w-[65vw] border-b-2 my-3" placeholder="ชื่อผลงาน">
                    <!-- Text Editor Toolbar -->
                    <ckeditor
        v-if="editor"
        v-model="data"
        :editor="editor"
        :config="config"
    />

                    <div class="grid grid-cols-1 sm:grid-cols-1 sm:gap-20 bg-black">
                        <div class=" items-center gap-2 mb-2 ">

                            <div class="text-white my-3">รูปภาพ ( กรุณาใส่รูปอย่างน้อย 1 รูป แต่ไม่เกิน 4 รูป และขนาดไฟล์ต้องไม่เกิน 2 Mb)</div>

                            <div class="grid grid-cols-4 gap-4 max-w-[70vw]">
                                <!-- Upload Button - only show if less than 4 images -->
                                <div v-if="images.length < 4" @click="triggerFileInput"
                                    class="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                                    <span class="text-4xl text-gray-500">
                                        <i class="fa-solid fa-plus"></i>
                                    </span>
                                </div>

                                <!-- Image Previews -->
                                <div v-for="(image, index) in images" :key="index"
                                    class="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center relative bg-white">
                                    <img :src="image" class="w-full h-full object-cover rounded-lg"
                                        alt="Uploaded image" />

                                    <!-- Remove button -->
                                    <button @click="removeImage(index)"
                                        class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors">
                                        ×
                                    </button>
                                </div>
                            </div>

                            <!-- Hidden File Input -->
                            <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*"
                                class="hidden" />
                        </div>


                    </div>


                </div>
                <div class=" flex justify-end gap-5">
                    <button @click="editAnnouncement()"
                            class=" bg-gray-500 text-white py-2 px-6  transition-colors font-medium">
                            ยกเลิก
                        </button>
                        <button @click="editAnnouncement()"
                            class=" bg-orange-500 text-white py-2 px-6 hover:bg-orange-600 transition-colors font-medium">
                            ดูรายละเอียด
                        </button>
                </div>
            </div>
        </div>

    </body>

    <footer>
        <FootBar />
    </footer>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';
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
        status: 'ผลงานที่ปิดอยู่'
    },
    {
        id: 2,
        name: 'test',
        email: 'admin@gmail.com',
        phone: '0987654321',
        image: '../public/home/Logo_Home.png',
        status: 'ผลงานที่เปิดอยู่'
    },
    {
        id: 3,
        name: 'test test',
        email: 'test@gmail.com',
        phone: '0987654321',
        image: '../public/home/Logo_Home.png',
        status: 'ผลงานที่เปิดอยู่'
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
    alert("คลิ๊กแล้วนะ เก๊โอม")
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
            'approved': 'ผลงานที่เปิดอยู่',
            'hidden': 'ผลงานที่ปิดอยู่',
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

// Image upload
const images = ref([])
const uploadedFiles = ref([])
const fileInput = ref(null)

const triggerFileInput = () => {
    if (images.value.length >= 4) return // Prevent upload if max limit reached
    fileInput.value.click()
}

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Check if we've reached the maximum limit
    if (images.value.length >= 4) return

    // Create URL for preview
    const imageUrl = URL.createObjectURL(file)
    images.value.push(imageUrl)
    uploadedFiles.value.push(file)

    // Log upload details
    console.log('Upload Details:')
    console.log('File:', file)
    console.log('File Name:', file.name)
    console.log('File Size:', file.size)
    console.log('File Type:', file.type)
    console.log('URL:', imageUrl)
    console.log('All Uploaded Files:', uploadedFiles.value)
    console.log('All Image URLs:', images.value)

    // Reset file input
    event.target.value = ''
}

// Remove image function
const removeImage = (index) => {
    URL.revokeObjectURL(images.value[index])
    images.value.splice(index, 1)
    uploadedFiles.value.splice(index, 1)
}

const uploadToServer = async (file, index) => {
    try {
        const formData = new FormData()
        formData.append('image', file)

        // const response = await fetch('/api/upload', {
        //   method: 'POST',
        //   body: formData
        // })
        // const data = await response.json()
        // จัดการกับ response ตามที่ต้องการ
    } catch (error) {
        console.error('Upload failed:', error)
    }
}

onBeforeUnmount(() => {
    // Cleanup general images
    images.value.forEach(url => {
        if (url) URL.revokeObjectURL(url)
    })

})

const cloud = useCKEditorCloud( {
    version: '44.1.0',
    premium: true
} );

const data = ref( '<p>Hello world!</p>' );

const editor = computed( () => {
    if ( !cloud.data.value ) {
        return null;
    }

    return cloud.data.value.CKEditor.ClassicEditor;
} );

const config = computed( () => {
        if ( !cloud.data.value ) {
        return null;
    }

    const { Essentials, Paragraph, Bold, Italic } = cloud.data.value.CKEditor;
    const { FormatPainter } = cloud.data.value.CKEditorPremiumFeatures;

    return {
        licenseKey: '<YOUR_LICENSE_KEY>',
        plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ]
    };
} );
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