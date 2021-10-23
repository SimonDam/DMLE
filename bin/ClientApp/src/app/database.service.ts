import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor() { }

    getProfile(id : number) : string {
        let profilesList = Array<string>("Adam", "Bob", "Charlie");
        if(id >= profilesList.length) { 
            return "Unable to that profile.";
        }
        else {
            return profilesList[id];
        }
    }
}
