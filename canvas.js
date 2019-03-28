
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
    for(var i = 0; i < 6; i++){
      var x = Math.random() * window.innerWidth
      var y = Math.random() * window.innerHeight

      //var colorOne = getRandomColor()
      c.fillStyle = `${getRandomColor()}`
      c.fillRect(x, y, 100, 100)
    }

    //console.log(canvas)

    c.beginPath()
    //declare where we want path to start
    c.moveTo(200, 300)
    c.lineTo(500, 75)
    c.lineTo(800, 350)
    c.stroke()

    //with html canvas we can draw rectangles, lines, arxcs, bezier, images, and text

  });