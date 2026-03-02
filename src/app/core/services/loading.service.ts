import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private activeRequests = 0;
  private isLoading = new BehaviorSubject<boolean>(false);

  showLoading() {
    this.activeRequests++;

    if (this.activeRequests === 1) {
      this.isLoading.next(true);
    }
  }

  hideLoading() {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }

    if (this.activeRequests === 0) {
      setTimeout(() => {
        this.isLoading.next(false);
      }, 1000);
    }
  }

  getLoadingStatus() {
    return this.isLoading.asObservable();
  }
}
