var audio = new Audio('frontend/4.mp3');
var audio = new Audio('frontend/5.mp3');
var audio = new Audio('frontend/upgrade.mp3');
var diama = []
var elevlevel = undefined

$('#retry').hide();
$('#menu').show();
$('#sd').show();
$('#play').click(start);
$('#prev').hide();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	60,
	window.innerWidth / window.innerHeight,
	1,
	10000
);

//XML Manipulations...
 function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

 var response = httpGet('frontend/data.xml')

 var xmlDoc = $.parseXML( response );
        
 var ldata = getXMLToArray(xmlDoc)['leveldata'];
        
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
//endfor Manipulations...

var level = 0;
var levelcolors = ldata['level']['colors'][level]
var data = ldata['level']['layout']
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(levelcolors[0], 1);

var canvas = $('#canvascontainer').append(renderer.domElement);
var distance = 4;
var started = false;
var percent = 0;
camera.position.set(0, 5, distance);
camera.rotation.x -= 0.75;
var scoreSubmitted = false;



/* OBJECTS
AND COLORS*/


class Ball {
	constructor() {
		this.geometry = new THREE.SphereGeometry(0.5, 100, 100);
		this.material = new THREE.MeshLambertMaterial({ color: levelcolors[1] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, 0.6, 0);
		scene.add(this.mesh);
		this.speed = { z: 0, y: 0 };
		this.landed = true;
		//The position where the ball starts jumping
		this.tmpZ = 0;
		this.count2Lose = 0;
		this.last = 0;
		this.mesh.name = 'ball';
	};

	update() {
		this.mesh.position.y += this.speed.y;
		this.mesh.position.z += this.speed.z;
		camera.position.z += this.speed.z;
		if (this.mesh.position.y <= 0.6 && this.mesh.position.y > 0 && !this.count2Lose) {
			this.landed = false;
			world.forEach(v => {
				if (v instanceof Mat) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							this.tmpZ = 0;
						}
					}
				}
			});
			world.forEach(v => {
				if (v instanceof DelMat) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							this.tmpZ = 0;
						}
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Bouncer || v instanceof SlowBouncer || v instanceof MatBouncer || v instanceof MatsBouncer) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							if (this.last == 2) {
								this.mesh.position.z = this.tmpZ - 4;
								camera.position.z = this.tmpZ - 4 + distance;
								this.tmpZ = 0;
							} else {
								if (this.last == 4) {
									this.mesh.position.z = this.tmpZ - 3;
									camera.position.z = this.tmpZ - 3 + distance;
									this.tmpZ = 0;
								}
							}
						}
					}
				}
			});

			if (!this.landed) {
				this.speed.y -= 0.04;
				if (!this.count2Lose) this.count2Lose = 1;
			}
			world.forEach(v => {
				if (v instanceof Mat && this.landed) {
					if (v.detect()) {
						this.last = 1;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof DelMat && this.landed) {
					if (v.detect()) {
						this.last = 5;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Obstacle && this.landed) {
					if (v.detect()) {
						this.last = 3;
					}
				}
			});
      world.forEach(v => {
				if (v instanceof HighObstacle && this.landed) {
					if (v.detect()) {
						this.last = 6;
					}
				}
			});
            world.forEach(v => {
				if (v instanceof HighlowObstacle && this.landed) {
					if (v.detect()) {
						this.last = 7;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Bouncer && this.landed) {
					if (v.detect()) {
						this.landed = false;
						this.speed.y = 0.5;
						this.tmpZ = this.mesh.position.z;
						v.mesh.position.y = 1;
						let audio = new Audio('frontend/4.mp3');
						audio.play();
						this.last = 2;
					}
				}
			});
      world.forEach(v => {
				if (v instanceof Diamond && this.landed) {
					if (v.detect()) {
            if (diam[level] != true && diama[level] != true){
						let audio = new Audio('frontend/upgrade.mp3');
						audio.play();
            while (scene.getObjectByName('diamond') != undefined) {
            scene.remove(scene.getObjectByName('diamond'))};
            diama[level] = true;
            };
            this.last = 10;
					}
				}
      });
			world.forEach(v => {
				if (v instanceof SlowBouncer && this.landed) {
					if (v.detect()) {
						this.landed = false;
						this.speed.y = 0.39;
						this.tmpZ = this.mesh.position.z;
						v.mesh.position.y = 0.5;
						let audio = new Audio('frontend/5.mp3');
						audio.play();
						this.last = 4;
					}
				}
			});
		} else {
			this.landed = false;
			this.speed.y -= 0.04;
		}
		if (this.count2Lose) {
			this.count2Lose++;
			if (this.count2Lose >= 5) gameover();
		}
		world.forEach(v => {
			if (v instanceof Obstacle || v instanceof HighObstacle || v instanceof HighlowObstacle)
				if (v.detect()) gameover();
		});
	}
};
class Mat {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[2] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color:levelcolors[3] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class DelMat {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: 0xffcac7 });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[4] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
	}

	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class Bouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[5] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class MatBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[9] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class MatsBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[10] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class SlowBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[6] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd6d3bc });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class Obstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.7, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0.45, zpos);
		this.line.position.set(xpos, 0.45, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 0.85
		) return true;
	}
};
class HighObstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 3, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1.6, zpos);
		this.line.position.set(xpos, 1.6, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 3
		) return true;
	}
}
class HighlowObstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1.1, zpos);
		this.line.position.set(xpos, 1.1, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 2
		) return true;
	}
};
class Diamond {
  constructor(xpos, zpos) {
    this.geometry = new THREE.OctahedronGeometry(0.5, 0);
    this.material = new THREE.MeshPhongMaterial({ color: levelcolors[11] });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color:levelcolors[11] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1, zpos);
		this.line.position.set(xpos, 1, zpos);
		this.mesh.name = 'diamond';
		this.line.name = 'level component';
		scene.add(this.mesh);
  }
  	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
