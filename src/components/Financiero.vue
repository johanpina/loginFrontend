<template>
   <div class="h_iframe">
        <iframe title="Tablero indicadores INFI" src="https://app.powerbi.com/view?r=eyJrIjoiZDRhYWJkNTQtM2QzZC00NGRhLTliNWEtYTQ4ZThhZmI2MDhmIiwidCI6ImQ2YTk3NGIwLTg2ZWMtNDkxMi1iNDZjLTBmMGFhZTZhMjE5MCJ9&pageName=ReportSectiona6b42dfc18b40487a110" frameborder="0" allowFullScreen="true"></iframe>
    </div>
</template>
<script>

import axios from 'axios';
import jwt_decode from 'jwt-decode';
export default {
    name: "financiero",
    data: function(){
     return{
        name:"",
        role:"",
        email:"",
        loaded:false,
     }   
    },
    methods:{
        getData:  async function(){
            console.log(localStorage.getItem("token_access"))
            if(localStorage.getItem("token_access")===null || localStorage.getItem("token_refresh")===null){
                this.$emit('logOut');
                return;
            }
            await this.verifyToken();
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();
            
            axios.get(`http://192.168.130.117:8000/user/${userId}/`,
            {headers:{'Authorization':`Bearer ${token}`}})
            .then((result) =>{
                this.name = result.data.name;
                this.email = result.data.email;
                this.role = result.data.role;
                this.loaded = true;
            })
            .catch(()=>{
                this.$emit('logOut')
            })
        },
        verifyToken: function(){
            return axios.post("http://192.168.130.117:8000/refresh/",
            {refresh: localStorage.getItem("token_refresh")},
            {headers:{}})
            .then((result) => {
                localStorage.setItem("token_access",result.data.access)    
            })
            .catch(()=>{
                this.$emit('logOut');
            })
        }
    },
    created: async function(){
        this.getData();
    }    
}
</script>

<style>
.information{
    margin: 0;
    padding: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
 .information h1{
    font-size: 60px;
    color: #0f1316;
 }
 .information h2{
    font-size: 40px;
    color: #283747;
 }
 .information span{
    color: blue;
    font-weight: bold;
 }

</style>