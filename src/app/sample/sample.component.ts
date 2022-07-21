import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { HttpClient } from '@angular/common/http';
import { Snackbar } from './snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { POST } from '../posts/Post-model';
import { mod } from '../posts/post-create/post-create-component';
import { mode2 } from '../posts/post-create/post-create-component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export interface userType{
  id:number,
  name:string,
  age:number,
  email:string
}
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  // @Input() message: string = "";
  // @Input() son:string="";
  so=new Array();
  obj:any=new Array();
  ses:any;
  loc:any;

  v:boolean=false;
  arr2:POST[]=[];
  son:any=[];
  ar1=[];
  posts:any=[];
  arr=[{id:1,name:'sonet'},
  {id:2,name:'muttan'},
  {id:3,name:'akhil'},
  {id:4,name:'tony'},

  ]
  displayedColumns: string[] = ['id', 'name', 'age', 'gmail'];
  dataSource:MatTableDataSource<userType> | undefined;
  
  constructor(private api:ApicallService,private ap:HttpClient,private snackbar:Snackbar,private _snackbar:MatSnackBar,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.session();
    this.api.getPost().subscribe((res)=>{
      this.dataSource= res.students
      console.log("res", this.dataSource);
      })
      
      
  }
  visibilty(){
this.v=!this.v;

  }
  session(){
    this.ses=sessionStorage.getItem('ses');
    // if(!this.ses){
    //   this.ses=sessionStorage.setItem('ses','sonet');
    // }
    // this.loc=localStorage.getItem('loc');
    // if(!this.loc){
    //   this.loc=localStorage.setItem('loc','nithya');
    // }
    console.log('local storage',this.loc);
  }

  OPostCraeted(post:any){
    this.posts.push(post)
  }
  onSubmit(data:any){
    this.ap.post('https://jsonplaceholder.typicode.com/posts',data)
    .subscribe((resu)=>{
      console.warn(resu)
    })
  }
  snack() {
    this.snackbar.open('Added Successfully!');
  }
  modal(post:any){
    
      let di=this.dialog.open(mode2,{
      width:'250px',
      data:{
        id:post.id,
        name:post.name,
        age:post.age,
        email:post.email,
        type:post='student'
      }
      })
      di.afterClosed().subscribe(result=>{
        console.log("sonet")
      })
    }
}
