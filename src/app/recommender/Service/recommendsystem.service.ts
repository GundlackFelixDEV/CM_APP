import { Injectable } from '@angular/core';
import { Diary_Entry} from '../../Models/Diary_Model';

@Injectable({
  providedIn: 'root',
})

class Recommendation {
    HWPL_Values: Float32Array;
}
export class RecommenderService {
    constructor (){}

    getRecommendation(entries: Array<Diary_Entry>) {
        entries.forEach(function(entry){
            console.log("Get Recommendation for Entry")
            console.log(entry);
            return new Recommendation();
        });
    }
}
