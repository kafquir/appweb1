import { Component, OnInit } from '@angular/core';
import {DynamicElement} from './dynamicElement.ts'

@Component({
  selector: 'app-persone-de-contact',
  templateUrl: './persone-de-contact.component.html',
  styleUrls: ['./persone-de-contact.component.scss']
})
export class PersoneDeContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

        dynamicArray : Array<DynamicElement>();
        newElement: any = {};
        this.newElement = {elem1: "", elem2: "",elem3:"", elem4:"", elem5:""};
        this.dynamicArray.push(this.newElement);
  }

  addRow(index) {
      this.newElement = {elem1: "", elem2: "",elem3:"", elem4:"", elem5:""};
      this.dynamicArray.push(this.newElement);
      console.log(this.dynamicArray);
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
