import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Home } from '../homepage/home.model';
import { HomeService } from '../homepage/home.service';

@Component({
  selector: 'app-itemlistdialog',
  templateUrl: './itemlistdialog.component.html',
  styleUrls: ['./itemlistdialog.component.css']
})
export class ItemlistdialogComponent implements OnInit {

  mrir_list: Home[] = [];

  mrir_list_sub!: Subscription;

  constructor(private router: Router,
    private home_service: HomeService) { }

  ngOnInit(): void {
    this.getMrirDetail();
  }

  getMrirDetail() {
    this.home_service.getItemList();
    this.mrir_list_sub = this.home_service.ItemListObservable()
      .subscribe((mrirlist) => {
        this.mrir_list = mrirlist;
      });
  }

}
