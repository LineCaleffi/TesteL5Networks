import { Component, OnInit } from '@angular/core';
import { PersonagensService } from './personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit{
  personagens: any[]=[];
 
  constructor(private pService: PersonagensService) { }
  
  ngOnInit() {
    this.personagens = this.pService.getPersonagens();
  }

}
