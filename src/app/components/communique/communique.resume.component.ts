import { Component, Input } from "@angular/core";
import { ResumeCommunique } from "src/app/services/communique.service";

@Component ({
    selector: 'communique-resume',
    templateUrl: './communique.resume.component.html',
    styleUrls: ['./communique.resume.component.css']
}) export class CommuniqueResumeComponent {
    @Input() resume:ResumeCommunique;

}