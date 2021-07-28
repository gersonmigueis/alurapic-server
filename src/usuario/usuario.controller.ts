import { Body, Controller, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeUsuario')
  public buscarPorNome(@Param('nomeUsuario') nomeUsuario: string) {
    const usuarioEncontrado = this.usuarioService.buscarPorNome(nomeUsuario);

    return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }
}
