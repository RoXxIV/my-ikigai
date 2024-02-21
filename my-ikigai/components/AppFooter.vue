import { NuxtLink } from '../.nuxt/components';
<template>
  <footer>
    <!-- Nav -->
    <ul>
      <li><NuxtLink to="/">Contact</NuxtLink></li>
      <li><NuxtLink to="/">Politique de confidentialité</NuxtLink></li>
      <li><NuxtLink to="/">Conditions générales</NuxtLink></li>
      <li><NuxtLink to="/">Github</NuxtLink></li>
    </ul>
  </footer>
</template>

<style lang="scss">
footer {
  width: 80%;
  margin: 0px auto;
  padding: 50px 0;
  ul {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    li {
      margin: 0 20px;
      font-size: 1em;
      a {
        text-decoration: none;
        color: $black;
      }
    }
  }
  /** media queries */
  @include media-max(991.98px) {
    width: 100%;
    ul {
      flex-direction: column;
      align-items: center;
      li {
        margin: 10px 0;
      }
    }
  }
}
</style>
