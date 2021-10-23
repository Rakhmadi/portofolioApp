
<template>
<div class="w-full h-full fixed object-fill flex md:hidden lg:hidden" v-show="!sw" style="background-color:#161821">
    <div class="m-auto lg:w-5/6">
        <div class="block">
        <ul class="mt-6">
            <li class="m-4 mr-7 text-white" @click="sw = true"><router-link class="border-b-2 border-dashed border-white text-2xl hover:border-red-500"  to="/">Home</router-link></li>
            <li class="m-4 mr-7 text-white" @click="sw = true"><router-link class="border-b-2 border-dashed border-white text-2xl hover:border-red-500"  to="/skill">Skill</router-link></li>
            <li class="m-4 mr-7 text-white" @click="sw = true"><router-link class="border-b-2 border-dashed border-white text-2xl hover:border-red-500"  to="/Project">Project</router-link></li>
            <li class="m-4 mr-7 text-white" @click="sw = true"><router-link class="border-b-2 border-dashed border-white text-2xl hover:border-red-500"  to="/contact">Contact</router-link></li>
            <li class="m-4 text-red-500 text-white" @click="sw = true"><font class="border-b-2 border-dashed border-red-500 text-2xl">Close X</font></li>
        </ul>
        </div>
  </div>
</div>
<div class="absolute">
      <div class="lg:px-10 mx-10">
        <ul class="mt-6 flex lg:hidden md:hidden">
            <li class="float-left mr-7 text-white"  v-if="sw" @click="sw = false"><font class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all" href="">Menu</font></li>
        </ul>
        <ul class="mt-6  hidden lg:flex md:flex">
            <li class="float-left mr-7 text-white"><router-link class="border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/">Home</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class="border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/skill">Skill</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class="border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/Project">Project</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class="border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/contact">Contact</router-link></li>
        </ul>
    </div>
</div>
<div class="">
  <router-view></router-view>
</div>
<div class="fixed inset-y-0 left-0 h-screen "><font class="rotate bg-white cardcolor text-xs"><span id="byName">Designed by Rakhmadi with </span><font class="inline-block  transform rotate-90">♥</font></font></div>
</template>
<style lang="scss">
</style>
<script>
import decrypterTextEffect from './dectext/index'

export default {
  mounted(){
  },
  methods: {
    
  },
  data() {
    return {
      sw:true
    }
  },
}
</script>
<style lang="css">
@font-face {
  font-family: 'hack';
  src: url('/Hack-Regular.ttf');
}
 body,html,#app{
  width:100%;
  font-family: 'hack' !important;
  background-color: #161821;
}
.cardbg{
   background: #14141c !important;
}
.cardcolor{
  color: #14141c !important;
}
.rotate {
  writing-mode: vertical-rl;
  text-align: center;
  transform:rotate(-180deg);
  height: 100vh;
}
.fg{
    transform:rotate(0deg) !important;
}
</style>
