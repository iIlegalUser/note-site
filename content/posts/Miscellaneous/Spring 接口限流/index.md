---
title: "Spring 接口限流"
date: 2023-04-28T21:10:56+08:00

categories: []
series: []
tags: ["Spring", "限流"]

cover:
    image: "/cover/049.webp"
    alt: "cover"
    relative: true
---

Spring 接口限流是指在高并发场景下，对接口进行限制访问次数的一种技术手段。通过限制接口的访问速度和频率，可以保护系统不受到突发流量的冲击，防止系统崩溃或者性能下降。

常见的限流算法有：固定时间窗口算法、滑动时间窗口算法、令牌桶算法、漏桶算法等等。这些限流算法都有一个共同点，即通过一定的规则来控制接口被访问的速度和频率，以达到保护系统稳定运行的目的。

## 原生实现

### 固定时间窗口算法

固定窗口算法是最基础的限流算法之一，它将时间分成若干个固定的时间窗口，在每个时间窗口内限制请求的数量。这种算法实现简单，但容易出现流量突发的情况。下面是一个示例：

```java
public class FixedTimeWindowLimiter {

  private final int limit; // 时间窗口内允许通过的请求数
  private final long windowSize; // 时间窗口大小，单位为毫秒
  private final LinkedList<Long> timestamps = new LinkedList<>(); // 请求时间戳队列

  public FixedTimeWindowLimiter(int limit, long windowSize) {
    this.limit = limit;
    this.windowSize = windowSize;
  }

  /**
       * 判断当前请求是否允许通过
       */
  public synchronized boolean tryAcquire() {
    long currentTimestamp = System.currentTimeMillis();
    if (timestamps.size() >= limit) { // 如果请求数已达到限制数量
      long oldestTimestamp = timestamps.getFirst();
      if (currentTimestamp - oldestTimestamp < windowSize) { // 如果最早的请求还在时间窗口内
        return false; // 拒绝本次请求
      }
      timestamps.removeFirst(); // 移除最早的请求时间戳
    }
    timestamps.addLast(currentTimestamp); // 添加当前请求时间戳
    return true; // 允许本次请求通过
  }
}
```

在上面的代码中，我们定义了一个 FixedTimeWindowLimiter 类，用于实现固定时间窗口限流的功能。在该类中，我们定义了 limit 和 windowSize 两个属性，分别表示时间窗口内允许通过的请求数和时间窗口大小。通过 timestamps 队列来保存请求的时间戳，当请求次数超过阈值时，判断最早的请求是否在时间窗口内，如果是则拒绝本次请求，否则移除最早的请求时间戳，并添加当前请求时间戳。

接下来，在需要进行限流的接口方法中调用 FixedTimeWindowLimiter 的 tryAcquire 方法即可实现固定时间窗口限流的功能，例如：

```java
private static final FixedTimeWindowLimiter LIMITER = new FixedTimeWindowLimiter(10, 1000);

@GetMapping("/hello")
public String hello() {
  if (LIMITER.tryAcquire()) {
    return "Hello World!";
  } else {
    return "Too many requests";
  }
}
```

### 滑动时间窗口算法

滑动时间窗口限流是一种更加细粒度的限流算法，其原理是将单位时间划分为若干个时间窗口，并在每个时间窗口内都设置一定的请求次数阈值。下面是一个示例：

```java
public class SlidingTimeWindowLimiter {
  private final int limit; // 每个时间窗口内允许通过的请求数
  private final long windowSize; // 时间窗口大小，单位为毫秒
  private final LinkedList<Long> timestamps = new LinkedList<>(); // 请求时间戳队列

  public SlidingTimeWindowLimiter(int limit, long windowSize) {
    this.limit = limit;
    this.windowSize = windowSize;
  }

  /**
     * 判断当前请求是否允许通过
     */
  public synchronized boolean tryAcquire() {
    long currentTimestamp = System.currentTimeMillis();
    timestamps.addLast(currentTimestamp); // 添加当前请求时间戳
    removeObsoleteTimestamps(currentTimestamp); // 移除过期的请求时间戳
    return timestamps.size() <= limit; // 判断请求数是否超过限制数量
  }

  /**
     * 移除过期的请求时间戳
     */
  private void removeObsoleteTimestamps(long currentTimestamp) {
    long earliestTimestamp = currentTimestamp - windowSize;
    while (!timestamps.isEmpty() && timestamps.getFirst() < earliestTimestamp) {
      timestamps.removeFirst();
    }
  }
}
```

在上面的代码中，我们定义了一个 SlidingTimeWindowLimiter 类，用于实现滑动时间窗口限流的功能。在该类中，我们定义了 limit 和 windowSize 两个属性，分别表示每个时间窗口内允许通过的请求数和时间窗口大小。通过 timestamps 队列来保存请求的时间戳，在每个时间窗口内移除过期的请求时间戳，并判断请求数是否超过限制数量。

