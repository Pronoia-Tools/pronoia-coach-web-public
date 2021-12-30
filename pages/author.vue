<template>
  <div class="container w-11/12 mx-auto md:mx-auto my-5">
    <!-- TITLE -->
    <h1 class="text-lgText">{{ $t(`author.title`) }}</h1>
    
    <!-- SEARCH BAR -->
    <div class="flex flex-row-reverse mt-4 mb-2">
      <ButoomCustom>{{$t("input.search")}}</ButoomCustom>
      <div class="relative">
        <fa-icon icon="search" class="absolute left-2 top-4"/>
        <input type="text" class="input-icon" :placeholder="$t('author.inputPlaceholder')">
      </div>
    </div>

    <div class="border border-black min-h-screen pl-14 pr-5 py-14 flex flex-col">
      <!-- WORKBOOKS -->
      <div class="grid grid-cols-2 gap-2 flex-grow ">
        <WorkbookDetails 
          v-for="workbook in $store.state.workbooks"
          :key="workbook.id"
          :title="workbook.title" 
          :image="workbook.image"
          :author="workbook.author"
          :language="workbook.language"
          :description="workbook.description"
          :price="workbook.price" 
        />
      </div>

      <!-- PAGINATION -->
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import ButoomCustom from '~/components/ButoomCustom.vue';
import Pagination from '~/components/Pagination.vue';
import WorkbookDetails from '~/components/WorkbookDetails.vue';

export default {
  name: "IndexPage",
  components: { 
    WorkbookDetails,
    ButoomCustom,
    Pagination
},
  data() {
    return {
      searchAuthor: "",
      searchTitle: "",
      searchCategory: "",
      searchPrice1: "",
      searchPrice2: "",
      searchlanguage: "",
      arrangeBy: "",
      print: false,
    };
  },
  async fetch({$axios,store}){
    try {
      let {data} = await $axios.get("/workbook/public")
      console.log(data)


      store.commit("SET_WORKBOOKS",data)
    } catch (error) {
      
    }
  },
  computed: {
    ...mapGetters(["getWorkbooks", "getWorkBookFilter"]),
    workBooksList() {
      if (this.print) {
        return this.getWorkBookFilter(
          this.searchTitle,
          this.searchAuthor,
          this.searchlanguage,
          this.searchCategory,
          this.searchPrice1,
          this.searchPrice2,
          this.arrangeBy
        );
      } else {
        return [
          ...this.getWorkbooks
        ];
      }
    },
  },
  methods: {
  },
  created() {
  },
};
</script>
