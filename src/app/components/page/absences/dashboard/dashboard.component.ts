import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
currentDate:  Date = new Date();
totalStudents: any;
totalTeachers: any;
totalFilieres: any;
attendanceRate: any;
universityName: any;
academicYear: any;
currentSemester: any;
campusCount: any;
classroomCount: any;
activeCourses: any;
monthlyExams: any;
pendingJustifications: any;

}
