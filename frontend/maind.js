  function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getXMLToArray(xmlDoc){
  var thisArray = new Array();
  //Check XML doc
  if($(xmlDoc).children().length > 0){
    //Foreach Node found
    $(xmlDoc).children().each(function(){
      if($(xmlDoc).find(this.nodeName).children().length > 0){
        //If it has children recursively get the inner array
        var NextNode = $(xmlDoc).find(this.nodeName);
        thisArray[this.nodeName] = getXMLToArray(NextNode);
      } else {
        //If not then store the next value to the current array
        thisArray[this.nodeName] = [];
        try {
        $(xmlDoc).children(this.nodeName).each(function(){
          thisArray[this.nodeName].push(eval($(this).text()));
        });} catch (error) {
            $(xmlDoc).children(this.nodeName).each(function(){
          thisArray[this.nodeName].push($(this).text());
        });
        }
      }
    });
  }
  return thisArray;
  }

 var xmlDoc = httpGet('frontend/public.xml')

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function getcolor(color) {
  try {
    var x1 = document.getElementById(color).value;
 var x = eval(x1.replace("#", "0x"));
    if (x <= 0xffffff && x >= 0) { return x;
    } else {
      return 0;
    };
  } catch (Error) {
      return 0;
  };
};
let levec = [
      getcolor('backgroundColor'), //Background Color
      getcolor('ballColor'), //Ball Color
      getcolor('matColor'), //Mat Color
      getcolor('matOutline'), //Mat Outline
      getcolor('invisibleMatOutline'), //Invisible Mat Outline
      getcolor('highBouncerColor'), //High Bouncer Color
      getcolor('lowBouncerColor'), //Low Bouncer Color
      getcolor('obstacleColor'), //Obstacle Color
      getcolor('obstacleOutline'), //Obstacle Outline
      getcolor('highBouncematColor'), //High Bouncemat Color
      getcolor('lowBouncematColor'),  //Low Bouncemat Color
      getcolor('diamondColor') //Diamond Color
    ];

let str = ''

let uuid = uuidv4();

const grid = $('#grid');

