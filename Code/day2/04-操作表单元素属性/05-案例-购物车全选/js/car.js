// 1. 获取thead中的一个复选框
var all = document.querySelector('#all');
// 2. 获取tbody中的一组复选框
var cks = document.querySelectorAll('tbody input[type=checkbox]');
// 【功能1：点击thead的中的复选框，控制tbody中所有的复选框同步变化】
// 1. 给thead中的一个复选框注册onclick
all.onclick = function () {
  // 2. 获取点击后的复选框的checked属性值
  var isChange = this.checked;
  // 3. 把这个值，同步的设置给tbody中所有的复选框
  for (var i = 0; i < cks.length; i++) {
    cks[i].checked = isChange;
  }
};


// 【功能2：点击tbody的中的复选框，控制thead中的复选框是否全选】
for (var i = 0; i < cks.length; i++) {
  cks[i].onclick = function () {
    // tbody中所有的复选框
    var len1 = cks.length; 
    // 获取选中的复选框的个数
    var len2 = document.querySelectorAll('tbody input[type=checkbox]:checked').length;
    // 判断
    // if (len1 == len2) {
    //   all.checked = true;
    // } else {
    //   all.checked = false;
    // }

    all.checked = len1 == len2;
  };
}