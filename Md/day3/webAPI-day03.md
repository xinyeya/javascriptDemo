# webAPI-day03

## 核心知识点

+ 动态创建元素
+ 动态追加元素
+ 动态删除元素



## 1. 动态创建元素

+ **通过innerHTML创建元素** 

  > + 语法：**元素.innerHTML = '内容';** 
  > + 代码：
  >
  >   ```html
  >     <button>创建li</button>
  >     <ul>
  >       <li>我是li</li>
  >     </ul>
  >     <script>
  >       var btn = document.querySelector('button');
  >       var ul = document.querySelector('ul');
  >       btn.onclick = function() {
  >         // 覆盖原有的内容
  >         // ul.innerHTML = '<li>我是新来的</li>';
  >
  >         // 获取原有的内容
  >         var str = ul.innerHTML;
  >         // 设置ul的内容
  >         ul.innerHTML = str + '<li>我是新来的</li>';
  >       };
  >     </script>
  >   ```

+ **通过document.createElement创建元素** 

  > + 语法：**document.createElement(‘标签名’);**   返回一个新的元素对象
  > + 代码：
  >
  >   ```html
  >     <button>创建li</button>
  >     <ul>
  >       <li>我是li</li>
  >     </ul>
  >     <script>
  >       var btn = document.querySelector('button');
  >       var ul = document.querySelector('ul');
  >       btn.onclick = function() {
  >        // 创建一个新的li元素
  >        var newLi = document.createElement('li');
  >        // 追加
  >        ul.appendChild(newLi);
  >        // 设置内容
  >        newLi.innerText = '我是新来的li';
  >       };
  >     </script>
  >   ```

+ **性能测试** 

  > - innerHTML执行速度慢（大量字符串拼接时），性能差。不推荐使用
  > - createElement方法执行速度快，**性能高** ，在实际开发中**推荐使用** 。


## 2. 动态追加元素

+ 语法：**父元素.appendChild(子元素);** 

+ 代码：

  > ```html
  >   <button>创建li</button>
  >   <ul>
  >     <li>我是li</li>
  >   </ul>
  >   <script>
  >     var btn = document.querySelector('button');
  >     var ul = document.querySelector('ul');
  >     btn.onclick = function() {
  >      // 创建一个新的li元素
  >      var newLi = document.createElement('li');
  >      // 追加
  >      ul.appendChild(newLi);
  >      // 设置内容
  >      newLi.innerText = '我是新来的li';
  >     };
  >   </script>
  > ```

## 3. 动态删除元素

+ 语法：**父元素.removeChild(子元素);** 
+ 代码：

  > ```html
  >   <ul>
  >     <li>我是li1</li>
  >     <li class="li2">我是li2</li>
  >     <li>我是li3</li>
  >   </ul>
  >   <script>
  >     var ul = document.querySelector('ul');
  >     var li2 = document.querySelector('.li2');
  >     // 移除第二li
  >     ul.removeChild(li2);
  >   </script>
  > ```




## 4. 其他操作

### 4.1 插入元素

+ 语法：**父节点.insertBefore(新的节点,旧的子节点)** 


### 4.2 替换元素

+ 语法：**父节点.replaceChild(新的节点,旧的子节点)** 


### 4.3 克隆元素

+ 语法：元素.cloneNode(true或false);  返回一份新的克隆后的元素，默认值false
  + true，克隆该元素的所有内容
  + false，仅仅克隆外层标签


### 代码

> ```html
>   <ul>
>     <li>我是li1</li>
>     <li>我是li2</li>
>     <li>我是li3</li>
>   </ul>
>   <div>
>     <h2>我是div中的标题</h2>
>     <span>我是span</span>
>     <button>按钮</button>
>     <p>段落</p>
>   </div>
>   <script>
>     var ul = document.querySelector('ul');
>     var oldLi = ul.children[0];
>     // 创建一个新的li
>     var newLi = document.createElement('li');
>     newLi.innerText = '我是新的li';
>     // 【插入】
>     // ul.insertBefore(newLi,oldLi);
>     // 替换
>     // ul.replaceChild(newLi,oldLi);
>
>     // 【获取div】
>     var div = document.querySelector('div');
>     // 【克隆】
>     // var newDiv = div.cloneNode(); // 默认是false，表示仅仅克隆外层标签
>     var newDiv = div.cloneNode(true); // 若是true，会克隆该元素的所有内容
>     document.body.appendChild(newDiv);
>   </script>
> ```







## 案例

1. 根据数据动态创建英雄(ul)列表

2. 根据数据动态生成表格

3. 表格封装(封装一个函数，传入数据生成表格)

4. 微博发布【作业】



