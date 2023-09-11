import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class ForumModule { }
