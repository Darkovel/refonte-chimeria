import { Component } from "@angular/core";
import { ReviewService } from "src/app/services/review.service";

@Component({
    selector: 'all-communique-bandeau',
    templateUrl: './all.communiques.bandeau.component.html',
    styleUrls: ['./all.communiques.bandeau.component.css']
}) export class AllCommuniquesBandeauComponent {

    constructor(private reviewService:ReviewService) {
        
    }
}