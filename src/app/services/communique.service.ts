import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ResumeCommunique {
    id:string, 
    imgSrc:string, 
    title:string, 
    description:string
}

export interface Communique {
    resume: ResumeCommunique,
    article: string
}

@Injectable({
    providedIn: 'root'
}) export class CommuniqueService {
    url='';
    resumes: ResumeCommunique[] = [
        {id:'1', imgSrc:'', title:'Article 1', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'2', imgSrc:'', title:'Article 2', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'3', imgSrc:'', title:'Article 3', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'4', imgSrc:'', title:'Article 4', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'5', imgSrc:'', title:'Article 5', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'6', imgSrc:'', title:'Article 6', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'7', imgSrc:'', title:'Article 7', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'8', imgSrc:'', title:'Article 8', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'9', imgSrc:'', title:'Article 9', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'10', imgSrc:'', title:'Article 10', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'11', imgSrc:'', title:'Article 11', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'12', imgSrc:'', title:'Article 12', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
    ];
    communiques: Communique[] = [];

    constructor(private http:HttpClient) {}

    getResumeCommunique(index: number, nbr: number): ResumeCommunique[] {
        if(nbr < 1 || index < 0)
            return [];
        return this.resumes.slice(index, index+nbr);
    }

    getCommunique(id:string): Communique {
        return this.communiques.find((communique) => {
            return communique.resume.id == id;
        })
    }

}