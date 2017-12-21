import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

/**
 * @whatItDoes Fornecesse um observable para monitorar quais rotas deverão ser reconstruidas.
 *
 * @description Esta classe será utilizada para compor uma lista onde serão indicadas
 * quais rotas foram fechadas, e devem ser reconstruídas. Garantindo que uma tela
 * reaberta venha com os dados de formulários/filtros vazios e não com valores informados anteriormente.
 *
 *
 * @author Ronildo dos Santos <ronildo.carneiro@kepha.com.br>
 */
@Injectable()
export class ReuseStrategyObservable {

  private observable: Observable<any>;
  private observer: any;

  constructor() {
    this.observable = new Observable(observer => this.observer = observer);
  }

  /**
   *
   * @returns {Observable<any>}
   */
  public getObservable(): Observable<any> {
    return this.observable;
  }

  /**
   * Path utilizado como chave no momento de armazenar as rotas.
   *
   * @param {string} path
   */
  public notify(path: string) {
    this.observer.next(path);
  }

}