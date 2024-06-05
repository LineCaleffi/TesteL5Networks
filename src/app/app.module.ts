import { AuthGuard } from './guard/auth.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PersonagensGuard } from './personagens/guards/personagens.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, PersonagensGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }