/* ==========================================================================
   TRẦN GIA CAPITAL GROUP (TGCG) - SHARED HEADER, MEGA MENU, FOOTER & INTERACTION
   All menu links navigate to separate real HTML pages as requested.
   ========================================================================== */

const SUBSIDIARIES_DATA = [
  {
    id: 1,
    code: "TGC-INV",
    name: "Tran Gia Capital JSC",
    shortRole: "M&A và Đầu tư Chiến lược",
    capitalRole: "Quản lý danh mục đầu tư chiến lược & M&A xuyên biên giới",
    zones: "Toàn bộ 14 phân khu The Breath of Mekong Sea & liên minh FDI quốc tế",
    capacity: "Cấu trúc vốn 50 tỷ USD, thẩm định M&A quốc tế, dẫn dắt dòng vốn Green Finance.",
    ceo: "Hội đồng Đầu tư Quốc tế TGCG",
    icon: "🏛️"
  },
  {
    id: 2,
    code: "TGC-DEV",
    name: "Tran Gia Development JSC",
    shortRole: "Phát triển Bất động sản Sinh thái",
    capitalRole: "Chủ đầu tư phát triển quy hoạch đại đô thị biển 4.000ha",
    zones: "Durian Crown Tower, Floating Eco Villas (500ha), Sky Marina City",
    capacity: "Phát triển đô thị sinh thái biển chuẩn 6–7 sao, kiến trúc Organic Parametric.",
    ceo: "Ban Phát triển Dự án TGCG",
    icon: "🏙️"
  },
  {
    id: 3,
    code: "TGC-HOS",
    name: "Tran Gia Hospitality JSC",
    shortRole: "Khách sạn & Khu nghỉ dưỡng 7 Sao",
    capitalRole: "Đầu tư chuỗi resort, biệt thự nổi & tổ hợp giải trí siêu sang",
    zones: "3.500 Floating Eco Villas, Durian Links Golf Club 36 hố PGA",
    capacity: "Chuẩn Ultra-Luxury 6–7 sao, phòng ngủ ngầm dưới biển, hội nghị 15.000 khách.",
    ceo: "Khối Nghỉ dưỡng Cao cấp TGCG",
    icon: "💎"
  },
  {
    id: 4,
    code: "TGC-HMG",
    name: "Tran Gia Hotel Management JSC",
    shortRole: "Quản lý & Vận hành Khách sạn",
    capitalRole: "Vận hành tiêu chuẩn 7 sao quốc tế & dịch vụ Quản gia AI",
    zones: "2.500 phòng khách sạn 7 sao, 320 Sky Villas, Casino 80.000m²",
    capacity: "Tối ưu công suất khai thác toàn cầu, tiêu chuẩn ESG Hospitality không rác thải.",
    ceo: "Ban Vận hành Khách sạn Quốc tế",
    icon: "🛎️"
  },
  {
    id: 5,
    code: "TGC-AMG",
    name: "Tran Gia Asset Management JSC",
    shortRole: "Quản lý Tài sản Tập đoàn",
    capitalRole: "Quản trị tài sản, tối ưu dòng tiền & khai thác thương mại",
    zones: "Tài sản hạ tầng, BĐS thương mại, Tín chỉ Blue Carbon 900ha rừng ngập mặn",
    capacity: "Đảm bảo tỷ suất sinh lời bền vững với doanh thu mục tiêu 15–18 tỷ USD/năm.",
    ceo: "Khối Quản trị Tài sản TGCG",
    icon: "📊"
  },
  {
    id: 6,
    code: "TGC-FMG",
    name: "Tran Gia Fund Management JSC",
    shortRole: "Quản lý Quỹ Đầu tư Quốc tế",
    capitalRole: "Vận hành Quỹ Tập đoàn, Quỹ Tài chính Xanh & Quỹ Tín chỉ Carbon",
    zones: "Hợp đồng PPP Hạ tầng, FDI Resort/Casino, Green Energy City 4.8 tỷ USD",
    capacity: "Kết nối định chế tài chính toàn cầu, minh bạch kiểm toán chuẩn Big4.",
    ceo: "Hội đồng Quản lý Quỹ TGCG",
    icon: "🌐"
  },
  {
    id: 7,
    code: "TGC-CON",
    name: "Tran Gia Construction JSC",
    shortRole: "Tổng thầu Xây dựng & Hạ tầng",
    capitalRole: "Thi công kết cấu kính 3D Parametric, công trình nổi & lấn biển sinh thái",
    zones: "Tháp Durian Crown 68 tầng (420–480m), Sân vận động 100.000 chỗ, Cầu cảng",
    capacity: "Ứng dụng BIM 5D, vật liệu xanh giảm phát thải, công nghệ móng nổi tiên tiến.",
    ceo: "Khối Kỹ thuật & Xây dựng TGCG",
    icon: "🏗️"
  },
  {
    id: 8,
    code: "TGC-ENE",
    name: "Tran Gia Energy JSC",
    shortRole: "Năng lượng Xanh & Tái chế",
    capitalRole: "Đầu tư & vận hành Green Energy City 200ha (Vốn 4.8 tỷ USD)",
    zones: "Điện gió 600MW, Solar 320MW, Hydrogen xanh 12ha, Nhà máy tái chế rác & nước",
    capacity: "Tự chủ 100% năng lượng tái tạo, cam kết 0% chôn lấp rác, giảm 250.000 tấn CO2/năm.",
    ceo: "Viện Năng lượng Xanh TGCG",
    icon: "⚡"
  },
  {
    id: 9,
    code: "TGC-MAR",
    name: "Tran Gia Marina JSC",
    shortRole: "Bến Du thuyền & Cảng biển Quốc tế",
    capitalRole: "Vận hành cảng hành khách quốc tế, bến siêu du thuyền & hàng không tư nhân",
    zones: "Durian Marina Port (300ha - 4.5 tỷ USD) & Private Aviation Sky Marina (200ha)",
    capacity: "Đón 800–1.200 siêu du thuyền, tàu biển 150.000 DWT & 80 vị trí chuyên cơ.",
    ceo: "Khối Hàng hải & Hàng không TGCG",
    icon: "🛥️"
  },
  {
    id: 10,
    code: "TGC-TRV",
    name: "Tran Gia Travel JSC",
    shortRole: "Du lịch, Lữ hành & Văn hóa Di sản",
    capitalRole: "Khai thác du lịch di sản Mekong, lễ hội quốc tế & lữ hành siêu sang",
    zones: "Bảo tàng Di sản 68m, Công viên Chợ nổi 150ha, Trường đua ghe Ngo, Safari điện",
    capacity: "Đón hàng chục triệu lượt khách quốc tế/năm, kết nối di sản UNESCO Mekong.",
    ceo: "Khối Du lịch & Văn hóa TGCG",
    icon: "🧭"
  }
];

