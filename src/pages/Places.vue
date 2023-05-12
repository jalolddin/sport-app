<template>
    <div class="places">
        <div>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            info: this.$route.params.id,
            title: null
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/football/${this.info}`).then((res) => {
            this.title = res.data.title
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>