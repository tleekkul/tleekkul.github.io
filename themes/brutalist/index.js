import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});

// tleekkul.github.io/node_modules/@jsonresume/core/src/ssr/index.js
import { renderToStaticMarkup } from "react-dom/server";

// tleekkul.github.io/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// tleekkul.github.io/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// tleekkul.github.io/node_modules/styled-components/dist/styled-components.esm.js
import t, { createElement as n } from "react";

// tleekkul.github.io/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// tleekkul.github.io/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}

// tleekkul.github.io/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// tleekkul.github.io/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  // c(ontainer)
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}

// tleekkul.github.io/node_modules/stylis/src/Prefixer.js
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return WEBKIT + value + value;
    // mask-composite
    case 4855:
      return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b2, c2, d2, e, f2) {
        return MS + a2 + ":" + b2 + f2 + (c2 ? MS + a2 + "-span:" + (d2 ? e : +e - +b2) + f2 : "") + value;
      });
    // position: sticky
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}

// tleekkul.github.io/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case NAMESPACE:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// tleekkul.github.io/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                // :placeholder
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}

// tleekkul.github.io/node_modules/styled-components/dist/styled-components.esm.js
var r;
var i;
var l = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var a = "active";
var c = "data-styled-version";
var u = "6.5.3";
var d = "/*!sc*/\n";
var h = "undefined" != typeof window && "undefined" != typeof document;
var p = void 0 === t.createContext;
function f(e) {
  if ("undefined" != typeof process && void 0 !== process.env) {
    const t2 = process.env[e];
    if (void 0 !== t2 && "" !== t2) return "false" !== t2;
  }
}
var m = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = f("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : f("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && "production" !== process.env.NODE_ENV);
var g = "sc-keyframes-";
var y = {};
var v = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" } : {};
function S(e, ...t2) {
  return "production" === process.env.NODE_ENV ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t2.length > 0 ? ` Args: ${t2.join(", ")}` : ""}`) : new Error((function(...e2) {
    let t3 = e2[0];
    const n2 = [];
    for (let t4 = 1, o = e2.length; t4 < o; t4 += 1) n2.push(e2[t4]);
    return n2.forEach((e3) => {
      t3 = t3.replace(/%[a-z]/, e3);
    }), t3;
  })(v[e], ...t2).trim());
}
var b = 1 << 30;
var w = /* @__PURE__ */ new Map();
var N = /* @__PURE__ */ new Map();
var C = 1;
var P = (e) => {
  if (w.has(e)) return w.get(e);
  for (; N.has(C); ) C++;
  const t2 = C++;
  if ("production" !== process.env.NODE_ENV && ((0 | t2) < 0 || t2 > b)) throw S(16, `${t2}`);
  return w.set(e, t2), N.set(t2, e), t2;
};
var O = (e) => N.get(e);
var E = (e, t2) => {
  C = t2 + 1, w.set(e, t2), N.set(t2, e);
};
var I = /invalid hook call/i;
var A = /* @__PURE__ */ new Set();
var _ = (e, n2) => {
  if ("production" !== process.env.NODE_ENV) {
    if (p) return;
    const o = `The component ${e}${n2 ? ` with the id of "${n2}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s = console.error;
    try {
      let e2 = true;
      console.error = (t2, ...n3) => {
        I.test(t2) ? (e2 = false, A.delete(o)) : s(t2, ...n3);
      }, "function" == typeof t.useState && t.useState(null), e2 && !A.has(o) && (console.warn(o), A.add(o));
    } catch (e2) {
      I.test(e2.message) && A.delete(o);
    } finally {
      console.error = s;
    }
  }
};
var x = Object.freeze([]);
var $ = Object.freeze({});
function R(e, t2, n2 = $) {
  return e.theme !== n2.theme && e.theme || t2 || n2.theme;
}
var j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var k = /(^-|-$)/g;
function T(e) {
  return e.replace(j, "-").replace(k, "");
}
var D = /(a)(d)/gi;
var M = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
  let t2, n2 = "";
  for (t2 = Math.abs(e); t2 > 52; t2 = t2 / 52 | 0) n2 = M(t2 % 52) + n2;
  return (M(t2 % 52) + n2).replace(D, "$1-$2");
}
var G = 5381;
var F = (e, t2) => {
  let n2 = t2.length;
  for (; n2; ) e = 33 * e ^ t2.charCodeAt(--n2);
  return e;
};
var z = (e) => F(G, e);
function W(e) {
  return V(z(e) >>> 0);
}
function B(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
function q(e) {
  return L(e) ? `styled.${e}` : `Styled(${B(e)})`;
}
var H = Symbol.for("react.memo");
var Y = Symbol.for("react.forward_ref");
var U = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true };
var J = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
var X = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var Z = { [Y]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [H]: X };
function K(e) {
  return ("type" in (t2 = e) && t2.type.$$typeof) === H ? X : "$$typeof" in e ? Z[e.$$typeof] : U;
  var t2;
}
var Q = Object.defineProperty;
var ee = Object.getOwnPropertyNames;
var te = Object.getOwnPropertySymbols;
var ne = Object.getOwnPropertyDescriptor;
var oe = Object.getPrototypeOf;
var se = Object.prototype;
function re(e, t2, n2) {
  if ("string" != typeof t2) {
    const o = oe(t2);
    o && o !== se && re(e, o, n2);
    const s = ee(t2).concat(te(t2)), r2 = K(e), i2 = K(t2);
    for (let o2 = 0; o2 < s.length; ++o2) {
      const l2 = s[o2];
      if (!(l2 in J || n2 && n2[l2] || i2 && l2 in i2 || r2 && l2 in r2)) {
        const n3 = ne(t2, l2);
        try {
          Q(e, l2, n3);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
function ie(e) {
  return "function" == typeof e;
}
var le = Symbol.for("react.forward_ref");
function ae(e) {
  return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === le && "styledComponentId" in e;
}
function ce(e, t2) {
  return e && t2 ? e + " " + t2 : e || t2 || "";
}
function ue(e, t2) {
  return e.join(t2 || "");
}
function de(e) {
  let t2 = "";
  for (let n2 = 0; n2 < e.length; n2++) t2 += e[n2] + d;
  return t2;
}
function he(e) {
  return e ? e.replaceAll(d, "") : e;
}
function pe(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fe(e, t2, n2 = false) {
  if (!n2 && !pe(e) && !Array.isArray(e)) return t2;
  if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e[n3] = fe(e[n3], t2[n3]);
  else if (pe(t2)) for (const n3 in t2) e[n3] = fe(e[n3], t2[n3]);
  return e;
}
function me(e) {
  if (!p) return null;
  const n2 = t.cache;
  return n2 ? n2(e) : null;
}
function ge(e, t2) {
  Object.defineProperty(e, "toString", { value: t2 });
}
var ye = class {
  constructor(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e) {
    if (e === this._cGroup) return this._cIndex;
    let t2 = this._cIndex;
    if (e > this._cGroup) for (let n2 = this._cGroup; n2 < e; n2++) t2 += this.groupSizes[n2];
    else for (let n2 = this._cGroup - 1; n2 >= e; n2--) t2 -= this.groupSizes[n2];
    return this._cGroup = e, this._cIndex = t2, t2;
  }
  insertRules(e, t2) {
    if (e >= this.groupSizes.length) {
      const t3 = this.groupSizes, n3 = t3.length;
      let o2 = n3;
      for (; e >= o2; ) if (o2 <<= 1, o2 < 0) throw S(16, `${e}`);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(t3), this.length = o2;
      for (let e2 = n3; e2 < o2; e2++) this.groupSizes[e2] = 0;
    }
    let n2 = this.indexOfGroup(e + 1), o = 0;
    for (let s = 0, r2 = t2.length; s < r2; s++) this.tag.insertRule(n2, t2[s]) && (this.groupSizes[e]++, n2++, o++);
    o > 0 && this._cGroup > e && (this._cIndex += o);
  }
  clearGroup(e) {
    if (e < this.length) {
      const t2 = this.groupSizes[e], n2 = this.indexOfGroup(e), o = n2 + t2;
      this.groupSizes[e] = 0;
      for (let e2 = n2; e2 < o; e2++) this.tag.deleteRule(n2);
      t2 > 0 && this._cGroup > e && (this._cIndex -= t2);
    }
  }
  getGroup(e) {
    let t2 = "";
    if (e >= this.length || 0 === this.groupSizes[e]) return t2;
    const n2 = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n2;
    for (let e2 = o; e2 < s; e2++) t2 += this.tag.getRule(e2) + d;
    return t2;
  }
};
var ve = `style[${l}][${c}="${u}"]`;
var Se = new RegExp(`^${l}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
var be = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType;
var we = (e) => {
  if (!e) return document;
  if (be(e)) return e;
  if ("getRootNode" in e) {
    const t2 = e.getRootNode();
    if (be(t2)) return t2;
  }
  return document;
};
var Ne = (e, t2, n2) => {
  const o = n2.split(",");
  let s;
  for (let n3 = 0, r2 = o.length; n3 < r2; n3++) (s = o[n3]) && e.registerName(t2, s);
};
var Ce = (e, t2) => {
  var n2;
  const o = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(d), s = [];
  for (let t3 = 0, n3 = o.length; t3 < n3; t3++) {
    const n4 = o[t3].trim();
    if (!n4) continue;
    const r2 = n4.match(Se);
    if (r2) {
      const t4 = 0 | parseInt(r2[1], 10), n5 = r2[2];
      0 !== t4 && (E(n5, t4), Ne(e, n5, r2[3]), e.getTag().insertRules(t4, s)), s.length = 0;
    } else s.push(n4);
  }
};
var Pe = (e) => {
  const t2 = we(e.options.target).querySelectorAll(ve);
  for (let n2 = 0, o = t2.length; n2 < o; n2++) {
    const o2 = t2[n2];
    o2 && o2.getAttribute(l) !== a && (Ce(e, o2), o2.parentNode && o2.parentNode.removeChild(o2));
  }
};
var Oe = false;
function Ee() {
  if (false !== Oe) return Oe;
  if ("undefined" != typeof document) {
    const e = document.head.querySelector('meta[property="csp-nonce"]');
    if (e) return Oe = e.nonce || e.getAttribute("content") || void 0;
    const t2 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t2) return Oe = t2.getAttribute("content") || void 0;
  }
  return Oe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ie = (e, t2) => {
  const n2 = document.head, o = e || n2, s = document.createElement("style"), r2 = ((e2) => {
    const t3 = Array.from(e2.querySelectorAll(`style[${l}]`));
    return t3[t3.length - 1];
  })(o), i2 = void 0 !== r2 ? r2.nextSibling : null;
  s.setAttribute(l, a), s.setAttribute(c, u);
  const d2 = t2 || Ee();
  return d2 && s.setAttribute("nonce", d2), o.insertBefore(s, i2), s;
};
var Ae = class {
  constructor(e, t2) {
    this.element = Ie(e, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e2) => {
      var t3;
      if (e2.sheet) return e2.sheet;
      const n2 = null !== (t3 = e2.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
      for (let t4 = 0, o = n2.length; t4 < o; t4++) {
        const o2 = n2[t4];
        if (o2.ownerNode === e2) return o2;
      }
      throw S(17);
    })(this.element), this.length = 0;
  }
  insertRule(e, t2) {
    try {
      return this.sheet.insertRule(t2, e), this.length++, true;
    } catch (e2) {
      return false;
    }
  }
  deleteRule(e) {
    this.sheet.deleteRule(e), this.length--;
  }
  getRule(e) {
    const t2 = this.sheet.cssRules[e];
    return t2 && t2.cssText ? t2.cssText : "";
  }
};
var _e = class {
  constructor(e, t2) {
    this.element = Ie(e, t2), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e, t2) {
    if (e <= this.length && e >= 0) {
      const n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }
  getRule(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }
};
var xe = class {
  constructor(e) {
    this.rules = [], this.length = 0;
  }
  insertRule(e, t2) {
    return e <= this.length && (e === this.length ? this.rules.push(t2) : this.rules.splice(e, 0, t2), this.length++, true);
  }
  deleteRule(e) {
    this.rules.splice(e, 1), this.length--;
  }
  getRule(e) {
    return e < this.length ? this.rules[e] : "";
  }
};
var $e = h;
var Re = { isServer: !h, useCSSOMInjection: !m };
var je = class _je {
  static registerId(e) {
    return P(e);
  }
  constructor(e = $, t2 = {}, n2) {
    this.options = Object.assign(Object.assign({}, Re), e), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e.isServer, !this.server && h && $e && ($e = false, Pe(this)), ge(this, () => ((e2) => {
      const t3 = e2.getTag(), { length: n3 } = t3;
      let o = "";
      for (let s = 0; s < n3; s++) {
        const n4 = O(s);
        if (void 0 === n4) continue;
        const r2 = e2.names.get(n4);
        if (void 0 === r2 || !r2.size) continue;
        const i2 = t3.getGroup(s);
        if (0 === i2.length) continue;
        const a2 = l + ".g" + s + '[id="' + n4 + '"]';
        let c2 = "";
        for (const e3 of r2) e3.length > 0 && (c2 += e3 + ",");
        o += i2 + a2 + '{content:"' + c2 + '"}' + d;
      }
      return o;
    })(this));
  }
  rehydrate() {
    !this.server && h && Pe(this);
  }
  reconstructWithOptions(e, t2 = true) {
    const n2 = new _je(Object.assign(Object.assign({}, this.options), e), this.gs, t2 && this.names || void 0);
    return n2.keyframeIds = new Set(this.keyframeIds), !this.server && h && e.target !== this.options.target && we(this.options.target) !== we(e.target) && Pe(n2), n2;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ isServer: e2, useCSSOMInjection: t2, target: n2, nonce: o }) => e2 ? new xe(n2) : t2 ? new Ae(n2, o) : new _e(n2, o))(this.options), new ye(e)));
    var e;
  }
  hasNameForId(e, t2) {
    var n2, o;
    return null !== (o = null === (n2 = this.names.get(e)) || void 0 === n2 ? void 0 : n2.has(t2)) && void 0 !== o && o;
  }
  registerName(e, t2) {
    P(e), e.startsWith(g) && this.keyframeIds.add(e);
    const n2 = this.names.get(e);
    n2 ? n2.add(t2) : this.names.set(e, /* @__PURE__ */ new Set([t2]));
  }
  insertRules(e, t2, n2) {
    this.registerName(e, t2), this.getTag().insertRules(P(e), n2);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(P(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
};
var ke = /* @__PURE__ */ new WeakSet();
var Te = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function De(e, t2) {
  return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e in Te || e.startsWith("--") ? String(t2).trim() : t2 + "px";
}
var Me = 47;
function Ve(e) {
  if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
  let t2 = "";
  for (let n2 = 0; n2 < e.length; n2++) {
    const o = e.charCodeAt(n2);
    t2 += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n2];
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
var Ge = Symbol.for("sc-keyframes");
function Fe(e) {
  return "object" == typeof e && null !== e && Ge in e;
}
function ze(e) {
  return ie(e) && !(e.prototype && e.prototype.isReactComponent);
}
var We = (e) => null == e || false === e || "" === e;
var Be = Symbol.for("react.client.reference");
function Le(e) {
  return e.$$typeof === Be;
}
function qe(e) {
  const t2 = e.$$id, n2 = (t2 && t2.includes("#") ? t2.split("#").pop() : t2) || e.name || "unknown";
  console.warn(`Interpolating a client component (${n2}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function He(e, t2) {
  for (const n2 in e) {
    const o = e[n2];
    e.hasOwnProperty(n2) && !We(o) && (Array.isArray(o) && ke.has(o) || ie(o) ? t2.push(Ve(n2) + ":", o, ";") : pe(o) ? (t2.push(n2 + " {"), He(o, t2), t2.push("}")) : t2.push(Ve(n2) + ": " + De(n2, o) + ";"));
  }
}
function Ye(e, t2, n2, o, s = []) {
  if (We(e)) return s;
  const r2 = typeof e;
  if ("string" === r2) return s.push(e), s;
  if ("function" === r2) {
    if (Le(e)) return "production" !== process.env.NODE_ENV && qe(e), s;
    if (ze(e) && t2) {
      const r3 = e(t2);
      return "production" === process.env.NODE_ENV || "object" != typeof r3 || Array.isArray(r3) || Fe(r3) || pe(r3) || null === r3 || console.error(`${B(e)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), Ye(r3, t2, n2, o, s);
    }
    return s.push(e), s;
  }
  if (Array.isArray(e)) {
    for (let r3 = 0; r3 < e.length; r3++) Ye(e[r3], t2, n2, o, s);
    return s;
  }
  return ae(e) ? (s.push(`.${e.styledComponentId}`), s) : Fe(e) ? (n2 ? (e.inject(n2, o), s.push(e.getName(o))) : s.push(e), s) : Le(e) ? ("production" !== process.env.NODE_ENV && qe(e), s) : pe(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (He(e, s), s) : (s.push(e.toString()), s);
}
var Ue = z(u);
var Je = p ? /* @__PURE__ */ new WeakMap() : null;
function Xe(e, t2) {
  if (!Je) return null;
  const n2 = Je.get(e);
  if (!n2) return null;
  const o = t2.names.get(e.componentId);
  if (!o) return null;
  let s = "";
  for (const e2 of o) {
    const t3 = n2.get(e2);
    if (!t3) return null;
    s += t3;
  }
  return s;
}
var Ze = class {
  constructor(e, t2, n2) {
    this.rules = e, this.componentId = t2, this.baseHash = F(Ue, t2), this.baseStyle = n2, je.registerId(t2);
  }
  generateAndInjectStyles(e, t2, n2) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t2, n2) : "";
    {
      let s = "";
      for (let o2 = 0; o2 < this.rules.length; o2++) {
        const r2 = this.rules[o2];
        if ("string" == typeof r2) s += r2;
        else if (r2) if (ze(r2)) {
          const o3 = r2(e);
          "string" == typeof o3 ? s += o3 : null != o3 && false !== o3 && ("production" === process.env.NODE_ENV || "object" != typeof o3 || Array.isArray(o3) || Fe(o3) || pe(o3) || console.error(`${B(r2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s += ue(Ye(o3, e, t2, n2)));
        } else s += ue(Ye(r2, e, t2, n2));
      }
      if (s) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e2 = n2.hash ? n2.hash + s : s;
        let r2 = this.dynamicNameCache.get(e2);
        if (!r2) {
          if (r2 = V(F(F(this.baseHash, n2.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
            const e3 = this.dynamicNameCache.keys().next().value;
            void 0 !== e3 && this.dynamicNameCache.delete(e3);
          }
          this.dynamicNameCache.set(e2, r2);
        }
        if (!t2.hasNameForId(this.componentId, r2)) if (p && (function(e3, t3) {
          var n3, o2;
          return null !== (o2 = null === (n3 = null == Je ? void 0 : Je.get(e3)) || void 0 === n3 ? void 0 : n3.has(t3)) && void 0 !== o2 && o2;
        })(this, r2)) t2.registerName(this.componentId, r2);
        else {
          const e3 = n2(s, "." + r2, void 0, this.componentId);
          p && (function(e4, t3, n3) {
            if (!Je) return;
            let o2 = Je.get(e4);
            o2 || (o2 = /* @__PURE__ */ new Map(), Je.set(e4, o2)), o2.set(t3, de(n3));
          })(this, r2, e3), t2.insertRules(this.componentId, r2, e3);
        }
        o = ce(o, r2);
      }
    }
    return o;
  }
};
var Ke = /&/g;
function Qe(e, t2) {
  let n2 = 0;
  for (; --t2 >= 0 && 92 === e.charCodeAt(t2); ) n2++;
  return !(1 & ~n2);
}
function et(e) {
  const t2 = e.length;
  let n2 = "", o = 0, s = 0, r2 = 0, i2 = false, l2 = false;
  for (let a2 = 0; a2 < t2; a2++) {
    const c2 = e.charCodeAt(a2);
    if (0 !== r2 || i2 || c2 !== Me || 42 !== e.charCodeAt(a2 + 1)) if (i2) 42 === c2 && e.charCodeAt(a2 + 1) === Me && (i2 = false, a2++);
    else if (34 !== c2 && 39 !== c2 || Qe(e, a2)) {
      if (0 === r2) if (123 === c2) s++;
      else if (125 === c2) {
        if (s--, s < 0) {
          l2 = true;
          let n3 = a2 + 1;
          for (; n3 < t2; ) {
            const t3 = e.charCodeAt(n3);
            if (59 === t3 || 10 === t3) break;
            n3++;
          }
          n3 < t2 && 59 === e.charCodeAt(n3) && n3++, s = 0, a2 = n3 - 1, o = n3;
          continue;
        }
        0 === s && (n2 += e.substring(o, a2 + 1), o = a2 + 1);
      } else 59 === c2 && 0 === s && (n2 += e.substring(o, a2 + 1), o = a2 + 1);
    } else 0 === r2 ? r2 = c2 : r2 === c2 && (r2 = 0);
    else i2 = true, a2++;
  }
  return l2 || 0 !== s || 0 !== r2 ? (o < t2 && 0 === s && 0 === r2 && (n2 += e.substring(o)), n2) : e;
}
function tt(e, t2) {
  const n2 = t2 + " ", o = "," + n2;
  for (let s = 0; s < e.length; s++) {
    const r2 = e[s];
    if ("rule" === r2.type) {
      r2.value = (n2 + r2.value).replaceAll(",", o);
      const e2 = r2.props, t3 = [];
      for (let o2 = 0; o2 < e2.length; o2++) t3[o2] = n2 + e2[o2];
      r2.props = t3;
    }
    Array.isArray(r2.children) && "@keyframes" !== r2.type && tt(r2.children, t2);
  }
  return e;
}
function nt({ options: e = $, plugins: t2 = x } = $) {
  let n2, s, r2;
  const i2 = (e2, t3, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n2}` : e2, l2 = t2.slice();
  l2.push((e2) => {
    e2.type === RULESET && e2.value.includes("&") && (r2 || (r2 = new RegExp(`\\${s}\\b`, "g")), e2.props[0] = e2.props[0].replace(Ke, s).replace(r2, i2));
  }), e.prefix && l2.push(prefixer), l2.push(stringify);
  let a2 = [];
  const c2 = middleware(l2.concat(rulesheet((e2) => a2.push(e2)))), u2 = (t3, i3 = "", l3 = "", u3 = "&") => {
    n2 = u3, s = i3, r2 = void 0;
    const d3 = (function(e2) {
      const t4 = -1 !== e2.indexOf("//"), n3 = -1 !== e2.indexOf("}");
      if (!t4 && !n3) return e2;
      if (!t4) return et(e2);
      const o = e2.length;
      let s2 = "", r3 = 0, i4 = 0, l4 = 0, a3 = 0, c3 = 0, u4 = false;
      for (; i4 < o; ) {
        const t5 = e2.charCodeAt(i4);
        if (34 !== t5 && 39 !== t5 || Qe(e2, i4)) if (0 === l4) if (t5 === Me && i4 + 1 < o && 42 === e2.charCodeAt(i4 + 1)) {
          for (i4 += 2; i4 + 1 < o && (42 !== e2.charCodeAt(i4) || e2.charCodeAt(i4 + 1) !== Me); ) i4++;
          i4 += 2;
        } else if (40 !== t5) if (41 !== t5) if (a3 > 0) i4++;
        else if (42 === t5 && i4 + 1 < o && e2.charCodeAt(i4 + 1) === Me) s2 += e2.substring(r3, i4), i4 += 2, r3 = i4, u4 = true;
        else if (t5 === Me && i4 + 1 < o && e2.charCodeAt(i4 + 1) === Me) {
          for (s2 += e2.substring(r3, i4); i4 < o && 10 !== e2.charCodeAt(i4); ) i4++;
          r3 = i4, u4 = true;
        } else 123 === t5 ? c3++ : 125 === t5 && c3--, i4++;
        else a3 > 0 && a3--, i4++;
        else a3++, i4++;
        else i4++;
        else 0 === l4 ? l4 = t5 : l4 === t5 && (l4 = 0), i4++;
      }
      return u4 ? (r3 < o && (s2 += e2.substring(r3)), 0 === c3 ? s2 : et(s2)) : 0 === c3 ? e2 : et(e2);
    })(t3);
    let h3 = compile(l3 || i3 ? l3 + " " + i3 + " { " + d3 + " }" : d3);
    return e.namespace && (h3 = tt(h3, e.namespace)), a2 = [], serialize(h3, c2), a2;
  }, d2 = e;
  let h2 = G;
  for (let e2 = 0; e2 < t2.length; e2++) t2[e2].name || S(15), h2 = F(h2, t2[e2].name);
  return (null == d2 ? void 0 : d2.namespace) && (h2 = F(h2, d2.namespace)), (null == d2 ? void 0 : d2.prefix) && (h2 = F(h2, "p")), u2.hash = h2 !== G ? h2.toString() : "", u2;
}
var ot;
var st;
var rt;
var it = new je();
var lt = nt();
var at;
var ct = null;
var ut = lt;
var dt = p && null !== (rt = null === (st = (ot = t).cache) || void 0 === st ? void 0 : st.call(ot, () => {
  it.names.clear(), it.keyframeIds.clear(), it.clearTag(), ct = null;
})) && void 0 !== rt ? rt : null;
var ht = { shouldForwardProp: void 0, styleSheet: it, stylis: lt, stylisPlugins: void 0 };
var pt = p ? { Provider: ({ children: e }) => e, Consumer: ({ children: e }) => e(ht) } : t.createContext(ht);
var ft = pt.Consumer;
function mt() {
  return p ? (dt && dt(), ct || ht) : t.useContext(pt);
}
function gt(e) {
  var n2, o, s;
  if (p) {
    dt && dt();
    const t2 = ct || ht, s2 = void 0 !== e.stylisPlugins || void 0 !== e.namespace || void 0 !== e.enableVendorPrefixes;
    s2 && (e.stylisPlugins && e.stylisPlugins !== at ? (at = e.stylisPlugins, ut = nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: e.stylisPlugins })) : void 0 === e.namespace && void 0 === e.enableVendorPrefixes || (ut = nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: null !== (n2 = e.stylisPlugins) && void 0 !== n2 ? n2 : t2.stylisPlugins })));
    const r3 = s2 ? void 0 === e.stylisPlugins || e.stylisPlugins.length ? ut : lt : t2.stylis, i3 = "shouldForwardProp" in e ? e.shouldForwardProp : t2.shouldForwardProp, l3 = null !== (o = e.stylisPlugins) && void 0 !== o ? o : t2.stylisPlugins;
    return ct = r3 !== lt || i3 ? { shouldForwardProp: i3, styleSheet: it, stylis: r3, stylisPlugins: l3 } : null, e.children;
  }
  const r2 = mt(), { styleSheet: i2 } = r2, l2 = t.useMemo(() => {
    let t2 = i2;
    return e.sheet ? t2 = e.sheet : e.target ? t2 = t2.reconstructWithOptions(void 0 !== e.nonce ? { target: e.target, nonce: e.nonce } : { target: e.target }, false) : void 0 !== e.nonce && (t2 = t2.reconstructWithOptions({ nonce: e.nonce })), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e.disableCSSOMInjection, e.nonce, e.sheet, e.target, i2]), a2 = t.useMemo(() => {
    var t2;
    return void 0 === e.stylisPlugins && void 0 === e.namespace && void 0 === e.enableVendorPrefixes ? r2.stylis : nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: null !== (t2 = e.stylisPlugins) && void 0 !== t2 ? t2 : r2.stylisPlugins });
  }, [e.enableVendorPrefixes, e.namespace, e.stylisPlugins, r2.stylis, r2.stylisPlugins]), c2 = "shouldForwardProp" in e ? e.shouldForwardProp : r2.shouldForwardProp, u2 = null !== (s = e.stylisPlugins) && void 0 !== s ? s : r2.stylisPlugins, d2 = t.useMemo(() => ({ shouldForwardProp: c2, styleSheet: l2, stylis: a2, stylisPlugins: u2 }), [c2, l2, a2, u2]);
  return t.createElement(pt.Provider, { value: d2 }, e.children);
}
var yt = p ? { Provider: ({ children: e }) => e, Consumer: ({ children: e }) => e(void 0) } : t.createContext(void 0);
var vt = yt.Consumer;
var wt = {};
function Nt(e, t2) {
  const n2 = "string" != typeof e ? "sc" : T(e);
  wt[n2] = (wt[n2] || 0) + 1;
  const o = n2 + "-" + W(u + n2 + wt[n2]);
  return t2 ? t2 + "-" + o : o;
}
var Ct;
var Pt = me(() => /* @__PURE__ */ new Set());
var Ot = /* @__PURE__ */ new Map();
function Et(e) {
  let t2 = Ot.get(e);
  return t2 || (t2 = new RegExp("\\." + e + "(?![a-zA-Z0-9_-])", "g"), Ot.set(e, t2)), t2;
}
function It(e, t2, n2) {
  const o = n2.names.get(t2);
  if (o) for (const t3 of o) {
    const n3 = Et(t3);
    n3.lastIndex = 0, e = e.replace(n3, ":where(." + t3 + ")");
  }
  return e;
}
function At(o, s, r2) {
  const i2 = ae(o), a2 = o, c2 = !L(o), { attrs: u2 = x, componentId: h2 = Nt(s.displayName, s.parentComponentId), displayName: f2 = q(o) } = s, m2 = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || h2, g2 = i2 && a2.attrs ? a2.attrs.concat(u2).filter(Boolean) : u2;
  let { shouldForwardProp: y2 } = s;
  if (i2 && a2.shouldForwardProp) {
    const e = a2.shouldForwardProp;
    if (s.shouldForwardProp) {
      const t2 = s.shouldForwardProp;
      y2 = (n2, o2) => e(n2, o2) && t2(n2, o2);
    } else y2 = e;
  }
  const v2 = new Ze(r2, m2, i2 ? a2.componentStyle : void 0);
  function S2(o2, s2) {
    return (function(o3, s3, r3) {
      const { attrs: i3, componentStyle: a3, defaultProps: c3, foldedComponentIds: u3, styledComponentId: h3, target: f3 } = o3, m3 = p ? void 0 : t.useContext(yt), g3 = mt(), y3 = o3.shouldForwardProp || g3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(h3);
      const v3 = R(s3, m3, c3) || (p ? void 0 : $);
      let S3, b3;
      S3 = (function(e, t2, n2) {
        const o4 = Object.assign(Object.assign({}, t2), { className: void 0, theme: n2 }), s4 = e.length > 1;
        for (let n3 = 0; n3 < e.length; n3++) {
          const r4 = e[n3], i4 = ie(r4) ? r4(s4 ? Object.assign({}, o4) : o4) : r4;
          for (const e2 in i4) "className" === e2 ? o4.className = ce(o4.className, i4[e2]) : "style" === e2 ? o4.style = Object.assign(Object.assign({}, o4.style), i4[e2]) : e2 in t2 && void 0 === t2[e2] || (o4[e2] = i4[e2]);
        }
        return "className" in t2 && "string" == typeof t2.className && (o4.className = ce(o4.className, t2.className)), o4;
      })(i3, s3, v3), b3 = a3.generateAndInjectStyles(S3, g3.styleSheet, g3.stylis), "production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(b3), "production" !== process.env.NODE_ENV && o3.warnTooManyClasses && o3.warnTooManyClasses(b3);
      const w2 = S3.as || f3, N2 = (function(t2, n2, o4, s4) {
        const r4 = {};
        for (const i4 in t2) void 0 === t2[i4] || "$" === i4[0] || "as" === i4 || "theme" === i4 && t2.theme === o4 || ("forwardedAs" === i4 ? r4.as = t2.forwardedAs : s4 && !s4(i4, n2) || (r4[i4] = t2[i4], s4 || "development" !== process.env.NODE_ENV || isPropValid(i4) || (Ct || (Ct = /* @__PURE__ */ new Set())).has(i4) || !L(n2) || n2.includes("-") || (Ct.add(i4), console.warn(`styled-components: it looks like an unknown prop "${i4}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return r4;
      })(S3, w2, v3, y3);
      let C2 = ce(u3, h3);
      b3 && (C2 += " " + b3), S3.className && (C2 += " " + S3.className), N2[L(w2) && w2.includes("-") ? "class" : "className"] = C2, r3 && (N2.ref = r3);
      const O2 = n(w2, N2);
      if (p) {
        const e = Pt ? Pt() : null;
        let n2 = null, o4 = 0, s4 = "", r4 = true, i4 = a3;
        for (; i4; ) {
          const t2 = g3.styleSheet.names.get(i4.componentId);
          if (t2) {
            o4 += t2.size;
            for (const o5 of t2) e && e.has(o5) || (n2 || (n2 = []), n2.push(o5), e && e.add(o5));
          }
          if (n2 && r4) {
            let e2 = Xe(i4, g3.styleSheet);
            null === e2 ? r4 = false : (i4 !== a3 && (e2 = It(e2, i4.componentId, g3.styleSheet)), s4 = e2 + s4);
          }
          i4 = i4.baseStyle;
        }
        if (n2 && !r4) {
          s4 = "";
          const e2 = g3.styleSheet.getTag();
          let t2 = a3;
          for (; t2; ) {
            let n3 = e2.getGroup(P(t2.componentId));
            n3 && t2 !== a3 && (n3 = It(n3, t2.componentId, g3.styleSheet)), s4 = n3 + s4, t2 = t2.baseStyle;
          }
        }
        let c4 = "";
        if (g3.styleSheet.keyframeIds.size > 0) {
          const t2 = g3.styleSheet.getTag();
          for (const n3 of g3.styleSheet.keyframeIds) {
            if (e && e.has(n3)) continue;
            const o5 = t2.getGroup(P(n3));
            o5 && (c4 += o5, e && e.add(n3));
          }
        }
        if (s4 && e && n2 && n2.length < o4) {
          const e2 = s4.split(d);
          let t2 = "";
          for (let o5 = 0; o5 < e2.length; o5++) {
            const s5 = e2[o5];
            if (s5) for (let e3 = 0; e3 < n2.length; e3++) {
              const o6 = Et(n2[e3]);
              if (o6.lastIndex = 0, o6.test(s5)) {
                t2 += s5 + d;
                break;
              }
            }
          }
          s4 = t2;
        }
        const u4 = he(c4 + s4);
        if (u4) {
          const e2 = t.createElement("style", { [l]: "", key: "sc-" + a3.componentId, children: u4 });
          return t.createElement(t.Fragment, null, e2, O2);
        }
      }
      return O2;
    })(b2, o2, s2);
  }
  S2.displayName = f2;
  let b2 = t.forwardRef(S2);
  return b2.attrs = g2, b2.componentStyle = v2, b2.displayName = f2, b2.shouldForwardProp = y2, b2.foldedComponentIds = i2 ? ce(a2.foldedComponentIds, a2.styledComponentId) : "", b2.styledComponentId = m2, b2.target = i2 ? a2.target : o, Object.defineProperty(b2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e) {
    this._foldedDefaultProps = i2 ? (function(e2, ...t2) {
      for (const n2 of t2) fe(e2, n2, true);
      return e2;
    })({}, a2.defaultProps, e) : e;
  } }), "production" !== process.env.NODE_ENV && (_(f2, m2), b2.warnTooManyClasses = /* @__PURE__ */ ((e, t2) => {
    let n2 = {}, o2 = false;
    return (s2) => {
      !o2 && (n2[s2] = true, Object.keys(n2).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e}${t2 ? ` with the id of "${t2}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), o2 = true, n2 = {});
    };
  })(f2, m2)), ge(b2, () => `.${b2.styledComponentId}`), c2 && re(b2, o, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), b2;
}
var _t = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function xt(e, t2) {
  const n2 = [e[0]];
  for (let o = 0, s = t2.length; o < s; o += 1) n2.push(t2[o], e[o + 1]);
  return n2;
}
var $t = (e) => (ke.add(e), e);
function Rt(e, ...t2) {
  if (ie(e) || pe(e)) return $t(Ye(xt(x, [e, ...t2])));
  const n2 = e;
  return 0 === t2.length && 1 === n2.length && "string" == typeof n2[0] ? Ye(n2) : $t(Ye(xt(n2, t2)));
}
function jt(e, t2, n2 = $) {
  if (!t2) throw S(1, t2);
  const o = (o2, ...s) => e(t2, n2, Rt(o2, ...s));
  return o.attrs = (o2) => jt(e, t2, Object.assign(Object.assign({}, n2), { attrs: Array.prototype.concat(n2.attrs, o2).filter(Boolean) })), o.withConfig = (o2) => jt(e, t2, Object.assign(Object.assign({}, n2), o2)), o;
}
var kt = (e) => jt(At, e);
var Tt = kt;
_t.forEach((e) => {
  Tt[e] = kt(e);
});
var Dt = class {
  constructor(e, t2) {
    this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e, this.componentId = t2, this.isStatic = (function(e2) {
      for (let t3 = 0; t3 < e2.length; t3 += 1) {
        const n2 = e2[t3];
        if (ie(n2) && !ae(n2)) return false;
      }
      return true;
    })(e), je.registerId(this.componentId);
  }
  removeStyles(e, t2) {
    this.instanceRules.delete(e), this.rebuildGroup(t2);
  }
  renderStyles(e, t2, n2, o) {
    const s = this.componentId;
    if (this.isStatic) {
      if (n2.hasNameForId(s, s + e)) this.instanceRules.has(e) || this.computeRules(e, t2, n2, o);
      else {
        const r3 = this.computeRules(e, t2, n2, o);
        n2.insertRules(s, r3.name, r3.rules);
      }
      return;
    }
    const r2 = this.instanceRules.get(e);
    if (this.computeRules(e, t2, n2, o), !n2.server && r2) {
      const t3 = r2.rules, n3 = this.instanceRules.get(e).rules;
      if (t3.length === n3.length) {
        let e2 = true;
        for (let o2 = 0; o2 < t3.length; o2++) if (t3[o2] !== n3[o2]) {
          e2 = false;
          break;
        }
        if (e2) return;
      }
    }
    this.rebuildGroup(n2);
  }
  computeRules(e, t2, n2, o) {
    const s = ue(Ye(this.rules, t2, n2, o)), r2 = { name: this.componentId + e, rules: o(s, "") };
    return this.instanceRules.set(e, r2), r2;
  }
  rebuildGroup(e) {
    const t2 = this.componentId;
    e.clearRules(t2);
    for (const n2 of this.instanceRules.values()) e.insertRules(t2, n2.name, n2.rules);
  }
};
var Mt = me(() => /* @__PURE__ */ new Set());
function Vt(e, ...n2) {
  const o = Rt(e, ...n2), s = `sc-global-${W(JSON.stringify(o))}`, r2 = new Dt(o, s);
  "production" !== process.env.NODE_ENV && _(s);
  const i2 = (e2) => {
    const n3 = mt(), l2 = p ? void 0 : t.useContext(yt);
    let a2;
    if (a2 = n3.styleSheet.allocateGSInstance(s), "production" !== process.env.NODE_ENV && t.Children.count(e2.children) && console.warn(`The global style component ${s} was given child JSX. createGlobalStyle does not render children.`), "production" !== process.env.NODE_ENV && o.some((e3) => "string" == typeof e3 && -1 !== e3.indexOf("@import")) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (p || n3.styleSheet.server) && (function(e3, t2, n4, o2, s2) {
      if (r2.isStatic) r2.renderStyles(e3, y, n4, s2);
      else {
        const l3 = Object.assign(Object.assign({}, t2), { theme: R(t2, o2, i2.defaultProps) });
        r2.renderStyles(e3, l3, n4, s2);
      }
    })(a2, e2, n3.styleSheet, l2, n3.stylis), p) {
      const e3 = "undefined" == typeof window ? r2.instanceRules.get(a2) : void 0, o2 = e3 ? de(e3.rules) : "";
      if (o2) {
        r2.instanceRules.delete(a2);
        const e4 = Mt ? Mt() : null;
        if (e4) {
          const t2 = r2.isStatic ? s + n3.stylis.hash : o2;
          if (e4.has(t2)) return null;
          e4.add(t2);
        }
        return t.createElement("style", { key: s + "-" + a2, "data-styled-global": s, children: he(o2) });
      }
    }
    return r2.instanceRules.delete(a2), null;
  };
  return t.memo(i2);
}
var Wt;
Wt = Ge;
var Yt = /^\s*<\/[a-z]/i;
var Ut = class {
  constructor({ nonce: e } = {}) {
    this._emitSheetCSS = () => {
      const e2 = this.instance.toString();
      if (!e2) return "";
      const t2 = this.instance.options.nonce || Ee();
      return `<style ${ue([t2 && `nonce="${t2}"`, `${l}="true"`, `${c}="${u}"`].filter(Boolean), " ")}>${e2}</style>`;
    }, this.getStyleTags = () => {
      if (this.sealed) throw S(2);
      return this._emitSheetCSS();
    }, this.getStyleElement = () => {
      if (this.sealed) throw S(2);
      const e2 = this.instance.toString();
      if (!e2) return [];
      const n2 = { [l]: "", [c]: u, dangerouslySetInnerHTML: { __html: e2 } }, o = this.instance.options.nonce || Ee();
      return o && (n2.nonce = o), [t.createElement("style", Object.assign({}, n2, { key: "sc-0-0" }))];
    }, this.seal = () => {
      this.sealed = true;
    }, this.instance = new je({ isServer: true, nonce: e }), this.sealed = false;
  }
  collectStyles(e) {
    if (this.sealed) throw S(2);
    return t.createElement(gt, { sheet: this.instance }, e);
  }
  interleaveWithNodeStream(e) {
    if (this.sealed) throw S(2);
    this.seal();
    const { Transform: t2 } = __require("stream"), { instance: n2, _emitSheetCSS: o } = this, s = new t2({ transform: function(e2, t3, s2) {
      const r2 = e2.toString(), i2 = o();
      if (n2.clearTag(), Yt.test(r2)) {
        const e3 = r2.indexOf(">") + 1, t4 = r2.slice(0, e3), n3 = r2.slice(e3);
        this.push(t4 + i2 + n3);
      } else this.push(i2 + r2);
      s2();
    } });
    if ("on" in e && "function" == typeof e.on && "pipe" in e) {
      const t3 = e;
      return t3.on("error", (e2) => {
        s.emit("error", e2);
      }), t3.pipe(s);
    }
    if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(s);
    throw new Error("Unsupported stream type");
  }
};
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
var Xt = `__sc-${l}__`;
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[Xt] || (window[Xt] = 0), 1 === window[Xt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[Xt] += 1);
var Kt = `:not(style[${l}])`;
var Qt = `style[${l}]`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/ssr/index.js
var CSS_RESET = "<style>*,*::before,*::after{box-sizing:border-box}html,body{margin:0;padding:0}body{-webkit-font-smoothing:antialiased}</style>";
var TOKENS_CSS_HREF = "https://unpkg.com/@jsonresume/core/dist/tokens.css";
var FONTS_PRECONNECT = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
function isHref(value) {
  return /^(https?:)?\/\//.test(value) || value.trim().startsWith("<link");
}
function familyParam(family) {
  const [name, ...rest] = String(family).split(":");
  const encodedName = name.trim().replace(/\s+/g, "+");
  return rest.length ? `${encodedName}:${rest.join(":")}` : encodedName;
}
function googleFontsLinks(families) {
  if (!Array.isArray(families) || families.length === 0) return "";
  const passthrough = [];
  const names = [];
  for (const entry of families) {
    if (entry == null || entry === "") continue;
    if (isHref(entry)) passthrough.push(entry);
    else names.push(entry);
  }
  const links = passthrough.map(
    (href) => href.trim().startsWith("<link") ? href : `<link href="${href}" rel="stylesheet">`
  );
  if (names.length > 0) {
    const query = names.map(familyParam).join("&family=");
    links.unshift(
      `<link href="https://fonts.googleapis.com/css2?family=${query}&display=swap" rel="stylesheet">`
    );
  }
  if (links.length === 0) return "";
  return FONTS_PRECONNECT + links.join("");
}
function renderResumeDocument(element, options = {}) {
  const {
    fonts,
    title,
    lang = "en",
    dir = "ltr",
    reset = false,
    head = "",
    headAfterStyles = "",
    includeTokensCss = true,
    bodyClass
  } = options;
  const sheet = new Ut();
  let html;
  let styleTags;
  try {
    html = renderToStaticMarkup(sheet.collectStyles(element));
    styleTags = sheet.getStyleTags();
  } finally {
    sheet.seal();
  }
  const fontLinks = googleFontsLinks(fonts);
  const tokensLink = includeTokensCss ? `<link rel="stylesheet" href="${TOKENS_CSS_HREF}">` : "";
  const resetTag = reset ? CSS_RESET : "";
  const titleTag = title ? `<title>${title}</title>` : "";
  const bodyAttr = bodyClass ? ` class="${bodyClass}"` : "";
  return `<!DOCTYPE html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">` + fontLinks + tokensLink + resetTag + head + styleTags + headAfterStyles + titleTag + `</head><body${bodyAttr}>${html}</body></html>`;
}

// tleekkul.github.io/node_modules/jsonresume-theme-brutalist/src/Resume.jsx
import React136 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/providers/ThemeProvider.jsx
import React, { createContext, useContext, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ThemeContext = createContext({
  theme: "professional",
  setTheme: () => {
  }
});
var GlobalStyles = Vt`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--resume-font-sans);
    font-size: var(--resume-size-body);
    line-height: var(--resume-line-height-normal);
    color: var(--resume-color-primary);
    background: var(--resume-color-background);
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/index.jsx
import React10 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/Section.jsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var StyledSection = Tt.section`
  margin-bottom: ${(props) => props.theme?.spacing?.section || "var(--resume-space-section, 2rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
function Section({ children, className, id, ...rest }) {
  return /* @__PURE__ */ jsx2(
    StyledSection,
    {
      id,
      className: `resume-section ${className || ""}`.trim(),
      ...rest,
      children
    }
  );
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/SectionTitle.jsx
import React3 from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var StyledTitle = Tt.h2`
  font-size: ${(props) => props.theme?.typography?.heading || "var(--resume-size-heading, 16pt)"};
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  margin: 0 0
    ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"}
    0;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(props) => props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)"};

  @media print {
    page-break-after: avoid;
  }
`;
var Icon = Tt.span`
  margin-right: 8px;
  font-size: 1.2em;
`;
function SectionTitle({
  children,
  icon,
  level = 2,
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsxs2(
    StyledTitle,
    {
      as: `h${level}`,
      className: `resume-section-title ${className || ""}`.trim(),
      ...rest,
      children: [
        icon && /* @__PURE__ */ jsx3(Icon, { "aria-hidden": "true", className: "resume-icon", children: icon }),
        children
      ]
    }
  );
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/ListItem.jsx
import React4 from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ItemContainer = Tt.div`
  margin-bottom: ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var ItemHeader = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var ItemTitle = Tt.div`
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  font-size: ${(props) => props.theme?.typography?.body || "var(--resume-size-body, 11pt)"};
`;
var ItemSubtitle = Tt.div`
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  margin-bottom: 4px;
`;
var ItemMeta = Tt.div`
  display: flex;
  gap: 12px;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  margin-bottom: 8px;
`;
var Description = Tt.p`
  margin: 8px 0;
  line-height: 1.6;
`;
var Highlights = Tt.ul`
  margin: 8px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    line-height: 1.5;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/DateRange.jsx
import React5 from "react";

// tleekkul.github.io/node_modules/@jsonresume/utils/src/dates.js
function formatDateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel
}) {
  if (!startDate) return "";
  const getPresentLabel = () => {
    if (presentLabel) return presentLabel;
    const labels = {
      en: "Present",
      "en-US": "Present",
      "en-GB": "Present",
      fr: "Pr\xE9sent",
      "fr-FR": "Pr\xE9sent",
      es: "Presente",
      "es-ES": "Presente",
      de: "Heute",
      "de-DE": "Heute",
      it: "Presente",
      "it-IT": "Presente",
      pt: "Presente",
      "pt-BR": "Presente",
      ja: "\u73FE\u5728",
      "ja-JP": "\u73FE\u5728",
      zh: "\u81F3\u4ECA",
      "zh-CN": "\u81F3\u4ECA",
      "zh-TW": "\u81F3\u4ECA",
      ko: "\uD604\uC7AC",
      "ko-KR": "\uD604\uC7AC",
      ar: "\u062D\u0627\u0636\u0631",
      "ar-SA": "\u062D\u0627\u0636\u0631"
    };
    return labels[locale] || labels[locale.split("-")[0]] || "Present";
  };
  const formatDate = (dateStr) => {
    if (!dateStr) return getPresentLabel();
    const isDateOnlyIso = typeof dateStr === "string" && /^\d{4}(-\d{2}){0,2}$/.test(dateStr);
    const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
    if (isNaN(date.getTime())) return dateStr;
    const monthFormats = {
      short: { month: "short" },
      long: { month: "long" },
      numeric: { month: "2-digit" }
    };
    const options = {
      ...monthFormats[format],
      year: "numeric"
    };
    if (isDateOnlyIso) {
      options.timeZone = "UTC";
    }
    if (numberingSystem) {
      options.numberingSystem = numberingSystem;
    }
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };
  const start = formatDate(startDate);
  if (endDate === void 0) {
    return start;
  }
  const end = formatDate(endDate);
  return `${start} - ${end}`;
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/DateRange.jsx
import { jsx as jsx5 } from "react/jsx-runtime";
var StyledDateRange = Tt.span`
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  white-space: nowrap;
`;
function DateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel,
  className,
  ...rest
}) {
  const formatted = formatDateRange({
    startDate,
    endDate,
    format,
    locale,
    numberingSystem,
    presentLabel
  });
  if (!formatted) return null;
  return /* @__PURE__ */ jsx5(
    StyledDateRange,
    {
      className: `resume-date-range ${className || ""}`.trim(),
      ...rest,
      children: formatted
    }
  );
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/Badge.jsx
import React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var StyledBadge = Tt.span`
  display: inline-block;
  padding: ${(props) => {
  if (props.$size === "sm") return "2px 8px";
  if (props.$size === "lg") return "6px 16px";
  return "4px 12px";
}};
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "sm") return "9pt";
  if (props.$size === "lg") return "11pt";
  return "10pt";
}};
  font-weight: 500;
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, #e6f2ff)";
  }
  if (props.$variant === "secondary") {
    return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};
  color: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
  }
  return props.theme?.colors?.primary || "var(--resume-color-primary, #000)";
}};

  @media print {
    background: ${(props) => props.$variant === "accent" ? "#e6f2ff" : "#f5f5f5"};
    color: ${(props) => props.$variant === "accent" ? "#0066cc" : "#000"};
  }
`;
function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsx6(
    StyledBadge,
    {
      $variant: variant,
      $size: size,
      className: `resume-badge resume-badge-${variant} ${className || ""}`.trim(),
      ...rest,
      children
    }
  );
}
var BadgeContainer = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;
function BadgeList({
  children,
  items,
  variant = "default",
  size = "md",
  className,
  ...rest
}) {
  const content = items ? items.map((item, index) => /* @__PURE__ */ jsx6(Badge, { variant, size, children: item }, index)) : children;
  return /* @__PURE__ */ jsx6(
    BadgeContainer,
    {
      className: `resume-badge-list ${className || ""}`.trim(),
      ...rest,
      children: content
    }
  );
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx
import React7 from "react";

// tleekkul.github.io/node_modules/@jsonresume/utils/src/url.js
function safeUrl(url) {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmed = url.trim();
  const dangerousProtocols = /^(javascript|data|vbscript|file|about):/i;
  if (dangerousProtocols.test(trimmed)) {
    return null;
  }
  const safeProtocols = /^(https?|mailto|tel|sms|ftp):/i;
  if (safeProtocols.test(trimmed)) {
    return trimmed;
  }
  if (trimmed.startsWith("/") || trimmed.startsWith(".")) {
    return trimmed;
  }
  if (/^www\./i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  if (/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}
function isExternalUrl(url, currentOrigin = null) {
  if (!url || typeof url !== "string") {
    return false;
  }
  if (url.startsWith("/") || url.startsWith(".") || url.startsWith("#")) {
    return false;
  }
  if (/^(mailto|tel|sms):/i.test(url)) {
    return false;
  }
  if (!currentOrigin && typeof window !== "undefined") {
    currentOrigin = window.location.origin;
  }
  if (!currentOrigin) {
    return true;
  }
  try {
    const urlObj = new URL(url, currentOrigin);
    return urlObj.origin !== currentOrigin;
  } catch (e) {
    return true;
  }
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var ContactContainer = Tt.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.small || "var(--resume-space-small, 12px)"};
  flex-wrap: wrap;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.text || "var(--resume-color-text, #333)"};

  a {
    color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
var ContactItem = Tt.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
var Separator = Tt.span`
  color: ${(props) => props.theme?.colors?.muted || "var(--resume-color-muted, #999)"};
`;
function ContactInfo({ basics = {}, separator = "\u2022", className }) {
  const { email, phone, url, location, profiles = [] } = basics;
  const items = [];
  if (email) {
    items.push(
      /* @__PURE__ */ jsx7(ContactItem, { children: /* @__PURE__ */ jsx7("a", { href: safeUrl(`mailto:${email}`), "aria-label": "Email", children: email }) }, "email")
    );
  }
  if (phone) {
    items.push(
      /* @__PURE__ */ jsx7(ContactItem, { children: /* @__PURE__ */ jsx7("a", { href: safeUrl(`tel:${phone}`), "aria-label": "Phone", children: phone }) }, "phone")
    );
  }
  if (location) {
    const locationStr = [location.city, location.region, location.countryCode].filter(Boolean).join(", ");
    if (locationStr) {
      items.push(
        /* @__PURE__ */ jsx7(ContactItem, { "aria-label": "Location", children: locationStr }, "location")
      );
    }
  }
  if (url) {
    const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    items.push(
      /* @__PURE__ */ jsx7(ContactItem, { children: /* @__PURE__ */ jsx7(
        "a",
        {
          href: safeUrl(url),
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Website",
          children: displayUrl
        }
      ) }, "url")
    );
  }
  profiles.forEach((profile, index) => {
    if (profile.url) {
      items.push(
        /* @__PURE__ */ jsx7(ContactItem, { children: /* @__PURE__ */ jsx7(
          "a",
          {
            href: safeUrl(profile.url),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": profile.network,
            children: profile.network || profile.username
          }
        ) }, `profile-${index}`)
      );
    }
  });
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsx7(ContactContainer, { className: `resume-contact ${className || ""}`.trim(), children: items.map((item, index) => /* @__PURE__ */ jsxs4(React7.Fragment, { children: [
    index > 0 && /* @__PURE__ */ jsx7(Separator, { "aria-hidden": "true", children: separator }),
    item
  ] }, index)) });
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/Link.jsx
import React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var StyledLink = Tt.a`
  color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme?.colors?.linkVisited || "var(--resume-color-link-visited, #551a8b)"};
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`;
function Link({ href, children, className, ...rest }) {
  const safeHref = safeUrl(href);
  if (!safeHref) {
    return /* @__PURE__ */ jsx8("span", { className, children });
  }
  const isExternal = isExternalUrl(safeHref);
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return /* @__PURE__ */ jsx8(
    StyledLink,
    {
      href: safeHref,
      className: `resume-link ${className || ""}`.trim(),
      ...externalProps,
      ...rest,
      children
    }
  );
}

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/InlineSeparatorPipe.jsx
import React9 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var StyledPipe = Tt.span`
  /* Thin space (U+2009) + pipe + thin space for balanced spacing */
  &::before {
    content: '\u2009|\u2009';
    opacity: 0.5;
    color: ${(props) => props.$color || "currentColor"};
    font-weight: normal;
  }

  /* Ensure consistent spacing across browsers */
  display: inline;
  white-space: pre;

  @media print {
    &::before {
      content: '\u2009|\u2009';
      opacity: 0.6;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/KeylineDivider.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var StyledHr = Tt.hr`
  border: none;
  border-top: 0.5pt solid
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-left: ${(props) => props.inset || "0"};
  margin-right: ${(props) => props.inset || "0"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    border-top-width: 0.3pt;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure border renders in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/DottedDivider.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var StyledHr2 = Tt.hr`
  border: none;
  border-top: ${(props) => props.dotSize || "2px"} dotted
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  /* Override default border-top-width to use fixed spacing */
  ${(props) => props.spacing && `
    background-image: radial-gradient(
      circle,
      ${props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"} ${props.dotSize || "2px"},
      transparent ${props.dotSize || "2px"}
    );
    background-size: ${props.spacing} 1px;
    background-repeat: repeat-x;
    background-position: center;
    border: none;
    height: 1px;
  `}

  @media print {
    /* Ensure dots render in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Fixed dot rendering for PDF generation */
    border-top-width: ${(props) => props.dotSize || "2px"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/AccentSidebarStripe.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var StyledStripe = Tt.div`
  position: absolute;
  ${(props) => props.position === "right" ? "right: 0;" : "left: 0;"}
  top: ${(props) => props.top || "0"};
  width: ${(props) => props.width || "4mm"};
  max-width: 6mm; /* ATS-safe maximum */
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  pointer-events: none; /* Prevent interaction */

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks inside stripe */
    page-break-inside: avoid;
  }

  @media screen and (max-width: 768px) {
    /* Reduce width on mobile */
    width: ${(props) => props.width ? `calc(${props.width} * 0.75)` : "3mm"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/AccentTopRule.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var StyledRule = Tt.div`
  width: ${(props) => props.width || "30%"};
  max-width: 40%; /* Design constraint: max 40% */
  min-width: 25%; /* Design constraint: min 25% */
  height: ${(props) => props.thickness || "2.5pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-left: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "auto";
  return "0";
}};
  margin-right: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "0";
  return "auto";
}};

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure minimum thickness for print visibility */
    min-height: 2pt;
  }

  @media screen and (max-width: 768px) {
    /* Increase width slightly on mobile for better visibility */
    width: ${(props) => props.width ? `calc(${props.width} * 1.2)` : "36%"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/primitives/RulesetStack.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var StyledStack = Tt.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var StyledRule2 = Tt.div`
  width: 100%;
  height: ${(props) => props.thickness || "0.4pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-bottom: ${(props) => props.gapSize};

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    min-height: 0.3pt;
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/index.jsx
import React17 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/GridLayout.jsx
import React11 from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var Grid = Tt.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns === 1 ? "1fr" : `repeat(${props.$columns}, 1fr)`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/SidebarLayout.jsx
import React12 from "react";
import { jsx as jsx16, jsxs as jsxs5 } from "react/jsx-runtime";
var Container = Tt.div`
  display: grid;
  grid-template-columns: ${(props) => props.$sidebarPosition === "right" ? `1fr ${props.$sidebarWidth || "30%"}` : `${props.$sidebarWidth || "30%"} 1fr`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Sidebar = Tt.aside`
  grid-area: ${(props) => props.$position === "right" ? "1 / 2" : "1 / 1"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
var Main = Tt.main`
  grid-area: ${(props) => props.$sidebarPosition === "right" ? "1 / 1" : "1 / 2"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/StackLayout.jsx
import React13 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var Stack = Tt.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$spacing || "var(--resume-space-item)"};

  @media print {
    gap: ${(props) => props.$spacing || "12px"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/CardLayout.jsx
import React14 from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var CardGrid = Tt.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.$minCardWidth || "250px"}, 1fr)
  );
  gap: ${(props) => props.$gap || "var(--resume-space-item)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${(props) => props.$gap || "12px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/FlexLayout.jsx
import React15 from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var Flex = Tt.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  flex-wrap: ${(props) => props.$wrap ? "wrap" : "nowrap"};
  gap: ${(props) => props.$gap || "var(--resume-space-tight)"};

  @media print {
    gap: ${(props) => props.$gap || "8px"};
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.$responsiveDirection || props.$direction === "row" ? "column" : props.$direction};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/layouts/TwoColumnMicroGrid.jsx
import React16 from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var StyledTwoColumnGrid = Tt.div`
  /* Use CSS columns for visual two-column layout */
  column-count: 2;
  column-gap: ${(props) => props.$columnGap || "16px"};

  /* Prevent column breaks inside items */
  & > * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: ${(props) => props.$gap || "8px"};
    display: block;
  }

  /* Last item in each column shouldn't have bottom margin */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    column-count: 2;
    column-gap: 12pt;

    & > * {
      margin-bottom: 6pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }

  /* Collapse to single column on small screens */
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    & > * {
      margin-bottom: ${(props) => props.$gap || "8px"};
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/index.jsx
import React24 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillBar.jsx
import React18 from "react";
import { jsx as jsx21, jsxs as jsxs6 } from "react/jsx-runtime";
var Container2 = Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label = Tt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var BarContainer = Tt.div`
  width: 100%;
  height: ${(props) => props.$height || "8px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill = Tt.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillPill.jsx
import React19 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var Pill = Tt.span`
  display: inline-block;
  padding: ${(props) => props.$size === "small" ? "4px 8px" : "6px 12px"};
  margin: 4px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "#ffffff" : "var(--resume-color-primary)"};
  border: ${(props) => props.$variant === "outlined" ? "1px solid var(--resume-color-border)" : "none"};
  border-radius: ${(props) => props.$rounded ? "999px" : "var(--resume-radius-sm)"};
  font-size: ${(props) => props.$size === "small" ? "var(--resume-size-small)" : "var(--resume-size-body)"};
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 2px;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillRating.jsx
import React20 from "react";
import { jsx as jsx23, jsxs as jsxs7 } from "react/jsx-runtime";
var Container3 = Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);
`;
var SkillName = Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var RatingContainer = Tt.div`
  display: flex;
  gap: 4px;
`;
var Dot = Tt.span`
  width: ${(props) => props.$size || "10px"};
  height: ${(props) => props.$size || "10px"};
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillGroup.jsx
import React21 from "react";
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
var Container4 = Tt.div`
  margin-bottom: var(--resume-space-item);
`;
var Category = Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
`;
var Skills = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Skill = Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &:not(:last-child)::after {
    content: '${(props) => props.$separator || "\u2022"}';
    margin-left: 6px;
    color: var(--resume-color-border);
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillCloud.jsx
import React22 from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
var Container5 = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var SkillTag = Tt.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: ${(props) => {
  if (props.$weight >= 80) return "var(--resume-size-subheading)";
  if (props.$weight >= 50) return "var(--resume-size-body)";
  return "var(--resume-size-small)";
}};
  font-weight: ${(props) => props.$weight >= 70 ? "var(--resume-weight-semibold)" : "var(--resume-weight-normal)"};
  color: var(--resume-color-primary);
  background-color: ${(props) => `color-mix(in srgb, var(--resume-color-accent) ${props.$weight}%, transparent)`};
  border-radius: var(--resume-radius-sm);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/skills/SkillCategory.jsx
import React23 from "react";
import { jsx as jsx26, jsxs as jsxs9 } from "react/jsx-runtime";
var Container6 = Tt.div`
  margin-bottom: var(--resume-space-item);
`;
var CategoryTitle = Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
  border-bottom: 1px solid var(--resume-color-border);
  padding-bottom: 4px;
`;
var SkillList = Tt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var SkillItem = Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var SkillName2 = Tt.span`
  flex: 1;
`;
var SkillLevel = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/timeline/index.jsx
import React27 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/timeline/TimelineSection.jsx
import React25 from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var Container7 = Tt.div`
  position: relative;
  margin-bottom: var(--resume-space-section);

  @media print {
    page-break-inside: avoid;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/timeline/TimelineItem.jsx
import React26 from "react";
import { jsx as jsx28, jsxs as jsxs10 } from "react/jsx-runtime";
var Item = Tt.div`
  position: relative;
  padding-left: ${(props) => props.$showLine ? "32px" : "0"};
  margin-bottom: var(--resume-space-item);

  ${(props) => props.$showLine && `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background-color: var(--resume-color-border);
    }

    &:last-child::before {
      display: none;
    }
  `}

  @media print {
    break-inside: avoid;
  }
`;
var Marker = Tt.div`
  position: absolute;
  left: 0;
  top: 6px;
  width: ${(props) => props.$size || "16px"};
  height: ${(props) => props.$size || "16px"};
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border: 2px solid var(--resume-color-background);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Content = Tt.div`
  display: flex;
  flex-direction: column;
`;
var Header = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;
var Title = Tt.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Meta = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Description2 = Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/timeline/TimelineRuleMinimal.tsx
import { jsx as jsx29, jsxs as jsxs11 } from "react/jsx-runtime";
var Container8 = Tt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-item, 12pt);

  @media print {
    break-inside: avoid;
  }
`;
var Rule = Tt.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${(props) => props.$lineColor || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Item2 = Tt.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-left: 20px;
`;
var Tick = Tt.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.$width || "8px"};
  height: ${(props) => {
  const height = props.$height || "2pt";
  const value = parseFloat(height);
  const unit = height.replace(/[\d.]/g, "");
  return value < 2 && unit === "pt" ? "2pt" : height;
}};
  background-color: ${(props) => props.$color || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    min-height: 2pt; /* Ensure visibility in print */
  }
`;
var Date2 = Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  font-weight: var(--resume-weight-normal, 400);
  white-space: nowrap;
  flex-shrink: 0;
`;
var Content2 = Tt.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;
var Label2 = Tt.span`
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  font-weight: var(--resume-weight-medium, 500);
`;
var Meta2 = Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-tertiary, #999);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/timeline/TimelineInline.tsx
import { jsx as jsx30, jsxs as jsxs12 } from "react/jsx-runtime";
var InlineContainer = Tt.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  white-space: nowrap;
  font-variant-numeric: tabular-nums; /* Consistent number width */

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var DateText = Tt.span`
  font-weight: var(--resume-weight-normal, 400);
`;
var Separator2 = Tt.span`
  /* En dash with narrow no-break spaces for proper typography */
  margin: 0;
  padding: 0;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/profile/index.jsx
import React32 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/profile/Avatar.jsx
import React28 from "react";
import { jsx as jsx31 } from "react/jsx-runtime";
var Image = Tt.img`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  object-fit: cover;
  border: ${(props) => props.$border ? `2px solid var(--resume-color-border)` : "none"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Placeholder = Tt.div`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  background-color: var(--resume-color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(props) => props.$size || "80px"} / 2);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-semibold);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/profile/ProfileCard.jsx
import React29 from "react";
import { jsx as jsx32, jsxs as jsxs13 } from "react/jsx-runtime";
var Card = Tt.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  align-items: ${(props) => props.$direction === "row" ? "center" : "flex-start"};
  gap: var(--resume-space-item);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-section);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Info = Tt.div`
  flex: 1;
`;
var Name = Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title2 = Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Summary = Tt.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/profile/ContactGrid.jsx
import React30 from "react";
import { jsx as jsx33, jsxs as jsxs14 } from "react/jsx-runtime";
var Grid2 = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
var Item3 = Tt.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Icon2 = Tt.span`
  color: var(--resume-color-accent);
`;
var Link2 = Tt.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent);
  }

  @media print {
    color: var(--resume-color-secondary);
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/profile/SocialLinks.jsx
import React31 from "react";
import { jsx as jsx34, jsxs as jsxs15 } from "react/jsx-runtime";
var Container9 = Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
`;
var Link3 = Tt.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  text-decoration: none;
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--resume-color-accent);
    color: #ffffff;
    border-color: var(--resume-color-accent);
  }

  @media print {
    border: 1px solid var(--resume-color-border);
    color: var(--resume-color-primary);
  }
`;
var Icon3 = Tt.span`
  display: inline-flex;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/index.jsx
import React39 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/Heading.jsx
import React33 from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var StyledHeading = Tt.h1`
  font-size: ${(props) => {
  const sizes = {
    1: "var(--resume-size-name)",
    2: "var(--resume-size-heading)",
    3: "var(--resume-size-subheading)",
    4: "var(--resume-size-body)"
  };
  return sizes[props.$level] || sizes[2];
}};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-semibold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  margin: 0 0 ${(props) => props.$spacing || "var(--resume-space-tight)"} 0;
  line-height: var(--resume-line-height-tight);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/Text.jsx
import React34 from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
var StyledText = Tt.p`
  font-size: ${(props) => props.$size || "var(--resume-size-body)"};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-normal)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: ${(props) => props.$lineHeight || "var(--resume-line-height-normal)"};
  margin: 0 0 ${(props) => props.$spacing || "0"} 0;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/Label.jsx
import React35 from "react";
import { jsx as jsx37 } from "react/jsx-runtime";
var StyledLabel = Tt.span`
  display: inline-block;
  font-size: var(--resume-size-small);
  font-weight: ${(props) => props.$weight || "var(--resume-weight-medium)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  text-transform: ${(props) => props.$uppercase ? "uppercase" : "none"};
  letter-spacing: ${(props) => props.$uppercase ? "0.05em" : "normal"};
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/SectionIntroParagraph.jsx
import React36 from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var StyledIntroParagraph = Tt.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-item) 0;
  max-width: ${(props) => props.$maxWidth || "100%"};

  /* Softer appearance for intro text */
  opacity: 0.95;

  /* Print optimization - maintain readability */
  @media print {
    line-height: var(--resume-line-height-normal);
    opacity: 1;
    page-break-inside: avoid;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/QuoteStripe.jsx
import React37 from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var StyledQuoteStripe = Tt.blockquote`
  margin: 0 0 var(--resume-space-item) 0;
  padding: 2px 0 2px ${(props) => props.$paddingLeft || "16px"};
  border-left: ${(props) => props.$borderWidth || "3px"} solid
    ${(props) => props.$accentColor || "var(--resume-color-accent)"};

  font-size: var(--resume-size-body);
  font-style: ${(props) => props.$fontStyle || "italic"};
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-normal);

  /* Prevent quote clipping with subtle padding */
  padding-right: 2px;

  /* Single-line constraint */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Print optimization */
  @media print {
    page-break-inside: avoid;
    color: #000;
    border-left-color: ${(props) => props.$accentColor || "#000"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/typography/HyphenationSafeParagraph.jsx
import React38 from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
var StyledHyphenatedParagraph = Tt.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-normal);
  text-align: ${(props) => props.$textAlign || "left"};
  margin: 0 0 var(--resume-space-tight) 0;

  /* Enable hyphenation for better text flow */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  /* Prevent orphans and widows */
  orphans: 2;
  widows: 2;

  /* Balanced text wrapping */
  text-wrap: balance;

  /* Optional line clamping */
  ${(props) => props.$maxLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${props.$maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Print optimization - disable hyphenation for cleaner output */
  @media print {
    hyphens: none;
    -webkit-hyphens: none;
    page-break-inside: avoid;
    text-wrap: pretty;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/index.jsx
import React47 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/ProgressCircle.jsx
import React40 from "react";
import { jsx as jsx41, jsxs as jsxs16 } from "react/jsx-runtime";
var Container10 = Tt.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
var Circle = Tt.svg`
  transform: rotate(-90deg);
`;
var Label4 = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-medium);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/StatCard.jsx
import React41 from "react";
import { jsx as jsx42, jsxs as jsxs17 } from "react/jsx-runtime";
var Card2 = Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  text-align: ${(props) => props.$align || "left"};

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Value = Tt.div`
  font-size: ${(props) => props.$size || "var(--resume-size-name)"};
  font-weight: var(--resume-weight-bold);
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  line-height: 1;
  margin-bottom: 4px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Label5 = Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Description3 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-top: 4px;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/MetricBar.jsx
import React42 from "react";
import { jsx as jsx43, jsxs as jsxs18 } from "react/jsx-runtime";
var Container11 = Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
var Header2 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var Label6 = Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
`;
var Value2 = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-semibold);
`;
var Bar = Tt.div`
  width: 100%;
  height: ${(props) => props.$height || "24px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;
  position: relative;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Fill = Tt.div`
  width: ${(props) => props.$percentage}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var InnerLabel = Tt.span`
  font-size: var(--resume-size-small);
  color: #ffffff;
  font-weight: var(--resume-weight-medium);
  white-space: nowrap;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/MetricInline.jsx
import React43 from "react";
import { jsx as jsx44 } from "react/jsx-runtime";
var StyledMetric = Tt.strong`
  font-weight: ${(props) => {
  if (props.$size === "sm") return "var(--resume-weight-semibold, 600)";
  if (props.$size === "lg") return "var(--resume-weight-extrabold, 800)";
  return "var(--resume-weight-bold, 700)";
}};
  font-size: ${(props) => {
  if (props.$size === "sm") return "0.95em";
  if (props.$size === "lg") return "1.1em";
  return "1em";
}};
  color: inherit;
  white-space: nowrap;

  @media print {
    font-weight: ${(props) => {
  if (props.$size === "sm") return "600";
  if (props.$size === "lg") return "800";
  return "700";
}};
    color: inherit;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/MetricBullet.jsx
import React44 from "react";
import { jsx as jsx45, jsxs as jsxs19 } from "react/jsx-runtime";
var BulletContainer = Tt.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${(props) => props.$spacing === "tight" ? "4px" : "8px"};
  line-height: 1.5;
  list-style: none;

  @media print {
    page-break-inside: avoid;
  }
`;
var Metric = Tt.span`
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #000);
  min-width: ${(props) => props.$align === "right" ? "auto" : "60px"};
  max-width: ${(props) => props.$align === "right" ? "80px" : "auto"};
  margin-right: ${(props) => props.$align === "right" ? "12px" : "0"};
  margin-left: ${(props) => props.$align === "right" ? "0" : "12px"};
  text-align: ${(props) => props.$align === "right" ? "right" : "left"};
  flex-shrink: 0;
  white-space: nowrap;

  ${(props) => props.$align === "right" ? `
    order: -1;
  ` : ""}

  @media print {
    font-weight: 700;
    color: #000;
  }
`;
var Content3 = Tt.span`
  flex: 1;
  color: var(--resume-color-primary, #000);
`;
var Bullet = Tt.span`
  margin-right: 8px;
  color: var(--resume-color-accent, #0066cc);
  font-weight: var(--resume-weight-bold, 700);

  @media print {
    color: #333;
  }
`;
var ListContainer = Tt.ul`
  margin: 8px 0;
  padding-left: 0;
  list-style: none;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/KPIChipLine.jsx
import React45 from "react";
import { jsx as jsx46, jsxs as jsxs20 } from "react/jsx-runtime";
var ChipContainer = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$gap || "8px"};
  align-items: center;
  margin: ${(props) => props.$margin || "8px 0"};

  @media print {
    gap: 6px;
  }
`;
var Chip = Tt.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "xs") return "2px 8px";
  if (props.$size === "md") return "4px 12px";
  return "3px 10px";
}};
  border-radius: ${(props) => props.theme?.radius?.full || "var(--resume-radius-full, 999px)"};
  border: 1px solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  background: transparent;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  white-space: nowrap;
  line-height: 1.2;

  @media print {
    border: 1px solid #ccc;
    background: transparent;
    color: #000;
    padding: ${(props) => {
  if (props.$size === "xs") return "2px 6px";
  if (props.$size === "md") return "3px 10px";
  return "2px 8px";
}};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Divider = Tt.span`
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  user-select: none;

  @media print {
    color: #ccc;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/data/KeyValueInline.jsx
import React46 from "react";
import { jsx as jsx47, jsxs as jsxs21 } from "react/jsx-runtime";
var Container12 = Tt.span`
  display: inline;
  font-size: ${(props) => {
  if (props.$size === "xs") return "9pt";
  if (props.$size === "md") return "11pt";
  return "10pt";
}};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  line-height: 1.5;

  @media print {
    color: #333;
  }
`;
var KeyValuePair = Tt.span`
  display: inline;
  white-space: normal;
`;
var Key = Tt.span`
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    font-weight: 500;
    color: #000;
  }
`;
var Colon = Tt.span`
  /* Prevent wrap between key and colon */
  white-space: nowrap;

  &::after {
    content: ':';
    margin-right: 0.25em;
  }
`;
var Value3 = Tt.span`
  /* Prevent wrap immediately after colon */
  display: inline-block;
  color: inherit;
`;
var Separator3 = Tt.span`
  &::before {
    content: ', ';
    white-space: pre;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/utils/index.jsx
import React52 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/utils/Divider.jsx
import React48 from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
var StyledDivider = Tt.hr`
  width: 100%;
  height: ${(props) => props.$thickness || "1px"};
  background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item)"} 0;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/utils/Spacer.jsx
import React49 from "react";
import { jsx as jsx49 } from "react/jsx-runtime";
var StyledSpacer = Tt.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "var(--resume-space-item)"};
  flex-shrink: 0;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/utils/Flex.jsx
import React50 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/utils/Grid.jsx
import React51 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/experience/index.jsx
import React57 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/experience/ExperienceCard.jsx
import React53 from "react";
import { jsx as jsx50, jsxs as jsxs22 } from "react/jsx-runtime";
var Card3 = Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-item);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Header3 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--resume-space-tight);
  flex-wrap: wrap;
  gap: 8px;
`;
var Title3 = Tt.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Company = Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
var Meta3 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: var(--resume-space-tight);
`;
var Summary2 = Tt.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/experience/ExperienceTimeline.jsx
import React54 from "react";
import { jsx as jsx51 } from "react/jsx-runtime";

// tleekkul.github.io/node_modules/@jsonresume/core/src/experience/ExperienceGrid.jsx
import React55 from "react";
import { jsx as jsx52, jsxs as jsxs23 } from "react/jsx-runtime";
var Grid3 = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--resume-space-item);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Item4 = Tt.div`
  padding: var(--resume-space-item);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);

  @media print {
    break-inside: avoid;
  }
`;
var Title4 = Tt.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Company2 = Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  margin-bottom: 4px;
`;
var Date3 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/experience/ExperienceCompact.jsx
import React56 from "react";
import { jsx as jsx53, jsxs as jsxs24 } from "react/jsx-runtime";
var List = Tt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var Item5 = Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  gap: var(--resume-space-tight);

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`;
var Main2 = Tt.div`
  flex: 1;
`;
var Title5 = Tt.span`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Company3 = Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &::before {
    content: ' at ';
  }
`;
var Date4 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  white-space: nowrap;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/index.jsx
import React69 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/HeaderCentered.jsx
import React58 from "react";
import { jsx as jsx54, jsxs as jsxs25 } from "react/jsx-runtime";
var Header4 = Tt.header`
  text-align: center;
  margin-bottom: var(--resume-space-section);

  @media print {
    break-after: avoid;
  }
`;
var Name2 = Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title6 = Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-item) 0;
`;
var Contacts = Tt.div`
  display: flex;
  justify-content: center;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/HeaderSplit.jsx
import React59 from "react";
import { jsx as jsx55, jsxs as jsxs26 } from "react/jsx-runtime";
var Header5 = Tt.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Left = Tt.div`
  flex: 1;
`;
var Name3 = Tt.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title7 = Tt.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0;
`;
var Right = Tt.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/HeaderMinimal.jsx
import React60 from "react";
import { jsx as jsx56, jsxs as jsxs27 } from "react/jsx-runtime";
var Header6 = Tt.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--resume-space-item);
  border-bottom: 2px solid var(--resume-color-border);
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    border-bottom: 2px solid var(--resume-color-border);
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
var Name4 = Tt.h1`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Contact = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/CornerInitials.jsx
import React61 from "react";
import { jsx as jsx57 } from "react/jsx-runtime";
var Container13 = Tt.div`
  position: ${(props) => props.$position === "absolute" ? "absolute" : "relative"};
  ${(props) => props.$corner === "top-left" && "top: 0; left: 0;"}
  ${(props) => props.$corner === "top-right" && "top: 0; right: 0;"}
  ${(props) => props.$corner === "bottom-left" && "bottom: 0; left: 0;"}
  ${(props) => props.$corner === "bottom-right" && "bottom: 0; right: 0;"}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || "48px"};
  height: ${(props) => props.$size || "48px"};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Initials = Tt.div`
  font-family: ${(props) => props.$serif ? 'Georgia, "Times New Roman", serif' : "inherit"};
  font-size: ${(props) => props.$fontSize || "calc(var(--resume-size-heading) * 0.8)"};
  font-weight: ${(props) => props.$outline ? "var(--resume-weight-normal)" : "var(--resume-weight-bold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.$outline ? "1px" : "0"};

  ${(props) => props.$outline && `
    -webkit-text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    -webkit-text-fill-color: transparent;
    text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    text-fill-color: transparent;
  `}

  ${(props) => props.$bordered && `
    border: 2px solid ${props.$color || "var(--resume-color-primary)"};
    border-radius: ${props.$rounded ? "50%" : "var(--resume-radius-sm)"};
    padding: ${props.$padding || "8px"};
    width: ${props.$size || "48px"};
    height: ${props.$size || "48px"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media print {
    ${(props) => props.$outline && `
      color: ${props.$color || "var(--resume-color-primary)"};
      -webkit-text-stroke: none;
      -webkit-text-fill-color: ${props.$color || "var(--resume-color-primary)"};
      font-weight: var(--resume-weight-normal);
    `}
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/Footer.jsx
import React62 from "react";
import { jsx as jsx58, jsxs as jsxs28 } from "react/jsx-runtime";
var StyledFooter = Tt.footer`
  margin-top: var(--resume-space-section);
  padding-top: var(--resume-space-item);
  border-top: 1px solid var(--resume-color-border);
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "center"};

  @media print {
    border-top: 1px solid var(--resume-color-border);
    position: running(footer);
  }
`;
var PageNumber = Tt.span`
  @media print {
    &::after {
      content: counter(page);
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/PageBreak.jsx
import React63 from "react";
import { jsx as jsx59 } from "react/jsx-runtime";
var Break = Tt.div`
  @media print {
    page-break-before: ${(props) => props.$before ? "always" : "auto"};
    page-break-after: ${(props) => props.$after ? "always" : "auto"};
    break-before: ${(props) => props.$before ? "page" : "auto"};
    break-after: ${(props) => props.$after ? "page" : "auto"};
  }

  @media screen {
    display: none;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/HeroNameBlock.jsx
import React64 from "react";
import { jsx as jsx60, jsxs as jsxs29 } from "react/jsx-runtime";
var Container14 = Tt.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Label7 = Tt.div`
  font-size: var(--resume-size-small, 10px);
  font-weight: var(--resume-weight-medium, 500);
  color: var(--resume-color-secondary, #4a4a4a);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--resume-space-tight, 8px);

  @media print {
    color: #4a4a4a; /* Ensure print visibility */
  }
`;
var Name5 = Tt.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  letter-spacing: -0.02em; /* Subtle negative tracking, avoid excessive spacing */
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
  max-width: fit-content;
  line-height: var(--resume-line-height-tight, 1.2);

  /* Ensure 4.5:1 contrast ratio */
  @media print {
    color: #000000;
    border-bottom-color: #999999;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/ContactRowLine.jsx
import React65 from "react";
import { jsx as jsx61, jsxs as jsxs30 } from "react/jsx-runtime";
var Container15 = Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-body, 11px);
  color: var(--resume-color-secondary, #4a4a4a);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Prevent wrapping to maintain single-line layout */
  flex-wrap: nowrap;

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast for print */
  }

  /* Handle overflow gracefully on very narrow screens */
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 8px;
  }
`;
var ContactItem2 = Tt.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;
var ContactLink = Tt.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent, #2563eb);
    text-decoration: underline;
  }

  @media print {
    color: #333333;
    text-decoration: none;
  }
`;
var Separator4 = Tt.span`
  color: var(--resume-color-border, #e5e7eb);
  user-select: none;
  font-weight: var(--resume-weight-normal, 400);

  @media print {
    color: #999999;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/SectionRuleTitle.jsx
import React66 from "react";
import { jsx as jsx62, jsxs as jsxs31 } from "react/jsx-runtime";
var Container16 = Tt.div`
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Title8 = Tt.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Rule2 = Tt.hr`
  width: ${(props) => props.$width || "100%"};
  height: 0;
  border: none;
  border-top: 0.5px solid
    ${(props) => props.$color || "var(--resume-color-border, #e5e7eb)"};
  margin: 0;

  /* Ensure visibility in print */
  @media print {
    border-top-width: 1px;
    border-top-color: ${(props) => props.$color || "#cccccc"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/SectionFlagTitle.jsx
import React67 from "react";
import { jsx as jsx63, jsxs as jsxs32 } from "react/jsx-runtime";
var Container17 = Tt.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Flag = Tt.div`
  width: ${(props) => props.$width || "4px"};
  height: 0.7em; /* Match x-height of text, not full line-height */
  background-color: ${(props) => props.$color || "var(--resume-color-accent, #2563eb)"};
  border-radius: 2px;
  flex-shrink: 0;

  /* Ensure visibility in print */
  @media print {
    background-color: ${(props) => props.$color || "#000000"};
  }
`;
var Title9 = Tt.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/header/NameStackElegant.jsx
import React68 from "react";
import { jsx as jsx64, jsxs as jsxs33 } from "react/jsx-runtime";
var Container18 = Tt.header`
  text-align: ${(props) => props.$align || "center"};
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Name6 = Tt.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 4px 0;
  line-height: var(--resume-line-height-tight, 1.2);
  letter-spacing: -0.02em;

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Role = Tt.div`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-medium, 500); /* Avoid thin weights */
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-normal, 1.5);

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast */
  }
`;
var Tagline = Tt.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: var(--resume-weight-normal, 400);
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0;
  line-height: var(--resume-line-height-relaxed, 1.75);
  max-width: 600px;
  margin-left: ${(props) => props.$align === "center" ? "auto" : "0"};
  margin-right: ${(props) => props.$align === "center" ? "auto" : props.$align === "right" ? "0" : "auto"};

  @media print {
    color: #4a4a4a;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/quotes/index.jsx
import React73 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/quotes/PullQuote.jsx
import React70 from "react";
import { jsx as jsx65, jsxs as jsxs34 } from "react/jsx-runtime";
var Container19 = Tt.blockquote`
  margin: var(--resume-space-section) 0;
  padding: var(--resume-space-item);
  border-left: 4px solid var(--resume-color-accent);
  background-color: var(--resume-color-muted);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid var(--resume-color-accent);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var QuoteText = Tt.p`
  font-size: var(--resume-size-subheading);
  font-style: italic;
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Attribution = Tt.footer`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: right;
`;
var Author = Tt.cite`
  font-style: normal;
  font-weight: var(--resume-weight-medium);
`;
var Context = Tt.span`
  display: block;
  font-size: var(--resume-size-tiny);
  margin-top: 2px;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/quotes/Testimonial.jsx
import React71 from "react";
import { jsx as jsx66, jsxs as jsxs35 } from "react/jsx-runtime";
var Card4 = Tt.div`
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-tight);
  }
`;
var Header7 = Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
`;
var Photo = Tt.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
var AuthorInfo = Tt.div`
  flex: 1;
`;
var Author2 = Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Position = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Quote = Tt.blockquote`
  margin: 0;
  font-size: var(--resume-size-body);
  font-style: italic;
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/quotes/BlockQuote.jsx
import React72 from "react";
import { jsx as jsx67, jsxs as jsxs36 } from "react/jsx-runtime";
var Quote2 = Tt.blockquote`
  margin: var(--resume-space-item) 0;
  padding: var(--resume-space-tight) var(--resume-space-item);
  border-left: 3px solid var(--resume-color-border);
  font-style: italic;
  color: var(--resume-color-secondary);
  background-color: ${(props) => props.$highlight ? "var(--resume-color-muted)" : "transparent"};
  break-inside: avoid;

  @media print {
    border-left: 3px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text2 = Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
`;
var Cite = Tt.cite`
  display: block;
  margin-top: var(--resume-space-tight);
  font-size: var(--resume-size-small);
  font-style: normal;
  color: var(--resume-color-tertiary);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/certifications/index.jsx
import React78 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/certifications/CertificationBadge.jsx
import React74 from "react";
import { jsx as jsx68, jsxs as jsxs37 } from "react/jsx-runtime";
var Badge2 = Tt.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-primary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  font-weight: var(--resume-weight-medium);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 6px 12px;
  }
`;
var Icon4 = Tt.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
var Text3 = Tt.span`
  white-space: nowrap;
`;
var Date5 = Tt.span`
  opacity: 0.8;
  font-size: var(--resume-size-tiny);
  font-weight: var(--resume-weight-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/certifications/CertificationRow.jsx
import React75 from "react";
import { Fragment, jsx as jsx69, jsxs as jsxs38 } from "react/jsx-runtime";
var Container20 = Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Issuer = Tt.span`
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
`;
var Name7 = Tt.span`
  color: var(--resume-color-primary);
`;
var Credential = Tt.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  background-color: var(--resume-color-background);
  padding: 2px 6px;
  border-radius: var(--resume-radius-sm);
  border: 1px solid var(--resume-color-border);

  @media print {
    background-color: transparent;
    border: 1px solid var(--resume-color-border);
    padding: 1px 4px;
  }
`;
var Date6 = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  font-style: italic;
`;
var Link4 = Tt.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  font-size: var(--resume-size-small);

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
var Separator5 = Tt.span`
  color: var(--resume-color-tertiary);

  &::before {
    content: '·';
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/certifications/AwardCard.jsx
import React76 from "react";
import { jsx as jsx70, jsxs as jsxs39 } from "react/jsx-runtime";
var Card5 = Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header8 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title10 = Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date7 = Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Awarder = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: 8px;
`;
var Summary3 = Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/certifications/HonorsList.jsx
import React77 from "react";
import { jsx as jsx71, jsxs as jsxs40 } from "react/jsx-runtime";
var List2 = Tt.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item6 = Tt.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Info2 = Tt.div`
  flex: 1;
`;
var Title11 = Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 2px;
`;
var Awarder2 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Date8 = Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/languages/index.jsx
import React83 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/languages/LanguageBar.jsx
import React79 from "react";
import { jsx as jsx72, jsxs as jsxs41 } from "react/jsx-runtime";
var Container21 = Tt.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label8 = Tt.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Language = Tt.span`
  font-weight: var(--resume-weight-medium);
`;
var Fluency = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarContainer2 = Tt.div`
  width: 100%;
  height: 10px;
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill2 = Tt.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/languages/LanguageLevelBarLite.jsx
import React80 from "react";
import { jsx as jsx73, jsxs as jsxs42 } from "react/jsx-runtime";
var Container22 = Tt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    gap: 0.5em;
  }
`;
var Label9 = Tt.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex: 1;
`;
var Language2 = Tt.span`
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Fluency2 = Tt.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarText = Tt.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  letter-spacing: 2px;
  white-space: nowrap;

  @media print {
    letter-spacing: 3px;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/languages/LanguageGrid.jsx
import React81 from "react";
import { jsx as jsx74, jsxs as jsxs43 } from "react/jsx-runtime";
var Grid4 = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--resume-space-tight);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
  }
`;
var LanguageCard = Tt.div`
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Language3 = Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Fluency3 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Dots = Tt.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
var Dot2 = Tt.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/languages/ProficiencyScale.jsx
import React82 from "react";
import { jsx as jsx75, jsxs as jsxs44 } from "react/jsx-runtime";
var Container23 = Tt.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Label10 = Tt.span`
  min-width: 120px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: var(--resume-size-small);
  }
`;
var Scale = Tt.div`
  display: flex;
  gap: 4px;
  flex: 1;
`;
var Segment = Tt.div`
  flex: 1;
  height: ${(props) => props.$size || "12px"};
  background-color: ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-xs);
  transition: background-color 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var LevelText = Tt.span`
  min-width: 80px;
  text-align: right;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/publications/index.jsx
import React88 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/publications/PublicationItem.jsx
import React84 from "react";
import { jsx as jsx76, jsxs as jsxs45 } from "react/jsx-runtime";
var Container24 = Tt.div`
  padding: var(--resume-space-tight) 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header9 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title12 = Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date9 = Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Publisher = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-style: italic;
  margin-bottom: 8px;
`;
var Summary4 = Tt.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Link5 = Tt.a`
  display: inline-block;
  margin-top: 8px;
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/publications/PublicationEntryPlain.jsx
import React85 from "react";
import { Fragment as Fragment2, jsx as jsx77, jsxs as jsxs46 } from "react/jsx-runtime";
var Container25 = Tt.div`
  margin-bottom: var(--resume-space-tight);
  padding-left: 1.5em;
  text-indent: -1.5em;
  break-inside: avoid;
  line-height: var(--resume-line-height-relaxed);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text4 = Tt.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Author3 = Tt(Text4)`
  font-weight: var(--resume-weight-medium);
`;
var Year = Tt(Text4)`
  color: var(--resume-color-secondary);
`;
var Title13 = Tt(Text4)`
  font-style: italic;
`;
var Venue = Tt(Text4)`
  color: var(--resume-color-secondary);
`;
var Separator6 = Tt.span`
  margin: 0 0.5em;
  color: var(--resume-color-tertiary);
`;
var Link6 = Tt.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  margin-left: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/publications/PortfolioGrid.jsx
import React86 from "react";
import { jsx as jsx78, jsxs as jsxs47 } from "react/jsx-runtime";
var Grid5 = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--resume-space-item);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--resume-space-tight);
  }
`;
var Item7 = Tt.div`
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  overflow: hidden;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Thumbnail = Tt.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media print {
    height: 100px;
  }
`;
var Content4 = Tt.div`
  padding: var(--resume-space-tight);
`;
var Title14 = Tt.h3`
  margin: 0 0 4px 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Description4 = Tt.p`
  margin: 0 0 8px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Tags = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Tag = Tt.span`
  padding: 2px 8px;
  font-size: var(--resume-size-tiny);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/publications/ProjectCard.jsx
import React87 from "react";
import { jsx as jsx79, jsxs as jsxs48 } from "react/jsx-runtime";
var Card6 = Tt.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header10 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Title15 = Tt.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date10 = Tt.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Description5 = Tt.p`
  margin: 0 0 var(--resume-space-tight) 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Technologies = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--resume-space-tight);
`;
var Tech = Tt.span`
  padding: 4px 10px;
  font-size: var(--resume-size-small);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
var Links = Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
`;
var Link7 = Tt.a`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/tables/index.jsx
import React92 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/tables/SkillMatrix.jsx
import React89 from "react";
import { jsx as jsx80, jsxs as jsxs49 } from "react/jsx-runtime";
var Table = Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead = Tt.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th = Tt.th`
  padding: 10px;
  text-align: left;
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody = Tt.tbody``;
var Tr = Tt.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td = Tt.td`
  padding: 10px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Cell = Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Indicator = Tt.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate") return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate")
    return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/tables/ComparisonTable.jsx
import React90 from "react";
import { jsx as jsx81, jsxs as jsxs50 } from "react/jsx-runtime";
var Table2 = Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead2 = Tt.thead``;
var Th2 = Tt.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  background-color: var(--resume-color-muted);
  border: 1px solid var(--resume-color-border);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody2 = Tt.tbody``;
var Tr2 = Tt.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td2 = Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Label11 = Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/tables/DataTable.jsx
import React91 from "react";
import { jsx as jsx82, jsxs as jsxs51 } from "react/jsx-runtime";
var Table3 = Tt.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    display: block;
    overflow-x: auto;
  }
`;
var Thead3 = Tt.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th3 = Tt.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);
  white-space: nowrap;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody3 = Tt.tbody``;
var Tr3 = Tt.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.$striped ? "var(--resume-color-background)" : "transparent"};
  }

  &:hover {
    background-color: var(--resume-color-muted);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:hover {
      background-color: transparent;
    }
  }
`;
var Td3 = Tt.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tfoot = Tt.tfoot`
  background-color: var(--resume-color-muted);
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/callouts/index.jsx
import React96 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/callouts/Callout.jsx
import React93 from "react";
import { jsx as jsx83, jsxs as jsxs52 } from "react/jsx-runtime";
var Container26 = Tt.div`
  padding: var(--resume-space-item);
  margin: var(--resume-space-item) 0;
  background-color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-bg, #d4edda)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-bg, #fff3cd)";
  if (props.$variant === "error")
    return "var(--resume-color-error-bg, #f8d7da)";
  return "var(--resume-color-muted)";
}};
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid
      ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Title16 = Tt.div`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Content5 = Tt.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/callouts/InfoBox.jsx
import React94 from "react";
import { jsx as jsx84, jsxs as jsxs53 } from "react/jsx-runtime";
var Box = Tt.div`
  display: flex;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-tight) 0;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Icon5 = Tt.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  font-size: 14px;
  font-weight: var(--resume-weight-bold);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Content6 = Tt.div`
  flex: 1;
`;
var Title17 = Tt.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 4px;
`;
var Text5 = Tt.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/callouts/HighlightCard.jsx
import React95 from "react";
import { jsx as jsx85, jsxs as jsxs54 } from "react/jsx-runtime";
var Card7 = Tt.div`
  padding: var(--resume-space-item);
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-item) 0;
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
    background-color: transparent;
    color: var(--resume-color-primary);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header11 = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
