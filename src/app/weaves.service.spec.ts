import { TestBed } from '@angular/core/testing';

import { WeavesService } from './weaves.service';

describe('WeavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeavesService = TestBed.get(WeavesService);
    expect(service).toBeTruthy();
  });
});
