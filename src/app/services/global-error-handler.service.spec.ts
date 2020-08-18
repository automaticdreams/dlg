import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { SystemErrorComponent } from '../system-error/system-error.component';
import { Location } from '@angular/common';

describe('GlobalErrorHandlerService', () => {
  let location: Location;
  let router: RouterTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'error', component: SystemErrorComponent}])]
    });
    router = TestBed.inject(RouterTestingModule);
    location = TestBed.inject(Location);
  });

  it('should be created', () => {
    const service: GlobalErrorHandlerService = TestBed.inject(GlobalErrorHandlerService);
    expect(service).toBeTruthy();
  });

  it('should redirect to error page when error is triggered', fakeAsync(() => {
    const service: GlobalErrorHandlerService = TestBed.inject(GlobalErrorHandlerService);
    const mockErrorResponse = { status: 401, statusText: 'Bad Request', message: 'Friendly Message' };
    service.handleError(mockErrorResponse);
    tick();
    expect(location.path()).toBe('/error');
  }));
});
