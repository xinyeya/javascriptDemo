/*
  函数封装注意事项：
    ① 对于函数体中不能写死的地方，选择用参数
*/
/*
  功能：动态创建表格
  参数：
    selector ，选择器，string，表示创建后的表格要追加到哪里
    heads, 数组，表示表头数据
    datas,数组，表示表体数据
 */
function tableFn(selector, heads, datas) {
  // 1. 获取box1元素
  var box = document.querySelector(selector);
  // 2. 创建table，追加到box1中
  var table = document.createElement('table');
  box.appendChild(table);

  // 3. 创建thead，追加到table中
  var thead = document.createElement('thead');
  table.appendChild(thead);
  // 3.1 创建一个tr，追加到thead中
  var theadTr = document.createElement('tr');
  thead.appendChild(theadTr);
  // 3.2 循环遍历heads数组，取出一个数据，就创建一个th，并且追到tr
  for (var i = 0; i < heads.length; i++) {
    // 取出内容
    var title = heads[i];
    // 创建th
    var th = document.createElement('th');
    // 设置th的内容
    th.innerText = title;
    // 追加到tr中
    theadTr.appendChild(th);
  }


  // 4. 创建tbody，追加到table中
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  // 4.1 循环遍历数组datas，取出一对象，就创建一个tr追加到tbody中
  for (var i = 0; i < datas.length; i++) {
    // 取出对象
    var student = datas[i];
    // 创建tr
    var tbodyTr = document.createElement('tr');
    // 追加到tbody中
    tbody.appendChild(tbodyTr);
    // 4.2 在每一行中，循环遍历对象中的属性，取出要给属性值，就创建一个td，追加到tr中
    // 遍历对象
    for (var key in student) {
      // 创建td
      var td = document.createElement('td');
      // 设置td的内容
      td.innerText = student[key];
      // 追加到tr中
      tbodyTr.appendChild(td);
    }
    // 创建最后一个td
    var lastTd = document.createElement('td');
    // 设置最后一个td的内容
    lastTd.innerHTML = '<a href="javascript:">删除</a>';
    // 追加到tr中
    tbodyTr.appendChild(lastTd);

  }


  //以上都是创建表格的功能↑  【删除功能】
  // 获取一组a
  var dels = tbody.querySelectorAll('a');
  // 循环遍历a，注册onclick
  for (var i = 0; i < dels.length; i++) {
    dels[i].onclick = function () {
      // 提示用是否操作
      var isOk = confirm('是否真的要删除，考虑好了吗？');
      if (isOk) {
        // this 表示触发的事件源
        // 获取当前a所在的这一行tr
        var tr = this.parentNode.parentNode;
        // 删除tr
        tbody.removeChild(tr);
      }
    };
  }



}