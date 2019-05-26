import { DIRECTION, DIRECTIONS } from './constants'
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

const resize = ($self, $elm, $target, DIRNUM) => {

  let DIR = DIRECTION(DIRNUM)

  $elm.addEventListener('mousedown', (e) => {
    e.preventDefault()
    console.log(DIR)
    $self.state.clicked = true
    $self.state.client = {
      clientX: e.clientX,
      clientY: e.clientY
    }
  }, true)

  const mousemoveEvent = fromEvent(document, 'mousemove')
  const publisher = mousemoveEvent.pipe(debounce(() => interval(0)))
  publisher.subscribe(e => {
    e.preventDefault()
    if ($self.state.clicked === true) {
      resizeEvent(e)
      $self.state.client = {
        clientX: e.clientX,
        clientY: e.clientY
      }
    }
  })

  window.addEventListener('mouseup', (e) => {
    e.preventDefault()
    if ($self.state.clicked) {
      resizeEvent(e)
      $self.state.clicked = false
    }
  }, true)

  const resizeEvent = (e) => {
    const { client, clicked } = $self.state
    e.preventDefault()
    if (clicked) {
      switch (DIR) {
        case 'TOP': {
          console.log('TOP')
          $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px'
          $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px'
          return
        }
        case 'TOPRIGHT': {
          console.log('TOPRIGHT')
          $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px'
          $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px'
          $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px'
          return
        }
        case 'TOPLEFT': {
          $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px'
          $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px'
          $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px'
          $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px'
          return
        }
        case 'RIGHT': {
          $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px'
          return
        }
        case 'BOTTOMRIGHT': {
          $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px'
          $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px'
          return
        }
        case 'BOTTOM': {
          $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px'
          return
        }
        case 'BOTTOMLEFT': {
          $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px'
          $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px'
          $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px'
          return
        }
        case 'LEFT': {
          $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px'
          $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px'
          return
        }
      }
    }
  }
}

export default resize