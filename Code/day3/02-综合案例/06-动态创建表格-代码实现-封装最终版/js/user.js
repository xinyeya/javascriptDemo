// 后端的数据

// 表头数据
var heads1 = ['姓名', '年龄', '性别', '学号', '薪资', '城市', '操作'];
// 表体数据
var datas1 = [
  { name: '欧阳霸天', age: 19, gender: '男', stuId: '1001', salary: '20000', city: '上海' },
  { name: '令狐霸天', age: 12, gender: '男', stuId: '1002', salary: '20000', city: '北京' },
  { name: '诸葛霸天', age: 15, gender: '男', stuId: '1003', salary: '20000', city: '南京' },
  { name: '西门霸天', age: 99, gender: '男', stuId: '1004', salary: '20000', city: '深圳' },
  { name: '上官霸天', age: 29, gender: '男', stuId: '1005', salary: '20000', city: '北京' },
  { name: '上官霸天', age: 39, gender: '男', stuId: '1006', salary: '20000', city: '北京' },
  { name: '尉迟霸天', age: 49, gender: '男', stuId: '1007', salary: '20000', city: '北京' },
  { name: '慕容霸天', age: 59, gender: '男', stuId: '1008', salary: '20000', city: '北京' }
];


// 表头数据2
var heads2 = ['班级名称', '专业方向', '人数', '操作'];
// 表体数据2
var datas2 = [
  {name:'大神班',fangXiang:'前端',count:100},
  {name:'小神班',fangXiang:'Java',count:99},
  {name:'菜鸟班',fangXiang:'PHP',count:60},
  {name:'实验班',fangXiang:'C',count:100},
]

// 调用1
tableFn('.box1',heads1,datas1);
// 调用2
tableFn('.box2',heads2,datas2);