fetch(url).then(headersReceived).then(dataReceived);

function headersReceived(respnse) {
  return Response.json();
}

function dataReceived(respnse) {
  console.log(data);
}
