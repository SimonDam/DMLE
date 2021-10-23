import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { PlotsComponent } from './plots/plots.component';
import { PlotComponent } from './plot/plot.component';

@NgModule({
    declarations: [
        AppComponent,
        PlotsComponent,
        PlotComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