var Title18 = Tt.h3`
  margin: 0;
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: inherit;

  @media print {
    color: var(--resume-color-primary);
  }
`;
var Badge3 = Tt.div`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    background-color: transparent;
    border: 1px solid currentColor;
  }
`;
var Content7 = Tt.div`
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);

  @media print {
    color: var(--resume-color-secondary);
  }
`;
var Footer2 = Tt.div`
  margin-top: var(--resume-space-tight);
  padding-top: var(--resume-space-tight);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--resume-size-small);

  @media print {
    border-top: 1px solid var(--resume-color-border);
    color: var(--resume-color-tertiary);
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/index.jsx
import React108 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/CheckList.jsx
import React97 from "react";
import { jsx as jsx86, jsxs as jsxs55 } from "react/jsx-runtime";
var List3 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item8 = Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Check = Tt.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  color: white;
  font-size: 12px;
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var Text6 = Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  text-decoration: ${(props) => props.$checked && props.$strikethrough ? "line-through" : "none"};
  opacity: ${(props) => props.$checked && props.$strikethrough ? 0.7 : 1};
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/IconList.jsx
import React98 from "react";
import { jsx as jsx87, jsxs as jsxs56 } from "react/jsx-runtime";
var List4 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item9 = Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var IconWrapper = Tt.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Text7 = Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/NumberedList.jsx
import React99 from "react";
import { jsx as jsx88 } from "react/jsx-runtime";
var List5 = Tt.ol`
  margin: var(--resume-space-tight) 0;
  padding-left: 28px;
  counter-reset: list-counter;
  list-style: none;
