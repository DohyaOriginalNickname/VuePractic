<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad of promoAds"
                            :key="ad.id"
                            :src = "ad.imageSrc"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/'+ad.id">View Ad</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    v-for="ad of ads"
                    :key="ad.id"
                    
                >
                    <v-card>
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="ad.imageSrc"
                        >
                        </v-img>

                        <v-card-title>{{ad.title}}</v-card-title>

                        <v-card-text class="text--primary">
                            <div>{{ad.description}}</div>
                        </v-card-text>

                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <v-btn
                                text
                                :to="'/ad/'+ad.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                raised
                                class="primary"
                            >Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    computed: {
        promoAds(){
            return this.$store.getters.promoAds
        },
        ads(){
            return this.$store.getters.ads
        },
    }
}
</script>

<style scoped>
    .car-link{
        position: absolute;
        bottom: 50px;
        left: 45.5%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
    }

    @media(min-width:1400px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 46%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:950px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 43%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:700px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 40%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }
    


    @media(max-width:600px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 39%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:500px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 37%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:450px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 35%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:400px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 34%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:360px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 32%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }

    @media(max-width:300px){
        .car-link{
        position: absolute;
        bottom: 50px;
        left: 26%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50% 0);
        padding: 5px 10px;
        border-top-right-radius: 5px ;
        border-top-left-radius: 5px ;
        }
    }
</style>