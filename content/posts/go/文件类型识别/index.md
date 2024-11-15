---
title: "文件类型识别"
date: 2023-06-05T11:30:01+08:00

categories: ["Go"]
series: []
tags: []

cover:
    image: "/cover/029.webp"
    alt: "cover"
    relative: true
---

文件类型识别是指根据文件的二进制数据判断文件的类型。以下是几种常见的文件类型识别方法：文件类型识别是在很多应用场景都需要用到的功能，比如在Web开发中，通常需要根据上传文件的类型进行不同的处理；在文件管理系统中，对不同文件类型展示不同的图标和操作等。文件类型识别的方法通常有以下几种：

1. 文件扩展名：根据文件扩展名确定文件类型，优点是效率高，缺点是文件扩展名可以被修改，准确性低。
2. 文件内容特征：不同类型的文件具有不同的内容特征，例如MP3音频的内容特征是以 ID3 标签开头。
3. 魔数：魔数是文件头部的一些特定字节，用来标识文件类型。不同类型的文件类型有不同的魔数值。

## 标准库实现

Go 语言的标准库`net/http`包中提供了一个判断文件类型的方法` DetectContentType(data []byte)`，它接收文件内容的前 512 个字节作为参数，返回 MIME 类型字符串，例如`text/plain; charset=utf-8`。其实现流程为：首先截取输入字节数组的前 512 个字节，然后遍历找到第一个不是空格的字节，从这个字节开始遍历预定义的 MIME 类型的匹配规则按顺序匹配，如果没有找到匹配类型，最终会返回`application/octet-stream`。

下面是一个示例：

```go
func TestStd(t *testing.T) {
  file, err := os.Open("../res.txt")
  if err != nil {
    fmt.Printf("文件打开失败，%v\n", err)
    return
  }
  defer file.Close()
  
  // 读取文件前 512 个字节
  buf := make([]byte, 512)
  if _, err := file.Read(buf); err != nil {
    fmt.Printf("文件读取失败，%v\n", err)
    return
  }
  
  // 调用DetectContentType方法判断文件类型
  contentType := http.DetectContentType(buf)
  fmt.Println(contentType)
}
```

`mime.ExtensionsByType(typ string)`方法可以返回指定 MIME 类型关联的拓展名类型数组，并且返回值总以 . 开头，例如 ".html"。

```go
ext, _ := mime.ExtensionsByType("image/jpeg")
fmt.Println(ext)	// [.jfif .jpe .jpeg .jpg]
```

标准库实现的优点是简单易用，缺点是能够识别的类型较少，准确率一般。

## 第三方库 filetype

filetype 是一个 Go 语言的第三方库，用于识别文件类型。它支持识别超过 400 种不同类型的文件，包括常见的图像、音频、视频、文档和归档文件等。它的特点有：

- 可以根据扩展名或 MIME 类型来发现文件类型
- 可以根据类别（图片、视频、音频等）来发现文件类型
- 可以添加自定义的新类型和匹配器
- 只需要前 262 字节表示最大的文件头，所以你可以只传递一个切片

filetype 是基于文件的魔数进行类型检测的。filetype 在初始化时会将所有定义的文件类型和对应的匹配器添加到全局 map 中，然后在核心方法 Match 中，它会逐个遍历 map 中的匹配器，如果返回值不是`Unknown`则直接返回结果，如果都不匹配则返回自定义类型`Unknown`。

以下是一个使用示例：

```go
func TestFileType(t *testing.T) {
	buf, _ := os.ReadFile("G:\\Sf\\001.jpg")

	kind, _ := filetype.Match(buf)
	if kind == filetype.Unknown {
		fmt.Println("Unknown file type")
		return
	}

	fmt.Println("File type:", kind.Extension)
	fmt.Println("MIME type:", kind.MIME.Value)
}
```

filetype 还提供了一些辅助函数，例如`IsImage(buf)`、`IsVideo(buf)`、`IsAudio(buf)`等，用于检测文件是否属于某个类别，它会遍历特定类别的所有匹配器，并返回是否有匹配器返回 true。

```go
func main() {
	file, _ := os.Open("G:\\Sf\\001.jpg")
	buf := make([]byte, 261)	// 只需要前261个字节
	_, _ = file.Read(buf)
	isImage := filetype.IsImage(buf)
	fmt.Println(isImage)
}
```

filetype 还可以添加额外的类型和匹配器

```go
var fooType = filetype.NewType("foo", "foo/foo")

func fooMatcher(buf []byte) bool {
	return len(buf) > 1 && buf[0] == 0x01 && buf[1] == 0x02
}

func main() {
	// Register the new matcher and its type
	filetype.AddMatcher(fooType, fooMatcher)

	// Check if the new type is supported by extension
	if filetype.IsSupported("foo") {
		fmt.Println("New supported type: foo")
	}

	// Check if the new type is supported by MIME
	if filetype.IsMIMESupported("foo/foo") {
		fmt.Println("New supported MIME type: foo/foo")
	}

	// Try to match the file
	fooFile := []byte{0x01, 0x02}
	kind, _ := filetype.Match(fooFile)
	if kind == filetype.Unknown {
		fmt.Println("Unknown file type")
	} else {
		fmt.Printf("File type matched: %s\n", kind.Extension)
	}
}
```

filetype 库优点：

- 支持更多种类和更细分的文件类型，比如视频、音频、文档等。
- 提供更准确和更规范化的 MIME 类型，比如 `image/jpeg` 而不是 `image/jpg`。
- 效率更高，因为只需要前 262 个字节

## 参考

[1] [Go 标准库的神秘功能：如何轻松识别任何文件类型](https://mp.weixin.qq.com/s/sjtXU_MXuPNMXWMYxoyx-g) 

[2] [Go 每日一库之文件类型鉴别利器 filetype](https://mp.weixin.qq.com/s?__biz=MzAxMTA4Njc0OQ==&mid=2651454418&idx=1&sn=83e2172c2452079b4a68465bd3c72ef8) 
