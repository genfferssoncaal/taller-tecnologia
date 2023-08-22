#include <Servo.h>

Servo servo1, servo2; 

int pos = 0;    // variable to store the servo position
char action = ' ';

void setup() {
  servo1.attach(9);
  servo2.attach(10);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available()){
    action = Serial.read();
    executeAction(action);
    Serial.println(action);
  }
}

void executeAction(char action){
  if(action == 'a'){
    servo1.write(0);
  }
  if(action == 'b'){
    servo1.write(90);
  }
  if(action == 'c'){
    servo1.write(180);
  }
  if(action == 'd'){
    servo1.write(0);
  }
}
