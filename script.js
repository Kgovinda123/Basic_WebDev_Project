document.addEventListener("DOMContentLoaded", function() {
    var circleColors = ["yellow", "blue", "red", "green"]; 
    var circleContainer = document.getElementById("circleContainer");
    var resetButton = document.querySelector(".resetBtn");
    function createCircle(color) {
        var circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = color;
        circle.innerHTML = '<div class="arrow"><span style="margin-left: 700px;">&#8592;</span></div>';
        circle.addEventListener("click", function() {
            moveArrow(circle); 
        });
        return circle;
    }
    function appendCircles() {
        for (var i = 0; i < circleColors.length; i++) {
            var circle = createCircle(circleColors[i]);
            circleContainer.appendChild(circle);
        }
    }
    appendCircles();
    function moveArrow(circle) {
        var arrow = circle.querySelector('.arrow span');
        arrow.style.transition = "margin-left 1s"; 
        arrow.style.marginLeft = "65px"; 
        var circleIndex = Array.from(circle.parentNode.children).indexOf(circle);
        setTimeout(function() {
            switch (circleIndex) {
                case 0:
                    circle.style.backgroundColor = "pink";
                    break;
                case 1:
                    circle.style.backgroundColor = "orange";
                    break;
                case 2:
                    circle.style.backgroundColor = "black";
                    break;
                case 3:
                    circle.style.backgroundColor = "grey";
                    break;
                default:
                    break;
            }
        }, 1000); 
    }

    function reset() {
        var circles = document.querySelectorAll('.circle');
        circles.forEach(function(circle, index) {
            circle.style.backgroundColor = circleColors[index]; 
            var arrow = circle.querySelector('.arrow span');
            arrow.style.marginLeft = "700px"; 
        });
    }
    resetButton.addEventListener("click", reset);
});
