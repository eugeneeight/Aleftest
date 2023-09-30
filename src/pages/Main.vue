<template>
  <div class="main__view">
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },


}
</script>

<style>
.main__view {
  display: flex;
  justify-content: center;
  place-items: center;
}
</style>