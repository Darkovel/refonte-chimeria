import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BtnComponent } from "./btn.passheur.component";

const index = [
       BtnComponent 
]

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: index,
    exports: index
}) export class ComponentModule{}