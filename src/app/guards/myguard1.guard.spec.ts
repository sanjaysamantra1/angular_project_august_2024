import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { myguard1Guard } from './myguard1.guard';

describe('myguard1Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myguard1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
