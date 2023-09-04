import { Component, Input } from "@angular/core";
import { Review } from "src/app/services/review.service";

@Component({
    selector: 'review-item',
    template: `
        <div class="review-item-container">
            <div class="rating">
                <div class="star" *ngIf="review.starRating > 0"></div>
                <div class="star" *ngIf="review.starRating > 1"></div>
                <div class="star" *ngIf="review.starRating > 2"></div>
                <div class="star" *ngIf="review.starRating > 3"></div>
                <div class="star" *ngIf="review.starRating > 4"></div>
            </div>
            <div *ngIf="!review.reviewer.isAnonymous;else isAnonymous">
                <h2>{{review.reviewer.displayName}}</h2>
            </div>
            <ng-template #isAnonymous>
                <h2>Anonymous</h2>
            </ng-template>
            <div class="createAt">
                <p>{{review.createTime}}</p>
            </div>
            <div class="comment">
                <p>{{review.comment}}</p>
            </div>
        </div>
    `,
    styles: [
        `
            .review-item-container {
                display: block;
                background: var(--passheure-white) 0% 0% no-repeat padding-box;
                border: 1px solid var(--passheure-gray);
                border-radius: 152px;
                width: 75%;
                height: auto;
                text-align: center;
                margin: auto;
            }

            .rating {
                display: flex;
                width: 100%;
                text-align: center;
                align-items: center;
                justify-content: center;
                padding: 10px;
            }

            .star {
                width: 30px;
                height: 30px;
                background: var(--passheure-yellow) 0% 0% no-repeat padding-box;
                border-radius: 152px;
            }

            .review-item-container h2 {
                font: normal normal bold 20px/23px Arial;
                letter-spacing: 0px;
                text-align: center;
            }

            .createAt {
                font: normal normal normal 20px/27px Segoe UI;
                letter-spacing: 0px;
                color: var(--passheure-gray);
                text-align: left;
                padding-left: 10%;
                padding-right: 5%;
            }

            .comment {
                font: normal normal normal 20px/27px Segoe UI;
                letter-spacing: 0px;
                color: var(--passheure-gray);
                text-align: left;
                padding-left: 10%;
                padding-right: 5%;
                padding-bottom: 5%;
            }
        `
    ]
}) export class ReviewItemComponent {
    @Input() review:Review;
}