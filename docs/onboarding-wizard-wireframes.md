# Wireframes low-fi — Wizard de Onboarding POL

Representação textual das 5 etapas do wizard com componentes globais, layout base e variações de estado principais.

## Layout global
```
┌──────────────────────────────────────────────┐
│ Header                                       │
│ ┌─────────────┬────────────────────────────┐ │
│ │ Progresso   │ Título + descrição         │ │
│ └─────────────┴────────────────────────────┘ │
├───────────────┬──────────────────────────────┤
│ Sidebar       │ Conteúdo da etapa            │
│ (estados)     │                              │
├───────────────┴──────────────────────────────┤
│ Footer: [Voltar] [CTA primário]  Ajuda       │
└──────────────────────────────────────────────┘
```
- Sidebar: badges **Concluída (✔)**, **Atual (●)**, **Bloqueada (🔒)**.
- Progresso: barra linear preenchida conforme etapa (20% cada).
- Footer fixa CTA primário contextual + link "Ajuda".

---

## Etapa 1 — Domínio

### Estado: Vazio
```
Sidebar: 1● 2🔒 3🔒 4🔒 5🔒

[Header]
Conecte o domínio da sua loja
Você pode usar um domínio padrão da Saipos ou conectar o seu.

[Card] Domínio padrão
┌───────────────────────────────┐
│ loja123.saipos.app            │
│ [Selecionar domínio padrão]   │
└───────────────────────────────┘

[Input] Domínio próprio ______________________
(dica: ex. meuloja.com) [Verificar disponibilidade]
Tooltip ícone (i): "Configure o DNS apontando para..."

[Banner] "A propagação de DNS pode levar até 48h."
Footer: [Voltar] [Continuar disabled]
```

### Estado: Verificando
```
Input: meuloja.com  [⟳ Verificando...]
Inline loading + disable CTA
Footer: [Voltar] [Continuar disabled]
```

### Estado: Ok
```
Card selecionado ou input válido com ícone ✔ verde
Preview clicável: https://www.meuloja.com
Banner some
Footer: [Voltar] [Continuar]
```

### Estado: Erro
```
Input borda vermelha + mensagem "Domínio indisponível" / "Formato inválido" / "DNS pendente"
Footer: [Voltar] [Continuar disabled]
```

---

## Etapa 2 — Aparência

### Conteúdo base
```
Sidebar: 1✔ 2● 3🔒 4🔒 5🔒

[Header]
Personalize a aparência da sua loja
Escolha um tema e configure cores e logotipo.

[Seção] Tema
┌────────────┬────────────┬────────────┐
│ Tema A     │ Tema B     │ Tema C     │
│ (cards)    │            │            │
└────────────┴────────────┴────────────┘

[Seção] Identidade visual
Logo uploader + preview
Paleta de cores (Primária, Secundária, Destaque)
Tipografia dropdown
```

### Estado: Vazio / padrão
- Nenhum tema selecionado → tooltip "Selecione um tema para continuar".
- Inputs com placeholders.
- Footer: [Voltar] [Continuar disabled]

### Estado: Em edição
- Tema selecionado com borda azul.
- Upload em progresso → barra/loader no componente de logo.
- Footer: [Voltar] [Continuar disabled] enquanto upload.

### Estado: Configurado
- Logo exibido, cores definidas, prévia do tema atualizada.
- Footer: [Voltar] [Continuar]

---

## Etapa 3 — Horários

### Conteúdo base
```
Sidebar: 1✔ 2✔ 3● 4🔒 5🔒

[Header]
Defina os horários de funcionamento
Cadastre horários regulares e exceções.

[Card] Horários semanais
┌───────────────┬───────────────┐
│ Dia           │ Abertura/Fecho│
├───────────────┼───────────────┤
│ Seg a Sex     │ [08:00] [22:00]│
│ Sábado        │ [09:00] [18:00]│
│ Domingo       │ [Fechado   ▼ ] │
└───────────────┴───────────────┘

Botão "+ Adicionar exceção"
Lista de exceções (data, horário, motivo)
```

### Estado: Vazio
- Campos em branco, exceções vazias (placeholder "Nenhuma exceção cadastrada").
- Footer: [Voltar] [Continuar disabled]

### Estado: Preenchendo
- Inputs com erros em vermelho (ex: horário inválido).
- Toast erro quando formato incorreto.
- Footer: [Voltar] [Continuar disabled]

### Estado: Configurado
- Todos os dias preenchidos ou marcados como fechados.
- Exceções listadas.
- Footer: [Voltar] [Continuar]

---

## Etapa 4 — Pagamento Online (POL)

### Conteúdo base
```
Sidebar: 1✔ 2✔ 3✔ 4● 5🔒

[Header]
Ative o pagamento online
Conecte-se ao provedor POL e configure métodos aceitos.

[Card] Status da integração
┌──────────────────────────────┐
│ Conta POL                     │
│ [Conectar conta]              │
└──────────────────────────────┘

[Seção] Métodos aceitos (checkbox)
☐ Cartão crédito  ☐ Pix  ☐ Carteira digital

[Seção] Regras
Campo taxa (%), prazo de repasse (dropdown)
Banner informativo sobre taxas.
```

### Estado: Desconectado
- Botão "Conectar conta" primário.
- Checkbox desabilitados até conexão.
- Footer: [Voltar] [Continuar disabled]

### Estado: Conectando
- Modal/loader indicando OAuth em progresso.
- Footer: [Voltar] [Continuar disabled]

### Estado: Conectado
- Card mostra nome da conta + badge "Ativo".
- Checkbox habilitados e selecionados.
- Toast sucesso após salvar.
- Footer: [Voltar] [Continuar]

### Estado: Erro
- Banner vermelho com mensagem "Falha ao conectar. Tente novamente."
- Botão "Tentar novamente" no card.
- Footer: [Voltar] [Continuar disabled]

---

## Etapa 5 — Pagamento na entrega

### Conteúdo base
```
Sidebar: 1✔ 2✔ 3✔ 4✔ 5●

[Header]
Configure os pagamentos na entrega
Escolha quais métodos aceitar para pedidos offline.

[Seção] Métodos
☐ Dinheiro  ☐ Cartão maquininha  ☐ Pix  ☐ Vale-refeição

[Seção] Instruções para o entregador
Textarea + contador de caracteres

[Seção] Taxas adicionais
Tabela simples: Método | Taxa opcional
```

### Estado: Vazio
- Nenhum método marcado.
- Footer: [Voltar] [Concluir disabled]

### Estado: Selecionado
- Pelo menos um método marcado → CTA "Concluir" habilitado.
- Tooltip explicando taxa opcional.

### Estado: Erro de validação
- Se taxas inválidas (texto em vez de número) → mensagem inline.
- Footer: [Voltar] [Concluir disabled]

---

## Eventos e feedback
- Cada ação (selecionar tema, salvar horário, conectar POL) dispara salvamento automático com toast "Alterações salvas".
- Erros mostram toast vermelho ou inline conforme componente.
- Link de ajuda abre nova aba com documentação relevante em todas as etapas.

