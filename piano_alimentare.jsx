import { useState } from "react";

const COLAZIONI = [
  {
    name: "Pane + crema di nocciole",
    items: [
      { food: "Pane integrale", qty: "60g", kcal: 140, c: 26, p: 5, f: 1.5 },
      { food: "Crema 100% nocciole", qty: "15g", kcal: 95, c: 2, p: 3, f: 9 },
      { food: "Marmellata senza zuccheri", qty: "20g", kcal: 30, c: 7, p: 0, f: 0 },
      { food: "Frutto di stagione", qty: "150g", kcal: 55, c: 13, p: 0.5, f: 0.2 },
    ],
  },
  {
    name: "Pane + burro d'arachidi",
    items: [
      { food: "Pane integrale", qty: "60g", kcal: 140, c: 26, p: 5, f: 1.5 },
      { food: "Burro di arachidi 100%", qty: "15g", kcal: 88, c: 2, p: 4, f: 7 },
      { food: "Marmellata senza zuccheri", qty: "20g", kcal: 30, c: 7, p: 0, f: 0 },
      { food: "Frutto di stagione", qty: "150g", kcal: 55, c: 13, p: 0.5, f: 0.2 },
    ],
  },
  {
    name: "Yogurt + cereali + avena",
    items: [
      { food: "Yogurt bianco magro", qty: "150g", kcal: 57, c: 6, p: 8, f: 0.5 },
      { food: "Fiocchi d'avena", qty: "40g", kcal: 152, c: 26, p: 5, f: 3 },
      { food: "Cereali integrali (no zucchero)", qty: "20g", kcal: 72, c: 15, p: 2, f: 0.5 },
      { food: "Frutti di bosco / frutta", qty: "100g", kcal: 40, c: 9, p: 0.7, f: 0.3 },
    ],
  },
  {
    name: "Brunch domenica",
    tag: "weekend",
    items: [
      { food: "Pane integrale tostato", qty: "80g", kcal: 186, c: 35, p: 7, f: 2 },
      { food: "Uovo strapazzato", qty: "1 uovo", kcal: 78, c: 0.5, p: 6.5, f: 5.5 },
      { food: "Avocado", qty: "50g", kcal: 80, c: 1, p: 1, f: 7.5 },
      { food: "Pomodorini", qty: "80g", kcal: 14, c: 3, p: 0.7, f: 0.1 },
    ],
  },
];

