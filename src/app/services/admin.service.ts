import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  instructorList
  courseList;
  constructor() { }

  getInstructorsList() {
    return new Observable(observer => {
      this.instructorList = [
        {
          instructorName: "Alex pedley",
          jobs: "7"
        }, {
          instructorName: "Chris wood",
          jobs: "10"
        }, {
          instructorName: "Sarah Wells",
          jobs: "0"
        },
        {
          instructorName: "Leam Brennan",
          jobs: "13"
        }
      ]
      observer.next(this.instructorList);
      observer.complete();
    });
  }


  getCoursesList() {
    return new Observable(observer => {
      this.courseList = [
        {
          courseName: "L3 W14",
          duration: "24"
        }, {
          courseName: "IAG",
          duration: "9"
        }, {
          courseName: "TIC",
          duration: "12"
        },
        {
          courseName: "DCCR",
          duration: "5"
        }
      ]
      observer.next(this.courseList);
      observer.complete();
    });
  }
  createNewCourse(data) {
    console.log("new course service response", data)
  }
  createNewInstructor(data){
    console.log("new instructor details", data);
  }
}

