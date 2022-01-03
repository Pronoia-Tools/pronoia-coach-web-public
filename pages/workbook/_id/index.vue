<template>
  <div class="container w-11/12 mx-auto md:mx-auto my-10">
  
    <fa-icon icon="book-open" class=" text-4xl text-myLightGreen"/>
    <h1 class="text-lgText inline-block text-myLightGreen">{{ $t(`workbookDetails.pageTitle`) }}</h1>
    <h2 class=" text-2xl font-bold">{{$t("workbookDetails.subtitle")}}</h2>
    
    <div class="grid grid-cols-1 w-full md:grid-cols-10">
      <!-- workbook -->
      <div class="flex justify-center md:justify-start md:col-span-3 mb-5">
        <div>
          <img v-if="currentVideo && currentVideo.image.length>0" :src="currentVideo.image" alt="image" class="h-80 w-52 object-fit mb-12">
          <img v-else src="~/assets/no-image.png" alt="image" class="h-80 w-52 object-fit mb-12">
          <ButoomCustom>{{$t("input.open")}}</ButoomCustom>
          <ButoomCustom :transparent="true">{{$t("input.sendInvite")}}</ButoomCustom>
        </div>
      </div>
      <!-- details -->
      <div class="flex flex-col items-center justify-center md:justify-between md:items-start gap-2 md:col-span-7">
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.title")}}:</span>
          <p class="block flex-grow">{{currentVideo.title}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.by")}}:</span>
          <p class="block flex-grow">{{currentVideo.author.firstName}} {{currentVideo.author.lastName}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.edition")}}:</span>
          <p class="block flex-grow">{{currentVideo.edition}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.language")}}:</span>
          <p class="block flex-grow">{{currentVideo.language}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.published")}}:</span>
          <p class="block flex-grow">{{currentVideo.published}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.price")}}:</span>
          <p class="block flex-grow">{{currentVideo.price}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.tags")}}:</span>
          <p class="block flex-grow">{{currentVideo.tags}}</p>
        </div>
        <div class="flex w-full">
          <span class="w-36 text-left md:text-right flex-shrink-0 pr-5 font-bold">{{$t("workbookDetails.sharedWith")}}:</span>
          <p class="block flex-grow">{{currentVideo.shared}}</p>
        </div>
      </div>
      
    </div>
    <div class="flex justify-center">
      <span class="w-28 flex-shrink-0 pr-5 font-bold ">{{$t("workbookDetails.description")}}:</span>
      <p class="block flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, porro mollitia ipsum iusto dolorum quam! Numquam aliquam aut cum, quibusdam eius magnam nostrum nihil voluptates tempora maiores earum praesentium pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla officia assumenda, pariatur harum perspiciatis aspernatur, dolor consectetur id veritatis maxime nihil cumque labore repellendus atque omnis modi fugiat rerum!.</p>
    </div>

    <h2 class="text-lgText">{{$t("workbookDetails.Access")}}</h2>
    <TableCustom/>
  </div>
</template>

<script>
import ButoomCustom from '~/components/ButoomCustom.vue'
import TableCustom from '~/components/TableCustom.vue'
import { mapGetters } from "vuex";
export default {
  components:{
    ButoomCustom,TableCustom
  },
  computed:{
    ...mapGetters(['getWorkbookById']),
    currentVideo(){
      return this.getWorkbookById(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>