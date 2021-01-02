const START_LEN = 100;
const START_WIDTH = 20;
const CHANGE_LEN = 0.7;
const CHANGE_WIDTH = 0.6;
const ANGLE_DEG = 35;


const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 620;

let backgroundCanvas;
let branchCanvas;

function initializeCanvas(canvasID) {
    const canvas = document.getElementById(canvasID);
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_WIDTH;
    return canvas;
}

function main() {
    console.log("test");
    backgroundCanvas = initializeCanvas('canvasBackground');
    branchCanvas = initializeCanvas('canvasTreeBranches');
    const treeLocation = [CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.75];
    drawBranches(branchCanvas, treeLocation, START_LEN, 0, START_WIDTH);
}

function drawBranches(canvas, start, len, angle, branchWidth) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = branchWidth;
    ctx.translate(...start);
    ctx.rotate(angle * Math.PI/180); // Aus Grad in Bogenmaß

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if(len > 10) {
        drawBranches(canvas, [0, -len], len * CHANGE_LEN, ANGLE_DEG, branchWidth * CHANGE_WIDTH);
        drawBranches(canvas, [0, -len], len * CHANGE_LEN, -ANGLE_DEG, branchWidth * CHANGE_WIDTH);
    }
    ctx.restore();
}