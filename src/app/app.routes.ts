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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'obras', component: ObrasListComponent },
  { path: 'obra/details/:id', component: ObraDetailsComponent },
  { path: 'obra/control/:id', component: ObraControlComponent },
  { path: 'obra/maintenance/:id', component: ObraMaintenanceComponent },
  { path: 'obra/diary/:id', component: ObraDiaryComponent },
  { path: 'obra/documents/:id', component: ObraDocumentsComponent },
  { path: 'obra/checklists/:id', component: ObraChecklistsComponent },
  { path: 'obra/collaboration/:id', component: ObraCollaborationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' } // Wildcard route for a 404 page
];