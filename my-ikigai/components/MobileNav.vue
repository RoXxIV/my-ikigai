<template>
  <div class="mobile-nav">
    <!-- Nav  -->
    <ul>
      <li @click="closeMenuAndEmit">Francais</li>
      <!-- User profile -->
      <li @click="closeMenuAndEmit">English</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Define the emitted events for the component.
const emits = defineEmits(["closeMenu"]);

// Function to close the menu and emit the "closeMenu" event.
const closeMenuAndEmit = () => {
  emits("closeMenu");
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  position: absolute;
  top: 18%;
  left: 0;
  width: 100%;
  font-size: 1.3em;
  z-index: 1;

  ul {
    margin: 0;

    li {
      padding: 15px 0px 15px 15px;
      border-bottom: 1px solid $black;
      background: $white;
      cursor: pointer;
    }
  }
}
</style>
