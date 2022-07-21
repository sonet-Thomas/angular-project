import { Injectable, ComponentFactoryResolver, Injector, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SnackbarComponent } from './snack';

@Injectable()
export class Snackbar {

  constructor(private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  open(content: string) {
    const factory = this.resolver.resolveComponentFactory(SnackbarComponent);
    const componentRef = factory.create(this.injector);

    componentRef.instance.content = content;
    componentRef.hostView.detectChanges();
    
    const { nativeElement } = componentRef.location;

    this.document.body.appendChild(nativeElement);

    componentRef.instance.afterClose.subscribe(() => {
      componentRef.destroy();
      this.document.body.removeChild(nativeElement);
    });
  }

}