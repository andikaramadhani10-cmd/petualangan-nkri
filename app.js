/* ===== DATA SOAL (guru boleh mengubah bagian ini saja) =====
   Aturan: pilihan PERTAMA di setiap daftar "o" adalah jawaban yang BENAR.
   Urutan pilihan diacak otomatis saat ditampilkan.
   k = pertanyaan/kasus, e = penjelasan, h = petunjuk untuk pilihan salah (Level 3). */
const DATA = {
  l1: [
    {k:"NKRI adalah singkatan dari ....",o:["Negara Kesatuan Republik Indonesia","Negara Kesatuan Rakyat Indonesia","Negara Kebangsaan Republik Indonesia","Negara Kerukunan Rakyat Indonesia"],e:"NKRI berarti Negara Kesatuan Republik Indonesia: satu negara yang bersatu dari Sabang sampai Merauke."},
    {k:"Semboyan Bhinneka Tunggal Ika memiliki arti ....",o:["Berbeda-beda tetapi tetap satu","Satu bahasa untuk semua","Persatuan hanya untuk yang sama","Beragam tetapi saling bersaing"],e:"Kita berbeda suku, agama, dan budaya, tetapi tetap satu bangsa."},
    {k:"Keutuhan NKRI perlu dijaga karena ....",o:["Kehidupan bersama menjadi aman dan nyaman meskipun kita berbeda","Semua orang harus memiliki pendapat yang sama","Perbedaan harus dihilangkan","Hanya pemerintah yang boleh berperan"],e:"Persatuan membuat kita hidup damai walau berbeda. Perbedaan tidak perlu dihilangkan, tetapi dihargai."},
    {k:"Yang bertanggung jawab menjaga keutuhan NKRI adalah ....",o:["Seluruh warga negara, termasuk pelajar","Hanya presiden","Hanya TNI dan polisi","Hanya guru"],e:"Menjaga NKRI adalah tugas kita semua, termasuk pelajar lewat sikap sehari-hari."},
    {k:"Dina tidak mau satu kelompok dengan Budi karena Budi berasal dari daerah lain. Sikap Dina termasuk ....",o:["Membeda-bedakan teman","Menghargai perbedaan","Bekerja sama","Bermusyawarah"],e:"Menolak teman karena asal daerah adalah membeda-bedakan dan bisa merusak persatuan."},
    {k:"Perilaku yang dapat mengganggu persatuan di sekolah adalah ....",o:["Mengejek logat bicara teman dari daerah lain","Membantu teman belajar kelompok","Meminjamkan buku kepada teman","Ikut gotong royong membersihkan kelas"],e:"Mengejek logat membuat teman merasa tersisih. Tiga pilihan lainnya justru mempererat persatuan."},
    {k:"Dua anggota kelompok berbeda pendapat dan sama-sama ngotot. Cara terbaik menyelesaikannya adalah ....",o:["Bermusyawarah dan mencari kesepakatan","Meninggalkan kelompok","Memaksakan pendapat sendiri","Mendiamkan salah satu teman"],e:"Musyawarah membuat semua pendapat didengar sehingga keputusan bisa diterima bersama."},
    {k:"Kamu menerima pesan berantai di grup kelas yang kebenarannya belum jelas. Sebaiknya kamu ....",o:["Mengecek kebenarannya dulu dan tidak ikut menyebarkan","Langsung meneruskannya ke grup lain","Menambahkan cerita agar lebih seru","Menyebarkannya karena banyak yang percaya"],e:"Kabar yang belum jelas bisa menimbulkan salah paham dan permusuhan. Periksa dulu sebelum membagikan."},
    {k:"Sikap pelajar yang membantu menjaga persatuan adalah ....",o:["Menaati tata tertib dan ikut gotong royong","Berteman hanya dengan yang sedaerah","Membentuk kelompok yang menutup diri dari teman lain","Menghindari kegiatan kelas"],e:"Tertib dan gotong royong membuat suasana sekolah rukun dan semua merasa dilibatkan."},
    {k:"Kelompokmu hanya mau bekerja sama dengan teman satu daerah sehingga tugas tidak selesai. Solusi yang paling tepat adalah ....",o:["Mengajak semua anggota berbagi tugas secara adil dan saling menghargai","Membiarkannya karena sudah merasa nyaman","Mengganti anggota yang berasal dari daerah berbeda","Mengerjakan tugas sendiri-sendiri tanpa berdiskusi"],e:"Pembagian tugas yang adil memakai tenaga dan ide semua anggota, sehingga tugas selesai."}
  ],
  l2: [
    {k:"Rani berasal dari Medan dan logat bicaranya khas. Saat presentasi, beberapa teman menirukan logatnya sambil tertawa. Rani jadi diam dan malu bicara di kelas.",o:["Teman-teman belum menghargai perbedaan logat, sehingga Rani merasa tidak diterima dan persatuan kelas terganggu.","Rani harus mengubah logatnya agar tidak ditertawakan.","Itu hanya bercanda, jadi tidak ada masalah.","Masalahnya hanya karena presentasi Rani kurang bagus."],e:"Logat adalah bagian dari keberagaman daerah. Yang perlu diperbaiki adalah sikap menghargai, bukan logat Rani."},
    {k:"Dalam tugas IPS, empat anggota yang berasal dari daerah yang sama membagi tugas hanya di antara mereka. Dua anggota lain tidak diajak. Tugas lambat selesai dan hasilnya tidak lengkap.",o:["Kerja sama dibatasi pada teman sedaerah, sehingga tenaga dan ide anggota lain tidak terpakai.","Dua anggota lain kurang pintar sehingga tidak diajak.","Guru memberi tugas yang terlalu banyak.","Teman sedaerah memang lebih cocok bekerja bersama."],e:"Kelompok bekerja baik bila semua anggota dilibatkan. Mengutamakan teman sedaerah adalah sikap membeda-bedakan."},
    {k:"Di grup kelas beredar pesan: \"Murid dari suku tertentu menyerang sekolah lain. Sebarkan!\" Tidak ada sumber yang jelas, tetapi beberapa teman mulai marah pada murid dari suku itu.",o:["Kabar yang belum jelas kebenarannya bisa menimbulkan curiga dan permusuhan jika disebarkan.","Pesan itu pasti benar karena banyak yang meneruskan.","Masalahnya hanya pesannya terlalu panjang.","Teman dari suku itu memang pantas dicurigai."],e:"Banyaknya orang yang meneruskan tidak membuktikan kebenaran. Periksa sumber dan jangan ikut menyebarkan."}
  ],
  l3: [
    {k:"Saat kerja bakti membersihkan kelas, Dimas, murid baru dari luar Jawa, berdiri sendirian karena kelompok lain sudah terbentuk. Apa tindakan terbaik?",o:["Mengajaknya bergabung dan membagi tugas dengannya.","Membiarkannya, nanti dia akan mencari sendiri.","Menyuruhnya pindah ke kelompok lain yang kekurangan orang."],h:["","Murid baru sering sungkan. Apa yang bisa kamu lakukan lebih dulu?","Itu terasa seperti mengusir. Cari cara yang membuat Dimas merasa diterima."],e:"Mengajak teman baru membuatnya merasa menjadi bagian dari kelas."},
    {k:"Rapat OSIS menentukan tema pentas seni. Dua kubu bertahan pada pilihannya dan suasana memanas. Apa tindakan terbaik?",o:["Mendengarkan semua usul, lalu mencari kesepakatan, misalnya menggabungkan ide.","Mengikuti kubu yang temannya paling banyak.","Keluar dari rapat karena kesal."],h:["","Musyawarah bukan soal siapa yang paling ramai. Suara semua pihak perlu didengar.","Meninggalkan rapat tidak menyelesaikan masalah. Cari cara agar semua bisa bicara."],e:"Musyawarah untuk mufakat membuat keputusan diterima semua pihak."},
    {k:"Teman-temanmu membuat lelucon tentang daerah asal Sari di grup kelas. Sari terlihat tersinggung. Apa tindakan terbaik?",o:["Mengingatkan teman dengan sopan agar berhenti, lalu menghibur Sari.","Ikut tertawa agar tidak dimusuhi.","Membalas dengan mengejek daerah mereka."],h:["","Ikut tertawa membuat Sari makin sedih. Pikirkan perasaannya.","Membalas ejekan dengan ejekan hanya memperbesar masalah."],e:"Berani mengingatkan dengan sopan menjaga kerukunan dan menghargai perbedaan."}
  ]
};
const TITLES = ["Kenali NKRI", "Pecahkan Masalah", "Temukan Solusi"];
const MSG = "Bhinneka Tunggal Ika: kita berbeda-beda, tetapi tetap satu. Terima kasih sudah ikut menjaga persatuan!";

