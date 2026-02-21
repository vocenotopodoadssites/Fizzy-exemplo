export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Antipasti' | 'Primi' | 'Secondi' | 'Dolci';
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Bruschetta al Pomodoro',
    description: 'Pão artesanal grelhado, tomates cereja, manjericão fresco e azeite extra virgem.',
    price: 'R$ 38',
    category: 'Antipasti',
    image: 'https://picsum.photos/seed/bruschetta/400/300'
  },
  {
    id: '2',
    name: 'Carpaccio di Manzo',
    description: 'Lâminas de filé mignon, rúcula, lascas de parmesão e molho de mostarda.',
    price: 'R$ 52',
    category: 'Antipasti',
    image: 'https://picsum.photos/seed/carpaccio/400/300'
  },
  {
    id: '3',
    name: 'Spaghetti alla Carbonara',
    description: 'Massa fresca, guanciale, gemas de ovos caipiras, pecorino romano e pimenta preta.',
    price: 'R$ 74',
    category: 'Primi',
    image: 'https://picsum.photos/seed/carbonara/400/300'
  },
  {
    id: '4',
    name: 'Risotto ai Funghi Porcini',
    description: 'Arroz arbóreo, cogumelos porcini frescos, manteiga de trufa e parmesão.',
    price: 'R$ 88',
    category: 'Primi',
    image: 'https://picsum.photos/seed/risotto/400/300'
  },
  {
    id: '5',
    name: 'Tagliata di Manzo',
    description: 'Entrecôte grelhado com alecrim, servido com batatas rústicas e redução de balsâmico.',
    price: 'R$ 110',
    category: 'Secondi',
    image: 'https://picsum.photos/seed/steak/400/300'
  },
  {
    id: '6',
    name: 'Branzino al Forno',
    description: 'Robalo assado com ervas mediterrâneas, limão siciliano e legumes da estação.',
    price: 'R$ 95',
    category: 'Secondi',
    image: 'https://picsum.photos/seed/fish/400/300'
  },
  {
    id: '7',
    name: 'Tiramisù Classico',
    description: 'Biscoitos savoiardi embebidos em café, creme de mascarpone e cacau em pó.',
    price: 'R$ 32',
    category: 'Dolci',
    image: 'https://picsum.photos/seed/tiramisu/400/300'
  },
  {
    id: '8',
    name: 'Panna Cotta ai Frutti di Bosco',
    description: 'Creme de baunilha leve com calda de frutas vermelhas frescas.',
    price: 'R$ 28',
    category: 'Dolci',
    image: 'https://picsum.photos/seed/pannacotta/400/300'
  }
];
