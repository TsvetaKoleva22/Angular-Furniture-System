import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownDirective } from './components/navigation/dropdown.directive';
import { CollapseDirective } from './components/navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth.service';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';

import { FurnitureAllComponent } from './components/furniture/furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from './components/furniture/create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './components/furniture/furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './components/furniture/furniture-user/furniture-user.component';
import { FurnService } from './core/services/furn.service';
import { ShortenPipe } from './core/pipes/shorten.pipe';
import { ResInterceptorService } from './core/interceptors/res-interceptor.service';
import { EditFurnitureComponent } from './components/furniture/edit-furniture/edit-furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    ShortenPipe,
    EditFurnitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    AuthService,
    FurnService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
