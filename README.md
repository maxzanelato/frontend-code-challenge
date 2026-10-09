# Desafio Técnico Frontend — Sympla

Construa uma página de evento que ajude uma pessoa a escolher ingressos e entender quanto pagará antes de prosseguir. Queremos conhecer seu raciocínio, suas decisões e sua capacidade de escrever frontend funcional e compreensível.

## Como funciona

O processo dura **90 minutos**:

| Etapa                          |  Tempo |
| ------------------------------ | -----: |
| Apresentação e esclarecimentos |  5 min |
| Implementação                  | 50 min |
| Walkthrough da solução         | 10 min |
| Discussão de cenários          | 15 min |
| Reflexão e perguntas           | 10 min |

Você pode fazer perguntas durante todo o exercício. Não esperamos que todas as funcionalidades estejam prontas em 50 minutos: explique o que priorizou, como validou e o que ficou pendente.

## Ambiente e instalação

O starter inclui React, TypeScript, Tailwind CSS, Vite, um header mínimo e uma API local. **Use TypeScript**; a organização dos componentes, o gerenciamento de estado e as bibliotecas adicionais ficam a seu critério. Não há necessidade de adicionar roteamento ou uma arquitetura completa.

Pré-requisitos: **Node.js 24 LTS** (veja [.nvmrc](.nvmrc)) e **pnpm 12.8.1**. Instale essa versão do pnpm se necessário: `npm install --global pnpm@12.8.1`.

```bash
nvm use # se você usa nvm; na primeira vez, execute nvm install
pnpm install --frozen-lockfile
pnpm server
```

Em outro terminal:

```bash
pnpm dev
```

Abra a URL exibida pelo Vite (normalmente `http://localhost:5173`). A API roda em `http://localhost:3001`. Os dados e a imagem do evento são locais; depois de instalar as dependências, o exercício não depende de serviços externos.

## O problema

Uma pessoa está interessada em um evento e precisa decidir quais ingressos escolher, entender quanto pagará e ter confiança para continuar.

Construa essa experiência a partir dos dados da API e da referência visual. A página deve apresentar o evento e permitir a seleção de ingressos com uma visão clara do total. Pense em uma experiência utilizável e acessível.

Você decide como organizar a interface e o código. Faça perguntas quando precisar esclarecer regras de negócio, identifique situações que merecem atenção e priorize o que considerar mais importante no tempo disponível. Explique as suposições que fizer.

O exercício termina antes do checkout, então não será necessário implementar pagamento.

## API

`pnpm server` inicia a API local usando [db.json](db.json):

- `GET http://localhost:3001/events` lista os eventos.
- `GET http://localhost:3001/events/1` retorna o evento inicial do exercício.

Explore os dados disponíveis. `price` representa centavos de real (`4990` corresponde a R$ 49,90), e os IDs dos eventos são retornados como strings. As imagens com caminho relativo são servidas pelo Vite, na mesma origem da página.

## Testes e verificação

```bash
pnpm test
pnpm lint
pnpm format:check
pnpm build
```

`pnpm format` aplica o padrão de formatação da empresa, incluindo a ordenação de classes Tailwind. `pnpm format:check` verifica esse padrão sem alterar os arquivos. A configuração está em [.prettierrc.json](.prettierrc.json).

`pnpm test` usa o runner nativo do Node e inclui verificações dos fixtures e do servidor de falha. Esses testes validam o starter e **não substituem um teste da sua solução**. Você pode adicionar arquivos `tests/*.test.ts` usando `node:test` e `node:assert/strict` para lógica pura em TypeScript, ou instalar uma ferramenta de testes de componentes de sua preferência. O Node executa TypeScript sem JSX; testes de interface precisam de tooling adicional.

## Ferramentas de apoio e IA

Você pode usar documentação, buscadores, bibliotecas e assistentes de IA, como ChatGPT, Claude ou Copilot. O uso de IA **não reduz sua avaliação** e não é obrigatório. Você deve compreender, revisar e validar o código que entrega e conseguir explicar suas decisões e trade-offs na conversa técnica. Não avaliamos a compra de ferramentas nem o uso de um assistente específico.

Se usar IA, explique sua linha de raciocínio: como abordou o problema, por que aceitou, adaptou ou descartou as sugestões e como validou a solução resultante.

## Referência visual

O [layout no Figma](https://www.figma.com/design/JrBwCLd5OS32kiTyIrr31t/-N%C3%A3o-deletar--Frontend-Test?node-id=0-1&p=f&t=tsZnpGuwyzOL1LiV-0) é uma referência. **Priorize funcionamento, usabilidade, acessibilidade e qualidade do código sobre fidelidade pixel a pixel.** Se não tiver acesso, siga os requisitos acima. A marca pode ser representada por texto; não há obrigação de baixar um logo.

| Cor sugerida | HEX       |
| ------------ | --------- |
| Azul Sympla  | `#00A1FC` |
| Texto escuro | `#0F172A` |
| Fundo claro  | `#F1F5F9` |

## Se algo não funcionar

- Confira `node --version` e `pnpm --version`; use as versões indicadas acima.
- Se a porta 3001 estiver ocupada, pare o outro servidor, inclusive `server:error`, antes de iniciar a API normal.
- Confira `http://localhost:3001/events/1` no navegador. A página e a API precisam de terminais separados.
- Use a URL mostrada pelo Vite: ele pode escolher outra porta quando 5173 estiver ocupada.
- Se a instalação congelada falhar, confirme a versão do pnpm e avise a pessoa entrevistadora antes de alterar o lockfile.
- Problemas de ambiente devem ser resolvidos antes de iniciar o tempo de implementação.

## Conversa técnica

Você apresentará a solução, explicará as decisões e discutirá cenários adequados ao nível da vaga. Vamos explorar suas decisões e possíveis mudanças de contexto ou requisitos. Ao final, conversaremos sobre o que você faria com mais duas horas e quais trade-offs fez.
