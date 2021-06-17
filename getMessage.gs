function doGet(e){
  var passedName = e.parameter.name;
  var passedEmail = e.parameter.email;
  var passedMsg = e.parameter.msg;

  
  var date11= ""+new Date();

  var SHEETID="YOURSHEETIDWILLGOHERE1CHECKTHESHEETURL";
  var sheet2 = SpreadsheetApp.openById(SHEETID).getSheetByName("Sheet1"); 
  
  sheet2.insertRowBefore(2);
  var insert_range=sheet2.getRange(2, 1, 1, 5);
  insert_range.setValues([[date11,passedName,passedEmail,passedMsg,"Github Site"]]);

    var returnValue =[{'status':'Your Message have been sent!'}];
  
    return ContentService.createTextOutput(JSON.stringify(returnValue)).setMimeType(ContentService.MimeType.JAVASCRIPT);
  
}; 