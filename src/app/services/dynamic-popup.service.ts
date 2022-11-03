import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicPopupService {
  private confirmFunction!: () => void | undefined;
  id!: string;
  componentRef: any;
  addAddressPopupComponent!: HTMLCollectionOf<Element>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.addAddressPopupComponent = document.getElementsByTagName('app-message-popup');
  }

  bindFunctionFromComponent = (fn: () => void) => {
    this.confirmFunction = fn;
  }

  displayConfirmModal = (component?: any) => {
    if ((this.addAddressPopupComponent.length) >= 1) {
      this.destroyModal();
    }
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    document.body.style.overflow = 'hidden'

  }

  destroyModal = () => {
    document.body.style.overflow = ''
    this.componentRef.destroy();
  }
}
