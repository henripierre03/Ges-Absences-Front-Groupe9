import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Justification } from '../../../../shared/models/justification.model';
import { JustificationService } from '../../../../shared/services/justification.service';

@Component({
  selector: 'app-page-justification',
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
  justification!: Justification;
  voirJustification = false;
toastClass: any;
isProcessing: any;

  constructor(
    private route: ActivatedRoute,
    private justificationService: JustificationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.justificationService.getJustificationById(id).subscribe(j => {
        this.justification = j;
      });
    }
  }

  valider() {
    if (this.justification?.id) {
      this.justificationService.validerJustification(this.justification.id).subscribe(() => {
        alert('✅ Justification validée !');
      });
    }
  }

  rejeter() {
    if (this.justification?.id) {
      this.justificationService.rejeterJustification(this.justification.id).subscribe(() => {
        alert('❌ Justification rejetée !');
      });
    }
  }
}
