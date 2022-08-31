import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information/information.component';
import { VisiMisiComponent } from './visi-misi/visi-misi.component';
import { ManagementComponent } from './management/management.component';
import { SusunanOrganisasiComponent } from './susunan-organisasi/susunan-organisasi.component';
import { PemegangLisensiComponent } from './pemegang-lisensi/pemegang-lisensi.component';
import { HubungiKamiComponent } from './hubungi-kami/hubungi-kami.component';
import { TentangKamiComponent } from './tentang-kami.component';



@NgModule({
  declarations: [
    InformationComponent,
    VisiMisiComponent,
    ManagementComponent,
    SusunanOrganisasiComponent,
    PemegangLisensiComponent,
    HubungiKamiComponent,
    TentangKamiComponent
  ],
  exports: [
    TentangKamiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TentangKamiModule { }
