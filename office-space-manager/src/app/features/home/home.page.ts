import { Component } from '@angular/core';
import { OfficeModel } from '../../core/models/office.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  office: OfficeModel = {
    name: 'Specno',
    address: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530',
    email: 'info@specno.com',
    phone: '0987654321',
    capacity: 200,
    hexcolor: 'FE9B71',
    officeId: 'jsgf',
  };

  constructor() {}
}
