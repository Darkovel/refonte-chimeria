import { Component, OnInit } from "@angular/core";
import { CommuniqueService, ResumeCommunique } from "src/app/services/communique.service";

@Component({
    selector: 'all-communique-bandeau',
    templateUrl: './all.communiques.bandeau.component.html',
    styleUrls: ['./all.communiques.bandeau.component.css']
}) export class AllCommuniquesBandeauComponent implements OnInit {
    resumes:ResumeCommunique[]=[];
    isLoaded: boolean = false;

    constructor(private communiqueService: CommuniqueService) {}

    ngOnInit(): void {
        this.resumes = this.communiqueService.getResumeCommunique(0,6);
        this.isLoaded = this.resumes.length < 6;
    }

    addNextResumeCommunique(nbr:number) {
        let lastResumeNbr: number = this.resumes.length;
        this.resumes.push(...this.communiqueService.getResumeCommunique(lastResumeNbr, 6));
        this.isLoaded = lastResumeNbr === this.resumes.length;
    }
}