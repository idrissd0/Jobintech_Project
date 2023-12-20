import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.scss']
})
export class StartquizComponent {

  @ViewChild('username') nameKey! : ElementRef;

  constructor() { }

  ngOnInit():void {  }


  startQuiz(){
    localStorage.setItem("username", this.nameKey.nativeElement.value);
  }
}
