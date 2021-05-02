<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                   Avenger End Game
                </ion-title>    
            </ion-toolbar>
            
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item :key="memory.id" v-for="memory in memories" :router-link="`/memories/${memory.id}`">
                    
                    <ion-thumbnail slot="start">
                        <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                    </ion-thumbnail>
                    
                    <ion-label>
                        {{ memory.title }}
                    </ion-label>
                    
                    
                    
                </ion-item>

                
            </ion-list>
        </ion-content>


            <ion-footer>
                <ion-toolbar>
                <h4 class="ion-text-center">Creado por Jhonatan Fernández</h4> 
                </ion-toolbar>
            </ion-footer>

        
    </ion-page>

    


    
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonImg, IonThumbnail, IonLabel, IonFooter} from '@ionic/vue';

export default {
    name: 'MemoriesPage',
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonImg, IonThumbnail, IonLabel, IonFooter},
    
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>