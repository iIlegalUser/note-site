---
title: "原型模式"
date: 2023-05-01T00:19:00+08:00

categories: [设计模式]
series: []
tags: ["设计模式"]

searchHidden: false
hidemeta: false
draft: false
cover:
    image: "007.webp"
    alt: "cover"
    relative: true
---

Prototype Pattern: Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

原型模式：使用原型实例指定待创建对象的类型，并且通过复制这个原型来创建新的对象。

原型模式是一种创建型设计模式，它允许使用者通过复制现有对象来创建新的对象。这种模式既可以避免直接创建对象开销大，又可以提高系统性能。

## 实现

```java
import java.util.HashMap;
import java.util.Map;

// 抽象原型
interface Prototype {
    Prototype clone();
}

// 具体原型1
class ConcretePrototype1 implements Prototype {
    @Override
    public Prototype clone() {
        return new ConcretePrototype1();
    }
}

// 具体原型2
class ConcretePrototype2 implements Prototype {
    @Override
    public Prototype clone() {
        return new ConcretePrototype2();
    }
}

// 原型管理器
class ProtoManager {
    private static Map<String, Prototype> PROTOTYPES = new HashMap<>();

    static {
        PROTOTYPES.put("concretePrototype1", new ConcretePrototype1());
        PROTOTYPES.put("concretePrototype2", new ConcretePrototype2());
    }

    public static Prototype getPrototype(String type) {
        return PROTOTYPES.get(type).clone();
    }
}

public class Demo {
    public static void main(String[] args) {
        Prototype prototype1 = ProtoManager.getPrototype("concretePrototype1");
        Prototype prototype2 = ProtoManager.getPrototype("concretePrototype2");

        System.out.println(prototype1.getClass()); // class ConcretePrototype1
        System.out.println(prototype2.getClass()); // class ConcretePrototype2
    }
}
```

## 适用环境

在以下情况下可以考虑使用原型模式：

（1）创建新对象成本较大（例如初始化需要占用较长的时间、占用太多的CPU资源或网络资源），新对象可以通过复制已有对象来获得，如果是相似对象，则可以对其成员变量稍作修改。

（2）系统要保存对象的状态，而对象的状态变化很小。

（3）需要避免使用分层次的工厂类来创建分层次的对象，并且类的实例对象只有一个或很少的几个组合状态，通过复制原型对象得到新实例可能比使用构造函数创建一个新实例更加方便。

