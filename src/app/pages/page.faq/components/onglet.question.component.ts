import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";


@Component({
    selector: 'onglet-question',
    template: `
        <section class="onglet-question-container">
            <div class="onglet-bar" (click)="onClick()"
                aria-label="Toggle question"
                aria-expanded="false">
                <h3 class="question">{{question}}</h3>
                <img [@openClose]="isOpen ? 'open' : 'closed'" src="/assets/img/caroussel/fleche.svg" alt="Développer la question">
            </div>
            <div @insertRemove class="content" *ngIf="isOpen">
                <ng-content></ng-content>
            </div>
        </section>
    `,
    styles: [`
        .onglet-question-container {
            margin: auto;
            min-width: 75%;
            width: 750px;
            max-width: 95%;
            margin-bottom:15px;
            overflow-y: hidden;
        }

        .onglet-bar {
            display:flex;
            position:relative;
            background: var(--passheure-blue) 0% 0% no-repeat padding-box;
            border: 1px solid var(--passheure-gray);
            border-radius: 45px;
            height: 80px;
            width:auto;
            justify-content: space-between;
            align-items: center;
            padding-left: 60px;
            padding-right: 40px;
            z-index:2;
        }

        .question {
            font: normal normal normal 25px/32px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
            text-align: left;
        }

        .onglet-bar img {
            height: 50px;
            width: 50px;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg) brightness(100%) contrast(100%);
        }

        .content {
            position: relative;
            font: normal normal normal 20px/23px var(--passheure-font-family-perpetua);
            letter-spacing: 0px;
            color: var(--passheure-blue);
            text-align: left;
            padding : 30px;
            padding-left : 50px;
            z-index:1;
        }

        @media(max-width:900px) {
            .onglet-question-container {
                margin: auto;
                margin-right: 25%;
                width: 100%;
                margin-bottom:15px;
                overflow-y: hidden;
            }

            .onglet-bar {
                border-radius: 0px 45px 45px 0px;
                padding-left: 20px;
            }

            .question {
                font: normal normal normal 18px/24px var(--passheure-font-family-blackchancery);
            }
        }

        @media(max-width:500px) {

            .question {
                font: normal normal normal 16px/20px var(--passheure-font-family-blackchancery);
            }
        }
    `],

    animations: [
        trigger('openClose', [
            state('open', style ({
                rotate:'-90deg'
            })),
            state('closed', style({
                rotate:'90deg'
            })),
            transition('open <=> closed', [
                animate('0.3s')
            ])
        ]),
        trigger('insertRemove', [
            transition(':enter', [
                style({ 
                    opacity: 0, 
                    translate: "0 -100%"
                }),
                animate('0.3s',
                    style({  
                        opacity: 1,
                        translate: "0 0%"
                    })
                )
            ]),

            transition(':leave', [
                animate('0.3s', 
                    style({ 
                        opacity: 0,
                        translate: "0 -100%"
                    }))
            ])
        ])
    ]
}) export class OngletQuestionComponent {
    @Input() question: string;

    isOpen:boolean=false;

    onClick() {
        this.isOpen = !this.isOpen;
    }
}