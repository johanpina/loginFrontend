<template>
  
  <div class="App">
    
    <div class="header">

      <img src="./assets/Logo_blanco.png" width="150" height="150"/>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
        <button v-if="is_auth" v-on:click="loadAccount">Cuenta</button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view 
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp">
      </router-view>
    </div>
    
  </div>
</template>
 
<script>
export default{
  name:'App',

  data:function(){
    return{
      is_auth: false
    }
  },
  methods:{
    verifyAuth: function(){
      this.is_auth = localStorage.getItem("isAuth") || false;
      if(this.is_auth==false)
        this.$router.push({name:'logIn'})
      else
        this.$router.push({name:"home"})
    },
    loadLogIn: function(){
       this.$router.push({name:'logIn'}) 
    },
    loadSignUp: function(){
       this.$router.push({name:'signUp'}) 
    },
    loadHome: function(){
       this.$router.push({name:'home'}) 
    },
    loadAccount: function(){
       this.$router.push({name:'account'}) 
    },
    logOut: function(){
       localStorage.clear();
       alert("Sesión cerrada");
       this.verifyAuth();
    },
    completedLogIn: function(data){
      localStorage.setItem("token_access",data.token_access);
      localStorage.setItem("token_refresh",data.token_refresh);
      localStorage.setItem("username",data.username);
      localStorage.setItem("isAuth",true);
      //alert("El inicio de sesión fue correcto");
      this.verifyAuth();
    },
    completedSignUp: function(data){
      alert("El registro fue exitoso");
      this.completedLogIn(data)  
    },
  },
  created:function(){    
    this.verifyAuth()
  }
}
</script>

<style>
 body{
 margin: 0 0 0 0;
 }
 .header{
 margin: 0%;
 padding: 0;
 width: 100%;
 height: 4vh;
 min-height: 70px;
 background-color: #042143 ;
 color:#E5E7E9 ;
 display: flex;
justify-content: space-between;
 align-items: center;
}
 .header h1 {
 width: 20%;
 text-align: center;
}
 .header nav {
 height: 100%;
 width: 20%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 font-size: 20px;
}
 .header nav button{
 color: #E5E7E9;
 background: #042143;
 border: 1px solid #E5E7E9;
 border-radius: 5px;
 padding: 10px 20px;
}
 .header nav button:hover{
 color: #042143;
 background: #5384e3;
 border: 1px solid #5384e3;
}
 .main-component{
 height: 95vh;
 margin: 0%;
 padding: 0%;
 background: #FDFEFE;
}

</style>
