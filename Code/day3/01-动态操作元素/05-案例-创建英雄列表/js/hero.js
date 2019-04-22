// 后的的数据
var datas = [
  { name: '司马懿', imgSrc: '01.jpg' },
  { name: '女娲', imgSrc: '02.jpg' },
  { name: '百里守约', imgSrc: '03.jpg' },
  { name: '亚瑟', imgSrc: '04.jpg' },
  { name: '虞姬', imgSrc: '05.jpg' }
];

// 1. 获取按钮
var btn = document.querySelector('a');
// 2. 获取ul
var ul = document.querySelector('ul');
// 3. 给按钮注册onclick
btn.onclick = function () {
  // 3.1 循环遍历数组（后端的数据），取出一个对象，就创建一个li
  for (var i = 0; i < datas.length; i++) {
    // 取出一个英雄对象
    var hero = datas[i];
    // 创建li
    var newLi = document.createElement('li');
    // 设置li的内容
    newLi.innerHTML = '<img src="uploads/heros/' + hero.imgSrc + '" title="' + hero.name + '">'
    // 追加到ul中
    ul.appendChild(newLi);
  }
  // 3.2 设置li的内容（img）
  // 3.3 追加到ul中

};

