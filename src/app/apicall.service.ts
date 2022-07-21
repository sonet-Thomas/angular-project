import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(
    private http:HttpClient
  ) { }
  getPost(){
    return this.http.get<any>('https://hamon-interviewapi.herokuapp.com/students/?api_key=aFFe7');
  }
  getClassroom(){
    return this.http.get<any>('https://hamon-interviewapi.herokuapp.com/classrooms/?api_key=aFFe7');
  }
  getSubjects(){
    return this.http.get<any>('https://hamon-interviewapi.herokuapp.com/subjects/?api_key=aFFe7')
  }
}
