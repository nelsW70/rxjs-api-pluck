import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface StarWars {
  count: number;
  next: string;
  previous: any;
  results: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  characters: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<StarWars>('https://swapi.dev/api/people/')
      .pipe(pluck('results'))
      .subscribe((response) => {
        this.characters = response;
        console.log(response);
      });
  }
}
