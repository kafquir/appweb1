import { Adresse } from "../entities/adresse.entitie";
import { Client } from "../entities/client.entitie";
import { Facturation } from "../entities/facturation.entitie";
import { Personne } from "../entities/personne.entitie";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';




@Injectable()
export class ClientService {

 clientSubject = new Subject<any[]>();

  private Client =[
    {
      reference: "1",
      nom1 : "afquir",
      nom2 :"karim",
      email :"ka@gmail.com",
    },
    {
      reference: "2",
      nom1 : "afquir",
      nom2 :"karim",
      email :"ka@gmail.com",
    },
    {
      reference: "3",
      nom1 : "afquir",
      nom2 :"karim",
      email :"ka@gmail.com",
    },
  ];

  private Facturation=[
    {
      langue : "fr" ,
      numTVA : "23",
      tauxTVA: "20%" ,
      localisation: "francais" ,
      delaiPaiement : "2j",
   },
   {
     langue : "fr" ,
     numTVA : "23",
     tauxTVA: "20%" ,
     localisation: "francais" ,
     delaiPaiement : "2j",
  },  {
      langue : "fr" ,
      numTVA : "23",
      tauxTVA: "20%" ,
      localisation: "francais" ,
      delaiPaiement : "2j",
   },
  ];

  private Adresse = [
    {
      adresseLigne1: "hello",
      adresseLigne2 : "tanger" ,
      codePostale: "90000",
      villes : "meknes" ,
      pays : "france" ,

    },
    {
      adresseLigne1: "hello",
      adresseLigne2 : "tanger" ,
      codePostale: "90000",
      villes : "meknes" ,
      pays : "france" ,

    },{
      adresseLigne1: "hello",
      adresseLigne2 : "tanger" ,
      codePostale: "90000",
      villes : "meknes" ,
      pays : "france" ,

    },
  ];

  private Personne =[
    {
      civilite :"marocaine" ,
      fonction : "ing" ,
      emailPersonne : 'k@gmail.com' ,
      numTel1: "04040404" ,
      numTel2: "3309888" ,


    },
    {
      civilite :"marocaine" ,
      fonction : "ing" ,
      emailPersonne : 'k@gmail.com' ,
      numTel1: "04040404" ,
      numTel2: "3309888" ,


    },  {
        civilite :"marocaine" ,
        fonction : "ing" ,
        emailPersonne : 'k@gmail.com' ,
        numTel1: "04040404" ,
        numTel2: "3309888" ,


      },
  ];



}
