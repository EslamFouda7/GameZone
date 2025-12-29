import { TestBed } from '@angular/core/testing';

import { favoritesService } from '../../services/favorites/favorites-servic'

describe('Favorites', () => {
  let service:favoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(favoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
