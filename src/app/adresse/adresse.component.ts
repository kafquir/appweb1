import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss']
})
export class AdresseComponent implements OnInit {

  adresseForm = new FormGroup ({
  adresseLigne1: new FormControl(''),
  adresseLigne2: new FormControl(''),
  codePostale: new FormControl(''),
  villes: new FormControl(''),
  pays: new FormControl(''),
  });


  listes = [
   {
     country: 'Belgique',
     city: 'Bruxelles'
   },
   {
     country: 'France',
     city: 'Paris'
   },
   {
     country: 'Allemagne',
     city: 'Munich'
   }
 ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.adresseForm = this.formBuilder.group({
      adresseLigne1 : ['', Validators.required],
      adresseLigne2 : ['', Validators.required],
      codePostale : ['', Validators.required],
      villes:['',Validators.required],
      pays:['',Validators.required],
        });
  }

}
