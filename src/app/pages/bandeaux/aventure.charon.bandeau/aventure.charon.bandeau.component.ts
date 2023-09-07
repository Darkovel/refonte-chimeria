import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './components/modal.component';

@Component ({
    selector: 'aventure-charon-bandeau',
    templateUrl: './aventure.charon.bandeau.component.html',
    styleUrls: ['./aventure.charon.bandeau.component.css']
}) export class AventureCharonBandeauComponent {
    @ViewChild('congregation_modal', {static: false}) congregation_modal: ModalComponent

    openModal() {
        this.congregation_modal.open();
    }
}