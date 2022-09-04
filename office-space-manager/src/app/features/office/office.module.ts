import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeRoutingModule } from './office-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { AddOfficePage } from './add-office/add-office.page';
import { OfficeHomePage } from './office-home/office-home.page';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { ModalComponent } from './modal/modal.component';

const pages = [AddOfficePage, OfficeHomePage];

@NgModule({
  declarations: [...pages, ModalComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    SwiperModule,
  ],
})
export class OfficeModule {}
