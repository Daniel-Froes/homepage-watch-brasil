# Watch Brasil Festival

Plataforma web moderna para streaming de festivais de música ao vivo, construída com Next.js 16 e arquitetura baseada em Atomic Design. O projeto oferece uma experiência imersiva para usuários acompanharem shows ao vivo, conteúdos exclusivos e informações sobre artistas e festivais.

## Requisitos

- **Node.js**: 20.x ou superior
- **npm**, **yarn**, **pnpm** ou **bun**

## Instalação

```bash
# Clone o repositório
git clone https://github.com/Daniel-Froes/homepage-watch-brasil.git

# Navegue até o diretório do projeto
cd homepage-watch-brasil/w-festival

# Instale as dependências
npm install
```

## Scripts Disponíveis

```bash
# Desenvolvimento - inicia servidor em http://localhost:3000
npm run dev

# Build de produção
npm run build

# Inicia servidor de produção
npm start

# Linting do código
npm run lint
```

## Stack Tecnológico

### Core
- **Next.js 16.1.4** - Framework React com SSR e App Router
- **React 19.2.3** - Biblioteca UI com Server Components
- **TypeScript 5** - Tipagem estática e type-safety

### UI & Styling
- **Tailwind CSS 4** - Sistema de design utility-first customizado
- **Lucide React** - Biblioteca de ícones moderna e consistente

### Funcionalidades Avançadas
- **Embla Carousel** - Sistema de carrosséis performático com autoplay
- **Swiper** - Componentes de slider avançados

## Arquitetura do Projeto

### Atomic Design Pattern

O projeto utiliza metodologia Atomic Design para organização de componentes, garantindo escalabilidade e reutilização:

```
src/components/
├── atoms/          # Componentes fundamentais indivisíveis
│   ├── Button/     # Botões com variantes (primary, secondary, outline)
│   ├── Badge/      # Badges de status e anúncios
│   ├── Avatar/     # Imagens de perfil circulares
│   ├── Icon/       # Wrapper para Lucide icons
│   ├── Image/      # Otimização de imagens via Next.js
│   └── Layout/     # Containers responsivos
│
├── molecules/      # Combinações de atoms com propósito específico
│   ├── AdCard/     # Cards de anúncios integrados
│   ├── ArtistCard/ # Cards de artistas com overlays gradientes
│   ├── FestivalCard/ # Cards de festivais com status
│   ├── NavItem/    # Items de navegação com estados
│   └── Section/    # Sections com sistema de espaçamento
│
└── organisms/      # Componentes complexos e seções completas
    ├── Carousel/   # Sistema de carrossel genérico e configurável
    ├── VideoHero/  # Hero com vídeo do YouTube e overlays
    ├── Header/     # Navegação principal fixa com backdrop blur
    ├── MobileMenu/ # Menu mobile com animações suaves
    └── Footer/     # Rodapé com links e informações legais
```

### Estrutura de Dados

```
src/data/
├── artists.ts          # Dados de artistas e apresentações
├── festivals.ts        # Festivais com paletas de cores e gradientes
├── videos.ts           # Vídeos ao vivo e gravados
├── exclusiveContent.ts # Conteúdo premium e exclusivo
└── ads.ts              # Sistema de anúncios e patrocínios
```

### Páginas e Layouts

```
app/
├── layout.tsx    # Layout raiz com fontes e metadados
├── page.tsx      # Homepage com todas as seções
└── globals.css   # Design tokens e variáveis CSS customizadas
```

## Destaques Arquiteturais

### 1. Sistema de Carrossel Avançado

Implementação de carrossel genérico e reutilizável com Embla Carousel:

- **Configurabilidade**: Suporte a autoplay, loop, drag-free e indicadores customizáveis
- **Especialização**: Variantes específicas para artistas, festivais e anúncios
- **Performance**: Lazy loading e renderização otimizada
- **Responsividade**: Slides adaptativos com diferentes quantidades por viewport

```typescript
// Exemplo de uso do Carousel genérico
<Carousel 
  options={{ loop: true, dragFree: true }}
  autoplay={{ delay: 5000 }}
  showIndicators={true}
/>
```

### 2. Design System Robusto