/* ===== LOGIKA APLIKASI (tidak perlu diubah guru) ===== */
const $ = s => document.querySelector(s);
const app = $("#app");
let S;

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const resetState = () => { S = { name: "", lv: 0, i: 0, sc: 0, a: [0, 0, 0], q: [], t: "", lock: false }; };

function show(html) {
  app.innerHTML = html;
  const h = app.querySelector("h2");
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
  window.scrollTo(0, 0);
}

function steps() {
  return '<ol class="level-steps" aria-label="Kemajuan level">' + TITLES.map((t, i) => {
    const done = S.lv > i + 1, cur = S.lv === i + 1;
    return `<li class="${done ? "is-done" : cur ? "is-current" : ""}">Level ${i + 1}${done ? " ✓" : ""}</li>`;
  }).join("") + "</ol>";
}

/* Layar awal */
function start() {
  resetState();
  show(`<h2>Selamat datang, calon Penjaga NKRI!</h2>
    <p>Misimu: menjaga persatuan Indonesia lewat 3 level. Kenali NKRI, pecahkan masalah, lalu temukan solusi.</p>
    <label class="field-label" for="nm">Nama atau Nama Kelompok</label>
    <input id="nm" class="text-input" maxlength="40" autocomplete="off">
    <p id="err" class="form-error" role="alert"></p>
    <button type="button" class="btn btn-primary" id="go">🚀 Mulai Petualangan</button>`);
  const go = () => {
    const n = $("#nm").value.trim();
    if (!n) { $("#err").textContent = "❌ Isi nama atau nama kelompokmu dulu ya."; $("#nm").focus(); return; }
    S.name = n; startLevel(1);
  };
  $("#go").onclick = go;
  $("#nm").onkeydown = e => { if (e.key === "Enter") go(); };
}

