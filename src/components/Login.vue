<template>
    <div class="login" v-if="login">
        <img class="effect" src="../assets/icons/effect.svg" alt="">
        <div class="form">
            <img src="../assets/icons/Logo.svg" alt="">
            <input type="text" placeholder="Электронная почта">
            <input type="text" placeholder="Пароль">
            <button>Войти</button>
            <p @click="changeComponent">
                Зарегистрироваться
            </p>
        </div>
    </div>
    <div class="register" v-else>
        <img class="effect" src="../assets/icons/effect.svg" alt="">
        <div class="form">
            <img src="../assets/icons/Logo.svg" alt="">
            <input type="text" placeholder="ФИО">
            <input type="text" placeholder="Электронная почта">
            <input type="text" placeholder="Пароль">
            <button>Зарегистрироваться</button>
            <p @click="changeComponent">
                Войти
            </p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            login: true
        }
    },
    methods:{
        changeComponent(){
            this.login = !this.login
        }
    }
}
</script>
<style lang="scss">
@media only screen and (max-width: 480px) {
@import '../css/mixins.scss';
    .login{
        @include form
        }
.register{
         @include form
        }
}
</style>