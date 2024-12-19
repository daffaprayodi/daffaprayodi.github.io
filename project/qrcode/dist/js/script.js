function inputLink(){
    var getUrl = document.getElementById("input_link").value;
    
    var demoParams = [
        {
            config: {
                text: getUrl,
                width: 1080,
                height: 1080,
                quietZone: 0,
                colorDark: "#0e4194",
                colorLight: "#ffffff",
                quietZone: 15,
                quietZoneColor: '#fff',
                logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
                //PI: '#f55066',
                correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
                logo:"img/fm.png"
            }
        }
    ]
    
var qrcodeTpl = document.getElementById("qrcodeTpl").innerHTML;
var container = document.getElementById('container');

for (var i = 0; i < demoParams.length; i++) {
    var qrcodeHTML = qrcodeTpl.replace(/\{title\}/, demoParams[i].title).replace(/{i}/, i);
    container.innerHTML=qrcodeHTML;
}
for (var i = 0; i < demoParams.length; i++) {
     var t=new QRCode(document.getElementById("qrcode_"+i), demoParams[i].config);
}
}