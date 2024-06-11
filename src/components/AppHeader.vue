<script>
export default {
    name: 'Header'
}
</script>

<template>
<header>
    <div class="p-4"></div>
    <nav class="navbar navbar-expand-lg">
        <div class="container-lg px-5 mx-5 my-3 fw-bold">
          <a class="navbar-brand" href="#">
            <img src="/src/assets/img/header/avada-drivers-logo-1x.webp" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5 pt-3" id="navbarNavDropdown">
            <ul class="navbar-nav mx-5">
              <li class="nav-item mx-1">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">PRICES</a>
              </li>
              <li class="nav-item dropdown mx-1">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  COURSES
                  <span class="">NEW</span>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Intensive</a></li>
                  <li><a class="dropdown-item" href="#">Pass Plus</a></li>
                  <li><a class="dropdown-item" href="#">Instructor</a></li>
                </ul>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">LOCATIONS</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">BLOG</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link" href="#">
                    <button class="btn">BOOK NOW</button>
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

.navbar {
    
}
</style>