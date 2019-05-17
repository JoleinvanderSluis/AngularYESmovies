import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  private genre: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.list().subscribe(data => {
      this.genre = data;
    })
  }
}