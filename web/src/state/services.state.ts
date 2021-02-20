import create from 'zustand'
import { Service } from '../types/common-types'


export type ServicesState  = {
    services: Service[];
    addServices: (service: Service[]) => void;
}

export const useServicesState = create<ServicesState>(set => ({
   services: [],
   addServices: (input: Service[]) => set((state) => ({...state, services: input}))
}));
