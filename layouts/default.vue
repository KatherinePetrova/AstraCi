<template>
  <div class="main" ref="main">
    <main-header/>
    <content-main/>
    <nuxt class="page"/>
    <main-footer/>
  </div>
</template>
<script>
import MainHeader from "~/components/header.vue";
import MainFooter from "~/components/footer.vue";
import ContentMain from "~/components/main.vue";

export default {
  components: { MainHeader, MainFooter, ContentMain },
  watch: {
    $route(newVal) {}
  }
};
</script>
<style>
.main {
  background-image: linear-gradient(to top, #0c1580, #050949);

  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: absolute;

  min-height: 100%;
  width: 100%;
}

.main > .page {
  position: relative;
  margin-bottom: 2em;
}
</style>
