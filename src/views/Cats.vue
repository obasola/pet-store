<template>
  <div>
    <PetTable species="cat" :pets="cats" />
  </div>
</template>

<script>
//import cats from "@/data/cats";
import { mapState, mapActions } from "vuex";
import PetTable from "@/components/PetTable";

export default {
  components: {
    PetTable
  },
  data() {
    return {
      fields: ["breed", "name", "age", "gender", "notes"],
      showCatForm: false,
      showCatList: true,
      formData: {
        name: "",
        age: 0,
        breed: "",
        gender: "",
        image: "",
        notes: "",
        weight: 0,
        species: "cats"
      }
    };
  },
  computed: {
    ...mapState(["cats"])
  },

  methods: {
    ...mapActions(["addPet"]),
    handleSubmit() {
      const {
        name,
        age,
        breed,
        gender,
        image,
        notes,
        weight,
        species
      } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          breed,
          age,
          gender,
          image,
          notes,
          weight
        }
      };
      this.addPet(payload);
    },
    toggleCatForm() {
      this.showCatForm = !this.showCatForm;
      this.showCatList = this.toggleCatList();
    },
    toggleCatList() {
      this.showCatList = this.showCatForm ? false : true;
    },
    reset() {
      this.formData = {
        name: "",
        age: 0,
        breed: "",
        gender: "",
        image: "",
        notes: "",
        weight: 0,
        species: null
      };

      this.showCatForm = false;
      this.showCatList = true;
    }
  }
};
</script>

<style lang="css">
.floatRight {
  float: right;
  margin: 0.5em 0 0.5em 0;
}

.floatLeft {
  float: left;
}
</style>
