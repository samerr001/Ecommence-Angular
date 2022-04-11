import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { ProduitserviceService } from './produitservice.service';
import { RouteGuardService } from './service/route-guard.service';
import { PanierComponent } from './panier/panier.component';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';
import {HttpInterceptorService} from './http-interceptor-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { ListUsersComponent } from './list-users/list-users.component';
import { PanierserviceService } from './panierservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    GalleryComponent,
    PanierComponent,
    ListUsersComponent,
    AjoutproduitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:4200']
      }

    }),
  ],
  providers: [ProduitserviceService,PanierserviceService, HttpClientModule, RouteGuardService,JwtHelperService,
    HardcodedAuthenticationService, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