`;
var Item10 = Tt.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  counter-increment: list-counter;
  break-inside: avoid;

  &::before {
    content: counter(list-counter) '.';
    flex-shrink: 0;
    width: 24px;
    font-weight: var(--resume-weight-medium);
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Text8 = Tt.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/BulletList.jsx
import React100 from "react";
import { jsx as jsx89 } from "react/jsx-runtime";
var List6 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item11 = Tt.li`
  position: relative;
  padding: 4px 0 4px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-bold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/CompactList.jsx
import React101 from "react";
import { jsx as jsx90, jsxs as jsxs57 } from "react/jsx-runtime";
var List7 = Tt.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item12 = Tt.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  break-inside: avoid;

  &:not(:last-child) {
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
    padding-bottom: ${(props) => props.$divider ? "6px" : "2px"};
    margin-bottom: ${(props) => props.$divider ? "6px" : "0"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
  }
`;
var Bullet2 = Tt.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Text9 = Tt.span`
  flex: 1;
  line-height: 1.4;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/AchievementListTight.jsx
import React102 from "react";
import { jsx as jsx91 } from "react/jsx-runtime";
var List8 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 20px;
  list-style: none;
`;
var Item13 = Tt.li`
  position: relative;
  padding: 2px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.4;
  break-inside: avoid;
  orphans: 2;
  widows: 2;
  max-height: 4.2em; /* Enforce 2-3 line max (1.4 line-height × 3 lines) */
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: -16px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/AchievementListSpacious.jsx
import React103 from "react";
import { jsx as jsx92 } from "react/jsx-runtime";
var List9 = Tt.ul`
  margin: var(--resume-space-comfortable) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item14 = Tt.li`
  position: relative;
  padding: 6px 0; /* 6pt baseline grid */
  margin-bottom: 8px; /* 8pt baseline grid */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.6; /* 1.6 × 16px = 25.6px ≈ 26px (multiple of 6pt baseline) */
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: -20px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    line-height: inherit;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/HangingBulletList.jsx
import React104 from "react";
import { jsx as jsx93 } from "react/jsx-runtime";
var List10 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item15 = Tt.li`
  position: relative;
  padding: 4px 0 4px 20px; /* Left padding for bullet space */
  text-indent: -20px; /* Negative indent to hang bullet outside */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    display: inline-block;
    width: 20px;
    text-indent: 0; /* Reset indent for bullet */
  }

  /* Reset text-indent for child elements */
  > * {
    text-indent: 0;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/ListDashCompact.jsx
import React105 from "react";
import { jsx as jsx94 } from "react/jsx-runtime";
var List11 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item16 = Tt.li`
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.5;
  break-inside: avoid;

  &::before {
    content: '–'; /* En-dash (U+2013), not hyphen */
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-text)"};
    font-weight: var(--resume-weight-normal);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/MiniDotLeaderList.jsx
import React106 from "react";
import { jsx as jsx95 } from "react/jsx-runtime";
var List12 = Tt.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var Item17 = Tt.li`
  display: inline-flex;
  align-items: center;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  &:not(:last-child)::after {
    content: '·'; /* Midline dot (U+00B7) */
    margin-left: 8px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:not(:last-child)::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/lists/DefinitionKeyline.jsx
import React107 from "react";
import { jsx as jsx96, jsxs as jsxs58 } from "react/jsx-runtime";
var List13 = Tt.dl`
  margin: var(--resume-space-tight) 0;
  display: grid;
  grid-template-columns: ${(props) => props.$layout === "inline" ? "auto 1fr" : "1fr"};
  gap: ${(props) => props.$layout === "inline" ? "8px 16px" : "4px"};
`;
var Term = Tt.dt`
  font-size: var(--resume-size-body);
  color: var(--resume-color-text);
  font-weight: var(--resume-weight-semibold);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "stacked" && `
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Description6 = Tt.dd`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "inline" && `
    display: flex;
    align-items: baseline;
  `}

  ${(props) => props.$layout === "stacked" && `
    margin-left: 16px;
    &::before {
      content: '\u2014'; /* Em-dash (U+2014) */
      margin-right: 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
    }
  `}

  ${(props) => props.$layout === "inline" && `
    &::before {
      content: '\u2014'; /* Em-dash (U+2014) */
      margin: 0 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
      flex-shrink: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/dates/index.jsx
import React111 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/dates/DateBadge.jsx
import React109 from "react";
import { jsx as jsx97, jsxs as jsxs59 } from "react/jsx-runtime";
var Badge4 = Tt.time`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-secondary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 3px 10px;
  }
