import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './sportsShop/new-task/new-task.component';
import { NewfeatureComponent } from './components/newfeature/newfeature.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ListFeatureComponent } from './components/list-feature/list-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    NewfeatureComponent,
    FeatureComponent,
    ListFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
