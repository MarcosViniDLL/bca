# Gerador de referências e citações

Crie referências acadêmicas e citações no texto em um só lugar. Preencha os dados manualmente ou tente importá-los por DOI, ISBN ou URL. Sempre confira os dados com a publicação original e com as orientações da sua instituição.

<div class="bca-ref-app">
  <div class="bca-ref-intro">
    <span class="bca-ref-icon">📚</span>
    <div>
      <h2>Assistente de referências acadêmicas</h2>
      <p>Informe os dados da obra, importe metadados quando disponíveis e gere a referência ou a citação.</p>
    </div>
  </div>

  <section class="bca-ref-import" aria-labelledby="bca-import-title">
    <h3 id="bca-import-title">Importar dados automaticamente</h3>
    <label for="bca-import-kind">Identificador</label>
    <select id="bca-import-kind">
      <option value="doi">DOI de artigo ou publicação</option>
      <option value="isbn">ISBN de livro</option>
      <option value="url">URL de uma publicação</option>
    </select>
    <label for="bca-import-value">DOI, ISBN ou endereço eletrônico</label>
    <input id="bca-import-value" type="text" placeholder="Ex.: 10.1000/xyz123 ou 978...">
    <div class="bca-ref-actions">
      <button type="button" id="bca-import-button" class="bca-ref-primary">Buscar dados</button>
    </div>
    <p id="bca-import-message" role="status" aria-live="polite"></p>
    <p class="bca-ref-help">A importação depende da existência de metadados e da disponibilidade da API. Confira e corrija os campos preenchidos automaticamente.</p>
  </section>

  <form id="bca-ref-form">
    <label for="bca-ref-type">Tipo de material</label>
    <select id="bca-ref-type">
      <option value="book">Livro ou e-book</option>
      <option value="article">Artigo científico</option>
      <option value="website">Página da internet</option>
      <option value="chapter">Capítulo de livro</option>
      <option value="tcc">Trabalho de Conclusão de Curso (TCC)</option>
      <option value="dissertation">Dissertação de mestrado</option>
      <option value="thesis">Tese de doutorado</option>
      <option value="proceedings">Trabalho publicado em anais de evento</option>
      <option value="legislation">Legislação</option>
      <option value="report">Relatório ou documento institucional</option>
    </select>

    <div id="bca-ref-fields"></div>

    <div class="bca-ref-actions">
      <button type="submit" class="bca-ref-primary">Gerar referência</button>
      <button type="reset" class="bca-ref-secondary">Limpar campos</button>
    </div>
  </form>

  <section id="bca-ref-result" class="bca-ref-result" hidden aria-live="polite">
    <h2>Referência gerada</h2>
    <p class="bca-ref-hint">Confira os dados e a pontuação antes de utilizar a referência no trabalho.</p>
    <textarea id="bca-ref-output" rows="6" readonly aria-label="Referência gerada"></textarea>
    <div class="bca-ref-actions">
      <button type="button" id="bca-ref-copy" class="bca-ref-primary">Copiar referência</button>
      <button type="button" id="bca-ref-citation" class="bca-ref-secondary">Criar citação no texto</button>
    </div>

    <div id="bca-citation-panel" hidden>
      <h3>Citação no texto</h3>
      <label for="bca-citation-kind">Tipo de citação</label>
      <select id="bca-citation-kind">
        <option value="indirect">Citação indireta (paráfrase)</option>
        <option value="direct-short">Citação direta curta (até 3 linhas)</option>
        <option value="direct-long">Citação direta longa (mais de 3 linhas)</option>
      </select>
      <label for="bca-citation-style">Forma de apresentação</label>
      <select id="bca-citation-style">
        <option value="parenthetical">Entre parênteses</option>
        <option value="narrative">Narrativa, com o autor no texto</option>
      </select>
      <label for="bca-citation-page">Página ou localização (opcional para indireta; recomendada para direta)</label>
      <input id="bca-citation-page" type="text" placeholder="Ex.: 42 ou posição 120">
      <div id="bca-citation-quote-wrap" hidden>
        <label for="bca-citation-quote">Trecho literal (para citação direta)</label>
        <textarea id="bca-citation-quote" rows="4" placeholder="Digite ou cole o trecho exatamente como aparece na obra"></textarea>
      </div>
      <div class="bca-ref-actions">
        <button type="button" id="bca-citation-generate" class="bca-ref-primary">Gerar citação</button>
        <button type="button" id="bca-citation-copy" class="bca-ref-secondary">Copiar citação</button>
      </div>
      <textarea id="bca-citation-output" rows="5" readonly aria-label="Citação gerada"></textarea>
      <p class="bca-ref-help">Para citação direta, confira o trecho, a página e as regras de apresentação exigidas pela instituição. A ferramenta não substitui a conferência da norma vigente.</p>
    </div>
    <p id="bca-ref-message" role="status" aria-live="polite"></p>
  </section>

  <p class="bca-ref-disclaimer"><strong>Importante:</strong> esta ferramenta gera sugestões a partir dos dados informados ou importados. A cobertura de tipos de documento e a formatação automatizada não garantem conformidade integral com todas as situações previstas nas normas ABNT. Revise a publicação original e o manual da sua instituição.</p>
