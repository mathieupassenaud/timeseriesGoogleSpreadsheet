var sheetID = "";

function doGet(request){
  var values = new Array();
  var d = new Date();
  values[0] = d.getTime();
  values[1] = request.parameter.device;
  values[2] = request.parameter.proximity;
  values[3] = request.parameter.light;
  values[4] = request.parameter.ax.replace(".", ",");
  values[5] = request.parameter.ay.replace(".", ",");
  values[6] = request.parameter.az.replace(".", ",");
  values[7] = request.parameter.rotationa;
  values[8] = request.parameter.rotationb;
  values[9] = request.parameter.rotationg;
  addLine(values);
  return ContentService.createTextOutput("ok");
}

function addLine(values) {
  var sheet = SpreadsheetApp.openById(sheetID);
  sheet.appendRow(values); 
}
