import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../../../core/models/office.model';

@Component({
  selector: 'app-office-home',
  templateUrl: './office-home.page.html',
  styleUrls: ['./office-home.page.scss'],
})
export class OfficeHomePage implements OnInit {
  // TODO: Remove
  office: OfficeModel = {
    name: 'Specno',
    address: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530',
    email: 'info@specno.com',
    phone: '0987654321',
    capacity: 200,
    hexcolor: 'FE9B71',
    officeId: 'jsgf',
  };

  searchPhrase: string;

  constructor() {}

  ngOnInit() {}

  handleAddStaffMember(): void {
    // TODO: Open Pop-up modal
    console.log('Open');
  }

  handleLoadMoreStaffMembers(event: any): void {
    // TODO: Load more data
    setTimeout(() => {
      console.log('Loading Done');
      event.target.complete();
    }, 3000);
  }
}
