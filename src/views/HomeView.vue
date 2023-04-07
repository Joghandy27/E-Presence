
<template>
  <div class="">
      <div class="flex justify-center mt-20">
        <LogoComponent class=""> </LogoComponent>
    </div>
  
    
    <div class="grid grid-cols-2">
  <div class=" px-8 py-14">
      <Icon1Component/>
  
      
  
    </div>
    <div class="flex items-center">
      <div class=" text-center">
      <div class=" font-quick text-[32px]">Selamat Datang,</div>
      <div class=" font-quick text-[39px] font-bold">Silahkan Scan QR Code pada Kartu Pelajar Siswa</div>
      <div class="flex justify-center">
        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class=" bg-[#0D6EFD]  text-[20px] w-1/2 px-5 py-4 mt-6 ml-6 rounded-full flex justify-center items-center font-quick text-white font-bold text-2x1"><CameraIcon></CameraIcon><div class="p-2">Scan Kartu Pelajar</div></button>
  
      
        </div>
        
    </div>
    </div>
    </div>
    <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div class="relative w-full h-full max-w-md md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                  <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 my-10 py-32 px-32 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" viewBox="0 0 150 150" fill="none">
                  <path d="M25 25H62.5V62.5H25V25ZM125 25V62.5H87.5V25H125ZM87.5 93.75H100V81.25H87.5V68.75H100V81.25H112.5V68.75H125V81.25H112.5V93.75H125V112.5H112.5V125H100V112.5H81.25V125H68.75V100H87.5V93.75ZM100 93.75V112.5H112.5V93.75H100ZM25 125V87.5H62.5V125H25ZM37.5 37.5V50H50V37.5H37.5ZM100 37.5V50H112.5V37.5H100ZM37.5 100V112.5H50V100H37.5ZM25 68.75H37.5V81.25H25V68.75ZM56.25 68.75H81.25V93.75H68.75V81.25H56.25V68.75ZM68.75 37.5H81.25V62.5H68.75V37.5ZM12.5 12.5V37.5H0V12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0L37.5 0V12.5H12.5ZM137.5 0C140.815 0 143.995 1.31696 146.339 3.66117C148.683 6.00537 150 9.18479 150 12.5V37.5H137.5V12.5H112.5V0H137.5ZM12.5 112.5V137.5H37.5V150H12.5C9.18479 150 6.00537 148.683 3.66117 146.339C1.31696 143.995 0 140.815 0 137.5V112.5H12.5ZM137.5 137.5V112.5H150V137.5C150 140.815 148.683 143.995 146.339 146.339C143.995 148.683 140.815 150 137.5 150H112.5V137.5H137.5Z" fill="black" fill-opacity="0.2"/>
                  </svg>
              </div>
          </div>
      </div>
  </div>
    </div>
  
    </template>
  
    
    <script>
    import Icon1Component from '../components/Icon1Component.vue'; 
    import LogoComponent from '../components/LogoComponent.vue'; 
    import CameraIcon from '../components/CameraIcon.vue';
    
    export default {
     name: 'App',
    components: {
      LogoComponent,
      Icon1Component, 
      CameraIcon
    }
  }
  </script>