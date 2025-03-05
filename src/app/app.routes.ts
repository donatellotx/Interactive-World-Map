

import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';


export const routes: Routes = [
  {path: '',
    redirectTo: 'app/world-map',
    pathMatch: 'full'
  },
  {
    path: 'app/world-map',
    component: WorldMapComponent
  }
];



