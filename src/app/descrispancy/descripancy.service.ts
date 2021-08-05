import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Descripancy } from './descripancy.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescripancyService {

  constructor(private http: HttpClient) { }

  mrir_list: Descripancy[] = [];

  mrir_fetched_event_emitter = new Subject<Descripancy[]>();

  ItemListObservable() {
    return this.mrir_fetched_event_emitter.asObservable();
  }

  getItemList() {
    this.http.get<{ message: string, ilist: Descripancy[] }>(environment.apiUrl + '/api/descripancy')
      .subscribe((resultdata) => {
        this.mrir_list = resultdata.ilist;
        this.mrir_fetched_event_emitter.next([...this.mrir_list]);

      });
  }

  getSingleItem(itemid: string) {
    return this.http.get<{ message: string, idata: any }>(environment.apiUrl + '/api/descripancy/' + itemid);
  }


}
