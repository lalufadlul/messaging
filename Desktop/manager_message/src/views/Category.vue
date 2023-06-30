<template>
    <div class="category-wrapper">
      <div class="category-navigation">
        <div class="navigation">
          <router-link to="/" class="navigation-link">All Categories</router-link> >
          {{ selectedCategory.title }}
        </div>
      </div>
      <div class="category-container">
        <div class="category-description">
          <div class="main-box">
          <Icon :name="selectedCategory.title" alt="Category Icon" />
          <h2>{{ selectedCategory.title }}</h2>
          <p class="main-box-lastUpdate">Last update: {{ selectedCategory.updatedOn }}</p>
        </div>
        <div class="content">
          <Icon name="info"></Icon>
          
          <p>{{ selectedCategory.description }}</p>
        </div>
        </div>
  
        <div class="category-published-article">
          <div class="published-article-list" v-for="item in listArticle" :key="item.id">
            <div class="icon-title">
              <Icon name="file"></Icon>
            </div>
            <div class="title">
              <h3>{{ item.title }}</h3>
              <p class="last-update">Updated {{ item.updatedOn }}</p>
            </div>
            <div class="icon-next">
              <Icon name="next"></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Icon from '../components/Icon.vue';
  import { categoryArticle } from './category_article.js';
  import { category } from './category.js';


  export default {
    name: 'Category',
    components: {
      Icon,
    },
    setup() {
      const listArticle = ref([]);

      const selectedCategory = ref({
      title: '',
      description: '',
      updatedOn: '',
    });

    const router = useRouter(); 

    onMounted(() => {
      const categoryName = router.currentRoute.value.params.title;
      const categoryItem = category.find((cat) => cat.title === categoryName);
      if (categoryItem) {
        selectedCategory.value = {
          title: categoryItem.title,
          description: categoryItem.description,
          updatedOn: categoryItem.updatedOn,
        };
      }
       


      const formattedData = categoryArticle
      .filter((article) => article.status === 'published')
      
      .map((article) => {
        const updatedOnDate = new Date(article.updatedOn);
        const formattedUpdatedOn = `${updatedOnDate.getDate()}/${updatedOnDate.getMonth() + 1}/${updatedOnDate.getFullYear()}`;

        return {
          ...article,
          updatedOn: formattedUpdatedOn,
        };
      });

      listArticle.value = formattedData;
    }) 
    return {
      listArticle,
      selectedCategory,
    };
      
  
      
    },
  };
  </script>
  
  <style lang="scss" scoped>
@import '../assets/variable.scss';

.category-wrapper {
    background: #FAFAFA;
    margin: 30px auto;
    padding: 0 10%;
    padding-bottom: 10px;
    text-transform: capitalize;
    font-family: "Lato";
}

.category-navigation {
    background: #FAFAFA;
    display: flex;
    padding-top: 30px;
    color: #9C9AA6;
   
}

.navigation-link {
  color: #03A84E;
}
.category-container {
    background: #FAFAFA;
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    gap: 15px;
   
}

.category-description {
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
   ;

}

.main-box {
    padding: 20px;
    text-align: center;
    border: solid 0.5px #EEEEEE;
    background: #FFFFFF;
    border-radius: 4px 4px 0px 0px;
    width: 250px;
    font-size: 13px;
}

.main-box-lastUpdate {
  color: #9C9AA6;
    font-size: 14px;
    margin-top: 0em;
    margin-bottom: 0em;
}
.content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #9C9AA6;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: solid 0.5px #EEEEEE;
    background: #FFFFFF;
    border-radius: 0px 0px 4px 4px ;
    width: 250px;
    font-size: 13px;
    height: 130px;
}


.main-box svg{
    height: 80px;
    width: 80px;
  
}


.category-published-article {
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    width: 100%;
    margin-left: 50px;
    margin-right: 100px;
    
}
.published-article-list {
    display: flex;
    border: solid 0.5px #EEEEEE;
    background: #FFFFFF;
    width: 100%;
    height: 80px;
    border-radius: 4px ;
    margin-bottom: 20px;
}

.published-article-list h3{
    margin-bottom: 0.2em;
    margin-top: 1em;
}

.last-update{
    margin-bottom: 0.5em;
    margin-top: 0.8em;
    font-size: 11px;
    color: #9C9AA6;
}

.icon-title{
  display: flex;
  padding-left: 30px;
  justify-content: flex-start; 
  align-items: center;
}
.title{
  padding-left: 30px;
  width: 80%;
}
.icon-next{
  display: flex;
  justify-content: flex-end; 
  align-items: center;
 
}

</style>