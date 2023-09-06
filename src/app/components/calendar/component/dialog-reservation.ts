import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { RoomEvent} from "../../../services/reservation.service";
import { DialogData, RefData } from '../calendar.component';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-reservation',
    template: `
        <h1 mat-dialog-title>Alors ?</h1>
        <div>
        <p>On réserve pour le {{event.dateTime | date:'dd/MM/yyyy'}} à {{event.dateTime | date:'HH:mm'}} ?</p>
        <!-- <mat-form-field>
            <mat-select placeholder="Nombre de joueurs" required [formControl]="teamsizeCtrl">
            <mat-option *ngFor="let teamsize of teamSizes" [value]="teamsize.code">
                {{teamsize.name}}
            </mat-option>
            </mat-select>
            <mat-error *ngIf="teamsizeCtrl.hasError('required')">Merci de sélectionner une taille d'équipe</mat-error>
        </mat-form-field> -->
        </div>
        <div mat-dialog-actions align="end">
        <button mat-stroked-button color="primary"  (click)="onNoClick()">Non merci</button>
        <button type="submit" [disabled]="checkForm()" mat-raised-button color="primary" (click)="validateReservation()" cdkFocusInitial>Oui !!
        </button>
        </div>
    `,
    styles: [`
    
    `]
  })
  
  export class DialogReservation implements OnInit {
  
    teamsizeCtrl = new FormControl('', [Validators.required]);
  
    teamSizes: Array<RefData>;
    event: RoomEvent;
  
  
    constructor(
      public dialogRef: MatDialogRef<DialogReservation>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      this.teamSizes = data.teamSizes;
      this.event = data.event;
    }
  
    ngOnInit() {
  
    }
  
  
    onNoClick(): void {
      /* this.dialogRef.close(); */
    }
  
    public checkForm() {
      return this.teamsizeCtrl.invalid;
    }
  
    public validateReservation() {
      /* this.dialogRef.close({
        teamSize: this.teamsizeCtrl.value,
        event: this.event
      }); */
    }
  
  }