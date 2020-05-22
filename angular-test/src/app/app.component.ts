import { Component } from '@angular/core';
import { ArticoliService } from './service/articoli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  myArticolo;

  constructor(private articoliService:ArticoliService){
    this.myArticolo = articoliService.getArticolo();
  }

  mostraMessaggioRingraziamento(event):void{
    let message: string;
    message = 'Grazie per il like\n';
    message = message.concat(event.numApprezzamenti);
    alert(message);
  }

  getArticoloObservable(){
    return this.articoliService.getArticoloObservable().subscribe(
      result => this.myArticolo = result
    );
  }
}
