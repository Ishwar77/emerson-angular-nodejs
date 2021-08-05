import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  mrir_list: Home[] = [];

  mrir_fetched_event_emitter = new Subject<Home[]>();

  ItemListObservable() {
    return this.mrir_fetched_event_emitter.asObservable();
  }

  getItemList() {
    this.http.get<{ message: string, ilist: Home[] }>(environment.apiUrl + '/api/mrir')
      .subscribe((resultdata) => {
        this.mrir_list = resultdata.ilist;
        this.mrir_fetched_event_emitter.next([...this.mrir_list]);

      });
  }

  getSingleItem(itemid: string) {
    return this.http.get<{ message: string, idata: any }>(environment.apiUrl + '/api/mrir/' + itemid);
  }


}
