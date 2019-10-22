import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { EventEmitter } from 'events';
import { $ } from 'protractor';
import * as _ from 'lodash';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   courseList = [];
  createCourseForm: FormGroup;
  courseHeader = [
    'Sr.No','Title','Duration(Days)'
  ]

  constructor(public adminService: AdminService) { }

  ngOnInit() {

    this.createCourseForm = new FormGroup({
      courseName: new FormControl(''),
      duration: new FormControl('')
    });
    this.getCourseList()
  }


  getCourseList() {
    this.adminService.getCoursesList().subscribe((data: any) => {
      _.forEach(data, (val) => {
        this.courseList.push(Object.values(val));
      })
      console.log("course list data", this.courseList)
    })
  }
  addNewCourse(){
    console.log("new course details", this.createCourseForm.value)
    this.adminService.createNewCourse(this.createCourseForm.value)
    this.createCourseForm.reset();

  }
}
