import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelComponent } from './artikel.component';
import { SearchComponent } from './search/search.component';
import { SnipsComponent } from './snips/snips.component';
import { InvestasiComponent } from './investasi/investasi.component';
import { UnboxingComponent } from './unboxing/unboxing.component';
import { MusimLabaComponent } from './musim-laba/musim-laba.component';
import { EventComponent } from './event/event.component';
import { SnipsExplainedComponent } from './snips-explained/snips-explained.component';
import { HeroArtikelComponent } from './hero-artikel/hero-artikel.component';



@NgModule({
  declarations: [
    ArtikelComponent,
    SearchComponent,
    SnipsComponent,
    InvestasiComponent,
    UnboxingComponent,
    MusimLabaComponent,
    EventComponent,
    SnipsExplainedComponent,
    HeroArtikelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArtikelModule { }
