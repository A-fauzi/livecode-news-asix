import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./shared/header/header.module";
import {FooterModule} from "./shared/footer/footer.module";
import {BerandaModule} from "./beranda/beranda.module";
import {TentangKamiModule} from "./tentang-kami/tentang-kami.module";
import {AppRoutingModule} from "./app-routing-module";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {ArtikelModule} from "./artikel/artikel.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    BerandaModule,
    TentangKamiModule,
    ArtikelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
