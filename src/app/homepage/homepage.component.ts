import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { HomeService } from './home.service';
import { Home } from './home.model';
import { MatDialog } from '@angular/material/dialog';
import { ItemlistdialogComponent } from '../itemlistdialog/itemlistdialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  mrir_list: Home[] = [];

  mrir_list_sub!: Subscription;

  item_detail: any;

  panelOpenState = false;

  itemid!: string;


  constructor(private router: Router,
    private home_service: HomeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMrirDetail();
    this.getSingleItem(this.itemid);

  }

  logout() {
    this.router.navigate(["/"]);
  }

  getMrirDetail() {
    this.home_service.getItemList();
    this.mrir_list_sub = this.home_service.ItemListObservable()
      .subscribe((mrirlist) => {
        this.mrir_list = mrirlist;
      });
  }

  getSingleItem(itemid: any) {
    this.home_service.getSingleItem(itemid)
      .subscribe((singleItem) => {
        this.item_detail = singleItem['idata'];
        console.log(this.item_detail);
      })
  }

  openDialog() {
    this.dialog.open(ItemlistdialogComponent);
  }

}


function DialogElementsExampleDialog(DialogElementsExampleDialog: any) {
  throw new Error('Function not implemented.');
}

