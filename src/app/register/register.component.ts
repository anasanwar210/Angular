import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{8,15}')]),
  })

  error: string = ''
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  registerFormsInfo(registerFormsInfo: FormGroup) {
    this._AuthService.register(this.registerForm.value).subscribe((data) => {
      if (data.message == 'success') {
        this._Router.navigate(['/login']);
      } else {
        this.error  = data.errors.email.message;
      }
    });

  }

  ngOnInit(): void {
  }

}
