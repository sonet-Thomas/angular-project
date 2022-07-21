import { Injectable } from "@angular/core";
import { POST } from "./Post-model";
@Injectable ({providedIn:'root'})
export class son{
post:POST[]=[];
getPost(){
    return [...this.post]
}
putPost(title:string,content:string){
const pos:POST={title:title,content:content}
this.post.push(pos)
}
}