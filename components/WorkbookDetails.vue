<template>
  <div class="flex md:h-56">
    <div class="w-36 h-full flex-shrink-0 flex flex-col">  
      <img v-if="image" :src="image" :alt="title" class="w-full flex-grow object-center object-cover relative z-10">
      <img v-else src="~/assets/no-image.png" :alt="title" class="w-full flex-grow object-center object-fill relative z-10">
      <nuxt-link :to="`/workbook/${id}`" class=" text-center text-myGreen inline group-hover:text-opacity-50 transition duration-300">{{$t("workbook.details")}}</nuxt-link>   
    </div>
    
    <div class="flex-grow flex flex-col px-4 ">
      <div class="flex flex-col gap-2 ">
        <p><span>{{$t("workbook.title")}}: </span>{{title}}</p>
        <p><span>{{$t("workbook.description")}}: </span>{{shortDescription}}</p>
      </div>

      <div class="flex justify-end items-center ">
        <div class="cursor-pointer group " @click="$router.push(`/workbook/${id}`)">
          <nuxt-link :to="`/workbook/${id}`" class=" text-myGreen inline group-hover:text-opacity-50 transition duration-300">{{$t("workbook.details")}}</nuxt-link>
          <fa-icon icon="arrow-circle-right" class="ml-2 text-myLightBlue group-hover:text-opacity-50 transition duration-300"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type:Number,
      required:true
    },
    image:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    author:{
      type:Object,
      required:true
    },
    language:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
  },
  computed:{
    shortDescription(){
      return `${this.description.substring(1,200)} [...]`
    }
  }
}
</script>

<style>

</style>