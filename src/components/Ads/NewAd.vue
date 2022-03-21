<template>
    <v-container>
        <v-layout row class="margin">
            <v-flex xs12 sm6 offset-sm3 style="max-width: 550px;">

                <h1 class="text--secondary mb-3">Create new ad</h1>

                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                        v-model="title"
                        :rules="[v => !!v || 'Title is required']"
                        label="Ad title"
                        type="text"
                        name="title"
                        required
                    ></v-text-field>
                    <v-textarea
                        v-model="description"
                        :rules="[v => !!v || 'Description is required']"
                        label="Ad description"
                        type="text"
                        name="description"
                        required
                    ></v-textarea>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn
                            color="blue-grey"
                            class="ma-2 white--text"
                        >
                        Uploads
                            <v-icon
                                right
                                dark
                            >
                                mdi-cloud-upload
                            </v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <img src="" height="100px">
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-switch
                            v-model="promo"
                            label="Add to promo?"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-btn 
                        class="success" 
                        @click="createAd" 
                        :disabled = "!valid || loading" 
                        :loading = "loading"
                        >
                        Create add
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            description: '',
            promo: false,
            valid: false
        }
    },
    computed:{
        loading(){
            return this.$store.getters.loading
        }
    },
    methods:{
        createAd(){
            if(this.$refs.form.validate()){
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    imageSrc: 'https://timeweb.com/ru/community/article/1d/1d959c23e81024374895da086675b298.jpg'
                }
                
                this.$store.dispatch('createAd', ad)
                .then(() => {
                    this.$router.push('/list')
                })
                .catch(() => {})
            }
        }
    }
}
</script>

<style scoped>
    @media(max-width:600px){
        .margin{
            margin: 3px;
        }
    }
</style>