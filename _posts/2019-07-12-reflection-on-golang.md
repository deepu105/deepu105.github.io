---
title: My reflections on Golang
published: true
description: After using Go for more than 9 months, here is what I think of it
tags: go, programming, languages, thepragmaticprogrammer
cover_image: https://thepracticaldev.s3.amazonaws.com/i/snu9zy2ywp0ftfcthda2.jpg
featured: true
canonical_url: https://deepu.js.org/reflection-on-golang/
---

Do I like [Go](https://golang.org/)? Yes. Would I use it for every use case I have? Definitely not. 

{% twitter 1103546225851277313 %}

Don't get me wrong, I like **Go** for what it is but like every other programming language, it is always a love-hate relationship. No programming language is perfect and all of them have their own merits and use cases. I hate it when I see people overusing something and I see that pattern with Go these days. To be fair, I have done my fair share of overusing in my career as well (mostly with JavaScript) and I can see why people do it. This is not gonna be a blog bashing Go or praising Go, it is just what I think of it after using it for over 9 months. Before I start a rant on the good and bad of Go, here is some background. 

After being in the tech industry for over 10 years, I would like to think of myself as a pragmatic programmer or at least as someone getting closer to that - that should be a programmer's [Nirvana](https://www.britannica.com/topic/nirvana-religion). I didn't even plan to be a programmer, if you ask the 18-year-old self of me, he would say that he wanted to be an astrophysicist or a robotics engineer(Yes building space robots was my dream). Like most teenage dreams, it didn't happen and I ended up in tech instead. 

Though landing an IT Job was an accident, programming wasn't alien to me. I did learn some C/C++ when I was in high school to help my girlfriend with her project and did dabble in some PHP, JavaScript, HTML and Flash(ActionScript) during my early college years for personal projects and blogs. So when I got a real IT job without having an IT background, I did what many in that situation did, I started learning the language that I stumbled upon first based on the task I was given, which happened to be Java. Being a quick learner and having some idea of programming concepts from C/C++ Java wasn't that hard to learn and I was a pretty decent Java programmer in a few months. Then I was tasked with building some Web UI and I dived deep into the world of HTML, CSS, and JavaScript and honestly fell in love with JavaScript due to its flexibility and ease. I mastered JQuery and soon become the go-to guy for front end stuff in the office. 

I was anything but pragmatic back then, I was preaching JavaScript to everyone and would vehemently debate anyone who thought JS was a bad language. 

Fast forward to now and if I look back I have done projects in C/C++, PHP, JavaScript, TypeScript, HTML, CSS, Java, Groovy, Scala, Python and recently Go. I think this exposure probably helped me become more pragmatic as I have started to look at programming languages as tools and each of them has their own strengths and weaknesses. Well, there is more to this story but that's for another time, the point is to set a baseline for the below reflections so that I don't sound like someone just trying **Go** and going on a rant.

---

Go is the latest language I learned and worked with, I have worked on a CLI project built with Go for over 9 months now, building a powerful scaffolding engine with my team(Yes, pretty much like [JHipster](https://www.jhipster.tech/)) that uses Go templates where you could create what we call [blueprints](https://github.com/xebialabs/blueprints) at [XebiaLabs](https://xebialabs.com/). So yes I have done much more than a hello world app with Go.

Without wasting more time on unrelated things here is what I like about Go and what I don't like. 

## What I like about Go

### Simplicity

I like the fact that Go is a simple language(Going through the entire language features on the [tour](https://tour.golang.org) page literally takes 15 minutes unless you do the exercises) and unlike Scala, Rust or even JavaScript Go doesn't have many ways of doing the same thing which is extremely valuable for people working in teams and companies wanting to write maintainable code where even a newly joined employee can read and understand the code without needing much help. I think this is one of the biggest reason that is driving Go adoption. If you have worked on large scale projects you know how difficult it is when the code is unreadable and every new team member have to spend so much time trying to understand what a piece of code does. So I was really happy when I saw that Go doesn't have features that rely heavily on implicit and such. The language features and concepts are easy to grasp and you can start being productive in Go quite soon. The only concepts that might seem bit complex are the concurrency part and even that is simpler compared to other languages.

### Language provided code style and vetting

This is such a time saver. IMO every language should just do this so that you don't waste time debating code style and setting up lint rules. Go provides opinionated formatting, linting & vet tool as part of the package and the Go compiler even enforces things like unused variable and stuff. Most of the IDE/Editor plugins also use these tools for formatting and linting and hence helps to keep consistent code style across Go projects which again adds to readability and maintenance.

### Goroutines & Channels

This is one of the biggest strength of Go. The native support for concurrency and parallelism. This makes Go an ideal candidate for applications that require heavy concurrent and/or parallel processing, networking and so on. Goroutines makes it so easy to start lightweight threads and channels provide a way to communicate between these threads acting like a message bus.

```go
func main() {
	messages := make(chan string)
	collected := make([]string, 2)

	go func() { messages <- "ping" }()
	go func() { messages <- "pong" }()

	collected = append(collected, <-messages)
	collected = append(collected, <-messages)
	fmt.Println(collected) // [ pong ping ]
}
```

### Closures & callbacks

If you have used JavaScript you would know how useful closures and callbacks are. Go like JavaScript treats functions as objects and hence can be assigned to variables, stored in maps, passed as function parameters and returned from functions. It also supports creating nested closures and anonymous functions which helps to encapsulate context. The behavior is pretty much similar to JavaScript. So you can apply some functional programming concepts in Go as well.

```go
func main() {
	// an unnecessarily complicated example
	type fnType = func(a int, b int) int
	fnMap := map[string]fnType{
		"ADD": func(a int, b int) int {
			return a + b
		},
		"SUB": func(a int, b int) int {
			return a - b
		},
	}

	// this is a closure
	localFn := func(method string) fnType {
		return fnMap[method] // returns a function
	}

	printer := func(fn func(method string) fnType, method string) {
		fmt.Println(fn(method)(10, 5)) // callback
	}
	// function passed as parameter
	printer(localFn, "ADD")
	printer(localFn, "SUB")
}
```

### Type assertion and switches

Go provides a nice way of asserting types and can be used with a [switch statement](https://tour.golang.org/methods/16) which makes it easier to do reflection and such.

### Multiple returns

This is quite a handy feature like in Python, we are used to deconstructing objects/arrays to achieve this in JavaScript and using Tuples and such in some languages. The returns can also be named which is nice for readability.

### Tooling

{% twitter 1095992144152748033 %}

As mentioned earlier Go provides standard tooling for formatting, linting and so on and the language design makes it easy to build tooling for Go and hence editors/IDE has nice features like test generation, code coverage and so on. For example, the VSCode integration for Go provides the below options which helps with consistency and less boilerplate to write by hand.

![](https://thepracticaldev.s3.amazonaws.com/i/chcyfvlj52k6xgrg5adg.png)

### Doesn't need a runtime

Go doesn't need a runtime like JVM or NodeJS, Go applications can be compiled into an executable cross-platform binary using the [standard Go tooling](https://golang.org/pkg/go/build/). This makes Go applications portable and platform-independent.


## What I don't like about Go

### Simplicity

This is where the love-hate relationship starts, Go is a simple language which is nice but at times it feels too simple & verbose and coming from Java/JavaScript ecosystem you are spoiled with some nice features & syntax sugars which IMO makes the code more expressive and helps to keep it DRY. The things that I miss the most are
- Generics: This is currently [being considered](https://go.googlesource.com/proposal/+/master/design/go2draft-generics-overview.md) in the next major iteration of Go, but until then this just makes you repeat code unnecessarily. I have lost count of the number of times I had to repeat the same block of code for different types where Generics would have kept it nice and simple. This is also one reason you don't see libraries like Lodash for Go.
- Standard error handling: This also seems to be [coming](https://go.googlesource.com/proposal/+/master/design/go2draft-error-handling-overview.md) in the next major iteration of Go but until it lands I can complain. Anyone writing Go will remember doing `if err != nil` uncountable times in your code. Removing those might cut the codebase in size by at least 20%
- Default values: Would love to see this in Go, this is quite useful. Maybe I'm just spoiled by JS.

### Too much boilerplate(not suitable for DRY)

Go being too simple means you would have to write a lot of code as the language doesn't offer constructs like map, reduce, and so on, and add the lack of generic on top means you would end up writing a lot of utility code and a lot of that will be repeated to accommodate different types. Imagine writing a map function in Go, you would have to write one for every combination of Map that can be used. These factors don't make it easy to do DRY programming in Go.

### Dependency management

The dependency management in the Go ecosystem feels immature and too basic compared to other mainstream languages. Importing packages from Git is nice but it also makes it more fragile. What can go wrong when you are depending on a Git branch on your production application right! There is no way to use relative dependencies(Can't beat NPM link!).
These problems are similar to the issues with dependency range in Node package managers. Glide seems to be a popular choice but still is not as mature as solutions in other languages. In the project, I work on we used Gradle along with [Gogradle](https://github.com/gogradle/gogradle) and though it works fine the developer experience is not as good as using Gradle/Maven for Java project or using NPM on a NodeJS project.

### Source code in GOPATH

Go recommends you to create your Go projects under the GOPATH. Maybe it is just me, but I hate this as I would normally like to organize my code. For example, I have a `~/workspace/` folder where I organize my projects by the organization. If I follow the Go recommendation I have to put the project under `/home/deepu/go/src` along with all the library source code that is downloaded. If you don't follow this then most of the Go tooling just doesn't work. Currently, I have a specific Gradle task that copies over all the vendor libs to my local Gopath inside `~/workspace/XL/<project>` to workaround this.

### Confusing pointer behaviors

Go has pretty good pointer support and the default behavior is to pass an object by value. If you want to pass something by reference you have to mark it specifically. But this behavior is not very consistent as the content of Maps and Slices by default are passed by reference and hence this could be a bit surprising to beginners.

### Struct hell

This is more of a nitpick. Structs are what you would use to create data structures in Go. It might look like an object but they are not exactly objects. While structs are fine functionally, in many cases you will end up with structs that look like the ugly brother of JSON. In real-world projects, you always will end up creating complex structs, especially if the application is doing some generic json or yaml parsing and soon your code will start to look like this. This is not that big of a concern but it just hurts my eyes every time I debug something or write tests.

```go
	func main() {
	type MyYamlDoc struct {
		foo []map[interface{}][]map[interface{}]interface{}
		bar interface{}
	}

	ohno := MyYamlDoc{
		[]map[interface{}][]map[interface{}]interface{}{
			{
				"Foo": {
					{"Bar": map[interface{}][]map[interface{}]interface{}{
						"Foo": {
							{"Bar": map[interface{}][]map[interface{}]interface{}{
								"Foo": {
									{"Bar": map[interface{}][]map[interface{}]interface{}{
										"Foo": {
											{"Bar": map[interface{}][]map[interface{}]interface{}{}},
										},
									}},
								},
							}},
						},
					}},
				},
			},
			map[interface{}][]map[interface{}]interface{}{
				"Foo": {
					{"Bar": map[interface{}][]map[interface{}]interface{}{}},
				},
			},
		},
		map[interface{}][]map[interface{}]interface{}{
			"Foo": {
				{"Bar": map[interface{}][]map[interface{}]interface{}{}},
			},
		},
	}
	fmt.Println(ohno)
}
```

### Weird interface construct
The interface concept in Go is weird. These are the only implicit construct in Go. If you come from other languages that have interfaces then this will feel weird. The fact that they are implicit means its really easy to mess things up. Refactoring is messy unless you have a smart IDE, and you can accidentally implement someone's interface by just naming your method a certain way. While implicit interfaces certainly help with polymorphism and decoupling code I personally would still prefer interfaces that are explicit.

Another interface Gotcha is nil value checks, in Go, an interface is made up of two parts a type and a value, so an interface is `nil` only when both type and value are nil, this means you can't just simply do nil checks on interfaces. This is so confusing the Go has a specific [FAQ](https://golang.org/doc/faq#nil_error) for this. Below article explains this in more detail

{% link https://dev.to/pauljlucas/go-tcha-when-nil--nil-hic %}

### Single GC algorithm

Go implements a concurrent tri-color mark-sweep collector as its garbage collector. This specific GC implementation is optimized for better pause times while ignoring program throughput, pause frequency and many other parameters that are considered during GC. Some people in the Go community claims this as the best ever GC. Having some Java background I would have to disagree as most JVM implementations provide multiple GC algorithms you can choose from which includes a concurrent mark-sweep collector as well and most of these are balanced to take care of many more parameters than just pause times. [This](https://blog.plan99.net/modern-garbage-collection-911ef4f8bd8e) articles analyses this in detail. So some use cases that produce a high amount of garbage might actually be slower in Go compared to another language due to frequent GC.

### Developer experience

This is purely based on personal experience and hence will vary from others. Being a polyglot developer who has worked with many languages, the developer experience from Go is not the best I have experienced. The DX of the JavaScript ecosystem is the best I have experienced so far. It feels like there are things missing in the Go ecosystem. Dependency management and toolchains need improvement. A bit more sensible language features and some syntax sugar wouldn't hurt as well.

## Conclusion

Having worked with many major languages I can't just use Go for every use case but I can see why people would use Go for every use-case out there if they haven't worked with other languages.

### So where would I use Go?

- I would definitely use Go when the use case requires a lot of parallel processing and/or concurrency(both are not the same thing but are closer to each other) as you can make use of Goroutines for this and is much simpler and efficient than managing threads like in a Java application or working around it in JavaScript using callback hell since JS is actually single-threaded. [Here](http://tleyden.github.io/blog/2014/10/30/goroutines-vs-threads/) is a nice article explaining the advantage of Goroutines.
- Simple microservices where boilerplate is not a concern
- Networking applications or web servers, especially with async workloads, can greatly benefit from Go. But to be fair you can do these in Java, Python, JS, etc as well but Go in the end will provide better efficiency and would be easier to implement.
- System programming. While Rust or C is a much better choice for this but if those are not in your arsenal then Go is the next best thing. With decent support for pointers and its standard library its easier for system programs than other mainstream languages. Many popular system tools like Docker, Kubernetes, etc are indeed written in Go.


### Where I wouldn't use Go?

- Complex web application: I would choose Java with a framework like [Spring](https://spring.io/) or [Micronaut](https://micronaut.io/) as its much more maintainable and battle-tested and you would focus more on business logic than writing boilerplate infrastructure code. One [common argument](https://medium.com/@norwood.john.m/hashbash-a-comparison-of-cpu-and-io-bound-applications-in-go-and-java-across-multiple-metrics-d358df6e03b1) against this stack is its memory footprint but it is possible to get lower memory footprint with Spring and frameworks like Micronaut and [Quarkus](https://quarkus.io/) actually promises that OOB.
- After writing a high-level CLI tool in Go, I hate the experience, I kept thinking that doing it in JavaScript would have been 10 times more productive and a nicer experience. SO I would choose JavaScript or TypeScript running on NodeJS for CLI tool any day. Mainly due to the ecosystem and the sheer joy and speed of getting things done without spending all your time writing boilerplate code. But this wouldn't be applicable if the CLI in question a system tool or a networking tool, in those cases Go could be a good option.

I do hope Go evolves into a general-purpose language over time and many of these concerns are solved. In the meantime, I'll try to follow this mantra.

{% twitter 1146138541765906432 %}

But then you can always choose to fasten a screw using a hammer.

{% twitter 1142967056150728708 %}

---

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).

Cover image credit: Unknown. Found [here](https://thepracticaldev.s3.amazonaws.com/i/snu9zy2ywp0ftfcthda2.jpg)
