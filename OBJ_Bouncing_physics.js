////////////////////////////////////////////////////
// ideally works on 400W x 400H, JavaScript
////////////////////////////////////////////////////
// variables for the object
    var x = 25;
    var x_speed = 2;

// function for moving object
var box_obj = function() {

    ellipse(x, 200, 50, 50);
    x = x + x_speed;
    if (x < 375) {
        x_speed += 1;
    }
    if (x > 26) {
        x_speed -= 1;
    }
};
////////////////////////////////////////////////////
//
////////////////////////////////////////////////////
// mouse tracker
var mouse_tracker = function() {
    var x = mouseX - 20;
    var label = mouseX + '/' + mouseY;
    fill(3, 10, 4);
    if (mouseX < 315) {
        text(label, mouseX + 15, mouseY + 15);
    } else {
        text(label, mouseX - 50, mouseY - 10);
    }
};

////////////////////////////////////////////////////
// spaced lines for the environment
// x pos
var graph_x = function() {
    var x = 0;
    while (x < 400) {
        line(0, x, 400, x);
        x += 10;
    }
};
// y pos
var graph_y = function() {
    var y = 0;
    while (y < 400) {
        line(y, 0, y, 400);
        y += 10;
    }
};

////////////////////////////////////////////////////
// ruler for the environment
//x = 0
var ruler_x_I = function() {
    var x_II = 0;
    while (x_II < 400) {
        fill(247, 17, 52);
        text(x_II, x_II, 10);
        x_II += 40;
    }
};

//x = 400
var ruler_x_II = function() {
    var X = 40;
    while (X < 400) {
        fill(255, 0, 0);
        text(X, X, 400);
        X += 40;
    }
};
// y = 0
var ruler_y_I = function() {
    var y_II = 40;
    while (y_II < 430) {
        fill(255, 0, 0);
        text(y_II, 0, y_II);
        y_II += 40;
    }
};
// y = 379
var ruler_y_II = function() {
    var Y = 0;
    while (Y < 430) {
        fill(255, 0, 0);
        text(Y, 379, Y);
        Y += 40;
    }
};

////////////////////////////////////////////////////
// real time display
////////////////////////////////////////////////////
draw = function() {
    // complementary, who doesnt like the good-old math paper color?
    background(232, 247, 202);
    // title for environment
    fill(13, 5, 5);
    textSize(25);
    text('OBJECT BOUNCE PHYSICS', 31, 25, 454, 150);


    // line grid
    textSize(12);
    graph_x();
    graph_y();

    // ruler on grid
    // x pos
    ruler_x_I();
    ruler_x_II();

    // y pos
    ruler_y_I();
    ruler_y_II();

    textSize(20);
    // mouse position tracker
    mouse_tracker();

    ////////////////////////////////////////////////////
    // TESTING AREA
    ////////////////////////////////////////////////////

    // summoning the object to test
    box_obj();


    //////////
    // TESTING AREA
    ////////////////////////////////////////////////////
    
};
////////////////////////////////////////////////////
