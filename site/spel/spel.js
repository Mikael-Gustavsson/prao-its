const canvas = document.getElementById("spelplan");
const ctx = canvas.getContext("2d");

// Ritar en tom spelplan; ersätt med spelets logik.
ctx.fillStyle = "#888";
ctx.font = "20px system-ui, sans-serif";
ctx.textAlign = "center";
ctx.fillText("Inget spel än", canvas.width / 2, canvas.height / 2);
