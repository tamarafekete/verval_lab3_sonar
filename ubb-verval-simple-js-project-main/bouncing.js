const img_element = document.getElementById("bouncing-image");
const x_coord = 20;
const y_coord = 20;
const x_speed = 5;
const y_speed = 5;

function run_animation_loop() {
  const window_w = window.innerWidth;
  const window_h = window.innerHeight;

  x_coord = x_coord + x_speed;
  y_coord = y_coord + y_speed;

  if (x_coord + 80 >= window_w || x_coord <= 0) {
    x_speed = x_speed * -1;
    const r_h = Math.floor(Math.random() * 360);
    img_element.style.filter = "hue-rotate(" + r_h + "deg)";
  }

  if (y_coord + 80 >= window_h || y_coord <= 0) {
    y_speed = y_speed * -1;
    const r_h2 = Math.floor(Math.random() * 360);
    img_element.style.filter = "hue-rotate(" + r_h2 + "deg)";
  }

  img_element.style.left = x_coord + "px";
  img_element.style.top = y_coord + "px";

  requestAnimationFrame(run_animation_loop);
}

run_animation_loop();
