<template>
    <div class="col-md-6 col-md-offset3 well">
        <input class="form-control text-center" type="text" v-model="total" />
    
        <hr />

        <button class="btn btn-block btn-info" @click="increment()">
            Incrementar
        </button> 
        <h4 class="text-center">{{ count }}</h4>
        <button class="btn btn-block btn-info" @click="decrementar()">
            Decrementar
        </button> 
    </div>
</template>

<script>
export default {
    
}
</script>

