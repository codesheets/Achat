import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresDemandeComponent } from './offres-demande/offres-demande.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitsComponent } from './detail-produits/detail-produits.component';

const routes:Routes=[
  {path:'offredemande',component:OffresDemandeComponent},
  {path:'home',component:HomeComponent},
  {path:'Detail',component:AboutComponent},
  {path:'offredemande/:id',component:DetailProduitsComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    OffresDemandeComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DetailProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