接下来，在需要进行限流的接口方法中调用 SlidingTimeWindowLimiter 的 tryAcquire 方法即可实现滑动时间窗口限流的功能，例如：

```java
private static final SlidingTimeWindowLimiter LIMITER = new SlidingTimeWindowLimiter(10, 1000);

@GetMapping("/hello")
public String hello() {
  if (LIMITER.tryAcquire()) {
    return "Hello World!";
  } else {
    return "Too many requests";
  }
}
```

### 令牌桶算法

令牌桶算法是一种比较常见的限流算法，它维护了一个固定容量的令牌桶来限制请求的速率。在令牌桶中，每个请求需要消耗一个或多个令牌才能被放行，请求速率超过令牌桶容量时，请求就会被阻塞。下面是一个示例：

```java
public class TokenBucketLimiter {

  private final int capacity; // 令牌桶最大容量
  private final double rate; // 每秒钟产生的令牌数
  private double tokens; // 当前令牌数
  private long lastRefillTime; // 上次添加令牌的时间

  public TokenBucketLimiter(int capacity, double rate) {
    this.capacity = capacity;
    this.rate = rate;
    this.tokens = capacity; // 初始化令牌桶为满状态
    this.lastRefillTime = System.currentTimeMillis(); // 初始化上次添加令牌的时间为当前时间
  }

  /**
     * 判断当前请求是否允许通过
     */
  public synchronized boolean tryAcquire() {
    refill(); // 先尝试添加令牌
    if (tokens >= 1) { // 如果有令牌，则减少令牌数
      tokens -= 1;
      return true; // 允许本次请求通过
    } else {
      return false; // 拒绝本次请求
    }
  }

  /**
     * 添加令牌
     */
  private void refill() {
    long now = System.currentTimeMillis();
    double elapsedTime = (now - lastRefillTime) / 1000.0; // 计算距离上次添加令牌的时间
    tokens = Math.min(capacity, tokens + elapsedTime * rate); // 添加令牌，不能超过最大容量
    lastRefillTime = now; // 更新上次添加令牌的时间
  }
}
```

在上面的代码中，我们定义了一个 TokenBucketLimiter 类，用于实现令牌桶限流的功能。在该类中，我们定义了 capacity 和 rate 两个属性，分别表示令牌桶的最大容量和每秒钟产生的令牌数。通过 tokens 记录当前令牌数以及 lastRefillTime 记录上次添加令牌的时间，在每次调用 tryAcquire 方法时先尝试添加令牌，再判断是否有足够的令牌处理本次请求。

接下来，在需要进行限流的接口方法中调用 TokenBucketLimiter 的 tryAcquire 方法即可实现令牌桶限流的功能。

### 漏桶算法

漏桶算法是另一种限流算法，它通过维护一个固定容量的漏桶来限制请求的速率。在漏桶中，请求会被放入漏桶中并以固定的速率流出，当漏桶已满时，新的请求会被丢弃或排队等待。漏桶算法相比令牌桶算法更适合于限制恶意攻击行为。

```java
import java.util.concurrent.atomic.AtomicInteger;

public class LeakyBucket {
  private int capacity; // 桶的容量
  private int rate; // 流出速率（每秒钟流出多少个请求）
  private AtomicInteger water = new AtomicInteger(0); // 当前桶中的水量
  private long lastLeakTime = System.currentTimeMillis(); // 上次流出时间

  public LeakyBucket(int capacity, int rate) {
    this.capacity = capacity;
    this.rate = rate;
  }

  // 尝试流出一个请求，返回是否成功
  public synchronized boolean tryRelease() {
    long now = System.currentTimeMillis();
    int gap = (int) ((now - lastLeakTime) / 1000) * rate;
    int available = Math.max(0, water.get() - gap);
    if (available < capacity) {
      water.incrementAndGet();
      lastLeakTime = now;
      return true;
    } else {
      return false;
    }
  }
}
```

在上面的代码中，`LeakyBucket` 类表示漏桶。它有两个属性 `capacity` 和 `rate`，分别表示桶的容量和流出速率。另外还有一个原子整数 `water` 表示当前桶中的水量，以及一个长整型变量 `lastLeakTime` 用于记录上次流出时间。

在 `tryRelease` 方法中，我们首先计算出从上次流出到现在一共可以流出多少个请求，即 `gap` 值。然后通过 `water` 原子整数获取当前桶中的水量 `available`。如果 `available` 小于容量，则表示可以流出一个请求，因此我们将 `water` 的值加 1，并更新 `lastLeakTime`。如果 `available` 大于等于容量，则不能流出请求，返回 false。

