import { Component, OnInit } from '@angular/core';
import { AbsenceAndEtudiantResponse } from '../../../../shared/models/absence.model';
import { RestResponse } from '../../../../shared/models/rest-response.model';
import { AbsenceService } from '../../../../shared/services/impl/absence.service';

@Component({
  selector: 'app-page-abscence',
  imports: [],
  templateUrl: './page-abscence.component.html',
  styleUrl: './page-abscence.component.css',
})
export class PageAbscenceComponent implements OnInit {
  constructor(private readonly absenceService: AbsenceService) {}
  responses?: RestResponse<AbsenceAndEtudiantResponse[]>;
  ngOnInit(): void {
    this.absenceService.getAll().subscribe({
      next: (data) => (this.responses = data),
      error: (error) => console.error(error),
    });
  }
}
