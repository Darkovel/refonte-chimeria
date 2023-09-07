import {Component} from "@angular/core";


@Component({
    selector: 'app-layout',
    template: `
    <header-app [links]="links"></header-app>
    <router-outlet></router-outlet>
    <footer-app></footer-app>
    `,
}) export class LayoutComponent {
    links:{url:string, name:string}[] = [
        {url:'/accueil', name:'Accueil'},
        {url:'/nos-aventures', name:'Nos aventures'},
        {url:'/jeux-nomades', name:'Jeux nomades'},
        {url:'/communiques', name:'Communiqués'},
        {url:'/faq', name:'FAQ'}
    ]
}