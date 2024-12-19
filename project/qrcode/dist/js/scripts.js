function inputLink(){
    var getUrl = document.getElementById("input_link").value;
    // var getEnterprise = document.getElementById("linknet").value;
    // var getFm = document.getElementById("firstmedia").value;

    var getValueQR = document.querySelector('input[name="qr-value"]:checked').value;

    
    var getLogo = document.getElementsByName("qr-value");
    for(i=0;i<getLogo.length;i++){
        if(getLogo[i].checked){
            if(getLogo[i].value==="xlsatu"){
                var demoParams = [
                {
                    config: {
                        text: getUrl,
                        width: 1080,
                        height: 1080,
                        quietZone: 0,
                        colorDark: "#164194",
                        colorLight: "#ffffff",
                        quietZone: 15,
                        quietZoneColor: '#fff',
                        logoBackgroundColor: '#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
                        //PI: '#f55066',
                        correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
                        logo:"img/xlsatu.png"
                    }
                }
            ]
            }else{
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
            }
        }
    }
    var qrcodeTpl = document.getElementById("qrcodeTpl").innerHTML;
    var container = document.getElementById('qr-result');

    for (var i = 0; i < demoParams.length; i++) {
        var qrcodeHTML = qrcodeTpl.replace(/\{title\}/, demoParams[i].title).replace(/{i}/, i);
        container.innerHTML=qrcodeHTML;
    }
    for (var i = 0; i < demoParams.length; i++) {
        var t=new QRCode(document.getElementById("qrcode_"+i), demoParams[i].config);
    }

    document.querySelector('#qr--result-card').classList.remove("d-none");
    document.getElementById("qr-link-direct").innerHTML = getUrl;

}
