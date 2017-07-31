
// make a POST request

var postJson = (url, json, cb) => {
  return new Promise((resolve,reject) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
      if (xmlhttp.readyState == 4) {
        if (cb) cb(xmlhttp.status, xmlhttp.responseText);
        resolve({status: xmlhttp.status, responseText: xmlhttp.responseText});
      }
    };
    xmlhttp.send(JSON.stringify(json));
  });
}
