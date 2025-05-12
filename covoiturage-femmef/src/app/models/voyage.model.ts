export interface Voyage {
  id: number;
  depart: string;
  destination: string;
  date: string; // format : 'YYYY-MM-DD'
  heure: string; // format : 'HH:mm'
  prix: number;
  placesDisponibles: number;
}
