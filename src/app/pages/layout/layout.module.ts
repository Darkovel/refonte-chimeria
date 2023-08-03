import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { ComponentModule } from "src/app/components/component.module";

const layouts = [
    HeaderComponent
]

@NgModule({
    imports: [CommonModule, RouterModule, ComponentModule],
    declarations: layouts,
    exports:layouts
}) export class LayoutsModule {}