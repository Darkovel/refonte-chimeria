import {NgModule} from '@angular/core';
import { TitleBandeauComponent } from './title.bandeau/title.bandeau.component';
import { ComponentModule } from 'src/app/components/component.module';
import { DescriptionBandeauComponent } from './description.bandeau/description.bandeau.component';
import { DefinitionEscapeComponent } from './definition.escape/definition.escape.component';
import { FondationCharonBandeauComponent } from './fondation.charon.bandeau/fondation.charon.bandeau.component';

const index = [
    TitleBandeauComponent,
    DescriptionBandeauComponent,
    DefinitionEscapeComponent,
    FondationCharonBandeauComponent,
]

@NgModule({
    declarations: index,
    imports: [ComponentModule],
    exports: index,
}) export class BandeauModule{}