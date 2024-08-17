import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent} from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component'
import { FormsModule } from '@angular/forms';
import { CustomHighlightTextAttributeDirective } from './directives/attribute/highlightText.directive';
import { RendererHighlightDirective } from './directives/attribute/renderer-highlight.directive'
import {AlternativeIfDirective} from './directives/structural/alternate-if.directive';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component'
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    UserComponent,
    UsersComponent,
    CustomHighlightTextAttributeDirective,
    RendererHighlightDirective,
    AlternativeIfDirective,
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
