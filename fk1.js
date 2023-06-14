var url = window.location.pathname;
if (url == "/nets-tmr-pac-pad/viewCustomerVehicle.do") {
var url = getAppPath() + "/nbaQuotationQuick.do?processCode=wechatManualPush";
$.ajax({
    type: "GET",
    url: url,
    async: false,
    success: function (data) {
		window.location.href = data.yourTemplateUrl; 
    }
});
} else if (url == "/online/insurance/index.html") {
window.location.href="https://hcz-static.pingan.com.cn/online/insurance/index.html?mediaSource=SC03-YJXB-DIRECT-HCZ$SHOUYEGONGJULAN";
} else {
    window.open("http://btp-oms-pac-openresty-prd.paic.com.cn/nets-tmr-pac-pad/viewCustomerVehicle.do", "target");
}
