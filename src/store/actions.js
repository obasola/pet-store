export default {
  // addPet: (context, pet) => {
  // context.commit('appendPet, pet');
  //
  // The context only has commit object of interest to us.
  //  commit object comes from VueX and pet is
  //  custom param passed to function
  //
  addPet: ({ commit }, pet) => {  // commit pulled off context
    // triggers a mutation call
    commit('appendPet', pet);
  }
}