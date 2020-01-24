<template>
  <div class="container-description">
    <p class="name">
      {{ item_name }}
    </p>
    <p class="description">
      {{ item_description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['item_name', 'item_description']
}
</script>

<style scoped>
.container-description {
  margin-bottom: 20px;
}
.container-description:hover {
  margin-bottom: 20px;
  font-size: 18px;
  color: #00d1b2;
  background-color: #f1f1f1;
}

.name:hover {
}

.description:hover {
  margin-top: 10px;
  color: #000000;
}

.description {
  margin-top: 10px;
}
</style>
