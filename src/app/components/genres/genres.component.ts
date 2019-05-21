import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  myGenre = new Genre()
  genreList

  constructor(private genreService: GenreService) { }

  ngOnInit() {
      this.getGenreList()
  }

  getGenreList(){
    this.genreService.getGenreList().subscribe(genreList => this.genreList = genreList)
  }

  onKlik(){
    this.genreService.createGenre(this.myGenre).subscribe(() =>
      this.getGenreList()
    );
  }

}