import { Component, OnInit } from '@angular/core';
import { PlotComponent } from '../plot/plot.component';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {
    private maxNumberPlots: number = 4;

    public plots : PlotComponent[];

    constructor() {
        this.plots = [];
     }

    ngOnInit(): void {

    }

    addPlot() {
        if (this.plots.length < this.maxNumberPlots) {
            this.plots.push(new PlotComponent());
        }
    }

    removePlot(plots: PlotComponent) {
        alert("Not implemented");
    }
}
