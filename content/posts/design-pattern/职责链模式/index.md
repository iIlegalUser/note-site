---
title: "职责链模式"
date: 2023-05-08T16:38:38+08:00

categories: [设计模式]
series: []
tags: [设计模式]

cover:
    image: "025.webp"
    alt: "cover"
    relative: true
---

职责链可以是一条直线、一个环或者一个树形结构，最常见的职责链是直线型，即沿着一条单向的链来传递请求。链上的每一个对象都是请求处理者，职责链模式可以将请求的处理者组织成一条链，并让请求沿着链传递，由链上的处理者对请求进行相应的处理，客户端无须关心请求的处理细节以及请求的传递，只需将请求发送到链上即可，将请求的发送者和请求的处理者解耦。这就是职责链模式的模式动机。

Chain of Responsibility Pattern: Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

职责链模式：避免将一个请求的发送者与接收者耦合在一起，让多个对象都有机会处理请求。将接收请求的对象连接成一条链，并且沿着这条链传递请求，直到有一个对象能够处理它为止。

职责链模式又称为责任链模式，它是一种对象行为型模式。

## 结构

职责链模式包含以下两个角色：

（1）**Handler**（**抽象处理者**）：它定义了一个处理的接口，一般设计为抽象类，由于不同的具体处理者处理请求的方式不同，因此在其中定义了抽象请求处理方法。每一个处理者的下家还是一个处理者，故在抽象处理者中定义了一个抽象处理者类型的对象作为其对下家的引用，通过该引用处理者可以连成一条链。

（2）**ConcreteHandler**（**具体处理者**）：它是抽象处理者的子类，可以处理用户请求，在具体处理者类中实现了抽象处理者中定义的抽象请求处理方法，在处理请求之前需要进行判断，看是否有相应的处理权限，如果可以处理请求就处理它，否则将请求转发给后继者；在具体处理者中可以访问链中的下一个对象，以便请求的转发。

## 实现

抽象处理者：

```java
public abstract class Handler {
  // 维持对下家的引用
  public Handler successor;
  
  public void setSuccessor(Handler successor) {
    this.successor = successor;
  }

  public abstract void handleRequest(Object request);
}
```

具体处理者：

```java
public class ConcreteHandler extends Handler {
  public void handleRequest(Object request) {
    if (请求满足条件) {
      // 处理请求
    } else {
      // 转发请求
      this.successor.handleRequest();
    }
  }
}
```

客户端：

```java
Handler handler1 = new ConcreteHandlerA();
Handler handler2 = new ConcreteHandlerB();
Handler handler3 = new ConcreteHandlerC();
// 创建职责链
handlerl.setSuccessor(handler2);
handler2.setSuccessor(handler3);
// 发送请求，请求对象通常为自定义类型
handlerl.handleRequest("请求对象");
```

## 纯的职责链模式

一个纯的职责链模式要求一个具体处理者对象只能在两个行为中选择一个，要么承担全部责任，要么将责任推给下家。不允许出现某一个具体处理者对象在承担了一部分或全部责任后又将责任向下传递的情况。而且在纯的职责链模式中要求一个请求必须被某一个处理者对象所接收，不能出现某个请求未被任何一个处理者对象处理的情况。

## 不纯的职责链模式

在一个不纯的职责链模式中允许某个请求被一个具体处理者部分处理后再向下传递，或者一个具体处理者处理完某请求后其后继处理者可以继续处理该请求，而且一个请求可以最终不被任何处理者对象所接收并处理。

## 优缺点与适用环境

优点：

（1）职责链模式使得一个对象无须知道是其他哪一个对象处理其请求，对象仅需知道该请求会被处理即可，接收者和发送者都没有对方的明确信息，并且链中的对象不需要知道链的结构，由客户端负责链的创建，降低了系统的耦合度。

（2）请求处理对象仅需维持一个指向其后继者的引用，而不需要维持它对所有的候选处理者的引用，可简化对象之间的相互连接。

（3）在系统中增加一个新的具体请求处理者时无须修改原有系统的代码，符合开闭原则。

缺点：

对于比较长的职责链，请求的处理可能涉及多个处理对象，系统性能将受到一定的影响

适用环境：

（1）有多个对象可以处理同一个请求，具体哪个对象处理该请求待运行时刻再确定

（2）在不明确指定接收者的情况下向多个对象中的一个提交一个请求。

（3）可动态指定一组对象处理请求，客户端可以动态创建职责链来处理请求，还可以改变链中处理者之间的先后次序。

## 参考

