<template>
    <v-container >
        <v-layout row>
            <v-flex xs12 ms6 offset-sm3 style="max-width: 500px;">
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list subheader two-line>
                    <v-list-item-group>
                        <v-list-item 
                            v-for="order of orders"
                            :key= "order.id"
                        > 
                            <template>
                                <v-list-item-action>
                                    <v-checkbox
                                        :input-value="order.done"
                                        color="primary"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn class="primary" :to ="'/ad/' + order.adId">Open</v-btn>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            orders: [
                {
                    id: '123',
                    name: 'Nikita',
                    phone: '8-800-555-3535',
                    adId: 'fff',
                    done: false
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>