import { PersonagensFormComponent } from './personagens-form/personagens-form.component';
import { PersonagensComponent } from './personagens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensGuard } from './guards/personagens.guard';
import { PersonagensDetalheComponent } from './personagens-detalhe/personagens-detalhe.component';
import { PersonagensDetalheResolver } from './guards/personagens-detalhe.resolver';
import { PersonagensDeactiveGuard } from './guards/personagens-deactive.guard';

const routes: Routes = [
  { path: '', component: PersonagensComponent, 
    canActivateChild: [PersonagensGuard],
    children:[
      { path: 'novo', component: PersonagensFormComponent },
      { path: ':id', component: PersonagensDetalheComponent, resolve: { personagens: PersonagensDetalheResolver } },
      { path: ':id/editar', component: PersonagensFormComponent, canDeactivate: [PersonagensDeactiveGuard] }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
