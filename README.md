# Documentação do Projeto: Timeline da Radioatividade

## Visão Geral

Este projeto consiste em uma aplicação React que exibe uma timeline interativa sobre marcos importantes na história da radioatividade. A aplicação permite aos usuários navegar entre eventos históricos relacionados à radioatividade no mundo e no Brasil.

## Componentes Principais

### App

O componente principal que gerencia o estado de carregamento e renderiza o componente de timeline.

```jsx
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return loading ? <Loading /> : <TimelineComponent />;
};
```


### TimelineComponent

O componente principal que renderiza a timeline interativa.

#### Funcionalidades

- Exibição de eventos em uma linha do tempo
- Navegação entre páginas de eventos
- Alternância entre timeline mundial e brasileira
- Exibição de detalhes do evento em um popup ou modal (dependendo do tamanho da tela)

#### Estados

- `activeItem`: Controla qual item está ativo (expandido)
- `currentPage`: Controla a página atual da timeline
- `activeTab`: Controla qual tab está ativa (mundo ou Brasil)
- `isModalOpen`: Controla a exibição do modal em telas menores

#### Funções Principais

- `handleNextPage()` e `handlePreviousPage()`: Navegação entre páginas
- `handleTabChange()`: Alterna entre as timelines mundial e brasileira
- `handleItemClick()`: Gerencia a exibição de detalhes do evento

### Loading

Um componente que exibe uma animação de carregamento com ícones relacionados à química e biologia.

```jsx
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="chemical-item">⚗️</div>
        <div className="chemical-item">⚛️</div>
        <div className="chemical-item">🧪</div>
        <div className="chemical-item">🧬</div>
      </div>
      <p>Carregando...</p>
    </div>
  );
};
```
## Dados

Os dados dos eventos são armazenados em um arquivo JSON separado, com o seguinte formato:

```javascript
export const world = [
  {
    year: "1896",
    icon: "☢️",
    title: "Descoberta da Radiação",
    shortDescription: "Henri Becquerel descobre a radiação.",
    longDescription: "O cientista francês Henri Becquerel descobre a radiação a partir de experimentos utilizando urânio. Marie S. Curie dá o nome de radioatividade à radiação examinada por Becquerel."
  },
];
```
Os dados foram obtidos do site: [CNEN](https://memoria.cnen.gov.br/memoria/Cronologia.asp?Unidade=Mundo) e artigos diversos.

## Estilos

Os estilos são definidos em arquivos CSS separados (`index.css` e `loading.css`) e incluem:

- Layout responsivo
- Animações para a linha do tempo
- Estilos para os popups e modais

## Considerações de Uso

- A aplicação é responsiva e se adapta a diferentes tamanhos de tela
- Em telas menores (≤ 412px), os detalhes dos eventos são exibidos em um modal
- A navegação entre páginas é limitada pelo número total de eventos

## Melhorias Futuras

- Implementar busca de eventos
- Implementar um guia de uso dos modais e ícones
- Adicionar mais interatividade à linha do tempo
- Expandir o conjunto de dados para incluir mais eventos históricos