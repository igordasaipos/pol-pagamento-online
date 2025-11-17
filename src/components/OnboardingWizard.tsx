import { useMemo, useState } from 'react'
import '../App.css'

type StepStatus = 'complete' | 'current' | 'locked'

type Toast = {
  id: number
  type: 'success' | 'error'
  message: string
}

const stepList = [
  {
    id: 'domain',
    label: 'Domínio',
    description: 'Cadastro e ativação do domínio'
  },
  {
    id: 'appearance',
    label: 'Aparência',
    description: 'Tema, cores e identidade visual'
  },
  {
    id: 'hours',
    label: 'Horários',
    description: 'Horários de atendimento e exceções'
  },
  {
    id: 'online-payment',
    label: 'Pagamento online',
    description: 'Conexão com POL'
  },
  {
    id: 'delivery-payment',
    label: 'Pagamento na entrega',
    description: 'Definição de métodos offline'
  }
] as const

type ScheduleDay = {
  id: string
  label: string
  open: string
  close: string
  closed: boolean
}

type Exception = {
  id: number
  date: string
  start: string
  end: string
  reason: string
}

const defaultSchedule: ScheduleDay[] = [
  { id: 'segsex', label: 'Segunda a Sexta', open: '08:00', close: '22:00', closed: false },
  { id: 'sab', label: 'Sábado', open: '09:00', close: '18:00', closed: false },
  { id: 'dom', label: 'Domingo', open: '', close: '', closed: true }
]

const typographyOptions = ['Inter', 'Roboto', 'Open Sans']
const settlementOptions = ['D+1', 'D+2', 'Semanal']

const deliveryMethodList = [
  { id: 'cash', label: 'Dinheiro' },
  { id: 'pos', label: 'Cartão maquininha' },
  { id: 'pix', label: 'Pix' },
  { id: 'voucher', label: 'Vale-refeição' }
]

const onlineMethods = [
  { id: 'credit', label: 'Cartão de crédito' },
  { id: 'pix', label: 'Pix' },
  { id: 'wallet', label: 'Carteira digital' }
]

