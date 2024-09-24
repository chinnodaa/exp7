import { AsyncPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable,interval,map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe,DatePipe,AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
name:string="vamsi krishna"
branch:string="computer science enginerring is no more"

currentDate:Date=new Date()
currentTime:Observable<Date> = new Observable<Date>;
constructor(){
  this.currentTime = interval(1000).pipe(map(()=>new Date))
}
}
