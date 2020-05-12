<template>
<div>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="../assets/img/tabbar/home.svg" slot="item-icon">
      <img src="../assets/img/tabbar/home_active.svg" slot="item-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="../assets/img/tabbar/category.svg" slot="item-icon">
      <img src="../assets/img/tabbar/category_active.svg" slot="item-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img src="../assets/img/tabbar/shopcart.svg" slot="item-icon">
      <img src="../assets/img/tabbar/shopcart_active.svg" slot="item-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="../assets/img/tabbar/profile_active.svg" slot="item-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  <router-view></router-view>
</div>
</template>

<script>
  import TabBarItem from "./tabbar/TabBarItem";
  import TabBar from "./tabbar/TabBar";
  export default {
    name: "MainTabBer",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