function useToastQueue() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismiss = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const push = (toast: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { ...toast, id }])
    setTimeout(() => dismiss(id), 3000)
  }

  return { toasts, push, dismiss }
}

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const { toasts, push } = useToastQueue()

  const [domainState, setDomainState] = useState({
    selection: '',
    customDomain: '',
    status: 'idle' as 'idle' | 'verifying' | 'ok' | 'error',
    message: ''
  })

  const [appearanceState, setAppearanceState] = useState({
    theme: '',
    primary: '#4770ae',
    secondary: '#ffa800',
    accent: '#58a974',
    typography: typographyOptions[0],
    logoStatus: 'idle' as 'idle' | 'uploading' | 'done',
    logoName: ''
  })

  const [schedule, setSchedule] = useState<ScheduleDay[]>(defaultSchedule)
  const [exceptions, setExceptions] = useState<Exception[]>([])

  const [onlinePayment, setOnlinePayment] = useState({
    status: 'disconnected' as 'disconnected' | 'connecting' | 'connected' | 'error',
    methods: ['credit'] as string[],
    fee: '2.5',
    settlement: settlementOptions[0]
  })

  const [deliveryPayments, setDeliveryPayments] = useState({
    methods: ['cash'] as string[],
    instructions: '',
    taxes: {
      cash: '',
      pos: '',
      pix: '',
      voucher: ''
    }
  })

  const scheduleHasErrors = schedule.some((day) => {
    if (day.closed) return false
    if (!day.open || !day.close) return true
    return day.open >= day.close
  })

  const exceptionHasErrors = exceptions.some((item) => {
    if (!item.date) return true
    if (!item.start || !item.end) return true
    return item.start >= item.end
  })

  const isDomainValid = domainState.status === 'ok'
  const isAppearanceValid = Boolean(appearanceState.theme) && appearanceState.logoStatus !== 'uploading'
  const isHoursValid = !scheduleHasErrors && !exceptionHasErrors
  const isOnlinePaymentValid = onlinePayment.status === 'connected' && onlinePayment.methods.length > 0
  const offlineTaxesValid = Object.values(deliveryPayments.taxes).every((value) => value === '' || /^\d+(\.\d{1,2})?$/.test(value))
  const isDeliveryValid = deliveryPayments.methods.length > 0 && offlineTaxesValid

  const stepCompletion = [isDomainValid, isAppearanceValid, isHoursValid, isOnlinePaymentValid, isDeliveryValid]
  const completedCount = stepCompletion.filter(Boolean).length
  const progress = Math.round((completedCount / stepList.length) * 100)

  const primaryCtaLabel = currentStep === stepList.length - 1 ? 'Concluir' : 'Continuar'
  const isCurrentStepValid = stepCompletion[currentStep]

  const handleNext = () => {
    if (!isCurrentStepValid) return
    if (currentStep < stepList.length - 1) {
      setCurrentStep((prev) => prev + 1)
      return
    }
    push({ type: 'success', message: 'Wizard concluído! Pagamentos ativados.' })
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }

  const queueAutosave = (message = 'Alterações salvas automaticamente.') => {
    push({ type: 'success', message })
  }

  const verifyCustomDomain = () => {
    if (!domainState.customDomain) {
      setDomainState((prev) => ({ ...prev, status: 'error', message: 'Digite um domínio para verificar.' }))
      return
    }
    const isValidFormat = /^(?!-)[A-Za-z0-9-]{3,63}\.[A-Za-z]{2,}$/.test(domainState.customDomain)
    if (!isValidFormat) {
      setDomainState((prev) => ({ ...prev, status: 'error', message: 'Formato inválido. Use algo como meuloja.com.' }))
      return
    }
    setDomainState((prev) => ({ ...prev, status: 'verifying', message: '' }))
    setTimeout(() => {
      if (domainState.customDomain.toLowerCase().includes('indisponivel')) {
        setDomainState((prev) => ({ ...prev, status: 'error', message: 'Domínio indisponível.' }))
        return
      }
      setDomainState((prev) => ({ ...prev, status: 'ok', message: '' }))
      queueAutosave('Domínio verificado e salvo.')
    }, 800)
  }

  const startLogoUpload = (fileName: string) => {
    setAppearanceState((prev) => ({ ...prev, logoStatus: 'uploading', logoName: fileName }))
    setTimeout(() => {
      setAppearanceState((prev) => ({ ...prev, logoStatus: 'done' }))
      queueAutosave('Logo atualizado.')
    }, 1000)
  }

  const handleScheduleChange = (dayId: string, field: 'open' | 'close' | 'closed', value: string | boolean) => {
    setSchedule((prev) =>
      prev.map((day) => {
        if (day.id !== dayId) return day
        if (field === 'closed' && typeof value === 'boolean') {
          return { ...day, closed: value, open: value ? '' : day.open || '08:00', close: value ? '' : day.close || '18:00' }
        }
        if (field === 'open' || field === 'close') {
          return { ...day, [field]: value as string }
        }
        return day
      })
    )
    queueAutosave()
  }

  const addException = () => {
    setExceptions((prev) => [...prev, { id: Date.now(), date: '', start: '', end: '', reason: '' }])
  }

  const handleExceptionChange = (id: number, field: keyof Exception, value: string) => {
    setExceptions((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
    queueAutosave()
  }

  const removeException = (id: number) => {
    setExceptions((prev) => prev.filter((item) => item.id !== id))
    queueAutosave('Exceção removida.')
  }

  const connectOnlinePayments = () => {
    setOnlinePayment((prev) => ({ ...prev, status: 'connecting' }))
    setTimeout(() => {
      setOnlinePayment((prev) => ({ ...prev, status: 'connected' }))
      queueAutosave('Pagamento online ativado.')
    }, 1200)
  }

  const simulateError = () => {
    setOnlinePayment((prev) => ({ ...prev, status: 'error' }))
    push({ type: 'error', message: 'Falha ao conectar. Tente novamente.' })
  }

  const toggleOnlineMethod = (methodId: string) => {
    setOnlinePayment((prev) => {
      const exists = prev.methods.includes(methodId)
      const methods = exists ? prev.methods.filter((item) => item !== methodId) : [...prev.methods, methodId]
      queueAutosave()
      return { ...prev, methods }
    })
  }

  const toggleDeliveryMethod = (methodId: string) => {
    setDeliveryPayments((prev) => {
      const exists = prev.methods.includes(methodId)
      const methods = exists ? prev.methods.filter((item) => item !== methodId) : [...prev.methods, methodId]
      queueAutosave()
      return { ...prev, methods }
    })
  }

  const updateDeliveryTax = (methodId: string, value: string) => {
    setDeliveryPayments((prev) => ({ ...prev, taxes: { ...prev.taxes, [methodId]: value } }))
    queueAutosave()
  }

  const renderDomainStep = () => (
    <div className="card step-card">
      <header className="step-header">
        <h2>Conecte o domínio da sua loja</h2>
        <p>Você pode usar um domínio padrão da Saipos ou conectar o seu.</p>
      </header>
      <div className="domain-options">
        <div className={`domain-card ${domainState.selection === 'default' ? 'selected' : ''}`}>
          <div>
            <span className="domain-label">Domínio padrão</span>
            <strong>minhaloja.saipos.app</strong>
          </div>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setDomainState({ selection: 'default', customDomain: '', status: 'ok', message: '' })
              queueAutosave('Domínio padrão selecionado.')
            }}
          >
            Selecionar domínio padrão
          </button>
        </div>
        <div className="domain-card custom">
          <label htmlFor="custom-domain">Domínio próprio</label>
          <div className="custom-domain-input">
            <input
              id="custom-domain"
              value={domainState.customDomain}
              placeholder="ex: meuloja.com"
              onChange={(event) =>
                setDomainState((prev) => ({ ...prev, selection: 'custom', customDomain: event.target.value, status: 'idle', message: '' }))
              }
            />
            <button type="button" className="secondary" onClick={verifyCustomDomain} disabled={domainState.status === 'verifying'}>
              {domainState.status === 'verifying' ? 'Verificando...' : 'Verificar disponibilidade'}
            </button>
          </div>
          <small className="helper-text">Configure o DNS apontando para os IPs da Saipos.</small>
          {domainState.status === 'error' && <p className="field-error">{domainState.message}</p>}
          {domainState.status === 'ok' && <p className="success-text">✔ Domínio disponível e pronto para uso.</p>}
        </div>
      </div>
      <div className="info-banner">
        A propagação de DNS pode levar até 48h.
      </div>
    </div>
  )

  const renderAppearanceStep = () => (
    <div className="card step-card">
      <header className="step-header">
        <h2>Personalize a aparência da sua loja</h2>
        <p>Escolha um tema e configure cores e logotipo.</p>
      </header>
      <section>
        <h3>Tema</h3>
        <div className="theme-grid">
          {['Tema A', 'Tema B', 'Tema C'].map((theme) => (
            <button
              key={theme}
              type="button"
              className={`theme-card ${appearanceState.theme === theme ? 'selected' : ''}`}
              onClick={() => {
                setAppearanceState((prev) => ({ ...prev, theme }))
                queueAutosave(`Tema ${theme} selecionado.`)
              }}
            >
              <span>{theme}</span>
            </button>
          ))}
        </div>
      </section>
      <section>
        <h3>Identidade visual</h3>
        <div className="identity-grid">
          <div className="logo-uploader">
            <label className="uploader-label">Logotipo</label>
            <label className={`uploader ${appearanceState.logoStatus}`}>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (file) {
                    startLogoUpload(file.name)
                  }
                }}
              />
              {appearanceState.logoStatus === 'uploading' && <span>Enviando...</span>}
              {appearanceState.logoStatus === 'done' && <span>{appearanceState.logoName || 'Logo atualizado'}</span>}
              {appearanceState.logoStatus === 'idle' && <span>Enviar logo</span>}
            </label>
          </div>
          <div className="color-fields">
            <label>
              Cor primária
              <input type="color" value={appearanceState.primary} onChange={(event) => setAppearanceState((prev) => ({ ...prev, primary: event.target.value }))} />
            </label>
            <label>
              Cor secundária
              <input type="color" value={appearanceState.secondary} onChange={(event) => setAppearanceState((prev) => ({ ...prev, secondary: event.target.value }))} />
            </label>
            <label>
              Destaque
              <input type="color" value={appearanceState.accent} onChange={(event) => setAppearanceState((prev) => ({ ...prev, accent: event.target.value }))} />
            </label>
          </div>
          <label className="typography-field">
            Tipografia
            <select value={appearanceState.typography} onChange={(event) => setAppearanceState((prev) => ({ ...prev, typography: event.target.value }))}>
              {typographyOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      </section>
    </div>
  )

  const renderHoursStep = () => (
    <div className="card step-card">
      <header className="step-header">
        <h2>Defina os horários de funcionamento</h2>
        <p>Cadastre horários regulares e exceções.</p>
      </header>
      <div className="schedule-table">
        <div className="schedule-row header">
          <span>Dia</span>
          <span>Abertura</span>
          <span>Fechamento</span>
          <span>Fechado?</span>
        </div>
        {schedule.map((day) => (
          <div key={day.id} className={`schedule-row ${!day.closed && day.open && day.close && day.open < day.close ? '' : 'has-error'}`}>
            <span>{day.label}</span>
            <input type="time" value={day.open} disabled={day.closed} onChange={(event) => handleScheduleChange(day.id, 'open', event.target.value)} />
            <input type="time" value={day.close} disabled={day.closed} onChange={(event) => handleScheduleChange(day.id, 'close', event.target.value)} />
            <label className="checkbox">
              <input type="checkbox" checked={day.closed} onChange={(event) => handleScheduleChange(day.id, 'closed', event.target.checked)} />
              <span>{day.closed ? 'Fechado' : 'Aberto'}</span>
            </label>
          </div>
        ))}
      </div>
      <section className="exceptions">
        <div className="exceptions-header">
          <div>
            <h3>Exceções</h3>
            <p>Cadastre horários especiais, feriados ou eventos.</p>
          </div>
          <button type="button" className="secondary" onClick={addException}>
            + Adicionar exceção
          </button>
        </div>
        {exceptions.length === 0 && <p className="muted">Nenhuma exceção cadastrada.</p>}
        {exceptions.map((item) => (
          <div key={item.id} className={`exception-row ${item.date && item.start && item.end && item.start < item.end ? '' : 'has-error'}`}>
            <input type="date" value={item.date} onChange={(event) => handleExceptionChange(item.id, 'date', event.target.value)} />
            <input type="time" value={item.start} onChange={(event) => handleExceptionChange(item.id, 'start', event.target.value)} />
            <input type="time" value={item.end} onChange={(event) => handleExceptionChange(item.id, 'end', event.target.value)} />
            <input type="text" placeholder="Motivo" value={item.reason} onChange={(event) => handleExceptionChange(item.id, 'reason', event.target.value)} />
            <button type="button" onClick={() => removeException(item.id)}>
              Remover
            </button>
          </div>
        ))}
      </section>
      {(scheduleHasErrors || exceptionHasErrors) && <p className="field-error">Revise horários e exceções antes de continuar.</p>}
    </div>
  )

  const renderOnlinePaymentStep = () => (
    <div className="card step-card">
      <header className="step-header">
        <h2>Ative o pagamento online</h2>
        <p>Conecte-se ao provedor POL e configure métodos aceitos.</p>
      </header>
      <div className="integration-card">
        <div>
          <h3>Status da integração</h3>
          <p>{onlinePayment.status === 'connected' ? 'Conta conectada e ativa.' : 'Conecte sua conta POL para liberar o recebimento.'}</p>
        </div>
        <div className="integration-actions">
          {onlinePayment.status === 'disconnected' && (
            <button type="button" onClick={connectOnlinePayments} className="primary">
              Conectar conta
            </button>
          )}
          {onlinePayment.status === 'connecting' && <span className="muted">Conectando...</span>}
          {onlinePayment.status === 'connected' && <span className="success-text">✔ Conta conectada</span>}
          {onlinePayment.status === 'error' && (
            <button type="button" onClick={connectOnlinePayments} className="primary">
              Tentar novamente
            </button>
          )}
          <button type="button" className="secondary" onClick={simulateError}>
            Simular erro
          </button>
        </div>
      </div>
      {onlinePayment.status === 'error' && <div className="error-banner">Falha ao conectar. Tente novamente.</div>}
      <section>
        <h3>Métodos aceitos</h3>
        <div className="checkbox-list">
          {onlineMethods.map((method) => (
            <label key={method.id} className="checkbox">
              <input type="checkbox" checked={onlinePayment.methods.includes(method.id)} disabled={onlinePayment.status !== 'connected'} onChange={() => toggleOnlineMethod(method.id)} />
              {method.label}
            </label>
          ))}
        </div>
      </section>
      <section className="rules-section">
        <div>
          <label>
            Taxa (%)
            <input type="number" min="0" step="0.1" value={onlinePayment.fee} onChange={(event) => setOnlinePayment((prev) => ({ ...prev, fee: event.target.value }))} />
          </label>
          <label>
            Prazo de repasse
            <select value={onlinePayment.settlement} onChange={(event) => setOnlinePayment((prev) => ({ ...prev, settlement: event.target.value }))}>
              {settlementOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="info-banner">
          As taxas podem variar de acordo com o volume processado e são salvas automaticamente.
        </div>
      </section>
    </div>
  )

  const renderDeliveryPaymentStep = () => (
    <div className="card step-card">
      <header className="step-header">
        <h2>Configure os pagamentos na entrega</h2>
        <p>Escolha quais métodos aceitar para pedidos offline.</p>
      </header>
      <section>
        <h3>Métodos disponíveis</h3>
        <div className="checkbox-list">
          {deliveryMethodList.map((method) => (
            <label key={method.id} className="checkbox">
              <input type="checkbox" checked={deliveryPayments.methods.includes(method.id)} onChange={() => toggleDeliveryMethod(method.id)} />
              {method.label}
            </label>
          ))}
        </div>
        {deliveryPayments.methods.length === 0 && <p className="field-error">Selecione pelo menos um método para concluir.</p>}
      </section>
      <section>
        <h3>Instruções para o entregador</h3>
        <textarea
          maxLength={250}
          rows={4}
          value={deliveryPayments.instructions}
          onChange={(event) => setDeliveryPayments((prev) => ({ ...prev, instructions: event.target.value }))}
          placeholder="Ex.: conferir troco antes de sair para a entrega"
        />
        <div className="muted">{deliveryPayments.instructions.length}/250</div>
      </section>
      <section>
        <h3>Taxas adicionais</h3>
        <div className="tax-table">
          <div className="tax-row header">
            <span>Método</span>
            <span>Taxa (%)</span>
          </div>
          {deliveryMethodList.map((method) => (
            <div key={method.id} className="tax-row">
              <span>{method.label}</span>
              <input type="text" value={deliveryPayments.taxes[method.id as keyof typeof deliveryPayments.taxes]} onChange={(event) => updateDeliveryTax(method.id, event.target.value)} placeholder="Opcional" />
            </div>
          ))}
        </div>
        {!offlineTaxesValid && <p className="field-error">Use apenas números (ex.: 2 ou 2.5).</p>}
      </section>
    </div>
  )

  const contentByStep = useMemo(
    () => [renderDomainStep(), renderAppearanceStep(), renderHoursStep(), renderOnlinePaymentStep(), renderDeliveryPaymentStep()],
    [
      domainState,
      appearanceState,
      schedule,
      exceptions,
      scheduleHasErrors,
      exceptionHasErrors,
      onlinePayment,
      deliveryPayments,
      offlineTaxesValid
    ]
  )

  const maxAvailableIndex = stepCompletion.findIndex((complete) => !complete)
  const unlockedUntil = maxAvailableIndex === -1 ? stepList.length - 1 : maxAvailableIndex

  return (
    <div className="wizard-wrapper">
      <aside className="sidebar">
        <div className="progress">
          <div className="progress-meta">
            <span>{progress}% finalizado</span>
          </div>
          <div className="progress-bar">
            <div className="progress-value" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <nav>
          {stepList.map((step, index) => {
            const status: StepStatus = index === currentStep ? 'current' : stepCompletion[index] ? 'complete' : index <= unlockedUntil ? 'current' : 'locked'
            return (
              <button
                key={step.id}
                className={`step-link ${status}`}
                type="button"
                onClick={() => {
                  if (index === currentStep) return
                  if (index > unlockedUntil) return
                  setCurrentStep(index)
                }}
              >
                <span className="badge">{status === 'complete' ? '✔' : status === 'locked' ? '🔒' : '●'}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.description}</p>
                </div>
              </button>
            )
          })}
        </nav>
      </aside>
      <main>
        {contentByStep[currentStep]}
        <footer className="wizard-footer">
          <div className="footer-actions">
            <button type="button" onClick={handleBack} disabled={currentStep === 0}>
              Voltar
            </button>
            <button type="button" className="primary" onClick={handleNext} disabled={!isCurrentStepValid}>
              {primaryCtaLabel}
            </button>
          </div>
          <a href="https://ajuda.saipos.com/how-to" target="_blank" rel="noreferrer">
            Como configurar DNS?
          </a>
        </footer>
      </main>
      <div className="toast-stack" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  )
}