使用漏桶算法限流时，我们需要创建一个 `LeakyBucket` 对象并在每个请求到达时调用其 `tryRelease` 方法来判断是否限流。如果返回 false，则表示请求被限制。

## 框架实现

在 spring 中，实现接口限流的方法有以下几种：

1. 基于 AOP 实现

2. 使用 Redis 实现

3. 借助第三方组件如 Hystrix、guava、Resilience4j 等

### AOP 实现

首先，定义一个注解 `@RateLimit`，用于标记需要进行限流的方法：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RateLimit {
  int value() default 10; // 默认每秒钟最多处理 10 个请求
}
```

接着，我们可以定义一个切面类 `RateLimitInterceptor`，使用令牌桶算法实现限流逻辑：

```java
@Component
@Aspect
public class RateLimitInterceptor {
  private Map<String, LeakyBucket> buckets = new ConcurrentHashMap<>();

  @Around("@annotation(rateLimit)")
  public Object limit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) throws Throwable {
    String key = joinPoint.getSignature().toLongString();
    LeakyBucket bucket = buckets.computeIfAbsent(key, k -> new LeakyBucket(rateLimit.value(), rateLimit.value()));
    if (bucket.tryRelease()) {
      return joinPoint.proceed();
    } else {
      throw new RuntimeException("Too many requests");
    }
  }

  private static class LeakyBucket {
    private final int capacity;
    private final int rate;
    private volatile int water = 0;
    private volatile long lastLeakTime = System.nanoTime();

    public LeakyBucket(int capacity, int rate) {
      this.capacity = capacity;
      this.rate = rate;
    }

    public boolean tryRelease() {
      long now = System.nanoTime();
      int gap = (int) TimeUnit.MILLISECONDS.toSeconds(now - lastLeakTime) * rate;
      int available = Math.max(0, water - gap);
      if (available < capacity) {
        water++;
        lastLeakTime = now;
        return true;
      } else {
        return false;
      }
    }
  }
}
```

在上面的代码中，我们定义了一个 `RateLimitInterceptor` 类，并使用 `@Aspect` 注解标记它为一个切面。在 `limit` 方法中，我们首先从当前方法的签名获取唯一键值，然后使用 ConcurrentHashMap 缓存每个方法对应的漏桶。如果漏桶允许请求通过，则调用原始方法并返回结果；否则直接抛出异常。

最后，我们需要在 Spring Boot 应用程序类上添加 `@EnableAspectJAutoProxy` 注解启用切面自动代理。

现在，只要在需要限流的方法上添加 `@RateLimit` 注解即可实现接口限流。例如：

```java
@RestController
public class MyController {
  @GetMapping("/hello")
  @RateLimit(value = 5)
  public String hello() {
    return "Hello world";
  }
}
```

### Redis 实现

首先，定义一个注解 `@RateLimit`，用于标记需要进行限流的方法。注解定义和基于 AOP 实现中的一致。接着，我们可以定义一个切面类 `RateLimitInterceptor`，使用不同框架实现限流逻辑：

#### 使用 spring-data-redis 框架

```java
@Component
@Aspect
public class RateLimitInterceptor {
  @Autowired
  private StringRedisTemplate redisTemplate;

  @Around("@annotation(rateLimit)")
  public Object limit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) throws Throwable {
    String methodName = joinPoint.getSignature().toLongString();
    String key = "rate_limit:" + methodName;
    Long count = redisTemplate.opsForValue().increment(key, 1);
    if (count == 1) {
      redisTemplate.expire(key, 1, TimeUnit.SECONDS);
    }
    if (count > rateLimit.value()) {
      throw new RuntimeException("Too many requests");
    } else {
      return joinPoint.proceed();
    }
  }
}
```

在上面的代码中，我们使用 `StringRedisTemplate` 类访问 Redis 存储。在 `limit` 方法中，我们首先根据当前方法签名生成一个唯一键值，并将其作为 Redis 的 key 值。然后，我们使用 Redis 的自增操作递增这个 key 对应的计数器，并设置过期时间为 1 秒钟。如果计数器的值超过了限流阈值，则抛出异常；否则调用原始方法并返回结果。

#### 使用 Redisson 框架

```java
@Component
@Aspect
@RequiredArgsConstructor
public class RateLimitInterceptor {
  private final RedissonClient redissonClient;

