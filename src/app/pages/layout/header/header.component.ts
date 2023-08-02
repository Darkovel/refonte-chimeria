import { AfterViewInit, Component, Input } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
}) export class HeaderComponent implements AfterViewInit {
    @Input() links: {name:string, url:string}[];
    hambergerToggler: HTMLLIElement;
    navLinksContainer: HTMLLIElement;
    observer: ResizeObserver;

    constructor(private route: Router) {

    }

    ngAfterViewInit(): void {
        this.hambergerToggler = document.querySelector(".hamburger");
        if(this.hambergerToggler!==null) {
            this.route.events.subscribe((event) => {
                if(event instanceof NavigationEnd) {
                    this.closeToggleNav();
                }
            })
        }

        this.navLinksContainer = document.querySelector(".navlinks-container");
        if(this.navLinksContainer) {
            this.observer = new ResizeObserver(entries => {
                if(entries[0].contentRect.width <= 900) {
                    this.navLinksContainer.style.transition = "transform 0.3s ease-out";
                } else {
                    this.navLinksContainer.style.transition = "none";
                }
            });
            this.observer.observe(document.body);
        }
    }

    toggleNav() {
        this.hambergerToggler.classList.toggle("open");

        let ariaToggle = this.hambergerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
        this.hambergerToggler.setAttribute("aria-expanded", ariaToggle);

        this.navLinksContainer.classList.toggle("open");
    }

    closeToggleNav() {
        let ariaToggle = this.hambergerToggler.getAttribute("aria-expanded") === "true";

        if(ariaToggle) {
            this.hambergerToggler.classList.toggle("open");
            this.hambergerToggler.setAttribute("aria-expanded", "false");
            this.navLinksContainer.classList.toggle("open");
        }
    }
}