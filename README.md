<h1 align="center"> 
  <img width="41" height="32" alt="logo" src="https://github.com/user-attachments/assets/545dc5a4-68bb-49d9-be54-e4520c820b66" />
  <br>
  Numbers
  <p >
    <img src="https://img.shields.io/github/last-commit/Francine02/Numbers-Rocketseat?style=flat&logo=git&logoColor=white&color=d9d9d9" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/Francine02/Numbers-Rocketseat?style=flat&color=c58de7" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/Francine02/Numbers-Rocketseat?style=flat&color=020202" alt="Languages Count">
  </p>
</h1>

**Numbers** é um desafio do curso de **JavaScript - Rocketseat**, nesse desafio é necessário desenvolver um site simples para geração de números aleatórios dentro de um intervalo definido pelo usuário, com a opção de evitar repetições e com feedback visual animado dos resultados.

---

## Visualização do Projeto:
<img width="400" height="500" alt="image" src="https://github.com/user-attachments/assets/f6b6257c-00d4-456e-92af-f88a335badfa" />
<img width="400" height="500" alt="image" src="https://github.com/user-attachments/assets/7244f7ac-b19f-4ed5-b427-575a9ceb02bb" />

---

## Funcionalidades:
- Geração de números aleatórios dentro de um intervalo
- Opção de não repetir números
- Validação de dados 
- Feedback visual usando Toast notifications
- Animações visuais para exibição dos resultados
- Estrutura HTML com preocupação básica com acessibilidade
- Possibilidade de sortear novamente com os mesmos parâmetros

---

## Tecnologias utilizadas:
- HTML, CSS, JavaScript (ES Modules) e Toastify

---

## Regras de validação:
- O valor máximo deve ser maior que o mínimo
- A quantidade solicitada não pode ser maior que o interfalo disponível quando a repetição está desabilitada

Exemplo inválido:
```bash
Quantidade: 10
Intervalo: 1 até 5
Não repetir números: ativado
```
Nesse caso, só existem 5 números possíveis, então o sorteio não pode ser realizado.

---

## Arquitetura do projeto:

```bash
project
│
├── index.html
│
├── css
│   ├── globals.css
│   ├── styles.css
│   └── media.css
│
├── js
│   ├── main.js
│   ├── random.js
│   ├── validation.js
│   ├── render.js
│   └── toast.js
│
└── assets
    ├── again.png
    ├── arrow.png
    ├── avatar.png
    ├── background.png
    ├── logo.png
    ├── success.png
    └── warning.png
```

---

## Módulos JavaScript:
#### `main.js`

Responsável pelo controle principal da aplicação:
- Captura eventos do formulário
- Coleta os valores inseridos pelo usuário
- Chama a geração de números
- Controla o contador de sorteios
- Aciona a renderização dos resultados


#### `random.js`

Responsável pela lógica de geração dos números aleatórios.

Contém:
- Geração com repetição
- Geração sem repetição
- Verificação de limites do intervalo

Função principal:
```bash
generateRandomNumbers(quantity, minNumber, maxNumber, shouldNotRepeat)
```


#### `validation.js`

Responsável por validar os dados antes do sorteio.

Validações implementadas:
- isMaxGreaterThanMin
- isQuantityGreaterThanInterval
- isNumberAlreadyDrawn

Isso evita erros lógicos e garante consistência nos resultados.


#### `render.js`

Responsável pela renderização da interface:
- Esconder/exibir seções
- Gerar os cards com números sorteados
- Controlar a animação de exibição
- Atualizar contador de sorteios

A exibição dos números ocorre com delay progressivo, criando um efeito visual de sorteio.


#### `toast.js`

Centraliza a criação de notificações visuais usando a biblioteca:

- Toastify.js

Utilizado para:
- Mensagens de erro
- Confirmação de sorteio

---

## Interface e estilização:
A interface utiliza CSS moderno, com:
- Variáveis CSS
- Gradientes
- Animações

Algumas animações incluídas:
- Animação de borda gradiente
- Rotação do card antes da revelação
- Animação no botão 

---

## Acessibilidade
Algumas práticas de acessibilidade foram aplicadas:
- aria-labelledby
- aria-describedby
- aria-live="polite" para resultados dinâmicos
- elementos semânticos (header, section, article)
- separação de conteúdo e apresentação

---

## Como executar o projeto:
Clone o repositório:

```bash
git clone https://github.com/Francine02/Numbers-Rocketseat.git
cd Numbers-Rocketseat
```

Abra o arquivo `index.html` ou arraste ele para o navegador.

Se preferir, confira aqui o projeto rodando:

```bash
https://francine02.github.io/Numbers-Rocketseat/
```

---

## Contribuição:
Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (git checkout -b feature-nome-da-feature).
3. Faça o commit das suas alterações (git commit -m 'Adiciona nova feature').
4. Envie para o repositório remoto (git push origin feature-nome-da-feature).
5. Crie um novo Pull Request.
