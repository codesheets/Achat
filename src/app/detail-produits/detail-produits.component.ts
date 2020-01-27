import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { OffresDemandeComponent } from '../offres-demande/offres-demande.component';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-detail-produits',
  templateUrl: './detail-produits.component.html',
  styleUrls: ['./detail-produits.component.css']
})
export class DetailProduitsComponent implements OnInit {
@Input() nom;
@Input() prix;
@Input() lieu;
@Input() description;
@Input() situation;
@Input() img;

  constructor(private monserviceService:MonserviceService, private Route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.Route.snapshot.params['id'];
    this.nom=this.monserviceService.getappareilid(id).Nom;
    this.prix=this.monserviceService.getappareilid(id).Prix;
    this.lieu=this.monserviceService.getappareilid(id).Lieu;
    this.description=this.monserviceService.getappareilid(id).Description;
    this.situation=this.monserviceService.getappareilid(id).Situation;
    this.img=this.monserviceService.getappareilid(id).img;
  }

}
