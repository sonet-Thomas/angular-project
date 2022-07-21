import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a = "sonet";
  allowNewServer = false;
  message: string = "";
  son:string="";

  constructor( public rou:Router) { }

  ngOnInit(): void {
  }
  studentList(){
   this.rou.navigate(['/Student'])
  }
  classRoomList(){
    this.rou.navigate(['/Classroom'])
  }
  SubjectList(){
    this.rou.navigate(['/Subject'])
  }
}
