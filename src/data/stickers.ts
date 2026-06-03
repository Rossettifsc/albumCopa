export interface Sticker {
  id: number;
  name: string;
  team: string;
  photo: string;
  collected: boolean;
}

export const initialStickers: Sticker[] = [
  { id: 1, name: 'Neymar Jr', team: 'Brasil', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 2, name: 'Lionel Messi', team: 'Argentina', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 3, name: 'Cristiano Ronaldo', team: 'Portugal', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 4, name: 'Kylian Mbappé', team: 'França', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 5, name: 'Kevin De Bruyne', team: 'Bélgica', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 6, name: 'Vinícius Jr', team: 'Brasil', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 7, name: 'Robert Lewandowski', team: 'Polônia', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 8, name: 'Luka Modric', team: 'Croácia', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 9, name: 'Harry Kane', team: 'Inglaterra', photo: 'https://via.placeholder.com/150', collected: false },
  { id: 10, name: 'Son Heung-min', team: 'Coreia do Sul', photo: 'https://via.placeholder.com/150', collected: false },
];
