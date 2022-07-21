import { Component, Input, OnInit } from "@angular/core";
import { POST } from "../Post-model";
import { son } from "../posts.service";
@Component({
selector:'app-post-list',
templateUrl:'./post-list-comp.html',
styleUrls:['post-list.scss']
})
export class PostListComponent implements OnInit{
     post1:POST[]=[]
    constructor(public sonet:son){

    }
    ngOnInit(): void {
        this.post1=this.sonet.getPost();
        console.log(this.post1)
    }
post=[{
    title:'fisst',id:1
},
{
    title:'second',id:2
},
{
    title:'third',id:3
}
]
}