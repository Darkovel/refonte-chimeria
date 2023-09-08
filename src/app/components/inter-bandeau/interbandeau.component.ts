import { Component, Input, AfterViewInit, OnInit  } from "@angular/core";

export enum PositionInterBandeau {
    left, center, right
}

@Component({
    selector: 'inter-bandeau',
    template: `
        <div class="inter-bandeau-container" 
            [style.left]="left">
            <img [src]="imgUrl" loading="lazy" [style.translate]="translate">
        </div>
    `,
    styles: [`
        .inter-bandeau-container {
            position: absolute;
            transform: translate(-50%, -50%);
            z-index:1;
        }

        @media(max-width:700px) {
            .inter-bandeau-container{
                position: absolute;
                transform: translate(-50%, -50%) scale(0.75);
            }
        }

        @media(max-width:500px) {
            .inter-bandeau-container{
                position: absolute;
                transform: translate(-50%, -50%) scale(0.5);
            }
        }
    `]
}) export class InterBandeauComponent implements OnInit  {
    @Input() imgUrl:string;
    @Input() position:PositionInterBandeau;

    translate:string;
    left:string;

    ngOnInit(): void {
        switch(this.position) {
            case PositionInterBandeau.left:
                this.translate = '20% 20%';
                this.left = '0';
                break;
            case PositionInterBandeau.center:
                this.translate = '0% 20%';
                this.left = '50%';
                break;
            case PositionInterBandeau.right:
                this.translate = '-10% -10%';
                this.left = '100%';
                break;
        }
    }
}