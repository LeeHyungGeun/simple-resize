// import 'core-js/shim'
// import 'regenerator-runtime/runtime'
import watType from 'wat-type'

import component from './component'

const simpleResize = function simpleResize($elm) {
  const $self = this
  if (!watType.isHTMLElement($elm) && !watType.isString($elm)) {
    return new Error('$elm should be string or HTMLElement.')
  }

  if (watType.isHTMLElement($elm)) {
    $self.$elm = $elm
  } else {
    $self.$elm = document.querySelector($elm)
  }

  if (!$self.$elm) {
    return
  }

  component($self, $self.$elm)
}

// if (typeof window === 'object') {
//   window.simpleResize = simpleResize
// }
export {
  simpleResize
}
export default simpleResize
