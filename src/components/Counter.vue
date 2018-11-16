<template>
    <div class="col-md-6 col-md-offset3 well">
        <input class="form-control text-center" type="text" v-model="total" />
    
        <hr />

        <button class="btn btn-block btn-info" @click="increment()">
            Incrementar
        </button> 
        <h4 class="text-center">{{ count }}</h4>
        <button class="btn btn-block btn-info" @click="decrement()">
            Decrementar
        </button> 
    </div>
</template>

<script>
//
import {mapGetters} from 'vuex'

export default {
    name: 'counter',
    data () {
        return {
            total: 1
        }
    },
    methods: {
        increment () {
            this.$store.commit('increment', parseInt(this.total))
        },
        decrement () {
            this.$store.commit('decrement', parseInt(this.total))
        }
    },
    computed: {
        // Propiedades computadas
        /*count () {
            //return this.$store.state.count
            // Usando el gettter
            return this.$store.getters.count
        }*/
        ...mapGetters([
            'count'
        ])
    }
}
</script>

