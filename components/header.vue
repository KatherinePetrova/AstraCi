<template>
  <div class="header">
    <div class="top">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 47">
          <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="3">
            <path stroke-linecap="round" d="M33 45L17 30.257 33 2M33 45l16-14.743L33 2"></path>
            <path d="M33 45l30-11.536L48.918 11l-7.347 6.679M33 45L3 33.464 17.082 11l7.347 6.679"></path>
          </g>
        </svg>
        <span style="margin-top: 0.5em">ASTRA CI</span>
      </div>
      <div class="lang">
        <span>
          Русский
          <img :src="'/down-arrow.png'" style="height: 0.5em">
        </span>
      </div>
    </div>
    <div class="bot">
      <span style="width: 18.5em; min-width: 18.5em;">Дети - бесценный капитал будущего</span>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  min-height: 13%;
  max-height: 13%;
  width: 100%;

  color: #ffffff;

  display: flex;
  flex-direction: column;

  padding-top: 1.5em;
}

.header > .top {
  height: 80%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding-bottom: 1em;
}

.header > .bot {
  height: 20%;
  width: 100%;

  display: flex;
  align-items: flex-end;
}

.bot > div {
  height: 100%;
  width: 100%;

  margin-bottom: 2px;

  border-bottom-style: solid;
  border-width: 1px;
  border-color: #ffffff;
}

.top > .logo {
  height: 100%;
  width: auto;

  display: flex;
  flex-direction: column;

  font-family: Arkhip-Regular;
  font-size: 12px;

  align-items: center;
}

.top > .lang {
  font-size: 12px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
