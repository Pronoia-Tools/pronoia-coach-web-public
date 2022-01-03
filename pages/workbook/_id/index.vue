<template>
  <div class="container w-11/12 mx-auto md:mx-auto mt-5 mb-10">
  
    <fa-icon icon="book-open" class="text-title text-myLightGreen "/>
    <h1 class="text-title inline-block text-myLightGreen ">{{ $t(`workbookDetails.pageTitle`) }}</h1>
    <h2 class=" text-lgText font-bold">{{$t("workbookDetails.subtitle")}}</h2>
    
    <div class="grid grid-cols-1 w-full md:grid-cols-10 mt-10">
      <!-- workbook -->
      <div class="flex justify-center md:justify-start md:col-span-3 mb-5">
        <div>
          <img v-if="currentVideo && currentVideo.image.length>0" :src="currentVideo.image" alt="image" class="h-80 w-64 object-fit mb-12">
          <img v-else src="~/assets/no-image.png" alt="image" class="h-80 w-64 object-fit mb-12">
          <div class="grid grid-cols-2">
            <ButoomCustom>{{$t("input.open")}}</ButoomCustom>
            <ButoomCustom :transparent="true" class="w-full">{{$t("input.sendInvite")}}</ButoomCustom>
          </div>
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
    <div class="flex justify-center my-10">
      <span class="w-28 flex-shrink-0 pr-5 font-bold ">{{$t("workbookDetails.description")}}:</span>
      <p class="block flex-grow">{{currentVideo.description}}</p>
    </div>

    <h2 class="text-lgText font-bold mt-5">{{$t("workbookDetails.Access")}}</h2>
    <!-- TABLE -->
    <table class="gap-2 table table-fixed w-full">
      <thead class="table-header-group text-left md:text-center">
        <tr class="table-row">
          <th class="table-cell">{{$t("workbookDetails.table.coach")}} </th>
          <th class="table-cell">{{$t("workbookDetails.table.view.view")}} </th>
          <th class="table-cell">{{$t("workbookDetails.table.permission")}} </th>
        </tr>
      </thead>

      <tbody class="table-row-group">
        <tr class="table-row text-left md:text-center gap-5">

          <th class="table-cell overflow-ellipsis w-52 xl:w-auto overflow-hidden whitespace-nowrap">victormanu31611@gmail.com</th>
          <th class="table-cell">
            <select name="view" class="input w-full md:w-auto">
              <option value="workbook" selected>{{$t("workbookDetails.table.view.options.wholeWorkbook")}}</option>
              <option value="question">{{$t("workbookDetails.table.view.options.questions")}}</option>
            </select>
          </th>
          <th class="table-cell">
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
              <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButoomCustom from '~/components/ButoomCustom.vue'
import { mapGetters } from "vuex";
export default {
  components:{
    ButoomCustom,
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