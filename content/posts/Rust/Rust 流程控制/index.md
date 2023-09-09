---
title: "Rust 流程控制"
date: 2023-06-05T15:55:52+08:00

categories: [Rust]
series: []
tags: []
draft: true

cover:
    image: "031.webp"
    alt: "cover"
    relative: true
---

## if

```rust
fn main() {
  let condition = true;
  let number = if condition {
    5
  } else {
    6
  };

  println!("The value of number is: {}", number);
}
```

以上代码有以下几点要注意：

- **`if` 语句块是表达式**，这里我们使用 `if` 表达式的返回值来给 `number` 进行赋值：`number` 的值是 `5`
- 用 `if` 来赋值时，要保证每个分支返回的类型一样(事实上，这种说法不完全准确，见[这里](https://course.rs/appendix/expressions.html#if表达式))，此处返回的 `5` 和 `6` 就是同一个类型，如果返回类型不一致就会报错

## for 循环

以下代码会循环输出一个从 1 到 5 的序列

```rust
fn main() {
    for i in 1..=5 {
        println!("{}", i);
    }
}
```

使用`for`循环时往往使用集合的引用形式，否则所有权会 move 到`for`语句块中，后续就无法再使用了。

| 使用方法                      | 等价使用方式                                      | 所有权     |
| ----------------------------- | ------------------------------------------------- | ---------- |
| `for item in collection`      | `for item in IntoIterator::into_iter(collection)` | 转移所有权 |
| `for item in &collection`     | `for item in collection.iter()`                   | 不可变借用 |
| `for item in &mut collection` | `for item in collection.iter_mut()`               | 可变借用   |

在循环中获取索引：

```rust
fn main() {
  let arr = [1,2,3,4,5];
  // .iter() 方法把 arr 数组变成一个迭代器
  for (i, v) in arr.iter().enumerate() {
    println!("{}: {}", i, v);
  }
}
```

控制循环执行 10 次：

```rust
fn main() {
  for _ in 0..10 {
    // do something
  }
}
```

## loop 循环

`loop`循环是简单的无限循环，可以在内部通过 break 控制循环结束。

```rust
fn main() {
  loop {
    // do something
  }
}
```

**loop 是一个表达式**，因此可以返回一个值

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };

    println!("{}", result);	// 20
}
```

## while 循环

rust 的 while 循环和 Java 类似。

## 循环标签

当有多层循环时，你可以使用 `continue` 或 `break` 来控制外层的循环。要实现这一点，外部的循环必须拥有一个标签 `'label`, 然后在 `break` 或 `continue` 时指定该标签。

```rust
fn main() {
  let mut count = 0;
  'outer: loop {
    'inner1: loop {
      if count >= 20 {
        // 这只会跳出 inner1 循环
        break 'inner1; // 这里使用 `break` 也是一样的
      }
      count += 2;
    }
    count += 5;
    if count >= 30 {
      break 'outer;
    }
  }

  assert!(count == 30)
}
```

