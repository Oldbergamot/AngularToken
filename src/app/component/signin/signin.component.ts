import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm : FormGroup;
  userNameCtl : FormControl;
  passwordCtl : FormControl;

  constructor(private authService: AuthService,
              private tokenStorageService : TokenStorageService,
              private fb : FormBuilder ) { 
                this.userNameCtl = this.fb.control('',[Validators.required])
                this.passwordCtl = this.fb.control('',[Validators.required])
            
                  this.userForm = this.fb.group(
                    {
                      username : this.userNameCtl,
                      password : this.passwordCtl
                    }
                  )
              };

  ngOnInit(): void {
  }

  submit() {
    if(!this.userForm.valid) {
      return;
    }
    const formVal = this.userForm.value;
  
    this.authService.signin(formVal.username, formVal.password)
        .subscribe((data : any) => {
          console.log(data);
          this.tokenStorageService.saveToken(data.token);
        })
  }

}
