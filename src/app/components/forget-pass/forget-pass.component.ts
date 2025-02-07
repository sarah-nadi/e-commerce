import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavAuthComponent } from "../nav-auth/nav-auth.component";

@Component({
  selector: 'app-forget-pass',
  standalone: true,
  imports: [ReactiveFormsModule, NavAuthComponent],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.css'
})
export class ForgetPassComponent {
  

  forgetPassForm: FormGroup = new FormGroup({
    email : new FormControl(null , [Validators.required])

  })

}
