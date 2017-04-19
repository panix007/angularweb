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
  lat: number = 11.0168;
  lng: number = 76.9558;

  locations: Observable<Array<any>>;
  data: Observable<Array<any>>;

  constructor(
      private _http: Http, private config: AppConfig) {
        this._http.get(this.config.apiUrl + '/api/entities/locations').subscribe((res: Response) => {
             this.locations = res.json();
             console.log('### response: '+this.locations);
             if (this.locations != null && this.locations[0] != null){
               this.lat = this.locations[0].Lattitude;
               this.lng = this.locations[0].Longitude;
               console.log('### initial lat: '+this.lat+', initial lng: '+this.lng);
             }
          });
      }

  clickedMarker(label: string, index: number) {
    console.log(`### clicked the marker: ${label || index}`)
  }

}
