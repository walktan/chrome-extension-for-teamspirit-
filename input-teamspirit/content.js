const startAt = "10:00";
const endAt = "19:30";

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		inputKintai();
	}
});

const inputKintai = async () => {
  console.log("start inputKintai()");
  for ( const elem of $('table.month_frame td#mainTableArea tr td.vst.day_time0') ){
    elem.click();
    isClicked = true;;
    await input(elem);
    await update(elem);
  };
  console.log("end inputKintai()");
}

const input = (elem) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      $('#dlgInputTimeTabs #startTime').val(startAt);
      $('#dlgInputTimeTabs #endTime').val(endAt);
      $('button#dlgInpTimeOk').click();
      resolve(true);
    }, 1000)
  })
}

const update = (elem) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000)
  })
}
