<template>
  <div class="flex justify-between items-center border border-black py-2 pl-12 px-4 relative z-50">
    <!-- LOGO -->
    <div>
      <img src="~/assets/WorkbookFactoryLogo.png" class="w-full h-10 transform scale-150" alt="logo navbar">
    </div>

    <!-- LINKS -->
    <div  class="flex flex-col flex-grow gap-3 justify-start items-center absolute top-0 w-1/2 h-screen transition-all duration-500 bg-black bg-opacity-75 text-white
    md:justify-end md:gap-6 md:relative md:h-auto md:w-auto md:flex-row md:left-0 md:bg-opacity-0 md:text-black md:mr-5"
    :class="isOpen">
      <fa-icon icon="times" class=" self-end m-5 text-xl md:hidden" @click="toggleOpenMovileMenu"/>
      <nuxt-link to="/author">Author</nuxt-link>
      <nuxt-link to="/library">Library</nuxt-link>
      <fa-icon icon="question-circle" class=" text-2xl"/>
      <div class="relative">
        <div class="bg-blue-500 w-4 h-4 flex justify-center items-center text-center text-white rounded-full border border-black text-xs absolute -top-2 -right-2">2</div>
        <fa-icon icon="shopping-cart" class=" text-2xl"/>
      </div>
      <fa-icon icon="book-open" class=" text-2xl"/>
      <fa-icon icon="bell" class=" text-2xl"/>
    </div>

    <!-- USER -->
    <div class="flex gap-1 items-center">
      
      <fa-icon icon="bars" @click="toggleOpenMovileMenu" class="cursor-pointer md:hidden"/>
      
      <div class="flex gap-2 justify-center items-center" v-if="$auth.loggedIn">
        <span>{{$auth.user.firsName}} {{$auth.user.secondName}}</span>
        <div class="bg-gray-400 p-2 rounded-full w-8 h-8 flex justify-center items-center">
          <fa-icon icon="user"/>
        </div>
        <ButtonGroupVue :alignMenuY="'left'">
          <!-- <ButtonAppVue>
            <span>{{ $t(`navbar.settings`) }}</span> 
          </ButtonAppVue> -->
          <ButtonAppVue>
            <span @click="logoutHandler">{{ $t(`navbar.logout`) }}</span>
          </ButtonAppVue>
        </ButtonGroupVue>
      </div>

      <div class="flex gap-2" v-else>
        <ButoomCustomVue>
          <nuxt-link to="/login">{{ $t(`navbar.login`) }}</nuxt-link>
        </ButoomCustomVue>
        <!-- <ButoomCustomVue>
          <nuxt-link to="/register">{{ $t(`navbar.register`) }}</nuxt-link>
        </ButoomCustomVue> -->
      </div>


    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapState } from 'vuex'
import ButoomCustomVue from './ButoomCustom.vue'
import ButtonGroupVue from './ButtonGroup.vue'
import ButtonAppVue from './ButtonApp.vue'


export default {
  name: 'Navbar',
  components: {
    ButoomCustomVue,ButtonGroupVue,ButtonAppVue
  },

  data () {
    return {
      openUserMenu:false,
      openMovilMenu:false,
      // locales:process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
    }
  },
  methods:{
    // ...mapMutations("auth",["login","logout"]),
    toggleOpenUserMenu(){
      this.openUserMenu = !this.openUserMenu
    },
    toggleOpenMovileMenu(){
      this.openMovilMenu = !this.openMovilMenu
    },
    // switchLocale(locale){
    //   if (this.$i18n.locale !== locale) {
    //     this.$i18n.locale = locale
    //   }
    // },
    logoutHandler(){
      this.$auth.logout();
    }
  },
  computed:{
    // ...mapGetters("auth",["getUserAuth"]),
    // ...mapState("auth", ["isAuthenticated", "user"]),
    // ...mapActions("auth", ["logout"]),
    isOpen(){
      return this.openMovilMenu?"left-0":"-left-full"
    }
  },
  // mounted() {
  //   console.log("mounted")
  //   if (this.isAuthenticated) {
  //     const userData = JSON.parse(localStorage.getItem("user"))
  //     console.log("mounted",userData)
  //     this.login(userData);
  //   }
  // },

}
</script>

<style>
</style>