import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumService } from '../services/forum.service';
import { Topicos } from '../model/Topicos';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  topicos: Topicos[] = [];
  showFullText = false;

  constructor(private forumService: ForumService) {}

  toggleText() {
    this.showFullText = !this.showFullText;
  }

  ngOnInit(): void {
    this.forumService.list().subscribe((data) => {
      this.topicos = data;
    });
  }
}



/*
    {
        "id": 1,
        "donoDaPostagem": "Tadeu da Penha Moraes Junior",
        "foto": "Foto",
        "msg": "Topico de Tadeu teste ",
        "data": "08-09-2023",
        "comentarios": [
            {
                "id": 1,
                "topicoId": 1,
                "donoDaPostagem": "Edlaine Braga",
                "foto": "Foto",
                "msg": "Edlaine comentando o Topico do Tadeu.Editado",
                "data": "08-09-2023"
            }
        ]
    },



*/
