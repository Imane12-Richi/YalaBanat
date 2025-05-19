export interface Voyage {
  id: number;
  depart: string;
  destination: string;
  dateDepart: string;           // Nom correct selon backend
  prix: number;                 // Prix au lieu de price
  placesDisponibles: number;
  conductrice: {
    id: number;
    nom: string;
    photo: string;
    note: number;
    nombreEvaluations: number;
  };
  status: 'ACTIF' | 'COMPLET' | 'TERMINE';
}
