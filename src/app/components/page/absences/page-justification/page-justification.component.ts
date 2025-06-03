import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
ouvrirPieceJointe() {
throw new Error('Method not implemented.');
}
toggleJustification() {
throw new Error('Method not implemented.');
}
constructor(
    private route: ActivatedRoute,
    private justificationService: JustificationService
  ) { }
  justification?: RestResponse<JustificationResponse>;
//   voirJustification = false;
// toastClass: any;
// isProcessing: any;

  

  ngOnInit(): void {
  let absenceId: number = this.route.snapshot.params['absenceId'];
  console.log("✅ Justification de l'absence " + absenceId);
  alert("✅ Justification de l'absence " + absenceId);
  this.justificationService.getAbsenceJustification(absenceId).subscribe(
    data => this.justification = data,
    error => console.log(error)
  );
}


  // valider() {
  //   if (this.justification?.id) {
  //     this.justificationService.validerJustification(this.justification.id).subscribe(() => {
  //       alert('✅ Justification validée !');
  //     });
  //   }
  // }

  // rejeter() {
  //   if (this.justification?.id) {
  //     this.justificationService.rejeterJustification(this.justification.id).subscribe(() => {
  //       alert('❌ Justification rejetée !');
  //     });
  //   }
  // }
}
