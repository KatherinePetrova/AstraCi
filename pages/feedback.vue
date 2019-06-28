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
      title: "FEEDBACK",
      sub_title: "Аналитический центр с использованием камер",
      text:
        "Аналитический центр будет отвечать за контроль использования кабинетов посредством камер в online режиме, проведение обучающих курсов и олимпиад для учащихся."
    };
  }
};
</script>
