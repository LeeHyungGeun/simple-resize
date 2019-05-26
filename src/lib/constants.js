export const DIRECTIONS = {
  TOPLEFT: 0,
  TOP: 1, 
  TOPRIGHT: 2,
  RIGHT: 3,
  BOTTOMRIGHT: 4,
  BOTTOM: 5,
  BOTTOMLEFT: 6,
  LEFT: 7
}
export const DIRECTION = (DIRNUM) => Object.keys(DIRECTIONS)[DIRNUM]

export const componentStyle = {
  'background-color': 'red',
  width: '200px',
  height: '300px',
  top: '100px',
  left: '500px',
  position: 'absolute'
}
export const componentResizeStyle = {
  border: '3px solid #3899ec'
}
export const resizeButtonStyle = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  'border-radius': '50%',
  transform: 'translate(-50%, -50%)',
  background: 'blue',
  cursor: 'pointer'
}
