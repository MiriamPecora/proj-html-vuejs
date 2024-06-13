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
    <!-- <div class="container-lg">
      <nav class="navbar navbar-expand-lg ps-1">
          <div class="my-3 fw-semibold d-flex justify-content-between">
  
            
            <a class="navbar-brand" href="#">
              <img src="/src/assets/img/header/avada-drivers-logo-1x.webp" alt="">
            </a>
  
          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> 
            <div class="collapse navbar-collapse pt-3 " id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item mx-3 ms-5">
                  <a class="nav-link active text-white" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-white" href="../pages/PageAbout.vue">ABOUT</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-white" href="#">PRICES</a>
                </li>
                <li class="nav-item dropdown mx-3">
                  <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COURSES
                    <span class="rounded-1 p-1 mx-1 btn span-nav bg-new fw-semibold text-white">NEW</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Intensive</a></li>
                    <li><a class="dropdown-item" href="#">Pass Plus</a></li>
                    <li><a class="dropdown-item" href="#">Instructor</a></li>
                  </ul>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-white" href="#">LOCATIONS</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-white" href="#">BLOG</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link" href="/src/pages/PageForm.vue">
                      <button class="btn bg-new rounded-5 px-4 py-2 fw-semibold text-white" type="submit">BOOK NOW</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div> -->
    <div class="container-lg text-uppercase fw-semibold team-10-text-white">
      <div class="row align-items-center">
        <div class="col">
          <img class="py-4" src="../assets/img/header/avada-drivers-logo-1x.webp" alt="driving avada logo">
        </div>
        <div class="col">
          <div class="d-flex justify-content-between align-items-center">
            <div>home</div>
            <div>about</div>
            <div>prices</div>
            <div>
              <button class="btn btn-dark dropdown-toggle text-uppercase" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div>locations</div>
            <div>blog</div>
            <div>book now</div>
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
</style>