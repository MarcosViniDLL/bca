from pathlib import Path
from html import escape
from urllib.parse import quote
import re

RAIZ = Path(__file__).resolve().parent.parent
DISCIPLINAS = RAIZ / "docs" / "disciplinas"
PDFS = RAIZ / "docs" / "pdfs"

INICIO = "<!-- BCA_MATERIAIS_INICIO -->"
FIM = "<!-- BCA_MATERIAIS_FIM -->"


def nome_legivel(nome):
    return re.sub(r"[_-]+", " ", Path(nome).stem).strip()


def gerar_materiais(slug):
    pasta = PDFS / slug
    pasta.mkdir(parents=True, exist_ok=True)

    arquivos = sorted(
        [
            a for a in pasta.iterdir()
            if a.is_file() and a.suffix.lower() == ".pdf"
        ],
        key=lambda a: a.name.lower(),
    )

    html = [
        '<div class="bca-materials">',
    ]

    if not arquivos:
        html.extend([
            '<div class="bca-material-empty">',
            '<span class="bca-material-empty-icon">PDF</span>',
            '<div><strong>Nenhum material disponível ainda</strong>',
            '<p>Assim que novos arquivos forem adicionados, '
            'eles aparecerão aqui.</p></div>',
            '</div>',
        ])
    else:
        for arquivo in arquivos:
            titulo = escape(nome_legivel(arquivo.name))
            caminho = (
                "../../pdfs/"
                + quote(slug, safe="")
                + "/"
                + quote(arquivo.name, safe="")
            )
            url = escape(caminho, quote=True)

            html.extend([
                '<article class="bca-material-card">',
                '<div class="bca-material-icon" aria-hidden="true">',
                '<span>PDF</span>',
                '</div>',
                '<div class="bca-material-info">',
                f'<h3>{titulo}</h3>',
                '<div class="bca-material-meta">',
                '<span class="bca-material-badge">Documento PDF</span>',
                '</div>',
                '</div>',
                '<div class="bca-material-actions">',
                f'<a class="bca-material-button bca-button-view" '
                f'href="{url}" target="_blank" rel="noopener">',
                'Visualizar PDF</a>',
                f'<a class="bca-material-button bca-button-download" '
                f'href="{url}" download>',
                'Baixar PDF</a>',
                '</div>',
                '</article>',
            ])

    html.append('</div>')

    return "\n".join([
        INICIO,
        "",
        *html,
        "",
        FIM,
    ])


def atualizar(pagina):
    conteudo = pagina.read_text(encoding="utf-8")
    nova_secao = gerar_materiais(pagina.stem)

    padrao_marcado = (
        re.escape(INICIO) + r".*?" + re.escape(FIM)
    )

    if re.search(padrao_marcado, conteudo, flags=re.S):
        conteudo = re.sub(
            padrao_marcado,
            lambda _: nova_secao,
            conteudo,
            count=1,
            flags=re.S,
        )
    else:
        # Migra a seção antiga sem apagar o restante da página.
        linhas = conteudo.splitlines()
        inicio = next(
            (i for i, linha in enumerate(linhas)
             if linha.strip() == "## Materiais disponíveis"),
            None,
        )

        if inicio is None:
            conteudo = conteudo.rstrip() + "\n\n## Materiais disponíveis\n\n"
            conteudo += nova_secao + "\n"
        else:
            fim = next(
                (i for i in range(inicio + 1, len(linhas))
                 if linhas[i].startswith("## ")),
                len(linhas),
            )

            trecho_antigo = linhas[inicio:fim]
            indice_fim = None

            # Mantém eventuais links de retorno existentes após os materiais.
            for i, linha in enumerate(trecho_antigo):
                if "Baixar PDF" in linha or "Download PDF" in linha:
                    indice_fim = i

            if indice_fim is not None:
                sobra = trecho_antigo[indice_fim + 1:]
                sobra = [
                    linha for linha in sobra
                    if linha.strip()
                    and (
                        "periodos/" in linha
                        or "Voltar" in linha
                        or "voltar" in linha
                    )
                ]
            else:
                sobra = []

            substituicao = [
                "## Materiais disponíveis",
                "",
                nova_secao,
                "",
                *sobra,
            ]

            linhas = linhas[:inicio] + substituicao + linhas[fim:]
            conteudo = "\n".join(linhas).rstrip() + "\n"

    pagina.write_text(conteudo, encoding="utf-8")
    print(f"Atualizada: {pagina.name}")


def main():
    paginas = sorted(DISCIPLINAS.glob("*.md"))

    if not paginas:
        raise SystemExit("Nenhuma disciplina encontrada.")

    for pagina in paginas:
        atualizar(pagina)

    print(f"\nConcluído! {len(paginas)} disciplinas atualizadas.")


if __name__ == "__main__":
    main()

