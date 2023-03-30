import {CN_ARRAY1, CN_ARRAY2, CN_ARRAY3, CN_ARRAY4} from './asset.js'

function addSuffix(num, isComplexType) {
  const obj = new Object()
  num = num.map(value => {
    value = Number(value)
    if (isComplexType) {
      value = CN_ARRAY3[value]
    } else {
      value = CN_ARRAY1[value]
    }
    return value
  })
    .forEach((value, index) => {
      obj[index] = value
    })

  return obj
}

function _convertIntoFinalString(num, isComplexType) {
  num = num.toString().split("")
  const index = num.findIndex(item => item === ".")
  let afterNum = null
  let finalAfterString = new String()
  if (index !== -1) {
    afterNum = num.splice(index)
    afterNum.splice(0, 1)
    const obj2 = addSuffix(afterNum, isComplexType)
    for (let item in obj2) {
      finalAfterString += obj2[item]
    }
  }
  const obj = addSuffix(num, isComplexType)
  const objKeysLength = Object.keys(obj).length
  for (let i = 0, j = objKeysLength - 1; i < objKeysLength; i++, j--) {
    obj[i] = obj[i] + (isComplexType ? CN_ARRAY4[j] : CN_ARRAY2[j])
  }
  let finalString = new String()
  for (let item in obj) {
    finalString += obj[item]
  }
  if (afterNum) {
    return {
      finalString,
      finalAfterString
    }
  } else {
    return {
      finalString,
      finalAfterString
    }
  }

}

function _removeExess(str, char) {
  const reg1 = new RegExp(char, 'g')
  const reg2 = new RegExp(char)
  if (str.match(reg1)?.length > 1) {
    str = str.replace(reg2, '')
    return _removeExess(str, char)
  }
  return str
}

function _formatString(str) {
  str = str.replace(/零(十|百|千)万/g, "零")
    .replace(/零万/, "万")
    .replace(/万+/g, '万')
  str = str.replace(/零万/, '万')
    .replace(/零(十|百|千)/g, '零')
    .replace(/零+/g, '零')
    .replace(/零$/, "")
    .replace(/^一十/, "十")
  str = _removeExess(str, '亿')
  str = _removeExess(str, '万')
  return str
}

function _formatComplexString(str) {
  str = str.replace(/零(拾|佰|仟)万/g, "零")
    .replace(/零万/, "万")
    .replace(/万+/g, '万')
  str = str.replace(/零万/, '万')
    .replace(/零(拾|佰|仟)/g, '零')
    .replace(/零+/g, '零')
    .replace(/零$/, "")
    .replace(/^壹拾/, "拾")
  str = _removeExess(str, '亿')
  str = _removeExess(str, '万')
  return str
}





/**
 * @function ctc :use to convert Arabic numerals into Chinese numerals 用于将数字转换为大小写中文。
 * @param {Number} num This is a param that can't be missed.
 * @param {Boolean} isComplexType This param is optional, the default value is false.
 * @param {String} unit This param is optional, the default value is void string.
 * @return {String}
 */


function ctcjs(num, isComplexType = false, unit = "") {
    if (typeof num !== "number") {
      console.error("Function CNnum's argument type must be Number.")
      return new Error()
    } else if (num === 0) {
      return CN_ARRAY1[0]
    }
    let stringObject = _convertIntoFinalString(num, isComplexType)
    let finalString = stringObject.finalString
    let finalAfterString = stringObject.finalAfterString
  
    if (isComplexType) {
      finalString = _formatComplexString(finalString)
    } else {
      finalString = _formatString(finalString)
    }
    if (finalAfterString.length !== 0) {
      if (isComplexType) {
        finalString = finalString + "點" + finalAfterString
      } else {
        finalString = finalString + "点" + finalAfterString
      }
    }
    if(unit) {
      finalString = finalString + unit
    }
    return finalString;
  }


export default ctcjs

