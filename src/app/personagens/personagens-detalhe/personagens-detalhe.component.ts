import { Subscription } from 'rxjs';
import { PersonagensService } from '../personagens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens-detalhe',
  templateUrl: './personagens-detalhe.component.html',
  styleUrls: ['./personagens-detalhe.component.css']
})
export class PersonagensDetalheComponent implements OnInit, OnDestroy{

  personagens: any;
  inscricao: Subscription = new Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private pService: PersonagensService,
              private router: Router){}
  
  ngOnInit() {
    console.log('ngInit: PersonagensDetalheComponent');

    this.inscricao = this.activatedRoute.data.subscribe((info) => {
      console.log(info);
      this.personagens = info['personagens'];
  });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarPersonagem(){
    this.router.navigate(['/personagens', this.personagens.id, 'editar'])
  }
}
