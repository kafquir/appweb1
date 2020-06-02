import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {

  facturationForm = new FormGroup ({
  langue: new FormControl(''),
  numTVA: new FormControl(''),
  tauxTVA: new FormControl(''),
  localisation: new FormControl(''),
  delaiPaiement: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.facturationForm = this.formBuilder.group({
      langue : ['', Validators.required],
      numTVA : ['', Validators.required],
      tauxTVA : ['', Validators.required],
      localisation : ['', Validators.required],
      delaiPaiement:['',Validators.required],
        });
  }

}
