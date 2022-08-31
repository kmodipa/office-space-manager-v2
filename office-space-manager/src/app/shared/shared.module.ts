import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { IonicModule } from '@ionic/angular';

const components = [OfficeCardComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule],
  exports: [...components],
})
export class SharedModule {}
