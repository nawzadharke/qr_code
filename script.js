//fila java scripte 
const qrCodeWrapper = document.getElementById('qr-code-wrapper');
const form = document.querySelector('form');
const create = document.getElementById('submit');


const getFormEntries = () => {
  const formData = new FormData(form)
  return Object.fromEntries(formData)
}


//* basic 
// var qrCode = new QRCode({
//   content: "nawzad",
//   container:"svg",
//   color: "red",
//   join: true,
// })


const createDownloadBtn = (file) => {
  const url = URL.createObjectURL(file);
  const btn = document.createElement('a');
  btn.innerText = 'دابەزاندن';
  btn.setAttribute('href', url);
  btn.setAttribute('دابەزاندن', 'qr-code.svg');
  qrCodeWrapper.appendChild(btn);
}


const createFile = () => {
  const svg = qrCodeWrapper.querySelector('svg');
  const svgData = new XMLSerializer().serializeToString(svg);
  return new File([svgData], 'qr-code.svg', {
    type: 'image/svg+xml',
    lastModified: Date.now()
  });
}

create.addEventListener('click', (e) => {
  e.preventDefault();
  const entries = getFormEntries();
  var qrCode = new QRCode({
    content: `${entries.name}`,
    container:"svg",
    color: entries.color,
    join: true,
  })
  qrCodeWrapper.innerHTML = qrCode.svg();
  createDownloadBtn(createFile());
})







