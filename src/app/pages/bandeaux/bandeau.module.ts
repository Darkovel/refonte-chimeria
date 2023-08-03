import {NgModule} from '@angular/core';
import { TitleBandeauComponent } from './title.bandeau/title.bandeau.component';
import { ComponentModule } from 'src/app/components/component.module';
import { DescriptionBandeauComponent } from './description.bandeau/description.bandeau.component';

const index = [
    TitleBandeauComponent,
    DescriptionBandeauComponent,
]

@NgModule({
    imports: [ComponentModule],
    declarations: index,
    exports: index,
}) export class BandeauModule{}