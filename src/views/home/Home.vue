<!-- src/views/home/Home.vue
<template>
    <div class="home">
      <h1>Home Page</h1>
    </div>
    <h1>Vite + Vue</h1>
    <img :src="Image" width="125" height="125" ref="Image"> <br>
    <p>name: {{ firstname }} {{ lastname }}</p>
    <p>fullname : {{ getfullname().fullname }}</p>
    <p>age: {{ age }}</p>
    <p>address: {{ address }}</p>
    address: <input type="text" v-on:input="setAddres" ><br>
    <a :href="social">vue js</a>
    <ul>
      <li v-for="item in homeby" :key="item">{{ item }}</li>
    </ul>
    
    <button v-on:click="showData">alert</button>
   
    <button @click="increatement(5)">add</button>
    <button @click="decreatement">minus</button>
    <form v-on:submit.prevent="submit">
      <input type="text" v-model="firstname" ref="firstname">
      <input type="text" v-model="lastname" ref="lastname">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      ກົດທີ່ນີ້
    </button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  name: 'App',
  data(){
    return {
      Image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      firstname: '',
      lastname: '',
      social: "https://vuejs.org/",
      homeby: ["John", "Doe","teng","lien","kien"],
      age: 27,
      address: "Viet Nam"
      
    }
  },
  methods: {
    getfullname(){
      return{
        fullname: this.firstname + ' ' + this.lastname

      }
    },
    showData(){
      alert(this.getfullname().fullname)
    },
    increatement(value: number){
      this.age+=value;
    },
    decreatement(){
      this.age--;
    },
    setAddres(event: Event){
      console.log((event.target as HTMLInputElement).value)
    },
    submit(){
       console.log(this.$refs.Image)
      const firstnameInput = this.$refs.firstname as HTMLInputElement;
      const lastnameInput = this.$refs.lastname as HTMLInputElement;

      this.firstname = firstnameInput.value;
      this.lastname = lastnameInput.value;

      console.log(this.firstname);
      console.log(this.lastname);
    }

  }
});
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  

   -->



   <template>
    <Dashboard />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Dashboard from '@/components/Dashboard.vue';
  
  export default defineComponent({
    components: {
      Dashboard,
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  