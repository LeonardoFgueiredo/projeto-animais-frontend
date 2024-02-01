import { IAnimal } from "@/@types/animal";

export const products: IAnimal[] = [
  {
    id: 1,
    name: 'Bob',
    img: 'assets/bob.jpg',
    breed: 'Pastor Alemão',
    type: 'Cachorro',
    gender: 'Macho',
    city: 'Barra Bonita',
    state: 'SP',
    adopted: false,
  },
  {
    id: 2,
    name: 'Farinha',
    img: 'assets/gato.jpg',
    breed: 'Vira lata',
    type: 'Gato',
    gender: 'Fêmea',
    city: 'Barra Bonita',
    state: 'SP',
    adopted: false,
  },

];
