<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-card>
                        <v-img 
                        :src="ad.imageSrc"
                        height="300px"
                        > </v-img>
                    </v-card>
                    <v-card-text>
                        <h1 class="text--primary mb-2">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <addEditModalAd :ad="ad" v-if="isOwner"></addEditModalAd>
                        <app-buy-modal :ad="ad"></app-buy-modal>
                    </v-card-actions> 
                </v-card>
                <div v-else class="text-xs-center">
                    <v-progress-circular
                        indeterminate
                        :size="100"
                        :width="4"
                        color="purple"
                    ></v-progress-circular>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditModalAd from './EditModalAd.vue'
export default {
    props: ['id'],
    computed: {
        ad(){
            const id = this.id
            return this.$store.getters.adById(id)
        },
        loading(){
            return this.$store.getters.loading
        },
        isOwner(){
            return this.ad.ownerId === this.$store.getters.user.id
        }
    },
    components: {
        addEditModalAd: EditModalAd
    }
}
</script>