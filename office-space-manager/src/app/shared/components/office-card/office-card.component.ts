import { Component, Input, OnInit } from '@angular/core';
import { OfficeModel } from '../../../core/models/office.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent implements OnInit {
  @Input() office: OfficeModel;
  @Input() openOffice: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleOpenOffice(): void {
    if (this.openOffice) {
      this.router.navigate([`office/office-home/${this.office.officeId}`]);
    }
  }

  handleEditOffice(): void {
    // TODO: Route to edit office
  }
}
