import { Routes } from '@angular/router';
import { PageAbscenceComponent } from './pages/abscence/page-abscence/page-abscence.component';
import { PageJustificationComponent } from './pages/abscence/page-justification/page-justification.component';

export const routes: Routes = [
    {
        path: 'abscence',
        component:PageAbscenceComponent ,
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
