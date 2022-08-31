import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BerandaComponent} from "./beranda/beranda.component";
import {TentangKamiComponent} from "./tentang-kami/tentang-kami.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {ArtikelComponent} from "./artikel/artikel.component"; // CLI imports router

const routes: Routes = [
  {
    path: 'beranda', component:BerandaComponent
  },
  {
    path: 'about-us', component:TentangKamiComponent
  },
  {
    path: 'artikel', component: ArtikelComponent
  },
  { path: '',   redirectTo: '/beranda', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