const ICONIC_BUILDINGS_SUMMARY = [
  { name: "1. Durian Crown Tower", desc: "Tháp 68 tầng (420-480m) • 8.5 Tỷ USD", link: "du-an-trong-diem.html#b1", icon: "👑" },
  { name: "2. Floating Eco Villas", desc: "3.500 Biệt thự nổi kính 3D • 7.0 Tỷ USD", link: "du-an-trong-diem.html#b2", icon: "🏝️" },
  { name: "3. Durian Marina Port", desc: "Cảng 1.200 du thuyền & 150.000 DWT • 4.5 Tỷ USD", link: "du-an-trong-diem.html#b3", icon: "⚓" },
  { name: "4. Durian Links Golf Club", desc: "Sân Golf 36 hố chuẩn PGA • 2.8 Tỷ USD", link: "du-an-trong-diem.html#b4", icon: "⛳" },
  { name: "5. Education & Medical City", desc: "Đại học 40.000 SV & Viện 3.500 giường • 4.0 Tỷ USD", link: "du-an-trong-diem.html#b5", icon: "🏥" },
  { name: "6. Durian Arena & Water Plaza", desc: "SVĐ 100.000 chỗ & Quảng trường 18ha • 3.2 Tỷ USD", link: "du-an-trong-diem.html#b6", icon: "🏟️" },
  { name: "7. Private Aviation & Sky Marina", desc: "Sân bay chuyên cơ đường băng 3.200m • 2.0 Tỷ USD", link: "du-an-trong-diem.html#b7", icon: "✈️" }
];

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return file;
}

