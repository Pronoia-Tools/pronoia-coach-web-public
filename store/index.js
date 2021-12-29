export const state = () => ({
  workbooks: []
})

export const mutations = {
  SET_WORKBOOKS(state,workbooks){
    state.workbooks = workbooks
  }
}