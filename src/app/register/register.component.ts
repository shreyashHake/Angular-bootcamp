import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frmRegister: FormGroup;
  username = new FormControl(),
  password = new FormControl()

  constructor() {
    this.frmRegister = this.createFormGroup();
  }

  ngOnInit(): void {

  }

  createFormGroup() {
    return new FormGroup(
      this.username,
      this.password
    );
  }

  onSubmit() {
    console.log(this.frmRegister.value);

  }
}
