import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from '../apicall.service';
import { mode2 } from '../posts/post-create/post-create-component';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
sub:any=[]
clas:any=[]
arr2:any=[]
  constructor(public api:ApicallService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.api.getSubjects().subscribe((res)=>{
     this.sub=res.subjects.map((value:any)=>{
       return {
         ...value,
         classRoom:"",
         sonet:"sonet"
       }
     });
     console.log('subject',this.sub)
    })
    this.api.getClassroom().subscribe((res)=>{
      this.clas=res;
    })
  }
  modal(post:any){
    let di=this.dialog.open(mode2,{
    width:'250px',
    data:{
      id:post.credits,
      name:post.name,
      teacher:post.teacher,
      credits:post.credits,
      type:post="subject",
    }
    })
    di.afterClosed().subscribe(()=>{
      console.log("sonet")
    })
  }
  modalSubject(post:any){
    const obj={...post};
    console.log('classRooms',post)
      this.clas.classrooms.forEach((arr:any) => {
        this.arr2.push(arr.name);
      });
    let di=this.dialog.open(mode2,{
      width:'250px',
      data:{
        id:post.credits,
        name:post.name,
        teacher:post.teacher,
        credits:post.credits,
        type:post="subject To class",
        classRoom:post=this.arr2
      }
      })
      
      console.log('arr',this.arr2)
      
        di.afterClosed().subscribe((value)=>{
          this.arr2.length=0;
        console.log("sonet",value);
        const index=this.sub.findIndex((value:any)=>value.id===obj.id);
        this.sub[index].classRoom=value;
        
      })
      
  }
}
