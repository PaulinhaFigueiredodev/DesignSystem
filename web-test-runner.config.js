/**
 * web-test-runner.config.js
 * ---------------------------------------------------------
 * Este arquivo configura como os testes do Design System
 * serão executados.
 *
 * Ele diz:
 * - onde estão os testes
 * - em qual navegador rodar
 * - como resolver imports
 * - regras básicas de execução
 *
 * IMPORTANTE:
 * Não altere este arquivo sem entender o impacto,
 * pois ele afeta TODOS os testes do projeto.
 * ---------------------------------------------------------
 */

export default {

  /**
   * files
   * -------------------------------------------------------
   * Define quais arquivos de teste o Web Test Runner
   * deve executar.
   *
   * Neste projeto, todo teste:
   * - vive junto do componente
   * - fica dentro da pasta __tests__
   * - termina com .test.js
   *
   * Exemplo de caminho válido:
   * components/button/fab-button/__tests__/fab-button.test.js
   */
  files: 'components/**/__tests__/**/*.test.js',

  /**
   * nodeResolve
   * -------------------------------------------------------
   * Permite que o navegador resolva imports vindos
   * do node_modules.
   *
   * Sem isso, imports como:
   *   import { LitElement } from 'lit';
   *   import { fixture } from '@open-wc/testing';
   *
   * iriam quebrar.
   */
  nodeResolve: true,

  /**
   * browsers
   * -------------------------------------------------------
   * Define em quais navegadores os testes vão rodar.
   *
   * Usamos "chromium" porque:
   * - é rápido
   * - suporta Web Components completamente
   * - funciona bem em CI (GitHub Actions)
   *
   * IMPORTANTE:
   * Testes de Web Components DEVEM rodar
   * em navegador real, não em Node puro.
   */
  browsers: [
    {
      name: 'chromium'
    }
  ],

  /**
   * testFramework
   * -------------------------------------------------------
   * Configurações do framework de testes (Mocha).
   */
  testFramework: {
    config: {

      /**
       * timeout
       * ---------------------------------------------------
       * Tempo máximo (em ms) que um teste pode levar.
       *
       * Testes de DOM, Shadow DOM e acessibilidade
       * podem ser um pouco mais lentos.
       *
       * 5000ms = 5 segundos (valor seguro)
       */
      timeout: 5000
    }
  }

};
  