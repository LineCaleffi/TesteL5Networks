import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'personagens',  loadChildren: () => import('./personagens/personagens.module').then(
    mod => mod.PersonagensModule), canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path:'pesquisar', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'', redirectTo:'/home', pathMatch: 'full' },

  { path: '**', component: PaginaNaoEncontradaComponent} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
