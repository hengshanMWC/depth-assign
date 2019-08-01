/**
 * 对象、数组、函数、深度遍历
 * @author mwc
 * @since 1.0.0
 * @memberOf objects
 * @param {boolean} [direction = false]
 * @param {object|array|function} source
 * @param {object|array|function} target
 */
export default (direction = false, source, ...target) => {
  let fn = direction ? 'reduceRight' : 'reduce'
  target[fn]((obj, newObj) => {
    if (isEffective(newObj)) exhaustion(obj, newObj)
    return obj
  }, source)
}

function exhaustion(obj, newObj) {
  Object.keys(newObj).forEach(key => {
    usable(obj, newObj, key)
  })
}
//递归或者赋值
function usable(obj, newObj, key) {
  let nk = newObj[key]
  if (isEffective(nk)) {
    if (obj[key] === undefined) {
      obj[key] = nk instanceof Array ? [] : {}
    }
    //有效的object
    exhaustion(obj[key], nk)
  } else if (nk !== undefined && obj instanceof Object) {
    obj[key] = nk
  }
}
//是否是object并且有key
function isEffective(obj){
  return obj instanceof Object && Object.keys(obj).length != 0
}