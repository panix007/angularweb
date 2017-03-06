import { Component } from '@angular/core';

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title: string = 'The location of my device';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
