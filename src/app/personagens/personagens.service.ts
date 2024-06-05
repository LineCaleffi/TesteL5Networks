import { Personagem } from './personagem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  private personagens: Personagem[] = [
    { 
      id: 1, 
      nome: 'Rick Sanchez', email: 'rick@gmail.com', 
      origem: 'Earth (C-137)', ultLocale: 'Citadel of Ricks', 
      priAparicao: 'Pilot - S01E01 - December 2, 2013', ultAparicao: 'Rickmurai Jack - S05E10 - September 5, 2021', 
      img: "../../assets/Rick_Sanchez.png" 
    },
    { 
      id: 2, 
      nome: 'Morty Smith', email: 'morty@gmail.com', 
      origem: 'unknown',  ultLocale: 'Citadel of Ricks', 
      priAparicao: 'Pilot - S01E01 - December 2, 2013', ultAparicao: 'Rickmurai Jack - S05E10 - September 5, 2021', 
      img: "../../assets/MortySmith.png" 
    },
    { 
      id: 3, 
      nome: 'Summer', email: 'summer@gmail.com', 
      origem: 'Earth (Replacement Dimension)', ultLocale: 'Earth (Replacement Dimension)', 
      priAparicao: ' Rick Potion #9 - S01E06 - January 27, 2014', ultAparicao: 'Rickmurai Jack - S05E10 - September 5, 2021', 
      img: "../../assets/Summer.png" 
    },
  ]

  getPersonagens() {
    return this.personagens;
  }

  getPersonagem(id: number) {
    let personagens = this.getPersonagens();
    for (let i = 0; i < personagens.length; i++) {
      let p = personagens[i];

      if (p.id == id) {
        return p;
      }
    }
    return null;
  }

  constructor() { }
}
