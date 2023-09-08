import { Component, OnInit } from "@angular/core";
import { CommuniqueService, ResumeCommunique } from "src/app/services/communique.service";

@Component ({
    selector: 'communique-bandeau',
    templateUrl: './communique.bandeau.component.html',
    styleUrls: ['./communique.bandeau.component.css'],
}) export class CommuniqueBandeauComponent implements OnInit {
    resumes:ResumeCommunique[];

    constructor(private communiqueService: CommuniqueService) {}

    ngOnInit(): void {
        this.resumes = this.communiqueService.getResumeCommunique(0,3);
    }
}