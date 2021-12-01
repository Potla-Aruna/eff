import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  customEvents: ({ status: string; date: string; icon: any; color: string; image: string; } | { status: string; date: string; icon: any; color: string; image?: undefined; })[];

  constructor(public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
    this.customEvents = [
        {
            status: 'Ordered',
            date: '15/10/2020 10:30',
            icon: PrimeIcons.SHOPPING_CART,
            color: '#9C27B0',
            image: 'game-controller.jpg'
        },
        {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
        {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
        {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
  }

}
