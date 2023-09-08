import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export enum StarRating {
    STAR_RATING_UNSPECIFIED,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE
}

export interface Reviewer {
    profilePhotoUrl: string,
    displayName: string,
    isAnonymous: boolean
}

export interface ReviewReply {
    comment: string,
    updateTime: string,
}

export interface Review {
    name: string,
    reviewId: string,
    reviewer: Reviewer,
    starRating: StarRating,
    comment: string,
    createTime: string,
    updateTime: string,
    reviewReply: ReviewReply | null,
}

@Injectable({
    providedIn: 'root'
}) export class ReviewService {
    url = '';
    reviews: Review[] = [
        {
            name:"Comment 1",
            reviewId:"kjfkdskhsd",
            reviewer: {
                profilePhotoUrl: "/",
                displayName: "Mr X",
                isAnonymous: true
            },
            starRating: StarRating.FIVE,
            comment: "On a fait la congrégation à 2 et pour moi c'était le meilleur escape que j'ai fait à Lyon ! Attention, cela peut déplaire à ceux qui aiment les escapes classiques, avec des codes, des cadenas, etc... Et c'est justement ça que j'ai aimé, ça change ! Et c'est juste, magique :) Tout est fait de manière artisanale, et j'ai trouvé le travail admirable.",
            createTime: "il y a 3 semaines",
            updateTime: "il y a 3 semaines",
            reviewReply: null
        },
        {
            name:"Comment 2",
            reviewId:"dfkjhkfsdkhljs",
            reviewer: {
                profilePhotoUrl: "/",
                displayName: "Mme Y",
                isAnonymous: false
            },
            starRating: StarRating.FOUR,
            comment: "On a fait la congrégation à 2 et pour moi c'était le meilleur escape que j'ai fait à Lyon ! Attention, cela peut déplaire à ceux qui aiment les escapes classiques, avec des codes, des cadenas, etc... Et c'est justement ça que j'ai aimé, ça change ! Et c'est juste, magique :) Tout est fait de manière artisanale, et j'ai trouvé le travail admirable.",
            createTime: "il y a 3 semaines",
            updateTime: "il y a 3 semaines",
            reviewReply: null
        },
        {
            name:"Comment 3",
            reviewId:"skhukhjsjhss",
            reviewer: {
                profilePhotoUrl: "/",
                displayName: "Mr X",
                isAnonymous: false
            },
            starRating: StarRating.FIVE,
            comment: "On a fait la congrégation à 2 et pour moi c'était le meilleur escape que j'ai fait à Lyon ! Attention, cela peut déplaire à ceux qui aiment les escapes classiques, avec des codes, des cadenas, etc... Et c'est justement ça que j'ai aimé, ça change ! Et c'est juste, magique :) Tout est fait de manière artisanale, et j'ai trouvé le travail admirable.",
            createTime: "il y a 3 semaines",
            updateTime: "il y a 3 semaines",
            reviewReply: null
        }
]

    constructor(private http: HttpClient) {

    }

    getReviews(): Review[] {
        return this.reviews;
    }

    getFirstReview(): Review {
        return this.reviews[0];
    }

    getNextReview(reviewId: string): Review {
        return this.reviews[1];
    }

    getPreviousReview(reviewId: string): Review {
        return this.reviews[2];
    }

/*     getFirstReview(): Observable<Review> {
        return this.http.get<Review>(this.url + '/first');
    }

    getReview(reviewId: string): Observable<Review> {
        return this.http.get<Review>(this.url + `/${reviewId}`);
    }

    getNextReview(reviewId: string): Observable<Review> {
        return this.http.get<Review>(this.url + `/next/${reviewId}`);
    }

    getPreviousReview(reviewId: string): Observable<Review> {
        return this.http.get<Review>(this.url + `/previous/${reviewId}`);
    } */
}