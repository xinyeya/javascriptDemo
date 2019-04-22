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
// 2. 创建table，追加到box1中
// 3. 创建thead，追加到table中
// 3.1 创建一个tr，追加到thead中
// 3.2 循环遍历heads数组，取出一个数据，就创建一个th，并且追到tr

// 4. 创建tbody，追加到table中
// 4.1 循环遍历数组datas，取出一对象，就创建一个tr追加到tbody中
// 4.2 在每一行中，循环遍历对象中的属性，取出要给属性值，就创建一个td，追加到tr中


