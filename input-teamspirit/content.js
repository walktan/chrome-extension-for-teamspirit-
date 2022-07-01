chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		inputKintai();
	}
});

function inputKintai() {
  console.log("すたーと");
  console.log($('iframe'));
  console.log("えんど");
}
