import { Component, OnInit } from '@angular/core';
import { AbsenceAndEtudiantResponse } from '../../../../shared/models/absence.model';
import { RestResponse } from '../../../../shared/models/rest-response.model';
import { AbsenceService } from '../../../../shared/services/impl/absence.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-abscence',
  imports: [],
  templateUrl: './page-abscence.component.html',
  styleUrl: './page-abscence.component.css',
})
export class PageAbscenceComponent implements OnInit {

  constructor(private readonly absenceService: AbsenceService,private router : Router) {}
  responses?: RestResponse<AbsenceAndEtudiantResponse[]>;
  loading: boolean = true;
  ngOnInit(): void {
    this.absenceService.getAllAbsences().subscribe({
      next: (data) => {
        this.responses = data;
        // console.log(data);
        this.loading = false; // Set loading to false once data is received
      },
      error: (error) => {
        console.error(error);
        this.loading = false; // Also set loading to false in case of error
      },
    });
  }

  async onLoadViewDetail(id: string) {
    this.router.navigateByUrl(".", {
      skipLocationChange: true,

    }).then(() => {
      this.router.navigate([`/absence/justification/${id}`])
    });

}

}