const SPUNTINI = [
  {
    name: "Panino + prosciutto cotto",
    items: [
      { food: "Panino integrale piccolo", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Prosciutto cotto sgrassato", qty: "40g", kcal: 46, c: 0.5, p: 7, f: 2 },
    ],
  },
  {
    name: "Panino + tonno",
    items: [
      { food: "Panino integrale piccolo", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Tonno al naturale", qty: "50g", kcal: 55, c: 0, p: 13, f: 0.5 },
    ],
  },
  {
    name: "Panino + bresaola",
    items: [
      { food: "Panino integrale piccolo", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Bresaola", qty: "30g (2-3 fette)", kcal: 45, c: 0, p: 10, f: 0.7 },
    ],
  },
  {
    name: "Crackers + ricotta",
    items: [
      { food: "Crackers integrali", qty: "1 pacchetto (30g)", kcal: 120, c: 20, p: 3, f: 3 },
      { food: "Ricotta vaccina", qty: "40g (2 cucchiai)", kcal: 55, c: 1.5, p: 3, f: 4 },
    ],
  },
  {
    name: "Frutta secca + frutto",
    tag: "weekend",
    items: [
      { food: "Frutta secca mista", qty: "20g", kcal: 120, c: 3, p: 4, f: 10 },
      { food: "Frutto di stagione", qty: "100g", kcal: 40, c: 10, p: 0.5, f: 0.2 },
    ],
  },
  {
    name: "Wasa + prosciutto crudo",
    items: [
      { food: "Wasa integrali", qty: "3 fette", kcal: 105, c: 20, p: 3, f: 0.5 },
      { food: "Prosciutto crudo sgrassato", qty: "30g", kcal: 50, c: 0, p: 8, f: 2 },
    ],
  },
];

const PRANZI = [
  {
    name: "Pasta + sgombro",
    items: [
      { food: "Pasta integrale", qty: "100g", kcal: 348, c: 66, p: 13, f: 2.5 },
      { food: "Sgombro al naturale", qty: "80g", kcal: 150, c: 0, p: 16, f: 10 },
      { food: "Verdure miste", qty: "200g", kcal: 40, c: 7, p: 3, f: 0.5 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Lo sgombro in scatola al naturale e' praticissimo. Scolalo e condisci la pasta con pomodorini freschi.",
  },
  {
    name: "Pasta + tonno",
    items: [
      { food: "Pasta integrale", qty: "100g", kcal: 348, c: 66, p: 13, f: 2.5 },
      { food: "Tonno al naturale", qty: "80g", kcal: 88, c: 0, p: 21, f: 0.8 },
      { food: "Verdure grigliate", qty: "200g", kcal: 45, c: 7, p: 3, f: 0.5 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Usa tonno AL NATURALE, non sott'olio. Risparmi ~80 kcal a scatoletta.",
  },
  {
    name: "Pasta + ricotta e pomodorini",
    items: [
      { food: "Pasta integrale", qty: "100g", kcal: 348, c: 66, p: 13, f: 2.5 },
      { food: "Ricotta vaccina", qty: "100g", kcal: 138, c: 4, p: 8, f: 10 },
      { food: "Pomodorini", qty: "150g", kcal: 27, c: 5, p: 1.5, f: 0.3 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Sciogli la ricotta nella pasta calda con acqua di cottura. Cremosa e veloce.",
  },
  {
    name: "Pasta + hummus",
    items: [
      { food: "Pasta integrale", qty: "100g", kcal: 348, c: 66, p: 13, f: 2.5 },
      { food: "Hummus di ceci", qty: "80g", kcal: 140, c: 10, p: 6, f: 8 },
      { food: "Insalata mista", qty: "200g", kcal: 30, c: 4, p: 2, f: 0.5 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "L'hummus conta come secondo (legumi). Non aggiungere altro secondo.",
  },
  {
    name: "Riso + parmigiano",
    items: [
      { food: "Riso basmati/integrale", qty: "100g", kcal: 350, c: 72, p: 8, f: 2.5 },
      { food: "Parmigiano Reggiano", qty: "30g", kcal: 118, c: 0, p: 10, f: 8.5 },
      { food: "Rucola e pomodorini", qty: "150g", kcal: 25, c: 4, p: 2, f: 0.3 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Il parmigiano e' formaggio: max 1-2 volte/settimana come secondo.",
  },
  {
    name: "Pasta e lenticchie",
    items: [
      { food: "Pasta integrale (o mista)", qty: "80g", kcal: 278, c: 53, p: 10, f: 2 },
      { food: "Lenticchie cotte", qty: "120g", kcal: 130, c: 15, p: 10, f: 0.5 },
      { food: "Verdure (carota, sedano, cipolla)", qty: "100g", kcal: 30, c: 5, p: 1, f: 0.2 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Piatto unico! La pasta si riduce a 80g perche' le lenticchie hanno gia' carboidrati.",
  },
  {
    name: "Cous cous + pollo e verdure",
    items: [
      { food: "Cous cous", qty: "100g", kcal: 356, c: 72, p: 12, f: 1.5 },
      { food: "Petto di pollo a cubetti", qty: "80g", kcal: 88, c: 0, p: 18, f: 1.5 },
      { food: "Zucchine e peperoni", qty: "200g", kcal: 40, c: 7, p: 2.5, f: 0.5 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Piatto unico. Acqua bollente sul cous cous e copri 5 min. Fatto.",
  },
  {
    name: "Insalatona completa",
    items: [
      { food: "Pane integrale tostato", qty: "80g", kcal: 186, c: 35, p: 7, f: 2 },
      { food: "Pollo/tacchino a fette", qty: "80g", kcal: 88, c: 0, p: 18, f: 1.5 },
      { food: "Insalata, pomodori, carote", qty: "250g", kcal: 45, c: 8, p: 3, f: 0.5 },
      { food: "Mais", qty: "40g", kcal: 35, c: 7, p: 1, f: 0.5 },
      { food: "Olio EVO", qty: "20g (4 cucchiaini)", kcal: 180, c: 0, p: 0, f: 20 },
    ],
    tip: "Ottima per l'estate. Il pane tostato a cubetti fa da crostino.",
  },
  {
    name: "Pasta al ragu' di carne",
    items: [
      { food: "Pasta integrale", qty: "100g", kcal: 348, c: 66, p: 13, f: 2.5 },
      { food: "Carne trita magra", qty: "80g", kcal: 100, c: 0, p: 17, f: 3.5 },
      { food: "Passata di pomodoro", qty: "80g", kcal: 20, c: 4, p: 1, f: 0.2 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
      { food: "Verdure di contorno", qty: "150g", kcal: 30, c: 5, p: 2, f: 0.3 },
    ],
    tip: "Piatto unico. Preparane il doppio e congela una porzione.",
  },
];

const CENE = [
  {
    name: "Pollo alla piastra",
    time: "15 min",
    emoji: "🐔",
    items: [
      { food: "Petto di pollo", qty: "150g", kcal: 165, c: 0, p: 33, f: 3.5 },
      { food: "Zucchine grigliate", qty: "250g", kcal: 28, c: 4, p: 2.5, f: 0.5 },
      { food: "Pane integrale", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Marinalo 10 min con limone e rosmarino. Piastra ben calda, 5 min per lato.",
  },
  {
    name: "Merluzzo al forno",
    time: "20 min",
    emoji: "🐟",
    items: [
      { food: "Filetto di merluzzo", qty: "180g", kcal: 146, c: 0, p: 32, f: 1.5 },
      { food: "Cavolfiore al vapore", qty: "250g", kcal: 55, c: 8, p: 5, f: 0.7 },
      { food: "Pane integrale", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Carta forno, filetto sopra, pomodorini + olive. 180 gradi per 15 min.",
  },
  {
    name: "Frittata di verdure",
    time: "15 min",
    emoji: "🥚",
    freq: "max 1x/sett",
    items: [
      { food: "Uova", qty: "2 uova (120g)", kcal: 156, c: 1, p: 13, f: 11 },
      { food: "Spinaci/bietola", qty: "200g", kcal: 46, c: 4, p: 6, f: 0.8 },
      { food: "Patate lesse", qty: "150g", kcal: 120, c: 26, p: 3, f: 0.2 },
      { food: "Olio EVO", qty: "10g (2 cucchiaini)", kcal: 90, c: 0, p: 0, f: 10 },
    ],
    tip: "Lessa le patate la domenica, tienile in frigo. Uova max 1 volta a settimana.",
  },
  {
    name: "Ceci con verdure",
    time: "10 min",
    emoji: "🫘",
    items: [
      { food: "Ceci cotti (anche scatola)", qty: "150g", kcal: 180, c: 22, p: 12, f: 3.5 },
      { food: "Carote e sedano", qty: "200g", kcal: 45, c: 8, p: 2, f: 0.3 },
      { food: "Pane integrale", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Ceci in scatola sgocciolati, scalda con rosmarino. 10 minuti. O fai hummus.",
  },
  {
    name: "Salmone al forno",
    time: "20 min",
    emoji: "🐟",
    items: [
      { food: "Trancio di salmone", qty: "130g", kcal: 234, c: 0, p: 26, f: 14 },
      { food: "Broccoli al vapore", qty: "250g", kcal: 60, c: 8, p: 7, f: 0.5 },
      { food: "Pane integrale", qty: "40g", kcal: 92, c: 18, p: 3, f: 0.8 },
      { food: "Olio EVO", qty: "10g (2 cucchiaini)", kcal: 90, c: 0, p: 0, f: 10 },
    ],
    tip: "Il salmone ha gia' grassi buoni, quindi meno olio. Forno 200 gradi per 12-15 min.",
  },
  {
    name: "Vellutata + ricotta",
    time: "20 min",
    emoji: "🥣",
    items: [
      { food: "Vellutata di zucca o piselli", qty: "300g", kcal: 105, c: 16, p: 3, f: 3 },
      { food: "Crostini integrali", qty: "40g", kcal: 92, c: 18, p: 3, f: 0.8 },
      { food: "Ricotta vaccina", qty: "80g", kcal: 110, c: 3, p: 6.5, f: 8 },
      { food: "Olio EVO", qty: "10g (2 cucchiaini)", kcal: 90, c: 0, p: 0, f: 10 },
    ],
    tip: "Verdure surgelate vanno benissimo. Cuoci, frulla, ricotta a cucchiaiate sopra.",
  },
  {
    name: "Minestrone + formaggio",
    time: "5 min",
    emoji: "🥣",
    items: [
      { food: "Minestrone (anche surgelato)", qty: "350g", kcal: 105, c: 16, p: 4, f: 2 },
      { food: "Feta o primo sale", qty: "60g", kcal: 150, c: 0.5, p: 9, f: 12 },
      { food: "Pane integrale", qty: "40g", kcal: 92, c: 18, p: 3, f: 0.8 },
      { food: "Olio EVO", qty: "10g (2 cucchiaini)", kcal: 90, c: 0, p: 0, f: 10 },
    ],
    tip: "Il salva-cena definitivo. Minestrone surgelato + feta sbriciolata. 5 minuti.",
  },
  {
    name: "Tacchino + patate",
    time: "20 min",
    emoji: "🐔",
    items: [
      { food: "Fesa di tacchino", qty: "150g", kcal: 157, c: 0, p: 30, f: 3.5 },
      { food: "Patate al forno", qty: "200g", kcal: 160, c: 34, p: 4, f: 0.2 },
      { food: "Insalata mista", qty: "150g", kcal: 22, c: 3, p: 1.5, f: 0.3 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Patate a cubetti piccoli: cuociono in 15 min a 220 gradi. Tacchino in padella 4 min/lato.",
  },
  {
    name: "Fagioli e verdure",
    time: "10 min",
    emoji: "🫘",
    items: [
      { food: "Fagioli cotti (borlotti/cannellini)", qty: "150g", kcal: 180, c: 24, p: 11, f: 1 },
      { food: "Bietola o spinaci", qty: "200g", kcal: 38, c: 4, p: 4, f: 0.5 },
      { food: "Pane integrale", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Fagioli in scatola + bietola in padella con aglio e peperoncino. Semplicissimo.",
  },
  {
    name: "Alici al forno",
    time: "15 min",
    emoji: "🐟",
    items: [
      { food: "Alici fresche/surgelate", qty: "200g", kcal: 186, c: 0, p: 32, f: 6 },
      { food: "Peperoni al forno", qty: "200g", kcal: 45, c: 8, p: 2, f: 0.5 },
      { food: "Pane integrale", qty: "50g", kcal: 115, c: 22, p: 4, f: 1 },
      { food: "Olio EVO", qty: "15g (3 cucchiaini)", kcal: 135, c: 0, p: 0, f: 15 },
    ],
    tip: "Alici a libro, pangrattato + prezzemolo, 10 min a 200 gradi. Economiche e ricche di omega-3.",
  },
];

const OIL_SALT = [
  { cat: "Olio EVO", icon: "🫒", color: "#22c55e", items: [
    { icon: "📏", title: "Misura SEMPRE", text: "1 cucchiaino = 5g = 45 kcal. Versare a occhio aggiunge 100-200 kcal/giorno." },
    { icon: "🍳", title: "Per cucinare", text: "1-2 cucchiaini in padella antiaderente. Per la piastra spennella il cibo. Per il forno: carta forno + spennellata leggera." },
    { icon: "🥗", title: "Budget giornaliero", text: "Pranzo: 20g (4 cucchiaini). Cena: 10-15g (2-3 cucchiaini). Totale: 30-35g al giorno." },
    { icon: "💡", title: "Trucco soffritto", text: "Fondo con verdure + acqua, poi olio A CRUDO a fine cottura. Piu' sano e piu' saporito." },
  ]},
  { cat: "Sale", icon: "🧂", color: "#eab308", items: [
    { icon: "🧂", title: "Max 1.5g/giorno", text: "= 1/4 di cucchiaino raso. Usa spezie: curcuma, rosmarino, peperoncino, limone, origano." },
    { icon: "⚠️", title: "Sale nascosto", text: "Pane, affettati, formaggi, scatolette, dado. Scegli 'ridotto contenuto di sale' quando puoi." },
    { icon: "🍝", title: "Acqua pasta", text: "Sala normalmente (~7g/litro). Ne assorbi solo una piccola parte." },
    { icon: "📉", title: "Ci si abitua", text: "2-3 settimane per rieducare il palato. Dopo, il cibo salato ti sembrera' troppo." },
  ]},
];

const FREQ_RULES = [
  { food: "Pesce", freq: "3-4x/sett", color: "#60a5fa" },
  { food: "Legumi", freq: "3-4x/sett", color: "#34d399" },
  { food: "Carne bianca", freq: "2-3x/sett", color: "#fbbf24" },
  { food: "Uova", freq: "max 1x/sett", color: "#f87171" },
  { food: "Formaggi", freq: "max 1-2x/sett", color: "#f87171" },
  { food: "Affettati", freq: "max 1-2x/sett", color: "#f87171" },
  { food: "Carne rossa", freq: "ogni 10-15gg", color: "#ef4444" },
];

function getTotals(items) {
  return items.reduce((a, i) => ({ kcal: a.kcal + i.kcal, c: a.c + i.c, p: a.p + i.p, f: a.f + i.f }), { kcal: 0, c: 0, p: 0, f: 0 });
}

const allTabs = [
  { id: "colazione", label: "Colazione", icon: "☀️", color: "#F59E0B" },
  { id: "spuntino", label: "Spuntino", icon: "🍎", color: "#8B5CF6" },
  { id: "pranzo", label: "Pranzo", icon: "🍝", color: "#3B82F6" },
  { id: "cena", label: "Cena", icon: "🌙", color: "#6366F1" },
  { id: "guide", label: "Guide", icon: "📖", color: "#10B981" },
];

function Card({ option, color, open, onToggle }) {
  const t = getTotals(option.items);
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      borderRadius: 16, marginBottom: 10,
      border: open ? `1px solid ${color}44` : "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px", background: "none", border: "none", cursor: "pointer", color: "#e2e8f0", gap: 10,
      }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {option.emoji && <span style={{ fontSize: 16 }}>{option.emoji}</span>}
            <span style={{ fontSize: 14, fontWeight: 700 }}>{option.name}</span>
            {option.tag && <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 6, background: "rgba(251,191,36,0.15)", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase" }}>{option.tag}</span>}
            {option.time && <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 6, background: "rgba(99,102,241,0.15)", color: "#a5b4fc", fontWeight: 700 }}>⏱ {option.time}</span>}
            {option.freq && <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 6, background: "rgba(239,68,68,0.15)", color: "#fca5a5", fontWeight: 700 }}>{option.freq}</span>}
          </div>
          <div style={{ fontSize: 11, color: "#64748b", marginTop: 3 }}>
            <span style={{ color, fontWeight: 700 }}>{Math.round(t.kcal)}</span> kcal
            <span style={{ margin: "0 6px", opacity: 0.3 }}>|</span>
            C {Math.round(t.c)}  P {Math.round(t.p)}  G {Math.round(t.f)}
          </div>
        </div>
        <span style={{ fontSize: 18, color: "#475569", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: "0 16px 14px" }}>
          {option.items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderTop: i ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{item.food}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{item.qty}</div>
              </div>
              <div style={{ textAlign: "right", fontSize: 12, minWidth: 75 }}>
                <span style={{ fontWeight: 700, color: "#cbd5e1" }}>{item.kcal}</span>
                <span style={{ color: "#64748b" }}> kcal</span>
              </div>
            </div>
          ))}
          {option.tip && (
            <div style={{ marginTop: 10, padding: "10px 12px", background: `${color}10`, borderRadius: 10, fontSize: 11, color: "#94a3b8", lineHeight: 1.5, borderLeft: `3px solid ${color}44` }}>
              💡 {option.tip}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("colazione");
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen(p => ({ ...p, [k]: !p[k] }));
  const cur = allTabs.find(t => t.id === tab);
  const color = cur?.color || "#3B82F6";
  const data = { colazione: COLAZIONI, spuntino: SPUNTINI, pranzo: PRANZI, cena: CENE }[tab] || [];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)", minHeight: "100vh", color: "#e2e8f0", maxWidth: 480, margin: "0 auto" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet" />

      <div style={{ padding: "24px 20px 10px", background: "linear-gradient(180deg, rgba(59,130,246,0.12) 0%, transparent 100%)" }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, fontFamily: "Nunito", margin: 0, background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cosa mangio?</h1>
        <p style={{ fontSize: 12, color: "#64748b", margin: "4px 0 0" }}>Scegli in base a cosa hai · Target 1.800 kcal</p>
      </div>

      <div style={{ display: "flex", gap: 4, padding: "10px 12px 14px", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {allTabs.map(t => (
          <button key={t.id} onClick={() => { setTab(t.id); setOpen({}); }} style={{
            flex: "0 0 auto", padding: "8px 12px", borderRadius: 12, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
            background: tab === t.id ? `${t.color}22` : "rgba(255,255,255,0.04)",
            color: tab === t.id ? t.color : "#64748b",
            boxShadow: tab === t.id ? `0 0 0 1px ${t.color}44` : "none",
          }}>{t.icon} {t.label}</button>
        ))}
      </div>

      <div style={{ padding: "0 16px 80px" }}>
        {tab !== "guide" && (
          <>
            <p style={{ fontSize: 11, color: "#475569", margin: "0 0 12px", lineHeight: 1.4 }}>
              {tab === "colazione" && "Alterna tra queste. Cambia il frutto in base alla stagione."}
              {tab === "spuntino" && "Meta' mattina o meta' pomeriggio. Panino PICCOLO (50g)!"}
              {tab === "pranzo" && "Primo 100g (crudo!) + secondo + verdure + olio. Tap per dettagli."}
              {tab === "cena" && "Tutte veloci. Per 2 persone raddoppia i pesi. Tap per dettagli."}
            </p>
            {data.map((opt, i) => (
              <Card key={`${tab}-${i}`} option={opt} color={color} open={!!open[`${tab}-${i}`]} onToggle={() => toggle(`${tab}-${i}`)} />
            ))}
          </>
        )}

        {tab === "guide" && (
          <>
            {/* Frequenze */}
            <h3 style={{ fontSize: 15, fontWeight: 800, fontFamily: "Nunito", color: "#f472b6", margin: "8px 0 10px" }}>📊 Frequenze settimanali</h3>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
              {FREQ_RULES.map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", borderBottom: i < FREQ_RULES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <span style={{ fontSize: 12, color: "#cbd5e1" }}>{r.food}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: r.color, background: `${r.color}15`, padding: "3px 8px", borderRadius: 6 }}>{r.freq}</span>
                </div>
              ))}
            </div>

            {/* Oil & Salt */}
            {OIL_SALT.map((s, si) => (
              <div key={si} style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, fontFamily: "Nunito", color: s.color === "#22c55e" ? "#86efac" : "#fde68a", margin: "0 0 10px" }}>{s.icon} {s.cat}</h3>
                {s.items.map((item, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "12px 16px", marginBottom: 8, borderLeft: `3px solid ${s.color}44` }}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{item.icon} {item.title}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            ))}

            {/* Correzioni */}
            <h3 style={{ fontSize: 15, fontWeight: 800, fontFamily: "Nunito", color: "#fca5a5", margin: "0 0 10px" }}>⚠️ Correzioni</h3>
            {[
              "Crema nocciole: deve essere 100% nocciole. No Nutella. OK: Rigoni, Venchi, Damiano.",
              "Marmellata: solo 'senza zuccheri aggiunti' (Rigoni Fiordifrutta, Zuegg).",
              "Tonno: al naturale, non sott'olio. Risparmi ~80 kcal a scatoletta.",
              "Pasta: pesa SEMPRE a crudo. 100g cotte = solo ~45g secche.",
              "Olio: misura col cucchiaino (5g). Mai a occhio.",
              "Cereali: <10g zuccheri/100g oppure solo fiocchi d'avena.",
              "Panino spuntino: max 50g, non rosetta da 100g.",
            ].map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "10px 14px", marginBottom: 6, fontSize: 11, color: "#94a3b8", lineHeight: 1.5, borderLeft: "3px solid #ef444444" }}>{c}</div>
            ))}

            {/* Weekend */}
            <h3 style={{ fontSize: 15, fontWeight: 800, fontFamily: "Nunito", color: "#fbbf24", margin: "16px 0 10px" }}>🔥 Weekend anti-abbuffata</h3>
            {[
              "Un pasto libero, non un giorno libero. 5 giorni su 7 segui il piano.",
              "Aperitivo: 1 bicchiere vino o 1 spritz. EVITA stuzzichini (300-500 kcal nascoste).",
              "Fuori: piatto unico (carne/pesce + verdure). No antipasto+primo+secondo.",
              "Dopo lo sgarro riprendi normalmente. MAI saltare pasti per compensare.",
              "Batch cooking domenica: cuoci 2-3 cene per la settimana.",
            ].map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "10px 14px", marginBottom: 6, fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: 5, background: "rgba(251,191,36,0.15)", color: "#fbbf24", fontSize: 10, fontWeight: 800, marginRight: 8 }}>{i + 1}</span>{t}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
