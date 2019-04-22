// 1. 获取一组li
var lis = document.querySelectorAll('li');
// 2. 获取一组类名是item的div
var items = document.querySelectorAll('.item');
// 3. 循环遍历li分配编号和注册事件
for (var i = 0; i < lis.length; i++) {
  // 分配编号
  lis[i].index = i;
  // 注册事件
  lis[i].onmouseenter = function () {
    // 3.1 获取点击的li的编号
    var num = this.index;
    // 3.2 让当前点击的li样式突出→加类名active,其他同级的li要移除类名active
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = '';
      items[j].style.display = 'none';
    }
    this.className = 'active';
    // 3.3 让对应的div展示
    items[num].style.display = 'block';
  };
}
