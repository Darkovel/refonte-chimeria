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
import { LocalisationBandeauComponent } from './localisation.bandeau/localisation.bandeau.component';
import { ReviewBandeauComponent } from './review.bandeau/review.bandeau.component';
import { ReviewItemComponent } from './review.bandeau/components/review.item.component';
import { AllCommuniquesBandeauComponent } from './all.communiques.bandeau/all.communiques.bandeau.component';
import { AventureCharonBandeauComponent } from './aventure.charon.bandeau/aventure.charon.bandeau.component';
import { CalendarBandeauComponent } from './calendar.bandeau/calendar.bandeau.component';

const index = [
    TitleBandeauComponent,
    CalendarBandeauComponent,
    CommuniqueBandeauComponent,
    DescriptionBandeauComponent,
    DefinitionEscapeComponent,
    FondationCharonBandeauComponent,
    PriceBandeauComponent,
    PriceColonneComponent,
    LocalisationBandeauComponent,
    ReviewBandeauComponent,
    ReviewItemComponent,
    AllCommuniquesBandeauComponent,
    AventureCharonBandeauComponent,
]

@NgModule({
    declarations: index,
    imports: [ComponentModule, BrowserModule],
    exports: index,
}) export class BandeauModule{}