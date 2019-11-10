import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class PagesModule { }
