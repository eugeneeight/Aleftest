<template>

    <div v-if="!$store.state.user">
      <h1 class="user__title" style="display: flex; justify-content: center">Вы не сохранили данные</h1>
    </div>
    <div v-else class="preview__box">
      <div class="user__container">
        <h1 class="user__title">Персональные данные</h1>
        <p class="preview__value">{{ $store.state.user.name + ", " + $store.state.user.age + " лет"}}</p>
      </div>
      <div >
        <h2 class="child__title" style="margin-bottom: 20px">Дети</h2>
        <div v-for="(child, index) in $store.state.userChild" :key="child" style="margin-bottom: 20px">
          <p class="child__value">{{ $store.state.userChild[index].name + ", " + $store.state.userChild[index].age + ' лет'}}</p>
        </div>
      </div>
    </div>

</template>

<script>

import index from "vuex";

export default {
  computed: {
    index() {
      return index
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style  scoped>
.preview__box {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
}

.preview__value {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: #111111;
}

.child__value {
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  border-radius: 5px;
  padding: 10px 20px;
  background-color: #f1f1f1;
}

.user__container {
  margin-bottom: 60px;
}
</style>