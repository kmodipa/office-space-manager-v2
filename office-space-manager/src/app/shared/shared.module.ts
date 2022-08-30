import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { IonicModule } from '@ionic/angular';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

const components = [
  OfficeCardComponent,
  TopNavbarComponent,
  AddButtonComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule],
  exports: [...components],
})
export class SharedModule {}