function startLevel(n) {
  S.lv = n; S.i = 0;
  const src = n === 1 ? shuffle(DATA.l1) : DATA["l" + n];
  S.q = src.map(it => ({ ...it, ord: shuffle(it.o.map((_, k) => k)) }));
  ask();
}

function ask() {
  const it = S.q[S.i], L = S.lv, n = S.q.length, p = Math.round(S.i / n * 100);
  S.lock = false;
  show(`${steps()}
    <div class="quiz-progress-wrapper">
      <div class="quiz-progress-header"><span>${L === 1 ? "Soal" : "Bagian"} ${S.i + 1} dari ${n}</span><span>Level ${L}: ${TITLES[L - 1]}</span></div>
      <div class="quiz-progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}"><div class="quiz-progress-fill" style="width:${p}%"></div></div>
    </div>
    <div class="question-box">
      <h2 class="question-title">${L === 2 ? "Kasus: " : ""}${it.k}</h2>
      ${L === 2 ? '<p class="secondary-text">Pilih analisis masalah yang paling tepat.</p>' : ""}
      <ul class="options-list">
        ${it.ord.map((k, pos) => `<li class="option-item"><button type="button" class="option-btn" data-k="${k}"><span class="option-content"><span class="option-indicator" aria-hidden="true">${"ABCD"[pos]}</span><span>${it.o[k]}</span></span><span class="opt-mark"></span></button></li>`).join("")}
      </ul>
      <div id="fb" class="feedback-box" role="status" aria-live="polite"></div>
      <div id="nxw" class="mt"></div>
    </div>`);
  document.querySelectorAll(".option-btn").forEach(b => b.onclick = () => pick(b));
}

function mark(b, ok) {
  b.classList.add(ok ? "is-correct" : "is-wrong");
  b.querySelector(".opt-mark").textContent = ok ? "✅ Benar" : "❌ Salah";
}

function feedback(ok, text) {
  const f = $("#fb");
  f.className = "feedback-box is-active " + (ok ? "feedback-success" : "feedback-error");
  f.innerHTML = `<h4>${ok ? "✅ Benar!" : "❌ Belum tepat"}</h4><p></p>`;
  f.querySelector("p").textContent = text;
}

function lockAll() {
  S.lock = true;
  document.querySelectorAll(".option-btn").forEach(b => b.setAttribute("aria-disabled", "true"));
  const last = S.i === S.q.length - 1;
  $("#nxw").innerHTML = `<button type="button" class="btn btn-primary" id="nx">${last ? (S.lv === 3 ? "🏆 Lihat Hasil" : "Lanjut ke Level " + (S.lv + 1)) : "Lanjut ➡️"}</button>`;
  $("#nx").onclick = next; $("#nx").focus();
}

function pick(b) {
  if (S.lock || b.classList.contains("is-wrong")) return;
  const it = S.q[S.i], L = S.lv, k = +b.dataset.k, ok = k === 0;
  if (L > 1) S.a[L - 1]++;
  mark(b, ok);
  if (ok) { if (L === 1) S.sc++; feedback(true, it.e); lockAll(); }
  else if (L === 1) { feedback(false, it.e); mark(document.querySelector('.option-btn[data-k="0"]'), true); lockAll(); }
  else feedback(false, (L === 3 ? it.h[k] : "Baca kasusnya lagi, lalu pilih analisis yang lain.") + " Coba lagi ya.");
}

