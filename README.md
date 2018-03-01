Exercício de front-end com ~~Angular-JS~~ React
===============================================

> Intro original: _Comprove seus super conhecimentos de javascript, de angular js e de frameworks css construindo um dashboard de página única que contenha informações de performance da empresa._

Há quase um ano realizei este teste. Como foi algo que me trouxe muita coisa boa, tive a ideia de refazê-lo para ver o que mudou de lá pra cá.

Modificações ao projeto original que apresentei:

- Bower e AngularJS saem de cena, entra React (através do `create-react-app`);
- Material Design Lite também sai de cena, entra Bootstrap 4 e Reactstrap;
- Pastas de assets, exceto stylesheets, encontram-se em `src/assets/*`;
- Stylesheets encontram-se em `src/scss`;
- Os dados JSON são carregados através de um include, mas podem ser consumidos através de um request, como na versão original;

Observações: 
- Transpile de SCSS agora é realizado via `node-sass-chokidar`, com includes relativos de `node_modules` automáticos;
- Para evitar a necessidade de usar caminhos relativos (`../../Componente.js`), há um arquivo `.env` contendo o caminho root do source, isso não interfere nos imports de `node_modules`, apenas permite que realizemos includes tendo `src` como a raíz (`src/[pasta]/[componente].js`);

É isso! Basta dar `npm install` e após instalar todos os módulos usar um dos seguintes comandos:
- `npm run start`: inicia o servidor de desenvolvimento + file watchers;
- `npm run build`: executa o build de produção;

Mais informações no README original do `create-react-app` em [`README-CRA.md`](README-CRA.md).

-----

Descrição Original:
-------------------

#### O dashboard

Seu objetivo neste exercício é construir um dashboard que contenha dois índices de performance a a respectiva quebra por tipo de assinatura. Você deve encontrar as informações necessárias no JSON localizado na pasta "data" que deve ser consumido via angular js em simulação a uma chamada de api.

Índices Obrigatórios:
* Mantidas -> Quantas assinantes foram mantidas e por qual tipo de assinatura
* Novas -> Quantas assinantes são novas na base e por qual tipo de assinataura

(Você pode mostar outros índices e quebras se achar mais informativo)

> 1 - Faça um fork neste repositório e altere na sua própria conta do github.

> 2 - Adicione as dependencias de frameworks utilizando o bower. Graficos, gauges e painéis são bem-vindos.

> 3 - Desenvolva seu código. É obrigatório que utilize angularjs para mostrar os dados. 

> 4 - Faça um pull request ou nos avise que finalizou o seu maravilhoso dashboard.

... um exemplo de dashboard para estimular suas idéias ...
![dashboard example](https://blog.kissmetrics.com/wp-content/uploads/2013/09/dashboard-widget-types.png)

-----

Autor
-----

* **Fabio Yuiti Goto** ([lab@yuiti.com.br](mailto:lab@yuiti.com.br));
	* _Solução original (bower/angularjs) realizado em 02/2017_;
