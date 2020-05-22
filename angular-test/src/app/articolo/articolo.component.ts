import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {


  @Input() articolo:Articolo;
  @Output() like = new EventEmitter<{numApprezzamenti:number}>();

  ngOnInit(): void {}

  incrementaApprezzamenti():void{
    if(this.articolo.numApprezzamenti == NaN){
      this.articolo.numApprezzamenti = 1;
    }else{
      this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
    }
    this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
  }
}
