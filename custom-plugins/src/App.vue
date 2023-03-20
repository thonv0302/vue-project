<script setup>
import { placements } from '@popperjs/core';
import { ref } from 'vue';
const tooltipText = ref('Hello world');
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <input type="text" v-model="tooltipText" />
  <h5>
    Hover Over Me
    <ToolTip
      :text="tooltipText"
      :options="{
        placement: 'bottom',
        // delay: 2000,
      }"
    />
  </h5>
  <h5>
    Hover Over Me
    <ToolTip
      :text="tooltipText"
      :options="{
        // placement: 'right',
        // delay: 2000,
      }"
    />
  </h5>

  <br />

  <button @click="$hideAllTooltips">Hide All</button>
</template>

<style scoped></style>
