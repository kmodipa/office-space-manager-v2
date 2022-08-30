import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  @Input() title: string;

  constructor(private location: Location) {}

  ngOnInit() {}

  handleBackNavigation(): void {
    this.location.back();
  }
}
