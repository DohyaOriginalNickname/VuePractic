<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card>
                        <v-img 
                        src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                        height="300px"
                        > </v-img>
                    </v-card>
                    <v-card-text>
                        <h1 class="text--primary mb-2">Lorem, ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aperiam. Assumenda tempora, quasi quae voluptate, eos aliquam laudantium at deserunt eaque ex ducimus quis, optio ipsa culpa sint libero tenetur.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success" raised>Buy</v-btn>
                    </v-card-actions> 
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

</style>