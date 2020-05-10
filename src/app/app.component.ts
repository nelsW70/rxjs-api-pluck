import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  completeResponse: any;
  characters: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // complete response from api
    this.http.get('https://swapi.dev/api/people/').subscribe((response) => {
      this.completeResponse = response;
      console.log(this.completeResponse);
    });

    // response filtered using pluck before subscribe
    this.http
      .get('https://swapi.dev/api/people/')
      .pipe(pluck('results'))
      .subscribe((response) => {
        this.characters = response;
        console.log(response);
      });
  }
}
