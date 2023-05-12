<template>
    <div class="register" v-if="register">
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
</template>

<script>
export default{
    data(){
        return{
            register: false,
            register: true
        }
    },
    methods:{
        changeComponent(){
            this.login = true;
        }
    }
}
</script>
<style lang="scss">
@media only screen and (max-width: 480px) {
    .register{
        .effect{
            position: absolute;
        }
    .form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
        padding-top: 7rem;
 
        align-items: center;
        input{
            width: 264px;
            height: 52px;
            color: black;
            font-size: 15px;
            border: 1px solid #DADADA;
            border-radius: 6px;
            padding: 0.8rem;
            outline: none;
        }
        button{
            width: 264px;
            height: 49px;
            border-radius: 24px;
            background: #6AC0BE;
            color: white;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
        }
        p{
            font-size: 14px;
            color: #6AC0BE;
            margin-top: -1rem;
        }
    }
}
}
</style>