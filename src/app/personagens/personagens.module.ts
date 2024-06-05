import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensDetalheComponent } from './personagens-detalhe/personagens-detalhe.component';
import { PersonagensFormComponent } from './personagens-form/personagens-form.component';
import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensDeactiveGuard } from './guards/personagens-deactive.guard';
import { PersonagensDetalheResolver } from './guards/personagens-detalhe.resolver';
import { PersonagensService } from './personagens.service';
import { PersonagensComponent } from './personagens.component';

@NgModule({
  declarations: [
    PersonagensComponent,
    PersonagensFormComponent,
    PersonagensDetalheComponent
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    FormsModule
  ],
  providers: [PersonagensService, PersonagensDeactiveGuard, PersonagensDetalheResolver]
})
export class PersonagensModule { }
