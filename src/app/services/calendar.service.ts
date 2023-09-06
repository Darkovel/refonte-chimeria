import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {format} from "date-fns";

export interface CalendarEventDTO {
    config:CalendarConfigDTO;
    rows:CalendarRowDTO[];
}

export interface CalendarConfigDTO {
  nbRooms: number;
  nbCols: number;
  dates: Date[];
  roomsInfo: CalendarRoomDTO[];
}

export interface CalendarRoomDTO {
  id: string;
  logo: string;
  tooltip: string;
}

export interface CalendarRowDTO {
    hour: string;
    events: CalendarRoomEventDTO[];
}

export interface CalendarRoomEventDTO {
  rooms:CalendarRowEventDTO[];
}

export interface CalendarRowEventDTO {
  eventId: string;
  roomId: string;
  style: string;
  periodId: string;
  dateTime:Date;
  updatable: boolean;
  reservable: boolean;
}




@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public static readonly BASE_REST_URL = environment.apiUrl + '/public/restservices/';


  constructor(private http: HttpClient) {
  }


  public getCalendarEvents(roomIds: string[], askedDate: Date) {

    const options =
      {
        params: new HttpParams().set('date',format(askedDate, 'dd/MM/yyyy')),
        headers: new HttpHeaders({
          'Authorization': environment.apiAuth,
          'Access-Control-Allow-Headers': 'Authorization, Content-Type',
          'Content-Type': 'application/json'
        })
      };


    for (var roomId of roomIds) {
      options.params.append('roomIDs', roomId);
    }

    /* return this.http.get(CalendarService.BASE_REST_URL + "calendar/events",options); */

    return this.monoRoom;
  }

  monoRoom = {
    config:{
      nbRooms:1,
      nbCols:7,
      dates:[
        new Date("2023-09-04"),
        new Date("2023-09-05"),
        new Date("2023-09-06"),
        new Date("2023-09-07"),
        new Date("2023-09-08"),
        new Date("2023-09-09"),
        new Date("2023-09-10")
      ],
      roomsInfo:[
        {id:"ROOM1",
        logo: "/assets/img/rooms-logo/Icon feather-book-open.svg",
        tooltip: "La congrégation"}
      ]
    },
    rows: [
      {
        hour:"10:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          }]
      },
      {
        hour:"12:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"HP"
          }]
        }]
      },
      {
        hour:"14:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
        }]
      },
      {
        hour:"16:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
        }]
      },
      {
        hour:"18:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
        }]
      },
      {
        hour:"20:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
        }]
      },
      {
        hour:"22:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          }]
        }]
      }
    ]
  };
  twoRoom = {
    config:{
      nbRooms:2,
      nbCols:7,
      dates:[
        new Date("2023-09-04"),
        new Date("2023-09-05"),
        new Date("2023-09-06"),
        new Date("2023-09-07"),
        new Date("2023-09-08"),
        new Date("2023-09-09"),
        new Date("2023-09-10")
      ],
      roomsInfo:[
        {id:"ROOM1",
        logo: "/assets/img/rooms-logo/Icon feather-book-open.svg",
        tooltip: "La congrégation"},
        {id:"ROOM2",
        logo: "/assets/img/rooms-logo/Icon-ionic-ios-rocket.svg",
        tooltip: "Le vaisseaux fantôme"}
      ]
    },
    rows: [
      {
        hour:"10:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"12:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"14:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"16:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"18:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"20:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      },
      {
        hour:"22:00",
        events: [{
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomUsed",
            periodId:"OFF"
            },
            {roomId:	"ROOM2",
            style:	"roomUsed",
            periodId:"OFF"
            }
          ]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomOffPeak",
            periodId:"HC"
          },
          {roomId:	"ROOM2",
          style:	"roomOffPeak",
          periodId:"HC"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          },
          {
          rooms:[{
            roomId:	"ROOM1",
            style:	"roomPeak",
            periodId:"HP"
          },
          {roomId:	"ROOM2",
          style:	"roomPeak",
          periodId:"HP"
          }]
          }]
      }
    ]
  };
}
