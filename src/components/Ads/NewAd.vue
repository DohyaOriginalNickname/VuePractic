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
                            @click="triggerUpload"
                        >
                        Uploads
                            <v-icon
                                right
                                dark
                            >
                                mdi-cloud-upload
                            </v-icon>
                        </v-btn>
                        <input 
                        ref="fileInput" 
                        type="file" 
                        style="display: none;" 
                        accept="image/*"
                        @change="onFileChanged"
                        >
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <img :src="imageSrc" height="100px" v-if="imageSrc">
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
                        :disabled = "!valid || !image || loading" 
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
            valid: false,
            image: null,
            imageSrc: ''
        }
    },
    computed:{
        loading(){
            return this.$store.getters.loading
        }
    },
    methods:{
        createAd(){
            if(this.$refs.form.validate() && this.image){
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                }
                
                this.$store.dispatch('createAd', ad)
                .then(() => {
                    this.$router.push('/list')
                })
                .catch(() => {})
            }
        },
        triggerUpload(){
            this.$refs.fileInput.click()
        },
        onFileChanged(event){
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                this.imageSrc = reader.result
            }
            reader.readAsDataURL(file)
            this.image = file
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