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
  listAffichages : ListeAffichage[];
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

                    });
        for ( let i=0; i<this.Client.length; i++){
      this.affichage.reference=this.Client[i].reference;
      this.affichage.nom=this.Client[i].reference;
      this.affichage.cp=this.Client[i].reference;
      this.affichage.ville=this.Client[i].reference;
      this.affichage.tva=this.Client[i].reference;
      this.listAffichages.push(this.affichage);
   }

}
}