</div>

<style>
.bca-ref-app{border:1px solid var(--md-default-fg-color--lightest);border-radius:16px;padding:24px;margin:24px 0}
.bca-ref-intro{display:flex;gap:16px;align-items:flex-start;margin-bottom:24px}
.bca-ref-icon{font-size:30px;line-height:1.3}
.bca-ref-intro h2,.bca-ref-result h2{margin:0 0 8px}
.bca-ref-intro p,.bca-ref-hint{color:var(--md-default-fg-color--light);margin-top:0}
.bca-ref-app label{display:block;font-weight:600;margin:16px 0 6px}
.bca-ref-app input,.bca-ref-app select,.bca-ref-app textarea{box-sizing:border-box;width:100%;padding:11px 12px;border:1px solid var(--md-default-fg-color--lightest);border-radius:8px;background:var(--md-default-bg-color);color:var(--md-default-fg-color);font:inherit}
.bca-ref-app input:focus,.bca-ref-app select:focus,.bca-ref-app textarea:focus{outline:2px solid var(--md-accent-fg-color);outline-offset:1px}
.bca-ref-help{display:block;font-size:.82rem;color:var(--md-default-fg-color--light);margin-top:5px}
.bca-ref-import{padding:18px;border:1px solid var(--md-default-fg-color--lightest);border-radius:12px;margin:20px 0 28px}
.bca-ref-import h3{margin-top:0}
.bca-ref-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.bca-ref-app button{cursor:pointer;border-radius:8px;padding:10px 15px;font:inherit;font-weight:600}
.bca-ref-app button:disabled{opacity:.6;cursor:wait}
.bca-ref-primary{background:var(--md-primary-fg-color);color:white;border:1px solid var(--md-primary-fg-color)}
.bca-ref-secondary{background:transparent;color:var(--md-default-fg-color);border:1px solid var(--md-default-fg-color--lightest)}
.bca-ref-result{border-top:1px solid var(--md-default-fg-color--lightest);margin-top:28px;padding-top:24px}
.bca-ref-result textarea{line-height:1.7;resize:vertical;margin-top:8px}
#bca-citation-panel{margin-top:24px;padding-top:20px;border-top:1px solid var(--md-default-fg-color--lightest)}
.bca-ref-disclaimer{border-top:1px solid var(--md-default-fg-color--lightest);padding-top:18px;margin-top:28px;font-size:.85rem;color:var(--md-default-fg-color--light)}
#bca-import-message,#bca-ref-message{font-size:.9rem}
@media(max-width:600px){.bca-ref-app{padding:16px}.bca-ref-actions{flex-direction:column}.bca-ref-app button{width:100%}.bca-ref-import{padding:14px}}
</style>

