import { componentStyle, resizeButtonStyle, componentResizeStyle } from './constants'
import { DIRECTIONS } from './constants'
import resize from './resize'
import state from './state'

let component = ($self, $elm, options = {}) => {
  $self.options = Object.assign({}, componentStyle, options)
  // $self.$elm = $elm
  $self.state = state

  // setStyle($elm)
  setComponentStyle($elm, $self.options)
  setResize($self, $elm)
}

const setComponentStyle = ($elm, options) => {  
  $elm.style = objToStyle(options)
}
const objToStyle = (options) => {
  let style = ''
  for (let key in options) {
    style += `${key}: ${options[key]};`
  }
  return style
}
const setResize = ($self, $elm) => {
  const $top = document.createElement('div')
  const $topRight = document.createElement('div')
  const $topLeft = document.createElement('div')
  const $right = document.createElement('div')
  const $bottomRight = document.createElement('div')
  const $bottom = document.createElement('div')
  const $bottomLeft = document.createElement('div')
  const $left = document.createElement('div')
  
  const _resizeButtonStyle = objToStyle(resizeButtonStyle)
  $top.style = `top: 0; left: 50%; ${_resizeButtonStyle}`
  $topRight.style = `top: 0; left: 100%; ${_resizeButtonStyle}`
  $topLeft.style = `top: 0; left: 0; ${_resizeButtonStyle}`
  $right.style = `top: 50%; left: 100%; ${_resizeButtonStyle}`
  $bottomRight.style = `top: 100%; left: 100%; ${_resizeButtonStyle}`
  $bottom.style = `top: 100%; left: 50%; ${_resizeButtonStyle}`
  $bottomLeft.style = `top: 100%; left: 0; ${_resizeButtonStyle}`
  $left.style = `top: 50%; left: 0; ${_resizeButtonStyle}`

  resize($self, $top, $elm, DIRECTIONS.TOP)
  resize($self, $topRight, $elm, DIRECTIONS.TOPRIGHT)
  resize($self, $topLeft, $elm, DIRECTIONS.TOPLEFT)
  resize($self, $right, $elm, DIRECTIONS.RIGHT)
  resize($self, $bottomRight, $elm, DIRECTIONS.BOTTOMRIGHT)
  resize($self, $bottom, $elm, DIRECTIONS.BOTTOM)
  resize($self, $bottomLeft, $elm, DIRECTIONS.BOTTOMLEFT)
  resize($self, $left, $elm, DIRECTIONS.LEFT)

  window.addEventListener('click', (e) => {
    if (e.path.indexOf($elm) === -1) {
      $elm.style.border = ''
      $elm.contains($top) && $elm.removeChild($top)
      $elm.contains($topRight) && $elm.removeChild($topRight)
      $elm.contains($topLeft) && $elm.removeChild($topLeft)
      $elm.contains($right) && $elm.removeChild($right)
      $elm.contains($bottomRight) && $elm.removeChild($bottomRight)
      $elm.contains($bottom) && $elm.removeChild($bottom)
      $elm.contains($bottomLeft) && $elm.removeChild($bottomLeft)
      $elm.contains($left) && $elm.removeChild($left)
    } else {
      $elm.style.border = componentResizeStyle.border
      $elm.appendChild($top)
      $elm.appendChild($topRight)
      $elm.appendChild($topLeft)
      $elm.appendChild($right)
      $elm.appendChild($bottomRight)
      $elm.appendChild($bottom)
      $elm.appendChild($bottomLeft)
      $elm.appendChild($left)
    }
  }, true)
}

export default component
