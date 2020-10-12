<template>
  <div class="container">
    <br />
    <br />
    <h1 v-if="showDogForm">Register Dog for Sale</h1>
    <h1 v-else>Dogs for Sale</h1>
    <div class="section">
      <div class="floatRight">
        <button class="btn btn-primary floatRight" @click="toggleDogForm()">New Dog</button>
      </div>
      <b-form @submit="handleSubmit" v-if="showDogForm">
        <div class="box">
          <label for="input-1">Name:</label>
          <b-form-input id="input-1" v-model="formData.name" required placeholder="Enter name"></b-form-input>

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
        </div>

        <div class="floatRight">
          <b-button type="submit" @click="handleSubmit()" variant="primary">Submit</b-button>
          <b-button type="reset" @click="reset()" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>

    <div class="section" v-if="showDogList">
      <b-table striped hover :items="dogs" :fields="fields">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
//import dogs from "@/data/dogs";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    index: Number
  },
  data() {
    return {
      fields: ["breed", "name", "age", "gender", "notes"],
      showDogForm: false,
      showDogList: true,
      formData: {
        name: "",
        age: 0,
        breed: "",
        gender: "",
        image: "",
        notes: "",
        weight: 0,
        species: "dogs"
      }
    };
  },
  computed: {
    ...mapState(["dogs"])
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
    toggleDogForm() {
      this.showDogForm = !this.showDogForm;
      this.showDogList = this.toggleDogList();
    },
    toggleDogList() {
      this.showDogList = this.showDogForm ? false : true;
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

      this.showDogForm = false;
      this.showDogList = true;
    }
  }
};
</script>

<style lang="css">
.box {
  width: 320;
}

.floatRight {
  float: right;
  margin: 0.5em 0 0.5em 0;
}

.floatLeft {
  float: left;
}
</style>
