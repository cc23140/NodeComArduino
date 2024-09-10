//#include <Firmata.h> Para colocar dps no Arduino IDE na escola!

void setup() {
  Firmata.begin(57600); // Configura a comunicação serial
}

void loop() {
  while (Firmata.available()) {
    Firmata.processInput(); // Processa os comandos recebidos pelo Johnny-Five
  }
}
