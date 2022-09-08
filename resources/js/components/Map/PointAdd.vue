<template>
    <div>
        <input type="text" placeholder="Название" v-model="name" class="form-control">
        <p><b>Долгота:</b> {{lat}}</p>
        <p><b>Долгота:</b> {{lon}}</p>
        <hr>
    </div>
</template>

<script>
export default {
    props: ["name", "lat", "lon"],
    name: "PointAdd"
}
</script>

<style scoped>

</style>
