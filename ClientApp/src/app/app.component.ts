import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ClientApp';
    id : string = "";
    name : string = "";

    constructor(private databaseService: DatabaseService) {

    }

    getValue(input : string) : void {
        this.id = input;
    }

    LoadProfile() : void{
        let id_int : number = Number(this.id);
        if(isNaN(id_int)) {
            this.name = "Only number is allowed.";
        }
        else {
            this.name = this.databaseService.getProfile(id_int);
        }
    }
}
