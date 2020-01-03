// 10进制字符串转byte(ascii码)
function stringToBytes(str) {
  var strArray = new Uint8Array(str.length/2);
  var index=0;
  for (var i = 0; i < str.length; i++) {
    
    if (0 == (i % 2)) {
      strArray[index] = (str.charCodeAt(i) - 48) << 4;
    }
    else {
      strArray[index] |= (str.charCodeAt(i) - 48);
      index++;
      console.log("str.charCodeAt(i):" + str.charCodeAt(i));
      console.log("i:" + i/2);
      var x = strArray[i / 2];
      console.log("strArray[i / 2]:" + (str.charCodeAt(i) - 48));
    }
    
  }
 
  // const array = new Uint8Array(strArray.length)
  // strArray.forEach(
  //   function (item, index) {
  //   array[index] = item;
  //   })
  return strArray.buffer;
}

// ArrayBuffer转16进制字符串示例
function ab2hext(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}

//16进制字符串转10进制字符串
function hexToString(str) {
  var trimedStr = str.trim();
  var rawStr =
    trimedStr.substr(0, 2).toLowerCase() === "0x" ?
      trimedStr.substr(2) :
      trimedStr;
  var len = rawStr.length;
  if (len % 2 !== 0) {
    // alert("Illegal Format ASCII Code!");
    return "";
  }
  var curCharCode;
  var resultStr = [];
  for (var i = 0; i < len; i = i + 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
    resultStr.push(String.fromCharCode(curCharCode));
  }
  return resultStr.join("");
}

/*微信app版本比较*/
function versionCompare(ver1, ver2) {
  var version1pre = parseFloat(ver1)
  var version2pre = parseFloat(ver2)
  var version1next = parseInt(ver1.replace(version1pre + ".", ""))
  var version2next = parseInt(ver2.replace(version2pre + ".", ""))
  if (version1pre > version2pre)
    return true
  else if (version1pre < version2pre)
    return false
  else {
    if (version1next > version2next)
      return true
    else
      return false
  }
}

module.exports = {
  stringToBytes: stringToBytes,
  ab2hext: ab2hext,
  hexToString: hexToString,
  versionCompare: versionCompare
}
