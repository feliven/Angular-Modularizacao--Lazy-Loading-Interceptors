import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { map } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  function transformarDados(dados: any): any {
    const ehArray = Array.isArray(dados);

    if (ehArray) {
      // confere se array tem variável chamada 'nome'
      const dadosTemNome = dados.some((element) =>
        Object.hasOwn(element, 'nome'),
      );

      if (dados.length > 0 && dadosTemNome) {
        console.log('array tem variável nome');

        dados.forEach((dado) => {
          const nomeMaiuscula = dado.nome.toString().toUpperCase();
          dado.nome = nomeMaiuscula;
        });
      }
    }

    return dados;
  }

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event);
        return event.clone({ body: transformarDados(event.body) });
      }
      return event;
    }),
  );
};
