# Oficina de Escrita Acadêmica

Organize suas ideias, estruture seus trabalhos e transforme suas anotações em roteiros acadêmicos. Escolha uma ferramenta, preencha os campos e gere um rascunho que poderá editar, copiar ou baixar.

!!! info "Antes de começar"
    A oficina ajuda a organizar suas próprias ideias. Ela não substitui a leitura das obras, sua análise crítica nem a conferência das fontes. Revise o resultado antes de entregar qualquer trabalho.

<div class="bca-workshop" id="bca-workshop">
  <div class="bca-workshop__intro">
    <span class="bca-workshop__eyebrow">BCA · FERRAMENTAS DE ESTUDO</span>
    <h2>O que vamos organizar hoje?</h2>
    <p>Escolha uma ferramenta para começar.</p>
  </div>

  <div class="bca-workshop__tools">
    <button type="button" class="bca-tool is-active" data-tool="fichamento" aria-pressed="true">
      <span class="bca-tool__icon">▤</span>
      <span><strong>Fichamento</strong><small>Organize suas leituras</small></span>
    </button>
    <button type="button" class="bca-tool" data-tool="resenha" aria-pressed="false">
      <span class="bca-tool__icon">✎</span>
      <span><strong>Resenha crítica</strong><small>Apresente e analise uma obra</small></span>
    </button>
    <button type="button" class="bca-tool" data-tool="artigo" aria-pressed="false">
      <span class="bca-tool__icon">⌘</span>
      <span><strong>Plano de artigo</strong><small>Estruture sua pesquisa</small></span>
    </button>
    <button type="button" class="bca-tool" data-tool="seminario" aria-pressed="false">
      <span class="bca-tool__icon">▥</span>
      <span><strong>Seminário</strong><small>Prepare sua apresentação</small></span>
    </button>
    <button type="button" class="bca-tool" data-tool="revisao" aria-pressed="false">
      <span class="bca-tool__icon">✓</span>
      <span><strong>Checklist</strong><small>Revise antes de entregar</small></span>
    </button>
  </div>

  <div class="bca-workshop__workspace">
    <section class="bca-workshop__panel">
      <div class="bca-panel-heading">
        <div>
          <span class="bca-workshop__eyebrow">ETAPA 1</span>
          <h2 id="bca-form-title">Fichamento</h2>
        </div>
        <button type="button" class="bca-text-button" id="bca-clear-form">Limpar campos</button>
      </div>
      <p class="bca-muted" id="bca-form-description">Registre os dados da leitura e separe resumo, citações e comentários pessoais.</p>
      <form id="bca-writing-form">
        <div id="bca-fields"></div>
        <div class="bca-form-actions">
          <button class="bca-primary-button" type="submit">Gerar roteiro</button>
          <button class="bca-secondary-button" type="button" id="bca-save-draft">Salvar rascunho</button>
        </div>
        <p class="bca-small-note" id="bca-save-status" aria-live="polite">O salvamento é feito apenas neste navegador.</p>
      </form>
    </section>

    <section class="bca-workshop__panel">
      <div class="bca-panel-heading">
        <div>
          <span class="bca-workshop__eyebrow">ETAPA 2</span>
          <h2>Seu rascunho</h2>
        </div>
        <span class="bca-output-status" id="bca-output-status">Aguardando preenchimento</span>
      </div>
      <p class="bca-muted">Edite o resultado diretamente na caixa de texto. Você não precisa preencher todos os campos de uma vez.</p>
      <label class="bca-sr-only" for="bca-output">Rascunho editável</label>
      <textarea id="bca-output" rows="22" placeholder="Seu roteiro aparecerá aqui depois que você clicar em “Gerar roteiro”."></textarea>
      <div class="bca-form-actions">
        <button type="button" class="bca-primary-button" id="bca-copy-output">Copiar texto</button>
        <button type="button" class="bca-secondary-button" id="bca-download-output">Baixar .txt</button>
      </div>
      <p class="bca-small-note" id="bca-output-message" aria-live="polite"></p>
    </section>
  </div>

  <section class="bca-workshop__guidance">
    <h2>Como aproveitar melhor a oficina</h2>
    <ol>
      <li><strong>Comece pelas suas anotações.</strong> Você pode escrever frases soltas e organizar depois.</li>
      <li><strong>Separe resumo e análise.</strong> O que o autor afirma não é a mesma coisa que você pensa sobre o assunto.</li>
      <li><strong>Não invente informações.</strong> Marque os dados ausentes para conferir posteriormente.</li>
      <li><strong>Confira as fontes.</strong> Verifique nomes, datas, páginas, citações e referências na obra original.</li>
      <li><strong>Revise com sua própria voz.</strong> A ferramenta organiza o texto, mas sua interpretação continua sendo sua.</li>
    </ol>
  </section>
</div>