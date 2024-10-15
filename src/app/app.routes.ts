import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { adminGuard } from './guards/admin.guard';
import { haschangesGuard } from './guards/haschanges.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent, canDeactivate: [haschangesGuard] },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            // { path: '', redirectTo: 'permanent', pathMatch: 'full' },
            { path: 'permanent', component: PermanentJobsComponent },
            { path: 'contract', component: ContractJobsComponent }
        ],
        canActivateChild: [adminGuard]
    },
    { path: 'users', component: UserListComponent },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    { path: 'products', component: ProductListComponent, canActivate: [adminGuard] },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: '**', component: NotfoundComponent },
];