<script>
(function(){
  const root=document.querySelector('.bca-ref-app');
  if(!root||root.dataset.initialized)return;
  root.dataset.initialized='true';
  const $=s=>root.querySelector(s);
  const form=$('#bca-ref-form'),type=$('#bca-ref-type'),fields=$('#bca-ref-fields');
  const result=$('#bca-ref-result'),output=$('#bca-ref-output'),message=$('#bca-ref-message');
  const importKind=$('#bca-import-kind'),importValue=$('#bca-import-value'),importButton=$('#bca-import-button'),importMessage=$('#bca-import-message');
  const citationPanel=$('#bca-citation-panel'),citationKind=$('#bca-citation-kind'),citationStyle=$('#bca-citation-style'),citationPage=$('#bca-citation-page'),citationQuote=$('#bca-citation-quote'),citationQuoteWrap=$('#bca-citation-quote-wrap'),citationOutput=$('#bca-citation-output');

  const commonAuthor=`<label for="bca-authors">Autor(es) ou instituição responsável</label><textarea id="bca-authors" name="authors" rows="3" placeholder="Silva, Maria&#10;Souza, João" required></textarea><span class="bca-ref-help">Um autor por linha. Use Sobrenome, Prenomes; para instituição, informe o nome oficial.</span>`;
  const commonTitle=`<label for="bca-title">Título</label><input id="bca-title" name="title" required placeholder="Título da publicação">`;
  const commonPub=`<label for="bca-city">Local de publicação (se disponível)</label><input id="bca-city" name="city" placeholder="Cidade"><label for="bca-publisher">Editora ou entidade publicadora</label><input id="bca-publisher" name="publisher" placeholder="Editora ou instituição"><label for="bca-year">Ano de publicação</label><input id="bca-year" name="year" inputmode="numeric" required placeholder="Ex.: 2024"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (quando aplicável)</label><input id="bca-access" name="access" type="date">`;
  const templates={
    book:`${commonAuthor}${commonTitle}<label for="bca-edition">Edição (opcional)</label><input id="bca-edition" name="edition" placeholder="Ex.: 2. ed."><label for="bca-format">Formato (opcional)</label><select id="bca-format" name="format"><option value="">Não especificado</option><option>Impresso</option><option>E-book</option></select>${commonPub}`,
    article:`${commonAuthor}${commonTitle}<label for="bca-journal">Título do periódico</label><input id="bca-journal" name="journal" required placeholder="Nome da revista"><label for="bca-city">Local de publicação (se disponível)</label><input id="bca-city" name="city" placeholder="Cidade"><label for="bca-volume">Volume</label><input id="bca-volume" name="volume" placeholder="Ex.: 12"><label for="bca-number">Número/fascículo</label><input id="bca-number" name="number" placeholder="Ex.: 3"><label for="bca-pages">Páginas ou identificador do artigo</label><input id="bca-pages" name="pages" placeholder="Ex.: 25-40 ou e12345"><label for="bca-year">Ano de publicação</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2024"><label for="bca-doi">DOI (opcional)</label><input id="bca-doi" name="doi" placeholder="10.xxxx/xxxxx"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (quando aplicável)</label><input id="bca-access" name="access" type="date">`,
    website:`<label for="bca-authors">Autor ou instituição responsável (se identificado)</label><input id="bca-authors" name="authors" placeholder="Ex.: Brasil. Ministério da Educação"><label for="bca-title">Título da página</label><input id="bca-title" name="title" required placeholder="Título da página"><label for="bca-site">Nome do site ou publicação</label><input id="bca-site" name="site" placeholder="Nome do portal"><label for="bca-year">Data ou ano de publicação</label><input id="bca-year" name="year" placeholder="Ex.: 2024"><label for="bca-url">URL</label><input id="bca-url" name="url" type="url" required placeholder="https://..."><label for="bca-access">Data de acesso</label><input id="bca-access" name="access" type="date" required>`,
    chapter:`${commonAuthor}${commonTitle}<label for="bca-booktitle">Título do livro que contém o capítulo</label><input id="bca-booktitle" name="booktitle" required placeholder="Título do livro"><label for="bca-editors">Organizador(es) (opcional)</label><input id="bca-editors" name="editors" placeholder="Silva, Maria (org.)"><label for="bca-pages">Páginas do capítulo</label><input id="bca-pages" name="pages" placeholder="Ex.: 25-42">${commonPub}`,
    tcc:`${commonAuthor}${commonTitle}<label for="bca-course">Curso</label><input id="bca-course" name="course" required placeholder="Ex.: Letras"><label for="bca-institution">Instituição</label><input id="bca-institution" name="institution" required placeholder="Universidade"><label for="bca-city">Cidade</label><input id="bca-city" name="city" required placeholder="Cidade"><label for="bca-year">Ano de defesa</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2026"><label for="bca-url">URL do trabalho (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (se disponível online)</label><input id="bca-access" name="access" type="date">`,
    dissertation:`${commonAuthor}${commonTitle}<label for="bca-course">Programa ou área do mestrado</label><input id="bca-course" name="course" required placeholder="Ex.: Educação"><label for="bca-institution">Instituição</label><input id="bca-institution" name="institution" required placeholder="Universidade"><label for="bca-city">Cidade</label><input id="bca-city" name="city" required placeholder="Cidade"><label for="bca-year">Ano de defesa</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2026"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (se disponível online)</label><input id="bca-access" name="access" type="date">`,
    thesis:`${commonAuthor}${commonTitle}<label for="bca-course">Programa ou área do doutorado</label><input id="bca-course" name="course" required placeholder="Ex.: Linguística"><label for="bca-institution">Instituição</label><input id="bca-institution" name="institution" required placeholder="Universidade"><label for="bca-city">Cidade</label><input id="bca-city" name="city" required placeholder="Cidade"><label for="bca-year">Ano de defesa</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2026"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (se disponível online)</label><input id="bca-access" name="access" type="date">`,
    proceedings:`${commonAuthor}${commonTitle}<label for="bca-event">Nome do evento</label><input id="bca-event" name="event" required placeholder="Nome do congresso ou evento"><label for="bca-edition">Edição/número do evento (opcional)</label><input id="bca-edition" name="edition" placeholder="Ex.: 10."><label for="bca-booktitle">Título dos anais</label><input id="bca-booktitle" name="booktitle" required placeholder="Anais do evento"><label for="bca-city">Local do evento/publicação</label><input id="bca-city" name="city" placeholder="Cidade"><label for="bca-year">Ano</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2024"><label for="bca-pages">Páginas (opcional)</label><input id="bca-pages" name="pages" placeholder="Ex.: 100-110"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (quando aplicável)</label><input id="bca-access" name="access" type="date">`,
    legislation:`<label for="bca-authors">Jurisdição ou órgão</label><input id="bca-authors" name="authors" required placeholder="Ex.: Brasil"><label for="bca-title">Identificação e ementa/título</label><textarea id="bca-title" name="title" rows="3" required placeholder="Lei nº..., de ...: ementa"></textarea><label for="bca-lawdate">Data do ato (opcional)</label><input id="bca-lawdate" name="lawdate" placeholder="Ex.: 10 de janeiro de 2024"><label for="bca-source">Diário oficial ou fonte (opcional)</label><input id="bca-source" name="source" placeholder="Nome da publicação oficial"><label for="bca-city">Local (opcional)</label><input id="bca-city" name="city" placeholder="Cidade"><label for="bca-year">Ano</label><input id="bca-year" name="year" required inputmode="numeric" placeholder="2024"><label for="bca-url">URL (opcional)</label><input id="bca-url" name="url" type="url" placeholder="https://..."><label for="bca-access">Data de acesso (quando aplicável)</label><input id="bca-access" name="access" type="date">`,
    report:`${commonAuthor}${commonTitle}<label for="bca-number">Número do relatório (opcional)</label><input id="bca-number" name="number" placeholder="Ex.: Relatório técnico 12/2024">${commonPub}`
  };

  function today(){const d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10)}
  function val(name){const el=fields.querySelector('[name="'+name+'"]');return el?el.value.trim():''}
  function renderFields(){fields.innerHTML=templates[type.value];const access=fields.querySelector('[name="access"]');if(access&&!access.value)access.value=today();result.hidden=true;citationPanel.hidden=true;message.textContent='';}
  function parseAuthors(raw){if(!raw)return[];return raw.split('\n').map(s=>s.trim()).filter(Boolean).map(line=>{const p=line.split(',');if(p.length>1){const surname=p.shift().trim().toLocaleUpperCase('pt-BR');return surname+(p.join(',').trim()?', '+p.join(',').trim():'')}return line.trim()})}
  function authorText(list){return list.length?list.join('; ')+'.':''}
  function dateBR(iso){if(!iso)return'';const p=iso.split('-'),m=['jan.','fev.','mar.','abr.','maio','jun.','jul.','ago.','set.','out.','nov.','dez.'];return p.length===3?Number(p[2])+' '+m[Number(p[1])-1]+' '+p[0]:iso}
  function clean(parts){return parts.filter(Boolean).join(' ').replace(/\s+/g,' ').trim()}
  function onlineParts(url,access){return [url?'Disponível em: '+url+'.':'',url&&access?'Acesso em: '+dateBR(access)+'.':'']}
  function buildReference(){
    const a=parseAuthors(val('authors')),title=val('title'),year=val('year'),url=val('url'),access=val('access'),city=val('city'),publisher=val('publisher');let ref='';
    if(type.value==='book')ref=clean([authorText(a),title+'.',val('edition')?val('edition').replace(/\.?$/,'')+'.':'',clean([city?city+':':'',publisher?publisher+',':'',year+'.']),...onlineParts(url,access)]);
    if(type.value==='article')ref=clean([authorText(a),title+'.',clean([val('journal')+(city?', '+city:'' )+',',val('volume')?'v. '+val('volume')+',':'',val('number')?'n. '+val('number')+',':'',val('pages')?'p. '+val('pages')+',':'',year+'.']),val('doi')?'DOI: '+val('doi').replace(/^https?:\/\/(dx\.)?doi\.org\//i,'')+'.':'',...onlineParts(url,access)]);
    if(type.value==='website')ref=clean([a.length?a.join('; ')+'.':'',title+'.',val('site')?val('site')+'.':'',year?year+'.':'',...onlineParts(url,access)]);
    if(type.value==='chapter')ref=clean([authorText(a),title+'.','In: '+(val('editors')?val('editors')+'. ':'')+val('booktitle')+'.',clean([city?city+':':'',publisher?publisher+',':'',year+'.',val('pages')?'p. '+val('pages')+'.':'']),...onlineParts(url,access)]);
    if(['tcc','dissertation','thesis'].includes(type.value)){const kind={tcc:'Trabalho de Conclusão de Curso (Graduação em '+val('course')+')',dissertation:'Dissertação (Mestrado em '+val('course')+')',thesis:'Tese (Doutorado em '+val('course')+')'}[type.value];ref=clean([authorText(a),title+'.',year+'.',kind+' — '+val('institution')+', '+city+', '+year+'.',...onlineParts(url,access)]);}
    if(type.value==='proceedings')ref=clean([authorText(a),title+'.','In: '+val('event')+(val('edition')?', '+val('edition')+' evento':'')+'. '+val('booktitle')+'.',clean([city?city+':':'',year+'.',val('pages')?'p. '+val('pages')+'.':'']),...onlineParts(url,access)]);
    if(type.value==='legislation')ref=clean([a.join('; ')+'.',title+'.',val('lawdate')?val('lawdate')+'.':'',clean([val('source')?val('source')+'.':'',city?city+',':'',year+'.']),...onlineParts(url,access)]);
    if(type.value==='report')ref=clean([authorText(a),title+'.',val('number')?val('number')+'.':'',clean([city?city+':':'',publisher?publisher+',':'',year+'.']),...onlineParts(url,access)]);
    return{reference:ref,authors:a,year,authorRaw:val('authors'),title};
  }
  function titleCaseName(name){return name.split(/\s+/).map(w=>w.charAt(0).toLocaleUpperCase('pt-BR')+w.slice(1).toLocaleLowerCase('pt-BR')).join(' ')}
  function citationAuthor(data){const raw=(data.authorRaw||'').split('\n').map(s=>s.trim()).filter(Boolean);if(raw.length){const names=raw.slice(0,3).map(line=>{const parts=line.split(',');return parts.length>1?titleCaseName(parts.shift().trim()):line.trim()});return raw.length>3?names[0]+' et al.':names.join(' ; ')}return val('site')||data.title||'Autor não identificado'}
  function generateCitation(){const data=buildReference(),author=citationAuthor(data),year=data.year||'s. d.',page=$('#bca-citation-page').value.trim(),kind=citationKind.value,style=citationStyle.value,quote=citationQuote.value.trim();let parenthetical='('+author+', '+year+(page?', p. '+page:'')+')';let narrative=author+' ('+year+(page?', p. '+page:'')+')';let citation='';
    if(kind!=='indirect'&&!quote){citationOutput.value='Para uma citação direta, informe o trecho literal.';return}
    if(kind==='indirect')citation=style==='narrative'?narrative+'.':parenthetical+'.';
    if(kind==='direct-short')citation=style==='narrative'?narrative+', “'+quote+'”.': '“'+quote+'” '+parenthetical+'.';
    if(kind==='direct-long')citation=style==='narrative'?narrative+':\n'+quote+' ('+(page?'p. '+page:'localização não informada')+').':quote+' ('+author+', '+year+(page?', p. '+page:'')+').';
    citationOutput.value=citation;
  }

  async function importMetadata(){const kind=importKind.value,raw=importValue.value.trim();if(!raw){importMessage.textContent='Informe um DOI, ISBN ou URL primeiro.';return}importButton.disabled=true;importMessage.textContent='Buscando metadados…';
    try{let data;
      if(kind==='doi'||kind==='url'){
        let doi=raw.match(/10\.\d{4,9}\/[^\s?#]+/i)?.[0];
        if(!doi&&kind==='url'){
          try{const u=new URL(raw);const metas=await fetch(u.href).then(r=>{if(!r.ok)throw new Error('A página não pôde ser consultada.');return r.text()}).then(html=>{const doc=new DOMParser().parseFromString(html,'text/html');const get=(...names)=>{for(const n of names){const el=doc.querySelector('meta[name="'+n+'"],meta[property="'+n+'"]');if(el?.content)return el.content}return''};return{title:get('citation_title','og:title','twitter:title')||doc.title,author:get('citation_author','author'),year:(get('citation_publication_date','article:published_time').match(/\d{4}/)||[])[0]||'',site:get('og:site_name'),doi:get('citation_doi','dc.identifier')};});
            if(metas.doi)doi=metas.doi.match(/10\.\d{4,9}\/[^\s?#]+/i)?.[0];
            if(!doi){fillFields({title:metas.title,authors:metas.author,year:metas.year,site:metas.site,url:raw},'website');importMessage.textContent='Dados da página importados quando disponíveis. Confira os campos; alguns sites bloqueiam a leitura automática.';return}
          }catch(e){throw new Error('Não foi possível ler os metadados desta URL (o site pode bloquear consultas externas). Selecione “Página da internet” e preencha os campos manualmente.');}
        }
        if(!doi)throw new Error('Não encontrei um DOI válido nesse valor.');
        const response=await fetch('https://api.crossref.org/works/'+encodeURIComponent(doi));if(!response.ok)throw new Error('O DOI não foi encontrado no Crossref. Tente preencher os dados manualmente.');const json=await response.json();const m=json.message;
        data={title:(m.title||[])[0]||'',authors:(m.author||[]).map(x=>[x.family,x.given].filter(Boolean).join(', ')).join('\n'),year:(((m.published||m['published-print']||m['published-online']||{})['date-parts']||[[""]])[0][0])||'',journal:(m['container-title']||[])[0]||'',volume:m.volume||'',number:m.issue||'',pages:m.page||m['article-number']||'',doi:m.DOI||doi,url:m.URL||'https://doi.org/'+doi};
        fillFields(data,'article');importMessage.textContent='Metadados encontrados no Crossref. Revise todos os campos antes de gerar a referência.';
      }else{
        const isbn=raw.replace(/[^0-9Xx]/g,'');if(!/^(97[89])?\d{9}[\dXx]$/.test(isbn))throw new Error('Confira o ISBN informado (10 ou 13 dígitos).');
        const response=await fetch('https://openlibrary.org/isbn/'+encodeURIComponent(isbn)+'.json');if(!response.ok)throw new Error('ISBN não encontrado na Open Library. Tente outra edição ou preencha os dados manualmente.');const m=await response.json();
        let authorNames='';if(Array.isArray(m.authors)&&m.authors.length){const ids=m.authors.map(a=>a.key).filter(Boolean);const names=await Promise.all(ids.map(async id=>{try{const r=await fetch('https://openlibrary.org'+id+'.json');const j=await r.json();return j.name||''}catch(e){return''}}));authorNames=names.filter(Boolean).join('\n')}
        fillFields({title:m.title||'',authors:authorNames,year:(m.publish_date||'').match(/\d{4}/)?.[0]||'',publisher:Array.isArray(m.publishers)?m.publishers.join('; '):'',city:Array.isArray(m.publish_places)?m.publish_places.join('; '):'',url:'https://openlibrary.org/isbn/'+isbn},'book');importMessage.textContent='Dados encontrados na Open Library. Confira especialmente autoria, edição, local e ano.';
      }
    }catch(error){importMessage.textContent=error.message||'Não foi possível importar os dados. Tente novamente ou preencha manualmente.'}
    finally{importButton.disabled=false}
  }
  function fillFields(data,targetType){type.value=targetType;renderFields();for(const [key,value] of Object.entries(data)){const el=fields.querySelector('[name="'+key+'"]');if(el&&value!==undefined&&value!==null)el.value=String(value)}result.hidden=true;}

  type.addEventListener('change',renderFields);
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=buildReference();if(!data.reference)return;output.value=data.reference;result.hidden=false;citationPanel.hidden=true;message.textContent='Referência gerada. Confira os dados e a norma aplicável.';result.scrollIntoView({behavior:'smooth',block:'nearest'})});
  form.addEventListener('reset',()=>setTimeout(()=>{renderFields();result.hidden=true;importMessage.textContent='';citationOutput.value='';},0));
  importButton.addEventListener('click',importMetadata);
  $('#bca-ref-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(output.value);message.textContent='Referência copiada!'}catch(e){output.focus();output.select();message.textContent='Cópia automática indisponível. Selecione o texto e copie manualmente.'}});
  $('#bca-ref-citation').addEventListener('click',()=>{citationPanel.hidden=false;citationOutput.value='';citationQuoteWrap.hidden=citationKind.value==='indirect';citationPanel.scrollIntoView({behavior:'smooth',block:'nearest'})});
  citationKind.addEventListener('change',()=>{citationQuoteWrap.hidden=citationKind.value==='indirect';});
  $('#bca-citation-generate').addEventListener('click',generateCitation);
  $('#bca-citation-copy').addEventListener('click',async()=>{if(!citationOutput.value){message.textContent='Gere a citação antes de copiar.';return}try{await navigator.clipboard.writeText(citationOutput.value);message.textContent='Citação copiada!'}catch(e){citationOutput.focus();citationOutput.select();message.textContent='Cópia automática indisponível. Selecione o texto e copie manualmente.'}});
  renderFields();
})();
</script>
