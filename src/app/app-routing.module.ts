import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.page').then( m => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },]
  export class AppRoutingModule{}