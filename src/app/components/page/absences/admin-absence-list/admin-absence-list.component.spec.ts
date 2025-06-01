import { PageAbscenceComponent } from './../page-abscence/page-abscence.component';
import { AbsenceService } from '../../../../shared/services/impl/absence.service';
import { Component, OnInit } from '@angular/core';
import { AbsenceAndEtudiantResponse } from '../../../../shared/models/absence.model';

// @Component({
//   selector: 'app-admin-absence-list',
//   templateUrl: './admin-absence-list.component.html',
//   styleUrls: ['./admin-absence-list.component.scss']
// })
// export class AdminAbsenceListComponent implements OnInit {
//   absences: AbsenceAndEtudiantResponse[] = [];
//   loading = true;

//   constructor(private AbsenceService: AbsenceService) {}

  // ngOnInit(): void {
  //   this.fetchAbsences();
  // }

  // fetchAbsences(): void {
  //   this.absenceService.getAllAbsences().subscribe({
  //     next: (PageAbscenceComponent) => {
  //       this.absences = data;
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error('Erreur lors de la récupération des absences', err);
  //       this.loading = false;
  //     }
  //   });
  // }
// }
