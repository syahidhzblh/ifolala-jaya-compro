/**
 * IFOLALA JAYA - COMPANY PROFILE & PROMOSI DIGITAL
 * JavaScript Application Logic & Interactive Features
 */

// --- 1. Business Configuration ---
const CONFIG = {
  businessName: "Ifolala Jaya",
  establishedYear: 2001,
  clientCount: "600+",
  // WhatsApp International Number (without + or spaces)
  // Can be configured by the owner
  waNumber: "6281382443328",
  defaultMessage: "Halo Ifolala Jaya, saya tertarik untuk mengetahui lebih lanjut mengenai layanan konstruksi dan bengkel las yang tersedia.",
  servicePhoneDisplay: "0813-8244-3328"
};

// --- 2. Data Store: Service Details ---
const SERVICES_DATA = {
  canopy: {
    id: "canopy",
    title: "Canopy Carport & Teras",
    badge: "Layanan Populer",
    image: "assets/images/canopy.jpg",
    desc: "Layanan pembuatan dan pemasangan atap canopy untuk carport hunian, teras rumah, garasi, koridor perkantoran hingga area komersial. Dikerjakan dengan rangka hollow galvanis anti-karat berstandar SNI dan berbagai pilihan atap berkualitas tinggi.",
    specs: [
      { label: "Pilihan Rangka", val: "Besi Hollow Galvanis 4x6, 4x8, 5x10, Pipa Baja, WF" },
      { label: "Pilihan Atap", val: "Alderon Twinwall (uPVC), SolarTuff, Polycarbonate, Kaca Tempered, Spandek Pasir" },
      { label: "Finishing Cat", val: "Primer Epoxy Anti Karat + Cat Duco / Semprot Matte Black / Putih" },
      { label: "Kelebihan", val: "Tahan bocor, meredam panas & suara hujan, kokoh hingga puluhan tahun" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin berkonsultasi mengenai pembuatan Canopy Carport/Teras. Mohon info estimasi biaya dan pilihan material yang direkomendasikan."
  },
  kusen: {
    id: "kusen",
    title: "Kusen Aluminium Modern",
    badge: "Presisi Tinggi",
    image: "assets/images/kusen.jpg",
    desc: "Pembuatan dan instalasi kusen jendela dan pintu aluminium berkualitas tinggi. Alternatif modern pengganti kayu yang anti rayap, tidak memuai/menyusut akibat cuaca, tahan lembab, dan berumur sangat panjang.",
    specs: [
      { label: "Pilihan Merk", val: "YKK AP (Premium), Alexindo, Dacon, Forta, Inkasa" },
      { label: "Ukuran Profil", val: "3 Inch & 4 Inch (Tebal 1mm - 1.35mm)" },
      { label: "Pilihan Warna", val: "Black Anodize, White Powder Coating, Cokelat, Urat Kayu (Wood Grain)" },
      { label: "Kelebihan", val: "100% Anti rayap, kedap air, minim perawatan, tampilan sleek & modern" }
    ],
    waMessage: "Halo Ifolala Jaya, saya tertarik dengan pengerjaan Kusen Aluminium untuk hunian/bangunan saya. Mohon informasi pilihan profil dan jadwal survei lokasi."
  },
  partisi: {
    id: "partisi",
    title: "Partisi & Pintu Aluminium",
    badge: "Elegan & Fungsional",
    image: "assets/images/partisi.jpg",
    desc: "Pengerjaan sekat partisi ruangan kaca aluminium, pintu sliding (geser), pintu swing, dan pintu folding (lipat). Sangat ideal untuk ruang kerja kantor, pembatas ruang keluarga, penyekat toko, maupun kamar mandi.",
    specs: [
      { label: "Tipe Pintu", val: "Sliding Door (Geser), Swing Door, Folding Door (Lipat), Pivot" },
      { label: "Pilihan Kaca", val: "Kaca Polos (Clear) 5mm/8mm/10mm, Kaca Riben (Dark), Kaca Tempered" },
      { label: "Aksesoris & Kunci", val: "Handle Stainless Steel, Floor Hinge / Rel Geser Silent Roller" },
      { label: "Aplikasi", val: "Ruang Kantor, Pembatas Dapur & Taman, Ruang Meeting, Fasad Toko" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin konsultasi pengerjaan Partisi Ruangan dan Pintu Aluminium. Mohon informasi estimasi biaya dan waktu pengerjaan."
  },
  balkon: {
    id: "balkon",
    title: "Balkon Minimalis & Kaca",
    badge: "Keamanan & Estetika",
    image: "assets/images/balkon.jpg",
    desc: "Pembuatan pagar pengaman balkon lantai dua dengan perpaduan desain modern dan struktur kokoh. Memberikan rasa aman maksimal bagi keluarga sekaligus meningkatkan estetika fasad luar bangunan Anda.",
    specs: [
      { label: "Material Rangka", val: "Besi Hollow Galvanis Tebal, Stainless Steel SUS 304" },
      { label: "Pilihan Isian", val: "Kisi-kisi Minimalis, Plat Laser Cutting, Tempered Glass 10mm-12mm" },
      { label: "Finishing", val: "Epoxy Primer + Polyurethane Coating tahan cuaca panas & hujan" },
      { label: "Standar Keamanan", val: "Tinggi standar 90cm - 110cm dengan angkur cor kokoh ke dak beton" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin konsultasi pengerjaan Railing Balkon Lantai 2. Mohon rekomendasi model yang cocok untuk fasad rumah saya."
  },
  railing: {
    id: "railing",
    title: "Railing Tangga Custom",
    badge: "Interior Mewah",
    image: "assets/images/railing.jpg",
    desc: "Fabrikasi railing tangga interior custom yang memadukan keamanan tangga dengan keindahan arsitektur interior. Kami melayani bentuk tangga lurus, bordes, melengkung (curved), maupun tangga putar (spiral).",
    specs: [
      { label: "Material Rangka", val: "Besi Plat Strip, Pipa Besi, Hollow Galvanis, Stainless Steel SUS 304" },
      { label: "Handrail", val: "Besi Hollow Hitam Matte, Pipa Stainless, atau Kayu Solid (Kamper/Jati)" },
      { label: "Model Desain", val: "Minimalis Vertikal/Horizontal, Wrought Iron (Besi Tempa), Industrial Spindle" },
      { label: "Keunggulan", val: "Hasil las sambungan sangat halus, sambungan kokoh, nyaman digenggam" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin konsultasi pengerjaan Railing Tangga. Saya ingin mendiskusikan model tangga dan estimasi per meter larinya."
  },
  pagar: {
    id: "pagar",
    title: "Pagar & Gerbang Rumah",
    badge: "Keamanan Utama",
    image: "assets/images/pagar.jpg",
    desc: "Solusi gerbang dan pagar rumah yang tangguh, aman, dan berkelas. Mulai dari sistem pagar dorong/geser (sliding gate), pagar lipat empat daun, hingga pagar bermotif laser cutting artistik dan kombinasi woodplank sintetis.",
    specs: [
      { label: "Sistem Gerbang", val: "Pagar Geser (Sliding Rail), Pagar Lipat (Folding), Pagar Swing Dorong" },
      { label: "Material Kombinasi", val: "Besi Galvanis Anti-Karat, Woodplank GRC Serat Kayu, Plat Perforated/Laser Cut" },
      { label: "Roda & Rel", val: "Roda Bubut Bearing Heavy Duty, Rel Behel / Baja Siku Kokoh" },
      { label: "Finishing", val: "Zinc Chromate Anti Korosi + Cat Super Duco Tahan Cuaca Ekstrem" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin menanyakan pembuatan Pagar Gerbang Rumah. Mohon info estimasi biaya dan katalog model yang tersedia."
  }
};

// --- 3. Data Store: Portfolio Projects ---
const PROJECTS_DATA = [
  {
    id: "sman2",
    title: "SMAN 2 Tangerang",
    category: "institusi",
    categoryLabel: "Proyek Fasilitas Publik / Institusi",
    location: "Tangerang, Banten",
    image: "assets/images/proyek-sman2.jpg",
    shortDesc: "Pengerjaan canopy bentang lebar koridor sekolah serta instalasi kusen dan partisi aluminium ruang pertemuan fasilitas pendidikan.",
    fullDesc: "Ifolala Jaya dipercaya untuk mengerjakan struktur canopy peneduh koridor luas di lingkungan kampus SMAN 2 Tangerang, serta pemasangan jendela dan partisi aluminium untuk sarana gedung pertemuan. Menggunakan struktur baja hollow galvanis tebal dengan sistem pengelasan penuh dan penguncian dynabolt presisi untuk memastikan keamanan ribuan siswa dan guru.",
    specs: [
      { label: "Jenis Pekerjaan", val: "Fabrikasi Canopy Bentang Luas & Partisi Kaca Aluminium" },
      { label: "Klien/Lokasi", val: "SMAN 2 Tangerang, Kota Tangerang" },
      { label: "Material Rangka", val: "Struktur Baja Hollow Galvanis Heavy Duty & Aluminium Alexindo" },
      { label: "Status Proyek", val: "Selesai 100% dan Berfungsi Optimal" }
    ],
    waMessage: "Halo Ifolala Jaya, saya melihat portofolio pengerjaan di SMAN 2 Tangerang. Saya ingin berkonsultasi mengenai proyek institusi/sekolah serupa."
  },
  {
    id: "trevista",
    title: "Perumahan Trevista Hills",
    category: "perumahan",
    categoryLabel: "Proyek Cluster Perumahan",
    location: "Trevista Hills, Tangerang Selatan",
    image: "assets/images/proyek-trevista.jpg",
    shortDesc: "Instalasi serentak canopy carport modern beratap Alderon, pagar dorong minimalis, dan pengaman balkon unit townhouse.",
    fullDesc: "Pengerjaan terpadu untuk unit hunian cluster Perumahan Trevista Hills. Meliputi pembuatan canopy carport berdesain modern tropis dengan atap Alderon peredam panas, pagar geser minimalis bernuansa woodplank alami, dan railing balkon lantai dua yang kokoh. Proyek ini membuktikan kapasitas bengkel las Ifolala Jaya dalam menangani proyek berskala perumahan dengan standar estetika seragam.",
    specs: [
      { label: "Jenis Pekerjaan", val: "Canopy Carport, Pagar Geser Minimalis & Railing Balkon" },
      { label: "Kawasan", val: "Cluster Perumahan Trevista Hills" },
      { label: "Material Utama", val: "Rangka Galvanis Hitam Matte, Atap Alderon Twinwall, Woodplank GRC" },
      { label: "Status Proyek", val: "Selesai & Diserahterimakan dengan Baik" }
    ],
    waMessage: "Halo Ifolala Jaya, saya tertarik dengan hasil pengerjaan di Perumahan Trevista Hills. Saya ingin menanyakan estimasi paket canopy dan pagar serupa."
  },
  {
    id: "canopy-modern",
    title: "Canopy Carport Alderon Premium",
    category: "canopy",
    categoryLabel: "Hunian Pribadi",
    location: "BSD City, Tangerang",
    image: "assets/images/canopy.jpg",
    desc: "Instalasi canopy carport rumah 2 mobil dengan rangka hollow galvanis 5x10 tebal dan atap Alderon uPVC peredam panas dan hujan.",
    fullDesc: "Pengerjaan canopy carport rumah tinggal di kawasan BSD City. Pemilik membutuhkan canopy yang sejuk, tidak bising saat hujan lebat, dan tidak membuat garasi gelap. Dipilih kombinasi rangka hollow 5x10 finishing hitam doff dengan atap Alderon Twinwall putih semi-translucent.",
    specs: [
      { label: "Layanan", val: "Canopy Carport Rumah Tinggal" },
      { label: "Dimensi", val: "6 x 5 meter (Kapasitas 2 Mobil)" },
      { label: "Material", val: "Hollow Galvanis 5x10, Atap Alderon Twinwall" },
      { label: "Garansi Pengerjaan", val: "Jaminan Kebocoran & Struktur Kokoh" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin menanyakan pengerjaan Canopy Carport Alderon seperti yang ada di portofolio BSD City."
  },
  {
    id: "pagar-woodplank",
    title: "Pagar Geser Minimalis Woodplank",
    category: "pagar",
    categoryLabel: "Hunian Pribadi",
    location: "Gading Serpong, Tangerang",
    image: "assets/images/pagar.jpg",
    desc: "Pagar sliding minimalis kombinasi rangka hollow anti-karat dengan panel woodplank sintetis tahan panas dan hujan.",
    fullDesc: "Pembuatan pagar rumah dengan sistem geser otomatis manual rel baja. Memberikan privasi maksimal bagi pemilik rumah sekaligus tampilan tropis modern yang hangat berkat sentuhan bilah serat kayu sintetis tahan rayap dan tidak lapuk.",
    specs: [
      { label: "Layanan", val: "Pagar Rumah Geser (Sliding Gate)" },
      { label: "Dimensi", val: "Lebar 5.2 meter, Tinggi 1.8 meter" },
      { label: "Material", val: "Hollow Galvanis 4x6 & 4x8, GRC Woodplank, Roda Bubut Bearing" },
      { label: "Finishing", val: "Powder Coated Black Matte + Cat Pelapis Kayu UV" }
    ],
    waMessage: "Halo Ifolala Jaya, saya tertarik dengan model Pagar Geser Woodplank di Gading Serpong. Mohon info estimasi per meternya."
  },
  {
    id: "partisi-kantor",
    title: "Partisi Kaca & Pintu Aluminium Industrial",
    category: "aluminium",
    categoryLabel: "Komersial & Kantor",
    location: "Bintaro Sektor 7, Tangerang Selatan",
    image: "assets/images/partisi.jpg",
    desc: "Sekat partisi ruang kerja dan pintu geser kaca berbingkai aluminium hitam untuk nuansa modern industrial kontemporer.",
    fullDesc: "Instalasi partisi penyekat ruang direksi dan ruang meeting di kantor kreatif Bintaro. Menggunakan profil aluminium Alexindo hitam matte dengan kaca clear 8mm serta pintu sliding gantung dengan rel silent heavy duty.",
    specs: [
      { label: "Layanan", val: "Partisi Kantor & Pintu Geser Aluminium" },
      { label: "Merk Aluminium", val: "Alexindo 4 Inch Black Powder Coating" },
      { label: "Kaca", val: "Kaca Clear Glass 8mm Bevel Halus" },
      { label: "Waktu Pengerjaan", val: "4 Hari Kerja" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin konsultasi pembuatan Partisi Aluminium Ruang Kantor seperti di portofolio Bintaro."
  },
  {
    id: "railing-tangga-mewah",
    title: "Railing Tangga Lengkung Spindle Besi & Kayu",
    category: "railing",
    categoryLabel: "Hunian Mewah",
    location: "Alam Sutera, Tangerang",
    image: "assets/images/railing.jpg",
    desc: "Railing tangga melengkung custom dengan kisi-kisi besi spindle hitam matte yang dipadukan dengan handrail kayu solid halus.",
    fullDesc: "Pengerjaan interior arsitektural tangga melengkung di rumah mewah Alam Sutera. Dikerjakan dengan teknik tekuk dan las presisi tinggi untuk menghasilkan kurva tangga yang mulus dan proporsional.",
    specs: [
      { label: "Layanan", val: "Railing Tangga Melengkung Custom" },
      { label: "Rangka", val: "Besi Plat & Hollow Spindle Hitam Matte" },
      { label: "Pegangan Tangan", val: "Handrail Kayu Natural Dicat Halus" },
      { label: "Karakter", val: "Kuat, Kokoh, Finishing Presisi Tinggi" }
    ],
    waMessage: "Halo Ifolala Jaya, saya ingin konsultasi pengerjaan Railing Tangga Custom seperti portofolio Alam Sutera."
  }
];

// --- 4. Helper: Format WhatsApp Link with Analytics Simulation (FR-05 & FR-09) ---
function createWhatsAppUrl(message) {
  const cleanNumber = CONFIG.waNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

function handleWhatsAppConversion(eventSource, customMessage) {
  // Simulating Analytics Event Tracking (FR-09)
  const timestamp = new Date().toISOString();
  console.log(`[Analytics Event] WhatsApp Click recorded from: "${eventSource}" at ${timestamp}`);

  // Store click count in localStorage for local monitoring
  try {
    const currentClicks = parseInt(localStorage.getItem('ifolala_wa_clicks') || '0', 10);
    localStorage.setItem('ifolala_wa_clicks', (currentClicks + 1).toString());
    localStorage.setItem('ifolala_last_click_source', eventSource);
  } catch (e) {
    // ignore storage restrictions
  }

  const targetUrl = createWhatsAppUrl(customMessage);
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
}

// --- 5. Interactive Consultation Assistant / Estimator Logic (FR-05) ---
function initEstimator() {
  const serviceSelect = document.getElementById('calc-service');
  const sizeInput = document.getElementById('calc-size');
  const materialSelect = document.getElementById('calc-material');
  const locationSelect = document.getElementById('calc-location');
  const noteInput = document.getElementById('calc-note');
  const previewBox = document.getElementById('calc-preview-text');
  const submitBtn = document.getElementById('calc-send-btn');

  if (!serviceSelect || !previewBox || !submitBtn) return;

  function updateMessagePreview() {
    const service = serviceSelect.value || "Canopy Carport";
    const size = sizeInput.value.trim() || "Perkiraan 4 x 5 meter (20 m²)";
    const material = materialSelect.value || "Alderon Twinwall Rangka Galvanis";
    const loc = locationSelect.value || "Tangerang & Sekitarnya";
    const note = noteInput.value.trim();

    let text = `Halo Ifolala Jaya, saya ingin berkonsultasi mengenai pengerjaan konstruksi/bengkel las:\n\n`;
    text += `• Layanan: ${service}\n`;
    text += `• Estimasi Ukuran/Volume: ${size}\n`;
    text += `• Pilihan/Preferensi Material: ${material}\n`;
    text += `• Lokasi Proyek: ${loc}\n`;
    if (note) {
      text += `• Catatan Khusus: ${note}\n`;
    }
    text += `\nMohon informasi estimasi biaya dan jadwal survei lokasi. Terima kasih!`;

    previewBox.textContent = text;
    return text;
  }

  // Bind change and input events
  [serviceSelect, sizeInput, materialSelect, locationSelect, noteInput].forEach(element => {
    if (element) {
      element.addEventListener('input', updateMessagePreview);
      element.addEventListener('change', updateMessagePreview);
    }
  });

  // Initial update
  updateMessagePreview();

  // Submit button
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const finalMessage = updateMessagePreview();
    handleWhatsAppConversion('Interactive Estimator Tool', finalMessage);
  });
}

// --- 6. Quick Contact Form Logic (FR-06) ---
function initContactForm() {
  const form = document.getElementById('quick-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim() || "Calon Klien";
    const phone = document.getElementById('contact-phone')?.value.trim() || "-";
    const service = document.getElementById('contact-service')?.value || "Umum";
    const message = document.getElementById('contact-message')?.value.trim() || "Saya ingin berkonsultasi.";

    const waText = `Halo Ifolala Jaya, saya ${name} (${phone}).\n\nSaya ingin berkonsultasi mengenai: ${service}.\n\nPesan: ${message}\n\nMohon informasi lebih lanjut. Terima kasih!`;

    handleWhatsAppConversion('Footer Contact Form', waText);
  });
}

// --- 7. Portfolio Filtering & Modal Details (FR-04) ---
function initPortfolio() {
  const filterButtons = document.querySelectorAll('.filter-btn, .filter-button');
  const projectCards = document.querySelectorAll('.portfolio-card, .project-item');

  // Filter click handling
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Card click opens Project Modal
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const project = PROJECTS_DATA.find(p => p.id === projectId);
      if (project) {
        openProjectModal(project);
      }
    });
  });
}

// --- 8. Modals System (Project & Service) ---
const modalOverlay = document.getElementById('universal-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImage = document.getElementById('modal-image');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalSpecs = document.getElementById('modal-specs-container');
const modalWaBtn = document.getElementById('modal-wa-btn');

function openModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Open Project Detail Modal
function openProjectModal(project) {
  if (!modalTitle) return;

  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalBadge.textContent = project.categoryLabel || "Portofolio Proyek";
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.fullDesc || project.shortDesc;

  // Render Specs
  let specsHtml = '';
  if (project.specs && project.specs.length > 0) {
    project.specs.forEach(item => {
      specsHtml += `
        <div class="modal-spec-row">
          <span class="spec-title">${item.label}</span>
          <span class="spec-val">${item.val}</span>
        </div>
      `;
    });
  }
  modalSpecs.innerHTML = specsHtml;

  // Setup WhatsApp CTA
  modalWaBtn.onclick = () => {
    handleWhatsAppConversion(`Modal Proyek: ${project.title}`, project.waMessage);
  };
  modalWaBtn.textContent = 'Tanya Proyek Serupa';

  openModal();
}

// Open Service Detail Modal
function openServiceModal(serviceKey) {
  const service = SERVICES_DATA[serviceKey];
  if (!service || !modalTitle) return;

  modalImage.src = service.image;
  modalImage.alt = service.title;
  modalBadge.textContent = service.badge || "Kategori Layanan";
  modalTitle.textContent = service.title;
  modalDesc.textContent = service.desc;

  let specsHtml = '';
  if (service.specs && service.specs.length > 0) {
    service.specs.forEach(item => {
      specsHtml += `
        <div class="modal-spec-row">
          <span class="spec-title">${item.label}</span>
          <span class="spec-val">${item.val}</span>
        </div>
      `;
    });
  }
  modalSpecs.innerHTML = specsHtml;

  modalWaBtn.onclick = () => {
    handleWhatsAppConversion(`Modal Layanan: ${service.title}`, service.waMessage);
  };
  modalWaBtn.textContent = 'Konsultasi Layanan Ini';

  openModal();
}

// Bind Service Detail Buttons
function initServiceButtons() {
  const detailButtons = document.querySelectorAll('[data-service-detail]');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service-detail');
      openServiceModal(serviceKey);
    });
  });

  const consultButtons = document.querySelectorAll('[data-service-consult]');
  consultButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service-consult');
      const service = SERVICES_DATA[serviceKey];
      const msg = service ? service.waMessage : CONFIG.defaultMessage;
      handleWhatsAppConversion(`Service Card: ${serviceKey}`, msg);
    });
  });
}

// --- 9. FAQ Accordion Logic ---
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item, .faq-entry');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn, .faq-toggle');
    const answer = item.querySelector('.faq-answer, .faq-content');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer, .faq-content');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// --- 10. Animated Statistics Counter ---
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-value[data-target], .fact-figure[data-target]');
  if (!statElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const isYear = el.getAttribute('data-type') === 'year' || (target >= 1900 && target <= 2100 && !suffix);
          let count = 0;
          const duration = 1600;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const formatVal = (val) => isYear ? String(Math.floor(val)) : Math.floor(val).toLocaleString('id-ID');

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.textContent = (isYear ? String(target) : target.toLocaleString('id-ID')) + suffix;
              clearInterval(timer);
            } else {
              el.textContent = formatVal(count) + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-banner, .facts-strip');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- 11. Header Scroll Effect & Mobile Nav ---
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle') || document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu') || document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link, .nav-item');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    // Active nav link highlight
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-item[href*="${sectionId}"], .nav-link[href*="${sectionId}"]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-item[href*="${sectionId}"], .nav-link[href*="${sectionId}"]`)?.classList.remove('active');
      }
    });
  });

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// --- 12. Global WhatsApp Click Handlers ---
function initGlobalWaButtons() {
  const directWaButtons = document.querySelectorAll('[data-wa-trigger]');
  directWaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const source = btn.getAttribute('data-wa-source') || "Tombol Navigasi/CTA";
      const customMessage = btn.getAttribute('data-wa-message') || CONFIG.defaultMessage;
      handleWhatsAppConversion(source, customMessage);
    });
  });
}

// --- 13. Floating WhatsApp Pin Visibility on Scroll ---
function initFloatingWidget() {
  const floatingPin = document.getElementById('floating-wa');
  const contactSection = document.getElementById('kontak');
  if (!floatingPin) return;

  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // Show only when scrolled past the hero section (approx 400px)
    const passedHero = scrollY > 400;

    // Hide when reaching the Contact & Area Coverage section or below
    let reachedContact = false;
    if (contactSection) {
      const contactRect = contactSection.getBoundingClientRect();
      reachedContact = contactRect.top < (window.innerHeight - 80);
    }

    if (passedHero && !reachedContact) {
      floatingPin.classList.add('visible');
    } else {
      floatingPin.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load
}

// --- Document Ready Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initEstimator();
  initContactForm();
  initPortfolio();
  initServiceButtons();
  initFaq();
  initStatsCounter();
  initGlobalWaButtons();
  initFloatingWidget();
});
