import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    public activateRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      //redirect
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace() {
    const alertElement = await this.alert.create({
      header: 'Are you sure, you want to delete it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          },
        },
      ],
    });
    await alertElement.present();
  }
}
