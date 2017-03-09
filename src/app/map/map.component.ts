import { AppConfig } from '../app.config';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationService } from '../common/services/location.service';
import { AlertService } from '../common/services/alert.service';
import { Location } from '../common/models/location';
import { Observable } from 'rxjs';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  selector: 'my-map',
  templateUrl: './map.path.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  // google maps zoom level
  zoom: number = 12;
  // initial center position for the map
  lat: number = 10.0246371;
  lng: number = 76.3559918;

  locations: Observable<Array<any>>;
  data: Observable<Array<any>>;

  constructor(
      private _http: Http, private config: AppConfig) {
        this._http.get(this.config.apiUrl + '/api/entities/locations').subscribe((res: Response) => {
             this.locations = res.json();
             console.log('response: '+this.locations);
          });

      }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

}
