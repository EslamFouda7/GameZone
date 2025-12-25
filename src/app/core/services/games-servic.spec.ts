import { TestBed } from '@angular/core/testing';

import { GamesServic } from './games-servic';

describe('GamesServic', () => {
  let service: GamesServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
