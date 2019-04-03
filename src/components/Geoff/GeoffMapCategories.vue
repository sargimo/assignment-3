<template>
    <div>
        <div class="filters">
            <button>back</button>
            <div class="filters-container">
                <div class="row">
                    <div class="col-2">
                        <select>
                            <option value="5">WITHIN 5KM</option>
                            <option value="10">WITHIN 10KM</option>
                            <option value="20">WITHIN 20KM</option>
                            <option value="50">WITHIN 50KM</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <select>
                            <option value="all">All</option>
                            <option value="recommended">Recommended</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <button class="category-btn">MUSIC VENUES</button>
                    </div>
                    <div class="col-2">
                        <button class="category-btn active">RECORD STORES</button>
                    </div>
                    <div class="col-2">
                        <button class="category-btn">MUSIC STORES</button>
                    </div>
                    <div class="col-2">
                        <button class="category-btn">MUSIC SCHOOLS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "GeoffMapCategories",
  components: {}
};
</script>

<style>
.filters-container {
    max-width: 75%;
    margin: 0 auto;
}
.filters {
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: #fff;
}

.category-btn {
    border-radius: 10px;
    background-color: transparent;
    padding: 5px 30px;
    border: 1px solid lightgray;
}

.category-btn.active {
    background-color: #ffe96b;
}
</style>
