<template>
<div class="container">
    <v-container>
        <br />
        <h1>Pets - Buy a {{species_singular}}</h1>
        <v-row>
            <v-col class="posTopDown">
                <v-row class="text-center">
                    <v-col cols="1">Name:</v-col>
                    <v-col cols="2">{{animal.name}}</v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="1">Breed:</v-col>
                    <v-col cols="2">{{animal.breed}}</v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="1">Gender:</v-col>
                    <v-col cols="2">{{animal.gender}}</v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="1">Age:</v-col>
                    <v-col cols="2">{{animal.age}}</v-col>
                </v-row>
            </v-col>

            <v-col class="posTopUp">
                <v-row>
                    <v-col cols="3">
                        <span v-if="species === 'cats' ">
                            <img class="catAlign" :src="require('../assets/images/cats/' + animal.image)" width="505" height="400" />
                        </span>
                        <span v-else>
                            <img class="catAlign" :src="require('../assets/images/dogs/' + animal.image)" width="505" height="400" />
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapState
} from "vuex";

export default {
    data() {
        return {
            animal: {},
            species: {},
            species_singular: null
        };
    },
    computed: {
        ...mapState(["cats", "dogs"])
    },
    mounted() {
        const animal = this[this.$route.params.species][this.$route.params.id];
        this.animal = animal;
        this.species = this.$route.params.species;
        this.species_singular = this.species.slice(0, this.species.length - 1);
    }
};
</script>

<style lang="css">
.catAlign {
    margin-bottom: 10 em;
    width: 575;
    height: 490;
}

.posTopDown {
    margin-top: 1.5em;
}

.posTopUp {
    margin-top: -1.5em;
}

body {
    background-color: #cd853f;
}
</style>