function next() {
  S.i++;
  if (S.i < S.q.length) ask();
  else if (S.lv < 3) startLevel(S.lv + 1);
  else { S.lv = 4; S.t = new Date().toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" }); end(); }
}

/* Layar akhir dan hasil */
const rows = () => [
  ["Nama", S.name], ["Tanggal", S.t], ["Skor Level 1", S.sc + " dari 10"],
  ["Percobaan Level 2", S.a[1] + " (minimal 3)"], ["Percobaan Level 3", S.a[2] + " (minimal 3)"],
  ["Lencana", "Penjaga NKRI"]
];
const resultText = () => "HASIL PETUALANGAN NKRI\n======================\n" + rows().map(r => r[0] + ": " + r[1]).join("\n") + "\n\n" + MSG;
const fileName = () => S.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "siswa";

function end() {
  const pred = S.sc >= 9 ? "🌟 Pendekar Persatuan" : S.sc >= 7 ? "👍 Penjaga Andal" : "💪 Terus Berlatih";
  show(`${steps()}
    <div class="score-banner">
      <span class="status-badge badge-success">🏅 Lencana Penjaga NKRI</span>
      <h2>Misi selesai, ${esc(S.name)}!</h2>
      <div class="score-big-number">${S.sc} / 10</div>
      <div class="score-predikat">${pred}</div>
      <p class="score-summary-text">${MSG}</p>
    </div>
    <dl class="result-list mt">${rows().map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join("")}</dl>
    <div id="toast" class="copy-notification" role="status" aria-live="polite"></div>
    <div class="action-buttons-group no-print">
      <button type="button" class="btn btn-primary" id="bp">📸 Unduh sebagai gambar (PNG)</button>
      <button type="button" class="btn btn-secondary" id="bt">📄 Unduh sebagai teks (.txt)</button>
      <button type="button" class="btn btn-secondary" id="bc">📋 Salin hasil</button>
      <button type="button" class="btn btn-secondary" id="bpr">🖨️ Cetak</button>
      <button type="button" class="btn btn-secondary" id="ba">🔄 Main lagi</button>
    </div>
    <p class="secondary-text no-print">Hasil ini tersimpan di perangkatmu. Kirim ke guru dengan tombol di atas.</p>`);
  $("#bp").onclick = downloadPng;
  $("#bt").onclick = () => download(new Blob([resultText()], { type: "text/plain;charset=utf-8" }), "txt");
  $("#bc").onclick = copyResult;
  $("#bpr").onclick = () => window.print();
  $("#ba").onclick = start;
}

function download(blob, ext) {
  const u = URL.createObjectURL(blob), a = document.createElement("a");
  a.href = u; a.download = `hasil-nkri-${fileName()}.${ext}`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(u), 1500);
}

/* Kartu PNG selalu bertema terang agar mudah dibaca dan hemat tinta */
function downloadPng() {
  const c = document.createElement("canvas"); c.width = 800; c.height = 520;
  const x = c.getContext("2d");
  x.fillStyle = "#FFFFFF"; x.fillRect(0, 0, 800, 520);
  x.fillStyle = "#8F0E1E"; x.fillRect(0, 0, 800, 90);
  x.fillStyle = "#FEF08A"; x.fillRect(0, 90, 800, 8);
  x.fillStyle = "#FFFFFF"; x.font = "bold 36px sans-serif"; x.fillText("Petualangan NKRI", 40, 58);
  x.fillStyle = "#0F172A"; x.font = "26px sans-serif";
  rows().slice(0, 5).forEach((r, i) => x.fillText(r[0] + ": " + r[1], 40, 150 + i * 52));
  x.fillStyle = "#FEF3C7"; x.fillRect(40, 420, 400, 56);
  x.fillStyle = "#78350F"; x.font = "bold 26px sans-serif"; x.fillText("🏅 Lencana Penjaga NKRI", 56, 457);
  c.toBlob(b => download(b, "png"));
}

function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("is-visible"); }

function copyResult() {
  const ok = () => toast("✅ Tersalin");
  const fallback = () => {
    const t = document.createElement("textarea");
    t.value = resultText(); t.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(t); t.select();
    let done = false; try { done = document.execCommand("copy"); } catch (e) {}
    t.remove();
    done ? ok() : toast("❌ Tidak bisa menyalin. Pakai tombol Unduh teks.");
  };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(resultText()).then(ok, fallback);
  else fallback();
}

start();