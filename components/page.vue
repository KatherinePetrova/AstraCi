<template>
  <div class="cabinet-main">
    <div class="blog">
      <div class="title">{{ title }}</div>
      <div class="sub_title">{{ sub_title }}</div>
      <div class="content">{{ text }}</div>
    </div>
    <div class="block" v-for="index in blocks" :key="'blocky' + index"></div>
  </div>
</template>
<script>
export default {
  props: ["title", "sub_title", "text", "blocks"]
};
</script>

<style scoped>
.cabinet-main {
  min-height: 10rem;
  width: 100%;

  padding: 1rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 14px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: white;

  padding-bottom: 6rem;
  margin-bottom: 5rem;

  position: relative;
}

.cabinet-main > .block {
  height: 18rem;
  width: 40%;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #d8d8d8;

  margin-bottom: 1em;
}

.cabinet-main > .blog {
  position: absolute;

  min-height: 10rem;
  width: 65%;

  opacity: 0.9;
  background-color: #404040;

  right: -2%;
  top: -60%;

  padding: 2em;
  padding-right: 4em;
  padding-bottom: 5rem;
}

.blog > .title {
  position: absolute;

  top: -0.75em;
  left: -0.25em;

  font-size: 8em;
  font-family: DIN-Condensed;
  letter-spacing: 0.1em;
}

.blog > .sub_title {
  /* background-color: white; */

  height: 5em;
  width: 100%;

  border-bottom: 1px solid white;

  display: flex;
  align-items: center;

  font-family: DIN-Condensed;
  font-size: 1.3em;

  margin-bottom: 2em;
}

.blog > .content {
  white-space: pre-line;
}
</style>
