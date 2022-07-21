import { Component, EventEmitter, Inject, Injectable, Input, Output } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MatSnackBar ,MatSnackBarConfig,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from "@angular/material/snack-bar";
  import { MatIcon } from "@angular/material/icon";
  import { MatInput } from "@angular/material/input";
  import { SnackbarComponent } from "src/app/sample/snack";
  import { HeaderComponent } from "src/app/Header/header";
  import { POST } from "../Post-model";
  import { son } from "../posts.service";
import { FormGroup, NgForm } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { inject } from "@angular/core/testing";
  @Component({
    selector: 'snack-bar-component-example-snack',
    templateUrl: 'snack-bar-component-example-snack.html',
    styleUrls:['./snack.scss']
  })
  export class PizzaPartyComponent {}
  
@Component({
    selector:'app-post-create',
    templateUrl:'./post-create-component.html',
    styleUrls:['./snack.scss']
    //  [`
    //   .example-pizza-party {
    //     color: hotpink;
    //     background-color:green;
    //   }
    // `],
})
export class PostCreateComponent{
  enteredTitle=""
  entereddiscription=""
  name = 'Angular 4';
  ng1:string=""
  son:string=""
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Output() PostCreated=new EventEmitter<POST>();
  addExtraClass: boolean = false;
    constructor(private toastr:ToastrService,private _snackBar: MatSnackBar,public sonet:son){}
    enter=''
    newpost="";
    value='';
   on(post:HTMLTextAreaElement){
      this.newpost=post.value;
   } 
   ngmm(){
     this.son=this.ng1;
   }
   ng(){
    //    this.newpost=this.enter;
    //    this.toastr.success('Hello world!', 'Toastr fun!');
    // let config = new MatSnackBarConfig();
    // config.panelClass =  ['test'] ;
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.panelClass =  ['snackbar-container'] ;
    this._snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  //   this._snackBar.openFromComponent( PizzaPartyComponent, {
  //       duration:5000,
  //       // horizontalPosition:'center',
  //       verticalPosition:'top',
  //       horizontalPosition :'right'
  //     });
       
  //  }
   }
   onAddpost(){
     const td:POST={
       title:this.enteredTitle,
       content:this.entereddiscription
     }
     this.PostCreated.emit(td);
   }
   onadd(form:NgForm){
    const td:POST={
      title:form.value.title,
      content:form.value.content
    }
    // this.PostCreated.emit(td);
    this.sonet.putPost(form.value.title,form.value.content)
   }
}
@Component({
  selector:'modal',
  templateUrl:'modal-component.html'
})
export class mod{

name=""
animal=""
constructor(public dialog:MatDialog){

}
open(){
  let di=this.dialog.open(mode2,{
  width:'250px',
  data:{
    name:this.name
  }
  })
  di.afterClosed().subscribe(result=>{
    console.log("sonet")
    this.animal=result;
  })
}
}

@Component({
  selector:'model2',
  templateUrl:'modal2-component.html'
})
export class mode2{
  model:any
  constructor(public dialogRef:MatDialogRef<mode2>,
    @Inject(MAT_DIALOG_DATA) public data:any){
  }
 
  onNoClick(){
    this.dialogRef.close(this.model);
    console.log(this.model);
  }
 
  
}
