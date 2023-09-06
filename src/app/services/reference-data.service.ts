import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

export {}


@Injectable({
  providedIn: 'root'
})
export class ReferenceDataService {

  public static readonly REFDATA_URL = environment.apiUrl + '/public/restservices/ref-data/';

  constructor(private http: HttpClient) {

  }


  public getAllRefData(refType: String) {
    /* return this.http.get<Array<any>>(ReferenceDataService.REFDATA_URL + refType, ReferenceDataService.getOptions()); */

    if(refType === 'teamSizes')
      return [
        {
          code:"TM2",
          name:"2 participants",
          ordinal:1,
          id:"TM2"
        },
        {
          code:"TM3",
          name:"3 participants",
          ordinal:2,
          id:"TM3"
        },
        {
          code:"TM4",
          name:"4 participants",
          ordinal:3,
          id:"TM4"
        },
        {
          code:"TM5",
          name:"5 participants",
          ordinal:4,
          id:"TM5"
        },
        {
          code:"TM6",
          name:"6 participants",
          ordinal:5,
          id:"TM6"
        }
      ];
      else
      return [{"price":80.00,"pricePerPerson":40.00,"description":"2 joueurs Heures creuses","id":{"periodId":"HC","roomId":"ROOM1","teamSizeId":"TM2"}},{"price":96.00,"pricePerPerson":32.00,"description":"3 joueurs Heures creuses","id":{"periodId":"HC","roomId":"ROOM1","teamSizeId":"TM3"}},{"price":112.00,"pricePerPerson":28.00,"description":"4 joueurs Heures creuses","id":{"periodId":"HC","roomId":"ROOM1","teamSizeId":"TM4"}},{"price":125.00,"pricePerPerson":25.00,"description":"5 joueurs Heures creuses","id":{"periodId":"HC","roomId":"ROOM1","teamSizeId":"TM5"}},{"price":138.00,"pricePerPerson":23.00,"description":"6 joueurs Heures creuses","id":{"periodId":"HC","roomId":"ROOM1","teamSizeId":"TM6"}},{"price":84.00,"pricePerPerson":42.00,"description":"2 joueurs Heures pleines","id":{"periodId":"HP","roomId":"ROOM1","teamSizeId":"TM2"}},{"price":105.00,"pricePerPerson":35.00,"description":"3 joueurs Heures pleines","id":{"periodId":"HP","roomId":"ROOM1","teamSizeId":"TM3"}},{"price":120.00,"pricePerPerson":30.00,"description":"4 joueurs Heures pleines","id":{"periodId":"HP","roomId":"ROOM1","teamSizeId":"TM4"}},{"price":135.00,"pricePerPerson":27.00,"description":"5 joueurs Heures pleines","id":{"periodId":"HP","roomId":"ROOM1","teamSizeId":"TM5"}},{"price":150.00,"pricePerPerson":25.00,"description":"6 joueurs Heures pleines","id":{"periodId":"HP","roomId":"ROOM1","teamSizeId":"TM6"}}];
  }

  private static getOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': environment.apiAuth,
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Content-Type': 'application/json'
      })
    };
  }
}
