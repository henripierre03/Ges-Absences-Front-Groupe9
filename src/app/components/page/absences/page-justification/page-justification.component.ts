import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  JustificationResponse } from '../../../../shared/models/justification.model';
import { JustificationService } from '../../../../shared/services/impl/justification.service';
import { CommonModule } from '@angular/common';
import { RestResponse } from '../../../../shared/models/rest-response.model';

@Component({
  selector: 'app-page-justification',
  imports: [CommonModule],
  templateUrl: './page-justification.component.html',
  styleUrls: ['./page-justification.component.css']
})
export class PageJustificationComponent implements OnInit {

constructor(
    private route: ActivatedRoute,
    private justificationService: JustificationService,
    private router: Router
  ) { }
  justification?: RestResponse<JustificationResponse>;
  loading: boolean = true;
//   voirJustification = false;
// toastClass: any;
// isProcessing: any;


  ngOnInit(): void {
  let id = this.route.snapshot.params['absenceId'];
  console.log("✅ Justification de l'absence " + id);
  // alert("✅ Justification de l'absence " + id);
  this.justificationService.getAbsenceJustification(id).subscribe({
      next: (data) => {
        this.justification = data;
        console.log(data);
        this.loading = false; // Set loading to false once data is received
      },
      error: (error) => {
        console.error(error);
        this.loading = false; // Also set loading to false in case of error
      },
    });
}

onValidateAbsence() {
    if (this.justification?.result?.id) {
      this.justificationService.validerJustification(this.justification.result.id).subscribe(() => {
        alert('✅ Justification validée !');
        this.router.navigate(['/absence']);
      });
    }
  }

  onInvalidateAbsence() {
    if (this.justification?.result?.id) {
      // Implement the logic for invalidating the absence
      this.justificationService.invaliderJustification(this.justification.result.id).subscribe(() => {
        alert('❌ Justification invalidée !');
        this.router.navigate(['/absence']);
      });
    }
  }

}
