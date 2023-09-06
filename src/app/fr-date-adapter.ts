import { NativeDateAdapter } from '@angular/material/core';
import {Injectable} from '@angular/core';


@Injectable()
export class FrDateAdapter extends NativeDateAdapter {

  override getFirstDayOfWeek(): number {
    return 1;
  }

}

