import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    MaterialModule,
     ],
  providers: [],
})
export class AppComponent {}
