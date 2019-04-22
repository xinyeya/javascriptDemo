// 后端的数据

// 表头数据
var heads = ['姓名', '年龄', '性别', '学号', '薪资', '城市', '操作'];
// 表体数据
var datas = [
  { name: '欧阳霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '上海' },
  { name: '令狐霸天', age: 12, gender: '男', stuId: '1002', salary: '20000', city: '北京' },
  { name: '诸葛霸天', age: 15, gender: '男', stuId: '1003', salary: '20000', city: '南京' },
  { name: '西门霸天', age: 99, gender: '男', stuId: '1004', salary: '20000', city: '深圳' },
  { name: '上官霸天', age: 29, gender: '男', stuId: '1005', salary: '20000', city: '北京' },
  { name: '上官霸天', age: 39, gender: '男', stuId: '1006', salary: '20000', city: '北京' },
  { name: '尉迟霸天', age: 49, gender: '男', stuId: '1007', salary: '20000', city: '北京' },
  { name: '慕容霸天', age: 59, gender: '男', stuId: '1008', salary: '20000', city: '北京' }
];

// 1. 获取box1元素
var box1 = document.querySelector('.box1');
// 2. 创建table，追加到box1中
var table = document.createElement('table');
box1.appendChild(table);

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



