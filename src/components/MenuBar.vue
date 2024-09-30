<template>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#profile">Profile</a></li>
    </ul>
</template>



<script>
export default {
    name: 'MenuBar',
    props: {
        msg: String
    }
}
</script>


<style scoped>
/* ここに CSS を記述 */
ul {
    list-style-type: none;
    margin: 0;

    overflow: hidden;
    background-color: #bd9acd;
    display: flex;
}

li {
    float: right;
    padding-right: 10%;
}
</style>