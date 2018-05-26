import { TestBed, inject } from '@angular/core/testing';

import { MyNewLibraryService } from './my-new-library.service';

describe('MyNewLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyNewLibraryService]
    });
  });

  it('should be created', inject([MyNewLibraryService], (service: MyNewLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