function objectUpdate() {
class Ball {
	constructor() {
		this.geometry = new THREE.SphereGeometry(0.5, 100, 100);
		this.material = new THREE.MeshLambertMaterial({ color: levelcolors[1] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, 0.6, 0);
		scene.add(this.mesh);
		this.speed = { z: 0, y: 0 };
		this.landed = true;
		//The position where the ball starts jumping
		this.tmpZ = 0;
		this.count2Lose = 0;
		this.last = 0;
		this.mesh.name = 'ball';
	};

	update() {
		this.mesh.position.y += this.speed.y;
		this.mesh.position.z += this.speed.z;
		camera.position.z += this.speed.z;
		if (this.mesh.position.y <= 0.6 && this.mesh.position.y > 0 && !this.count2Lose) {
			this.landed = false;
			world.forEach(v => {
				if (v instanceof Mat) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							this.tmpZ = 0;
						}
					}
				}
			});
			world.forEach(v => {
				if (v instanceof DelMat) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							this.tmpZ = 0;
						}
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Bouncer || v instanceof SlowBouncer || v instanceof MatBouncer || v instanceof MatsBouncer) {
					if (v.detect()) {
						this.landed = true;
						this.speed.y = 0;
						this.mesh.position.y = 0.6;
						if (this.tmpZ) {
							if (this.last == 2) {
								this.mesh.position.z = this.tmpZ - 4;
								camera.position.z = this.tmpZ - 4 + distance;
								this.tmpZ = 0;
							} else {
								if (this.last == 4) {
									this.mesh.position.z = this.tmpZ - 3;
									camera.position.z = this.tmpZ - 3 + distance;
									this.tmpZ = 0;
								}
							}
						}
					}
				}
			});

			if (!this.landed) {
				this.speed.y -= 0.04;
				if (!this.count2Lose) this.count2Lose = 1;
			}
			world.forEach(v => {
				if (v instanceof Mat && this.landed) {
					if (v.detect()) {
						this.last = 1;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof DelMat && this.landed) {
					if (v.detect()) {
						this.last = 5;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Obstacle && this.landed) {
					if (v.detect()) {
						this.last = 3;
					}
				}
			});
      world.forEach(v => {
				if (v instanceof HighObstacle && this.landed) {
					if (v.detect()) {
						this.last = 6;
					}
				}
			});
            world.forEach(v => {
				if (v instanceof HighlowObstacle && this.landed) {
					if (v.detect()) {
						this.last = 7;
					}
				}
			});
			world.forEach(v => {
				if (v instanceof Bouncer && this.landed) {
					if (v.detect()) {
						this.landed = false;
						this.speed.y = 0.5;
						this.tmpZ = this.mesh.position.z;
						v.mesh.position.y = 1;
						let audio = new Audio('frontend/4.mp3');
						audio.play();
						this.last = 2;
					}
				}
			});
      world.forEach(v => {
				if (v instanceof Diamond && this.landed) {
					if (v.detect()) {
            if (diam[level] != true && diama[level] != true){
						let audio = new Audio('frontend/upgrade.mp3');
						audio.play();
            while (scene.getObjectByName('diamond') != undefined) {
            scene.remove(scene.getObjectByName('diamond'))};
            diama[level] = true;
            };
            this.last = 10;
					}
				}
      });
			world.forEach(v => {
				if (v instanceof SlowBouncer && this.landed) {
					if (v.detect()) {
						this.landed = false;
						this.speed.y = 0.39;
						this.tmpZ = this.mesh.position.z;
						v.mesh.position.y = 0.5;
						let audio = new Audio('frontend/5.mp3');
						audio.play();
						this.last = 4;
					}
				}
			});
		} else {
			this.landed = false;
			this.speed.y -= 0.04;
		}
		if (this.count2Lose) {
			this.count2Lose++;
			if (this.count2Lose >= 5) gameover();
		}
		world.forEach(v => {
			if (v instanceof Obstacle || v instanceof HighObstacle || v instanceof HighlowObstacle)
				if (v.detect()) gameover();
		});
	}
};
class Mat {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[2] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color:levelcolors[3] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class DelMat {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: 0xffcac7 });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[4] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
	}

	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class Bouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[5] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class MatBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[9] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class MatsBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[10] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd9ae96 });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};

