var daa = [
    [0x9ee5ff, 0xf76700, 0xffc336, 0xc99518, 0xba5400, 0xffa600, 0xff6a00, 0xffc336, 0xc99518, 0x000000, 0xc48600],
    [0x001e40, 0x008cff, 0x003b82, 0x002857, 0x006ed4, 0x0051b5, 0x0083d4, 0x003b82, 0x002857],
    [0xf5c1ca, 0xfc217c, 0xff8091, 0xa64955, 0xabf9795, 0xfff7c2, 0xfffdf0, 0x9c354b, 0x5e2c37],
    [0x190b33, 0x6D00CC, 0x3F0077, 0x2f0059, 0xFF00A8, 0x00F2FF, 0xccf7ff, 0x8a24ff, 0x390e6b],
    [0x665336, 0x006942, 0xeddc8e, 0xd4c272, 0xd4c068, 0xa68044, 0xcf9a46, 0xeddc8e, 0xd4c272],
    [0x768521, 0xe5ff00, 0x8bdb09, 0x6eb004, 0xdede07, 0xcbe602, 0xe6de02, 0x8bdb09, 0x6eb004],
    [0x2e2e2e, 0x7a7a7a, 0xe6e6e6, 0xdbdbdb, 0xe6e6e6, 0xbababa, 0x949494, 0xdbdbdb, 0xdbdbdb, 0x595959, 0x424242],
    [0x3d0000, 0xff4800, 0x400a00, 0x000000, 0x400a00, 0xff0000, 0xffa600, 0x400a00,
    0x000000, 0x910000, 0x660000],
    [
  0x62247d, //Colors
  0xaa00ff, 
  0xcd69ff, 
  0x8d46b0, 
  0xd98cff, 
  0xc524ff, 
  0xe924ff, 
  0xcd69ff,
  0x8d46b0, 
  0x6e368a,
  0x8d46b0
],
[
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
]
];
var data = [
[
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [3, 3, 3, 4, 4],
      [3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3],
      [2, 2, 3, 3, 3],
      [2, 2, 3, 3, 3],
      [3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4],
      [3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 3, 0],
      [1, 1, 1, 3, 0],
      [1, 1, 1, 3, 0],
      [1, 1, 3, 0, 0],
      [1, 1, 3, 0, 0],
      [1, 1, 3, 0, 0],
      [1, 1, 1, 3, 0],
      [1, 1, 1, 3, 0],
      [0, 1, 1, 3, 0],
      [0, 1, 1, 1, 3],
      [0, 0, 1, 1, 3],
      [0, 1, 1, 1, 3],
      [0, 1, 1, 3, 0],
      [1, 1, 1, 3, 0],
      [1, 1, 1, 3, 0],
      [1, 1, 3, 0, 0],
      [1, 1, 3, 0, 0],
      [1, 1, 3, 0, 0],
      [4, 4, 4, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [3, 3, 1, 1, 1],
      [3, 3, 3, 1, 1],
      [3, 3, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 3, 3],
      [1, 1, 3, 3, 3],
      [1, 1, 1, 3, 3],
      [3, 1, 1, 1, 3],
      [3, 3, 1, 1, 1],
      [3, 3, 3, 1, 1],
      [3, 3, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [1, 1, 1, 1, 3],
      [1, 1, 1, 3, 3],
      [1, 1, 5, 3, 3],
      [1, 5, 5, 5, 3],
  [1, 5, 5, 5, 1],
  [1, 1, 5, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [6, 9, 0, 0, 6],
  [6, 9, 9, 6, 6],
  [7, 9, 9, 6, 7],
  [7, 9, 9, 9, 7],
  [6, 9, 9, 9, 7],
  [6, 3, 3, 3, 7],
  [6, 9, 9, 9, 7],
  [7, 9, 9, 9, 6],
  [7, 7, 9, 9, 6],
  [7, 7, 9, 9, 6],
  [7, 9, 9, 9, 6],
  [7, 3, 3, 3, 6],
  [7, 9, 9, 9, 7],
  [7, 9, 9, 9, 7],
  [7, 7, 9, 9, 7],
  [6, 7, 9, 9, 6],
  [6, 9, 9, 6, 6],
  [7, 9, 9, 7, 6],
  [7, 9, 9, 7, 6],
  [7, 9, 7, 7, 6],
  [7, 9, 6, 6, 6],
  [6, 9, 9, 7, 6],
  [6, 9, 9, 7, 7],
  [6, 9, 9, 9, 7],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [7, 3, 3, 3, 6],
  [7, 9, 9, 9, 6],
  [7, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [7, 3, 3, 3, 6],
  [6, 9, 9, 9, 7],
  [6, 9, 9, 9, 7],
  [6, 9, 9, 9, 7],
  [7, 9, 9, 9, 3],
  [7, 5, 5, 5, 6],
  [3, 3, 3, 3, 6],
  [0, 0, 0, 0, 0]
],
[
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 3, 1, 1, 3],
      [3, 1, 1, 1, 3],
      [3, 1, 1, 3, 3],
      [3, 1, 1, 1, 3],
      [3, 3, 2, 2, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 2, 4, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 2, 0, 2, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 4, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 0, 2, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 2, 4, 2, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 4, 0, 4, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 4, 2, 4, 2],
      [4, 2, 4, 2, 4],
      [2, 4, 2, 4, 2],
      [4, 2, 4, 2, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0],
      [2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0],
      [0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 2, 0, 0],
      [0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
],
[



      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 5, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 4, 2, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 5, 5, 0, 0],
      [0, 5, 5, 5, 0],
      [0, 0, 5, 5, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 5, 5, 0, 0],
      [0, 5, 5, 5, 0],
      [0, 0, 5, 5, 0],
      [0, 0, 5, 5, 0],
      [0, 1, 5, 5, 0],
      [0, 1, 1, 5, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 3, 3, 3, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [3, 1, 1, 1, 3],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 4, 2, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [5, 3, 3, 3, 5],
      [1, 3, 3, 3, 1],
      [5, 1, 3, 1, 5],
      [1, 5, 1, 5, 1],
      [0, 1, 5, 1, 5],
      [0, 5, 1, 5, 1],
      [0, 0, 5, 1, 5],
      [0, 0, 1, 5, 1],
      [0, 0, 5, 1, 5],
      [0, 5, 1, 5, 1],
      [0, 1, 5, 1, 5],
      [1, 5, 1, 5, 0],
      [5, 1, 5, 1, 0],
      [1, 5, 1, 0, 0],
      [5, 1, 5, 0, 0],
      [1, 5, 1, 0, 0],
      [0, 1, 5, 1, 0],
      [0, 5, 1, 5, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 1, 1, 1, 3],
      [3, 3, 1, 3, 3],
      [1, 3, 1, 3, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 3, 1, 3, 1],
      [1, 3, 1, 3, 1],
      [1, 3, 1, 3, 1],
      [1, 3, 3, 3, 1],
      [2, 2, 3, 4, 4],
      [3, 3, 3, 3, 3],
      [0, 3, 3, 3, 0],
      [5, 4, 5, 4, 5],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 2, 4, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 2, 4, 2, 0],
      [0, 0, 2, 0, 0],
      [2, 0, 0, 0, 2],
      [2, 2, 0, 2, 2],
      [2, 0, 0, 0, 2],
      [0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 3, 1, 1],
      [1, 3, 3, 3, 1],
      [1, 3, 5, 3, 1],
      [1, 3, 5, 3, 1],
      [1, 3, 3, 3, 1],
      [1, 1, 3, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 0, 4, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 4, 0, 0],
      [4, 4, 0, 4, 4],
      [0, 4, 0, 4, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [4, 0, 0, 0, 4],
      [0, 4, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 0, 4, 0],
      [4, 0, 0, 0, 4],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 5, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
],
[
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 0, 0, 0, 4],
      [0, 4, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 0, 2, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [3, 3, 3, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 3, 3, 3],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [3, 3, 3, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [2, 4, 4, 4, 2],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 4, 4, 4, 0],
      [4, 2, 2, 2, 4],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 5, 5, 5, 1],
      [1, 1, 3, 3, 3],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [3, 3, 3, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 3, 3, 3],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [3, 3, 3, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 3, 3, 3],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [3, 3, 3, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 3, 3, 3],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [3, 3, 3, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 3, 3, 3],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [3, 3, 3, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
  [5, 5, 5, 5, 5],
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3],
  [2, 4, 3, 3, 3],
  [4, 2, 3, 3, 3],
  [7, 7, 3, 3, 4],
  [6, 7, 7, 2, 2],
  [6, 6, 7, 2, 2],
  [6, 6, 6, 2, 7],
  [7, 6, 7, 7, 7],
  [7, 2, 4, 2, 7],
  [7, 7, 3, 4, 7],
  [7, 3, 3, 3, 7],
  [7, 4, 3, 4, 7],
  [4, 2, 3, 2, 4],
  [7, 3, 3, 7, 7],
  [7, 3, 3, 3, 7],
  [7, 3, 2, 2, 2],
  [2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
],
[
      [1, 5, 5, 5, 1],
      [1, 1, 5, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 1, 1, 1, 1],
      [3, 3, 3, 1, 1],
      [3, 3, 3, 3, 1],
      [3, 1, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [3, 1, 3, 3, 3],
      [3, 1, 1, 3, 3],
      [3, 1, 1, 3, 3],
      [3, 3, 1, 3, 3],
      [3, 3, 1, 3, 3],
      [3, 3, 1, 3, 3],
      [3, 3, 1, 3, 3],
      [3, 1, 1, 3, 3],
      [3, 1, 3, 3, 3],
      [3, 2, 3, 3, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 2, 4, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 4, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [3, 1, 1, 1, 1],
      [3, 3, 3, 3, 3],
      [3, 3, 3, 3, 1],
      [3, 3, 3, 3, 1],
      [3, 3, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 3],
      [1, 3, 3, 3, 3],
      [1, 3, 3, 1, 1],
      [1, 3, 3, 1, 3],
      [1, 1, 3, 1, 3],
      [1, 1, 1, 1, 3],
      [3, 1, 3, 3, 3],
      [3, 1, 3, 3, 3],
      [3, 1, 1, 3, 3],
      [3, 1, 1, 3, 3],
      [3, 3, 1, 3, 3],
      [3, 3, 1, 1, 1],
      [3, 3, 1, 1, 1],
      [3, 3, 3, 3, 1],
      [3, 3, 3, 3, 1],
      [3, 3, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 5, 1, 0],
      [1, 1, 5, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
      [0, 4, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 1, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 3, 1, 0],
      [0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 3, 1, 0],
      [0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
],
[
      [1, 1, 1, 1, 1],
      [1, 1, 5, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 5, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 5, 1, 1],
      [1, 5, 5, 5, 1],
      [1, 5, 5, 5, 1],
      [1, 1, 5, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 2, 2, 2, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 7, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 6, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 6, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 7, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0],
      [7, 0, 0, 0, 7],
      [7, 1, 1, 1, 7],
      [7, 1, 1, 1, 7],
      [7, 2, 4, 2, 7],
      [7, 7, 7, 7, 7],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 3, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 0, 7, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 0, 3, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 0, 7, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 5, 1, 1],
      [1, 5, 5, 5, 1],
      [4, 4, 4, 4, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 3, 1, 0],
      [0, 1, 2, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]


  
],
[
  [1, 5, 5, 5, 1],
  [1, 1, 5, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 8, 8, 8, 0],
  [0, 8, 8, 8, 0],
  [0, 8, 8, 8, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 4, 4, 4, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 4, 4, 4, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 4, 4, 4, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 3, 3, 3, 0],
  [0, 9, 9, 9, 0],
  [0, 8, 8, 8, 0],
  [0, 9, 9, 9, 0],
  [0, 7, 7, 7, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 3, 3, 3, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 3, 3, 3, 0],
  [0, 9, 9, 9, 0],
  [0, 9, 9, 9, 0],
  [0, 8, 8, 8, 0],
  [0, 5, 5, 5, 0],
  [0, 3, 3, 3, 0]
],
[
    [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 2, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 1, 3, 3, 3],
      [3, 1, 1, 1, 3],
      [3, 3, 3, 1, 3],
      [3, 3, 3, 1, 3],
      [3, 3, 3, 1, 3],
      [3, 1, 1, 1, 3],
      [3, 1, 3, 3, 3],
      [3, 2, 3, 3, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 1, 3, 1, 3],
      [1, 1, 1, 1, 1],
      [1, 3, 1, 3, 1],
      [1, 1, 1, 1, 1],
      [3, 2, 3, 2, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 2, 0, 2, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 3, 1, 3, 3],
      [1, 1, 1, 1, 1],
      [1, 1, 3, 1, 1],
      [1, 3, 3, 3, 1],
      [1, 1, 3, 1, 1],
      [1, 1, 1, 1, 1],
      [3, 3, 2, 3, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 3, 3, 1, 1],
      [3, 1, 1, 1, 1],
      [3, 1, 3, 3, 3],
      [3, 1, 3, 3, 3],
      [3, 1, 3, 3, 3],
      [3, 1, 1, 1, 1],
      [3, 3, 3, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 4, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [4, 4, 0, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 4, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 6, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 9, 9, 9, 0],
      [0, 9, 9, 9, 0],
      [0, 3, 3, 3, 0],
      [0, 9, 9, 9, 0],
      [0, 8, 8, 8, 0],
      [0, 9, 9, 9, 0],
      [0, 7, 7, 7, 0],
      [0, 9, 9, 9, 0],
      [0, 9, 9, 9, 0],
      [0, 9, 9, 9, 0],
      [0, 3, 3, 3, 0],
      [0, 9, 9, 9, 0],
      [0, 8, 8, 8, 0],
      [0, 1, 1, 1, 0],
      [0, 3, 3, 3, 0]
],
[
  [6, 8, 8, 8, 6],
  [6, 8, 8, 8, 6],
  [6, 9, 8, 9, 7],
  [6, 9, 9, 9, 7],
  [7, 9, 9, 9, 6],
  [7, 9, 9, 9, 6],
  [7, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 7, 7, 3, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 7],
  [6, 9, 9, 9, 7],
  [6, 9, 9, 9, 7],
  [6, 3, 3, 3, 6],
  [7, 9, 9, 9, 6],
  [7, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 3, 3, 3, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 7],
  [6, 7, 3, 9, 7],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [6, 9, 9, 9, 6],
  [7, 3, 3, 3, 7],
  [7, 9, 9, 9, 7],
  [7, 9, 9, 9, 7],
  [2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 5, 1, 1],
  [1, 1, 5, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 4, 4, 4, 0],
  [0, 7, 7, 7, 0],
  [0, 1, 1, 1, 0],
  [0, 2, 3, 2, 0],
  [0, 1, 1, 1, 0],
  [6, 6, 1, 6, 6],
  [0, 1, 1, 1, 0],
  [0, 4, 4, 4, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 3, 3, 7],
  [7, 1, 1, 1, 1],
  [7, 7, 7, 1, 1],
  [6, 6, 7, 7, 1],
  [7, 7, 7, 1, 1],
  [7, 1, 1, 1, 1],
  [1, 1, 1, 1, 7],
  [1, 1, 7, 7, 7],
  [1, 7, 7, 6, 6],
  [1, 1, 7, 7, 7],
  [1, 1, 1, 1, 7],
  [4, 4, 4, 4, 4],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 8, 8],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 8, 8, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [8, 8, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 9, 9],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 7, 1, 0],
  [0, 1, 2, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
],
[
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [0, 9, 9, 9, 0],
  [0, 0, 0, 0, 0],
  [9, 9, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 9, 9, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 9, 9],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [9, 9, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 9, 9],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [9, 9, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 9, 9, 0],
  [0, 0, 9, 9, 0],
  [0, 0, 0, 0, 0],
  [0, 9, 9, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [4, 4, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0],
  [0, 0, 7, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 4, 0, 0],
  [0, 0, 7, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 6, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 3, 1, 0],
  [0, 1, 2, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 3, 1, 0],
  [0, 1, 2, 1, 0],
  [0, 0, 0, 0, 0]
]
];