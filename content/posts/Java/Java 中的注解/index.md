---
title: "Java 中的注解"
date: "2024-11-08T20:14:46+08:00"

categories: [Java]
tags: [注解]

math: false
mermaid: false
draft: false

---

## 一、元数据 metadata

元数据是指用来描述数据的数据，更通俗一点，就是描述代码间关系，或者代码与其他资源（例如数据库表）之间内在联系的数据。

基于元数据的广泛应用，JDK5.0 引入了 `Annotation` 的概念来描述元数据。在 Java 中，元数据以标签的形式存在于 Java 代码中，元数据标签的存在并不影响程序代码的编译和执行。

Java 语言中有四种类型（`TYPE`），即类（`class`）、枚举（`enum`）、接口（`interface`）和注解（`@interface`），它们是处在同一级别的。Java 就是通过注解来表示元数据的。

## 二、注解

注解相当于是一种嵌入在程序中的元数据，可以使用注解解析工具或编译器对其进行解析，也可以指定注解在编译期或运行期有效。

如果说注释是写给人看的，那么注解就是写给程序看的。它更像一个标签，贴在一个类、一个方法或者字段上。它的目的是**为当前读取该注解的程序提供判断依据及少量附加信息**。比如程序只要读到加了 `@Test` 的方法，就知道该方法是待测试方法，又比如 `@Before` 注解，程序看到这个注解，就知道该方法要放在 `@Test` 方法之前执行。有时我们还可以通过注解属性，为将来读取这个注解的程序提供必要的附加信息，比如 `@RequestMapping("/user/info")` 提供了 `Controller` 某个接口的 URL 路径。

注解三要素：**定义、使用、读取并执行** 

**Annotation** 就是 Java 提供的一种元程序中的元素关联任何信息和任何元数据的途径。`Annotation` 是一个接口，程序可以通过反射来获取指定程序元素的 `Annotation` 对象，然后通过 `Annotation` 对象来获取注解里面的元数据。

`java.lang.annotation.Annotation` 本身是接口，而不是注解，当使用关键字 `@interface` 定义一个注解时，该注解隐式地继承了 `java.lang.annotation.Annotation` 接口；如果我们定义一个接口，并且让该接口继承自 `Annotation`，那么我们定义的接口依然是接口而不是注解。综上，定义注解只能依靠 `@interface` 实现。

### 注解分类

按照注解使用方法和用途分为 JDK 内置注解、第三方注解和自定义注解

按照注解参数个数分为

- 标记注解：没有成员变量的 `Annotation` 类型称为标记注解
- 单值注解：只有一个值
- 完整注解：拥有多个值

### JDK 内置注解

- `@Override`：检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。
- `@Deprecated`： 标记过时方法。如果使用该方法，会报编译警告。
- `@SuppressWarnings`：该注解的作用是阻止编译器发出某些警告信息。它可以有以下参数：

```java
@SuppressWarnings("deprecation")	// 过时的类或方法警告
@SuppressWarnings("unchecked")	// 执行了未检查的转换时警告
@SuppressWarnings("fallthrough")	// 当 Switch 程序块直接通往下一种情况而没有 Break 时的警告
@SuppressWarnings("path")	// 在类路径、源文件路径等中有不存在的路径时的警告
@SuppressWarnings("serial")	// 当在可序列化的类上缺少 serialVersionUID 定义时的警告
@SuppressWarnings("finally")	// 任何 finally 子句不能完成时的警告
@SuppressWarnings("all")	// 关于以上所有情况的警告
```

- `@Inherited`：标记这个注解是继承于哪个注解类（默认注解并没有继承于任何子类）
- `@SafeVarargs`： 忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。
- `@FunctionalInterface`：标识一个匿名函数或函数式接口。
- `@Repeatable`：标识某注解可以在同一个声明上使用多次。

### 元注解

**所谓元注解，就是加在注解上的注解。** 

- `@Documented`：标记这些注解是否包含在用户文档中。

- `@Target`：它是被定义在一个注解类的前面，用来说明该注解可以被声明在哪些元素前。(**默认可以放在任何元素之前**)。它有以下参数：

```java
ElementType.TYPE	// 说明该注解只能被声明在一个类、接口、枚举前。
ElementType.FIELD	// 说明该注解只能被声明在一个类的字段前。
ElementType.METHOD	// 说明该注解只能被声明在一个类的方法前。
ElementType.PARAMETER	// 说明该注解只能被声明在一个方法参数前。
ElementType.CONSTRUCTOR	// 说明该注解只能声明在一个类的构造方法前。
ElementType.LOCAL_VARIABLE	// 说明该注解只能声明在一个局部变量前。　　
ElementType.ANNOTATION_TYPE	// 说明该注解只能声明在一个注解类型前。
ElementType.PACKAGE	// 说明该注解只能声明在一个包名前。
```

```java
// 例如：此注解只能用在方法上
@Target(ElementType.METHOD) 
@interface TestMethod {}
```

- `@Retention`（注解的保留策略）

**表示需要在什么级别保存该注释信息，用于描述注解的生命周期**，即被描述的注解在什么范围内有效，表示注解类型保留时间的长短。

```java
public @interface Retention {
    RetentionPolicy value();
}
```

有三个备选值：SOURCE、ClASS、RUNTIME，保留时长递增

- `SOURCE`：指定注解只保留在源文件当中。
- `CLASS`：指定注解只保留在 class 文件中。（**缺省**）
- `RUNTIME`：指定注解可以保留在程序运行期间。

```java
// 此注解可以用于注解类、接口(包括注解类型) 或 enum 声明
@Target(ElementType.TYPE) 
// 该注解运行时有效。注解处理器可以通过反射获取到该注解的属性值，从而去做一些运行时的逻辑处理
@Retention(RetentionPolicy.RUNTIME)
@interface TestRn {}
```

- `@Inherited` 

表明该注解将会被子类继承。**加上该元注解的注解，只有用在类元素上才有效果**。

```java
// 被子类继承的注解
@Inherited
@interface TestInheri{}
```

### 自定义注解

`@interface` 用来声明一个注解，其中的每一个方法实际上是声明了一个配置参数。方法的名称就是参数的名称，返回值类型就是参数的类型（返回值类型只能是**基本类型、Class、String、enum 以及它们的数组**）。可以通过 `default` 来声明参数的默认值。

如果只有一个属性/方法且叫 `value`，那么使用该注解时可以不指定属性名，因为默认给 `value` 赋值，注解的属性如果有多个，无论是否叫 `value`，都必须写明属性的对应关系。

注解里面的每一个方法实际上就是声明了一个配置参数，其规则如下：

- 只能用 `public` 或 `default` 这两个访问权修饰 ，默认为 `default`
- 注解参数只支持以下数据类型：基本数据类型、`String` 类型、`Class` 类型、`Enum` 类型、`Annotation` 类型、以上类型的一维数组

- 注解中的方法不能存在参数，可以包含默认值，使用 `default` 来声明默认值。
- 如果数组的元素只有一个，可以省略花括号 {}：
- 如果希望为注解的属性提供统一的几个可选值，可以使用常量类（另外定义静态类或者在注解内部定义静态类）

### 在程序中获取注解

```java
// 返回指定注解，参数为注解类文件
<A extends Annotation> A getAnnotation(Class<A> annotationClass);
  
// 按从上到下的顺序返回所有注解
Annotation[] getAnnotations();
```
