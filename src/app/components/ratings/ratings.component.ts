import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/model/rating';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  private ratings: Rating[];

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.list().subscribe(data =>{
      this.ratings = data;
    })
  }

}

