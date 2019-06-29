import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './components/login.component';
import { AlwaysAuthGuard } from './services/alwaysAuthGuard';

import { ShowComponent } from './components/show.component';
import { NewContactComponent } from './components/newContact.component';
import { ServiceComponent } from './components/service.component';
import { ContactListComponent } from './components/contactList.component';


export const customRoutes:Routes=[
    {path:'',component:LoginComponent,canActivate:[AlwaysAuthGuard]},
  //catch All
    {path:'contacts',component:ContactListComponent},
    {path:'show/:selected',component:ShowComponent},
    {path:'newcontact',component:NewContactComponent},
    {path:'services',component:ServiceComponent},
    {path:'about',loadChildren:'./about/about.module#AboutModule'},
    {path:'**',component:LoginComponent}
];

export const SPARouting = RouterModule.forRoot(customRoutes);

