import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {

  Descprod =[{
    img:'../../assets/Image_projet/14.JPG',
    categorie: 'Vehicules',
    Nom:'machine à laver',
    Prix:'200000 GNF',
    Lieu:'conakry',
    Situation:'A discuter',
    Interet:'10',
    Description:'4 Cartelettes premier jour Editions spéciales donne en plus une épreuve journée du timbre 1988 - 1989 prévoir frais de port si nécessaire , possibilité d’échange contre timbres après 2008 Vous pouvez grouper avec mes autres annonces pour frais d’envoi (voir même gratuité si achat de plusieurs lots) A prendre sur Joué les Tours Taper MR37 pour mes autres annonces – 084'
  },
    {
    img:'../../assets/Image_projet/14.JPG',
    categorie: 'Maison',
    Nom:'maison à louer',
    Prix:'80 0000 GNF',
    Lieu:'conakry',
    Situation:'A discuter',
    Interet:'25',
    Description:'4 Cartelettes premier jour Editions spéciales donne en plus une épreuve journée du timbre 1988 - 1989 prévoir frais de port si nécessaire , possibilité d’échange contre timbres après 2008 Vous pouvez grouper avec mes autres annonces pour frais d’envoi (voir même gratuité si achat de plusieurs lots) A prendre sur Joué les Tours Taper MR37 pour mes autres annonces – 084'
    },
    {
    img:'../../assets/Image_projet/14.JPG',
    categorie: 'Materiel Professionnel',
    Nom:'Moissonneuse batteuse',
    Prix:'300 0000 GNF',
    Lieu:'kankan',
    Situation:'Prix fixe',
    Interet:'5',
    Description:'4 Cartelettes premier jour Editions spéciales donne en plus une épreuve journée du timbre 1988 - 1989 prévoir frais de port si nécessaire , possibilité d’échange contre timbres après 2008 Vous pouvez grouper avec mes autres annonces pour frais d’envoi (voir même gratuité si achat de plusieurs lots) A prendre sur Joué les Tours Taper MR37 pour mes autres annonces – 084'
    },
    {
      img:'../../assets/Image_projet/14.JPG',
      categorie: 'Immobilier',
      Nom:'Immeuble à louer',
      Prix:'20 000 0000 GNF',
      Lieu:'Kaloum',
      Situation:'Prix fixe',
      Interet:'15',
      Description:'4 Cartelettes premier jour Editions spéciales donne en plus une épreuve journée du timbre 1988 - 1989 prévoir frais de port si nécessaire , possibilité d’échange contre timbres après 2008 Vous pouvez grouper avec mes autres annonces pour frais d’envoi (voir même gratuité si achat de plusieurs lots) A prendre sur Joué les Tours Taper MR37 pour mes autres annonces – 084'
      
    }
  ];

  getappareilid(id :string){
    const appareil=this.Descprod.find(
      (DescrpodObjet)=>{
        return DescrpodObjet.categorie ===id;
      }
    );
    return appareil;
  }

  constructor() { }
}
