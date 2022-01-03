export const state = () => ({
  workbooks: [],
  currenWorkbook:{}
})

export const mutations = {
  SET_WORKBOOKS(state,workbooks){
    state.workbooks = workbooks
  },
  SET_CURRENT_WORKBOOK(state,workbook){
    state.currenWorkbook = workbook
  }
}