
# The 7-1 pattern

O material aqui disponibilizado foi traduzido e adaptado de [Sass Guidelin](https://sass-guidelin.es/#architecture), visite para maiores referências.

A arquitetura SASS deste projeto está localizada em: /src/app/shared/styles/

## Arquitetura

Arquitetar um projeto CSS é provavelmente uma das coisas mais difíceis que você terá que fazer na vida de um projeto. Manter a arquitetura consistente e significativa é ainda mais difícil.

O padrão 7-1: 7 pastas, 1 arquivo. Define basicamente a seguinte regra: você tem todos os seus partials distribuídos em 7 pastas diferentes e um único arquivo no nível da raiz (geralmente chamado main.scss) que os importa para serem compilados em uma folha de estilo CSS.

* base/
* components/
* layout/
* pages/
* themes/
* abstracts/
* vendors/

E claro:

* main.scss

Idealmente, podemos encontrar algo como isto:

```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

#### BASE FOLDER

A pasta /base  contém o que podemos chamar de "código para o projeto". Aqui, você pode encontrar o arquivo de reinicialização, algumas regras tipográficas e provavelmente uma folha de estilos que define alguns estilos padrão para elementos HTML comummente usados.

* _base.scss
* _reset.scss
* _typography.scss

#### LAYOUT FOLDER

A pasta /layout  contém tudo o que faz parte da disposição do site ou aplicativo. Esta pasta poderá ter folhas de estilo para as partes principais do site (cabeçalho, rodapé, navegação, menu lateral ...), o sistema de grade ou mesmo estilos CSS para todos os formulários.

* _grid.scss
* _header.scss
* _footer.scss
* _sidebar.scss
* _forms.scss
* _navigation.scss

> NOTE - A pasta /layout também pode ser chamada de /partials, dependendo do que você preferir.

#### COMPONENTS FOLDER

Para componentes menores, há a pasta /components. Enquanto /layout é mais macro (definindo o wireframe global), os /components estão mais focados nos widgets. Ele contém todos os tipos de módulos específicos, como um slide, um load, um widget. É basicamente qualquer nesse sentido. Geralmente, há muitos arquivos em /components, uma vez que todo o site/aplicação deve ser composto principalmente por módulos minúsculo.

* _media.scss
* _carousel.scss
* _thumbnails.scss

> NOTE - A pasta /components também pode ser chamada de /modules, dependendo do que você preferir.

#### COMPONENTS FOLDER

Se você tem estilos específicos para uma página, é melhor colocá-los em uma pasta /pages, em um arquivo com o nome da página. Por exemplo, não é incomum ter estilos muito específicos para a página inicial, portanto, a necessidade de um arquivo de _home.scss em /pages.

* _home.scss
* _carousel.scss
* _contact.scss

#### THEMES FOLDER

Em grandes sites e aplicativos, não é incomum ter diferentes temas. Há certamente maneiras diferentes de lidar com temas, mas podem ser dispostos todos em uma pasta /themes.

* _admin.scss
* _theme-a.scss
* _theme-b.scss

> NOTE - Esta parte é muito especifica do projeto, e pode não existir em muitos outros.

##### ABSTRACTS FOLDER

A pasta /abstract reúne todas as ferramentas e helpers Sass usadas em todo o projeto. Toda variável global, função, mixin e placeholder devem ser colocadas aqui.

A regra de ouro para esta pasta é que não deve produzir uma única linha de CSS quando compilada por conta própria. Não são nada além de helpers Sass.

* _variables.scss
* _mixins.scss
* _functions.scss
* _placeholders.scss

Ao trabalhar em um projeto muito grande com muitos utilitários abstratos, pode ser interessante agrupá-los por tópico e não por tipo, por exemplo, tipografia (_typography.scss), theming (_theming.scss), etc. Cada arquivo contém todos os auxiliares relacionados: variáveis, funções, mixins e placeholders. Fazer isso pode tornar o código mais fácil de procurar e manter, especialmente quando os arquivos estão ficando muito longos.

> NOTE - A pasta /abstracts também pode ser chamada de /utilities ou /helpers, dependendo do que você preferir.

##### VENDORS FOLDER

E por último, mas não menos importante, a maioria dos projetos terá uma pasta /vendor contendo todos os arquivos CSS de bibliotecas e frameworks externos - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered e assim por diante.

* _normalize.scss
* _bootstrap.scss
* _jquery-ui.scss
* _select2.scss

##### MAIN FILE

O arquivo principal (geralmente rotulado main.scss) deve ser o único arquivo Sass de toda a base de código que não começa com um sublinhado. Este arquivo não deve conter nada, exceto @import e comentários.

Os arquivos devem ser importados de acordo com a pasta em que vivem, um após o outro na seguinte ordem:

1. abstracts/
2. vendors/
3. base/
4. layout/
5. components/
6. pages/
7. themes/

Para preservar a legibilidade, o arquivo principal deve respeitar estas diretrizes:

* Um arquivo por @import;
* Um @importe por linha;
* Nenhuma linha nova entre duas importações da mesma pasta;
* Uma nova linha após a última importação de uma pasta;
* Extensões de arquivo e underlines omitidos.

```
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
```