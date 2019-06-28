<template>
  <page-component :title="title" :sub_title="sub_title" :text="text" :blocks="1"/>
</template>

<script>
import PageComponent from "~/components/page.vue";

export default {
  components: { PageComponent },
  head() {
    return { title: this.title };
  },
  data() {
    return {
      title: "СПОРТ",
      sub_title: "Интерактивный спортивный зал",
      text:
        "Интерактивный спортивный зал, состоит из проектора, периметральных датчиков и программного обеспечения, в качестве экрана могут использоваться любые твёрдые светлые поверхности.\n\n" +
        "Внедрение новых технологиий на уроках физической культуры, проведение уроков в интерактивном режиме. Победа лени путем пробуждения заинтересованности в учениках."
    };
  }
};
</script>