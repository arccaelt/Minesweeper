import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { BoardGenerator } from 'src/utils/BoardGenerator';
import { BoardTraverser } from 'src/utils/BoardTraverser';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardGenerator, BoardTraverser],
  bootstrap: [AppComponent]
})
export class AppModule { }
