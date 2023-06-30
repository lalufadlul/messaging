<template>
    <div class="wrapper">
      <div class="container">
        <button type="button" class="box" v-for="item in list" :key="item.id" @click="onPostClick(item.title)">
          <Icon class="icon" :name="item.title"></Icon>
          <h3>{{ item.title }}</h3>
          <p class="total-article">{{ item.totalArticle }}</p>
          <p class="last-update">Last update: {{ item.updatedOn }}</p>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
 
  import Icon from '../components/Icon.vue';
  import { useRouter } from 'vue-router';
  import { category } from './category.js';
  
  export default {
    name: 'Home',
    components: {
      Icon,
    },
    setup() {
      const list = ref([]);

      const router = useRouter();
  
      const onPostClick = (title) => {
      router.push({
        name: 'Category',
        params: { title },
      });
    };
  
      const formattedData = category
      .filter((category) => category.enabled === true)
      .sort((a, b) => a.order - b.order)
      .map((category) => {
        const updatedOnDate = new Date(category.updatedOn);
        const formattedUpdatedOn = `${updatedOnDate.getDate()}/${updatedOnDate.getMonth() + 1}/${updatedOnDate.getFullYear()}`;

        return {
          ...category,
          updatedOn: formattedUpdatedOn,
        };
      });

    list.value = formattedData;

    return {
      list,
      onPostClick,
    };
    },
  };
  </script>

<style lang="scss" scoped>
@import '../assets/variable.scss';

.wrapper {
    background: #FAFAFA;
    margin: 30px auto;
    padding: 0 10%;
    padding-bottom: 10px;
    text-transform: capitalize;
}
.container {
    display: grid;
    padding-top: 50px;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

}
.container button {
    border: #FAFAFA;;
}
.box {
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.icon{
    height: 70px;
    width: 70px;
  
}
.box h3 {
    color: #373737;
    margin-top: 0.5em;
    margin-bottom: 1em;
    font-size: 20px;
    font-family: "Lato";
}
.total-article{
    color: #03A84E;
    font-size: 14px;
    margin-top: 0em;
    margin-bottom: 0em;
    font-family: "Lato";
}
.last-update{
    color: #beb9b9;
    margin-top: 0em;
    margin-bottom: 0em;
    font-size: 14px;
    font-family: "Lato";
}
.box:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}
@media (max-width:770px) {  .wrapper{
    padding: 20px;
  }
}
</style>