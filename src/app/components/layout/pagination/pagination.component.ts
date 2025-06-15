import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  
  @Input({ required: true, alias: 'pages' }) pages: number[] = [];
  @Input({ required: true, alias: 'currentPage' }) currentPage: number = 0;
  @Input({ required: true, alias: 'first' }) first: boolean = false;
  @Input({ required: true, alias: 'last' }) last: boolean = false;

  @Output() onPaginateChange: EventEmitter<number> = new EventEmitter<number>();

  onPaginate(page: number) {
    this.onPaginateChange.emit(page);
  }

  nextPage() {
    this.onPaginate(this.currentPage + 1);
  }
  previousPage() {
    this.onPaginate(this.currentPage - 1);
  }
}
