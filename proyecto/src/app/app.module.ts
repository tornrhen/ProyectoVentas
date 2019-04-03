import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';

const appRoutes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '**', component: LoginComponent },
  { path:'/usuarios', component: UsuarioComponent},
  { path:'/productos', component: ProductoComponent},
  { path:'/ventas', component: VentaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    ProductoComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
