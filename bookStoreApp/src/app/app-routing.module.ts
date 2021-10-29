import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", redirectTo: "about-us", pathMatch: "full" },
  { path: "about-us", component: AboutUsComponent },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "auth", component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) },
  { path: "user/:id", component: UserComponent, loadChildren: () => import('./user/user.module').then(x => x.UserModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
