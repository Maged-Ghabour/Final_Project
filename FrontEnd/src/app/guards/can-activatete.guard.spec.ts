import { TestBed } from '@angular/core/testing';

import { CanActivateteGuard } from './can-activatete.guard';

describe('CanActivateteGuard', () => {
  let guard: CanActivateteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
