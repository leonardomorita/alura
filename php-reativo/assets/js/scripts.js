// http://localhost:8088
ari.connect('http://172.16.2.20:8088', 'api', 'api', clientLoaded);

// handler for client being loaded
function clientLoaded (err, client) {
  if (err) {
    throw err;
  }
  console.log(client);
}