import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WorksComponent } from './features/works/works.component';

export const routes: Routes = [
    {
        path : "",
        component: HomeComponent
    },
     {
        path : "works",
        component: WorksComponent
    },
];
