<template>
  <table class="flex gap-2 md:table table-fixed w-full">
      <thead class="table-header-group text-left md:text-center">
        <tr class="md:table-row flex flex-col gap-8">
          <th class="table-cell">{{$t("workbookDetails.table.coach")}} <span class="md:hidden">:</span> </th>
          <th class="table-cell">{{$t("workbookDetails.table.view.view")}} <span class="md:hidden">:</span> </th>
          <th class="table-cell">{{$t("workbookDetails.table.permission")}} <span class="md:hidden">:</span> </th>
        </tr>
      </thead>

      <tbody class="table-row-group">
        <tr class="md:table-row flex flex-col text-left md:text-center gap-5">

          <th class="table-cell overflow-ellipsis w-52 xl:w-auto overflow-hidden whitespace-nowrap">victormanu31611@gmail.com</th>
          <th class="table-cell">
            <select name="view" class="input">
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
</template>

<script>
export default {

}
</script>

<style>

</style>