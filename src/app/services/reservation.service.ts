import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {catchError, map} from "rxjs/operators";

export class ReservationDTO {
  reservId: string;
  event: RoomEvent;
  eventDate: Date;
  date: Date;
  name: string;
  phone: string;
  email: string;
  coupon: string;
  teamSize: string;
  finalPrice: number;
  discount: number;
  teamSizeLabel: string;
  teamTypeLabel: string;
  roomLabel: string;
  promo; string;
  paymentFormDTO: PaymentFormDTO;
}

export class ParamsForm {
  name: string;
  value: string;
  type: string;
}

export class PaymentFormDTO {
  url: string;
  text: RoomEvent;
  params: Array<ParamsForm>;
}

export class RoomEvent {
    periodId: string;
    eventId: string;
    roomId: string;
    style: string;
    dateTime: Date;
    removable: boolean;
    reservable: boolean;
  }

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public static readonly SERVICE_URL = environment.apiUrl + '/public/restservices/resa';

  private reservationId: string;

  private reservation: Subject<ReservationDTO>;

  constructor(private http: HttpClient) {
    this.reservation = new Subject<ReservationDTO>();
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

  private static getOptionsWithStepParam(step: string) {
    return {
      headers: new HttpHeaders({
        'Authorization': environment.apiAuth,
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set("step", step)
    };
  }

  public sendReservation(reservation: ReservationDTO) {

    return this.http.put<any>(ReservationService.SERVICE_URL, reservation,
      ReservationService.getOptions());
  }

  public getReservation(reservationId: string, step: string) {

    /* return this.http.get<ReservationDTO>(ReservationService.SERVICE_URL + '/' + reservationId,
      ReservationService.getOptionsWithStepParam(step))
      .pipe(map((data) => {
        this.reservation.next(data);
        this.reservationId = data.reservId;
        return data;
      })); */
  }

  public setCurrentReservationId(reservId: string) {
    this.reservationId = reservId;
  }

  public getCurrentReservationId() {
    return this.reservationId;

  }

  updateReservation(reservation: ReservationDTO) {
    return this.http.post<ReservationDTO>(ReservationService.SERVICE_URL, reservation,
      ReservationService.getOptions());
  }

  getReservationDTO(): Observable<ReservationDTO> {
    return this.reservation.asObservable();
  }
}
