
var agg=1;
var delta=2;
var mic;
var a=0;
var vivo=true;
function setup() {  createCanvas(500,500);
                  
                  //immagini
                    capture= createCapture(VIDEO);
                    capture.size(500,500);
                    capture.hide();
                  
                  //microfono
                    mic = new p5.AudioIn();
                    mic.start();
                    
                    angleMode(DEGREES);     
                }

function draw() {    var vol=mic.getLevel();
                     background("#73c2fb");
                    
                    //collina
                    fill("#014421")
                    ellipse(250,500, 700, 220);
    
                    // sole 
                    fill("#ffc40c")
                    ellipse(0,0, 190,190);
       
                    //crescita dello stelo
                    if(vol<0.1 && vivo==true &&vol>=0.003) {    
                                        a+=0.2
                                    }
                    else if(vol>=0.1) {vivo=false;
                                        a+=0;}
                    else{   
                           // ellipse(0,0, 190,190);
                            //a=0;
                        };
                 //colore stelo
              if (vol>=0.1 ||vivo==false) 
                  
                    {       stelo("#bc8f8f");
                            push();
                            translate(280,350-a);

                            push();
                            rotate(60);
                            fiore("#856979");
                            pop();

                            translate(-45,0);
                            rotate(-60);
                            fiore("#856979");
                            pop();
                    }
                 
                 
                else {  stelo("#d1e231"); 
                                //fiori
                            push();
                            translate(280,350-a);

                            push();
                            rotate(60);
                            fiore("#ffc40c");
                            pop();

                            translate(-45,0);
                            rotate(-60);
                            fiore("#ffc40c");
                            pop();
                    }
                           
                  if(a==delta){                delta+=2;
                                             for(i=0; i<=agg; i+=10) {agg+=1
                                                ellipse(100, 300-i, 30,30);}
                                         }
  
    var level = mic.getLevel();


                }

function fiore(nettare) {   var vol=mic.getLevel();
                            if (vol>=0.1 ||vivo==false){var p="#d18e8e";}
                    else{   var myImage=capture.loadPixels();
                            var p=myImage.get(250,250);
                        }
                            noStroke();
               /*     
                     var myImage=capture.loadPixels();
                     var p=myImage.get(250,250);
                      */

                    fill(p);
                    ellipse(250-250,0, 45,50);

                    fill("#73c2fb");
                    triangle(250-250, 255-250, 210-250, 190-250, 290-250, 190-250);
            //nettare
                    fill(nettare); //giallo
                    ellipse (0,0, 10, 10);

                 }
function stelo(col) {   
                        noStroke();
                        fill(col);
                        rect(252,350-a,10, 500+a);     
                    arc(255, 400, 110, 110, 0,60, PIE);

                    push();
                    translate(260,400)
                    rotate(120);
                    arc(0, 0, 110, 110, 0,60, PIE);
                    pop();
        }