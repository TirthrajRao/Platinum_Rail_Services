import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import * as _ from 'lodash';
declare var $: any;
import * as moment from 'moment'; // add this 1 of 4
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  createNewJobForm: FormGroup;
  listOfInstructor;
  startingDateValue
  listOfCourse;
  jobList = [];
  jobHeader = [
    'Sr.No', 'Client', 'Location', 'Instructor', 'Course'
  ]

  constructor(public adminService: AdminService) { }

  ngOnInit() {


    this.createNewJobForm = new FormGroup({
      clientName: new FormControl(''),
      location: new FormControl(''),
      instructor: new FormControl(''),
      course: new FormControl(''),
      startingDate: new FormControl('')
    });

    $('#startDate').pickadate();
    this.getJobList();
    this.getInstructorsList();
    this.getCourseList();

    var start = moment(this.startingDateValue).format('YYYY MM DD'), // Sept. 1st
      end = moment('2019-11-02'), // Nov. 2nd
      day = 'sunday';                    // Sunday

    var result = [];
    var current = start.clone();

    while (current.day(7 + day).isBefore(end)) {
      result.push(current.clone());
    }

    console.log(result.map(m => m.format('LLLL')));
  }

  getInstructorsList() {
    this.adminService.getInstructorsList().subscribe((data: any) => {
      console.log(data)
      this.listOfInstructor = data;
    })
  }

  getCourseList() {
    this.adminService.getCoursesList().subscribe((data: any) => {
      this.listOfCourse = data;
      // console.log("course list in job page", this.listOfCourse);
    })
  }

  getJobList() {
    this.adminService.getJobList().subscribe((data: any) => {
      _.forEach(data, (val) => {
        this.jobList.push(Object.values(val));
      })
      // console.log("job details list", this.jobList);
    })
  }

  addNewJob() {
   this.startingDateValue= this.createNewJobForm.controls.startingDate.setValue($('#startDate').val());
    console.log("create new job details", this.createNewJobForm.value)
  }

}
