import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div #myModal class="container" (click)="close()">
        <div class="content">
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styles: [`
        .container 
        {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        .content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }
  `]
})
export class ModalComponent {

  @ViewChild('myModal', {static: false}) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
} 