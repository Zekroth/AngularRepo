import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {

  myForm :FormGroup;
  constructor() {
    this.myForm= new FormGroup({
      txtTitolo: new FormControl('',[Validators.required, Validators.maxLength(30)]),
      txtAutore: new FormControl('', [Validators.required]),
      txtTesto: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  visualizzaArticolo() :void{
    console.log(this.myForm.value);

    console.log(this.myForm.controls['txtTitolo'].value);
    console.log(this.myForm.controls['txtAutore'].value);
    console.log(this.myForm.controls['txtTesto'].value);


  }
}
