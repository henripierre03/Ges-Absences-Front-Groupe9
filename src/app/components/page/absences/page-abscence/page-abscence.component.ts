import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbsenceAndEtudiantResponse } from '../../../../shared/models/absence.model';
import { RestResponse } from '../../../../shared/models/rest-response.model';
import { AbsenceService } from '../../../../shared/services/impl/absence.service';
import { PaginationComponent } from '../../../layout/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-abscence',
  imports: [PaginationComponent,FormsModule],
  templateUrl: './page-abscence.component.html',
  styleUrl: './page-abscence.component.css',
})
export class PageAbscenceComponent implements OnInit {
  searchTerm: string = '';
  selectedStatus: string = 'all';
  filteredResponses?: RestResponse<AbsenceAndEtudiantResponse[]>;

  constructor(
    private readonly absenceService: AbsenceService,
    private router: Router
  ) {}
  responses?: RestResponse<AbsenceAndEtudiantResponse[]>;
  loading: boolean = true;
  ngOnInit(): void {
    this.loadData();
  }

  async onLoadViewDetail(id: string) {
    this.router
      .navigateByUrl('.', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate([`/absence/justification/${id}`]);
      });
  }

  onPaginate(page: number) {
    this.refresh(page);
  }

  nextPage(page: number) {
    this.refresh(page - 1);
  }
  previousPage(page: number) {
    this.refresh(page + 1);
  }

  private refresh(page: number = 0) {
    this.loadData(page);
  }

  loadData(page: number = 0) {
    this.absenceService.getAllAbsences(page).subscribe({
      next: (data) => {
        this.responses = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
    });
  }

  onSearch() {
    this.applyFilters();
  }

  onStatusChange() {
    this.applyFilters();
  }

  private applyFilters() {
    if (!this.responses?.result) return;

    let filtered = [...this.responses.result];

    // Filtre par recherche
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.etudiant.nom.toLowerCase().includes(searchLower) ||
          item.etudiant.prenom.toLowerCase().includes(searchLower) ||
          item.etudiant.matricule.toLowerCase().includes(searchLower)
      );
    }

    // Filtre par statut
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(
        (item) => item.typeAbsence === this.selectedStatus
      );
    }

    // Mise à jour des résultats filtrés
    this.filteredResponses = {
      ...this.responses,
      result: filtered,
    };
  }
}
