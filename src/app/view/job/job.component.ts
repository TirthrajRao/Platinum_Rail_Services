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

    this.getJobList();
    this.getInstructorsList();
    this.getCourseList();
    $('#startDate').pickadate()
    // function getDate(){
      // this.startDating()
      $('#startDate').click(function(){
        this.startingDateValue.setValue($('#startDate').val());
        console.log(this.startingDateValue)
      })
    // }
    // var start = moment(this.startingDateValue), // Sept. 1st
    //   end = moment('2019-11-02'), // Nov. 2nd
    //   day = 'sunday';                    // Sunday

    // var result = [];
    // var current = start.clone();

    // while (current.day(7 + day).isBefore(end)) {
    //   result.push(current.clone());
    // }

    // console.log("date events ============>=",result.map(m => m.format('LLLL')));

  }

  changeEvent(event){
    console.log("event==========", event)
  }
  getInstructorsList() {
    this.adminService.getInstructorsList().subscribe((data: any) => {
      console.log(data)
      this.listOfInstructor = data;
    })
  }
  

  startDating() {
console.log("function calling")
function getDaysBetweenDates(start, end, dayName) {
  var result = [];
  var days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
  var day = days[dayName.toLowerCase().substr(0,3)];
  // Copy start date
  var current = new Date(start);
  // Shift to next of required days
  current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
  // While less than end date, add dates to result array
  while (current < end) {
    result.push(new Date(+current));
    current.setDate(current.getDate() + 7);
  }
  return result;  
}
    // function getDateArray(obj) {
    //   this.startingDateValue = $('#startDate').val();
    //   console.log("value of date", this.startingDateValue)
    //   var start = obj.startDate.clone();
    //   var end = obj.endDate.clone();
    //   var res = [];
    //   while (start.isBefore(end)) {
    //     var day = start.format('dddd').toLowerCase();
    //     if (obj[day]) {
    //       res.push(start.toDate());
    //     }
    //     start.add(1, 'd');
    //   }
    //   return res;
    // }

    // var obj = {
    //   startDate: moment(),
    //   endDate: moment().add(3, "weeks"),
    //   friday: true,
    //   monday: true,
    //   saturday: false,
    //   sunday: false,
    //   thursday: false,
    //   tuesday: false,
    //   wednesday: true
    // };
    // var res = getDateArray(obj);
    // console.log(res);
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
    this.startingDateValue = this.createNewJobForm.controls.startingDate.setValue($('#startDate').val());
    console.log("create new job details", this.createNewJobForm.value)
  }

}
