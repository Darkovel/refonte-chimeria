import { Component } from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
}) export class TestComponent { 
    links:{url:string, name:string}[] = [
        {url:'./', name:'Accueil'},
        {url:'./', name:'Nos aventures'},
        {url:'./', name:'Jeux nomades'},
        {url:'./', name:'Communiqués'},
        {url:'./', name:'FAQ'}
    ] 
}