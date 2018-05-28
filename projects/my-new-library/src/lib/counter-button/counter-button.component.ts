import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  countChanged = new EventEmitter<number>();
  clickCount = 0;
  visible = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Increments the count when the button is clicked and emits an event
   * to notify parent compont of new count value
   */
  handleButtonClick() {
    this.clickCount++;
    this.visible = this.visible ? this.visible : true;
    this.countChanged.emit(this.clickCount);
  }
}