`;
var Icon6 = Tt.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/dates/RelativeDate.jsx
import React110 from "react";
import { jsx as jsx98 } from "react/jsx-runtime";
var Container27 = Tt.time`
  font-size: ${(props) => props.$size || "var(--resume-size-small)"};
  color: ${(props) => props.$color || "var(--resume-color-tertiary)"};
  white-space: nowrap;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/visuals/index.jsx
import React116 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/visuals/BackgroundPattern.jsx
import React112 from "react";
import { jsx as jsx99 } from "react/jsx-runtime";
var Pattern = Tt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: ${(props) => props.$opacity || 0.05};
  z-index: 0;
  background-image: ${(props) => {
  if (props.$pattern === "dots") {
    return `radial-gradient(circle, var(--resume-color-primary) 1px, transparent 1px)`;
  }
  if (props.$pattern === "grid") {
    return `
        linear-gradient(var(--resume-color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--resume-color-border) 1px, transparent 1px)
      `;
  }
  if (props.$pattern === "diagonal") {
    return `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--resume-color-border) 10px,
        var(--resume-color-border) 11px
      )`;
  }
  return "none";
}};
  background-size: ${(props) => {
  if (props.$pattern === "dots") return "20px 20px";
  if (props.$pattern === "grid") return "20px 20px";
  return "auto";
}};

  @media print {
    display: none;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/visuals/ColorBlock.jsx
import React113 from "react";
import { jsx as jsx100 } from "react/jsx-runtime";
var Block = Tt.div`
  padding: var(--resume-space-section);
  background-color: ${(props) => props.$color || "var(--resume-color-muted)"};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  margin: ${(props) => props.$margin || "var(--resume-space-section) 0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-item);
  }
`;
var Content8 = Tt.div`
  position: relative;
  z-index: 1;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/visuals/DividerVariants.jsx
import React114 from "react";
import { jsx as jsx101 } from "react/jsx-runtime";
var Divider3 = Tt.hr`
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  height: ${(props) => {
  if (props.$variant === "thick") return "3px";
  if (props.$variant === "gradient") return "2px";
  return "1px";
}};
  background: ${(props) => {
  if (props.$variant === "gradient") {
    return `linear-gradient(
        to right,
        transparent,
        ${props.$color || "var(--resume-color-border)"},
        transparent
      )`;
  }
  if (props.$variant === "dotted") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 4px,
        transparent 4px,
        transparent 8px
      )`;
  }
  if (props.$variant === "dashed") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 12px,
        transparent 12px,
        transparent 20px
      )`;
  }
  return props.$color || "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: ${(props) => props.$color || "var(--resume-color-border)"};
  }
