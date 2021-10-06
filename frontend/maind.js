
const grid = $('#grid');

let gridLength = 30;
let mouseDown = false;

const data = [];
for (let i = 0; i < gridLength; i++) {
	grid.append('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
	data.push([0, 0, 0, 0, 0]);
}

$('#designer').scrollTop($('#designer')[0].scrollHeight);

const colors = ['rgba(0, 0, 0, 0)', '#ffff00', '#ff00ff', '#00ddff',  '#0000ff', '#ff9500',
'#00505c', '#0099b0', '#00ff08', '#b7ff00'];
var color = 1;

$('#color').on('touchstart mousedown', e => {
  e.preventDefault();
  e.handled = true;
	color = (color + 1) % 10;
	$('#color').css('background-color', colors[color]);
});

$('#add').on('touchstart mousedown', e => {
  e.preventDefault();
  e.handled = true;
  $('#grid').prepend('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
  data.push([0, 0, 0, 0, 0]);
  gridLength++;
});

$('#menu').on('touchstart mousedown', e => {
  e.preventDefault();
  e.handled = true;
  window.location.href = "/";
});

$('#remove').on('touchstart mousedown', e => {
  e.preventDefault();
  e.handled = true;
  if(gridLength > 0){
    $('#grid tr:first').remove();
    data.pop();
    gridLength--;
  }
});

mouseDown = false;
$("div#designer").on('mousedown touchstart', 'td', down);
$("div#designer").on('mousemove touchmove', 'td', move);
$("div#designer").on('mouseup touchend', up)

function down(e){
  const x = $(this).index();
	const y = gridLength - 1 - $(this).parent().index();
	data[y][x] = color;
	$(this).css('background-color', colors[color]);
	mouseDown = true;
}

function move(e){
  if (mouseDown) {
		const x = $(this).index();
		const y = gridLength - 1 - $(this).parent().index();
		data[y][x] = color;
		$(this).css('background-color', colors[color]);
	}
}
function up(e){
  e.preventDefault();
  mouseDown = false;
  let str = `[
  0xaaaaaa, //Background Color
  0xff1111, //Ball Color
  0xffff00, //Mat Color
  0xcccc00, //Mat Outline
  0xff9500, //Invisible Mat Outline
  0xff00ff, //High Bouncer Color
  0x0000ff, //Low Bouncer Color
  0x00ffff, //Obstacle Color
  0x00ddff, //Obstacle Outline
  0x00ff08, //High Bouncemat Color
  0xb7ff00  //Low Bouncemat Color
];

[
`;
  data.forEach((r, i) => 
    str += "  [" + r.join(", ") + "]" + (i == data.length - 1? "": ",\n")
  );
  $("#output").val(str + `
]`
    );
}