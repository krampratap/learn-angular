import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent} from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
