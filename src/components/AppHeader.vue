<script>
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone)
export default {
    name: 'Header'
}
</script>

<template>
<header>
    <div class="up-nav">
        <div class="container-lg d-flex justify-content-between pt-3">
            <p class="up-nav-text">We have a 95% Successful Pass Rate!</p>
            <p class="up-nav-text">
                <font-awesome-icon class="mx-2" icon="fa-solid fa-phone"/>
                Give us a call to book your tuition! 1-800-555-555
            </p>
        </div>
    </div>
    <div class="container-lg fw-semibold team-10-text-white">
      <div class="row align-items-center">
        <div class="col">
          <img class="py-4" src="../assets/img/header/avada-drivers-logo-1x.webp" alt="driving avada logo">
        </div>
        <div class="col-8">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <router-link :to="{ name: 'Home' }" class="underline-none">
                HOME
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'About' }" class="underline-none">
              ABOUT
              </router-link>
            </div>
            <div>PRICES</div>
            <div>
              <button class="btn dropdown-toggle text-uppercase fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">
                COURSES
                <span class="rounded-1 p-1 mx-1 span-nav bg-new fw-semibold text-white">NEW</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Intensive</a></li>
                <li><a class="dropdown-item" href="#">Pass Plus</a></li>
                <li><a class="dropdown-item" href="#">Instructor</a></li>
              </ul>
            </div>
            <div>LOCATIONS</div>
            <div>BLOG</div>
            <div>
              <button class="btn bg-new rounded-5 px-4 py-2 fw-semibold text-white" type="submit">
                <router-link :to="{ name: 'Book' }" class="underline-none">
                  BOOK NOW
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header{
    position: absolute;
    width: 100%;
    top: 0;
}

.bg-new {
    background-color: $color-main;
}

.up-nav-text {
    font-size: 12px;
}

.span-nav {
    font-size: 10px;
}

.underline-none {
  text-decoration: none;
}
</style>