function drawStar() {
    const canvas = document.getElementById("skyCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(100, 100, 3, 0, 2 * Math.PI);
    ctx.fill();
}
