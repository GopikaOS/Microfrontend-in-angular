
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE_APP_URL2 = "http://localhost:4201/remoteEntry2.js";
const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'register',
  loadChildren:() => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: "mfeApp",
        exposedModule: "./RegistrationModule"
      }).then(m => m.RegistrationModule).catch(err => console.log(err));
    }
  },
  {path:'viewemployee',
  loadChildren:() => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: "mfeApp",
        exposedModule: "./EmployeelistModule"
      }).then(m => m.EmployeelistModule).catch(err => console.log(err));
    }
  },
  {path:'search',
  loadChildren:() => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL2,
        remoteName: "mfeSearchapp",
        exposedModule: "./SearchModule"
      }).then(m => m.SearchModule).catch(err => console.log(err));
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeHome = [HomeComponent];
