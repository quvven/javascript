import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from "@angular/router";
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthorService } from './services/author.service';

const routes = [
  {path:'author', copmponent:AuthorComponent},
  {path:'login', copmponent:LoginComponent},
  {path:'register', copmponent:RegisterComponent},
  {path:'', copmponent:AuthorComponent, pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthorService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
