import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL:
        'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      comments: ['Awesome place', 'Wonderful experience'],
    },

    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/250px-Statue_of_Liberty_7.jpg',
      comments: ['Awesome place', 'Wonderful experience'],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + '',
    });
  }

  deletePlace(placeID: string) {
    this.places = this.places.filter((place) => place.id !== placeID);
  }

  getPlace(placeID: string) {
    return {
      ...this.places.find((place) => place.id === placeID),
    };
  }
}
