import { TestBed, inject } from '@angular/core/testing';

import { ThemeListService } from './theme-list.service';

describe('ThemeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeListService]
    });
  });

  it('should be created', inject([ThemeListService], (service: ThemeListService) => {
    expect(service).toBeTruthy();
  }));
});
