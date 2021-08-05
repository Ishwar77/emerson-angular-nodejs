import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  item_list: Dashboard[] = [];

  item_list_sub!: Subscription;

  tabNumberArray = [0, 1];
  tabNumber: any;

  constructor(private dashboard_service: DashboardService) { }

  ngOnInit(): void {
  }

  tabSwitchFn(tabNumber: number) {
    if (tabNumber === this.tabNumberArray[0]) {
      this.tabNumber = tabNumber;
      this.getOpenMrirDetail();

    } else if (tabNumber === this.tabNumberArray[1]) {
      this.tabNumber = tabNumber;
      this.getCloseMrirDetail();

    }
  }

  getOpenMrirDetail() {
    this.dashboard_service.getItemList();
    this.item_list_sub = this.dashboard_service.ItemListObservable()
      .subscribe((itemlist) => {
        this.item_list = itemlist;
      });
  }


  getCloseMrirDetail() {
    this.dashboard_service.getItemList();
    this.item_list_sub = this.dashboard_service.ItemListObservable()
      .subscribe((itemlist) => {
        this.item_list = itemlist;
      });
  }

}
