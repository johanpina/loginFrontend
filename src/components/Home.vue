<template>
    <div class="h_iframe">
        <iframe title="Tablero Nuevo INFI" src="https://app.powerbi.com/view?r=eyJrIjoiZjRkOWVjMWEtNWY0YS00MDFkLWI3N2MtZWExNzI4YjQ0YjA5IiwidCI6ImQ2YTk3NGIwLTg2ZWMtNDkxMi1iNDZjLTBmMGFhZTZhMjE5MCJ9&pageName=ReportSectionb9e1ce68c16476052de7" frameborder="0" allowFullScreen="true"></iframe>
    </div>

</template>

<script>
export default {
    name:"Home",
    data: function(){
        return{
            username: localStorage.getItem("username")
        }

    }
}
</script>

<style>
 body {
    height: 100%;
    width: 100%;
    margin: 0;
}
.greetings{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
 }
 .greetings h1{
    font-size: 50px;
    color: #283747;
 }
 .greetings span{
    color: green;
    font-weight: bold;
 }


.h_iframe iframe {
    width: 100%;
    height: 100%;
}

.h_iframe {
    height: 100%;
    width: 100%;
}
</style>