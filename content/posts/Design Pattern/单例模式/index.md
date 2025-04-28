---
title: "单例模式"
date: 2023-05-02T00:19:42+08:00
lastmod: 2023-05-02T00:19:42+08:00

categories: ["Design Pattern"]
series: []
tags: ["设计模式"]

searchHidden: false
hidemeta: false
draft: false
cover:
    image: "/cover/011.webp"
    alt: "cover"
    relative: true
---

> Singleton Pattern: Ensure a class has only one instance, and provide a global point of access to it. 
> 
> 单例模式：确保一个类只有一个实例，并提供一个全局访问点来访问这个唯一实例。

## 优缺点和使用场景

单例模式的优点主要如下：

（1）单例模式提供了对唯一实例的受控访问。 因为单例类封装了它的唯一实例，所以它可以严格控制客户怎样以及何时访问它。

（2）由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象，单例模式无疑可以提高系统的性能。

（3）允许可变数目的实例。基于单例模式可以进行扩展，使用与控制单例对象相似的 方法来获得指定个数的实例对象．既节省系统资源．义解决了由于单例对象共享过多有损性能的问题。（注：自行提供指定数目实例对象的类可称为多例类）

单例模式的缺点主要如下：

（1）由千单例模式中没有抽象层．因此单例类的扩展有很大的困难。

（2）单例类的职责过重，在一定程度上违背了单一职责原则。 因为单例类既提供了业务方法．又提供了创建对象的方法（工厂方法），将对象的创建和对象本身的功能耦合在一起。

在以下情况下可以考虑使用单例模式：

（1）系统中需要一个唯一的全局对象，如配置管理类、数据库连接池等。

（2）系统只需要一个实例对象或者因为资源消耗太大而只允许创建一个对象。

## 实现方法

### 1. 饿汉式（静态常量）

```java
public class Singleton {
  private static final Singleton instance = new Singleton();

  private Singleton() {}

  public static Singleton getInstance() {
    return instance;
  }
}
```

优点：在类加载时初始化，通过类加载机制实现线程安全。

缺点：触发类加载的原因有多种，可能无法在调用 `getInstance()` 方法时才进行类加载，进而无法实现懒加载。如果实例长时间不使用，可能造成资源浪费。

### 2. 懒汉式（线程不安全）

```java
public class Singleton {
  private static Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}
```

### 3. 懒汉式（线程安全，同步方法）

```java
public class Singleton {
  private static Singleton instance;

  private Singleton() {}

  public static synchronized Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}
```

优点：第一次调用才进行初始化，避免内存浪费

缺点：需要加锁才能保证单例，但加锁会影响效率

### 4. 双重检查（Double Check Lock，DCL）

```java
public class Singleton {
  // 注意要用volatile修饰阻止指令重排序
  private static volatile Singleton instance;

  private Singleton() {}

  public static Singleton getInstance() {
    if (instance == null) {
      synchronized (Singleton.class) {
        if (instance == null) {
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}
```

优点：相比懒汉式只会在实例不存在时加锁，提高了效率。

缺点：第一次加载稍慢，也由于 Java 内存模型的原因偶尔会失败。在高并发环境也有一定的缺陷，虽然发生的概率很小。

### 5. IoDH（静态内部类）

```java
public class Singleton {
  private Singleton() {}

  private static class SingletonHolder {
    private static final Singleton INSTANCE = new Singleton();
  }

  public static Singleton getInstance() {
    return SingletonHolder.INSTANCE;
  }
}
```

优点：在调用 `getInstance()` 方法时才进行加载，达到了懒汉式的效果，并且是线程安全的。

缺点：写法复杂

### 6. 枚举

```java
public enum Singleton {
  INSTANCE;

  public void doSomething() {
    // ...
  }
}
```

优点：实现简单，枚举本身就是单例模式，并且是线程安全的。由 JVM 从根本上提供保障，避免通过反射和序列化的方式破环单例。

缺点：无延迟加载，不适合创建大量单例对象的场景。

## 参考

[1] GPT-4
