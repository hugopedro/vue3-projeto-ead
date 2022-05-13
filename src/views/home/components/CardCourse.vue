<template>
  <li>
    <span :class="['card', 'bg-' + props.bgName]">
      <span class="icon">
        <img :src="[props.image != '' ? props.image : require('@/assets/images/icons/default.png')]"
          :alt="props.title" />
      </span>
      <span class="title">{{ props.title }}</span>
      <span class="action">
        <a href="trainings.html" :class="['btn', props.bgName]">Acessar</a>
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script setup>
/*eslint-disable*/

const props = defineProps({

  title: () => [],
  image: () => [],
  bgName: () => []
});

</script>