class SlowBouncer {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.2, 1);
		this.material = new THREE.MeshBasicMaterial({ color: levelcolors[6] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd6d3bc });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0, zpos);
		this.line.position.set(xpos, 0, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.mesh);
	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
};
class Obstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 0.7, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 0.45, zpos);
		this.line.position.set(xpos, 0.45, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 0.85
		) return true;
	}
};
class HighObstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 3, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1.6, zpos);
		this.line.position.set(xpos, 1.6, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 3
		) return true;
	}
}
class HighlowObstacle {
	constructor(xpos, zpos) {
		this.geometry = new THREE.BoxGeometry(1, 2, 1);
		this.material = new THREE.MeshPhongMaterial({ color: levelcolors[7] });
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color: levelcolors[8] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1.1, zpos);
		this.line.position.set(xpos, 1.1, zpos);
		this.mesh.name = 'level component';
		this.line.name = 'level component';
		scene.add(this.line);
		scene.add(this.mesh);

	}
	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.3 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5 &&
			ball.mesh.position.y < this.mesh.position.y + 2
		) return true;
	}
};
class Diamond {
  constructor(xpos, zpos) {
    this.geometry = new THREE.OctahedronGeometry(0.5, 0);
    this.material = new THREE.MeshPhongMaterial({ color: levelcolors[11] });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.edgesGeometry = new THREE.EdgesGeometry(this.geometry);
		this.edgesMaterial = new THREE.LineBasicMaterial({ color:levelcolors[11] });
		this.line = new THREE.LineSegments(this.edgesGeometry, this.edgesMaterial);
		this.mesh.position.set(xpos, 1, zpos);
		this.line.position.set(xpos, 1, zpos);
		this.mesh.name = 'diamond';
		this.line.name = 'level component';
		scene.add(this.mesh);
  }
  	detect() {
		if (
			ball.mesh.position.x >= this.mesh.position.x - 0.5 &&
			ball.mesh.position.x <= this.mesh.position.x + 0.5 &&
			ball.mesh.position.z >= this.mesh.position.z - 0.5 &&
			ball.mesh.position.z <= this.mesh.position.z + 0.5 &&
			ball.mesh.position.z <= 0.5
		) return true;
	}
}
};
function jumper() {
      world.forEach(v => {
				if (v instanceof MatBouncer && ball.landed) 
        {
					if (v.detect()) {
						ball.landed = false;
						ball.speed.y = 0.5;
						ball.tmpZ = ball.mesh.position.z;
						v.mesh.position.y = 1;
						let audio = new Audio('frontend/4.mp3');
						audio.play();
						ball.last = 2;
					}
				}
			});
      world.forEach(v => {
				if (v instanceof MatsBouncer && ball.landed) 
        {
					if (v.detect()) {
						ball.landed = false;
						ball.speed.y = 0.39;
						ball.tmpZ = ball.mesh.position.z;
						v.mesh.position.y = 0.5;
						let audio = new Audio('frontend/5.mp3');
						audio.play();
						ball.last = 4;
					}
				}
			});
};


