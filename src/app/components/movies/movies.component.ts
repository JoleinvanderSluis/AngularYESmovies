import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  
})
export class MoviesComponent implements OnInit {

  private movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.list().subscribe(data =>{
      this.movies = data;
    })
  }

}
