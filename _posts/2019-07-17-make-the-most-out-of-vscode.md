---
title: My VS Code setup - Making the most out of VS Code
published: true
description: How I have configured VS Code to make the most out of it for development.
tags: [vscode, development, ide, opensource]
cover_image: https://thepracticaldev.s3.amazonaws.com/i/zkv3883der29keb7qkrr.png
series: Linux environment for developers
canonical_url: https://deepu.js.org/make-the-most-out-of-vscode
---

[Visual Studio Code](https://code.visualstudio.com/)(I like the sound of VS Code better), I just love it. It is my primary IDE. 

I always loved lightweight editors over IDEs. Many years ago I was using Eclipse for development and [Notepad++](https://notepad-plus-plus.org/) with some plugins for all other lightweight stuff. Then I discovered sublime text and was using it for a while. I still was finding Eclipse too heavyweight when I was doing web development. Then came [Brackets](http://brackets.io/) from Adobe. It was a fairly nice editor especially for web development and I started using it heavily for web development. But Brackets was bit slow back then on a large codebase. Then came [Atom](https://atom.io/) which revolutionized the NodeJS desktop application landscape by introducing the Atom shell which ultimately became [Electron](https://electronjs.org/). So I switched to Atom and loved its slick interface and nice pluggable features. It became my primary editor for all web development. 

So Electron paved the way for VS Code and though at first, I was skeptical dues to the association with Visual Studio, I tried it out and was amazed by its speed and user experience. There was no turning back now. I slowly started using VS Code for most of my day to day development, except for Java which I was using IntelliJ by now. Fast forward now below are the editor/IDE I use for development.

- **VS Code**: JavaScript, TypeScript, EJS, HTML, CSS, Golang, Python, Ruby, Shell, Docker, Kubernetes, Terraform and everything in between including writing this blog post.
- **IntelliJ Idea**: Java, Scala, Kotlin (Though I use VS Code for minor edits and to read the code, etc)
- **VIM**: For quick edits from the command line.

# Plugins

Of course VS Code makes all this possible by allowing the use of plugins and there is a lot to choose from. Here are the plugins that I personally use to work on the above-said languages. You can use the `code --install-extension` command to install them from the terminal.

## Language support

Based on the Languages you work with you can add syntax, utility and language support plugins for those. I use the below

### JavaScript/TypeScript/Web

- [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support) - Adds [EJS](https://ejs.co/) template support.
  > `code --install-extension DigitalBrainstem.javascript-ejs-support`
- [Close HTML/XML tag](https://marketplace.visualstudio.com/items?itemName=Compulim.compulim-vscode-closetag) - Auto close HTML/XML tags.
  > `code --install-extension Compulim.compulim-vscode-closetag`
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Adds support for [ESLint](https://eslint.org/) rules.
  > `code --install-extension dbaeumer.vscode-eslint`
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) - Adds support for [TSLint](https://github.com/palantir/tslint) rules.
  > `code --install-extension ms-vscode.vscode-typescript-tslint-plugin`
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Adds support for [Prettier](https://github.com/prettier/prettier) formatter.
  > `code --install-extension esbenp.prettier-vscode`
- [es-beautifier](https://marketplace.visualstudio.com/items?itemName=dai-shi.vscode-es-beautifier) - Formats JS according to Eslint rules.
  > `code --install-extension dai-shi.vscode-es-beautifier`

### Go

- [Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go) - Adds rich language support for Golang.
  > `code --install-extension ms-vscode.Go`

### JVM

- [Language Support for Java](https://marketplace.visualstudio.com/items?itemName=redhat.java) - Adds Java language support.
  > `code --install-extension redhat.java`
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) - Adds lightweight Java debugging support.
  > `code --install-extension vscjava.vscode-java-debug`
- [JHipster JDL](https://marketplace.visualstudio.com/items?itemName=jhipster-ide.jdl) - Adds syntax support for JHipster JDL files.
  > `code --install-extension jhipster-ide.jdl`

The Java support indeed is getting better and better, so I hope one day I can completely switch to VS Code.

{% twitter 1140281883059740672 %}

### Python

- [Language Support for Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Adds Python language support, linting and debugging support.
  > `code --install-extension ms-python.python`

### Cloud, Container & others

![](https://thepracticaldev.s3.amazonaws.com/i/64sf9ht3f35lsipzafmu.png)

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - Adds Docker support(view and manage containers) and support for Docker, docker-compose files.
  > `code --install-extension ms-azuretools.vscode-docker`

- [Jenkinsfile Support](https://marketplace.visualstudio.com/items?itemName=secanis.jenkinsfile-support) - Adds syntax highlighting support for Jenkinsfile's.
  > `code --install-extension secanis.jenkinsfile-support`

- [Terraform](https://marketplace.visualstudio.com/items?itemName=mauve.terraform) - Adds support for Terraform files.
  > `code --install-extension mauve.terraform`

- [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Full markdown support with live preview, keyboard shortcuts, etc.
  > `code --install-extension yzhang.markdown-all-in-one`

- [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) - Rich [PlantUML](http://plantuml.com/) support with live preview.
  > `code --install-extension jebbs.plantuml`

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - Adds AI assisted intellisense support for multiple languages.
  > `code --install-extension VisualStudioExptTeam.vscodeintellicode`

- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - Adds YAML support.
  > `code --install-extension redhat.vscode-yaml`

## Theme

![](https://thepracticaldev.s3.amazonaws.com/i/8xsddvbrq5e1mco28vsc.png)


#### [Dark++ Italic](https://marketplace.visualstudio.com/items?itemName=idbartosz.darkpp-italic)

My default theme. Similar to VS Code default dark theme but has support for [FiraCode](https://github.com/tonsky/FiraCode) and [Operator Mono](https://www.typography.com/fonts/operator/styles) fonts. I personally use FiraCode.
> `code --install-extension idbartosz.darkpp-italic`

#### [Material icon theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

A nice icon theme based on material icons.
> `code --install-extension PKief.material-icon-theme`

#### [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)

Subtly changes the workspace color of your workspace. Helpful to identify when you have many windows open.
> `code --install-extension johnpapa.vscode-peacock`

## Tools

#### [Auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

Automatically rename paired HTML/XML tags 
> `code --install-extension formulahendry.auto-rename-tag`

#### [Bracket pair colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

Marks matching bracket pairs with unique colors. This really makes reading code nicer 
> `code --install-extension CoenraadS.bracket-pair-colorizer-2`

#### [Change case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)

Convert between different case. Trust me this is so handy 
> `code --install-extension wmaurer.change-case`

#### [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

Fairly useful for spell checking within code. Takes cameCase etc into account 
> `code --install-extension streetsidesoftware.code-spell-checker`

#### [Easy snippet maker](https://marketplace.visualstudio.com/items?itemName=tariky.easy-snippet-maker)

Useful to store re usable snippets. 
> `code --install-extension tariky.easy-snippet-maker`

#### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Add support for [EditorConfig](https://editorconfig.org/). 
> `code --install-extension EditorConfig.EditorConfig`

#### [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

Enable viewing Git history within VS Code. 
> `code --install-extension donjayamanne.githistory`

#### [Gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)

Makes it easy to work with `.gitignore` files. 
> `code --install-extension codezombiech.gitignore`

#### [Hide gitignored](https://marketplace.visualstudio.com/items?itemName=npxms.hide-gitignored)

Hides patterns defined in `.gitignore` from the editors explorer.
> `code --install-extension npxms.hide-gitignored`

#### [Mark as excluded](https://marketplace.visualstudio.com/items?itemName=jcmordan.mark-as-excluded)

Exclude stuff right from the explorer tree.
> `code --install-extension jcmordan.mark-as-excluded`

#### [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files)

Easily toggle between showing and hiding excluded files/folders.
> `code --install-extension eamodio.toggle-excluded-files`

#### [IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

I have bad muscle memory so wanted to use the same keyboard shortcuts as IntelliJ. There are mappings available for Sublime, Atom and so on.
> `code --install-extension k--kato.intellij-idea-keybindings`

#### [Sort JSON](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json)

Sorts JSON object keys.
> `code --install-extension richie5um2.vscode-sort-json`

#### [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)

Adds an explorer panel for running tests. Supports multiple languages and testing frameworks.
> `code --install-extension hbenl.vscode-test-explorer`

#### [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

Aggregate TODO, FIXME, etc in a tree view in explorer.
> `code --install-extension Gruntfuggly.todo-tree`

# Terminal setup

If you are using Zsh shell with Oh-my-zsh like me as explained [here](https://dev.to/deepu105/configure-a-beautiful-terminal-on-unix-with-zsh-4mcb), you might want to do the below to get the same terminal experience in the integrated VSCode terminal as well.

![](https://thepracticaldev.s3.amazonaws.com/i/ae6wi9anly8clq12z9na.png)

Follow these steps
- Download and install a [patched font](https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/SourceCodePro/Medium/complete/Sauce%20Code%20Pro%20Medium%20Nerd%20Font%20Complete%20Mono.ttf).
- On Linux, run `fc-cache -f -v` to refresh font cache.
- On VSCode, open Preferences → Settings and click on the `{}` icon to open JSON mode and set the below
```json
    "terminal.integrated.shell.linux": "/usr/bin/zsh",
    "terminal.integrated.fontFamily": "'SauceCodePro Nerd Font Mono','Source Code Pro'",
    "terminal.integrated.rightClickCopyPaste": true,
    "terminal.integrated.fontSize": 14,
    "terminal.integrated.cursorStyle": "underline",
    "terminal.integrated.cursorBlinking": true
```
Replace `linux` with `osx` if you are on a Mac.
 
---

# Conclusion

This might seem like too many plugins but on [my configuration](https://dev.to/deepu105/my-beautiful-linux-development-environment-2afc) VS Code is lightning fast and loads up immediately and is faster then IntelliJ to load and work with. The beauty of VS Code is that you don't need all the plugin all the time, you can disable the ones not required per workspace to make it even faster.

Many people [ask](https://www.reddit.com/r/linux/comments/c42kpk/my_beautiful_linux_development_environment/erum9sf/) me why I use VS Code when I have IntelliJ and my answer have been always the same. IntelliJ is great but its also quite heavy. While all those advanced features are needed for Java, Scala or Kotlin development, VS Code is perfectly capable of giving a nice developer experience for lightweight languages like JS, TS, Go, Python, Rust, Ruby, etc. 

As a regular user of both IntelliJ and VS Code, I prefer VS Code as much as possible. The user experience is much nicer for my taste. In fact, I like the developer experience in VS Code better for JavaScript, TypeScript, Web, Python, and Golang. Also switching between them for JVM projects and others don't feel weird for me as I have same keyboard mappings for both. The only time I fire up IntelliJ these days are when I want to do full-fledged Java development. For everything else, I use VS Code.

---

I hope you find this useful. If you have any question or if you think I missed something please add a comment.

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).
