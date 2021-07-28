import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeUsuario: 'gerson',
      email: 'gerson@gmail.com',
      senha: '123456',
      nomeCompleto: 'Gerson Migueis',
      dataDeEntrada: new Date(),
    },
  ];
  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  public buscarPorNome(nomeUsuario: string): Usuario {
    return this.usuarios.find((usuario) => usuario.nomeUsuario == nomeUsuario);
  }
}
