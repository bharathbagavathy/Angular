import { NgModule } from '@angular/core';
import { RouterModule , Route} from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes:Route[]=[
    
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: '/login', pathMatch: 'full' }
        // path:'admin' ,loadChildren:() => import('./admin/admin.module')
        // .then(mod=> mod.AdminModule)
    
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}