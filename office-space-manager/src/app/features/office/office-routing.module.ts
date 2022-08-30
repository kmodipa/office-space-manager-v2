import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddOfficePage } from './add-office/add-office.page';

const routes: Routes = [
  {
    path: 'add-office',
    component: AddOfficePage,
  },
  {
    path: '',
    redirectTo: 'add-office',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OfficeRoutingModule {}