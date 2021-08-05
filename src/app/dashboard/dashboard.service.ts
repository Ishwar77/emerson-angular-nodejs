import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  item_list: Dashboard[] = [];

  item_fetched_event_emitter = new Subject<Dashboard[]>();

  ItemListObservable() {
    return this.item_fetched_event_emitter.asObservable();
  }

  getItemList() {
    this.http.get<{ message: string, ilist: Dashboard[] }>(environment.apiUrl + '/api/items')
      .subscribe((resultdata) => {
        this.item_list = resultdata.ilist;
        this.item_fetched_event_emitter.next([...this.item_list]);

      });
  }

}




