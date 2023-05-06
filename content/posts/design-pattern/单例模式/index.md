---
title: "单例模式"
date: 2023-05-02T00:19:42+08:00
lastmod: 2023-05-02T00:19:42+08:00

categories: [设计模式]
series: []
tags: ["设计模式"]

searchHidden: false
hidemeta: false
draft: false
cover:
    image: "011.webp"
    alt: "cover"
    relative: true
---

Singleton Pattern: Ensure a class has only one instance, and provide a global point of access to it. 

单例模式：确保一个类只有一个实例，并提供一个全局访问点来访问这个唯一实例。

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

### 4. 双重检查（Double Check Lock，DCL）

```java
public class Singleton {
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

### 6. 枚举

```java
public enum Singleton {
  INSTANCE;

  public void doSomething() {
    // ...
  }
}
```

