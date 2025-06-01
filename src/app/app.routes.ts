import { Routes } from '@angular/router';
import { PageAbscenceComponent } from './components/page/absences/page-abscence/page-abscence.component';
import { PageJustificationComponent } from './components/page/absences/page-justification/page-justification.component';
import { AbsenceComponent } from './components/page/absences/absence.component';
import { SecurityComponent } from './components/page/security/security.component';
import { LoginComponent } from './components/page/security/login/login.component';

export const routes: Routes = [
    {
        path: 'absence',
        component: AbsenceComponent ,
        children: [
            {
                path: '',
                component: PageAbscenceComponent
            },
            {
                path:"justification/:absenceId",
                component: PageJustificationComponent
            }
        ]
    },
    {
        path: 'security',
        component: SecurityComponent,
        children:[
            {
                path:'',
                component: LoginComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/security',
        pathMatch: 'full' 
    },
];
