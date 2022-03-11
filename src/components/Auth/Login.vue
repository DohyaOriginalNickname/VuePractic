<template>
    <v-container elevation-12>
        <v-app-bar dark color="red">
            <v-toolbar-title>Login form</v-toolbar-title>
        </v-app-bar>
        <v-form v-model="valid" ref="form" validation>
            <v-text-field
                v-model="email"
                :rules="emailErrors"
                label="Email"
                type="email"
                name="email"
                required
                prepend-icon="mdi-account"
            ></v-text-field>
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                :counter = "6"
                label="Password"
                type="password"
                name="Password"
                required
                prepend-icon="mdi-lock"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
                class="mr-4"
                @click="onSubmit"
                :disabled = "!valid"
            >
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>

// import { required, maxLength, email } from 'vuelidate'
export default {
    data(){
        return{
            password: '',
            email: '',
            valid: false,
            emailErrors:[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
            ],
        }
    },
    methods:{
        onSubmit(){
            if(this.$refs.form.validate()){
                const user = {
                    email: this.email,
                    password: this.password
                }

                console.log(user)
            }else{
                console.log('ты долбаеб?')
            }
        }
    }
}
</script>

<style scoped>
</style>