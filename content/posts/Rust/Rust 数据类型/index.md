---
title: "Rust 数据类型"
date: 2023-06-03 12:10:45

categories: [Rust]
series: []
tags: []
draft: false

cover:
    image: "030.webp"
    alt: "cover"
    relative: true
---

## 切片

切片允许你引用集合中部分连续的元素序列，而不是引用整个集合。切片的长度无法在编译期得知，所以不能直接使用切片类型。**切片只能使用引用类型**。切片引用（如无说明，以下均用切片指代切片引用）占用两个字的内存空间，第一个字是指向数据的指针，第二个字是切片的长度。在`x86-64`架构的机器上，一个字是 64 位即 8 字节，所以切片就是 16 字节。

```rust
fn main() {
  // [i32; 5]中i32表示数组元素类型，5表示数组长度
  let arr: [i32; 5] = [1,2,3,4,5];
  // 切片类型只能是引用
  let slice: &[i32] = &arr[1..4];
  assert_eq!(slice, &[2,3,4]);
}
```

## 字符串和字符

1. 常用的两个类型：`&str`和`String`

```rust
fn main() {
  let s1: str = "hello ";
  let s1: String = String::from("world");
}
```

2. 只能将`String`和`&str`类型进行拼接，并且`String`类型的所有权在此过程中会被 move
3. `&String`可以被隐式地转换为 `&str`类型

```rust
fn main() {
  let s1 = String::from("hello,");
  let s1 = String::from("world");
  // s1 的所有权已经转移了
  let s3 = s1 + &s2;
  // 此时已经访问不到 s1 了
  // println!("{}", s1);
}

// + 调用的实际上是 std::string 中的 add 方法，其定义为：
fn add(self, s: &str) -> String
```

4. `&str`与`String`的转换

```rust
fn main() {
  let s1: String = "hello".to_string();
  let s2: String = String::from("hello");
  let s3: &str = &s2;
}
```

5. **Rust 中的字符是 Unicode 类型，因此每个字符占据 4 个字节内存空间，但是在字符串中不一样，字符串是 UTF-8 编码，也就是字符串中的字符所占的字节数是变化的(1 - 4)** 

## 元组

1. 过长的元组无法被打印输出

```rust
// 最多打印长度为 12 的元组
fn main() {
  let too_long_tuple = (1,2,3,4,5,6,7,8,9,10,11,12,13);
  println!("{}", too_long_tuple);	// error
}
```

2. 元组使用

```rust
fn main() {
  let s1 = String::from("hello");
  let (len, s2) = calc_len(s1);
  println!("len of \"{}\" is {}", s2, len);	// len of "hello" is 5
}

// 返回元组
fn calc_len(s: String) -> (usize, String) {
  // 不能写成(s, s.len())，因为s.len()调用前s的所有权已经转移
  (s.len(), s)
}
```

## 结构体

预定义`User`结构体：

```rust
struct User {
  active: bool,
  username: String,
  email: String,
  sign_in_count: u64,
}
```

1. 初始化实例时，**每个字段**都需要进行初始化，但是字段初始化顺序可以和定义顺序不一致

2. 必须要将结构体实例声明为可变的，才能修改其中的字段。Rust 不支持将结构体的某个字段标记为可变。

3. 简化结构体创建。当函数参数与结构体字段同名时可以使用简化方式。

```rust
fn build_user(username: String, email: String) -> User {
  User {
    username,
    email,
    active: true,
    sign_in_count: 1
  }
}
```

4. 简化结构体更新。`..`语法表明凡是没有显式声明的字段都从`user1`中获取，注意`..user1`**必须写在结构体的尾部**。`user1`会发生所有权转移，不能继续被使用，但是其内部没有发生赋值的字段或者包含 `Copy trait`的字段仍然可以使用。

```rust
let user1 = User {
  email: String::from("one@mail.com"),
  username: String::from("nobody"),
  active: true,
  sign_in_count: 1,
};
let _user2 = User {
  email: String::from("another@mail.com"),
  ..user1
};
println!("{} {}", user1.active, user1.email);
// 不能访问
// println!("{} {}", user1, user1.username)
```

5. 元组结构体：结构体字段没有名字。

