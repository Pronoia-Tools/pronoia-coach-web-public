<template>
  <div class="flex h-48 pr-10">
    <img v-if="image" :src="image" :alt="title" class="w-36 object-center object-cover relative z-10">
    <img v-else src="~/assets/no-image.png" :alt="title" class="w-36 object-center object-fill relative z-10">
    <div class="flex-grow flex flex-col px-4">
      <div class="flex flex-col gap-2 flex-grow">
        <p><span>{{$t("workbook.title")}}: </span>{{title}}</p>
        <p><span>{{$t("workbook.description")}}: </span>{{shortDescription}}</p>
      </div>
      <div class="flex justify-end items-center">
        <div class="cursor-pointer group ">
          <p class=" text-myGreen inline group-hover:text-opacity-50 transition duration-300">{{$t("workbook.details")}}</p>
          <fa-icon icon="arrow-circle-right" class="ml-2 text-myLightBlue group-hover:text-opacity-50 transition duration-300"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
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
      return `${this.description.substring(1,250)} [...]`
    }
  }
}
</script>

<style>

</style>