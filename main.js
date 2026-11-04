$(document).ready(function () {
  // =====================================
  // 1. THONG TIN 6 LOAI DONG VAT
  // =====================================

  const thongTinDongVat = {
    meo: {
      ten: "Mèo",
      tenTiengAnh: "THE INDEPENDENT",
      moTa: "Bạn độc lập, tinh tế và có thế giới riêng phong phú. Bạn thích tự quyết định, quan sát mọi thứ theo cách của mình và cần không gian riêng để nạp lại năng lượng.",
      hinhAnh: "img/meo.png",
    },

    cho: {
      ten: "Chó",
      tenTiengAnh: "THE LOYAL",
      moTa: "Bạn thân thiện, nhiệt tình và luôn trân trọng những người thân yêu. Bạn thích kết nối, sẵn sàng giúp đỡ và thường mang lại năng lượng tích cực cho mọi người.",
      hinhAnh: "img/cho.png",
    },

    cao: {
      ten: "Cáo",
      tenTiengAnh: "THE CLEVER",
      moTa: "Bạn nhanh nhạy, linh hoạt và biết cách tìm ra hướng giải quyết. Bạn thích thử thách, thường suy nghĩ nhiều bước và dễ thích nghi khi hoàn cảnh thay đổi.",
      hinhAnh: "img/cao.png",
    },

    cu_meo: {
      ten: "Cú mèo",
      tenTiengAnh: "THE WISE",
      moTa: "Bạn sâu sắc, ham học hỏi và có khả năng quan sát tốt. Bạn thường suy nghĩ cẩn thận trước khi hành động và thích hiểu rõ bản chất của vấn đề.",
      hinhAnh: "img/cu_meo.png",
    },

    tho: {
      ten: "Thỏ",
      tenTiengAnh: "THE GENTLE",
      moTa: "Bạn dịu dàng, tinh tế và biết quan tâm đến cảm xúc của người khác. Bạn yêu thích sự hài hòa, thường để ý những điều nhỏ bé và tạo cảm giác dễ chịu cho mọi người.",
      hinhAnh: "img/tho.png",
    },

    gau: {
      ten: "Gấu",
      tenTiengAnh: "THE CALM",
      moTa: "Bạn điềm tĩnh, kiên nhẫn và đáng tin cậy. Bạn không thích vội vàng, thường giữ bình tĩnh khi gặp khó khăn và luôn cố gắng hoàn thành điều mình đã bắt đầu.",
      hinhAnh: "img/gau.png",
    },
  };

  // =====================================
  // 2. DANH SACH 20 CAU HOI
  // =====================================

  const danhSachCauHoi = [
    {
      cauHoi:
        "Khi có một ngày nghỉ hoàn toàn rảnh rỗi, bạn thường muốn làm gì?",
      dapAn: [
        {
          noiDung: "Ở nhà tận hưởng thời gian yên tĩnh một mình.",
          dongVat: "meo",
        },
        { noiDung: "Hẹn gặp bạn bè hoặc người thân.", dongVat: "cho" },
        { noiDung: "Thử một hoạt động mới chưa từng làm.", dongVat: "cao" },
        {
          noiDung: "Đọc sách, xem phim tài liệu hoặc học điều mới.",
          dongVat: "cu_meo",
        },
      ],
    },

    {
      cauHoi: "Nếu được chọn một nơi để thư giãn, bạn chọn nơi nào?",
      dapAn: [
        { noiDung: "Một khu vườn nhỏ yên bình.", dongVat: "tho" },
        { noiDung: "Một căn nhà gỗ ấm áp giữa thiên nhiên.", dongVat: "gau" },
        { noiDung: "Một quán cà phê riêng tư.", dongVat: "meo" },
        { noiDung: "Một buổi dã ngoại cùng hội bạn.", dongVat: "cho" },
      ],
    },

    {
      cauHoi: "Bạn thích kiểu hoạt động nào nhất?",
      dapAn: [
        { noiDung: "Giải câu đố hoặc trò chơi chiến thuật.", dongVat: "cao" },
        {
          noiDung: "Tìm hiểu kiến thức và khám phá điều mới.",
          dongVat: "cu_meo",
        },
        { noiDung: "Chăm sóc cây cối hoặc thú cưng.", dongVat: "tho" },
        { noiDung: "Đi bộ, vận động và tận hưởng không khí.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Trong một nhóm đông người, bạn thường là người như thế nào?",
      dapAn: [
        {
          noiDung: "Nói chuyện với nhiều người và tạo không khí vui vẻ.",
          dongVat: "cho",
        },
        { noiDung: "Quan sát trước rồi mới tham gia.", dongVat: "meo" },
        { noiDung: "Đưa ra ý tưởng hoặc cách làm thú vị.", dongVat: "cao" },
        { noiDung: "Lắng nghe và suy nghĩ về câu chuyện.", dongVat: "cu_meo" },
      ],
    },

    {
      cauHoi: "Điều gì khiến bạn cảm thấy vui nhất?",
      dapAn: [
        { noiDung: "Được ở cạnh những người mình yêu quý.", dongVat: "cho" },
        { noiDung: "Có thời gian chăm sóc bản thân.", dongVat: "meo" },
        { noiDung: "Hoàn thành một thử thách khó.", dongVat: "cao" },
        { noiDung: "Có một ngày bình yên, không áp lực.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Khi gặp một người mới, bạn thường làm gì?",
      dapAn: [
        { noiDung: "Chủ động chào hỏi và bắt chuyện.", dongVat: "cho" },
        { noiDung: "Từ từ làm quen, không quá vội vàng.", dongVat: "tho" },
        { noiDung: "Quan sát cách họ cư xử.", dongVat: "cu_meo" },
        { noiDung: "Giữ sự thoải mái và không cố gây chú ý.", dongVat: "meo" },
      ],
    },

    {
      cauHoi: "Bạn bè thường tìm đến bạn khi họ cần điều gì?",
      dapAn: [
        { noiDung: "Một người lắng nghe và an ủi.", dongVat: "tho" },
        { noiDung: "Một người đưa ra lời khuyên hợp lý.", dongVat: "cu_meo" },
        { noiDung: "Một người giúp tìm cách giải quyết.", dongVat: "cao" },
        { noiDung: "Một người luôn có mặt khi cần.", dongVat: "cho" },
      ],
    },

    {
      cauHoi: "Trong tình bạn, điều gì quan trọng nhất với bạn?",
      dapAn: [
        {
          noiDung: "Tôn trọng không gian và lựa chọn của nhau.",
          dongVat: "meo",
        },
        { noiDung: "Sự chân thành và đồng hành lâu dài.", dongVat: "cho" },
        { noiDung: "Có thể chia sẻ và thấu hiểu cảm xúc.", dongVat: "tho" },
        { noiDung: "Có những cuộc trò chuyện sâu sắc.", dongVat: "cu_meo" },
      ],
    },

    {
      cauHoi: "Nếu xảy ra bất đồng, bạn thường chọn cách nào?",
      dapAn: [
        { noiDung: "Tìm cách thương lượng để cả hai cùng ổn.", dongVat: "cao" },
        { noiDung: "Bình tĩnh lắng nghe trước khi phản hồi.", dongVat: "gau" },
        {
          noiDung: "Nói rõ cảm xúc của mình một cách nhẹ nhàng.",
          dongVat: "tho",
        },
        { noiDung: "Cần thời gian riêng để suy nghĩ.", dongVat: "meo" },
      ],
    },

    {
      cauHoi: "Bạn thể hiện sự quan tâm với người khác như thế nào?",
      dapAn: [
        { noiDung: "Giúp đỡ bằng những hành động cụ thể.", dongVat: "cho" },
        { noiDung: "Nhớ những chi tiết nhỏ về họ.", dongVat: "tho" },
        { noiDung: "Đưa ra lời khuyên khi họ cần.", dongVat: "cu_meo" },
        { noiDung: "Âm thầm ở bên và hỗ trợ.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Khi đứng trước một vấn đề khó, bạn thường làm gì đầu tiên?",
      dapAn: [
        { noiDung: "Phân tích nguyên nhân và dữ kiện.", dongVat: "cu_meo" },
        { noiDung: "Thử nhiều hướng giải quyết khác nhau.", dongVat: "cao" },
        { noiDung: "Bình tĩnh chia vấn đề thành từng phần.", dongVat: "gau" },
        { noiDung: "Làm theo cảm nhận ban đầu.", dongVat: "meo" },
      ],
    },

    {
      cauHoi: "Khi phải đưa ra quyết định quan trọng, bạn dựa vào điều gì?",
      dapAn: [
        { noiDung: "Lý lẽ và thông tin đã tìm hiểu.", dongVat: "cu_meo" },
        { noiDung: "Kinh nghiệm và sự linh hoạt.", dongVat: "cao" },
        { noiDung: "Cảm xúc và điều mình trân trọng.", dongVat: "tho" },
        { noiDung: "Suy nghĩ kỹ, không quyết định vội.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Bạn học một kỹ năng mới bằng cách nào hiệu quả nhất?",
      dapAn: [
        { noiDung: "Đọc tài liệu và tìm hiểu nguyên lý.", dongVat: "cu_meo" },
        { noiDung: "Thực hành ngay và rút kinh nghiệm.", dongVat: "cao" },
        { noiDung: "Học cùng bạn bè để trao đổi.", dongVat: "cho" },
        { noiDung: "Tự học theo tốc độ của mình.", dongVat: "meo" },
      ],
    },

    {
      cauHoi: "Khi kế hoạch bất ngờ thay đổi, bạn sẽ thế nào?",
      dapAn: [
        { noiDung: "Nhanh chóng nghĩ ra phương án khác.", dongVat: "cao" },
        { noiDung: "Bình tĩnh điều chỉnh từng bước.", dongVat: "gau" },
        { noiDung: "Hỏi ý kiến mọi người để cùng xử lý.", dongVat: "cho" },
        { noiDung: "Cần một chút thời gian để thích nghi.", dongVat: "tho" },
      ],
    },

    {
      cauHoi: "Bạn thích vai trò nào khi làm việc nhóm?",
      dapAn: [
        { noiDung: "Người kết nối và hỗ trợ các thành viên.", dongVat: "cho" },
        {
          noiDung: "Người nghiên cứu và kiểm tra thông tin.",
          dongVat: "cu_meo",
        },
        { noiDung: "Người tìm ý tưởng và hướng đi mới.", dongVat: "cao" },
        { noiDung: "Người kiên trì hoàn thành phần việc.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Khi cảm thấy buồn hoặc căng thẳng, bạn thường làm gì?",
      dapAn: [
        { noiDung: "Tìm một người tin tưởng để tâm sự.", dongVat: "cho" },
        { noiDung: "Ở một mình để sắp xếp cảm xúc.", dongVat: "meo" },
        { noiDung: "Làm điều nhẹ nhàng giúp mình dễ chịu.", dongVat: "tho" },
        { noiDung: "Nghỉ ngơi và chờ tâm trạng ổn định.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Khi bị góp ý, phản ứng đầu tiên của bạn thường là gì?",
      dapAn: [
        {
          noiDung: "Suy nghĩ xem góp ý đó có hợp lý không.",
          dongVat: "cu_meo",
        },
        { noiDung: "Tìm cách cải thiện ngay.", dongVat: "cao" },
        { noiDung: "Hơi chạnh lòng nhưng vẫn ghi nhận.", dongVat: "tho" },
        { noiDung: "Bình tĩnh tiếp nhận và cân nhắc.", dongVat: "gau" },
      ],
    },

    {
      cauHoi: "Điều gì dễ khiến bạn mất năng lượng nhất?",
      dapAn: [
        {
          noiDung: "Phải giao tiếp liên tục trong thời gian dài.",
          dongVat: "meo",
        },
        { noiDung: "Mâu thuẫn hoặc không khí căng thẳng.", dongVat: "tho" },
        { noiDung: "Mọi thứ thiếu kế hoạch và hỗn loạn.", dongVat: "gau" },
        {
          noiDung: "Không được thử thách hay học điều mới.",
          dongVat: "cu_meo",
        },
      ],
    },

    {
      cauHoi: "Khi đạt được một mục tiêu, bạn thường cảm thấy thế nào?",
      dapAn: [
        { noiDung: "Muốn chia sẻ niềm vui với mọi người.", dongVat: "cho" },
        { noiDung: "Hài lòng vì đã nỗ lực đến cùng.", dongVat: "gau" },
        { noiDung: "Nghĩ đến mục tiêu tiếp theo.", dongVat: "cao" },
        { noiDung: "Muốn nhìn lại mình đã học được gì.", dongVat: "cu_meo" },
      ],
    },

    {
      cauHoi: "Bạn mong muốn người khác nhớ đến mình vì điều gì?",
      dapAn: [
        { noiDung: "Sự chân thành và đáng tin cậy.", dongVat: "cho" },
        { noiDung: "Sự tinh tế và biết quan tâm.", dongVat: "tho" },
        { noiDung: "Sự thông minh và sáng tạo.", dongVat: "cao" },
        { noiDung: "Sự điềm tĩnh và vững vàng.", dongVat: "gau" },
      ],
    },
  ];

  // =====================================
  // 3. HIEN THI CAU HOI
  // =====================================

  function hienThiCauHoi() {
    let noiDungHTML = "";

    $.each(danhSachCauHoi, function (index, cauHoi) {
      noiDungHTML += `
                <article class="question-card"
                         style="animation-delay: ${index * 0.06}s">

                    <div class="question-number">
                        CÂU ${index + 1} / 20
                    </div>

                    <h3>${cauHoi.cauHoi}</h3>

                    <div class="answer-list">
            `;

      $.each(cauHoi.dapAn, function (i, dapAn) {
        noiDungHTML += `
                    <label class="answer-option">

                        <input
                            type="radio"
                            name="cau-${index}"
                            value="${dapAn.dongVat}"
                        >

                        <span class="answer-letter">
                            ${String.fromCharCode(65 + i)}
                        </span>

                        <span>${dapAn.noiDung}</span>

                    </label>
                `;
      });

      noiDungHTML += `
                    </div>
                </article>
            `;
    });

    $("#danh-sach-cau-hoi").html(noiDungHTML);
  }

  // =====================================
  // 4. CAP NHAT THANH TIEN TRINH
  // =====================================

  function capNhatTienTrinh() {
    let soCauDaTraLoi = 0;

    for (let i = 0; i < danhSachCauHoi.length; i++) {
      if ($("input[name='cau-" + i + "']:checked").length > 0) {
        soCauDaTraLoi++;
      }
    }

    let phanTram = (soCauDaTraLoi / danhSachCauHoi.length) * 100;

    $("#dem-cau-hoi").text("Đã trả lời: " + soCauDaTraLoi + "/20 câu");

    $("#phan-tram").text(Math.round(phanTram) + "%");

    $("#tien-trinh").css("width", phanTram + "%");
  }

  // =====================================
  // 5. KHOI TAO CAU HOI
  // =====================================

  hienThiCauHoi();

  // =====================================
  // 6. NUT BAT DAU
  // =====================================

  $("#btn-bat-dau").on("click", function () {
    $("#trang-chu").fadeOut(500, function () {
      $("#khao-sat").fadeIn(700);

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        400,
      );
    });
  });

  // =====================================
  // 7. XU LY CHON DAP AN
  // =====================================

  $("#danh-sach-cau-hoi").on("change", "input[type='radio']", function () {
    let theCauHoi = $(this).closest(".question-card");

    theCauHoi.find(".answer-option").removeClass("selected");

    $(this).closest(".answer-option").addClass("selected");

    capNhatTienTrinh();
  });

  // =====================================
  // 8. TINH DIEM VA HIEN THI KET QUA
  // =====================================

  $("#btn-xem-ket-qua").on("click", function () {
    let soCauDaTraLoi = 0;

    // Kiem tra da tra loi du 20 cau
    for (let i = 0; i < danhSachCauHoi.length; i++) {
      if ($("input[name='cau-" + i + "']:checked").length > 0) {
        soCauDaTraLoi++;
      }
    }

    if (soCauDaTraLoi < danhSachCauHoi.length) {
      alert("Bạn hãy trả lời đầy đủ 20 câu hỏi nhé!");

      return;
    }

    // Tao bang diem cho 6 loai dong vat
    let diem = {
      meo: 0,
      cho: 0,
      cao: 0,
      cu_meo: 0,
      tho: 0,
      gau: 0,
    };

    // Cong diem cho tung loai
    for (let i = 0; i < danhSachCauHoi.length; i++) {
      let dongVatDuocChon = $("input[name='cau-" + i + "']:checked").val();

      diem[dongVatDuocChon]++;
    }

    // Tim diem cao nhat
    let diemCaoNhat = 0;

    for (let tenDongVat in diem) {
      if (diem[tenDongVat] > diemCaoNhat) {
        diemCaoNhat = diem[tenDongVat];
      }
    }

    // Tim tat ca loai dong vat co diem cao nhat
    let danhSachKetQua = [];

    for (let tenDongVat in diem) {
      if (diem[tenDongVat] === diemCaoNhat) {
        danhSachKetQua.push(tenDongVat);
      }
    }

    // Chon mot loai vat trong truong hop hoa diem
    // Neu hoa diem, lay dap an duoc chon o cau cuoi cung
    // co dong vat nam trong danh sach ket qua

    let dongVatKetQua = danhSachKetQua[0];

    for (let i = danhSachCauHoi.length - 1; i >= 0; i--) {
      let dapAnCuoi = $("input[name='cau-" + i + "']:checked").val();

      if (danhSachKetQua.includes(dapAnCuoi)) {
        dongVatKetQua = dapAnCuoi;

        break;
      }
    }

    // Lay thong tin loai dong vat
    let ketQua = thongTinDongVat[dongVatKetQua];

    // Tao giao dien ket qua
    let noiDungKetQua = `

            <div class="winner-card">

                <div class="winner-label">
                    BẠN LÀ
                </div>

                <img
                    class="winner-image"
                    src="${ketQua.hinhAnh}"
                    alt="${ketQua.ten}"
                >

                <div class="winner-english">
                    ${ketQua.tenTiengAnh}
                </div>

                <h3>${ketQua.ten}</h3>

                <p class="winner-description">
                    ${ketQua.moTa}
                </p>

                <div class="winner-score">
                    Điểm cao nhất:
                    <strong>${diemCaoNhat}/20</strong>
                </div>

            </div>

            <div class="score-section">

                <h3>🌿 Bản đồ tính cách của bạn</h3>

                <p>
                    Điểm số của từng loài vật dựa trên các lựa chọn của bạn.
                </p>

                <div class="score-list">

        `;

    // Hien thi diem cua 6 loai dong vat
    for (let tenDongVat in diem) {
      let phanTram = (diem[tenDongVat] / danhSachCauHoi.length) * 100;

      noiDungKetQua += `

                <div class="score-row">

                    <div class="score-name">
                        ${thongTinDongVat[tenDongVat].ten}
                    </div>

                    <div class="score-bar">
                        <div style="width: ${phanTram}%"></div>
                    </div>

                    <div class="score-number">
                        ${diem[tenDongVat]}
                    </div>

                </div>

            `;
    }

    noiDungKetQua += `
                </div>
            </div>
        `;

    // Dua ket qua vao trang HTML
    $("#thong-tin-ket-qua").html(noiDungKetQua);

    // Chuyen sang trang ket qua
    $("#khao-sat").fadeOut(500, function () {
      $("#ket-qua").fadeIn(800);

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        400,
      );
    });
  });

  // =====================================
  // 9. NUT LAM LAI KHAO SAT
  // =====================================

  $("#btn-lam-lai").on("click", function () {
    // Bo chon tat ca dap an
    $("#danh-sach-cau-hoi input[type='radio']").prop("checked", false);

    // Xoa mau dap an
    $(".answer-option").removeClass("selected");

    // Reset thanh tien trinh
    capNhatTienTrinh();

    // Quay lai trang chu
    $("#ket-qua").fadeOut(500, function () {
      $("#trang-chu").fadeIn(700);

      $("html, body").scrollTop(0);
    });
  });
});
