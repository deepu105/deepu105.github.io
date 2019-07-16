---
title: My VSCode setup - Make the most out of VSCode
published: false
description: How I have configured VSCode to make the most out of it for development.
tags: vscode, development, ide, oss
cover_image:
series: Linux environment for developers
---

[Visual Studio Code](https://code.visualstudio.com/)(I like the sound of VSCode better), I just love it. Its my primary editor(More of an IDE these days). I always loved light weight editors over IDEs. Many years ago I was using Eclipse for development and [Notepad++](https://notepad-plus-plus.org/) with some plugins for all other lightweight stuff. Then I discovered sublime text and was using it for a while. I still was finding Eclipse too heavy weight when I was doing web development. Then came [Brackets](http://brackets.io/) from Adobe. It was a fairly nice editor especially for web development and I started using it heavily for that. But Brackets was bit slow back then on large codebase. Then came [Atom](https://atom.io/) which revolutionized the NodeJS desktop application landscape by introducing the Atom shell which ultimately became [Electron](https://electronjs.org/). So I switched to Atom and loved its slick interface and nice pluggable features. It become my primary editor for all web development. So Electron paved the way for VSCode and though at first I was skeptical dues to the association with Visual Studio, I tried it out and was amazed by its speed and user experience. There was no turning back now slowly I started using VSCode for most of my day to day development, except for Java which I was using IntelliJ by now. Fast forward now below are the editor/IDE I use for development.

**VSCode**: JavaScript, EJS, TypeScript, HTML, CSS, Golang, Python, Shell, Docker, Kubernetes, Terraform and everything in between including writing this blog post.
**IntelliJ Idea**: Java, Scala, Kotlin (Though I use VSCode for minor edits and to read code etc)
**VIM**: For quick edits from the command line.

Of course VSCode makes all this possible by allowing the use of plugins and there are a lot to choose from. Here are the plugins that I personally use to work on the above said languages.

## Language support

Based on the Languages you work with you can add syntax and language support plugins for those. I use the below

### JavaScript/TypeScript
### Go
### JVM
### Python

## Theming

## Tools

### Auto rename tag
Automatically rename paired HTML/XML tags - `code --install-extension formulahendry.auto-rename-tag`

### Bracket pair colorizer 2
Marks matching bracket pairs with unique colors. This really makes reading code nicer - `code --install-extension CoenraadS.bracket-pair-colorizer-2`


### .ejs
Add support for [EJS](https://ejs.co/) in template files - `code --install-extension QassimFarid.ejs-language-support`

You can run the below command to install these plugins. This might seem too many plugins but on [my configuration](https://dev.to/deepu105/my-beautiful-linux-development-environment-2afc) VSCode is lightning fast and loads up immediately and is faster then IntelliJ to load and work with.

```bash
code --install-extension SirTori.indenticator # 
code --install-extension TimonVS.ReactSnippetsStandard
code --install-extension TwentyChung.jsx
code --install-extension abusaidm.html-snippets
code --install-extension asvetliakov.move-imports
code --install-extension aws-scripting-guy.cform
code --install-extension bierner.markdown-preview-github-styles
code --install-extension ccitiriga.TSMethodCreator
code --install-extension christian-kohler.npm-intellisense
code --install-extension codezombiech.gitignore

code --install-extension Compulim.compulim-vscode-closetag
code --install-extension dai-shi.vscode-es-beautifier
code --install-extension daltonjorge.scala
code --install-extension dbaeumer.vscode-eslint
code --install-extension DigitalBrainstem.javascript-ejs-support
code --install-extension donjayamanne.githistory
code --install-extension eamodio.toggle-excluded-files
code --install-extension EditorConfig.EditorConfig
code --install-extension eg2.tslint
code --install-extension Equinusocio.vsc-material-theme
code --install-extension esbenp.prettier-vscode
code --install-extension felixrieseberg.vsc-travis-ci-status
code --install-extension formulahendry.auto-close-tag
code --install-extension formulahendry.auto-complete-tag

code --install-extension GitHub.vscode-pull-request-github
code --install-extension Gruntfuggly.todo-tree
code --install-extension hbenl.vscode-test-explorer
code --install-extension humao.rest-client
code --install-extension hwencc.html-tag-wrapper
code --install-extension idbartosz.darkpp-italic
code --install-extension infeng.vscode-react-typescript
code --install-extension itryapitsin.Scala
code --install-extension jcmordan.mark-as-excluded
code --install-extension jebbs.plantuml
code --install-extension jeremyrajan.vscode-lebab
code --install-extension jhipster-ide.jdl
code --install-extension k--kato.intellij-idea-keybindings
code --install-extension kisstkondoros.typelens
code --install-extension maty.vscode-mocha-sidebar
code --install-extension mauve.terraform
code --install-extension mohsen1.prettify-json
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-python.python
code --install-extension ms-vscode.Go
code --install-extension ms-vscode.vscode-typescript-tslint-plugin
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension npxms.hide-gitignored
code --install-extension nwallace.peep
code --install-extension PKief.material-icon-theme
code --install-extension pmneo.tsimporter
code --install-extension rbbit.typescript-hero
code --install-extension redhat.java
code --install-extension redhat.vscode-yaml
code --install-extension richie5um2.vscode-sort-json
code --install-extension ritwickdey.LiveServer
code --install-extension sdras.night-owl
code --install-extension secanis.jenkinsfile-support
code --install-extension Shan.code-settings-sync
code --install-extension sissel.shopify-liquid
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension stubailo.ignore-gitignore
code --install-extension tariky.easy-snippet-maker
code --install-extension timdeschryver.new-blog-post
code --install-extension timothymclane.react-redux-es6-snippets
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension vscjava.vscode-java-debug
code --install-extension vscjava.vscode-java-dependency
code --install-extension vscjava.vscode-java-pack
code --install-extension vscjava.vscode-java-test
code --install-extension vscjava.vscode-maven
code --install-extension wix.vscode-import-cost
code --install-extension wmaurer.change-case
code --install-extension wonderful.maximize-panes
code --install-extension xabikos.JavaScriptSnippets
code --install-extension XebiaLabs.vscode-devops-as-code
code --install-extension yzhang.markdown-all-in-one
code --install-extension zhuangtongfa.Material-theme
code --install-extension Zignd.html-css-class-completion
```