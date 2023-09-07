import { Component } from "@angular/core";
import { ReviewService } from "src/app/services/review.service";

@Component({
    selector: 'all-communique-bandeau',
    templateUrl: './all.communiques.bandeau.component.html',
    styleUrls: ['./all.communiques.bandeau.component.css']
}) export class AllCommuniquesBandeauComponent {
    resumes:{id:string, imgSrc:string, title:string, description:string}[] = [
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
        {id:'13', imgSrc:'', title:'Article 13', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'14', imgSrc:'', title:'Article 14', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'15', imgSrc:'', title:'Article 15', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'16', imgSrc:'', title:'Article 16', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'17', imgSrc:'', title:'Article 17', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'18', imgSrc:'', title:'Article 18', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
    ];
}