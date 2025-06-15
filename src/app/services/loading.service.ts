import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private globalLoading: WritableSignal<boolean> = signal(false);
  private scopedLoadings = new Map<string, ReturnType<typeof signal<boolean>>>();

  // Global Loading
  setGlobalLoading(value: boolean) {
    this.globalLoading.set(value);
  }

  getGlobalLoading() {
    return this.globalLoading.asReadonly();
  }

  // Scoped Loading (e.g. 'chats', 'media', etc.)
  setScopedLoading(scope: string, value: boolean) {
    if (!this.scopedLoadings.has(scope)) {
      this.scopedLoadings.set(scope, signal(value));
    } else {
      this.scopedLoadings.get(scope)!.set(value);
    }
  }

  getScopedLoading(scope: string) {
    if (!this.scopedLoadings.has(scope)) {
      this.scopedLoadings.set(scope, signal(false));
    }
    return this.scopedLoadings.get(scope)!.asReadonly();
  }
}
