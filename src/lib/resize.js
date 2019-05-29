import { DIRECTION, DIRECTIONS } from './constants'
// import { fromEvent, interval } from 'rxjs';
// import { debounce } from 'rxjs/operators';

const resize = ($self, $elm, $target, DIRNUM) => {
  let DIR = DIRECTION(DIRNUM)

  // let subscriber = mousemoveEvent.pipe(debounce(() => interval(0)))
  // subscriber.subscribe(e => {
  //   e.preventDefault()
  //   if ($self.state.clicked === true) {
  //     // console.log(DIR)
  //     resizeEvent(e, DIR)
  //     $self.state.client = {
  //       clientX: e.clientX,
  //       clientY: e.clientY
  //     }
  //   }
  // })
  $elm.addEventListener('mousedown', (e) => {
    e.preventDefault()
    $self.state.clicked = true
    $self.state.client = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    $self.state.DIRNUM = DIRNUM
  }, true)  

  window.addEventListener('mousemove', (e) => {
    e.preventDefault()
      if ($self.state.clicked === true) {
        resizeEvent(e, DIRECTION($self.state.DIRNUM))
        $self.state.client = {
          clientX: e.clientX,
          clientY: e.clientY
        }
      }
  }, true)


  window.addEventListener('mouseup', (e) => {
    e.preventDefault()
    if ($self.state.clicked) {
      resizeEvent(e)
      $self.state.clicked = false
    }
  }, true)

  const resizeEvent = (e, DIR) => {
    const { client, clicked } = $self.state
    e.preventDefault()
    if (clicked) {
      switch (DIR) {
        case 'TOP': {
          $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px'
          $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px'
          return
        }
        case 'TOPRIGHT': {
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
