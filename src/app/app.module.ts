import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { EducbgComponent } from './educbg/educbg.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonalinfoComponent,
    ContactinfoComponent,
    EducbgComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
