import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";

const layouts = [
    HeaderComponent
]

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: layouts,
    exports:layouts
}) export class LayoutsModule {}