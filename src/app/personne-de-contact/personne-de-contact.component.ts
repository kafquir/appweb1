import { Component, OnInit } from '@angular/core';
import {DynamicElement} from '../dynamicElement.model'
import { ClientService } from "../services/clientService";

@Component({
  selector: 'app-personne-de-contact',
  templateUrl: './personne-de-contact.component.html',
  styleUrls: ['./personne-de-contact.component.scss']
})
export class PersonneDeContactComponent implements OnInit {


  constructor(private clientService : ClientService) { }
  dynamicArray : Array<DynamicElement>=[];
  newElement: any = {};

  ngOnInit(): void {

}
  addRow() {
      this.newElement = {elem1: "", elem2: "",elem3:"", elem4:"", elem5:""};
      this.dynamicArray.push(this.newElement);
      return true;
  }

  deleteRow(index) {
      if(this.dynamicArray.length ==1) {
          return false;
      } else {
          this.dynamicArray.splice(index, 1);
          return true;
      }
}
}
