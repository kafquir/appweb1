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
import { PersoneDeContactComponent } from './persone-de-contact/persone-de-contact.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegiterComponent },
  { path: 'home', component: AcceuilComponent },
  { path: '', component: AcceuilComponent },


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
    PersoneDeContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
