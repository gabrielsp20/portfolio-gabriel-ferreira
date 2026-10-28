"""Build the public resume from the same verified data used by the website.

Requires reportlab. Run from any directory: python scripts/build_resume.py
The generated PDF contains selectable text and professional-profile links only.
"""

import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer,
)

ROOT = Path(__file__).resolve().parent.parent
profile = json.loads((ROOT / "data/profile.json").read_text(encoding="utf-8-sig"))
GREEN = colors.HexColor("#173D36")
SAND = colors.HexColor("#F4F1E9")
SECONDARY = colors.HexColor("#344B45")
BORDER = colors.HexColor("#CED5CA")
GOLD = colors.HexColor("#A8793D")
LIGHT_GOLD = colors.HexColor("#E5C08D")
OUTPUT = ROOT / "public/documentos/curriculo-gabriel-ferreira.pdf"


def clean(text):
    return escape(text.replace("–", "-").replace("—", "-").replace("·", "|"))


styles = {
    "name": ParagraphStyle("name", fontName="Times-Roman", fontSize=26, leading=29, textColor=GREEN, spaceAfter=5),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=GREEN, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=12, textColor=SECONDARY, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=GREEN, spaceBefore=8, spaceAfter=5),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=13, textColor=SECONDARY, alignment=TA_LEFT, spaceAfter=5),
    "company": ParagraphStyle("company", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=GREEN, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="Helvetica", fontSize=9, leading=12, textColor=GREEN, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.3, leading=12, textColor=SECONDARY, leftIndent=9, firstLineIndent=-9, spaceAfter=2),
}


def p(text, style="body"):
    return Paragraph(text, styles[style])


def section(title):
    return [p(title, "section"), HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=4)]


def page(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(SAND)
    canvas.rect(0, height - 127, width, 127, fill=1, stroke=0)
    canvas.setFillColor(GREEN)
    canvas.rect(width - 75, height - 76, 39, 39, fill=1, stroke=0)
    canvas.setFillColor(LIGHT_GOLD)
    canvas.setFont("Times-Roman", 25)
    canvas.drawString(width - 72, height - 65, "GF")
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1)
    canvas.line(36, height - 129, width - 36, height - 129)
    canvas.setStrokeColor(BORDER)
    canvas.line(36, 32, width - 36, 32)
    canvas.setFillColor(SECONDARY)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(36, 20, "Gabriel Ferreira | Currículo profissional")
    canvas.drawRightString(width - 36, 20, f"{doc.page}")
    canvas.restoreState()


story = [p(clean(profile["fullName"]), "name"), p("Suporte de TI | Service Desk | Automação | Suporte a Aplicações", "role")]
story.append(p(clean(profile["location"]) + " | " + clean(profile["phone"]), "contact"))
story.append(p(f'<link href="mailto:{profile["email"]}">{profile["email"]}</link> | '
               f'<link href="{profile["linkedin"]}"><u>LinkedIn</u></link> | '
               f'<link href="{profile["github"]}"><u>GitHub</u></link> | '
               f'<link href="{profile["site"]}"><u>Site profissional</u></link>', "contact"))
story.append(Spacer(1, 9))
story += section("RESUMO PROFISSIONAL")
story.append(p(clean(profile["summary"])))
story += section("COMPETÊNCIAS TÉCNICAS")
for group in profile["skills"]:
    story.append(p(f'<b>{clean(group["title"])}:</b> ' + clean(", ".join(group["items"])) + "."))
story.append(p("<b>Métodos de trabalho:</b> investigação de falhas, coleta de evidências, comunicação com usuários, documentação técnica, escalonamento e melhoria de processos."))
story += section("EXPERIÊNCIA PROFISSIONAL")
for job in profile["experience"]:
    content = [p(f'{clean(job["company"])} | {clean(job["period"])}', "company"), p(f'{clean(job["role"])} | {clean(job["detail"])}', "job")]
    content += [p("• " + clean(item), "bullet") for item in job["responsibilities"]]
    content.append(Spacer(1, 4))
    story.append(KeepTogether(content))
story += section("FORMAÇÃO ACADÊMICA")
education = profile["education"]
story.append(p(f'<b>{clean(education["course"])}</b><br/>{clean(education["institution"])} | {clean(education["period"])} | {clean(education["status"])}'))

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=36, leftMargin=36, topMargin=31, bottomMargin=44,
                        title="Gabriel Ferreira - Currículo profissional", author=profile["fullName"],
                        subject="Suporte de TI, Service Desk, automação e experiência profissional", lang="pt-BR")
doc.build(story, onFirstPage=page, onLaterPages=page)
print(OUTPUT)
