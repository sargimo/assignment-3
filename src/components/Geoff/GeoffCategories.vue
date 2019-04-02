<template>
    <div class="categories-container">
        <div class="category festivals">
            <div class="cat-title">
                <h3>FESTIVALS</h3>
                <p>THE BIGGEST EVENTS IN WELLINGTON</p> 
            </div>
        </div>
        <div class="category music-venues">
            <div class="cat-title">
                <h3>MUSIC VENUES</h3>
                <p>LIVE WEEKEND MUSIC VENUES</p> 
            </div>
        </div>
        <div class="category record-stores">
            <div class="cat-title">
                <h3>RECORD STORES</h3>
                <p>VINYL, CDS AND EVERYTHING INBETWEEN</p> 
            </div>
        </div>
        <div class="category music-shops">
            <div class="cat-title">
                <h3>MUSIC SHOPS</h3>
                <p>FOR ALL YOUR MUSICAL NEEDS</p> 
            </div>
        </div>
        <div class="category music-schools">
            <div class="cat-title">
                <h3>MUSIC SCHOOLS</h3>
                <p>LEARN FROM THE BEST</p> 
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "GeoffCategories",
  components: {}
};
</script>

<style>
.categories-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.festivals {
    transition: all 0.5s linear;
}

.festivals::before {
    background-image: url(../../assets/geoff/category-festivals.jpg);
    filter: grayscale(100%);
}

.festivals:hover {
    transition: all 0.5s linear;
    filter: grayscale(0%);
}

.music-venues {
    background-image: url(../../assets/geoff/category-music-venues.jpg);
    filter: grayscale(100%);
    transition: all 0.5s linear;
}

.music-venues:hover {
    transition: all 0.5s linear;
    filter: grayscale(0%);
}

.record-stores {
    background-image: url(../../assets/geoff/category-record.jpg);
    filter: grayscale(100%);
    transition: all 0.5s linear;
}

.record-stores:hover {
    transition: all 0.5s linear;
    filter: grayscale(0%);
}

.music-shops {
    background-image: url(../../assets/geoff/category-music-shop.jpg);
    filter: grayscale(100%);
    transition: all 0.5s linear;
}

.music-shops:hover {
    transition: all 0.5s linear;
    filter: grayscale(0%);
}

.music-schools {
    background-image: url(../../assets/geoff/category-music-schools.jpg);
    filter: grayscale(100%);
    transition: all 0.5s linear;
}

.music-schools:hover {
    transition: all 0.5s linear;
    filter: grayscale(0%);
}

.category {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    flex: 1;
    text-align: center;
    transition: .3s;
    max-width: 20%;
    height: 100vh;
    min-width: 10%;
}

.category::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;      
      background-position: center bottom;
      background-size: cover;
      z-index: -1;
}

.category:hover {
    transition: .5s;
    max-width: 40% !important;
    flex-grow: 2;
    cursor: pointer;
}

/* .title{
    margin: 0 auto;
} */

.cat-title p {
    color: #ffe96b;
    filter: grayscale(0%) !important;
}

.cat-title h3 {
    color: #fff;
    font-size: 2em;
    margin: auto;
}
</style>
