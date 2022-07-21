import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  template: `
   <div class="snackbar-container"
     (animationend)="animationDone($event)">
     {{ content }} <button (click)="close()">&#x2715;</button>
   </div>
  `,animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class SnackbarComponent {
  @Input() content = '';
  @Output() afterClose = new EventEmitter();

  animationDone(event: AnimationEvent) {
    if (event.animationName === 'snackbarOut') {
      this.afterClose.emit(true);
    }
  }

  constructor(private host: ElementRef<HTMLElement>) { }
  ngOnInit() {
    console.log("child init")
  }
  ngOnDestroy(){
    console.log("destroying child...")
  }
  get container(): HTMLElement {
    return this.host.nativeElement.querySelector('.snackbar-container') as HTMLElement;
  }

  close() {
    this.container.style.animation = 'snackbarOut 0.3s';
  }
ngDestroy(){
  this.container.style.animation = 'snackbarOut 0.3s';
}
}