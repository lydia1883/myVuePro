<template>
  <div class="pages-view">
      <header-bar @showTalion='open'></header-bar>
      <router-view></router-view>
      <talion-view v-show="talion" @closeTalion='close'></talion-view>    

  </div>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import TalionView from "../views/TalionView";

  export default {
    name: "pages-view",
    components: { HeaderBar, TalionView },
    data() {
      return {
        talion: ""
      };
    },
    methods: {
      open: function() {
        console.log("把talion打开了")
        this.talion = "open";
      },
      close: function() {
        this.talion = false;
      }
    }
  };
</script>

<style scoped>

</style>