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
          jobs: "7",
          email: "alex@gmail.com",
          password: "123456"
        }, {
          instructorName: "Chris wood",
          jobs: "10",
          email: "alex@gmail.com",
          password: "123456"
        }, {
          instructorName: "Sarah Wells",
          jobs: "0",
          email: "alex@gmail.com",
          password: "123456"
        },
        {
          instructorName: "Leam Brennan",
          jobs: "13",
          email: "alex@gmail.com",
          password: "123456"
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

  getJobList() {
    return new Observable(observer => {
      this.courseList = [
        {
          client: "SCUK",
          location: "HMP Kirkham",
          instructor: "Alex Pedley",
          course: "First Aid/E-learning"
        },
        {
          client: "Shipley",
          location: "Leeds",
          instructor: "Leam Brennan",
          course: "L3 W11"
        },
        {
          client: "FOC",
          location: "Elsecar",
          instructor: "Chris Wood",
          course: "Rail Saw"
        },
        {
          client: "Shipley",
          location: "Shipley",
          instructor: "Chris Wood",
          course: "IAG"
        }


      ]
      observer.next(this.courseList);
      observer.complete();
    });
  }
  createNewCourse(data) {
    console.log("new course service response", data)
  }
  updateCourse(data) {
    console.log("update course data in service ", data)
  }
  createNewInstructor(data) {
    console.log("new instructor details", data);
  }

  updateInstructor(data) {
    console.log("update instructors list data in service", data)
  }
}

