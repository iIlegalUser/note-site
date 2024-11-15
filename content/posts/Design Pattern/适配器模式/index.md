---
title: "适配器模式"
date: 2023-05-02T12:38:43+08:00

categories: ["Design Pattern"]
series: []
tags: ["设计模式"]

math: false
draft: true

cover:
    image: "/cover/012.webp"
    alt: "cover"
    relative: true
---

> Adapter Pattern: Convert the interface of a class into another interfctce clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. 
> 
> 适配器模式：将一个类的接口转换成客户希望的另一个接口。 适配器模式让那些接口不兼容的类可以一起工作。

适配器模式别名包装器 (Wrapper) 模式。它既可以作为类结构型模式，也可以作为对象结构型模式。适配器模式定义中的接口指的是广义的接口，它可以表示一个方法或者方法的集合。

## 适配器模式结构

适配器模式主要包含三个角色：

（1）**Target**（目标抽象类）：目标抽象类定义客户所需的接口，可以是一个抽象类或接口，也可以是具体类。在类适配器中，由于 Java 语言不支持多重继承，它只能是接口。

（2）**Adapter**（适配器类）：适配器模式的核心，它可以调用另一个接口，作为一个转换器，对Adaptee 和 Target 进行适配。

（3）**Adaptee**（适配者）：适配者即被适配的角色，它定义了一个巳经存在的接口，这个接口需要适配，适配者类一般是一个具体类，包含了客户希望使用的业务方法，在某些情况下甚至没有适配者类的源代码。

适配器模式分为两种：

- 类适配器模式：通过继承来实现适配器功能。
- 对象适配器模式：通过组合来实现适配器功能。

## 类适配器模式

```java
// 目标接口
interface Target {
  void request();
}

// 适配者类
class Adaptee {
  void specificRequest() {
    // ...
  }
}

// 适配器类
class Adapter extends Adaptee implements Target {
  @Override
  public void request() {
    specificRequest();
  }
}

// 客户端
public class Client {
  public static void main(String[] args) {
    Target target = new Adapter();
    target.request();
  }
}
```

## 对象适配器模式

```java
// 目标接口
interface Target {
  void request();
}

// 适配者类
class Adaptee {
  void specificRequest() {
    // ...
  }
}

// 适配器类
class Adapter implements Target {
  private Adaptee adaptee;

  public Adapter(Adaptee adaptee) {
    this.adaptee = adaptee;
  }

  @Override
  public void request() {
    adaptee.specificRequest();
  }
}

// 客户端
public class Client {
  public static void main(String[] args) {
    Adaptee adaptee = new Adaptee();
    Target target = new Adapter(adaptee);
    target.request();
  }
}
```

## 缺省适配器模式

缺省适配器模式是适配器模式的一种变体，其应用也较为广泛。

缺省适配器模式 (Default Adapter Pattern) ：当不需要实现一个接口提供的所有方法时，可先设计一个抽象类实现该接口，并为接口中的每个方法提供一个默认实现（空方法）。那么该抽象类的子类可以选择性地覆盖父类的某些方法来实现需求。它适用于不想使用一个接口中的所有方法的情况，又称为单接口适配器模式。

缺省适配器模式通常包含三个角色：

（1）**ServiceInterface**（适配者接口）：通常包含了大量方法。

（2）**AbstacrtServiceClass**（缺省适配器）：缺省适配器模式的核心类，使用空方法实现了在 ServiceInterface 中声明的方法。通常为抽象类，因为它无需被实例化。

（3）**ConcreteServiceClass**（具体业务类）：它是缺省适配器类的子类，可以有选择性地覆盖适配器类中定义的方法。

实现：

```java
// 目标接口
interface Target {
  void method1();
  void method2();
  void method3();
}

// 缺省适配器类
abstract class DefaultAdapter implements Target {
  @Override
  public void method1() {}

  @Override
  public void method2() {}

  @Override
  public void method3() {}
}

// 具体实现类
class ConcreteAdapter extends DefaultAdapter {
  @Override
  public void method1() {
    System.out.println("ConcreteAdapter method1");
  }
}

public class Main {
  public static void main(String[] args) {
    Target target = new ConcreteAdapter();
    target.method1(); // 输出：ConcreteAdapter method1
    target.method2(); // 无输出
    target.method3(); // 无输出
  }
}
```



## 双向适配器

在对象适配器的使用过程中，如果在适配器中同时包含对目标类和适配者类的引用，适配者可以通过它调用目标类中的方法，目标类也可以通过它调用适配者类中的方法，那么该适配器就是一个双向适配器。

实现：

```java
// 目标接口
interface Target {
  void targetMethod();
}

// 适配者接口
interface Adaptee {
  void adapteeMethod();
}

// 双向适配器
class TwoWayAdapter implements Target, Adaptee {
  private Target target;
  private Adaptee adaptee;

  public TwoWayAdapter(Target target, Adaptee adaptee) {
    this.target = target;
    this.adaptee = adaptee;
  }

  @Override
  public void targetMethod() {
    adaptee.adapteeMethod();
  }

  @Override
  public void adapteeMethod() {
    target.targetMethod();
  }
}

class ConcreteTarget implements Target {
  @Override
  public void targetMethod() {
    System.out.println("ConcreteTarget targetMethod");
  }
}

class ConcreteAdaptee implements Adaptee {
  @Override
  public void adapteeMethod() {
    System.out.println("ConcreteAdaptee adapteeMethod");
  }
}

public class Main {
  public static void main(String[] args) {
    Target target = new ConcreteTarget();
    Adaptee adaptee = new ConcreteAdaptee();
    TwoWayAdapter adapter = new TwoWayAdapter(target, adaptee);

    adapter.targetMethod(); // 输出：ConcreteAdaptee adapteeMethod
    adapter.adapteeMethod(); // 输出：ConcreteTarget targetMethod
  }
}
```

## 优点和适用环境

无论是对象适配器模式还是类适配器模式都具有以下优点：

（1）将目标类和适配者类解耦，通过引入一个适配器类来重用现有的适配者类，无须修改原有结构。

（2）增加了类的透明性和复用性，将具体的业务实现过程封装在适配者类中，对于客户端类而言是透明的，而且提高了适配者的复用性，同一个适配者类可以在多个不同的系统中复用

（3）灵活性和拓展性都非常好。

对象适配器模式还有以下优点：

（1）一个对象适配器可以把多个不同的适配者适配到同一个目标

（2）可以适配一个适配者的子类，由于适配器和适配者之间是关联关系，根据里氏代换原则，适配者的子类也可通过该适配器进行适配。

适用环境：

（1）系统需要使用一些现有的类，而这些类的接口（例如方法名）不符合系统的需要、甚至没有这些类的源代码。

（2）想创建一个可以重复使用的类，用于和一些彼此之间没有太大关联的类（包括一些可能在将来引进的类）一起工作。

## 参考

《Java 设计模式》．刘伟．清华大学出版社
