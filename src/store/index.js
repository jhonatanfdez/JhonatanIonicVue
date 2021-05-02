import { createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: '1',
                    image: '../../assets/image/01-capitan-america.jpg',
                    title: 'Capitán América',
                    description: 'CHRIS EVANS. Hasta ahora, su alter ego ha sido el exsoldado Steve Rogers. ¿Quién heredará el traje y el escudo?',

                },
                {
                    id: '2',
                    image: '../../assets/image/02-iron-man.jpg',
                    title: 'Iron Man',
                    description: 'ROBERT DOWNEY, JR. Con él empezó todo. Si Iron Man (2008) no hubiera triunfado como lo hizo, hoy el Universo Cinematográfico de Marvel (MCU por sus siglas en inglés) no existiría.',

                },
                {
                    id: '3',
                    image: '../../assets/image/03-thor.jpg',
                    title: 'Thor',
                    description: 'CHRIS HEMSWORTH. Al principio de Endgame lo vemos retirado y criando barriga cervecera. Una crisis la tiene cualquiera.',

                },
                {
                    id: '4',
                    image: '../../assets/image/04-hulk.jpg',
                    title: 'Hulk',
                    description: 'MARK RUFFALO. No aparece en los tráilers de Endgame, pero que nadie se deje engañar por ese troleo promocional.',

                },
                {
                    id: '5',
                    image: '../../assets/image/05-black-widow.jpg',
                    title: 'Viuda Negra',
                    description: 'SCARLETT JOHANSSON. Ya se trabaja en la primera película que protagonizará en solitario, aunque no hay fecha de estreno.',

                }




            ],
        };
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id===memoryId)

            };
        }
    }

});

export default store;