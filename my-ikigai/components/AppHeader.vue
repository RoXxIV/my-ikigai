import { MobileNav } from '../.nuxt/components';
<template>
  <header>
    <!-- Logo -->
    <NuxtLink to="/"
      ><img src="~/assets/img/logo.png" alt="logo" class="logo"
    /></NuxtLink>
    <!-- Language Selector -->
    <div class="language-selector">
      <img src="../assets/img/Flag_of_France.png" alt="" />
      <select>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
    <!-- Toggle burger -->
    <div class="icon-burger" @click="toggleBurgerMenu">
      <IconBurger :class="{ opened: isMenuOpen }" id="btn-burger" />
    </div>
    <!-- Mobile menu ----------->
    <MobileNav v-if="isMenuOpen" @closeMenu="toggleBurgerMenu" />
  </header>
</template>

<script setup>
// Toggle mobile menu
const isMenuOpen = ref(false);

// Toggles the burger menu and updates the mobile menu state.
const toggleBurgerMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  .logo {
    max-width: 200px;
  }
  .language-selector {
    display: flex;
    align-items: center;
    select {
      border: none;
      background: none;
      margin-left: 10px;
      font-size: 1.2em;
      cursor: pointer;
    }
  }
  .icon-burger {
    display: none;
  }
  /* Media queries */
  @include media-max(667.98px) {
    justify-content: center;
    .language-selector {
      display: none;
    }
    .icon-burger {
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
