import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeRoutingModule } from './office-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { AddOfficePage } from './add-office/add-office.page';

const pages = [AddOfficePage];

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, OfficeRoutingModule, SharedModule, IonicModule],
})
export class OfficeModule {}
