import { Component } from '@angular/core';
import { PlotComponent } from './plot/plot.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ClientApp';
    id : string = "";
    name : string = "";

    constructor() { }
}
