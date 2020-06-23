/**
 * 深拷贝
 * @param obj 要拷贝的对象
 * @param hash 存储的map 防止循环引用
 */
export const deepClone = function (obj, hash = new WeakMap()) {
  if(obj instanceof RegExp){
    return new RegExp(obj)
  }
  if(obj instanceof Date){
    return new Date(obj)
  }

  if(typeof obj !== 'object' || obj === null){
    return obj
  }

  //如果存在循环引用的情况  则直接返回
  if(hash.has(obj)){
    return hash.get(obj)
  }

  let t =  new obj.constructor()
  hash.set(obj,t)

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      t[key] = this.deepClone(obj[key],hash)
    }
  }

  return t
}

/**
 * 拼接导出url
 * @param paramObj [object]
 * @output url [string]
 */
export const spliceUrl = function (paramObj) {
  let url = ''
  let paramList = Object.entries(paramObj)
  paramList.forEach((el,inx) => {
    // &end_date=2019-12-01&
    url +=  el[0] + '=' +el[1] + '&'
  })
  return url.substr(0,url.length-1)
},
