<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-active"></slot>
    <div v-bind:class="{active:!isActive}"> <slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      },
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>
