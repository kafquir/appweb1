import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './oldapp/acceuil/acceuil.component';
import { PageComponent } from './oldapp/page/page.component';
import { LoginComponent } from './oldapp/login/login.component';
import { RegiterComponent } from './oldapp/regiter/regiter.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';
import { InfoClientComponent } from './info-client/info-client.component';
import { AdresseComponent } from './adresse/adresse.component';
import { FacturationComponent } from './facturation/facturation.component';
import { PersonneDeContactComponent } from './personne-de-contact/personne-de-contact.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { HeaderComponent } from './header/header.component';
import { SidebareLeftComponent } from './sidebare-left/sidebare-left.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'infoClient', component: InfoClientComponent },
  { path: 'compteClient', component: CompteClientComponent },
  { path: 'home', component: HomeComponent },
  


];


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PageComponent,
    LoginComponent,
    RegiterComponent,
    InfoClientComponent,
    AdresseComponent,
    FacturationComponent,
    PersonneDeContactComponent,
    CompteClientComponent,
    HeaderComponent,
    SidebareLeftComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
