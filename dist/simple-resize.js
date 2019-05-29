(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var watType = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports);
  }(commonjsGlobal, function (exports) {
    var watType = function watType(type) {
      var _type = /^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1];

      if (_type === 'Number') {
        _type = type !== type ? 'NaN' : _type;
      }

      if (_type.startsWith('HTML') && _type.endsWith('Element')) {
        _type = 'HTMLElement';
      } // [object String]
      // [object Number]
      // [object Boolean
      // [object Null]
      // [object Undefined]
      // [object Object]
      // [object RegExp]
      // [object Function]
      // [object Array]
      // TODO: figure out Symbol type


      return _type;
    };

    var isString = function isString(type) {
      return watType(type) === 'String';
    };

    var isNumber = function isNumber(type) {
      return watType(type) === 'Number';
    };

    var isBoolean = function isBoolean(type) {
      return watType(type) === 'Boolean';
    };

    var isNull = function isNull(type) {
      return watType(type) === 'Null';
    };

    var isUndefined = function isUndefined(type) {
      return watType(type) === 'Undefined';
    };

    var isNaN = function isNaN(type) {
      return watType(type) === 'NaN';
    };

    var isObject = function isObject(type) {
      return watType(type) === 'Object';
    };

    var isFunction = function isFunction(type) {
      return watType(type) === 'Function';
    };

    var isRegExp = function isRegExp(type) {
      return watType(type) === 'RegExp';
    };

    var isHTMLElement = function isHTMLElement(type) {
      return watType(type) === 'HTMLElement';
    };

    var watType$1 = {
      watType: watType,
      isString: isString,
      isNumber: isNumber,
      isBoolean: isBoolean,
      isNull: isNull,
      isUndefined: isUndefined,
      isNaN: isNaN,
      isObject: isObject,
      isFunction: isFunction,
      isRegExp: isRegExp,
      isHTMLElement: isHTMLElement
    };

    exports.default = watType$1;
    exports.isBoolean = isBoolean;
    exports.isFunction = isFunction;
    exports.isHTMLElement = isHTMLElement;
    exports.isNaN = isNaN;
    exports.isNull = isNull;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isRegExp = isRegExp;
    exports.isString = isString;
    exports.isUndefined = isUndefined;
    exports.watType = watType;

    Object.defineProperty(exports, '__esModule', { value: true });

  }));

  });

  var watType$1 = unwrapExports(watType);

  var DIRECTIONS = {
    TOPLEFT: 0,
    TOP: 1,
    TOPRIGHT: 2,
    RIGHT: 3,
    BOTTOMRIGHT: 4,
    BOTTOM: 5,
    BOTTOMLEFT: 6,
    LEFT: 7
  };
  var DIRECTION = function DIRECTION(DIRNUM) {
    return Object.keys(DIRECTIONS)[DIRNUM];
  };
  var componentStyle = {
    'background-color': 'red',
    width: '200px',
    height: '300px',
    top: '100px',
    left: '500px',
    position: 'absolute'
  };
  var componentResizeStyle = {
    border: '3px solid #3899ec'
  };
  var resizeButtonStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    'border-radius': '50%',
    transform: 'translate(-50%, -50%)',
    background: 'blue',
    cursor: 'pointer'
  };

  // import { debounce } from 'rxjs/operators';

  var resize = function resize($self, $elm, $target, DIRNUM) {
    var DIR = DIRECTION(DIRNUM); // let subscriber = mousemoveEvent.pipe(debounce(() => interval(0)))
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

    $elm.addEventListener('mousedown', function (e) {
      e.preventDefault();
      $self.state.clicked = true;
      $self.state.client = {
        clientX: e.clientX,
        clientY: e.clientY
      };
      $self.state.DIRNUM = DIRNUM;
    }, true);
    window.addEventListener('mousemove', function (e) {
      e.preventDefault();

      if ($self.state.clicked === true) {
        resizeEvent(e, DIRECTION($self.state.DIRNUM));
        $self.state.client = {
          clientX: e.clientX,
          clientY: e.clientY
        };
      }
    }, true);
    window.addEventListener('mouseup', function (e) {
      e.preventDefault();

      if ($self.state.clicked) {
        resizeEvent(e);
        $self.state.clicked = false;
      }
    }, true);

    var resizeEvent = function resizeEvent(e, DIR) {
      var _$self$state = $self.state,
          client = _$self$state.client,
          clicked = _$self$state.clicked;
      e.preventDefault();

      if (clicked) {
        switch (DIR) {
          case 'TOP':
            {
              $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px';
              $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px';
              return;
            }

          case 'TOPRIGHT':
            {
              $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px';
              $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px';
              $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px';
              return;
            }

          case 'TOPLEFT':
            {
              $target.style.height = parseInt($target.style.height) + Number(client.clientY) - Number(e.clientY) + 'px';
              $target.style.top = parseInt($target.style.top) - (Number(client.clientY) - Number(e.clientY)) + 'px';
              $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px';
              $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px';
              return;
            }

          case 'RIGHT':
            {
              $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px';
              return;
            }

          case 'BOTTOMRIGHT':
            {
              $target.style.width = parseInt($target.style.width) + Number(e.clientX) - Number(client.clientX) + 'px';
              $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px';
              return;
            }

          case 'BOTTOM':
            {
              $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px';
              return;
            }

          case 'BOTTOMLEFT':
            {
              $target.style.height = parseInt($target.style.height) + Number(e.clientY) - Number(client.clientY) + 'px';
              $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px';
              $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px';
              return;
            }

          case 'LEFT':
            {
              $target.style.width = parseInt($target.style.width) + Number(client.clientX) - Number(e.clientX) + 'px';
              $target.style.left = parseInt($target.style.left) + (Number(e.clientX) - Number(client.clientX)) + 'px';
              return;
            }
        }
      }
    };
  };

  var state = {
    clicked: false,
    prevClient: {
      clientX: 0,
      clientY: 0
    }
  };

  var component = function component($self, $elm) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    $self.options = Object.assign({}, componentStyle, options); // $self.$elm = $elm

    $self.state = state; // setStyle($elm)

    setComponentStyle($elm, $self.options);
    setResize($self, $elm);
  };

  var setComponentStyle = function setComponentStyle($elm, options) {
    $elm.style = objToStyle(options);
  };

  var objToStyle = function objToStyle(options) {
    var style = '';

    for (var key in options) {
      style += "".concat(key, ": ").concat(options[key], ";");
    }

    return style;
  };

  var setResize = function setResize($self, $elm) {
    var $top = document.createElement('div');
    var $topRight = document.createElement('div');
    var $topLeft = document.createElement('div');
    var $right = document.createElement('div');
    var $bottomRight = document.createElement('div');
    var $bottom = document.createElement('div');
    var $bottomLeft = document.createElement('div');
    var $left = document.createElement('div');

    var _resizeButtonStyle = objToStyle(resizeButtonStyle);

    $top.style = "top: 0; left: 50%; ".concat(_resizeButtonStyle);
    $topRight.style = "top: 0; left: 100%; ".concat(_resizeButtonStyle);
    $topLeft.style = "top: 0; left: 0; ".concat(_resizeButtonStyle);
    $right.style = "top: 50%; left: 100%; ".concat(_resizeButtonStyle);
    $bottomRight.style = "top: 100%; left: 100%; ".concat(_resizeButtonStyle);
    $bottom.style = "top: 100%; left: 50%; ".concat(_resizeButtonStyle);
    $bottomLeft.style = "top: 100%; left: 0; ".concat(_resizeButtonStyle);
    $left.style = "top: 50%; left: 0; ".concat(_resizeButtonStyle);
    resize($self, $top, $elm, DIRECTIONS.TOP);
    resize($self, $topRight, $elm, DIRECTIONS.TOPRIGHT);
    resize($self, $topLeft, $elm, DIRECTIONS.TOPLEFT);
    resize($self, $right, $elm, DIRECTIONS.RIGHT);
    resize($self, $bottomRight, $elm, DIRECTIONS.BOTTOMRIGHT);
    resize($self, $bottom, $elm, DIRECTIONS.BOTTOM);
    resize($self, $bottomLeft, $elm, DIRECTIONS.BOTTOMLEFT);
    resize($self, $left, $elm, DIRECTIONS.LEFT);
    window.addEventListener('click', function (e) {
      if (e.path.indexOf($elm) === -1) {
        $elm.style.border = '';
        $elm.contains($top) && $elm.removeChild($top);
        $elm.contains($topRight) && $elm.removeChild($topRight);
        $elm.contains($topLeft) && $elm.removeChild($topLeft);
        $elm.contains($right) && $elm.removeChild($right);
        $elm.contains($bottomRight) && $elm.removeChild($bottomRight);
        $elm.contains($bottom) && $elm.removeChild($bottom);
        $elm.contains($bottomLeft) && $elm.removeChild($bottomLeft);
        $elm.contains($left) && $elm.removeChild($left);
      } else {
        $elm.style.border = componentResizeStyle.border;
        $elm.appendChild($top);
        $elm.appendChild($topRight);
        $elm.appendChild($topLeft);
        $elm.appendChild($right);
        $elm.appendChild($bottomRight);
        $elm.appendChild($bottom);
        $elm.appendChild($bottomLeft);
        $elm.appendChild($left);
      }
    }, true);
  };

  //   const $self = this
  //   if (!watType.isHTMLElement($elm) && !watType.isString($elm)) {
  //     return new Error('$elm should be string or HTMLElement.')
  //   }
  //   if (watType.isHTMLElement($elm)) {
  //     $self.$elm = $elm
  //   } else {
  //     $self.$elm = document.querySelector($elm)
  //   }
  //   if (!$self.$elm) {
  //     return
  //   }
  //   component($self, $self.$elm)
  // }

  var SimpleResize = function SimpleResize($elm) {
    _classCallCheck(this, SimpleResize);

    this.$elm = $elm;

    if (!watType$1.isHTMLElement($elm) && !watType$1.isString($elm)) {
      return new Error('$elm should be string or HTMLElement.');
    }

    if (watType$1.isHTMLElement($elm)) {
      this.$elm = $elm;
    } else {
      this.$elm = document.querySelector($elm);
    }

    if (!this.$elm) {
      return;
    }

    component(this, this.$elm);
  }; // if (typeof window === 'object') {

  exports.SimpleResize = SimpleResize;
  exports.default = SimpleResize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simple-resize.js.map
