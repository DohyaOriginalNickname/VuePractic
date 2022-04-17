<template>
    <v-dialog width="500px" v-model="modal">
        <template v-slot:activator="{on}">
            <v-btn class="primary" v-on="on">Buy</v-btn>
        </template>

        <v-card>
            <v-container>
                <v-layout >
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Do you want to buy it?</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout >
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                v-model="name"
                                label="You name"
                                type="text"
                                name="name"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="phone"
                                label="Your phone"
                                type="text"
                                name="phone"
                                aria-multiline
                                required
                            ></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout >
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="onCansel" :disabled = "localLoading">
                                Close
                            </v-btn>
                            <v-btn class="success" @click="onSave" :disabled = "localLoading" :loading = "localLoading" >
                                Buy it
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
            name: '',
            phone: '',
            localLoading: false
        }
    },
    methods: {
        onCansel(){
            this.name = ''
            this.phone = ''
            this.modal = false
            
        },
        onSave(){
            if(this.name !== '' && this.phone !== ''){
                this.localLoading = true
                this.$store.dispatch('createOrder', {
                    name: this.name,
                    phone: this.phone,
                    adId: this.ad.id,
                    ownerId: this.ad.ownerId
                }).finally(()=> {
                    this.name = ''
                    this.phone = ''
                    this.localLoading = false
                    this.modal = false
                })
                
            }
        }
    }
}
</script>