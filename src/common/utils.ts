
const Utils = {
  getParameter: function (param: any) {
    const reg = new RegExp('[&,?,&amp;]' + param + '=([^\\&]*)', 'i');
    const value = reg.exec(window.location.search || window.location.hash);
    return decodeURIComponent(value ? value[1] : '');
  },
  // 设置cookie
  setCookie: function (cookieName: string, cookieValue: any) {
    document.cookie = `${cookieName}=${cookieValue}`;
  },
  // 获取cookie
  getCookie: function (cookieName: string) {
    const allcookies = document.cookie;
    let cookie_pos = allcookies.indexOf(cookieName); //索引的长度
    let value = '';
    // 如果找到了索引，就代表cookie存在，
    // 反之，就说明不存在。
    if (cookie_pos !== -1) {
      // 把cookie_pos放在值的开始，只要给值加1即可。
      cookie_pos += cookieName.length + 1; //这里容易出问题，所以请大家参考的时候自己好好研究一下
      let cookie_end = allcookies.indexOf(';', cookie_pos);

      if (cookie_end === -1) {
        cookie_end = allcookies.length;
      }
      value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。
    }
    return value;
  },
  // 删除cookie
  delCookie:function(name:string){
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const expires = exp.toUTCString()
    const cval = Utils.getCookie(name)
    if(cval !=null) document.cookie = `${name}=${cval};expires=${expires}`
  }

}

export default Utils