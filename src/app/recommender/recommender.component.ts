import { Component, OnInit } from '@angular/core';
import {RecommenderService} from './Service/recommendsystem.service'

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.scss']
})
export class RecommenderComponent implements OnInit {

  constructor(private service: RecommenderService) { 
    service.getRecommendation([]);
  }

  ngOnInit() {
  }

}
