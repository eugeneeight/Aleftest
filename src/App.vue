<script>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Navigation, Footer},
  data() {
    return {
    }
  },


}
</script>

<template>
  <div class="window">
    <Navigation/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.window {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  margin-bottom: 20px;
}




label {
  font-weight: 400;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  color: #111111;
  opacity: 48%;
  margin-bottom: 2px;
}






.inputTest:last-child {
  margin-bottom: 30px;
}







.next {
  width: 260px;
}


.children__container {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 10px;
}



.btn__delete {
  border: none;
  background: none;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #01A7FD;
  cursor: pointer;
}

.child__head {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 11px;
}

.btn__add {
  background: none;
  width: 204px;
  height: 44px;
  border: 2px solid #01A7FD;
  border-radius: 100px;
  padding: 10px 20px;
  color: #01A7FD;
  fill: #01A7FD;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

}

.btn__add svg {
  margin-right: 4px;
}

.btn__add:hover{
  background: #01A7FD;
  color: white;
  fill: white;
}




.margin {
  margin-bottom: 10px ;
}

h2 {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.btn__save {
  width: 118px;
  height: 44px;
  margin-top: 30px;
  background: none;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  background-color: #01A7FD;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
}

</style>
