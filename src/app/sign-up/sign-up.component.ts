import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface Student{
  email: string,
  password: string,
  fname:string,
  isChecked:false
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,JsonPipe,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

student:Student={
  email:'',
  password: '',
  fname:'',
  isChecked:false
}

submit(){
  alert("submitted")
console.log(this.student)
}


signIn:any=new FormGroup({
  email: new FormControl('',[Validators.required,Validators.minLength(4),Validators.email]),
  reg: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)
})

reactivesubmit(){
console.log(this.signIn.value);
}



}
