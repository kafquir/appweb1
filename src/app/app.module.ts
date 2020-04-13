import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PageComponent,
    LoginComponent,
    RegiterComponent
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
