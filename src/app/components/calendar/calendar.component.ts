import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { addWeeks, endOfDay, isSameWeek, isSunday } from 'date-fns';
import { CalendarService } from "../../services/calendar.service";
import { ReferenceDataService } from "../../services/reference-data.service";
import { ReservationDTO, ReservationService, RoomEvent } from "../../services/reservation.service";
import { ActivatedRoute, NavigationExtras, Params, Router } from "@angular/router";
import { environment } from "../../../environments/environment";

import { MatDialog } from "@angular/material/dialog";
import { DialogReservation } from './component/dialog-reservation';

export class DialogData {
  event: RoomEvent;
  teamSizes: Array<RefData>;
}

export class RefData {
  code: string;
  name: string;
  ordinal: number;
}

export class Message {
  text: string;
  type: string;
}


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  minDate: Date = new Date();
  maxDate: Date = endOfDay(addWeeks(new Date(), environment.weekForecast));
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;
  events: any;
  teamSizes: Array<any>;
  priceDatas: Array<any>;
  chooseDate: Date;
  message: Message;
  isTouch: boolean = true;
  private reservation: ReservationDTO;

  constructor(private calendarService: CalendarService,
              private referenceDataService: ReferenceDataService,
              private changeDetector: ChangeDetectorRef,
              private reservationService: ReservationService,
              /* public dialog: MatDialog, */
              private router: Router,
              private route: ActivatedRoute) {
    this.message = null;
    this.route.queryParams.subscribe(params => this.handleMessage(params)); // Object {}

  }

  ngOnInit() {
    this.chooseDate = new Date();
    if (isSunday(this.chooseDate)) {
      this.chooseDate = new Date(this.chooseDate.setDate(this.chooseDate.getDate() + 1));
    }

    this.getEvents();

    /* this.referenceDataService.getAllRefData('teamSizes').subscribe(
      data => {
        this.teamSizes = data;
      }
    ); */
    this.teamSizes = this.referenceDataService.getAllRefData('teamSizes');

    this.reservationService.getReservationDTO().subscribe((data) => this.reservation = data);

    /* this.referenceDataService.getAllRefData('priceDatas').subscribe(
      data => this.priceDatas = data); */
    this.priceDatas = this.referenceDataService.getAllRefData('priceDatas');
  }


  private getEvents() {
    
    /* this.calendarService.getCalendarEvents(["ROOM1"], this.chooseDate)
      .subscribe(
        value => {
          delete this.events;
          this.events = value;
          this.changeDetector.markForCheck();
        }
      ); */

      this.events = this.calendarService.getCalendarEvents(["ROOM1"], this.chooseDate)
  }

 /*  selectDate(event: MatDatepickerInputEvent<Date>) {
    this.chooseDate = event.value;
    this.message = null;
    this.getEvents();
  } */

  next() {
    this.chooseDate = new Date(this.chooseDate.setDate(this.chooseDate.getDate() + 7));
    this.updateButtonState();
    this.getEvents();
    this.message = null;

  }

  private updateButtonState() {
    this.nextBtnDisabled = isSameWeek(
      this.chooseDate,
      this.maxDate,
      {weekStartsOn: 1});
    this.prevBtnDisabled = isSameWeek(
      this.chooseDate,
      this.minDate,
      {weekStartsOn: 1});

  }

  prev() {
    this.chooseDate = new Date(this.chooseDate.setDate(this.chooseDate.getDate() - 7));
    this.updateButtonState();
    this.getEvents();
    this.message = null;
  }

  clickEvent(roomEvent: RoomEvent) {
   /*  if (roomEvent.reservable) {
      this.message = null;
      const dialogRef = this.dialog.open(DialogReservation, {
        data: {
          event: roomEvent,
          teamSizes: this.prepareTeamSizeWithPrice(this.teamSizes, roomEvent),
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.reservationService.sendReservation(result).subscribe(value => {

            let navigationExtras: NavigationExtras = {
              queryParams: {['id']: value.reservId},
              skipLocationChange: true
            };
            this.router.navigate(['/reserv'], navigationExtras);
          }, error1 => {
            this.setErrorMessage();
            this.getEvents();
          });
        }
        else {
          this.getEvents();
        }
      }); 
    }*/
  }

  private setErrorMessage() {
    this.message = new Message();
    this.message.text = 'Une erreur est survenue lors de la réservation.';
    this.message.type = 'error';
    this.changeDetector.markForCheck();
  }

  private prepareTeamSizeWithPrice(teamSizes: Array<RefData>, event: RoomEvent) {
    var teamSizeWithPrice: Array<RefData> = [];
    for (var item of teamSizes) {
      teamSizeWithPrice.push({
        name: this.getPriceLabel(item, event),
        ordinal: item.ordinal,
        code: item.code
      })
    }

    return teamSizeWithPrice;

  }

  private getPriceLabel(item: RefData, event: RoomEvent) {
    var found = this.priceDatas.find(
      value => value.id.periodId == event.periodId &&
        value.id.roomId == event.roomId &&
        value.id.teamSizeId == item.code
    );

    if (found) {
      return item.name + ' (' + found.pricePerPerson + '€ par personne)';
    }

    return item.name;
  }

reservationInProgress() {
    return this.reservationService.getCurrentReservationId() != null;
  }

goToReservation() {
    let navigationExtras: NavigationExtras = {
      queryParams: {['id']: this.reservationService.getCurrentReservationId()},
      skipLocationChange: true
    };
    this.router.navigate(['/reserv'], navigationExtras);
  }

  private handleMessage(params: Params) {
    /* if (params.error) {
      this.setErrorMessage();
    } */
  }
}