<template>
  <div class="home">
    <div class="welcome">
      <h3 class="ellipsis-2">爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~</h3>
      <h4 class="ellipsis-2">爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~爱启航方舟项目~</h4>
      <br>
    </div>
    <div class="test becomeGrey">点击按钮</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        input: null,
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      m1 () {

      }
    },
  };
</script>

<style scoped lang="scss">
  /* @import "../../assets/common/style/mixins"; */
  .home {
    h3 {
      width: $theme_width;
      height: 32px;
      background-color: $theme_color;
    }
    h4 {
      width: 200px;
      height: 32px;
      color: $theme_color;
    }
    .test {
      /* @include commonBtn(100px, 50px, skyblue, 8px, 16px, #fff) */
      width: 100px;
      height: 50px;
      margin: 40px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      background-color: #ffc03e;
      border-radius: 8px;
      cursor: pointer;
    }
  }
</style>
