import { Component, Input, OnInit } from '@angular/core';
import { OfficeModel } from '../../../core/models/office.model';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss'],
})
export class OfficeCardComponent implements OnInit {
  @Input() office: OfficeModel;

  constructor() {}

  ngOnInit() {}
}
