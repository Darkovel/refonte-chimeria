import { Component, OnInit } from "@angular/core";
import { Review, ReviewService } from "src/app/services/review.service";


@Component ({
    selector: 'review-bandeau',
    templateUrl: './review.bandeau.component.html',
    styleUrls: ['./review.bandeau.component.css'],
}) export class ReviewBandeauComponent implements OnInit {
    reviews:Review[];

    constructor(private reviewService:ReviewService) {
    }

    ngOnInit(): void {
        this.buildReview(this.reviewService.getFirstReview());
    }

    buildReview(reviewCentral:Review) {
        this.reviews = [];
        this.reviews.push(this.reviewService.getPreviousReview(reviewCentral.reviewId));
        this.reviews.push(reviewCentral);
        this.reviews.push(this.reviewService.getNextReview(reviewCentral.reviewId));
    }

    onClickNext() {
        this.buildReview(this.reviews[2]);
    }

    onClickPrevious() {
        this.buildReview(this.reviews[0]);
    }
} 