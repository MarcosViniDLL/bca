(() => {
  "use strict";

  const iniciarOficina = () => {
    const root = document.getElementById("bca-workshop");

    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";

    const $ = (selector) => root.querySelector(selector);

    const fieldsContainer = $("#bca-fields");
    const form = $("#bca-writing-form");
    const output = $("#bca-output");
    const formTitle = $("#bca-form-title");
    const formDescription = $("#bca-form-description");
    const outputStatus = $("#bca-output-status");
    const saveStatus = $("#bca-save-status");
    const outputMessage = $("#bca-output-message");

    const definicoes = {
      fichamento: {
        titulo: "Fichamento",
        descricao: "Registre os dados da leitura e separe resumo, citações e comentários pessoais.",
        campos: [
          ["obra", "Título da obra", "text", "Nome do livro, capítulo ou artigo"],
          ["autor", "Autor(es)", "text", "Nome como aparece na obra"],
          ["referencia", "Referência bibliográfica", "textarea", "Preencha os dados que você conhece"],
          ["tema", "Tema ou assunto", "textarea", "Sobre o que trata o texto?"],
          ["resumo", "Resumo das ideias principais", "textarea", "Registre com suas palavras as ideias do autor"],
          ["citacoes", "Citações importantes e páginas", "textarea", "Trechos relevantes com indicação da página"],
          ["comentarios", "Comentários pessoais", "textarea", "Dúvidas, relações, críticas e reflexões"],
          ["palavras", "Palavras-chave e conceitos", "text", "Separe por vírgulas"]
        ],
        gerar: (v) => `FICHAMENTO

1. IDENTIFICAÇÃO DA OBRA
Título: ${valor(v, "obra")}
Autor(es): ${valor(v, "autor")}
Referência bibliográfica: ${valor(v, "referencia")}

2. TEMA
${valor(v, "tema")}

3. RESUMO DAS IDEIAS PRINCIPAIS
${valor(v, "resumo")}

4. CITAÇÕES IMPORTANTES
${valor(v, "citacoes")}

5. COMENTÁRIOS PESSOAIS
${valor(v, "comentarios")}

6. PALAVRAS-CHAVE E CONCEITOS
${valor(v, "palavras")}

PENDÊNCIAS
[Conferir os dados bibliográficos e verificar as páginas das citações na fonte original.]`
      },

      resenha: {
        titulo: "Resenha crítica",
        descricao: "Organize a apresentação da obra, a síntese do conteúdo e sua avaliação crítica.",
        campos: [
          ["obra", "Título da obra", "text", "Título completo"],
          ["autor", "Autor(es)", "text", "Nome como aparece na obra"],
          ["dados", "Dados da edição", "textarea", "Ano, editora, edição e outros dados conhecidos"],
          ["tema", "Tema e ideia central", "textarea", "Qual é o assunto principal da obra?"],
          ["sintese", "Síntese do conteúdo", "textarea", "Quais são as ideias principais?"],
          ["argumentos", "Argumentos ou aspectos destacados", "textarea", "Quais pontos você considera importantes?"],
          ["analise", "Sua análise crítica", "textarea", "O que você avalia, questiona ou considera relevante? Por quê?"],
          ["contribuicao", "Contribuições e limites percebidos", "textarea", "Que contribuição a obra oferece? Você identificou limites?"],
          ["conclusao", "Conclusão", "textarea", "Qual é sua avaliação final da obra?"],
          ["anotacoes", "Anotações originais e dúvidas", "textarea", "Cole suas anotações para preservar suas ideias"]
        ],
        gerar: (v) => `ROTEIRO DE RESENHA CRÍTICA

1. IDENTIFICAÇÃO DA OBRA
Título: ${valor(v, "obra")}
Autor(es): ${valor(v, "autor")}
Dados da edição: ${valor(v, "dados")}
Referência bibliográfica completa: [COMPLETAR E CONFERIR]

2. INTRODUÇÃO E APRESENTAÇÃO
Tema e ideia central:
${valor(v, "tema")}

3. SÍNTESE DO CONTEÚDO
${valor(v, "sintese")}

4. ARGUMENTOS OU ASPECTOS DESTACADOS
${valor(v, "argumentos")}

5. ANÁLISE CRÍTICA
${valor(v, "analise")}

6. CONTRIBUIÇÕES E LIMITES PERCEBIDOS
${valor(v, "contribuicao")}

7. CONCLUSÃO
${valor(v, "conclusao")}

8. ANOTAÇÕES ORIGINAIS E DÚVIDAS
${valor(v, "anotacoes")}

LACUNAS PARA COMPLETAR
[Completar os dados bibliográficos ausentes.]
[Desenvolver os campos que ainda não possuem conteúdo.]
[Conferir se as afirmações correspondem à obra lida.]
[Preservar sua análise pessoal durante a revisão.]`
      },

      artigo: {
        titulo: "Plano de artigo",
        descricao: "Organize a estrutura inicial de uma pesquisa acadêmica.",
        campos: [
          ["titulo", "Título provisório", "text", "Pode ser ajustado depois"],
          ["tema", "Tema", "textarea", "Qual assunto você pretende investigar?"],
          ["problema", "Problema ou pergunta de pesquisa", "textarea", "Qual pergunta seu trabalho pretende responder?"],
          ["hipotese", "Hipótese ou pressuposto (se aplicável)", "textarea", "Preencha somente se for pertinente à pesquisa"],
          ["objetivo", "Objetivo geral", "textarea", "O que pretende investigar, analisar ou compreender?"],
          ["especificos", "Objetivos específicos", "textarea", "Quais etapas ajudam a alcançar o objetivo geral?"],
          ["justificativa", "Justificativa", "textarea", "Por que esse tema merece ser investigado?"],
          ["referencial", "Referencial teórico inicial", "textarea", "Autores e conceitos que você já consultou"],
          ["metodologia", "Metodologia prevista", "textarea", "Como pretende desenvolver a investigação?"],
          ["estrutura", "Estrutura provisória", "textarea", "Quais seções o artigo poderá conter?"],
          ["fontes", "Fontes consultadas", "textarea", "Registre as obras e os dados que precisam ser conferidos"]
        ],
        gerar: (v) => `PLANO INICIAL DE ARTIGO ACADÊMICO

1. TÍTULO PROVISÓRIO
${valor(v, "titulo")}

2. TEMA
${valor(v, "tema")}

3. PROBLEMA DE PESQUISA
${valor(v, "problema")}

4. HIPÓTESE OU PRESSUPOSTO
${valor(v, "hipotese")}

5. OBJETIVO GERAL
${valor(v, "objetivo")}

6. OBJETIVOS ESPECÍFICOS
${valor(v, "especificos")}

7. JUSTIFICATIVA
${valor(v, "justificativa")}

8. REFERENCIAL TEÓRICO INICIAL
${valor(v, "referencial")}

9. METODOLOGIA PREVISTA
${valor(v, "metodologia")}

10. ESTRUTURA PROVISÓRIA
${valor(v, "estrutura")}

11. FONTES CONSULTADAS
${valor(v, "fontes")}

PENDÊNCIAS
[Verificar a viabilidade do problema de pesquisa.]
[Conferir a adequação dos objetivos e da metodologia.]
[Consultar as orientações da disciplina e da instituição.]`
      },

      seminario: {
        titulo: "Roteiro de seminário",
        descricao: "Organize a apresentação em tópicos, sem precisar escrever um texto para decorar.",
        campos: [
          ["tema", "Tema do seminário", "text", "Assunto da apresentação"],
          ["disciplina", "Disciplina ou contexto", "text", "Opcional"],
          ["objetivo", "Objetivo da apresentação", "textarea", "O que o público deve compreender ao final?"],
          ["abertura", "Abertura e contextualização", "textarea", "Como você vai introduzir o assunto?"],
          ["conceitos", "Conceitos e argumentos principais", "textarea", "Organize os tópicos na ordem da apresentação"],
          ["exemplos", "Exemplos e evidências", "textarea", "Exemplos confirmados e relacionados à leitura"],
          ["divisao", "Divisão das partes", "textarea", "Quem apresentará cada parte, se houver grupo?"],
          ["conclusao", "Fechamento", "textarea", "Como você pretende encerrar a apresentação?"],
          ["perguntas", "Perguntas possíveis", "textarea", "Que dúvidas o professor ou a turma podem levantar?"],
          ["fontes", "Fontes utilizadas", "textarea", "Obras, capítulos, páginas e materiais consultados"]
        ],
        gerar: (v) => `ROTEIRO DE SEMINÁRIO

Tema: ${valor(v, "tema")}
Disciplina ou contexto: ${valor(v, "disciplina")}

1. OBJETIVO
${valor(v, "objetivo")}

2. ABERTURA E CONTEXTUALIZAÇÃO
${valor(v, "abertura")}

3. CONCEITOS E ARGUMENTOS PRINCIPAIS
${valor(v, "conceitos")}

4. EXEMPLOS E EVIDÊNCIAS
${valor(v, "exemplos")}

5. DIVISÃO DAS PARTES
${valor(v, "divisao")}

6. FECHAMENTO
${valor(v, "conclusao")}

7. PERGUNTAS POSSÍVEIS
${valor(v, "perguntas")}

8. FONTES UTILIZADAS
${valor(v, "fontes")}

LEMBRETE
[Use o roteiro como apoio. Confira as informações e ensaie a explicação com suas próprias palavras.]`
      },

      revisao: {
        titulo: "Checklist de revisão",
        descricao: "Confira os aspectos essenciais antes de entregar seu trabalho.",
        campos: [
          ["tipo", "Tipo de trabalho", "text", "Ex.: resenha, artigo, relatório"],
          ["titulo", "Título ou tema", "text", "Identificação do trabalho"],
          ["prazo", "Prazo de entrega", "text", "Opcional"],
          ["orientacoes", "Orientações do professor", "textarea", "Registre as exigências específicas"],
          ["pendencias", "Pendências específicas", "textarea", "O que ainda precisa ser corrigido ou confirmado?"]
        ],
        gerar: (v) => `CHECKLIST DE REVISÃO ACADÊMICA

Trabalho: ${valor(v, "tipo")}
Título ou tema: ${valor(v, "titulo")}
Prazo: ${valor(v, "prazo")}

CONTEÚDO E ORGANIZAÇÃO
[ ] O texto atende ao objetivo da atividade.
[ ] A introdução apresenta o tema e o propósito.
[ ] As ideias estão organizadas em sequência lógica.
[ ] Os argumentos estão explicados e fundamentados.
[ ] Diferenciei minhas interpretações das ideias dos autores.
[ ] A conclusão retoma o objetivo do trabalho.

CITAÇÕES E REFERÊNCIAS
[ ] Conferi as citações na fonte original.
[ ] Registrei páginas quando necessário.
[ ] As paráfrases indicam as fontes consultadas.
[ ] Todas as obras citadas aparecem nas referências.
[ ] Conferi nomes, títulos, datas e demais dados bibliográficos.

REVISÃO FINAL
[ ] Revisei ortografia, pontuação e concordância.
[ ] Verifiquei clareza e coesão entre os parágrafos.
[ ] Conferi as normas exigidas pelo professor ou pela instituição.
[ ] Conferi o formato e o nome do arquivo a entregar.

ORIENTAÇÕES DO PROFESSOR
${valor(v, "orientacoes")}

PENDÊNCIAS ESPECÍFICAS
${valor(v, "pendencias")}

Observação: este checklist é geral e não substitui as instruções específicas da atividade.`
      }
    };

    function valor(valores, chave) {
      const texto = (valores[chave] || "").trim();
      return texto || "[PREENCHER / CONFERIR]";
    }

    function ferramentaAtual() {
      return root.querySelector(".bca-tool.is-active")?.dataset.tool || "fichamento";
    }

    function lerCampos() {
      const valores = {};
      fieldsContainer.querySelectorAll("[name]").forEach((campo) => {
        valores[campo.name] = campo.value;
      });
      return valores;
    }

    function montarCampos(chave, valores = {}) {
      const definicao = definicoes[chave];
      fieldsContainer.replaceChildren();

      definicao.campos.forEach(([nome, rotulo, tipo, placeholder]) => {
        const grupo = document.createElement("div");
        grupo.className = "bca-field";

        const label = document.createElement("label");
        label.htmlFor = `bca-${nome}`;
        label.textContent = rotulo;

        const campo = document.createElement(
          tipo === "textarea" ? "textarea" : "input"
        );

        if (tipo !== "textarea") campo.type = tipo;
        if (tipo === "textarea") campo.rows = 3;

        campo.id = `bca-${nome}`;
        campo.name = nome;
        campo.placeholder = placeholder || "";
        campo.value = valores[nome] || "";

        grupo.append(label, campo);
        fieldsContainer.appendChild(grupo);
      });

      formTitle.textContent = definicao.titulo;
      formDescription.textContent = definicao.descricao;
    }

    function selecionarFerramenta(chave) {
      root.querySelectorAll(".bca-tool").forEach((botao) => {
        const ativo = botao.dataset.tool === chave;
        botao.classList.toggle("is-active", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
      });

      montarCampos(chave);
      output.value = "";
      outputStatus.textContent = "Aguardando preenchimento";
      outputMessage.textContent = "";
    }

    root.querySelectorAll(".bca-tool").forEach((botao) => {
      botao.addEventListener("click", () => {
        selecionarFerramenta(botao.dataset.tool);
      });
    });

    form.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const chave = ferramentaAtual();
      output.value = definicoes[chave].gerar(lerCampos());
      outputStatus.textContent = "Rascunho gerado";
      outputMessage.textContent =
        "O texto pode ser editado aqui. Revise os campos marcados para completar.";
    });

    $("#bca-clear-form").addEventListener("click", () => {
      montarCampos(ferramentaAtual());
      saveStatus.textContent =
        "Os campos do formulário foram limpos. O rascunho à direita foi preservado.";
    });

    $("#bca-copy-output").addEventListener("click", async () => {
      if (!output.value.trim()) {
        outputMessage.textContent = "Gere ou escreva um rascunho antes de copiar.";
        return;
      }

      try {
        await navigator.clipboard.writeText(output.value);
        outputMessage.textContent = "Texto copiado para a área de transferência.";
      } catch {
        output.focus();
        output.select();
        const sucesso = document.execCommand("copy");
        outputMessage.textContent = sucesso
          ? "Texto copiado."
          : "Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.";
      }
    });

    $("#bca-download-output").addEventListener("click", () => {
      if (!output.value.trim()) {
        outputMessage.textContent = "Gere ou escreva um rascunho antes de baixar.";
        return;
      }

      const blob = new Blob([output.value], {
        type: "text/plain;charset=utf-8"
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `bca-${ferramentaAtual()}-rascunho.txt`;

      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      outputMessage.textContent = "Download do arquivo iniciado.";
    });

    $("#bca-save-draft").addEventListener("click", () => {
      const dados = {
        ferramenta: ferramentaAtual(),
        campos: lerCampos(),
        rascunho: output.value,
        atualizadoEm: new Date().toISOString()
      };

      try {
        localStorage.setItem("bca-oficina-escrita", JSON.stringify(dados));
        saveStatus.textContent =
          "Rascunho salvo neste navegador. Ele não foi enviado à BCA.";
      } catch {
        saveStatus.textContent =
          "Não foi possível salvar. Copie ou baixe o texto para não perdê-lo.";
      }
    });

    // Recupera o último rascunho salvo neste navegador.
    try {
      const salvo = JSON.parse(
        localStorage.getItem("bca-oficina-escrita") || "null"
      );

      if (salvo && definicoes[salvo.ferramenta]) {
        root.querySelectorAll(".bca-tool").forEach((botao) => {
          const ativo = botao.dataset.tool === salvo.ferramenta;
          botao.classList.toggle("is-active", ativo);
          botao.setAttribute("aria-pressed", String(ativo));
        });

        montarCampos(salvo.ferramenta, salvo.campos || {});
        output.value = salvo.rascunho || "";
        saveStatus.textContent =
          "Encontramos um rascunho salvo neste navegador.";
      } else {
        montarCampos("fichamento");
      }
    } catch {
      montarCampos("fichamento");
    }
  };

  // Compatibilidade com a navegação instantânea do MkDocs Material.
  if (
    typeof document$ !== "undefined" &&
    document$ &&
    typeof document$.subscribe === "function"
  ) {
    document$.subscribe(iniciarOficina);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarOficina);
  } else {
    iniciarOficina();
  }
})();