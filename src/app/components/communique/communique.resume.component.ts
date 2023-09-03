import { Component, Input } from "@angular/core";

@Component ({
    selector: 'communique-resume',
    templateUrl: './communique.resume.component.html',
    styleUrls: ['./communique.resume.component.css']
}) export class CommuniqueResumeComponent {
    @Input() resume:{id:string, imgSrc:string, title:string, description:string};

}