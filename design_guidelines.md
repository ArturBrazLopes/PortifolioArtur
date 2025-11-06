# Guia de Design - Portfolio Moderno Dark com Acentos Amarelos

## Abordagem de Design

**Referências**: Inspirado em portfolios modernos como Awwwards winners, Behance featured portfolios, e sites de agências criativas (Locomotive, Active Theory), combinando elementos de glassmorphism com tema dark premium.

## Paleta de Cores

### Dark Mode (Principal)
- **Background Primary**: 0 0% 8% (quase preto, #141414)
- **Background Secondary**: 0 0% 12% (cards/seções, #1F1F1F)
- **Background Tertiary**: 0 0% 16% (elementos hover, #292929)
- **Accent Yellow**: 48 100% 50% (amarelo vibrante, #FFD700)
- **Text Primary**: 0 0% 95% (branco quase puro)
- **Text Secondary**: 0 0% 70% (cinza claro para corpo de texto)
- **Border Subtle**: 0 0% 20% (linhas sutis, #333333)

### Glassmorphism Effects
- Background: rgba(255, 255, 255, 0.05)
- Backdrop blur: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.1)

## Tipografia

**Fontes**: 
- Títulos: Inter Bold/Black (900) ou Montserrat Bold
- Corpo: Inter Regular/Medium (400/500)

**Hierarquia**:
- Hero H1: text-6xl md:text-7xl lg:text-8xl, font-black
- Section H2: text-4xl md:text-5xl lg:text-6xl, font-bold
- Card Titles: text-2xl md:text-3xl, font-bold
- Body: text-base md:text-lg, font-normal
- Stats Numbers: text-5xl md:text-6xl lg:text-7xl, font-black

## Sistema de Espaçamento

**Unidades Tailwind**: 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Card padding: p-8 md:p-12
- Gap entre elementos: gap-8 md:gap-12

## Estrutura de Componentes

### 1. Hero Section (100vh)
- Texto impactante centralizado com gradient amarelo em palavra-chave
- CTA primário com fundo amarelo vibrante
- CTA secundário com outline amarelo + backdrop blur
- Partículas ou grid pattern sutil no fundo
- Scroll indicator no bottom

### 2. Grid de Projetos/Serviços (3 colunas desktop, 1 mobile)
- Cards glassmorphism com hover effect
- Ícones personalizados em amarelo (use Heroicons)
- Título bold + descrição secundária
- Hover: borda amarela + lift (translate-y-2)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### 3. Seção de Estatísticas (4 colunas desktop)
- Números grandes em amarelo (ex: "48h", "500+", "100%")
- Labels descritivas abaixo
- Fundo dark com border sutil
- Animação counter-up (opcional)

### 4. Seção Processo/Jornada (4 steps)
- Steps numerados com círculos amarelos
- Linha conectora entre steps
- Descrição detalhada para cada step
- Layout vertical em mobile, horizontal em desktop

### 5. Call-to-Action Section
- Background gradient sutil (dark to darker)
- Heading impactante
- Form de subscrição com input dark + button amarelo
- Trust indicators (ex: "Join 1000+ creators")

### 6. Footer Completo
- Multi-column layout (logo + navegação + social + newsletter)
- Social icons em amarelo no hover
- Copyright e links legais
- Background mais escuro que body

## Imagens

**Hero Section**: Grande imagem de fundo abstrata (geometric patterns, gradients, ou workspace profissional) com overlay dark (opacity 60%) para manter legibilidade do texto.

**Project Cards**: Thumbnails/previews de projetos com aspect ratio 16:9, cada card deve ter uma imagem representativa do projeto.

## Animações (Mínimas)

- Hover cards: transform scale(1.02) + shadow-2xl amarelo
- CTA buttons: pulse sutil no amarelo
- Scroll reveal: fade-in-up para seções (stagger)
- Transições suaves: transition-all duration-300

## Layout Multi-Coluna

- Projects/Services: 3 colunas (lg), 2 colunas (md), 1 coluna (base)
- Stats: 4 colunas (lg), 2 colunas (md), 1 coluna (base)
- Footer: 4 colunas (lg), 2 colunas (md), 1 coluna (base)

## Elementos Decisivos

- Badge "Disponível para projetos" no hero com dot verde pulsante
- Project cards incluem categoria tag em amarelo
- Testimonials com foto circular + rating stars amarelo
- Skills section com progress bars amarelo
- Contact form integrado no footer
- Botões de navegação "Ver Projeto" em cada card