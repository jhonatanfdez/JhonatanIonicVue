<template>
<ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button ></ion-back-button>
                </ion-buttons>
                
                <ion-title>
                    <h2>{{ loadedMemory? loadedMemory.title:'Cargando' }}</h2>

                    

                </ion-title>    
            </ion-toolbar>
            
        </ion-header>

        <ion-content>
            <h2 v-if="!loadedMemory">No hay informacion para mostrar</h2>
            <div v-else>
                <ion-img :src="loadedMemory.image" :title="loadedMemory.title"></ion-img>
                <h2 class="ion-text-center">{{ loadedMemory.title }}</h2>
                <p>{{ loadedMemory.description }}</p>
            </div>

            
            
        </ion-content>
        <ion-footer>
                <ion-toolbar>
                <h4 class="ion-text-center">Creado por Jhonatan Fernández</h4> 
                </ion-toolbar>
            </ion-footer>
    </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, 
IonButtons, IonImg, IonFooter} from '@ionic/vue';


export default {
    components: { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent,  
        IonBackButton, 
        IonButtons,
        IonImg, 
        IonFooter
    },

    data() {
        return {
            memoryId: this.$route.params.id
        };
    },
    computed: {
        loadedMemory() {
           return this.$store.getters.memory(this.memoryId);

        }
    },
    /*watch: {
        '$route'(currentRoute) {
            this.memoryId =  currentRoute.params.id;
        }
    }, */
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

