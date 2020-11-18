import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() collectionSize: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter();
  page = 1;

  pageChange(pageNumber): void{
    this.pageChanged.next(pageNumber);
  }

}