function renderHeaderAndFooter() {
  const currentPage = getCurrentPage();
  const headerPlaceholder = document.getElementById('app-header');
  const footerPlaceholder = document.getElementById('app-footer');

  if (headerPlaceholder) {
    const subCardsHtml = SUBSIDIARIES_DATA.map(s => `
      <a href="he-sinh-thai.html#sub-${s.id}" class="mega-card" onclick="openSubsidiaryModal(${s.id}); return false;">
        <div class="mega-thumb">${s.icon}</div>
        <div class="mega-info">
          <h5>${s.id}. ${s.name}</h5>
          <p>${s.shortRole}</p>
        </div>
      </a>
    `).join('');

    const projectCardsHtml = ICONIC_BUILDINGS_SUMMARY.map(b => `
      <a href="${b.link}" class="mega-card">
        <div class="mega-thumb">${b.icon}</div>
        <div class="mega-info">
          <h5>${b.name}</h5>
          <p>${b.desc}</p>
        </div>
      </a>
    `).join('');

    headerPlaceholder.innerHTML = `
      <div class="top-bar">
        <div class="container top-bar-inner">
          <div class="top-bar-info">
            <span>🏛️ <strong>CÔNG TY CỔ PHẦN TRẦN GIA CAPITAL GROUP (TGCG)</strong></span>
            <span>📍 Văn phòng Đại diện: 35 Hùng Vương, Ba Đình, Hà Nội</span>
          </div>
          <div class="top-bar-info">
            <a href="tel:0847770668">📞 0847770668</a>
            <a href="mailto:tgcg.vn.com@gmail.com">✉️ tgcg.vn.com@gmail.com</a>
            <a href="nop-ho-so.html" style="color: var(--emerald-primary); font-weight: 600;">⚡ Cổng Nộp Hồ Sơ Online</a>
          </div>
        </div>
      </div>

      <header class="site-header" id="stickyHeader">
        <div class="container header-inner">
          <a href="index.html" class="brand-logo" title="Trần Gia Capital Group - Trang chủ">
            <div class="logo-emblem">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </div>
            <div class="logo-text-wrap">
              <span class="logo-title">TRẦN GIA CAPITAL</span>
              <span class="logo-subtitle">GROUP • TGCG GLOBAL</span>
            </div>
          </a>

          <button class="mobile-toggle" onclick="document.getElementById('mainNav').classList.toggle('mobile-open')">☰</button>

          <nav class="main-nav" id="mainNav">
            <div class="nav-item">
              <a href="gioi-thieu.html" class="nav-link ${currentPage === 'gioi-thieu.html' ? 'active' : ''}" data-i18n="nav_about">Giới thiệu</a>
            </div>

            <div class="nav-item">
              <a href="he-sinh-thai.html" class="nav-link ${currentPage === 'he-sinh-thai.html' ? 'active' : ''}">
                <span data-i18n="nav_eco">Hệ sinh thái TGCG</span> <span class="caret">▼</span>
              </a>
              <div class="mega-menu">
                <div class="mega-header">
                  <h4>Hệ Sinh Thái TGCG & 10 Công Ty Thành Viên</h4>
                  <a href="he-sinh-thai.html">Xem toàn bộ Hồ sơ Năng lực & Tầm nhìn →</a>
                </div>
                <div class="mega-grid">
                  ${subCardsHtml}
                </div>
              </div>
            </div>

            <div class="nav-item">
              <a href="quy-tap-doan.html" class="nav-link ${currentPage === 'quy-tap-doan.html' ? 'active' : ''}" data-i18n="nav_fund">Quỹ Tập đoàn</a>
            </div>

            <div class="nav-item">
              <a href="du-an-trong-diem.html" class="nav-link ${currentPage === 'du-an-trong-diem.html' ? 'active' : ''}">
                <span data-i18n="nav_project">Dự án Trọng điểm</span> <span class="caret">▼</span>
              </a>
              <div class="mega-menu">
                <div class="mega-header">
                  <h4>Đại Dự Án The Breath of Mekong Sea (4.000ha - 50 Tỷ USD)</h4>
                  <a href="du-an-trong-diem.html">Xem Bảng Thông Số Master Spec →</a>
                </div>
                <div class="mega-grid">
                  ${projectCardsHtml}
                  <a href="du-an-trong-diem.html#master-table" class="mega-card" style="background: rgba(212,175,55,0.12); border-color: var(--gold-primary);">
                    <div class="mega-thumb">📋</div>
                    <div class="mega-info">
                      <h5>Bảng Tổng Hợp 14 Phân Khu</h5>
                      <p>Master Specification Table • 4.000 Ha</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="nav-item">
              <a href="nang-luong-xanh.html" class="nav-link ${currentPage === 'nang-luong-xanh.html' ? 'active' : ''}" data-i18n="nav_energy">Năng lượng xanh & Tái chế</a>
            </div>

            <div class="nav-item">
              <a href="di-san-van-hoa.html" class="nav-link ${currentPage === 'di-san-van-hoa.html' ? 'active' : ''}" data-i18n="nav_heritage">Di sản Văn hóa</a>
            </div>

            <div class="nav-item">
              <a href="phap-ly-hop-tac.html" class="nav-link ${currentPage === 'phap-ly-hop-tac.html' ? 'active' : ''}" data-i18n="nav_legal">Pháp lý & Hợp tác</a>
            </div>

            <div class="nav-item">
              <a href="thi-truong-tin-tuc.html" class="nav-link ${currentPage === 'thi-truong-tin-tuc.html' ? 'active' : ''}" data-i18n="nav_market">Thị trường & Tin tức</a>
            </div>
          </nav>

          <div class="header-actions">
            <div class="lang-switcher" title="Chuyển đổi ngôn ngữ VN / EN">
              <button class="lang-btn active" id="btnLangVN" onclick="switchLanguage('VN')">VN</button>
              <button class="lang-btn" id="btnLangEN" onclick="switchLanguage('EN')">EN</button>
            </div>
            <a href="nop-ho-so.html" class="btn btn-gold header-cta" data-i18n="nav_cta">Hợp tác Đầu tư / Kết nối Quỹ</a>
          </div>
        </div>
      </header>
    `;
  }

  if (footerPlaceholder) {
    const footerSubLinks = SUBSIDIARIES_DATA.map(s => `
      <li><a href="#sub-modal" onclick="openSubsidiaryModal(${s.id}); return false;">▸ ${s.id}. ${s.name}</a></li>
    `).join('');

    footerPlaceholder.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="brand-logo" style="margin-bottom: 18px;">
                <div class="logo-emblem">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  </svg>
                </div>
                <div class="logo-text-wrap">
                  <span class="logo-title">TRẦN GIA CAPITAL GROUP</span>
                  <span class="logo-subtitle">TRAN GIA CAPITAL GROUP JSC (TGCG)</span>
                </div>
              </div>
              <p style="color: var(--text-muted); margin-bottom: 18px; line-height: 1.7;">
                Định chế Đầu tư & Phát triển Bền vững Quốc tế kiến tạo siêu quần thể sinh thái biển <strong>The Breath of Mekong Sea (4.000ha - 50 Tỷ USD)</strong> theo chuẩn ESG & Net Zero Carbon Neutral.
              </p>
              <ul class="footer-contact-list">
                <li>🏢 <span><strong>Tên đơn vị:</strong> CÔNG TY CỔ PHẦN TRẦN GIA CAPITAL GROUP (TRAN GIA CAPITAL GROUP JOINT STOCK COMPANY - TGCG)</span></li>
                <li>📍 <span><strong>Địa chỉ / Văn phòng Đại diện:</strong> 35 Hùng Vương, Ba Đình, Hà Nội</span></li>
                <li>📞 <span><strong>Điện thoại:</strong> <a href="tel:0847770668" style="color: var(--gold-light); font-weight:600;">0847770668</a></span></li>
                <li>✉️ <span><strong>Email:</strong> <a href="mailto:tgcg.vn.com@gmail.com" style="color: var(--gold-light); font-weight:600;">tgcg.vn.com@gmail.com</a></span></li>
                <li>🌐 <span><strong>Website:</strong> <a href="https://tgcg.vn" target="_blank" style="color: var(--emerald-primary); font-weight:600;">tgcg.vn</a></span></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Danh Mục Chuyên Trang</h4>
              <ul class="footer-links">
                <li><a href="index.html">▸ Trang chủ TGCG</a></li>
                <li><a href="gioi-thieu.html">▸ Giới thiệu Tập đoàn</a></li>
                <li><a href="he-sinh-thai.html">▸ Tầm nhìn & Hồ sơ Năng lực</a></li>
                <li><a href="quy-tap-doan.html">▸ Quỹ Tập đoàn & Vốn FDI</a></li>
                <li><a href="du-an-trong-diem.html">▸ Đại dự án The Breath of Mekong Sea</a></li>
                <li><a href="nang-luong-xanh.html">▸ Năng lượng Xanh & Tái chế</a></li>
                <li><a href="di-san-van-hoa.html">▸ Di sản Văn hóa Mekong</a></li>
                <li><a href="phap-ly-hop-tac.html">▸ Hồ sơ Pháp lý & Quy trình Hợp tác</a></li>
                <li><a href="thi-truong-tin-tuc.html">▸ Thị trường Chứng khoán & Tin tức</a></li>
                <li><a href="nop-ho-so.html" style="color: var(--gold-light); font-weight: 600;">▸ Cổng Nộp Hồ Sơ Hợp Tác Online</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>10 Công Ty Thành Viên (Click xem hồ sơ)</h4>
              <ul class="footer-links">
                ${footerSubLinks}
              </ul>
            </div>

            <div class="footer-col">
              <h4>Tiêu Chuẩn ESG & Minh Bạch</h4>
              <p style="color: var(--text-muted); margin-bottom: 14px;">
                Cam kết 100% Năng lượng tái tạo, 0% chôn lấp rác thải, bảo tồn 900ha rừng ngập mặn Blue Carbon và định hướng hồ sơ Di sản UNESCO.
              </p>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <a href="phap-ly-hop-tac.html" class="badge-pill badge-emerald" style="text-align:center; padding: 8px;">✔ Chuẩn ESG & Net Zero 2050</a>
                <a href="quy-tap-doan.html" class="badge-pill badge-gold" style="text-align:center; padding: 8px;">✔ Minh bạch Kiểm toán & FDI/PPP</a>
                <a href="nop-ho-so.html" class="btn btn-outline-gold" style="margin-top: 8px; font-size: 0.8rem;">Đăng ký Kết nối Quỹ Đầu tư</a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div>
              © 2026 <strong>CÔNG TY CỔ PHẦN TRẦN GIA CAPITAL GROUP (TGCG)</strong>. All Rights Reserved. | Văn phòng Đại diện: 35 Hùng Vương, Ba Đình, Hà Nội.
            </div>
            <div style="display: flex; gap: 20px;">
              <a href="phap-ly-hop-tac.html">Chính sách bảo mật</a>
              <a href="nang-luong-xanh.html">Tiêu chuẩn ESG</a>
              <a href="phap-ly-hop-tac.html">Pháp lý & Bản quyền</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Modal Chi Tiết Công Ty Thành Viên -->
      <div class="modal-backdrop" id="subsidiaryModal" onclick="if(event.target===this) closeSubsidiaryModal()">
        <div class="modal-window" id="subsidiaryModalContent"></div>
      </div>
    `;
  }
}

// Modal Popup for any of the 10 Subsidiaries
function openSubsidiaryModal(id) {
  const sub = SUBSIDIARIES_DATA.find(item => item.id === id);
  if (!sub) return;
  const modal = document.getElementById('subsidiaryModal');
  const content = document.getElementById('subsidiaryModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <button class="modal-close" onclick="closeSubsidiaryModal()">✕</button>
    <span class="section-tag">Đơn vị Thành viên #${sub.id} • Mã định danh: ${sub.code}</span>
    <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--gold-light); margin-bottom: 8px;">
      ${sub.icon} ${sub.name}
    </h2>
    <p style="color: #fff; font-weight: 600; margin-bottom: 20px;">
      Trực thuộc: CÔNG TY CỔ PHẦN TRẦN GIA CAPITAL GROUP (TGCG)
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
      <div class="luxury-card" style="padding: 16px;">
        <span style="font-size: 0.75rem; color: var(--text-muted);">LĨNH VỰC CHUYÊN BIỆT</span>
        <strong style="display:block; color: var(--gold-light); font-size: 1rem; margin-top: 4px;">${sub.shortRole}</strong>
      </div>
      <div class="luxury-card" style="padding: 16px;">
        <span style="font-size: 0.75rem; color: var(--text-muted);">ĐIỀU HÀNH & QUẢN TRỊ</span>
        <strong style="display:block; color: #6ee7b7; font-size: 1rem; margin-top: 4px;">${sub.ceo}</strong>
      </div>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="color: var(--gold-light); margin-bottom: 6px;">1. Vai trò Chiến lược trong Hệ sinh thái TGCG:</h4>
      <p style="color: #cbd5e1;">${sub.capitalRole}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="color: var(--gold-light); margin-bottom: 6px;">2. Phân khu Dự án Phụ trách (The Breath of Mekong Sea):</h4>
      <p style="color: #cbd5e1;">${sub.zones}</p>
    </div>
    <div style="margin-bottom: 24px;">
      <h4 style="color: var(--gold-light); margin-bottom: 6px;">3. Năng lực Triển khai & Cam kết ESG:</h4>
      <p style="color: #cbd5e1;">${sub.capacity}</p>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px; border-top: 1px solid var(--border-subtle); padding-top: 18px;">
      <a href="he-sinh-thai.html" class="btn btn-outline-gold">Xem Hồ Sơ Hệ Sinh Thái</a>
      <a href="nop-ho-so.html" class="btn btn-gold">Kết Nối Hợp Tác Với Đơn Vị Này</a>
    </div>
  `;
  modal.classList.add('open');
}

function closeSubsidiaryModal() {
  const modal = document.getElementById('subsidiaryModal');
  if (modal) modal.classList.remove('open');
}

// Language Switcher VN / EN
const I18N_DICT = {
  VN: {
    nav_about: "Giới thiệu",
    nav_eco: "Hệ sinh thái TGCG",
    nav_fund: "Quỹ Tập đoàn",
    nav_project: "Dự án Trọng điểm",
    nav_energy: "Năng lượng xanh & Tái chế",
    nav_heritage: "Di sản Văn hóa",
    nav_legal: "Pháp lý & Hợp tác",
    nav_market: "Thị trường & Tin tức",
    nav_cta: "Hợp tác Đầu tư / Kết nối Quỹ"
  },
  EN: {
    nav_about: "About TGCG",
    nav_eco: "TGCG Ecosystem",
    nav_fund: "Corporate Fund",
    nav_project: "Flagship Project",
    nav_energy: "Green Energy & Recycling",
    nav_heritage: "Cultural Heritage",
    nav_legal: "Legal & Partnership",
    nav_market: "Market & Fund News",
    nav_cta: "Investment & Fund Portal"
  }
};

function switchLanguage(lang) {
  localStorage.setItem('tgcg_lang', lang);
  const btnVN = document.getElementById('btnLangVN');
  const btnEN = document.getElementById('btnLangEN');
  if (btnVN && btnEN) {
    btnVN.classList.toggle('active', lang === 'VN');
    btnEN.classList.toggle('active', lang === 'EN');
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N_DICT[lang] && I18N_DICT[lang][key]) {
      el.textContent = I18N_DICT[lang][key];
    }
  });
}

// Sticky Header Scroll & Animated Number Counter
function initBehaviors() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('stickyHeader');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  // Number Counters on Scroll
  const counters = document.querySelectorAll('.js-counter');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          let current = 0;
          const duration = 1800;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + suffix;
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(c => observer.observe(c));
  }

  // Saved language
  const savedLang = localStorage.getItem('tgcg_lang') || 'VN';
  if (savedLang === 'EN') {
    switchLanguage('EN');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeaderAndFooter();
  initBehaviors();
});
