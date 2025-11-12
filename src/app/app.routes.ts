import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ObrasListComponent } from './pages/obras-list/obras-list.component';
import { ObraDetailsComponent } from './pages/obra-details/obra-details.component';
import { ObraControlComponent } from './pages/obra-control/obra-control.component';
import { ObraMaintenanceComponent } from './pages/obra-maintenance/obra-maintenance.component';
import { ObraDiaryComponent } from './pages/obra-diary/obra-diary.component';
import { ObraDocumentsComponent } from './pages/obra-documents/obra-documents.component';
import { ObraChecklistsComponent } from './pages/obra-checklists/obra-checklists.component';
import { ObraCollaborationComponent } from './pages/obra-collaboration/obra-collaboration.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'obras', component: ObrasListComponent, canActivate: [authGuard] },
  { path: 'obra/details/:id', component: ObraDetailsComponent, canActivate: [authGuard] },
  { path: 'obra/control/:id', component: ObraControlComponent, canActivate: [authGuard] },
  { path: 'obra/maintenance/:id', component: ObraMaintenanceComponent, canActivate: [authGuard] },
  { path: 'obra/diary/:id', component: ObraDiaryComponent, canActivate: [authGuard] },
  { path: 'obra/documents/:id', component: ObraDocumentsComponent, canActivate: [authGuard] },
  { path: 'obra/checklists/:id', component: ObraChecklistsComponent, canActivate: [authGuard] },
  { path: 'obra/collaboration/:id', component: ObraCollaborationComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' } // Wildcard route for a 404 page
];