import { Injectable } from '@angular/core';
import { Articolo } from '../articolo/articolo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  private myArticolo: Articolo;
  private apiGetUrl: string;
  constructor(private http: HttpClient) {
    this.apiGetUrl = "http://localhost/angular/api/getArticolo.php";
  }
  getArticolo(): Articolo{
    return this.myArticolo;
  }
  getArticoloObservable(): Observable<Articolo>{
    return this.http.get(this.apiGetUrl)
      .pipe(map (risposta => risposta['dati'] as Articolo ) );
  }
}
