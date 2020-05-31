import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  registerForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
    submitted = false ;
    loading = false ;


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      username : ['', Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
        });
  }
  get f() { return this.registerForm.controls; }

onSubmit()
{
  this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }

       this.loading = true;
}


}
