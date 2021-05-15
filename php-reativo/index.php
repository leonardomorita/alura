<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    
    <title>WebSocket</title>
  </head>

  <body>
    <output></output>
    <input type="text">

    <script>
      var ari = require('ari-client');
      var util = require('util');
    </script>
    
    <script>
      const output = document.querySelector('output');
      const input = document.querySelector('input');

      // Servidor onde aplicação enviará e receberá eventos (mensagens)
      // const ws = new WebSocket('ws://localhost:8001/');
      // wscat -c "ws://172.16.2.20:8088/ari/events?api_key=api:api&app=hello-world"
      const ws = new WebSocket('ws://172.16.2.20:8088/ari/channels/api_key=api:api');
  
      // input.addEventListener('keypress', e => {
      //   if (e.key == 'Enter') {
      //     const div = document.createElement('div');
      //     const valorInput = input.value;

      //     div.textContent = `Eu: ${valorInput}`;
      //     output.append(div);

      //     // Envia evento (mensagem)
      //     ws.send('bosta');

      //     input.value = '';
      //   }
      // });

      // Escuta evento (mensagem)
      ws.addEventListener('message', message => {
        const div = document.createElement('div');

        div.textContent = `Outro: ${message.data}`;
        output.append(div);
      });
    </script>

    <script src="./assets/js/scripts.js"></script>
  </body>
</html>