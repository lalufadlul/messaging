<template>
  <div class="items-center">
    <TawkHeader></TawkHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'



export default {
  components: {
    TawkHeader: Header,
    
    
  },
  
  
}
</script>

<style lang="scss" scoped>
 @import 'assets/main.scss';
  
</style>
