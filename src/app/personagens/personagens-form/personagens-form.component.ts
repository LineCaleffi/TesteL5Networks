import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonagensService } from '../personagens.service';
import { IformCandeactivate } from 'src/app/guard/iform-candeactivate';

@Component({
  selector: 'app-personagens-form',
  templateUrl: './personagens-form.component.html',
  styleUrls: ['./personagens-form.component.css']
})
export class PersonagensFormComponent implements OnInit, OnDestroy, IformCandeactivate{
  personagens: any = {};
  inscricao: Subscription = new Subscription;
  formMudou: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private pService: PersonagensService,
              private router: Router){}

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any)=>{
      let id = params['id'];

      this.personagens = this.pService.getPersonagem(id);

      if(this.personagens === null){
        this.personagens = {};
      }
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }
}