Sistema de design tokens em CSS customizado com:

- **Paleta de cores**: Primary, secondary, variantes e gradientes
- **Tipografia**: Sistema de pesos (light, regular, medium, bold, black)
- **Espaçamento**: Sistema baseado em múltiplos de 4px
- **Overlays**: Gradientes e estados de opacidade

```css
/* Variáveis CSS em globals.css */
--color-primary: 225 96% 51%;
--color-secondary: 338 100% 64%;
--overlay-gradient-top: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
```

### 3. Sistema de Anúncios Integrado

Anúncios integrados organicamente nos carrosséis:

- Posicionamento estratégico (a cada 5 items)
- Carrosséis separados para mobile e desktop
- Cards de anúncio com design diferenciado
- Tracking de impressões e cliques

### 4. Video Hero Imersivo

Componente de hero com vídeo integrado:

- Integração com YouTube iframe API
- Overlays gradientes personalizados
- Status badges dinâmicos (LIVE, Watch Again)
- Controles de volume e fullscreen
- Responsivo com fallback para mobile

### 5. Navegação Adaptativa

Sistema de navegação completo:

- **Desktop**: Menu horizontal com dropdowns e perfil de usuário
- **Mobile**: Hamburger menu com animações suaves
- **Header fixo**: Com backdrop blur e sombra condicional
- **Acessibilidade**: Suporte a teclado (ESC para fechar) e ARIA labels

## Design Tokens

O projeto utiliza um sistema consistente de tokens definidos em `app/globals.css`:

### Cores

```css
--color-primary: #3B82F6 (blue-500)
--color-secondary: #FC1C72 (pink)
--color-tertiary: #4B5563 (gray-600)
--color-success: #10B981 (green-500)
--color-warning: #F59E0B (amber-500)
```

### Tipografia

```css
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-bold: 700
--font-weight-black: 900
```

## Funcionalidades Principais

### Carrosséis Especializados

1. **ArtistCarousel**: Exibição de artistas com badges e anúncios integrados
2. **FestivalSlider**: Slider inline com navegação por festivais
3. **ExclusiveContentCarousel**: Conteúdo premium com overlays
4. **LiveEventCarousel**: Eventos ao vivo com status em tempo real

### Status Badges

- **Live**: Indica transmissões ao vivo
- **Watch Again**: Conteúdo disponível para replay
- **Announcement**: Novos anúncios e lançamentos

### Otimizações

- **Server-side Rendering**: Renderização inicial no servidor
- **Code Splitting**: Carregamento sob demanda de componentes
- **Image Optimization**: Next.js Image com lazy loading automático
- **CSS-in-JS**: Tailwind com purge automático de classes não utilizadas

## Padrões de Código

### TypeScript Interfaces

Todas as interfaces estão tipadas e documentadas:

```typescript
interface ArtistCardProps {
  artist: Artist;
  showBadge?: boolean;
  className?: string;
}
```

### Props com Defaults

Componentes utilizam valores padrão consistentes:

```typescript
const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  children 
}: ButtonProps) => { ... }
```

### Nomenclatura

- **Componentes**: PascalCase (ArtistCard, VideoHero)
- **Arquivos**: PascalCase matching component name
- **Props**: camelCase com sufixo Props
- **Tipos**: PascalCase

## Performance

- **Lighthouse Score**: 60+ em todas as métricas(o video do youtube pesa bastante sem ele temos 95+)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Otimizado com tree-shaking

## Estrutura de Desenvolvimento

```
w-festival/
├── app/              # Next.js App Router
├── src/
│   ├── components/   # Componentes React organizados por Atomic Design
│   └── data/         # Dados mockados e tipos
├── public/           # Assets estáticos
├── eslint.config.mjs # Configuração ESLint
├── next.config.ts    # Configuração Next.js
├── tsconfig.json     # Configuração TypeScript
└── tailwind.config   # Configuração Tailwind (em globals.css)
```

## Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e proprietário.

## Contato

Daniel Froes - [@Daniel-Froes](https://github.com/Daniel-Froes)

Project Link: [https://github.com/Daniel-Froes/homepage-watch-brasil](https://github.com/Daniel-Froes/homepage-watch-brasil)
