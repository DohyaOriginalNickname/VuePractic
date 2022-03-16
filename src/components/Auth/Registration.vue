<template>
    <v-container class="elevation-12">
        <v-app-bar dark color="red">
            <v-toolbar-title>Registaration form</v-toolbar-title>
        </v-app-bar>
        <br>
        <v-form v-model="valid" ref="form" lazy-validation>
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
            <v-text-field
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                :counter = "6"
                label="Confirm password"
                type="password"
                name="confirm"
                required
                prepend-icon="mdi-lock"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
                class="mr-4"
                @click="onSubmit"
                :loading = "loading"
                :disabled = "!valid || loading"
            >
                Registaration
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            confirmPassword: '',
            valid: false,
            emailErrors:[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
            ],
            confirmPasswordRules: [
                v => !!v || 'Password is required',
                v => v === this.password || 'Password should match'
            ]
        }
    },
    computed: {
        loading (){
            return this.$store.getters.loading
        }
    },

    methods:{
        onSubmit(){
            if(this.$refs.form.validate()){
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('registerUser', user)
                .then(()=>{
                    this.$router.push('/')
                })
                .catch(() => {})
            }
        }
    }
}
</script>