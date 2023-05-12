<template>
  <q-page-container>
      <q-page>
        <div class="navbar">
            <img class="navbar__logo" src="../assets/icons/logoFrame.svg" alt="">
            <img class="navbar__login" src="../assets/icons/loginIcon.svg" alt="">
        </div>
        <div class="content">
          <div class="content__title">
              <h1>Вид спорта</h1>
          </div>
          <div class="content__departments">
              <div :class="{active: true}">
                  <img src="../assets/icons/all.svg" alt="">
                  <p>Все</p>
              </div>
              <div>
                  <img src="../assets/icons/football.svg" alt="">
                  <p>Футбол</p>
              </div>
              <div>
                  <img src="../assets/icons/basketball.svg" alt="">
                  <p>Баскетбол</p>
              </div>
              <div>
                  <img src="../assets/icons/all.svg" alt="">
                  <p>Теннис</p>
              </div>
              <div>
                  <img src="../assets/icons/all.svg" alt="">
                  <p>Волейбол</p>
              </div>
          </div>
          <div class="content__cards">
              <div @click="goInside(card.id)" :style="{ 'background-image': 'url(' + card.image + ')' }" class="card" v-for="card in cards" :key="card">
                <div class="content">
                  <h2>{{ card.title }}</h2>
                  <div class="address">
                    <img src="../assets/icons/location.svg" alt="">
                    <p>{{ card.address }}</p>
                  </div>
                  <div class="star">
                    <img src="../assets/icons/star.svg" alt="">
                    <p>0.0 </p>
                    <span> |  0 отзывы</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
  </q-page-container>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'IndexPage',
  data(){
    return{
      cards: null
    }
  },
  methods: {
    goInside(id){
    this.$router.push({name: 'places', params: {id: id}})
    }
  },
  created(){
 axios.get('http://localhost:3000/football').then((res) => {
 this.cards = res.data
 console.log(res.data)
 })
}})
</script>
<style lang="scss">

</style>