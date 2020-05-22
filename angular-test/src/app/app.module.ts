import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ArticoloFormComponent } from './articolo/articolo-form/articolo-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TruncatePipe } from './truncate.pipe';
import { ArticoliService } from './service/articoli.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from './capitalize-pipe';
@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent,
    TruncatePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       { path: 'articolo', component: ArticoloComponent },
       { path: 'nuovo', component:ArticoloFormComponent },
       { path: '', redirectTo: '/inarrivo', pathMatch: 'full' }
    ])
  ],
  providers: [ArticoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
