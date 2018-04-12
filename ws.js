var xPosition = 750;
var yPosition = 750;
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(getPositions()),
    1000
  )
  
  function getPositions()
  {
	 //var xPosition = Math.floor(Math.random() * 1000);
	 //var yPosition = Math.floor(Math.random() * 1000);
	 
	 xPosition=xPosition-10;
	 yPosition=yPosition-10;
	 
	 return xPosition+"value"+yPosition;
	 
	//var numberTwo = Math.floor(Math.random() * 4); 
  }
})
