

var fillColor;
var mic;

function setup() {	createCanvas(500,500);
                  
                  //immagini
					capture= createCapture(VIDEO);
					capture.size(500,500);
					capture.hide();
                  
                  //microfono
                    mic = new p5.AudioIn();
                    mic.start();
                    
                    angleMode(DEGREES);     
				}

function draw() {	
					 background("#73c2fb");
    //collina
    fill("#014421")
    ellipse(250,500, 700, 220);
                  // sole  
                    fill("#ffc40c")
                    ellipse(0,0, 190,190);
                    
                    var vol=mic.getLevel();
                    if(vol>0.03 && vol<0.1) {  // var Ya=350-a;
                                   // var yB=500+a;
                                    var a=0;
                                    a+=10 +frameCount/10
                                }
                  
                    else{   //var yA=350;
                            //  var yB=500;
                         fill("#ffc40c")
                    ellipse(0,0, 190,190);
                            a=0;
                        };
                    
                    translate(0,-a);
    //stelo(yA, yB);
                    stelo("#d1e231");
    
        //fiori
                    push();
                    translate(280,350);

                    push();
                    rotate(60);
					fiore();
                    pop();

                    translate(-45,0);
                    rotate(-60);
                    fiore();
                    pop();
                    
                   
                    
//foglie            
  /*                  noStroke();
                    fill("#d1e231");
                    arc(255, 400, 110, 110, 0,60, PIE);

                    push();
                    translate(260,400)
                    rotate(120);
                    arc(0, 0, 110, 110, 0,60, PIE);
                    pop();
*/
				}

function fiore() {	
                    noStroke();
                    //fill("#ffcff1");
                    var myImage=capture.loadPixels();
                    var p=myImage.get(250,250);
                    fill(p);
					ellipse(250-250,0, 45,50);

					fill("#73c2fb");
					triangle(250-250, 255-250, 210-250, 190-250, 290-250, 190-250);

                    fill("#ffc40c");
                    ellipse (250-250,250-250, 10, 10);

                 }

function stelo(col) {  
                        noStroke();
                        fill(col);
                 //   rect(252, yA,10,yB);
                        rect(252,350,10, 500);
                        
                    arc(255, 400, 110, 110, 0,60, PIE);

                    push();
                    translate(260,400)
                    rotate(120);
                    arc(0, 0, 110, 110, 0,60, PIE);
                    pop();
        }