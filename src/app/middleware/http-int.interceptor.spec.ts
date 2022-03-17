import { TestBed } from '@angular/core/testing';

import { HttpIntInterceptor } from './http-int.interceptor';

describe('HttpIntInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpIntInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpIntInterceptor = TestBed.inject(HttpIntInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
