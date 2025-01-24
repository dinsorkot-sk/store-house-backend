<template>

    <header>
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e] text-white">

        <div class="flex justify-center min-h-screen my-8 px-4 sm:px-8 md:px-2 lg:px-24">
            <div class="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 space-y-8 p-8 sm:p-12  md:p-0">
                <div class="flex justify-center item-center">
                    <img src="../public/performan/LogoBar.png" alt="Logo" class="w-3/4 sm:w-2/3 md:w-1/2">
                </div>

                <div class="lg:flex justify-between items-baseline mt-5">
                    <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl truncate">บริการและผลงานของเรา</h1>
                    <div class="flex justify-center gap-4 my-2">
                        <div v-if="!editMode" @click="editMode = !editMode"
                            class="my-2 flex justify-around items-center text-center h-[40px] w-[100px] bg-[#FE7703] hover:bg-[#d96603] rounded-md text-white cursor-pointer transition duration-200 ease-in-out">
                            เเก้ไข
                            <i class="fa-solid fa-pen-to-square fa-xl" style="color: #ffffff;"></i>
                        </div>
                    </div>


                    <div class="flex justify-center gap-4 my-2">
                        <div v-if="editMode" @click="btn_save()"
                            class=" flex justify-around items-center text-center h-[40px] w-[100px] bg-[#FE7703] hover:bg-[#d96603] rounded-md text-white cursor-pointer transition duration-200 ease-in-out">
                            บันทึก
                            <i class="fa-solid fa-floppy-disk fa-xl" style="color: #ffffff;"></i>
                        </div>

                        <div v-if="editMode" @click="editMode = !editMode"
                            class="flex justify-around items-center text-center h-[40px] w-[100px] bg-[#FE7703] hover:bg-[#d96603] rounded-md text-white cursor-pointer transition duration-200 ease-in-out">
                            ยกเลิก
                            <i class="fa-solid fa-rectangle-xmark fa-xl" style="color: #ffffff;"></i>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center border-t-2 border-white mt-5 w-full mx-auto "></div>

                <div v-if="!editMode" class="w-full space-y-2">
                    <div class="space-y-1">
                        <h1 class="text-xl sm:text-2xl md:text-3xl">
                            บริการหาโกดังให้เช่า
                        </h1>
                        <p class="break-words p-3 max-w-full sm:max-w-xl md:max-w-2xl">
                            ออกแบบเเละสร้างโกดังให้เช่า ขนาด กว้าง 24 เมตร ยาว 16 เมตร เเละสูง 60 เมตร
                        </p>
                    </div>

                    <div class="space-y-1">
                        <h1 class="text-xl sm:text-2xl md:text-3xl">
                            คลังสินค้าให้เช่าพรรรวี สมุทรปราการ
                        </h1>
                        <p class="break-words p-3 max-w-full sm:max-w-xl md:max-w-2xl">
                            ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 19.4 เมตร ยาว 46.4 และสูง 10.0 เมตร
                            พร้อมงานถม, ปูฟก, ท่อระบายน้ำ, รางวี, สนาม, กำแพงรั้วกันดิน และรั้ว
                        </p>
                    </div>

                    <div class="space-y-1">
                        <h1 class="text-xl sm:text-2xl md:text-3xl">
                            โกดังให้เช่า บางพลี สมุทรปราการ
                        </h1>
                        <p class="break-words p-3 max-w-full sm:max-w-xl md:max-w-2xl">
                            ออกแบบโครงสร้างคลังสินค้าให้เช่า และสร้างคลังสินค้าให้เช่า ขนาด กว้าง 27 เมตร ยาว 66 เมตร
                            และสูง 14.00 เมตร
                        </p>
                    </div>

                    <div class="space-y-1">
                        <h1 class="text-xl sm:text-2xl md:text-3xl">
                            โกดังให้เช่า SK ปทุมธานี
                        </h1>
                        <p class="break-words p-3 max-w-full sm:max-w-xl md:max-w-2xl">
                            ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 17 เมตร ยาว 75 เมตร และสูง 5.0 เมตร
                            โกดังให้เช่า SK เฟส 2 ปทุมธานี ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 17 เมตร
                            ยาว 75 เมตร และสูง 5.0 เมตร โกดังให้เช่า SK เฟส 3 ปทุมธานี ออกแบบโกดังให้เช่า
                            และสร้างโกดังให้เช่า ขนาด กว้าง 20 เมตร ยาว 75 เมตร
                        </p>
                    </div>
                </div>

                <div v-if="editMode" class="w-full text-black">
                    <div class="mt-3">
                        <ckeditor v-if="editor" v-model="data" :editor="editor" :config="config" />
                    </div>
                </div>

            </div>

        </div>

    </body>



    <footer>
        <FootBar />
    </footer>

