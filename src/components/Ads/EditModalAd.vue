<template>
    <v-dialog width="400px" v-model="modal">
        <template v-slot:activator="{on}">
            <v-btn class="warning" v-on="on">Edit</v-btn>
        </template>

        <v-card>
            <v-container>
                <v-layout >
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Edit ad</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout >
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                v-model="editedTitle"
                                label="Title"
                                type="text"
                                name="title"
                                required
                            ></v-text-field>
                            <v-textarea
                                v-model="editedDescription"
                                label="Description"
                                type="text"
                                name="description"
                                aria-multiline
                                required
                            ></v-textarea>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout >
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="onCansel">
                                Cansel
                            </v-btn>
                            <v-btn class="success" @click="onSave">
                                Save
                            </v-btn >
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['ad'],
    data(){
        return{
            modal: false,
            editedTitle: this.ad.title,
            editedDescription: this.ad.description
        }
    },
    methods: {
        onCansel(){
            this.editedTitle = this.ad.title
            this.editedDescription = this.ad.description
            this.modal = false
        },
        onSave(){
            if(this.editedTitle !== '' && this.editedDescription !== ''){
                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    description: this.editedDescription,
                    id: this.ad.id
                })
                this.modal = false
            }
        }
    }
}
</script>