// MAIN




//start function
function start(e) {
	e.preventDefault();
	if (!started) {
    while (
		(selectedObject = scene.getObjectByName('level component')) != undefined
	) {
		var selectedObject = scene.getObjectByName('level component');
		scene.remove(selectedObject);
	};
	scene.remove(scene.getObjectByName('ball'));
  loadLevel(level);
    diama[level] = false;
		started = true;
    ball = new Ball();
		ball.speed.z = -0.15;
		$('#main').fadeOut(300);
		$('#name').hide();
		reset();
		world.forEach(v => {
			if (v instanceof Bouncer) {
				v.mesh.position.y = 0;
			}
		});
    		world.forEach(v => {
			if (v instanceof MatBouncer) {
				v.mesh.position.y = 0;
			}
		});
    world.forEach(v => {
			if (v instanceof SlowBouncer) {
				v.mesh.position.y = 0;
			}
		});
        world.forEach(v => {
			if (v instanceof MatsBouncer) {
				v.mesh.position.y = 0;
			}
		});
		$('#main').css('pointer-events', 'none');
    if (level == elevlevel) {
      elev = new Audio('frontend/11.ogg')
      elev.play()
    }
	}
}
function reset() {
	ball.landed = true;
	ball.tmpZ = 0;
	camera.position.set(0, 5, distance);
	ball.mesh.position.set(0, 0.6, 0);
	ball.speed.y = 0;
	ball.count2Lose = 0;
  if (level == elevlevel) {
    try {
      elev.pause();
      elev.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
  }
}
function nextLevel() {
	percent = 0;
	while (
		(selectedObject = scene.getObjectByName('level component')) != undefined
	) {
		var selectedObject = scene.getObjectByName('level component');
		scene.remove(selectedObject);
	};
	scene.remove(scene.getObjectByName('diamond'))
	scene.remove(scene.getObjectByName('ball'))
	world = [];
	level++;
	levelcolors = ldata['level']['colors'][level];
	renderer.setClearColor(levelcolors[0], 1);
	objectUpdate();
	loadLevel(level); 
	ball = new Ball();
	reset();
	$('#score').hide();
	$('#prev').show();
	$('#retry').hide();
  $('#menu').show();
  $('#sd').show();
	$('#play').show();
	if (level == data.length - 1) {
		$('#next').hide();
	}
}
function prevLevel() {
	percent = 0;
	while (
		(selectedObject = scene.getObjectByName('level component')) != undefined
	) {
		var selectedObject = scene.getObjectByName('level component');
		scene.remove(selectedObject);
	};
  scene.remove(scene.getObjectByName('diamond'))
	scene.remove(scene.getObjectByName('ball'))
	world = [];
	level--;
	levelcolors = ldata['level']['colors'][level];
	renderer.setClearColor(levelcolors[0], 1);
	objectUpdate();
	loadLevel(level);
	ball = new Ball();
	reset();
	$('#score').hide();
	$('#next').show();
	$('#retry').hide();
  $('#menu').show();
  $('#sd').show();
	$('#play').show();
	if (level == 0) {
		$('#prev').hide();
	}
}
// Da things
var light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(light);
var world = [];
function loadLevel(index) {
	for (var i in data[index]) {
		for (var j in data[index][i]) {
			switch (data[index][i][j]) {
				case 1:
					world.push(new Mat(j - 2, -i));
					break;
				case 2:
					world.push(new Bouncer(j - 2, -i));
					break;
				case 3:
					world.push(new Mat(j - 2, -i));
					world.push(new Obstacle(j - 2, -i));
          break;
        case 10:
					world.push(new Mat(j - 2, -i));
          if(diam[level] != true) {
					world.push(new Diamond(j - 2, -i))
          };
					break;
        case 8:
					world.push(new MatBouncer(j - 2, -i));
					break;
        case 9:
			  world.push(new MatsBouncer(j - 2, -i));
			  break;
        case 6:
					world.push(new Mat(j - 2, -i));
					world.push(new HighObstacle(j - 2, -i));
					break;
        case 7:
					world.push(new Mat(j - 2, -i));
					world.push(new HighlowObstacle(j - 2, -i));
					break;
				case 4:
					world.push(new SlowBouncer(j - 2, -i));
					break;
				case 5:
					world.push(new DelMat(j - 2, -i));
			}
		}
	}
}
loadLevel(level);
var ball = new Ball();

keystate = [];
//Loop function
var render = function () {
	renderer.render(scene, camera);
	ball.update();
	percent = Math.ceil(
		Math.abs(ball.mesh.position.z) / data[level].length * 100);
	percent = percent > 100 ? 100 : percent;
  if (percent >= 100 && diama[level] == true) {
    diam[level] = true
  };
	$('#percent').html(percent + '%');
	if (keystate[37]) ball.mesh.position.x -= 0.15;
	if (keystate[39]) ball.mesh.position.x += 0.15;
	reqId = requestAnimationFrame(render);
};
var reqId = requestAnimationFrame(render);

//save diamonds

function sd() {
  var xhr = new XMLHttpRequest();
xhr.open("POST", '/playad');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send("{\"dmonds\":\"[" + diam.toString() + "]\", \"iw\":" + iw.toString() + "}");
};
function sdd() {
  diam[level] = undefined
}

//controls

function gameover() {
	started = false;
	ball.speed.z = 0;
	$('#main').fadeIn(500);
	$('#retry').show();
  $('#menu').show();
  $('#sd').show();
	$('#retry').click(start);
	$('#score').show();
	$('#score').html($('#percent').html());
	$('#main').css('pointer-events', 'auto');
  if (level == elevlevel) {
    try {
      elev.pause();
      elev.currentTime = 0;
    } catch (error) {
      console.error(error);
    }
  }

}


//CONTROLS



canvas.on('mousemove', e => {
	e.preventDefault();
	if (started) {
		var pos = (e.clientX - $(window).width() / 2) / (($(window).width() < 450 ? $(window).width() : 450) / 5);
		if (pos >= -3.5 && pos <= 3.5) {
			ball.mesh.position.x = pos;
			camera.position.x = pos / 7;
		}
	}
});
canvas.on('touchmove', e => {
	e.preventDefault();
	if (started) {
		var pos =
			(e.changedTouches[0].pageX - $(window).width() / 2) / (($(window).width() < 450 ? $(window).width() : 450) / 5);
		if (pos >= -3.5 && pos <= 3.5) {
			ball.mesh.position.x = pos;
			camera.position.x = pos / 7;
		}
	}
});


$(window).on('keydown', e => {
	if (started && !ball.count2Lose) keystate[e.keyCode] = true;
});
$(window).on('keyup', e => {
	delete keystate[e.keyCode];
});
$(window).on('resize', e => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});



