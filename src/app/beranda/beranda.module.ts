import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { BerandaComponent } from './beranda.component';



@NgModule({
  declarations: [
    HeroComponent,
    ContentComponent,
    BerandaComponent
  ],
  exports: [
    HeroComponent,
    ContentComponent,
    BerandaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BerandaModule { }
