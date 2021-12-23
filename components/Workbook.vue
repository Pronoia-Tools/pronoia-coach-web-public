<template>
  <div class="bg-red-500 relative group">
    <img :src="image" :alt="title" class="w-36 h-48 object-center object-cover relative z-10">
    <div class="absolute invisible w-64 opacity-0 bg-white border-2 border-gray-300 rounded-md top-10 left-8 py-4 px-5 z-40 group-hover:visible group-hover:opacity-100 transition-all duration-500 cursor-default">
      <div class="text-sm flex flex-col gap-2">
        <p><span>{{$t("workbook.title")}}: </span>{{title}}</p>
        <p><span>{{$t("workbook.author")}}: </span>{{author.firstName}} {{author.lastName}}</p>
        <p><span>{{$t("workbook.language")}}: </span>{{language}}</p>
        <p><span>{{$t("workbook.description")}}: </span>{{shortDescription}}</p>
        <p><span>{{$t("workbook.price")}}: </span>${{price}}</p>
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
      return `${this.description.substring(1,80)} [...]`
    }
  }
}
</script>

<style>

</style>