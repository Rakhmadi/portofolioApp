<template>
<div class="lg:px-10 mx-10">
<div class="flex h-screen  ">
  <div class="m-auto lg:w-5/6">
    <h1 class="text-white sm:text-7xl text-6xl "  id="tetx2">Hello.</h1>
    <h3 class="text-white sm:text-4xl text-3xl "  id="tetx1">My name is Rakhmadi.</h3>
    <p class="text-white  sm:text-base text-sm py-3 overflow-ellipsis overflow-hidden  " id="tetx">
      I am a Network Engineer & Web Developer. I like to learn all things related to technology and design by self-taught. I have an old Blog that I no longer actively update. I also took part in city level LKS competitions.
    </p>
  </div>
</div>
</div>
</template>
<script>
import decrypterTextEffect from '../dectext/index'
export default {
    mounted() {
        decrypterTextEffect('tetx2',20,40)
        decrypterTextEffect('tetx1',30,40)
        decrypterTextEffect('tetx',40,40)
    },
    methods: {
      
    },
}
</script>