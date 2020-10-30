<template>
  <div class="card-custom">
    <h2>{{ title }}</h2>
    <div class="others" >{{price}}</div>
    <div class="others">{{desc}}</div>
  </div>
</template>

<script>
export default {
  name: "CardCustom",
  props: {
    title: String,
    price: String,
    desc: String,
  }
}
</script>

<style lang="scss" scoped>

.card-custom {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 10px;
  padding: 15px;
  width: 150px;
  border-radius: 5px;
}

.others{
  margin-bottom: 5px;
}

</style>