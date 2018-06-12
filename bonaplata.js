var five = require("johnny-five");
var board = new five.Board();
var year = 1800;
var centre = "      ";



board.on("ready", function() {

  //APARTAT DE LES BOMBETES
  var relayBombeta = new five.Relay({
    pin: "2"
  });
  var relayBombetaAddVoltage = new five.Relay({
    pin: "3"
  });
  var leds1 = new five.Led({
    pin: "13"
  });
  var leds2 = new five.Led({
    pin: "12"
  });
  var leds3 = new five.Led({
    pin: "11"
  });
  var relayFum = new five.Relay({
    pin: "8"
  });
  var relayFumDos = new five.Relay({
    pin: "9"
  });

  //APARTAT DELS MOTORS
  var relayMotors = new five.Relay({
    pin: "4"
  });

  //PANTALLA
  var lcd = new five.LCD({
    controller: "PCF8574AT"
  });

  //accions...

  relayFum.on();
  relayFumDos.on();
  lcd.print("Starting...");
  lcd.cursor(1, 25);
  setTimeout(function() {
    yearIncreasing();
  }, 1500);  

  //REGION FUNCTIONS

  //FUNCIÓ DE TIMING
    function yearIncreasing() {      
      if (year == 1900) {
        year = 1800;
      }
      else if (year <= 1825) {    
        //Si l'any és més petit o igual que 1825, es fa crida al counter amb 1800ms
        console.log(year);
        counter(25);
      }
      else if(year < 1831) {
        //Si l'any és més petit que 1831, fer el compte però més lent
        console.log("year");
        lcd.clear();
        lcdPrint(0, centre + year);
        counter(800);
        lcd.cursor(1, 25);
      }
      else if(year == 1831) {
        inaugurate();
        lcdPrint(0, centre + year);
        lcdPrint(1, "  Inauguracio'");
        counter(4500);
        lcd.cursor(1, 25);
      }
      else if(year < 1835) {
        //Fer el compte igual però més lent
        console.log(year);
        lcd.clear();
        lcdPrint(0, centre + year);
        counter(4000);
        lcd.cursor(1, 25);
      }
      else if(year == 1835) {
        //S'acaba tot,

        console.log("engines & all:off");
        lcd.clear();
        lcdPrint(0, "5 Agost de " + year);
        lcdPrint(1, "     INCENDI    ");
        lcd.cursor(1, 25);
        burn();
        setTimeout(function() {
          disconnect();
        }, 1000);        
      }
    }
  function counter(time) {
    setTimeout(function() {
      year++;
      yearIncreasing();
    }, time);
  }


  //PANTALLA -> printa a la pantalla
  function lcdPrint(col, message) {
    lcd.cursor(col, 0).print(message);
  }

  //MOTORS -> engega els motors
  function motors() {

  }

  //INAUGURATE -> s'naugura la fàbrica
  function inaugurate() {
    relayMotors.on();
  }

  //BURN -> començar l'efecte foc
  function burn() {
    relayMotors.off();
    leds1.blink(25);
    leds2.blink(25);
    leds3.blink(25);
    relayBombeta.on();
    relayBombetaAddVoltage.on();
    relayFum.off();
  	relayFumDos.off();

  }
  
  function show(toShow) {
    console.log(toShow);
  }
  function disconnect() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'bonaplataPass',
        database : 'fabricaBonaplata'   
    });
    connection.connect(function(err) {
      if(!err) {};
    });
    var query = connection.query('UPDATE procedures SET status=0;', {id: 1, title: 'Hello MySQL'}, function(err, result) {
      if(!err){}
      else{}
    });
  }

  this.repl.inject({  
  //relay: relay,
  //leds2:leds2
  });
});