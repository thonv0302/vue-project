<script setup>
import { ref } from 'vue';
// const colors = ref(['blue', 'red', 'green']);

// const vColor = {
//   mounted(el, binding) {
//     const colors = binding.value;
//     const speeds = {
//       slow: 2000,
//       normal: 1000,
//       fast: 500,
//       crazy: 100,
//     };
//     const speedName = binding.arg || 'normal';
//     if (binding.modifiers.underline) {
//       el.style.textDecoration = 'underline';
//     }
//     if (binding.modifiers.italic) {
//       el.style.fontStyle = 'italic';
//     }
//     const speed = speeds[speedName];
//     let i = 0;
//     el.__ColorInterval__ = setInterval(() => {
//       console.log('speed: ', speed);
//       el.style.color = colors[i];
//       i++;
//       if (i === colors.length) i = 0;
//     }, speed);
//   },
//   unmounted(el) {
//     clearInterval(el.__ColorInterval__);
//   },
// };

// setTimeout(() => {
//   colors.value.push('pink');
// }, 5000);

// const show = ref(true);

// const vColor = (el, binding) => {
//   const colors = binding.value;
//   const speeds = {
//     slow: 2000,
//     normal: 1000,
//     fast: 500,
//     crazy: 100,
//   };
//   const speedName = binding.arg || 'normal';
//   if (binding.modifiers.underline) {
//     el.style.textDecoration = 'underline';
//   }
//   if (binding.modifiers.italic) {
//     el.style.fontStyle = 'italic';
//   }
//   const speed = speeds[speedName];
//   console.log('speed: ', speed);
//   let i = 0;
//   setInterval(() => {
//     el.style.color = colors[i];
//     i++;
//     if (i === colors.length) i = 0;
//   }, speed);
// };
const handleClickOutside = () => alert('you clicked outside ');
</script>
<template>
  <!-- <h1 v-if="show" v-color:normal.underline.italic="colors">Vue School</h1>
  <button @click="show = !show">Toggle</button> -->
  <h2>Click Outside</h2>
  <div class="box" v-click-outside="handleClickOutside">Here is some text</div>
</template>

<style>
.box {
  width: 500px;
  height: 400px;
  border: 2px solid purple;
}
</style>
