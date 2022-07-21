import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from '../apicall.service'; 
import { mode2 } from '../posts/post-create/post-create-component';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  arr:any=[]
  constructor(private api:ApicallService,private dialog:MatDialog) { }

  ngOnInit(): void {
this.api.getClassroom().subscribe((res)=>{
this.arr=res;
console.log(this.arr)
}
)
  }
  modal(post:any){
    let di=this.dialog.open(mode2,{
    width:'250px',
    data:{
      id:post.id,
      name:post.name,
      size:post.size,
      layout:post.layout,
      type:post="classroom"
    }
    })
    di.afterClosed().subscribe(result=>{
      console.log("sonet")
    })
  }
}
