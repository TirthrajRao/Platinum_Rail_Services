import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  createInstructorForm: FormGroup;
  constructor(public adminService: AdminService) { }

  ngOnInit() {

    this.createInstructorForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  addNewInstructor(){
    console.log("instructors details", this.createInstructorForm.value);
    this.adminService.createNewInstructor(this.createInstructorForm.value)
    this.createInstructorForm.reset();
  }

}
