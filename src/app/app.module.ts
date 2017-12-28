import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// 路由
import { RouterModule, Routes } from "@angular/router";

// 服务
import { UsersService } from "./services/users.service";

import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { AlertComponent } from './components/common/alert/alert.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const appRoutes=[
  {path:"alert", component:AlertComponent},
  {path:"users", component:UserListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlertComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
