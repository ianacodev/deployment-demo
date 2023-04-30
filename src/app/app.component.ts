import { Component } from '@angular/core';
// models
interface Item {
  name: string;
  image: string;
}
// consts
const imageAssetUrl = 'assets/images';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Deployment Demo';
  items: Item[] = [
    {
      name: 'angular',
      image: `${imageAssetUrl}/angular.webp`,
    },
    {
      name: 'circleci',
      image: `${imageAssetUrl}/circleci.webp`,
    },
    {
      name: 'docker',
      image: `${imageAssetUrl}/docker.webp`,
    },
    {
      name: 'kubernetes',
      image: `${imageAssetUrl}/kubernetes.webp`,
    },
    {
      name: 'nginx',
      image: `${imageAssetUrl}/nginx.webp`,
    },
  ];
}
