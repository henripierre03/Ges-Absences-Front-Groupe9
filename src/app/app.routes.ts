import { Routes } from '@angular/router';
import { AbsenceComponent } from './components/page/absences/absence.component';
import { DashboardComponent } from './components/page/absences/dashboard/dashboard.component';
import { PageAbscenceComponent } from './components/page/absences/page-abscence/page-abscence.component';
import { PageJustificationComponent } from './components/page/absences/page-justification/page-justification.component';
import { AuthGuard } from './components/page/security/auth.guard';
import { LoginComponent } from './components/page/security/login/login.component';
import { SecurityComponent } from './components/page/security/security.component';

export const routes: Routes = [
  {
    path: 'security',
    component: SecurityComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },

  {
    path: 'absence',
    component: AbsenceComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        component: PageAbscenceComponent,
      },
      {
        path: 'accueil',
        component: DashboardComponent,
      },
      {
        path: 'justification/:absenceId',
        component: PageJustificationComponent,
        data: { renderMode: 'server' },
      },
    ],
  },

  {
    path: '',
    redirectTo: '/security',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '/absence',
  },
];
