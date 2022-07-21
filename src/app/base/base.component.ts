import { Component, Directive, EventEmitter, Injectable, OnInit } from '@angular/core';

@Component({
  template: ''
})
@Injectable()
export abstract class Base implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("base class")
    
  }
  
}
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent extends Base {
  fontColor='blue';
  sayHelloId='';
  canClick=false;
  edit:boolean=false;
  noedit:boolean=false;
  constructor(){
    super();
    console.log("child class");
  }
  
  name = 'Angular';
  sayMessage(){
    alert('Hi sonet thomas how are you');
  }
  onEditable(){
    this.canClick=!this.canClick;
    if(this.canClick){
      this.edit=!this.edit;
    }
    else this.noedit=!this.noedit;
  }
  
}

export interface son{
  
}
@Directive({selector: 'app-interval-dir', outputs: ['everySecond', 'fiveSecs: everyFiveSeconds']})
export class IntervalDirComponent {
  everySecond = new EventEmitter<string>();
  fiveSecs = new EventEmitter<string>();

  constructor() {
    setInterval(() => this.everySecond.emit('event'), 1000);
    setInterval(() => this.fiveSecs.emit('event'), 5000);
  }
}

@Component({
  selector: 'app-my-output',
  template: `
    <app-interval-dir
      (everySecond)="onEverySecond()"
      (everyFiveSeconds)="onEveryFiveSeconds()">
    </app-interval-dir>
  `
})
export class MyOutputComponent {
  onEverySecond() {
    console.log('second');
  }
  onEveryFiveSeconds() {
    console.log('five seconds');
  }
}

@Component({
  selector:'testing',
  templateUrl:'./testing.component.html',
  styleUrls:['./testing.component.scss']
})
export class testingApp{}
