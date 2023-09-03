import { NgModule } from '@angular/core';
import { TitleBandeauComponent } from './title.bandeau/title.bandeau.component';
import { ComponentModule } from 'src/app/components/component.module';
import { DescriptionBandeauComponent } from './description.bandeau/description.bandeau.component';
import { DefinitionEscapeComponent } from './definition.escape/definition.escape.component';
import { FondationCharonBandeauComponent } from './fondation.charon.bandeau/fondation.charon.bandeau.component';
import { PriceBandeauComponent } from './price.bandeau/price.bandeau.component';
import { PriceColonneComponent } from './price.bandeau/components/price.colonne.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommuniqueBandeauComponent } from './communique.bandeau/communique.bandeau.component';

const index = [
    TitleBandeauComponent,
    CommuniqueBandeauComponent,
    DescriptionBandeauComponent,
    DefinitionEscapeComponent,
    FondationCharonBandeauComponent,
    PriceBandeauComponent,
    PriceColonneComponent,
]

@NgModule({
    declarations: index,
    imports: [ComponentModule, BrowserModule],
    exports: index,
}) export class BandeauModule{}