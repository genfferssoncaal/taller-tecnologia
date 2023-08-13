#include <Servo.h>

Servo servo1, servo2; 

int pos = 0;    // variable to store the servo position
String message;
boolean completeTransmission = false;

void setup() {
  servo1.attach(9);
  servo2.attach(10);
  Serial.begin(9600); 
  Serial.println("Escribiendo");
}

void loop() {

  if (completeTransmission) {
    //vectorCaracteres //Los datos ingresados se encuentran en esta variable
    Serial.println("Accion: "+message);
    completeTransmission = false;  //Limpiar la bandera
  }
//  if(Serial.available() != 0){
//    action = Serial.read();
//    Serial.println(action);
//    
//    
//    if(action == 'a'){
//      digitalWrite(LED, HIGH);
//    }
////    else if(option == 'b'){
////      digitalWrite(LED, LOW);
////    }
//  }
//  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
//    // in steps of 1 degree
//    myservo.write(pos);              // tell servo to go to position in variable 'pos'
//    delay(15);                       // waits 15ms for the servo to reach the position
//  }
//  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
//    myservo.write(pos);              // tell servo to go to position in variable 'pos'
//    delay(15);                       // waits 15ms for the servo to reach the position
//  }
}

void serialEvent() {
  while (Serial.available()) {
    Serial.println("Serial habilitado");

    char CharEntrada = Serial.read(); //Leer un byte del puerto serial

    message += CharEntrada;  //Agregar el char anterior al string

    if (CharEntrada == '\n') {  //Si se detecta un fin de linea
       Serial.println("FIN DE TEXTO");
      completeTransmission = true;  //Se indica al programa que el usuario termino de ingresar la informacion
    }
  }
}
