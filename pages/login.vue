<template class="container mx-auto">
  <div class="container mx-auto">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="flex justify-center mx-auto my-10 w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <img src="~/assets/WorkbookFactoryLogo.png" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form class="text-center container mx-auto flex flex-col gap-2">

      <!-- Email -->
      <ValidationProvider name="email" rules="required" v-slot="{ errors }">
        <input v-model="email" type="text" placeholder="Email" class=" border border-gray-300 py-2">
        <span class="block text-red-400">{{ errors[0] }}</span>
      </ValidationProvider>

      <!-- Password -->
      <ValidationProvider name="password" rules="required" v-slot="{ errors }" class="my-4">
        <input v-model="password" type="password" placeholder="Password" class="border border-gray-300 py-2">
        <span class="block text-red-400">{{ errors[0] }}</span>
      </ValidationProvider>
      
      <div className="flex justify-center my-10">
        <input type="submit" @click="submitLogin" class="bg-blue-800 p-3 text-white cursor-pointer" value="login"/>
      </div>
    </form>

    <!-- Remind Passowrd -->
    <div class="flex flex-col justify-center items-center text-center my-5">
      <!-- <span class="text-blue-800 underline my-2" >Register</span>
      <span class="text-blue-800 underline my-2" >forgot password</span> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Login",
  components: {},
  data() {
    return { email: "", password: "" };
  },
  computed: {
    // ...mapState("auth", ["isAuthenticated", "user"]),
  },
  methods: {
    // ...mapActions("auth", ["login"]),
    async submitLogin(e) {
      e.preventDefault()
      let jsonUserData = { email: this.email, password: this.password };
      try {
        console.log(jsonUserData)

        this.$auth.loginWith("local",{
          data:jsonUserData
        })

        // await this.login(jsonUserData);
        // if (this.isAuthenticated) {
        //   // localStorage.setItem("user",JSON.stringify(response));
        //   if(this.user.authorized){
        //     this.$router.push({name:"no-workbook"});
        //   } else {
        //     this.$router.push("/settings/profile");
        //   }
          
        // }  
      } catch (error) {
        Swall.fire({
          icon:"error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text:error.response.data.message
        })
      }
      // if (loged === 400) Swal.fire("This email is not registered", "", "error");
      // if (loged === 401) Swal.fire("Incorrect password", "", "error");
      // if (loged === 500) {
      //   Swal.fire({
      //     title: "Ups... Something went wrong!!",
      //     text: "Try again",
      //     icon: "error",
      //   });
      // }
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({name:"no-workbook"});
    }
  }
};
</script>
