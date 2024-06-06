<template>
  <div id="container">
    <a href="/#/blogs" id="link">Click here to move to blogs page</a>
  </div>
</template>

<script setup lang="ts">
// Your script setup code (if any)
</script>

<style scoped lang="scss">
#link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100px;
  background-color: #333; // Dark background
  color: #fff; // White text
  text-decoration: none; // Remove underline
  border-radius: 4px; // Optional: rounded corners
  transition: background-color 0.3s ease; // Smooth transition for background color
  padding: 20px;

  &:hover {
    background-color: #555; // Darker background on hover
  }

  &:active {
    background-color: #111; // Even darker background on active
  }
}
#container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
</style>
