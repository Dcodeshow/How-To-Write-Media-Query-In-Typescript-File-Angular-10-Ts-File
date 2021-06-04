import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //will do some basic example like will create a
  //array list and in desktop will show 6 list and in mobileMedia
  // will show 4 list.
  
  Course:string[] = ['Angular','Javascript','Php','Jquery','html','Css']

  //taking media width in variable
  mobileMedia:any = window.matchMedia("(max-width:520px)")
  
  //will use constructor method
 constructor(){
   if(this.mobileMedia.matches)
   {
     this.Course.splice(-3,3)
   }
 }

 //in mobile will show only 4 list with the help of  splice method


}