  @Around("@annotation(rateLimit)")
  public Object limit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) throws Throwable {
    String methodName = joinPoint.getSignature().toLongString();
    RRateLimiter limiter = redissonClient.getRateLimiter(methodName);
    limiter.trySetRate(RateType.OVERALL, rateLimit.value(), 1, RateIntervalUnit.SECONDS);
    if (limiter.tryAcquire()) {
      return joinPoint.proceed();
    } else {
      throw new RuntimeException("Too many requests");
    }
  }
}
```

在上面的代码中，我们使用 `RedissonClient` 类访问 Redis 存储，并从中获取一个 RateLimiter 对象。在 `limit` 方法中，我们首先根据当前方法签名生成一个唯一键值，并将其作为 Redisson 的 key 值。然后，我们使用 `trySetRate()` 方法设置该限流器的速率，并使用 `tryAcquire()` 方法尝试获取令牌。如果获取令牌成功，则调用原始方法并返回结果；否则抛出异常。

### Guava 实现

Guava 是 Google 开源的一款 Java 工具库，其中包含了 RateLimiter 类，可以用于实现限流功能。通过创建一个全局的 RateLimiter 对象，并在接口方法中调用 acquire 方法进行令牌桶的获取，即可实现限流。例如：

```java
private static final RateLimiter LIMITER = RateLimiter.create(10.0);

@GetMapping("/hello")
public String hello() {
  if (LIMITER.tryAcquire()) {
    return "Hello World!";
  } else {
    return "Too many requests";
  }
}
```

### Resilience4j 实现

Resilience4j 是一个轻量级的容错框架，可以用于实现各种模式，如熔断、限流、重试等。

1. 添加 Resilience4j 依赖项

```xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
    <version>2.0.2</version>
</dependency>
```

2. 配置接口限流

```yml
resilience4j:
  ratelimiter:
    instances:
      myRateLimiter:
        limitForPeriod: 10
        limitRefreshPeriod: 1s
        timeoutDuration: 500ms
```

在此示例中，我们将每秒允许的最大请求次数设置为 10，并使用 `limitRefreshPeriod` 属性设置刷新周期为 1 秒。`timeoutDuration` 属性设置等待令牌的超时时间。

3. 添加@RateLimiter注释。在接口实现方法上添加`@RateLimiter`注释并指定 Resilience4j 限流器的名称

```java
@GetMapping("/hello")
@RateLimiter(name = "myRateLimiter")
public String hello() {
  return "Hello World!";
}
```

在此示例中，我们使用 `@RateLimiter` 注解将 `hello()` 方法标记为受 `myRateLimiter` 限制。

### spring-cloud-gateway 实现

Spring Cloud Gateway 自带的限流实际上是通过 redis 实现的，其实现方式在` spring-cloud-gateway-server/META-INF/scripts/request_rate_limiter.lua`。

spring-cloud-gateway 有两种配置方式，第一种是通过配置文件，下面是一个示例：

```yml
# application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: my_route
          uri: https://example.org
          filters:
            - name: RequestRateLimiter
              args:
                key-resolver: "#{@ipKeyResolver}"
                redis-rate-limiter.replenishRate: 1            # 令牌填充速度(个/s)
                redis-rate-limiter.burstCapacity: 2            # 令牌桶的大小
                redis-rate-limiter.requestedTokens: 1        # 每次请求获取令牌个数
```

其中，`key-resolver` 使用 SpEL 表达式 `#{@beanName}` 从 Spring 容器中获取 `hostAddrKeyResolver` 对象。它的实现如下：

```java
@Configuration
public class KeyResolveConfiguration {

  // 根据访问 ip 限流
  @Bean(name = "ipKeyResolver")
  public KeyResolver ipKeyResolver() {
    return exchange -> Mono.just(Objects.requireNonNull(exchange.getRequest().getRemoteAddress()).getHostName());
  }
}
```

第二种方式是通过下面的代码来配置：

```java
@Bean
public RouteLocator myRoutes(RouteLocatorBuilder builder) {
  return builder.routes()
    .route(p -> p
           .path("/service/**")
           .filters(filter -> filter.requestRateLimiter()
                    .rateLimiter(RedisRateLimiter.class, rl -> rl
                                 .setBurstCapacity(3)
                                 .setReplenishRate(1)
                                 .setRequestedTokens(1))
                    .and())
           .uri("lb://service"))
    .build();
}
```

这样就可以对某个 route 进行限流了。但是这里有一点要注意，replenishRate 不支持设置小数，也就是说往桶中填充的 token 的速度最少为每秒 1 个，所以，如果限流规则是每分钟 10 个请求（按理说应该每 6 秒填充一次，或每秒填充 1/6 个 token），这种情况 Spring Cloud Gateway 就没法正确的限流。

## 参考

[Spring Cloud Gateway 之限流篇](https://mp.weixin.qq.com/s?__biz=MzI4NjE4NTUwNQ==&mid=2247494915&idx=5&sn=e30db209b5af1b5e760a3a4f2f2b7e12) 

ChatGPT 3.5
