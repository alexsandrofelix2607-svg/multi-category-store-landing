/* 
Lógica de Programação

Algoritmo - Receita de BOLO

[x] Saber quando o botão foi clicado
[x] Pegar o texto do TextArea
[x] Enviar para a IA(servidor)
[x] Pegar a resposta da IA
[x] Colocar na tela
    [x] Código
    [x] Resultado do Código     
[ ] Refinar nosso resultado        

    querySelector - pega um elemento que eu escolher
    HTML - document
    JavaScript - script
*/ // Coloque sua chave da OpenAI aqui na linha abaixo
    

/* 
IA para gerar o que queremos 

1) Qual o modelo de IA vamos usar
2) system - Quem a IA deve ser - Programador / Designer
3) user - mensagem do usuário

*/async function gerarCodigo() {
    const input = document.querySelector('.texto-pagina').value.toLowerCase();
    const caixaCodigo = document.querySelector('.bloco-codigo');
    const caixaSite = document.querySelector('.bloco-site');

    caixaCodigo.innerHTML = "Gerando site profissional...";

    // TEMPLATES DIFERENTES PRA CADA NEGÓCIO
    let template = {}

    if(input.includes("mercado") || input.includes("supermercado")){
        template = {
            cor: "#16a34a", // verde de volta
            emoji: "🛒",
            img: "https://media.istockphoto.com/id/2172032137/pt/foto/retail-clerk-using-a-digital-tablet-while-working-at-a-supermarket.jpg?s=612x612&w=0&k=20&c=MkX5q2BuQiaC0pupxXwnBc9C50brIMpLUepFW5LorU4=", // FOTO BONITA DE MERCADO
            titulo: "O melhor mercado da região",
            subtitulo: "🥦 Hortifruti Fresco | 🥩 Açougue Premium | 🧃 Bebidas Geladas",
            servicos: [
                {icon:"🚚", t:"Entrega Rápida", d:"Receba em casa em até 1h"},
                {icon:"💳", t:"Pague como quiser", d:"Pix, Cartão e Vale"},
                {icon:"🔥", t:"Ofertas da Semana", d:"Preços que cabem no bolso"}
            ]
        }
    } else if(input.includes("cafeteria") || input.includes("cafe")){
        template = {
            cor: "#f59e0b", // laranja
            emoji: "☕",
            img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
            titulo: "O melhor café da cidade",
            subtitulo: "🍰 Doces artesanais | ☕ Cafés especiais | 💻 Wi-Fi grátis",
            servicos: [
                {icon:"☕", t:"Café Gourmet", d:"Grãos selecionados"},
                {icon:"🍰", t:"Padaria Artesanal", d:"Feito todo dia"},
                {icon:"💻", t:"Espaço Coworking", d:"Ambiente pra trabalhar"}
            ]
        }
    } else { // genérico
        template = {
            cor: "#6366f1", // roxo
            emoji: "⭐",
            img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000",
            titulo: `O melhor ${input} da cidade`,
            subtitulo: "Qualidade e atendimento que você merece",
            servicos: [
                {icon:"⭐", t:"Qualidade", d:"Melhores produtos"},
                {icon:"💰", t:"Preço Justo", d:"Que cabe no bolso"},
                {icon:"🤝", t:"Atendimento", d:"Equipe treinada"}
            ]
        }
    }

    let codigo = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${template.emoji} ${input} - Seu Negócio</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif}
body{background:#0f0f0f;color:#fff}
header{background:${template.cor};padding:20px;text-align:center}
header h1{font-size:32px;font-weight:700;color:#fff}
.hero{background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${template.img}') center/cover no-repeat;height:450px;display:flex;align-items:center;justify-content:center;text-align:center;background-size: cover;}
.hero div{background:rgba(0,0,0,0.5);padding:40px;border-radius:20px}
.hero h2{font-size:48px}
.hero p{font-size:18px;margin:15px 0}
.btn{background:${template.cor};color:#fff;border:none;padding:15px 40px;border-radius:50px;font-size:18px;font-weight:600;cursor:pointer;transition:0.3s}
.btn:hover{transform:scale(1.05)}
section{padding:60px 20px;text-align:center}
.cards{display:flex;gap:20px;justify-content:center;flex-wrap:wrap}
.card{background:#1a1a1a;padding:30px;border-radius:15px;width:280px;border-top:4px solid ${template.cor}}
.card h3{font-size:20px;margin-bottom:10px}
footer{background:#000;padding:20px;text-align:center;font-size:14px}
</style>
</head>
<body>
<header><h1>${template.emoji} ${input.toUpperCase()}</h1></header>

<div class="hero">
  <div>
    <h2>${template.titulo}</h2>
    <p>${template.subtitulo}</p>
    <button class="btn">📲 Fale Conosco no WhatsApp</button>
  </div>
</div>

<section>
  <h2>Por que escolher a gente?</h2>
  <div class="cards">
    ${template.servicos.map(s => `
    <div class="card"><h3>${s.icon} ${s.t}</h3><p>${s.d}</p></div>
    `).join('')}
  </div>
</section>

<footer>© 2026 ${input}. Feito com IA DevClub ${template.emoji}</footer>
</body>
</html>
    `;

    caixaCodigo.innerText = codigo;
    caixaSite.srcdoc = codigo;
}