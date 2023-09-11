import { Comentario } from './Comentarios';

export interface Topicos {
  id: number;
  donoDaPostagem: string;
  foto: string;
  msg: string;
  data: string;
  comentarios: Comentario[];
}
