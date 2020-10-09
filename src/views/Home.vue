<template>
<div class="container">
    <br />
    <br />
    <h1>Adopt a new best friend</h1>
    {{ getAllCats.length }}
    {{countAnimals}}
    <button class="btn btn-primary floatRight" @click="togglePetForm()">New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
        <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
            <b-form-input id="input-1" v-model="formData.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Species:" label-for="input-2">
            <b-form-select id="input-2" v-model="formData.species" :options="options" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
            <b-form-input id="input-3" type="number" v-model="formData.age" required placeholder="Enter age"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Pet's Weight:" label-for="input-7">
            <b-form-input id="input-7" type="number" v-model="formData.weight" required placeholder="Enter weight"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
            <b-form-select id="input-4" v-model="formData.gender" :options="['Female', 'Male']" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Breed:" label-for="input-5">
            <b-form-input id="input-5" type="string" v-model="formData.breed" required placeholder="Enter breed"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Pet's Picture:" label-for="input-8">
            <b-form-input id="input-6" type="string" v-model="formData.image" required placeholder="Enter image name"></b-form-input>
        </b-form-group>

        <div class="floatRight">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";

export default {
    data() {
        return {
            showPetForm: false,
            formData: {
                name: "",
                age: 0,
                breed: "",
                gender: "",
                image: "",
                notes: "",
                weight: 0,
                species: null
            },
            options: [{
                    value: null,
                    text: "Please select an option"
                },
                {
                    value: "cats",
                    text: "Cats"
                },
                {
                    value: "dogs",
                    text: "Dogs"
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["countAnimals", "getAllCats"])
    },
    methods: {
        ...mapActions(["addPet"]),
        togglePetForm() {
            this.showPetForm = !this.showPetForm;
        },
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
        clearFormData() {
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
