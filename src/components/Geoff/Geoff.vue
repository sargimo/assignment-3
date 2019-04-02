<template>
  <div class="home-bg">
    <div class="container">
      <div class="nz-outline">
        <img src="../../assets/geoff/nz-outline.png">
      </div>
      <div class="title">
        <h1 class="title-top">WELLINGTON</h1>
        <h2 class="sub-title">THE NAME OF THIS</h2>
        <div class="flex-center"> 
          <router-link :to="'/GeoffCategories'" exact><button class="btn-yellow">GET STARTED</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Geoff",
  components: {}
};
</script>

<style>
.home-bg {
  background-image: url(../../assets/geoff/home-bg.jpg);
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.title {
  position: absolute;
  top: 55%;
  right: 15%;
}

.nz-outline {
  position: absolute;
  top: 15%;
  right: 30%;
}

.nz-outline img {
  height: 600px;
}

.title-top {
  font-family: "Oswald", sans-serif;
  text-align: right;
  color: #fff;
  font-size: 90px;
  line-height: 0.6;
}

.sub-title {
  color: #ffe96b;
  text-align: right;
  font-size: 51px;
}

.btn-yellow {
  font-family: "Oswald", sans-serif;
  color: #222;
  background-color: #ffe96b;
  text-align: center;
  padding: 10px 60px 10px 60px;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
