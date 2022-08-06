function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(100, 230);
    video = createCapture(VIDEO);
    video.hide()
    colour = ""
}

function draw() {
    image(video, 0, 0)
    tint(colour)
}
function applyfilter() {
    colour = document.getElementById("colour").value;
    console.log(colour)

}
function take_snapshot() {
    save("filterimg.png")
}