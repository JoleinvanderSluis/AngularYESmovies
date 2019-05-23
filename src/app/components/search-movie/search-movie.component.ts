import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  foundMovies
  inputText

  ngOnInit() {
  }

  getMovies(){
    console.log("in search movies comp" + this.inputText)
    this.movieService.searchMovies(this.inputText).subscribe(foundMovies => this.foundMovies = foundMovies)
  }
}


