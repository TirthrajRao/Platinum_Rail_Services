import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import * as _ from 'lodash';
declare var $: any;
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  @Output() courseIndex;
  createInstructorForm: FormGroup;
  instructorList = [];
  instructorHeader = [
    'Sr.No', 'Name', 'Jobs'
  ]
  constructor(public adminService: AdminService) { }

  ngOnInit() {

    this.createInstructorForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
    this.getInstructorsList();
  }

  addNewInstructor() {
    console.log("instructors details", this.createInstructorForm.value);
    this.adminService.createNewInstructor(this.createInstructorForm.value)
    this.createInstructorForm.reset();
    $('#modalLoginForm').modal('toggle'); //or  $('#IDModal').modal('hide');

  }

  getInstructorsList() {
    this.adminService.getInstructorsList().subscribe((data: any) => {
      _.forEach(data, (val) => {
        this.instructorList.push(Object.values(val));
      })
      console.log("instructors list data", this.instructorList);
    })
  }

}
