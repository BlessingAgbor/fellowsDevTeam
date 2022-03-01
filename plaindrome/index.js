const check =(str)=> {
    let colin = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(colin, '');
    var showlenght = str.length;
    for (let i = 0; i < showlenght/2; i++) {
      if (str[i] !== str[showlenght - 1 - i]) {
          return false;
      }
    }
    return true;
}
console.log(check("A man, a plan, a canal. Panama"))