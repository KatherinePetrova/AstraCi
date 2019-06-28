<template>
  <div class="content-main" ref="content-main">
    <transition name="shade" v-for="(item, index) in blocks" :key="'block' + index">
      <div
        class="block"
        v-show="item.appear"
        :ref="item.ref"
        :style="{
          background: `url(${item.img}) 15% 100% no-repeat`, 
          justifyContent: $route.path==item.link ? 'flex-start' : 'flex-end'
        }"
        @mouseover="shade(index)"
        @mouseleave="unshade()"
        @click="$router.push(item.link)"
      >
        <template v-if="item.appear && $route.path=='/'">
          <transition name="shade">
            <div class="shader" v-show="item.shade"></div>
          </transition>
          <transition name="shade">
            <span v-show="item.show" :key="item.title+1" id="title">{{ item.title }}</span>
          </transition>
          <div class="bottom">
            <transition name="slide">
              <span v-show="item.text_ap" style="font-size: 0.3em;">{{ item.text }}</span>
            </transition>
            <transition name="slide">
              <span
                v-show="item.text_ap"
                style="font-size: 8em; margin-top: -30px; font-family: DIN-Althernate; font-weight: 900"
              >{{ index+1 }}</span>
            </transition>
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  watch: {
    $route(newVal) {
      let path = newVal.path;
      if (path != "/") {
        let i = this.blocks.findIndex(item => path == item.link);
        this.enter(i);
      } else {
        this.appear();
      }
    }
  },
  mounted() {
    let parent = this.$refs["content-main"];

    this.offset = parent.offsetWidth;

    parent.style.maxHeight = parent.offsetHeight;
    parent.style.height = parent.offsetHeight;

    let path = this.$route.path;
    if (path != "/") {
      let i = this.blocks.findIndex(item => path == item.link);
      this.enter(i);
    } else {
      this.appear();
    }
  },
  methods: {
    shade(index) {
      for (let i = 0; i < this.blocks.length; i++) {
        if (i != index) {
          this.blocks[i].shade = true;
          this.blocks[i].text_ap = false;
        } else {
          this.blocks[i].shade = false;
          this.blocks[i].text_ap = true;
        }
      }
    },
    unshade() {
      for (let i = 0; i < this.blocks.length; i++) {
        this.blocks[i].shade = false;
        this.blocks[i].text_ap = false;
      }
    },
    appear() {
      for (let i = 0; i < this.blocks.length; i++) {
        this.blocks[i].appear = true;
      }
      setTimeout(() => {
        this.blocks.forEach((item, index) => {
          let element = this.$refs[item.ref][0];

          element.style.width = "18.5%";

          element.style.backgroundSize = `${this.offset}px auto`;
          element.style.transition = `${1 + index * 0.25}s`;

          element.style.maxHeight = "100%";

          item.show = true;
        });
      }, 100);
    },
    enter(i) {
      this.blocks.forEach((item, index) => {
        let element = this.$refs[item.ref][0];
        if (index != i) {
          element.style.width = "0";
          item.appear = false;
        } else {
          element.style.backgroundSize = `${this.offset}px auto`;
          element.style.maxHeight = "100%";
          element.style.width = "100%";
        }
      });
    }
  },
  data() {
    return {
      offset: 0,
      blocks: [
        {
          img: "/cabinet.jpg",
          title: "КАБИНЕТ",
          show: false,
          ref: "cabinet",
          shade: false,
          text: "Модернизация кабинетов труда",
          text_ap: false,
          appear: true,
          link: "/cabinet"
        },
        {
          img: "/secure.jpg",
          title: "ATI SECURE",
          show: false,
          ref: "secure",
          shade: false,
          text: "Система безопасности с распознаванием лиц",
          text_ap: false,
          appear: true,
          link: "/secure"
        },
        {
          img: "/feedback.jpg",
          title: "FEEDBACK",
          show: false,
          ref: "feedback",
          shade: false,
          text: "Аналитический центр с использованием камер",
          text_ap: false,
          appear: true,
          link: "/feedback"
        },
        {
          img: "/stem.jpg",
          title: "S.T.E.M.",
          show: false,
          ref: "stem",
          shade: false,
          text: "Science - Technology Engeenering - Math",
          text_ap: false,
          appear: true,
          link: "/stem"
        },
        {
          img: "/sport.jpg",
          title: "СПОРТ",
          show: false,
          ref: "sport",
          shade: false,
          text: "Интерактивный спортивный зал",
          text_ap: false,
          appear: true,
          link: "/sport"
        }
      ]
    };
  }
};
</script>
<style scoped>
.content-main {
  margin-top: 2em;

  max-height: 100%;
  height: 75vh;
  min-height: 75%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.block {
  width: 18.5%;
  height: 100%;
  max-height: 0;

  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  font-size: 2.5vw;
  font-weight: 900;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  background-position: 15% 100%;

  position: relative;
  cursor: pointer;
  transition: 1s;
}

.block > .bottom {
  height: 35%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.block > .shader {
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
}
</style>

