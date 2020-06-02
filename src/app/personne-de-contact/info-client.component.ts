import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder , FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {
  clientForm = new FormGroup ({
    reference: new FormControl(''),
    nom1: new FormControl(''),
    nom2: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      reference : ['', Validators.required],
      nomLigne1 : ['', Validators.required],
      nomLigne2 : ['', Validators.required],
      email:['',[Validators.required,Validators.minLength(6)]]
        });
  }


}
