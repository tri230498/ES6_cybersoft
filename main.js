//================================== Bài tập 1: Chuyển màu ngôi nhà =================================

let arrColor = ["red", "green", "blue", "orange", "purple", "salmon", "pink"];

//cách 1: Tạo html button
// const renderButton = () => {
//input: arrColor
//output: <btn>....</btn> stringHTML
// let html = "";
//process ( giải thuật )

// chạy mảng lấy ra từng phần tử

// for (let index = 0; index < arrColor.length; index++) {
// Mỗi lần duyệt lấy ra một màu
// let color = arrColor[index];

// let button = `<button onclick="changeColor('${color}')" class="btn mt-2 me-2 text-white" style="background-color: ${color}">${color}</button>`;
// Nối button vào chuỗi output
//   html += button;
// }
// in chuỗi output ra giao diện
//   document.querySelector("#colors").innerHTML = html;
// };
// end renderButton

// const changeColor = (color) => {
//   document.querySelector("#home").style.color = color;
// };
// end changeColor

//cách 2: tạo button = DOM (document.createElement)

const renderButtonElement = () => {
  // debugger
  for (let i in arrColor) {
    // console.log(arrColor)
    let color = arrColor[i];
    // Duyệt qua 1 màu sẽ tạo 1 button
    let button = document.createElement("button"); // tạo ra 1 thẻ chưa có trên giao diện giống như domId
    button.id = "btn" + color;
    button.innerHTML = color;
    button.style.backgroundColor = color;
    button.className = "btn text-white m-2";
    button.onclick = function () {
      document.querySelector("#home").style.color = color;
    };

    document.querySelector("#colors").appendChild(button);
  }
};

window.onload = function () {
  renderButtonElement();
};

//================== Destructuring ========================

let hocVienObject = {
  maHocVien: 01,
  tenHocVien: "Nguyễn Huỳnh Phước Trí",
  thongTinHocVien: {
    soDienThoai: "0869059580",
    diaChi: "117 Tân Cảng, Q.Bình Thạnh",
  },
};

//------------- ES5 ----------

// let maHocVien = hocVienObject.maHocVien;
// let tenHocVien = hocVienObject.tenHocVien;

// console.log(maHocVien, tenHocVien)

//------------- ES6 ----------
hocVienObject.soDienThoai = "0382403647";
// console.log(hocVienObject)
let { maHocVien, tenHocVien } = hocVienObject;

// console.log(`${maHocVien} ${tenHocVien}`);
// console.log(hocVienObject.tenHocVien);
// console.log(hocVienObject)

let thongTin = { ...hocVienObject };
thongTin.soDienThoai = "0947988472";
// console.log(thongTin.soDienThoai)
// console.log(thongTin)
// console.log(hocVienObject)

//=========================================================//

// console.log("-Cách 1 bốc tách phần tử trong array ES6:")

let sv = [
  1,
  "Nguyễn Huỳnh Phước Trí",
  function () {
    // console.log('Hello Trí')
  },
];

// console.log(sv[0])
// console.log(sv[1])
// sv[2]();

// console.log("-Cách 2 bốc tách phần tử trong array ES6:")

let [maSV, tenSV, hienThi] = [
  1,
  "Nguyễn Huỳnh Phước Trí",
  function () {
    // console.log('Hello Trí')
  },
];

// console.log('maSV', maSV);
// console.log('tenSV', tenSV);
// hienThi();

//================================= Object Literal =============================

let productId = 1;
let productName = "Iphone X";
let productPrice = "1500$";
let showInfo = function () {
  console.log("info");
};

let prod = {
  productId,
  productName,
  productPrice,
  showInfo,
};

// console.log(prod);
// prod.showInfo();

//======================================= spread operator ================================

let object1 = { id: 70, name: "Nguyễn Văn A" };
let object2 = { ...object1, phoneNumber: "09090909" };

// console.log('object1', object1);
// console.log('object2', object2);

var arr1 = [0, 1, 2, 3, 4];
var arr1 = [...arr1, 5, 6, 7];
let arr2 = [-1, ...arr1, 5, 6, 7, 8];
let arr3 = [...arr2, 9, 10];

// console.log("arr1", arr1);
// console.log("arr2", arr2);
// console.log("arr3", arr3);

//======================================= Dynamic key =======================================

let tenThuocTinh = "Mã sản phẩm";

let sanPham = {
  [tenThuocTinh]: 1,
};

// console.log(sanPham);
// console.log(sanPham[tenThuocTinh]);

//===================================== for of ==============================================

let arrProd = [
  { id: 1, name: "product1", price: 1000 },
  { id: 2, name: "product2", price: 2000 },
  { id: 3, name: "product3", price: 3000 },
];
// ---- duyệt các object trong mảng dùng for of -----
for (let prod of arrProd) {
  console.log(prod);
}

// arrProd.forEach(function (course, index, array) {
//   console.log(index, course);
// });

//============================= for in ==============================

//--------- duyệt và lấy được các element trong array ---------
for (let index in arrProd) {
  console.log(arrProd[index]);
}

//---- duyệt các element trong mảng base -----
// for (var i = 0; i < arrProd.length; i++) {
//   console.log(arrProd[i]);
// }

//----------- for in - dùng cho object lấy từng key ra ---------------
let prod1 = {
  productId,
  productName,
  productPrice,
  showInfo
}
// console.log(prod1.productId);

//---------- Gọi các key trong object ra nhưng hàm thì không được gọi ------------
// for (let key in prod1) {
//   console.log(key, prod1[key]);
// }

//----- Gọi hàm ra luôn trong object ---------
// for (let key in prod1) {
//   if (typeof prod1[key] !== 'function') {
//     console.log(key, prod1[key]);
//   } else {
//     prod1[key]();
//   }
// }

//=================================================== Bài tập 2 ==============================================

document.querySelector("#frmNhanVien").onsubmit = function (e) {
  // Sự kiện reload browser
  e.preventDefault();
  console.log(123);

  let arrInput = document.querySelectorAll(
    "#frmNhanVien input, #frmNhanVien select"
  );
  let nhanVien = {}; // dynamic object
  //arrInput = [input, input, input, select];
  for (let input of arrInput) {
    // let id = input.id;
    // let value = input.value;
    let { id, value } = input;
    // Mỗi lần duyệt qua 1 input thì clone object ra và thêm vào 1 thuộc tính dynamic key
    // nhanVien = { ...nhanVien, [id]: value };
    nhanVien[id] = value;
  }

  console.log(nhanVien);
  //Talbe nhân viên -> in ra màn hình
  //nhanVien = {maNhanVien:1, tenNhanVien: 'Nguyen Van A', luongCB: 1000, chucVu: 'GiamDoc'}
  let html = "";
  for (let key in nhanVien) {
    html += `<tr>
      <th> ${key}</th>
      <th> ${nhanVien[key]}</th>
    
    
    </tr>`;
  }

  document.querySelector("#tbNhanVien").innerHTML = html;
};

//========================================== Callback function =============================

// Callback function là funtion đóng vai trò là tham số được gọi trong function khác.

function main(callback) {
  document.querySelector("#content").innerHTML = callback("Cybersoft");
}

// function renderSectionRadius(title) {
//   return `<section class="bg-warning text-white text-center p-3" style="border-radius: 5px">${title}</section>`;
// }

// function renderArticle(title) {
//   return `<article class="bg-primary text-white text-center p-3" style="border-radius: 5px">${title}</article>`;
// }

// main(renderArticle);

main((title) => {
  return `<section class="bg-warning text-white text-center p-3" style="border-radius: 5px">${title}</section>`;
});