`;
var DecorativeDivider = Tt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  gap: var(--resume-space-tight);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  }

  @media print {
    &::before,
    &::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Icon7 = Tt.span`
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  font-size: 16px;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/visuals/BorderAccent.jsx
import React115 from "react";
import { jsx as jsx102, jsxs as jsxs60 } from "react/jsx-runtime";
var Container28 = Tt.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-item)"};
  border: ${(props) => {
  const color = props.$color || "var(--resume-color-accent)";
  if (props.$position === "all") return `2px solid ${color}`;
  return "none";
}};
  border-left: ${(props) => {
  if (props.$position === "left" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-right: ${(props) => {
  if (props.$position === "right") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-top: ${(props) => {
  if (props.$position === "top" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-bottom: ${(props) => {
  if (props.$position === "bottom" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Corner = Tt.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border-style: solid;
  border-width: 0;

  ${(props) => {
  if (props.$corner === "top-left") {
    return `
        top: -2px;
        left: -2px;
        border-top-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "top-right") {
    return `
        top: -2px;
        right: -2px;
        border-top-width: 3px;
        border-right-width: 3px;
      `;
  }
  if (props.$corner === "bottom-left") {
    return `
        bottom: -2px;
        left: -2px;
        border-bottom-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "bottom-right") {
    return `
        bottom: -2px;
        right: -2px;
        border-bottom-width: 3px;
        border-right-width: 3px;
      `;
  }
}}

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/index.jsx
import React124 from "react";

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/KeepTogether.jsx
import React117 from "react";
import { jsx as jsx103 } from "react/jsx-runtime";
var Container29 = Tt.div`
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/ColumnBreak.jsx
import React118 from "react";
import { jsx as jsx104 } from "react/jsx-runtime";
var Break2 = Tt.div`
  @media print {
    ${(props) => {
  if (props.$type === "page") {
    return `
          page-break-after: always;
          break-after: page;
        `;
  }
  if (props.$type === "column") {
    return `
          column-break-after: always;
          break-after: column;
        `;
  }
  return `
        page-break-after: always;
        break-after: page;
      `;
}}
  }

  @media screen {
    display: none;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/PrintOnly.jsx
import React119 from "react";
import { jsx as jsx105 } from "react/jsx-runtime";
var Container30 = Tt.div`
  display: ${(props) => props.$hideScreen ? "none" : "block"};

  @media print {
    display: block !important;
  }

  @media screen {
    display: ${(props) => props.$hideScreen ? "none !important" : "block"};
  }
`;
var ScreenContainer = Tt.div`
  @media print {
    display: none !important;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/PageHeaderLine.jsx
import React120 from "react";
import { jsx as jsx106, jsxs as jsxs61 } from "react/jsx-runtime";
var HeaderContainer = Tt.div`
  display: none;

  @media print {
    display: block;
    position: running(header);
    padding-bottom: var(--resume-space-xs, 0.5rem);
    border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-small, 0.875rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var HeaderContent = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var Name8 = Tt.span`
  font-weight: 600;
  color: var(--resume-color-primary, #111827);
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/PageFooterLine.jsx
import React121 from "react";
import { jsx as jsx107, jsxs as jsxs62 } from "react/jsx-runtime";
var FooterContainer = Tt.div`
  display: none;

  @media print {
    display: block;
    position: running(footer);
    padding-top: var(--resume-space-xs, 0.5rem);
    border-top: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-xs, 0.75rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var FooterContent = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var PageNumber2 = Tt.span`
  @media print {
    &::before {
      content: 'Page ';
    }
    &::after {
      content: ' of ' counter(pages);
    }
  }
`;
var CurrentPage = Tt.span`
  @media print {
    &::before {
      content: counter(page);
    }
  }
`;
var Date11 = Tt.span`
  font-variant-numeric: tabular-nums;
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/LetterheadBar.jsx
import React122 from "react";
import { Fragment as Fragment3, jsx as jsx108, jsxs as jsxs63 } from "react/jsx-runtime";
var LetterheadContainer = Tt.div`
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
    z-index: 1000;

    /* Reserve space for unprintable area */
    margin-top: 0.25in;
  }

  @media screen {
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
  }
`;
var LetterheadContent = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--resume-size-small, 0.875rem);
`;
var Name9 = Tt.div`
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--resume-color-primary, #111827);
  font-size: var(--resume-size-base, 1rem);
`;
var Tagline2 = Tt.div`
  color: var(--resume-color-secondary, #6b7280);
  font-size: var(--resume-size-small, 0.875rem);
`;
var Spacer2 = Tt.div`
  @media print {
    height: 0.75in;
  }

  @media screen {
    height: 3rem;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/print/SoftShadowEmulation.jsx
import React123 from "react";
import { jsx as jsx109 } from "react/jsx-runtime";
var ShadowContainer = Tt.div`
  position: relative;
  background: var(--resume-color-background, #ffffff);
`;
var ShadowBox = Tt.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-base, 1rem)"};
  background: var(--resume-color-background, #ffffff);

  /* Primary border */
  border: 1px solid var(--resume-color-border, #e5e7eb);

  /* Shadow emulation using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: ${(props) => props.$offset || "4px"};
    left: ${(props) => props.$offset || "4px"};
    right: -${(props) => props.$offset || "4px"};
    bottom: -${(props) => props.$offset || "4px"};
    border: 1px solid ${(props) => props.$shadowColor || "rgba(0, 0, 0, 0.08)"};
    border-radius: inherit;
    z-index: -1;

    @media print {
      /* Ensure shadow prints - use solid light gray */
      border-color: ${(props) => props.$printShadowColor || "#f0f0f0"};
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/metadata/InlineKicker.jsx
import React125 from "react";
import { jsx as jsx110 } from "react/jsx-runtime";
var StyledKicker = Tt.span`
  display: inline-block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.$color || props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;

  @media print {
    font-size: 9pt;
    color: ${(props) => props.$color || "#4a4a4a"};
    letter-spacing: 0.08em;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/metadata/MetaRow.jsx
import React126 from "react";
import { jsx as jsx111 } from "react/jsx-runtime";
var StyledMetaRow = Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  line-height: 1.5;

  /* Ensure 4.5:1 contrast ratio minimum */
  @media screen {
    color: #4a4a4a; /* 9.29:1 contrast on white */
  }

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    gap: 6px;
  }
`;
var MetaItem = Tt.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: '${(props) => props.$separator}';
    margin-left: 8px;
    opacity: 0.6;

    @media print {
      margin-left: 6px;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/metadata/SubsectionLabel.jsx
import React127 from "react";
import { jsx as jsx112 } from "react/jsx-runtime";
var StyledLabel2 = Tt.div`
  display: block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  margin-bottom: 6px;
  line-height: 1.4;

  /* Tracked uppercase variant */
  ${(props) => props.$variant === "tracked" && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-variant: normal;
  `}

  /* Small caps variant */
  ${(props) => props.$variant === "caps" && `
    font-variant: small-caps;
    letter-spacing: 0.05em;
    text-transform: lowercase;
  `}

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    margin-bottom: 4px;

    ${(props) => props.$variant === "tracked" && `
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

    ${(props) => props.$variant === "caps" && `
      font-variant: small-caps;
      letter-spacing: 0.05em;
    `}
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/metadata/GreyLabelCaps.jsx
import React128 from "react";
import { jsx as jsx113 } from "react/jsx-runtime";
var StyledGreyLabel = Tt.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.medium || "var(--resume-weight-medium, 500)"};
  /* Ensure 4.5:1 contrast minimum - #767676 provides 4.54:1 on white */
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;

  @media print {
    font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
    color: #767676;
    letter-spacing: 0.08em;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/metadata/SmallCapsHeading.jsx
import React129 from "react";
import { jsx as jsx114 } from "react/jsx-runtime";
var StyledHeading2 = Tt.h2`
  font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #1a1a1a)"};
  font-variant: small-caps;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0 0 12px 0;
  text-transform: lowercase; /* Allows font-variant to work properly */

  @media print {
    font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
    color: #1a1a1a;
    letter-spacing: 0.06em;
    margin: 0 0 10px 0;
    font-variant: small-caps;
    page-break-after: avoid;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/containers/MutedPanel.jsx
import React130 from "react";
import { jsx as jsx115 } from "react/jsx-runtime";
var StyledMutedPanel = Tt.div`
  background: ${(props) => {
  if (props.$tint === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.06))";
  }
  if (props.$tint === "warm") {
    return "var(--resume-color-warm-muted, rgba(102, 51, 0, 0.05))";
  }
  if (props.$tint === "cool") {
    return "var(--resume-color-cool-muted, rgba(0, 51, 102, 0.05))";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};

  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* High text contrast for readability */
  line-height: 1.6;
  font-size: 10pt;

  /* Ensure content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Use subtle backgrounds that print well */
    background: ${(props) => {
  if (props.$tint === "accent") return "rgba(0, 102, 204, 0.05)";
  if (props.$tint === "warm") return "rgba(102, 51, 0, 0.04)";
  if (props.$tint === "cool") return "rgba(0, 51, 102, 0.04)";
  return "#f8f8f8";
}};

    /* Ensure high contrast text for printing */
    color: #000;

    /* Remove border radius for cleaner print appearance */
    border-radius: 0;

    /* Adjust spacing for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent orphaned panels */
    page-break-inside: avoid;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/containers/AccentCalloutPanel.jsx
import React131 from "react";
import { jsx as jsx116, jsxs as jsxs64 } from "react/jsx-runtime";
var StyledCalloutPanel = Tt.div`
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #22c55e)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #f59e0b)";
  if (props.$variant === "info") return "var(--resume-color-info, #3b82f6)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  background: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-light, rgba(34, 197, 94, 0.08))";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-light, rgba(245, 158, 11, 0.08))";
  if (props.$variant === "info")
    return "var(--resume-color-info-light, rgba(59, 130, 246, 0.08))";
  return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, rgba(0, 102, 204, 0.08))";
}};

  padding: ${(props) => props.$size === "sm" ? "12px 16px" : "16px 20px"}; /* default md */

  margin: 16px 0;
  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  /* Ensure high contrast text, no reversed text */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    /* Solid border for print clarity */
    border-left: 3pt solid
      ${(props) => {
  if (props.$variant === "success") return "#22c55e";
  if (props.$variant === "warning") return "#f59e0b";
  if (props.$variant === "info") return "#3b82f6";
  return "#0066cc";
}};

    /* Lighter background for print */
    background: ${(props) => {
  if (props.$variant === "success") return "rgba(34, 197, 94, 0.05)";
  if (props.$variant === "warning") return "rgba(245, 158, 11, 0.05)";
  if (props.$variant === "info") return "rgba(59, 130, 246, 0.05)";
  return "rgba(0, 102, 204, 0.05)";
}};

    /* Remove border radius */
    border-radius: 0;

    /* Ensure black text for maximum contrast */
    color: #000;

    /* Prevent splitting across pages */
    page-break-inside: avoid;
  }
`;
var CalloutHeader = Tt.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  /* Icon styling */
  .callout-icon {
    font-size: 16pt;
    line-height: 1;
  }
`;
var CalloutTitle = Tt.div`
  /* Bold, larger title for emphasis (as per design constraints) */
  font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
  font-weight: 700;
  color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-dark, #16a34a)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-dark, #d97706)";
  if (props.$variant === "info")
    return "var(--resume-color-info-dark, #2563eb)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    /* Maintain weight and bump size slightly for print */
    font-weight: 700;
    font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
    color: #000;
  }
`;
var CalloutContent = Tt.div`
  font-size: 10pt;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    font-size: 10pt;
    line-height: 1.5;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/containers/SoftCardOutline.jsx
import React132 from "react";
import { jsx as jsx117 } from "react/jsx-runtime";
var StyledCardOutline = Tt.div`
  /* 1pt stroke as specified */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #cce5ff)";
  }
  if (props.$variant === "muted") {
    return props.theme?.colors?.border || "var(--resume-color-border, #e5e5e5)";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #d4d4d4)";
}};

  /* Rounded corners for softness */
  border-radius: ${(props) => {
  if (props.$rounded === "sm") return "4px";
  if (props.$rounded === "lg") return "12px";
  return props.theme?.radius?.md || "var(--resume-radius-md, 8px)";
}};

  /* No shadows - clean outline only */
  box-shadow: none;

  /* Padding options */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* Optional subtle background */
  background: ${(props) => {
  if (props.$background === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.03))";
  }
  if (props.$background === "muted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.02))";
  }
  return "transparent";
}};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: 1pt solid
      ${(props) => {
  if (props.$variant === "accent") return "#b3d9ff";
  if (props.$variant === "muted") return "#d4d4d4";
  return "#c0c0c0";
}};

    /* Remove border radius for print (cleaner appearance) */
    border-radius: 0;

    /* Remove background fills for print */
    background: transparent;

    /* Ensure high contrast text */
    color: #000;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent splitting card across pages */
    page-break-inside: avoid;

    /* Ensure no page edge collision */
    margin-left: 0;
    margin-right: 0;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/containers/RoleBlockFramed.jsx
import React133 from "react";
import { jsx as jsx118 } from "react/jsx-runtime";
var StyledRoleBlock = Tt.div`
  /* Light frame - subtle border */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #e0e0e0)";
  }
  if (props.$variant === "minimal") {
    return "transparent";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #e5e5e5)";
}};

  /* Optional background tint */
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.02))";
  }
  if (props.$variant === "tinted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.01))";
  }
  return "transparent";
}};

  /* Consistent padding to prevent edge collision */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px 16px";
  if (props.$padding === "lg") return "20px 24px";
  return "16px 20px";
}};

  /* Spacing between role blocks */
  margin: ${(props) => {
  if (props.$spacing === "sm") return "12px 0";
  if (props.$spacing === "lg") return "24px 0";
  if (props.$spacing === "none") return "0";
  return "16px 0";
}};

  /* Subtle rounding */
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for nested elements */
  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: ${(props) => {
  if (props.$variant === "minimal") return "none";
  if (props.$variant === "accent") return "0.5pt solid #d0d0d0";
  return "0.5pt solid #e0e0e0";
}};

    /* Remove background for clean print */
    background: transparent;

    /* Remove border radius for print */
    border-radius: 0;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px 12px";
  if (props.$padding === "lg") return "16px 20px";
  return "12px 16px";
}};

    /* Prevent page edge collision - ensure margins */
    margin-left: 0;
    margin-right: 0;

    /* Prevent splitting role blocks across pages */
    page-break-inside: avoid;

    /* Add small gap after each block for readability */
    margin-bottom: ${(props) => {
  if (props.$spacing === "sm") return "10px";
  if (props.$spacing === "lg") return "20px";
  if (props.$spacing === "none") return "0";
  return "14px";
}};

    /* Ensure high contrast text */
    color: #000;

    /* Optimize nested element spacing for print */
    h3,
    h4 {
      margin-bottom: 6px;
    }

    ul,
    ol {
      margin: 6px 0;
    }

    li {
      margin: 3px 0;
    }
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/tags/ToolTagRibbon.jsx
import React134 from "react";
import { jsx as jsx119, jsxs as jsxs65 } from "react/jsx-runtime";
var RibbonContainer = Tt.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "4px 0" : "6px 0"};
  line-height: ${(props) => props.theme?.typography?.lineHeight || "var(--resume-line-height, 1.5)"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 3pt 0;
  }
`;
var Tag2 = Tt.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #444444)"};
  white-space: nowrap;

  /* Preserve baseline grid */
  vertical-align: baseline;

  @media print {
    color: #444444;
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};
  }
`;
var Separator7 = Tt.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #cccccc)"};
  user-select: none;
  vertical-align: baseline;

  @media print {
    color: #cccccc;
  }
`;

// tleekkul.github.io/node_modules/@jsonresume/core/src/badges/BadgeRowOutline.jsx
import React135 from "react";
import { jsx as jsx120 } from "react/jsx-runtime";
var BadgeContainer2 = Tt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "6px 0" : "8px 0"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 4pt 0;
  }
`;
var OutlineBadge = Tt.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "small") return "3px 10px";
  if (props.$size === "large") return "7px 16px";
  return "5px 12px";
}};
  border: ${(props) => props.$strokeWidth || "0.5pt"} solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #666666)"};
  border-radius: ${(props) => props.$rounded ? "999px" : props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000000)"};
  background: transparent;
  white-space: nowrap;
  line-height: 1.2;

  /* Prevent scalloping on low-DPI displays */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    /* Ensure minimum stroke width for print clarity */
    border-width: ${(props) => {
  const width = props.$strokeWidth || "0.5pt";
  return width;
}};
    border-color: #666666;
    color: #000000;
    padding: ${(props) => {
  if (props.$size === "small") return "2pt 8pt";
  if (props.$size === "large") return "5pt 12pt";
  return "3pt 10pt";
}};
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};

    /* Force exact colors for print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// tleekkul.github.io/node_modules/jsonresume-theme-brutalist/src/Resume.jsx
import { jsx as jsx121, jsxs as jsxs66 } from "react/jsx-runtime";
var INK = "#0a0a0a";
var PAPER = "#ffffff";
var ACCENT = "#ffe600";
var RULE = "4px solid #0a0a0a";
var HAIR = "2px solid #0a0a0a";
var Page = Tt.div`
  max-width: 900px;
  margin: 0 auto;
  background: ${PAPER};
  color: ${INK};
  font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  padding: 0;
  border-left: ${RULE};
  border-right: ${RULE};

  @media print {
    border: none;
  }
`;
var Masthead = Tt.header`
  border-bottom: ${RULE};
  background: ${PAPER};
`;
var SpecBar = Tt.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: ${HAIR};
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    padding: 8px 16px;
  }

  span + span {
    border-left: ${HAIR};
  }
`;
var SpecTag = Tt.span`
  background: ${ACCENT};
  font-weight: 700;
`;
var NameBlock = Tt.div`
  padding: 36px 32px 28px 32px;
`;
var Name10 = Tt.h1`
  font-family: 'Archivo Black', 'Space Grotesk', sans-serif;
  font-size: clamp(40px, 9vw, 76px);
  line-height: 0.92;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -1px;
  word-break: break-word;
`;
var Label12 = Tt.div`
  display: inline-block;
  margin-top: 16px;
  background: ${INK};
  color: ${PAPER};
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  padding: 6px 12px;
`;
var ContactRow = Tt.div`
  border-top: ${HAIR};
  padding: 14px 32px;
  background: ${PAPER};
`;
var StyledContactInfo = Tt(ContactInfo)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  a,
  span {
    color: ${INK};
    text-decoration: none;
    font-weight: 700;
  }

  a {
    border-bottom: 3px solid ${ACCENT};
    padding-bottom: 1px;
  }
`;
var Summary5 = Tt.p`
  margin: 0;
  padding: 24px 32px;
  border-top: ${HAIR};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.45;
`;
var Body = Tt.main`
  padding: 0;
`;
var Block2 = Tt(Section)`
  border-bottom: ${RULE};
  padding: 28px 32px 32px 32px;

  &:last-child {
    border-bottom: none;
  }
`;
var Heading2 = Tt(SectionTitle)`
  font-family: 'Archivo Black', 'Space Grotesk', sans-serif;
  font-size: clamp(22px, 4vw, 32px);
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0 0 22px 0;
  display: flex;
  align-items: baseline;
  gap: 14px;

  &::before {
    content: attr(data-index);
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    background: ${ACCENT};
    color: ${INK};
    padding: 4px 8px;
    letter-spacing: 0;
    align-self: center;
  }
`;
var Entry = Tt.div`
  border: ${HAIR};
  box-shadow: 8px 8px 0 ${INK};
  background: ${PAPER};
  padding: 18px 20px;
  margin-bottom: 26px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var EntryHead = Tt.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px 16px;
  border-bottom: ${HAIR};
  padding-bottom: 10px;
  margin-bottom: 12px;
`;
var EntryTitle = Tt.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  margin: 0;

  a {
    color: ${INK};
    text-decoration: none;
    box-shadow: inset 0 -8px 0 ${ACCENT};
  }
`;
var EntryMeta = Tt.div`
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;
var EntrySub = Tt.div`
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;

  a {
    color: ${INK};
    text-decoration: none;
    box-shadow: inset 0 -6px 0 ${ACCENT};
  }
`;
var Para = Tt.p`
  margin: 0 0 10px 0;
  font-size: 15px;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Bullets = Tt.ul`
  list-style: none;
  margin: 12px 0 0 0;
  padding: 0;

  li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 8px;
    line-height: 1.45;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      width: 12px;
      height: 12px;
      background: ${ACCENT};
      border: 2px solid ${INK};
    }
  }
`;
var SkillGrid = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0;
  border: ${HAIR};

  @media print {
    grid-template-columns: repeat(2, 1fr);
  }
`;
var SkillCell = Tt.div`
  border: ${HAIR};
  margin: -1px;
  padding: 14px 16px;

  h4 {
    font-family: 'Archivo Black', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 10px 0;
  }
`;
var StyledBadgeList = Tt(BadgeList)`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var StyledBadge2 = Tt(Badge)`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${PAPER};
  color: ${INK};
  border: 2px solid ${INK};
  border-radius: 0;
  padding: 3px 8px;
`;
var PlainGrid = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
`;
var PlainCard = Tt.div`
  border: ${HAIR};
  border-left: ${RULE};
  padding: 14px 16px;

  h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 6px 0;

    a {
      color: ${INK};
      text-decoration: none;
      box-shadow: inset 0 -7px 0 ${ACCENT};
    }
  }

  p {
    margin: 0 0 6px 0;
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
var MetaTag = Tt.span`
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${INK};
  display: block;
`;
function pad(n2) {
  return String(n2).padStart(2, "0");
}
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    projects = [],
    volunteer = [],
    awards = [],
    certificates = [],
    publications = [],
    languages = [],
    interests = [],
    references = []
  } = resume || {};
  const loc = basics.location || {};
  const locParts = [loc.city, loc.region, loc.countryCode].filter(Boolean);
  const locLine = locParts.join(", ");
  let section = 0;
  const next2 = () => pad(++section);
  return /* @__PURE__ */ jsxs66(Page, { children: [
    /* @__PURE__ */ jsxs66(Masthead, { children: [
      /* @__PURE__ */ jsxs66(SpecBar, { children: [
        /* @__PURE__ */ jsx121(SpecTag, { children: "Curriculum Vitae" }),
        locLine && /* @__PURE__ */ jsx121("span", { children: locLine }),
        /* @__PURE__ */ jsx121("span", { children: "Rev. 0.1" })
      ] }),
      /* @__PURE__ */ jsxs66(NameBlock, { children: [
        basics.name && /* @__PURE__ */ jsx121(Name10, { children: basics.name }),
        basics.label && /* @__PURE__ */ jsx121(Label12, { children: basics.label })
      ] }),
      (basics.email || basics.phone || basics.url || basics.profiles && basics.profiles.length > 0) && /* @__PURE__ */ jsx121(ContactRow, { children: /* @__PURE__ */ jsx121(StyledContactInfo, { basics }) }),
      basics.summary && /* @__PURE__ */ jsx121(Summary5, { children: basics.summary })
    ] }),
    /* @__PURE__ */ jsxs66(Body, { children: [
      work.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Experience" }),
        work.map((job, i2) => /* @__PURE__ */ jsxs66(Entry, { children: [
          /* @__PURE__ */ jsxs66(EntryHead, { children: [
            /* @__PURE__ */ jsx121(EntryTitle, { children: job.position || job.name || "Role" }),
            (job.startDate || job.endDate) && /* @__PURE__ */ jsx121(EntryMeta, { children: /* @__PURE__ */ jsx121(
              DateRange,
              {
                startDate: job.startDate,
                endDate: job.endDate
              }
            ) })
          ] }),
          job.name && job.position && /* @__PURE__ */ jsxs66(EntrySub, { children: [
            job.url ? /* @__PURE__ */ jsx121(Link, { href: safeUrl(job.url), children: job.name }) : job.name,
            job.location ? ` // ${job.location}` : ""
          ] }),
          job.summary && /* @__PURE__ */ jsx121(Para, { children: job.summary }),
          job.highlights && job.highlights.length > 0 && /* @__PURE__ */ jsx121(Bullets, { children: job.highlights.map((h2, hi) => /* @__PURE__ */ jsx121("li", { children: h2 }, hi)) })
        ] }, i2))
      ] }),
      education.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Education" }),
        education.map((edu, i2) => /* @__PURE__ */ jsxs66(Entry, { children: [
          /* @__PURE__ */ jsxs66(EntryHead, { children: [
            /* @__PURE__ */ jsx121(EntryTitle, { children: edu.institution || "Institution" }),
            (edu.startDate || edu.endDate) && /* @__PURE__ */ jsx121(EntryMeta, { children: /* @__PURE__ */ jsx121(
              DateRange,
              {
                startDate: edu.startDate,
                endDate: edu.endDate
              }
            ) })
          ] }),
          (edu.studyType || edu.area) && /* @__PURE__ */ jsx121(EntrySub, { children: [edu.studyType, edu.area].filter(Boolean).join(" // ") }),
          edu.score && /* @__PURE__ */ jsxs66(Para, { children: [
            "GPA: ",
            edu.score
          ] }),
          edu.courses && edu.courses.length > 0 && /* @__PURE__ */ jsx121(Bullets, { children: edu.courses.map((c2, ci) => /* @__PURE__ */ jsx121("li", { children: c2 }, ci)) })
        ] }, i2))
      ] }),
      skills.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Skills" }),
        /* @__PURE__ */ jsx121(SkillGrid, { children: skills.map((skill, i2) => /* @__PURE__ */ jsxs66(SkillCell, { children: [
          /* @__PURE__ */ jsxs66("h4", { children: [
            skill.name || "Skills",
            skill.level ? ` \u2014 ${skill.level}` : ""
          ] }),
          skill.keywords && skill.keywords.length > 0 && /* @__PURE__ */ jsx121(StyledBadgeList, { children: skill.keywords.map((kw, ki) => /* @__PURE__ */ jsx121(StyledBadge2, { children: kw }, ki)) })
        ] }, i2)) })
      ] }),
      projects.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Projects" }),
        projects.map((project, i2) => /* @__PURE__ */ jsxs66(Entry, { children: [
          /* @__PURE__ */ jsxs66(EntryHead, { children: [
            /* @__PURE__ */ jsx121(EntryTitle, { children: project.url ? /* @__PURE__ */ jsx121(Link, { href: safeUrl(project.url), children: project.name || "Project" }) : project.name || "Project" }),
            (project.startDate || project.endDate) && /* @__PURE__ */ jsx121(EntryMeta, { children: /* @__PURE__ */ jsx121(
              DateRange,
              {
                startDate: project.startDate,
                endDate: project.endDate
              }
            ) })
          ] }),
          (project.entity || project.type) && /* @__PURE__ */ jsx121(EntrySub, { children: [project.entity, project.type].filter(Boolean).join(" // ") }),
          project.description && /* @__PURE__ */ jsx121(Para, { children: project.description }),
          project.highlights && project.highlights.length > 0 && /* @__PURE__ */ jsx121(Bullets, { children: project.highlights.map((h2, hi) => /* @__PURE__ */ jsx121("li", { children: h2 }, hi)) }),
          project.keywords && project.keywords.length > 0 && /* @__PURE__ */ jsx121(StyledBadgeList, { children: project.keywords.map((kw, ki) => /* @__PURE__ */ jsx121(StyledBadge2, { children: kw }, ki)) })
        ] }, i2))
      ] }),
      volunteer.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Volunteer" }),
        volunteer.map((vol, i2) => /* @__PURE__ */ jsxs66(Entry, { children: [
          /* @__PURE__ */ jsxs66(EntryHead, { children: [
            /* @__PURE__ */ jsx121(EntryTitle, { children: vol.position || "Volunteer" }),
            (vol.startDate || vol.endDate) && /* @__PURE__ */ jsx121(EntryMeta, { children: /* @__PURE__ */ jsx121(
              DateRange,
              {
                startDate: vol.startDate,
                endDate: vol.endDate
              }
            ) })
          ] }),
          vol.organization && /* @__PURE__ */ jsx121(EntrySub, { children: vol.url ? /* @__PURE__ */ jsx121(Link, { href: safeUrl(vol.url), children: vol.organization }) : vol.organization }),
          vol.summary && /* @__PURE__ */ jsx121(Para, { children: vol.summary }),
          vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ jsx121(Bullets, { children: vol.highlights.map((h2, hi) => /* @__PURE__ */ jsx121("li", { children: h2 }, hi)) })
        ] }, i2))
      ] }),
      awards.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Awards" }),
        /* @__PURE__ */ jsx121(PlainGrid, { children: awards.map((award, i2) => /* @__PURE__ */ jsxs66(PlainCard, { children: [
          /* @__PURE__ */ jsx121("h4", { children: award.title || "Award" }),
          (award.awarder || award.date) && /* @__PURE__ */ jsx121(MetaTag, { children: [award.awarder, award.date].filter(Boolean).join(" // ") }),
          award.summary && /* @__PURE__ */ jsx121("p", { children: award.summary })
        ] }, i2)) })
      ] }),
      certificates.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Certificates" }),
        /* @__PURE__ */ jsx121(PlainGrid, { children: certificates.map((cert, i2) => /* @__PURE__ */ jsxs66(PlainCard, { children: [
          /* @__PURE__ */ jsx121("h4", { children: cert.url ? /* @__PURE__ */ jsx121(Link, { href: safeUrl(cert.url), children: cert.name || "Certificate" }) : cert.name || "Certificate" }),
          (cert.issuer || cert.date) && /* @__PURE__ */ jsx121(MetaTag, { children: [cert.issuer, cert.date].filter(Boolean).join(" // ") })
        ] }, i2)) })
      ] }),
      publications.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Publications" }),
        /* @__PURE__ */ jsx121(PlainGrid, { children: publications.map((pub, i2) => /* @__PURE__ */ jsxs66(PlainCard, { children: [
          /* @__PURE__ */ jsx121("h4", { children: pub.url ? /* @__PURE__ */ jsx121(Link, { href: safeUrl(pub.url), children: pub.name || "Publication" }) : pub.name || "Publication" }),
          (pub.publisher || pub.releaseDate) && /* @__PURE__ */ jsx121(MetaTag, { children: [pub.publisher, pub.releaseDate].filter(Boolean).join(" // ") }),
          pub.summary && /* @__PURE__ */ jsx121("p", { children: pub.summary })
        ] }, i2)) })
      ] }),
      languages.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Languages" }),
        /* @__PURE__ */ jsx121(StyledBadgeList, { children: languages.map((lang, i2) => /* @__PURE__ */ jsxs66(StyledBadge2, { children: [
          lang.language || "Language",
          lang.fluency ? ` \u2014 ${lang.fluency}` : ""
        ] }, i2)) })
      ] }),
      interests.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "Interests" }),
        /* @__PURE__ */ jsx121(PlainGrid, { children: interests.map((interest, i2) => /* @__PURE__ */ jsxs66(PlainCard, { children: [
          /* @__PURE__ */ jsx121("h4", { children: interest.name || "Interest" }),
          interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ jsx121("p", { children: interest.keywords.join(", ") })
        ] }, i2)) })
      ] }),
      references.length > 0 && /* @__PURE__ */ jsxs66(Block2, { children: [
        /* @__PURE__ */ jsx121(Heading2, { "data-index": next2(), children: "References" }),
        /* @__PURE__ */ jsx121(PlainGrid, { children: references.map((ref, i2) => /* @__PURE__ */ jsxs66(PlainCard, { children: [
          /* @__PURE__ */ jsx121("h4", { children: ref.name || "Reference" }),
          ref.reference && /* @__PURE__ */ jsx121("p", { children: ref.reference })
        ] }, i2)) })
      ] })
    ] })
  ] });
}
var Resume_default = Resume;

// tleekkul.github.io/node_modules/jsonresume-theme-brutalist/index.jsx
import { jsx as jsx122 } from "react/jsx-runtime";
function render(resume) {
  const title = resume.basics && resume.basics.name || "Resume";
  return renderResumeDocument(/* @__PURE__ */ jsx122(Resume_default, { resume }), {
    fonts: [
      "Archivo Black",
      "Space Grotesk:wght@400;500;700",
      "Space Mono:wght@400;700"
    ],
    title,
    includeTokensCss: false
  });
}
export {
  render
};