</template>

<script setup>
import { ref, computed } from 'vue';
import { Ckeditor, useCKEditorCloud } from '@ckeditor/ckeditor5-vue';

// ใช้ CKEditor Cloud สำหรับการจัดการ Cloud Service และโหลด Plugin
const cloud = useCKEditorCloud({
    version: '44.1.0',
    premium: true
});

// ข้อมูลที่จะแสดงใน CKEditor
const data = ref(`
  <div class="space-y-1">
    <h1>บริการหาโกดังให้เช่า</h1>
    <p class="break-words p-3 max-w-xl">
      ออกแบบเเละสร้างโกดังให้เช่า ขนาด กว้าง 24 เมตร ยาว 16 เมตร เเละสูง 60 เมตร
    </p>
  </div>

  <div class="space-y-1">
    <h1>คลังสินค้าให้เช่าพรรรวี สมุทรปราการ</h1>
    <p class="break-words p-3 max-w-xl">
      ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 19.4 เมตร ยาว 46.4 และสูง 10.0 เมตร
      พร้อมงานถม, ปูฟก, ท่อระบายน้ำ, รางวี, สนาม, กำแพงรั้วกันดิน และรั้ว
    </p>
  </div>

  <div class="space-y-1">
    <h1>โกดังให้เช่า บางพลี สมุทรปราการ</h1>
    <p class="break-words p-3 max-w-xl">
      ออกแบบโครงสร้างคลังสินค้าให้เช่า และสร้างคลังสินค้าให้เช่า ขนาด กว้าง 27 เมตร ยาว 66 เมตร
      และสูง 14.00 เมตร
    </p>
  </div>

  <div class="space-y-1">
    <h1>โกดังให้เช่า SK ปทุมธานี</h1>
    <p class="break-words p-3 max-w-xl">
      ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 17 เมตร ยาว 75 เมตร และสูง 5.0 เมตร
      โกดังให้เช่า SK เฟส 2 ปทุมธานี ออกแบบโกดังให้เช่า และสร้างโกดังให้เช่า ขนาด กว้าง 17 เมตร
      ยาว 75 เมตร และสูง 5.0 เมตร โกดังให้เช่า SK เฟส 3 ปทุมธานี ออกแบบโกดังให้เช่า
      และสร้างโกดังให้เช่า ขนาด กว้าง 20 เมตร ยาว 75 เมตร
    </p>
  </div>
`);

// สร้าง editor ที่เชื่อมโยงกับ CKEditor ClassicEditor
const editor = computed(() => {
    if (!cloud.data.value) {
        return null;
    }
    return cloud.data.value.CKEditor.ClassicEditor;
});

// การตั้งค่า CKEditor รวมถึง Plugins และ Toolbar ที่จะใช้งาน
const config = computed(() => {
    if (!cloud.data.value) {
        return null;
    }

    const { Essentials, Paragraph, Bold, Italic, FontColor } = cloud.data.value.CKEditor;

    return {
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjkyOTkxOTksImp0aSI6ImJkMWQwZGM0LTgwMWUtNGU3Ni1iN2QzLWEzZTQzOGRiNWE0NCIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMjE2MjY4YjUifQ.fYTE1z0wCpiLvuqo3yiBmiEv_pI5hjjn1bqBE6DqLHAZBfbFZqn9fMx-YCtUVyRa7XTPtvuJLGIA-O7N1X-etg',
        plugins: [Essentials, Paragraph, Bold, Italic, FontColor],
        toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'fontColor'],
        fontColor: {
            // กำหนดสีฟอนต์ที่ต้องการแสดงใน Toolbar
            colors: [
                {
                    color: '#000000', // สีดำ
                    label: 'Black'
                },
                {
                    color: '#FF0000', // สีแดง
                    label: 'Red'
                },
                {
                    color: '#008000', // สีเขียว
                    label: 'Green'
                }
            ],
            // กำหนดค่าเริ่มต้นของฟอนต์
            default: '#000000'
        }

    };
});

// กำหนดสถานะของโหมดการแก้ไข (Edit Mode)
const editMode = ref(false); // ใช้ ref แทนการใช้ data()

// const saveDat  a = ref(save);

const btn_save = (item) => {
    alert('Edits success!');
}
</script>
