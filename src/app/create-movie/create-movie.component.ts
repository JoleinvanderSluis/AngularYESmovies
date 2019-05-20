import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class MovieCreateComponent implements OnInit {

  private movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = new Movie();
  }

  create(): void{
    this.movieService.create(this.movie).subscribe(movie =>{
      this.movie = new Movie();
    });
  }

}
