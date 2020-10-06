export default {
  // Object named payload containing pet and species
  // is passed here
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
  }
}