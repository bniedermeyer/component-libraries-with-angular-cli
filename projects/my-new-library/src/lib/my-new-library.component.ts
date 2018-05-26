import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-new-library',
  template: `
    <p>
      my-new-library works!
    </p>
  `,
  styles: []
})
export class MyNewLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
