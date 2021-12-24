<template>
  <div class="container w-10/12 mx-auto md:mx-auto my-5">
    <h1 class="text-lgText">{{ $t(`index.title`) }}</h1>
    <div class="border border-black h-full">
      <div class="border-b border-black px-5">
        <h2 class="text-lgText my-5">
          <fa-icon icon="filter"/>
          {{ $t(`index.filter.subtitle`) }}
        </h2>
        <div class="flex md:flex-row flex-col justify-around gap-5">
          <div class="flex flex-col">
            <div class="flex justify-end my-5">
              <label class="mr-4">
                {{ $t(`index.filter.title`) }}</label
              >
              <input
                class="border-2 border-border rounded-md w-full "
                v-model="searchTitle"
              />
            </div>
            <div class="flex justify-end">
              <label class="mr-4">
                {{ $t(`index.filter.author`) }}</label
              >
              <input
                name="author"
                v-model="searchAuthor"
                class="border-2 border-border rounded-md w-full "
              />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-end my-5 items-center">
              <label class="mr-4">
                {{ $t(`index.filter.language`) }}</label
              >

              <select
                v-model="searchlanguage"
                class="border-2 border-border rounded-md w-full  px-7 py-1"
                name="language"
                form="filterForm"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option value="Spanish">{{$t("language.spanish")}}</option>
                <option value="English">{{$t("language.english")}}</option>
              </select>
            </div>
            <div class="flex justify-end items-center">
              <label class="mr-4">
                {{ $t(`index.filter.category`) }}</label
              >
              <select
                class="border-2 border-border rounded-md w-full px-7 py-1"
                name="category"
                form="filterForm"
                v-model="searchCategory"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option value="Biography">{{$t("workbook.categories.novel")}}</option>
                <option value="Novel">{{$t("workbook.categories.biography")}}</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-end my-5">
              <label class="mr-4">
                {{ $t(`index.filter.price`) }}</label
              >
              <input
                v-model="searchPrice1"
                type="number"
                min="1"
                max="1000"
                class="border-2 border-border rounded-md w-full  px-2  mx-2"
              />
              -
              <input
                v-model="searchPrice2"
                type="number"
                min="1"
                max="1000"
                class="border-2 border-border rounded-md w-full px-2  mx-2"
              />
            </div>
            <div class="flex justify-end items-center">
              <label class="mr-4">
                {{ $t(`index.filter.arrange`) }}</label
              >
              <select
                v-model="arrangeBy"
                class="border-2 border-border rounded-md w-full px-7 py-1"
                name="arrangeBy"
                form="filterForm"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option value="Newest">{{$t("workbook.arrange.release")}}</option>
                <option value="Popular">{{$t("workbook.arrange.popular")}}</option>
                <option value="Cheapest">{{$t("workbook.arrange.price")}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-end my-10 mx-5">
          <button
            @click="print = true"
            class="text-darkLogo border border-darkLogo py-3 px-8 mx-5"
          >
            {{ $t(`index.filter.apply`) }}
          </button>
          <button
            @click="print = false"
            class="bg-darkLogo text-white py-3 px-8"
          >
            {{ $t(`input.cancel`) }}
          </button>
        </div>
      </div>
      <div
        class="grid md:grid-cols-4 grid-cols-2 container mx-auto"
      >
        <div
          v-for="workbook in workBooksList"
          :key="workbook.id"
          class="flex justify-center items-center m-10 w-32 border border-transparent hover:border-gray-500 transition-all cursor-pointer"
        >
          <Workbook 
            :title="workbook.title" 
            :image="workbook.image"
            :author="workbook.author"
            :language="workbook.language"
            :description="workbook.description"
            :price="workbook.price" 
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Workbook from '~/components/Workbook.vue';

export default {
  name: "IndexPage",
  components: { 
    Workbook
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
