import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  handleClick(): void {
    this.buttonClick.emit(true);
  }
}
