---
title: "组合模式"
date: 2023-05-03T21:17:06+08:00

categories: ["Design Pattern"]
series: []
tags: ["设计模式"]

cover:
    image: "016.webp"
    alt: "cover"
    relative: true
---

> Composite Pattern: Compose object into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
> 
> 组合模式：组合多个对象形成树形结构以表示具有部分－整体关系的层次结构。组合模式让客户端可以统一对待单个对象和组合对象。

组合模式又称为 “部分－整体”（Part-Whole）模式，属于对象结构型模式。它将对象组织到树形结构中，可以用来描述整体与部分的关系。组合模式通过一种巧妙的设计方案使得用户可以一致性地处理整个树形结构或者树形结构的一部分，它描述了如何将容器对象和叶子对象进行递归组合，使得用户在使用时无须对它们进行区分，可以一致地对待容器对象和叶子对象，这就是组合模式的模式动机。

## 结构

组合模式包含以下 3 个角色：

（1）**Component**（**抽象构件**）：它可以是接口或抽象类，为叶子构件和容器构件对象声明接口，在该角色中可以包含所有子类共有行为的声明和实现。在抽象构件中定义了访问及管理它的子构件的方法，如增加子构件、删除子构件、获取子构件等。

（2）**Leaf**（**叶子构件**）：它在组合结构中表示叶子结点对象，叶子结点没有子结点，它实现了在抽象构件中定义的行为。对于那些访问及管理子构件的方法．可以通过抛出异常、提示错误等方式进行处理。

（3）**Composite**（**容器构件**）：它在组合结构中表示容器结点对象，容器结点包含子结点，其子结点可以是叶子结点，也可以是容器结点，它提供一个集合用于存储子结点，实现了在抽象构件中定义的行为，包括那些访问及管理子构件的方法，在其业务方法中可以递归调用其子结点的业务方法。

## 实现

抽象构件类一般是抽象类或者接口，包含子类共有方法的声明和实现。对于客户端而言，将针对抽象构件编程，而无需关心其具体子类是叶子构件还是容器构件。

```java
// 抽象构件角色
public abstract class Component {
  public abstract void add(Component c);			// 增加成员
  public abstract void remove(Component c);		// 删除成员
  public abstract Component getChild(int i);	// 获取成员
  public abstract void operation();						// 业务方法
}


// 叶子构件角色
public class Leaf extends Component {
  public void add(Component c){
    // 抛出异常或者错误提示
  }
  public void remove(Component c){
    // 抛出异常或者错误提示
  }
  public Component getChild(int i){
    // 抛出异常或者错误提示
  }
  public void operation(){
    // 叶子构件具体业务方法实现
  }
}


// 容器构件角色
public class composit extends Component {
  List<Component> childs = new ArrayList<>();
  
  public void add(Component c){
    this.childs.add(c);
  }
  
  public void remove(Component c){
    this.childs.remove(c);
  }
  
  public Component getChild(int i){
    return this.childs.get(i);
  }
  
  public void operation(){
    // 容器构件将递归调用子节点的业务方法
    for (Component child : childs) {
      child.operation();
    }
  }
}
```

容器构件和叶子构件可以有多个，定义不同的实现。

## 透明组合模式

组合模式根据抽象构件类的定义形式义可以分为透明组合模式和安全组合模式。

透明组合模式中，抽象构件 Component 声明了所有用于管理成员对象的方法，包括`add()`、`remove()`以及`getChild()`方法，这样做的好处是确保所有的构件类都有相同的接口。在客户端看来，叶子对象与容器对象所提供的方法是一致的，客户端可以一致地对待所有的对象。

透明组合模式的缺点是不够安全，因为叶子对象和容器对象在本质上是有区别的。叶子对象不可能包含成员对象，因此为其提供`add()`、`remove()`以及`getChild()`等方法是没有意义的，这在编译阶段不会出错，但在运行阶段如果调用这些方法可能会出错（如果没有提供相应的错误处理代码） 。

## 安全组合模式

在安全组合模式中抽象构件 Component 中没有声明任何用于管理成员对象的方法，而是在 Composite 类中声明并实现这些方法。

安全组合模式的缺点是不够透明，因为叶子构件和容器构件具有不同的方法，且容器构件中那些用于管理成员对象的方法没有在抽象构件类中定义，因此客户端不能完全针对抽象编程，必须有区别地对待叶子构件和容器构件。在实际应用中，安全组合模式的使用频率也非常高。

## 优缺点和适用环境

优点：

（1）可以清楚地定义分层次的复杂对象，表示对象的全部或部分层次。它让客户端忽略了层次的差异，方便对整个层次结构进行控制。

（2）客户端可以一致地使用一个组合结构或其中单个对象，不必关心处理的是单个对象还是整个组合结构，简化了客户端代码。

（3）在组合模式中增加新的容器构件和叶子构件都很方便，无须对现有类库进行任何修改，符合开闭原则。

（4）为树形结构的面向对象实现提供了一种灵活的解决方案，通过叶子对象和容器对象的递归组合可以形成复杂的树形结构，而对树形结构的控制却非常简单。

缺点：

在增加新构件时很难对容器中的构件类型进行限制。有时候希望一个容器中只能有某些特定类型的对象，例如在某个文件夹中只能包含文本文件，在使用组合模式时不能依赖类型系统来施加这些约束，因为它们都来自于相同的抽象层，在这种情况下必须通过在运行时进行类型检查来实现，实现较为复杂。

适用环境：

（1）在具有整体和部分的层次结构中希望通过一种方式忽略整体与部分的差异，客户端可以一致地对待它们。

（2）在一个使用而向对象语言开发的系统中需要处理一个树形结构。

（3）在一个系统中能够分离出叶子对象和容器对象，而且它们的类型不固定，需要增加一些新的类型。

## 参考

《Java 设计模式》．刘伟．清华大学出版社
