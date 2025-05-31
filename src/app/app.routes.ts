import { Routes } from '@angular/router';
import { PageAbscenceComponent } from './components/page/absences/page-abscence/page-abscence.component';
import { PageJustificationComponent } from './components/page/absences/page-justification/page-justification.component';
import { AbsenceComponent } from './components/page/absences/absence.component';

export const routes: Routes = [
    {
        path: 'abscence',
        component: AbsenceComponent ,
        children: [
            {
                path: '',
                component: PageAbscenceComponent
            },
            {
                path:"justification/:abscenceId",
                component: PageJustificationComponent
            }
        ]
    },
    // {
    //     path:"security",
    //     component: SecurityComponent,
    //     children: [
    //         {
    //             path:"login",
    //             component: LoginComponent
    //         }
    //     ]
    // },
    {
        path: '',
        redirectTo: '/abscence',
        pathMatch: 'full' 
    },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];
