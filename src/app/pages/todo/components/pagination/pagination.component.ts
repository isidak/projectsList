import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {
  numberOfPages: number;
  listLength: number;
  pages: number[] = [];
  currentPage = 1;
  currentLimit: number;
  private subscriptions = new Subscription();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getPageLimit();
    this.getListLength();
  }

  getPageLimit(): void{
    this.currentLimit = this.todoService.getPageLimit();
  }

  getListLength(): void {
    const listLengthSub = this.todoService.tasksListLength$.subscribe((res) => {
      this.getNumberOfPages(res);
      this.getPages();
      this.listLength = res;
    });
    this.subscriptions.add(listLengthSub);
  }

  getNumberOfPages(listLength): void {
    this.numberOfPages = Math.ceil(listLength / this.currentLimit);
  }

  getPages(): void {
    this.pages = [];
    for (let i = 1; i <= this.numberOfPages; i++) {
      this.pages.push(i);
    }
  }

  changePage(page): void {
    this.currentPage = page;
    const pageSub = this.todoService.getListPage(page, this.currentLimit).subscribe();
    this.subscriptions.add(pageSub);
  }

  itemDeleted(): void {
    if (this.listLength % this.currentLimit === 0 && this.currentPage !== 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
