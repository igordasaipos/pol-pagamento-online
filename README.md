# POL - Pagamento Online

Implementação da interface de configuração de Pagamento Online (POL) baseada no design do Figma para o sistema Saipos.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Bun** - Runtime e gerenciador de pacotes rápido

## 📦 Instalação

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview do build de produção
bun run preview
```

## 🎨 Design

Este projeto foi implementado a partir do design do Figma:
- [Design Original](https://www.figma.com/design/5ZU6rR9LsBdevuRXJPQOHu/POL-iFood-Pago?node-id=1946-756)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx    # Componente do cabeçalho
│   └── POL.tsx       # Componente principal da página POL
├── App.tsx           # Componente raiz
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais com Tailwind
```

## 🎯 Funcionalidades

- Interface de configuração de pagamento online
- Barra de progresso (33% finalizado)
- Integração com iFood Pago
- Design responsivo
- Componentes reutilizáveis

## 📝 Notas

- As imagens estão sendo carregadas diretamente do Figma API e expiram em 7 dias
- Para produção, recomenda-se fazer download das imagens e hospedá-las localmente

## 🔧 Desenvolvimento

O servidor de desenvolvimento roda em `http://localhost:5173` por padrão.
