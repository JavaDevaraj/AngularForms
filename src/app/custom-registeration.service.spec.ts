import { TestBed, inject } from '@angular/core/testing';

import { CustomRegisterationService } from './custom-registeration.service';

describe('CustomRegisterationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRegisterationService]
    });
  });

  it('should be created', inject([CustomRegisterationService], (service: CustomRegisterationService) => {
    expect(service).toBeTruthy();
  }));
});
