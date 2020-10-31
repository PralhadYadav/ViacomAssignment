import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CompanySideBarComponent } from './components/company-side-bar/company-side-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItemComponent,
    ListItemComponent,
    CompanySideBarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
