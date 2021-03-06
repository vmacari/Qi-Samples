import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from './osiconfiguration.service';
import { AdalService } from './adal/adal.service';
import { AppComponent } from './app.component';
import {QiRestService} from './qi.rest.service';
import {AuthHttp} from './adal/authHttp.service';
import {DatasrcComponent} from './datasrc/datasrc.component';
import { routing, appRoutingProviders  } from './app.routing';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DatasrcComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    HttpModule
  ],
  providers: [ConfigurationService, appRoutingProviders,
  AdalService,
  QiRestService,
  AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
