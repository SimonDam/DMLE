import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
selector: 'app-plot',
templateUrl: './plot.component.html',
styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements AfterViewInit {
    private _height: number = 0;
    private _width: number = 0;

    constructor() {

    }

    ngAfterViewInit(): void {
        let boundingRect = document.getElementById("svg-plot")?.getBoundingClientRect();
        if (boundingRect) {
            this._height = boundingRect.height;
            this._width = boundingRect.width;
            this.plot();
        } else {
            this.plot(false);
        }
    }

    DUMMY_DATA : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    DUMMY_DATA_STR : string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    plot(doNotPlot?: boolean): void {
        if (!doNotPlot) {
            let max = this.DUMMY_DATA.sort((a, b) => b-a)[0];
            let xScale = d3.scaleBand()
                            .domain(this.DUMMY_DATA_STR)
                            .rangeRound([0, this._width])
                            /*.padding(0.0001*this._height)*/;
            let yScale = d3.scaleLinear().domain([0, max]).range([this._height, 0]);
            d3.select("svg")
                .selectAll(".bar")
                .data(this.DUMMY_DATA)
                .enter()
                .append('rect')
                .classed("bar", true)
                .attr("width", xScale.bandwidth())
                .attr("height", (data) => this._height - yScale(data)) 
                .attr("x", data => {
                    let result = xScale(data.toString());
                    if (result === undefined) {
                        return "";
                    } else {
                        return result
                    }
                })
                .attr("y", data => yScale(data))
        }
    }
}
