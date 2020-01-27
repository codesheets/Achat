import { Component, OnInit } from '@angular/core';
import { MonserviceService } from '../monservice.service';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offres-demande',
  templateUrl: './offres-demande.component.html',
  styleUrls: ['./offres-demande.component.css']
})
export class OffresDemandeComponent implements OnInit {
  
  Descprod:any [];
  id :string;
  constructor(private monserviceService:MonserviceService) { }

  ngOnInit() {
    this.Descprod=this.monserviceService.Descprod;
  }

}
