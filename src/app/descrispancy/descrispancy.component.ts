import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Descripancy } from './descripancy.model';
import { DescripancyService } from './descripancy.service';

@Component({
  selector: 'app-descrispancy',
  templateUrl: './descrispancy.component.html',
  styleUrls: ['./descrispancy.component.css']
})
export class DescrispancyComponent implements OnInit {

  mrir_list: Descripancy[] = [];

  mrir_list_sub!: Subscription;

  item_detail: any;

  panelOpenState = false;

  itemid!: string;

  constructor(private router: Router,
    private descripancy_service: DescripancyService) { }

  ngOnInit(): void {
    this.getMrirDetail();
    this.getSingleItem(this.itemid);
  }

  logout() {
    this.router.navigate(["/"]);
  }

  getMrirDetail() {
    this.descripancy_service.getItemList();
    this.mrir_list_sub = this.descripancy_service.ItemListObservable()
      .subscribe((mrirlist) => {
        this.mrir_list = mrirlist;
      });
  }

  getSingleItem(itemid: any) {
    this.descripancy_service.getSingleItem(itemid)
      .subscribe((singleItem) => {
        this.item_detail = singleItem['idata'];
        console.log(this.item_detail);
      })
  }

}
