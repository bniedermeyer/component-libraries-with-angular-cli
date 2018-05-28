import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  clickCount = 0;
  visible = false;

  constructor() {}

  ngOnInit() {}

  handleButtonClick() {
    this.clickCount++;
    this.visible = true;
  }
}
