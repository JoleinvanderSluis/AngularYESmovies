import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  myMovie = new Movie()
  movieList
  movieId
  genreId

  constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.getMovieList()
  }

  getMovieList(){
    this.movieService.getMovieList().subscribe(movieList => this.movieList = movieList)
  }

  onKlik(){
    this.movieService.createMovie(this.myMovie).subscribe(() =>
      this.getMovieList()
    );
  }

  onKlikAddGenre(){
    this.movieService.addGenre(this.movieId, this.genreId).subscribe()
  }

}