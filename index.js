/**
 * 深度拷贝
 * arr：Object | Array，克隆拷贝
 * b ：Boolean,设置递归方向，由左到右，由右到左,后者覆盖前者
 * def：Object({})， 传递给函数的初始值
 * 返回一个创建好的值(引用===def)
 */
export default function depthAssign(arr, b, def = {}) {
  let fn = b ? 'reduceRight' : 'reduce'
  if(!Array.isArray(arr)) arr = [arr]
  return arr[fn]((obj, newObj) => {
    if (isEffective(newObj)) exhaustion(obj, newObj)
    return obj
  }, def)
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
    if (obj[key] === undefined) obj[key] = nk instanceof Array ? [] : {}
      //有效的object
      exhaustion(obj[key], nk)
  } else if (nk !== undefined) {
    obj[key] = nk
  }
}
//是否是object并且有key
function isEffective(obj){
  return obj instanceof Object && Object.keys(obj).length != 0
}