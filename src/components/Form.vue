<template>
  <div>
    <form @submit.prevent>
      <div>
        <h1 class="user__title">Персональные данные</h1>
        <div class="input__div">
          <label>Ф.И.О</label>
          <input v-model="user.name" type="text">
        </div>
        <div class="input__div">
          <label>Возраст</label>
          <input v-model="user.age" type="text">
      </div>
      </div>
      <div>
        <div class="child__title__container">
            <h2 class="child__title">Дети (макс. 5)</h2>
            <div v-if="userChild.length >= 5">

            </div>
            <button v-else class="btn__add" @click="addChild">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z" fill=""/>
              </svg>
              Добавить ребенка</button>
        </div>
        <div v-for="child in userChild" :key="child.id">
          <div class="child__item">
            <div class="input__div" style="width: 260px ; height: 56px">
              <label>Имя</label>
              <input v-model="child.name" type="text">
            </div>
            <div class="input__div" style="width: 260px ; height: 56px">
              <label>Возраст</label>
              <input v-model="child.age" type="text">
            </div>
            <button class="child__item__btn" @click="removeChild(child)">Удалить</button>
          </div>
        </div>
      </div>
      <button class="save__btn" @click="saveData">
        Сохранить
      </button>

    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: ''
      },
      userChild: [
      ]
    }
  },
  methods: {
    addChild() {
      const newChild = {
        id: Date.now(),
        name: this.userChild.name,
        age: this.userChild.age
      }

      this.userChild.push(newChild)
    },
    removeChild: function (child) {
      this.userChild = this.userChild.filter(p => p.id !== child.id)
    },
    saveData() {
      this.$store.commit('saveData', this.user);
      this.$store.commit('saveChild', this.userChild)
      this.user = {};
      this.userChild = []
    }
  }

}
</script>

<style>

.user__title {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #111;
}

.input__div {
  display: flex;
  flex-direction: column;

  width: 616px;
  height: 56px;
  justify-content: center;
  align-items: stretch;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  margin-bottom: 10px;
}

label {
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(17, 17, 17, 0.48);
}

input {
  outline: none;
  border: none;
}

.child__title {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #111;
}

.child__title__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 11px;
}

.child__item {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 10px ;
}

.child__item__btn {
  background: none;
  border: none;
  color: #01A7FD;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

}

.save__btn {
  padding: 10px 20px;
  border: none;
  border-radius: 100px;
  background-color: #01A7FD;
  color: white;
  cursor: pointer;
  text-align: center;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 30px;
}
</style>