```rust
fn main() {
  struct Color(i32, i32, i32);
  let black = Color(0,0,0);
  let Color(r, g, b) = black;	// 模式匹配
  println!("({}, {}, {})", r, g, b);
}
```

6. 单元结构体：没有字段和属性。如果你定义一个类型，但是不关心该类型的内容, 只关心它的行为时，就可以使用**单元结构体**：

```rust
struct Unit;
let subject = Unit;
// 我们不关心 Unit 的字段数据，只关心它的行为，因此将它声明为单元结构体，然后再为它实现某个特征
impl SomeTrait for Unit {
  
}
```

7. 使用`#[derive(Debug)]`打印结构体

默认情况下结构体没有实现`Display`特征，如果要用`{}`的方式打印结构体，就需要自己实现`Display`特征。使用`#derive(Debug)`可以为结构体实现`Debug`特征，然后就可以使用`{:?}`打印结构体。

```rust
fn main() {
  #[derive(Debug)]
  struct Color{ 
    r: i32,
    g: i32,
    b: i32
  }
  let black = Color{
    r: 0,
    g: 0,
    b: 0
  };
  println!("{:?}", black);
  println!("{:#?}", black);
}
```

输出结果：

```text
Color { r: 0, g: 0, b: 0 }
Color {
    r: 0,
    g: 0,
    b: 0,
}
```

8. `dbg!`宏

 [`dbg!` 宏](https://doc.rust-lang.org/std/macro.dbg.html)会拿走表达式的所有权，然后打印出相应的文件名、行号等 debug 信息，当然还有我们需要的表达式的求值结果。**除此之外，它最终还会把表达式值的所有权返回！**`dbg!` 输出到标准错误 `stderr`，而 `println!` 输出到标准输出 `stdout`。

```rust
#[derive(Debug)]
struct Rectangle {
  width: u32,
  height: u32,
}

fn main() {
  let scale = 2;
  let rect1 = Rectangle {
    width: dbg!(30 * scale),
    height: 50,
  };

  dbg!(&rect1);
}
```

输出结果：

```text
[src\main.rs:10] 30 * scale = 60
[src\main.rs:14] &rect1 = Rectangle {
    width: 60,
    height: 50,
}
```

## 枚举

1. 枚举类型是一个类型，它会包含所有可能的枚举成员, 而枚举值是该类型中的具体某个成员的实例。**任何类型的数据都可以放入枚举成员中**。

```rust
#[derive(Debug)]
enum Message {
  Quit,
  Move { x: i32, y: i32 },
  Write(String),
  ChangeColor(i32, i32, i32),
}
fn show_message(msg: Message) {
  println!("{:?}", msg);
}
fn main() {
  let msg1 = Message::Move { x: 1, y: 2 };
  let msg2 = Message::ChangeColor(0, 0, 1);
  println!("{:?}", msg1); // Move { x: 1, y: 2 }
  println!("{:?}", msg2); // ChangeColor(0, 0, 1)
}
```

2. 创建枚举时可以用显式的整数指定枚举值，不指定也可以强转为整数

```rust
enum Number {
  Zero = 0,
  One,
  Two
}

fn main() {
  println!("{:?} {:?}", Number::Zero as i32, Number::One as u8)    // 0 1
}
```

3. `Option<T>`枚举处理值为空的情况

`Option<T>`定义如下：

```rust
enum Option<T> {
  Some(T),
  None,
}
```

```rust
fn main() {
  let five = Some(5);
  let six = plus_one(five);

  if let Some(n) = six {
    println!("{}", n);
  } 
} 

fn plus_one(x: Option<i32>) -> Option<i32> {
  match x {
    None => None,
    Some(i) => Some(i + 1),
  }
}
```

## 数组

1. 创建数组

```rust
fn main() {
  let arr = [1,2,3];	// 自动推导数组类型
  let repeat_arr: [i32; 5] = [3;5];	// 创建包含重复元素的数组
  println!("{:?}", arr);  // [3, 3, 3, 3, 3]
}
```

2. 数组元素为非基本类型

```rust
// err,因为 String 没有实现 copy trait
let array = [String::from("rust is good!"); 8];
// 正确写法
let array: [String; 8] = std::array::from_fn(|i| String::from("hello"));
```
