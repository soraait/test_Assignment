import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import ExampleJson from '../../../../../assets/example_data.json';

interface OperationTime {
  day: string;
  time_open: string;
  time_close: string;
}

interface Data {
  id: number;
  name: string;
  categories: string[];
  profile_image_url: string;
  images: string[];
  time_open: string;
  time_close: string;
  address: string;
  rating: string;
}

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlaceListComponent implements OnInit {
  constructor() {}
  data: any = ExampleJson;
  Place: Data[] = [];

  today = new Date();
  firstOfMonth = new Date(this.today.getDay());
  Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  Day = this.Days[this.today.getDay()];
  // days = new today.getDay();

  ngOnInit() {
    this.getPlace();
    console.log(this.Day);
    console.log(this.Place);
  }

  getPlace(): void {
    let data = this.data;
    for (const dt of data) {
      let day = dt.operation_time;
      let time_open = '';
      let time_close = '';

      for (const d of day) {
        if (d.day == this.Day) {
          time_open = d.time_open;
          time_close = d.time_close;
        }
      }

      const place = {
        id: dt.id,
        name: dt.name,
        categories: dt.categories,
        profile_image_url: dt.profile_image_url,
        images: dt.images,
        time_open: time_open,
        time_close: time_close,
        address: dt.address,
        rating: dt.rating,
      };

      this.Place.push(place);
    }
  }
}
