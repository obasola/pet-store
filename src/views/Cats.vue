<template>
  <div class="container">
    <br />
    <br />
    <h1 v-if="showCatForm">Register Cat for Sale</h1>
    <h1 v-else>Cats for Sale</h1>
    <div class="section">
      <div class="floatRight">
        <button class="btn btn-primary floatRight" @click="toggleCatForm()">New Cat</button>
      </div>
      <b-form @submit="handleSubmit" v-if="showCatForm">
        <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
          <b-form-input id="input-1" v-model="formData.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
          <b-form-input
            id="input-3"
            type="number"
            v-model="formData.age"
            required
            placeholder="Enter age"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="formData.gender"
            :options="['Female', 'Male']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Breed:" label-for="input-5">
          <b-form-input
            id="input-5"
            type="string"
            v-model="formData.breed"
            required
            placeholder="Enter breed"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Pet's Picture:" label-for="input-8">
          <b-form-input
            id="input-6"
            type="string"
            v-model="formData.image"
            required
            placeholder="Enter image name"
          ></b-form-input>
        </b-form-group>

        <div class="floatRight">
          <b-button type="submit" @click="handleSubmit()" variant="primary">Submit</b-button>
          <b-button type="reset" @click="reset()" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>

    <div class="section" v-if="showCatList">
      <b-table striped hover :items="cats" :fields="fields">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
//import cats from "@/data/cats";
import { mapState, mapActions } from "vuex";

export default {
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
