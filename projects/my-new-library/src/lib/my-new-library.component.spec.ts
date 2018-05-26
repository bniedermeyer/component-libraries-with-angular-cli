import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewLibraryComponent } from './my-new-library.component';

describe('MyNewLibraryComponent', () => {
  let component: MyNewLibraryComponent;
  let fixture: ComponentFixture<MyNewLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
