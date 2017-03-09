import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LocationService {

    getAll() : Location[] {
      return [
        {Id: '1', Lattitude: 10.0246371, Longitude: 76.3559918},
        {Id: '2', Lattitude: 10.0654600, Longitude: 76.3559918},
        {Id: '3', Lattitude: 10.0984499, Longitude: 77.3567218},
        {Id: '4', Lattitude: 10.1282999, Longitude: 77.3599018},
      ];
    }

    constructor(private http: Http, private config: AppConfig) { }


    getAllLocations(): Observable<Location[]>{
      let location$ = this.http
        .get(this.config.apiUrl + '/api/entities/locations', {headers: this.getHeaders()})
        .map(mapLocations)
        .catch(handleError);
        return location$;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
  }

    function mapLocations(response:Response): Location[]{
       return response.json().results.map(toLocation)
    }

    function toLocation(r:any): Location{
      let location = <Location>({
        Id: r.Id,
        Lattitude: r.Lattitude,
        Longitude: r.Longitude,
      });
      console.log('Parsed person:', location);
      return location;
    }

    // this could also be a private method of the component class
    function handleError (error: any) {
      // log error
      // could be something more sofisticated
      let errorMsg = error.message || `Yikes! There was was a problem and we couldn't retrieve your data!`
      console.error(errorMsg);

      // throw an application level error
      return Observable.throw(errorMsg);
    }
