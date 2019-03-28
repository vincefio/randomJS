
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    var canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    var c = canvas.getContext('2d')
    // c.fillRect(350, 100, 100, 100)
    // c.fillRect(100, 100, 100, 100)
    // c.fillRect(500, 600, 100, 100)
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    //create 3 random squares
    // for(var i = 0; i < 6; i++){
    //   var x = Math.random() * window.innerWidth
    //   var y = Math.random() * window.innerHeight

    //   //var colorOne = getRandomColor()
    //   c.fillStyle = `${getRandomColor()}`
    //   c.fillRect(x, y, 100, 100)
    // }

    //console.log(canvas)

    //head
    c.beginPath()
    //declare where we want path to start
    c.arc(500, 75, 50, 0, 2 * Math.PI);
    c.stroke()

    //left eye
    c.beginPath()
    //declare where we want path to start
    c.arc(480, 70, 5, 0, 2 * Math.PI);
    c.stroke()

    //right eye
    c.beginPath()
    //declare where we want path to start
    c.arc(520, 70, 5, 0, 2 * Math.PI);
    c.stroke()

    //mouth
    c.beginPath()
    c.moveTo(485, 100)
    c.lineTo(515, 100)
    c.stroke()

    //body
    c.beginPath()
    c.moveTo(500, 125)
    c.lineTo(500, 350)
    c.stroke()

    //left arm
    c.beginPath()
    c.moveTo(400, 125)
    c.lineTo(500, 200)
    c.stroke()

    //right arm
    c.beginPath()
    c.moveTo(600, 125)
    c.lineTo(500, 200)
    c.stroke()

    //left leg
    c.beginPath()
    c.moveTo(500, 350)
    c.lineTo(400, 500)
    c.stroke()

    //left leg
    c.beginPath()
    c.moveTo(500, 350)
    c.lineTo(600, 500)
    c.stroke()

    //with html canvas we can draw rectangles, lines, arxcs, bezier, images, and text

  });