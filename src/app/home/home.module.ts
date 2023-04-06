import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { HomePage } from './home.page';
import { HomeService } from '../home.service';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [
  ],
  providers:[HomeService]
})
export class HomePageModule { }
