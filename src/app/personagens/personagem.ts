export class Personagem {
  constructor(
              public id: number, 
              public nome: string, 
              public email: string, 
              public origem: string,
              public ultLocale: string,
              public priAparicao: string,
              public ultAparicao: string,
              public img: string
            ){ }
}