let strstart = `<level id=\'`+ uuid + `\' author=\'Unnamed\'>
  <colors>
    [\n` + levec.join(",\n") + `\n]
  </colors>
  <layout>
    [
`;
function uchange() {
  if (document.getElementById('id').value != '') {
    levec = [
      getcolor('backgroundColor'), //Background Color
      getcolor('ballColor'), //Ball Color
      getcolor('matColor'), //Mat Color
      getcolor('matOutline'), //Mat Outline
      getcolor('invisibleMatOutline'), //Invisible Mat Outline
      getcolor('highBouncerColor'), //High Bouncer Color
      getcolor('lowBouncerColor'), //Low Bouncer Color
      getcolor('obstacleColor'), //Obstacle Color
      getcolor('obstacleOutline'), //Obstacle Outline
      getcolor('highBouncematColor'), //High Bouncemat Color
      getcolor('lowBouncematColor'),  //Low Bouncemat Color
      getcolor('diamondColor') //Diamond Color
    ];
  strstart = `<level id=\'`+ uuid + `\' author=\'` + document.getElementById('id'').value + `\'>
  <colors>
[\n` + levec.join(",\n").trimRight(2) + `\n]
  </colors>
  <layout>
    [
`;
} else {levec = [
      getcolor('backgroundColor'), //Background Color
      getcolor('ballColor'), //Ball Color
      getcolor('matColor'), //Mat Color
      getcolor('matOutline'), //Mat Outline
      getcolor('invisibleMatOutline'), //Invisible Mat Outline
      getcolor('highBouncerColor'), //High Bouncer Color
      getcolor('lowBouncerColor'), //Low Bouncer Color
      getcolor('obstacleColor'), //Obstacle Color
      getcolor('obstacleOutline'), //Obstacle Outline
      getcolor('highBouncematColor'), //High Bouncemat Color
      getcolor('lowBouncematColor'),  //Low Bouncemat Color
      getcolor('diamondColor') //Diamond Color
    ];
   strstart = `<level id=\'`+ uuid + `\' author=\'` + 'Unnamed' + `\'>
  <colors>
[\n` + levec.join(",\n").trimRight(2) + `\n]
  </colors>
  <layout>
    [
`;
};
  $("#output").val(strstart + str + `
    ]
  </layout>
</level>`
    );
setTimeout(() => {
  uchange();
  },
  100);
};

uchange();

let colorx = 0

let gridLength = 30;
let mouseDown = false;
let idata = [
  'Void',
  'Mat',
  'High Bouncer',
  'Low Obstacle',
  'Low Bouncer',
  'Invisible Mat',
  'High Obstacle',
  'Medium Obstacle',
  'High Bouncemat',
  'Low Bouncemat',
  'Diamond'
]

document.body.querySelector('#cinfo').innerHTML = idata[0]

const data = [];
for (let i = 0; i < gridLength; i++) {
	grid.append('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
	data.push([0, 0, 0, 0, 0]);
}

$('#designer').scrollTop($('#designer')[0].scrollHeight);

const colors = ['rgba(0, 0, 0, 0)', '#ffff00', '#ff00ff', '#00ddff',  '#0000ff', '#ff9500',
'#00505c', '#0099b0', '#00ff08', '#b7ff00', '#363636'];
var color = 0;

$('#color').on('touchstart mousedown', e => {
  e.preventDefault();
  e.handled = true;
	color = (color + 1) % 11;
  if (color == 10) {
    colorx = "a"
  } else {
    colorx = color
  }
	$('#color').css('background-color', colors[color]);
  document.body.querySelector('#cinfo').innerHTML = idata[color];
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
  window.open('/onlineplay', '_blank');
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
	data[y][x] = colorx;
	$(this).css('background-color', colors[color]);
	mouseDown = true;
}

function move(e){
  if (mouseDown) {
		const x = $(this).index();
		const y = gridLength - 1 - $(this).parent().index();
		data[y][x] = colorx;
		$(this).css('background-color', colors[color]);
	}
}
function up(e){
  e.preventDefault();
  mouseDown = false;
  str = '';
  data.forEach((r, i) => 
    str += "      [" + r.join(", ") + "]" + (i == data.length - 1? "": ",\n")
  );
}
function post() {
  if (str != '') { 
  var xhr = new XMLHttpRequest();
xhr.open("POST", '/postlevel');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send("{\"uuid\": \"" + uuid + "\", \"id\": " + document.getElementById('id').value + ", \"username\": \"" + document.getElementById('id').value + "\", \"password\": \"" + document.getElementById('password').value + "\", \"colors\": " + ("\"[" + levec.join(", ")).trimRight(1) + "]\"" + ", \"layout\": " + ("\"[[" + data.map(i => i.join(", ")).join("], [")).trimRight(1) + "]]\"" + "}");
  document.getElementById('error').innerHTML = 'Success! If your credentials were entered correctly, the level UUID is <b>' + uuid + '</b>';
  uuid = uuidv4();
} else {
  document.getElementById('error').innerHTML = 'Error! Level is empty';
};
  setTimeout(() => {
  document.getElementById('error').innerHTML = '';
  },
  10000);
};

function importin() {
var uuid = document.getElementById('importuuid').value
var ldata = $.parseXML(xmlDoc).getElementById(uuid);

var thisLevel = getXMLToArray($.parseXML('<?xml version="1.0" encoding="UTF-8"?><level>' + ldata.innerHTML + '</level>'))

var importi = thisLevel['level']['colors'][0]

document.getElementById('backgroundColor').value = importi[0]
document.getElementById('ballColor').value = importi[1]
document.getElementById('matColor').value = importi[2]
document.getElementById('matOutline').value = importi[3]
document.getElementById('invisibleMatOutline').value = importi[4]
document.getElementById('highBouncerColor').value = importi[5]
document.getElementById('lowBouncerColor').value = importi[6]
document.getElementById('obstacleColor').value = importi[7]
document.getElementById('obstacleOutline').value = importi[8]
document.getElementById('highBouncematColor').value = importi[9]
document.getElementById('lowBouncematColor').value = importi[10]
document.getElementById('diamondColor').value = importi[11]
}