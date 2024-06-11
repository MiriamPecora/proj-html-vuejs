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
        <div class="container-lg fs-6 d-flex justify-content-around pt-3">
            <p class="up-nav-text">We have a 95% Successful Pass Rate!</p>
            <p class="up-nav-text">
                <font-awesome-icon class="mx-2" icon="fa-solid fa-phone"/>
                Give us a call to book your tuition! 1-800-555-555
            </p>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg justify-content-center">
        <div class="container-lg px-5 mx-5 my-3 fw-semibold">
          <a class="navbar-brand" href="#">
            <img src="/src/assets/img/header/avada-drivers-logo-1x.webp" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5 pt-3" id="navbarNavDropdown">
            <ul class="navbar-nav mx-5">
              <li class="nav-item mx-1">
                <a class="nav-link active text-white" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link text-white" href="#">ABOUT</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link text-white" href="#">PRICES</a>
              </li>
              <li class="nav-item dropdown mx-1">
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
              <li class="nav-item mx-1">
                <a class="nav-link text-white" href="#">LOCATIONS</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link text-white" href="#">BLOG</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">
                    <button class="btn bg-new rounded-5 px-4 fw-semibold text-white" type="submit">BOOK NOW</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</header>
</template>

<style lang="scss" scoped>
header{
    position: absolute;
    width: 100%;
    top: 0;
}

.bg-new {
    background-color: #7ABC64;
}

.up-nav-text {
    font-size: 12px;
}

.span-nav {
    font-size: 10px;
}
</style>