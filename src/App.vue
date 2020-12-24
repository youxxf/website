<template>
  <router-view/>
</template>

<script>
  import {reqSession} from './assets/api/index'

  export default {
    props: [],
    components: {},
    data() {
      return {
        isApp: false,//是否在app内，默认为false
        currentEnv: '',//当前项目所在环境：dev、test、pre；线上默认为空
      }
    },
    computed: {},
    watch: {},
    created() {
        this.setCurrentPath()
      this.getUserInfo()
    },
    mounted() {
    },
    methods: {
      setCurrentPath() {
        ['test', 'dev', 'pre'].map(item => {
          if (window.location.href.indexOf(item) !== -1) {
            this.currentEnv = item;
            return this.$store.dispatch('saveCurrentEnv', item);
          }
        })
        this.checkUrl()
      },//根据环境设置当前json请求前缀
      async getUserInfo() {
        const res = await reqSession();
        if (res.status == 0) {
          this.$store.dispatch('saveUserInfo', res.data);
        } else {
          console.log(res.msg);
        }
      }, //将用户信息存储至vuex
      checkUrl() {
        if (this.isApp) return;
        const {hostname, search} = window.location;
        if (hostname === 'localhost') return
        const UserClient = navigator.userAgent.toLowerCase();
        let IsIphoneOs =
          UserClient.match(/iphone os/i) == "iphone os" ||
          UserClient.match(/ipad/i) == "ipad",
        IsMidp = UserClient.match(/midp/i) == "midp",
        IsUc7 = UserClient.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
        IsUc = UserClient.match(/ucweb/i) == "ucweb",
        IsAndroid = UserClient.match(/android/i) == "android",
        IsCE = UserClient.match(/windows ce/i) == "windows ce",
        IsWM = UserClient.match(/windows mobile/i) == "windows mobile";
        if (!IsIphoneOs && !IsMidp && !IsUc7 && !IsUc && !IsAndroid && !IsCE && !IsWM) {
          const {currentEnv} = this;
          window.location.href = `//${currentEnv ? `${currentEnv}` : 'www'}.iqihang.com${search}`
        }
      },//判断设备地址切换
    }
  }
</script>
