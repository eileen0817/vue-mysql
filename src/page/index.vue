<template>
  <div id="app">

  </div>


</template>

<script>
  // 根实例
  export default {
    data () {
      return {

      }
    },
    created: function () {
      this.getList()
    },
    methods: {
      getList(){
        this.$fetch('http://10.1.82.29:3000/listUser')
          .then((response) => {
            console.log(response)
          })
      }
      }

  };
</script>

<style scoped>

</style>
