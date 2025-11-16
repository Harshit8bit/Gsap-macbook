import { texture } from 'three/tsl';
import {create} from 'zustand';


const useMacbookStore = create((set) =>({
    color: '#ffffffff',
    setColor: (color) => set({ color}),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/videos/features-1.mp4',
    setTexture: (texture) => set({ texture}),

    isModalOpen: false,
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),


    reset: () => set({ color: '#ffffffff' , scale: 0.08 , texture: '/videos/features-1.mp4'}),
}));

export default useMacbookStore; 