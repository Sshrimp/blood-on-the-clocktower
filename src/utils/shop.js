// 简化显示人数
export function optimizeNum(number) {
  if(number < 0) return;

  if(number < 10000 && number > 0) return number;

  return (number / 10000) + '万';
}

// 简化显示人数
export const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor (count / 10000) < 10000) {
    return Math.floor (count/1000)/10 + "万";
  } else  {
    return Math.floor (count / 10000000)/ 10 + "亿";
  }
}

// 对象转数组
export function Obj2Arr (obj) {
  let arr = [];
  Object.keys(obj).forEach(v => {
    let o = {};
    o[v] = obj[v];
    arr.push(o);
  })

  return arr;
}
