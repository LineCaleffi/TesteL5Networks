import { PersonagensService } from '../personagens.service';
import { Personagem } from '../personagem';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensDetalheResolver implements Resolve<Personagem>{

  constructor(private pService: PersonagensService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
          ):Observable<any> | Promise<any>|any { 
            
            console.log('PersonagemDetalheResolver');

            let id = route.params['id'];

            return this.pService.getPersonagem(id);
  }
}
