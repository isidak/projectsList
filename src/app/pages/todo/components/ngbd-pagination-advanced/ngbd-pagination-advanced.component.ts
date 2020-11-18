import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ngbd-pagination-advanced',
  templateUrl: './ngbd-pagination-advanced.component.html',
  styleUrls: ['./ngbd-pagination-advanced.component.css']
})
export class NgbdPaginationAdvancedComponent implements OnInit {
  @Input() collectionSize: number;
  @Input() maxSize: number;
  @Output() pageChanged = new EventEmitter();
  page = 1;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.collectionSize);
    console.log(this.maxSize);
  }

  pageChange(pageNumber): void{
    this.pageChanged.next(pageNumber);
  }

}
