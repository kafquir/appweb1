import { Component, OnInit } from '@angular/core';
import { ClientService} from "../services/clientService";
import { Subscription } from 'rxjs';
import { ListeAffichage} from "../entities/listAffichage.entitie";


@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.scss']
})
export class CompteClientComponent implements OnInit {

  constructor( private  clientService : ClientService) { }

  Client : any[];
  Facturation : any[];
  Adresse : any [];
  Personne: any [];
  clientSubscription: Subscription;
  listeAffichages : any[];
  affichage : ListeAffichage = new ListeAffichage();
  ngOnInit(): void {
    this.clientSubscription= this.clientService.clientSubject.subscribe(
      ( Client : any []) => {
          this.Client = Client;

        });
        this.clientSubscription= this.clientService.clientSubject.subscribe(
          ( Adresse : any []) => {
              this.Adresse = Adresse;

            });
            this.clientSubscription= this.clientService.clientSubject.subscribe(
              ( Facturation : any []) => {
                  this.Facturation = Facturation;

                });
            this.clientSubscription= this.clientService.clientSubject.subscribe(
                  ( Personne : any []) => {
                      this.Personne = Personne;

                 });}
      /*  la premiere methode pour l'affichage des ligne du tableau

      for ( let i=0; i<this.Client.length; i++){
      this.affichage.reference=this.Adresse.reference;
      this.affichage.nom=this.Client.nom1;
      this.affichage.cp=this.Adresse.codePostale;
      this.affichage.ville=this.Adresse.ville;
      this.affichage.tva=this.Facturation.tauxTVA;
      this.listeAffichages.push(this.affichage[i]);
   }

}
*/
        ligne=[
          {
          reference: 'K25498',
          nom : 'HIJJI YOUSSEF',
          cp : '90000',
          villes: 'bruxelles',
          tva : 'HJ676767',

        },
      ];
}
