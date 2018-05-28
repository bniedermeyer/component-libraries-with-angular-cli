import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { CounterButtonComponent } from './counter-button/counter-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CounterButtonComponent],
  exports: [CounterButtonComponent]
})
export class MyLibModule {}
