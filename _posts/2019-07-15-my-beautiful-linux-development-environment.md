---
title: My beautiful Linux development environment
description: My Linux development machine explained
published: true
tags: linux, fedora, development, gnome
image: https://thepracticaldev.s3.amazonaws.com/i/8ap820z2y55e423dta8h.png
cover_image: https://thepracticaldev.s3.amazonaws.com/i/8ap820z2y55e423dta8h.png
series: Linux environment for developers
---

One of the questions that I get quite often after a conference talk is weirdly not about what I presented but about my Linux desktop environment. People are more curious about that beautiful distro rather than the awesome presentation I just did 😂

Not that I'm complaining, I love my desktop setup. I love it so much that I was afraid of getting a new PC when I was due for one. I was afraid that I would mess things up(I have done that many times in the past, I think Linux users can relate to me)

So I decided to capture the most important aspects of my distro for anyone interested in using Linux as their primary OS for development.

![](https://thepracticaldev.s3.amazonaws.com/i/3zajm5va5xplo9mg7804.png)

This is not just my work laptop, it's my primary machine which I use for all of the below
- Java, JS, TS, Go, Python & web development
- JHipster development
- Running multiple web applications locally
- Running Docker containers
- VirtualBox for Windows testing & other VM stuff
- Kubernetes, Terraform, CloudFormation development and deployments
- Azure, AWS & GCP deployments using required CLI tools
- Heavy browser usage
- Email, chat & video conferencing
- Plex media server
- Blogging
- Youtube & Social media


## Machine configuration

The configuration of the machine is also quite important for any development setup. So my laptop is a Dell Precision 5530 Mobile Workstation. I had the exact same setup with my old Dell 5510 as well, which is quite a similar configuration to 5530. I still have it as a backup Laptop, its 2 years old now but can still give most of the top end laptops today a run for its money. 

I used the [custom configuration](https://www.dell.com/nl-nl/work/shop/isv-gecertificeerd-en-geoptimaliseerd-workstation/precision-5530/spd/precision-15-5530-laptop/xctop5530emea?selectionState=eyJGUHJpY2UiOjMwODcuNDUsIklVUHJpY2UiOjMwODcuNDUsIk9DIjoieGN0b3A1NTMwZW1lYSIsIlF0eSI6MSwiUHJTdCI6IiIsIk1vZHMiOlt7IklkIjoxNDYsIk9wdHMiOlt7IklkIjoiR0NCV1pVMiJ9XX0seyJJZCI6MTEsIk9wdHMiOlt7IklkIjoiR1JFUEZVMiJ9XX0seyJJZCI6MTQ5LCJPcHRzIjpbeyJJZCI6Ikc1R0FJQzgifV19LHsiSWQiOjYsIk9wdHMiOlt7IklkIjoiRzBTTVk1OSJ9XX0seyJJZCI6MywiT3B0cyI6W3siSWQiOiJHSk1TVDRLIn1dfSx7IklkIjo4LCJPcHRzIjpbeyJJZCI6IkdSMlNHSkgifV19LHsiSWQiOjM3MiwiT3B0cyI6W3siSWQiOiJHM1c1QzZIIn1dfSx7IklkIjoxMDAyLCJPcHRzIjpbeyJJZCI6IkdFODBUOVcifV19LHsiSWQiOjc0OSwiT3B0cyI6W3siSWQiOiJHOEJYV1lJIn1dfSx7IklkIjo1NSwiT3B0cyI6W3siSWQiOiJHSkVWUDNYIn1dfSx7IklkIjoxMTIsIk9wdHMiOlt7IklkIjoiR1c5SUs3RiJ9XX0seyJJZCI6MTAwMywiT3B0cyI6W3siSWQiOiJHNlE1WFo0In1dfSx7IklkIjoyMDAwNzYsIk9wdHMiOlt7IklkIjoiR1cyRVNBNyJ9XX0seyJJZCI6MzAsIk9wdHMiOlt7IklkIjoiODI3ODc1In1dfV19&cartItemId=c4d9c6f5-9956-4c6f-87ac-d0472018ad78) option from Dell to get the best possible setup at that time. it's not cheap but my company, [XebiaLabs](https://xebialabs.com/), provided a handsome budget and I think it is worth every penny. This, in my opinion, is one of the best Laptop for developers. So here is what I have.

**Processor**: Intel® Core™ i9-8950HK CPU @ 2.90GHz × 12

**Memory**: 32GB, DDR4-2666MHz SDRAM, 2 DIMMS, Non-ECC

**HDD**: M.2 1TB NVMe PCIe SED class 40 SSD

**Graphics**: NVIDIA Quadro P2000 with 4 GB GDDR5 memory & Intel® UHD Graphics 630 (Coffeelake 3x8 GT2)

**Wireless**: Intel Wifi Link 9260 2x2 802.11AC + BT 4.2 vPro wireless card

**Keyboard**: English QWERTY US, backlit

**Display**: 15.6" FHD 1920x1080 Anti-Glare LED-backlit Non-touch IPS UltraSharp™

**Battery**: 6-cell (97Wh) Lithium Ion battery with ExpressCharge™

## Operating system and desktop environment

The most important of course is the operating system, I'm running [Fedora 30](https://getfedora.org/) at the moment with [GNOME 3.32.2](https://www.gnome.org/) as the Desktop and I'm very happy with it. I find Fedora more suitable for development machines than other distros as it has a short release cycle and is fairly stable so you get latest & stable software all the time.

![](https://thepracticaldev.s3.amazonaws.com/i/it61sd8sldm00nipfiy4.png)

What good is a desktop without a nice theme right? GNOME is great when it comes to themes and I went with [Arc-Flatabulous](https://github.com/andreisergiu98/arc-flatabulous-theme) theme and never looked back. For icons, I use [Paper](https://github.com/snwh/paper-icon-theme) as I like the material icon theme.

![](https://thepracticaldev.s3.amazonaws.com/i/h6w1qmxd2mvs88bl0ki7.png)

Of course, it won't be complete without some nice GNOME plugins. Below are the plugins that I use.
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
- [Always Zoom Workspaces](https://extensions.gnome.org/extension/503/always-zoom-workspaces/)
- [Auto Move Windows](https://extensions.gnome.org/extension/16/auto-move-windows/)
- [Native Window Placement](https://extensions.gnome.org/extension/18/native-window-placement/)
- [Launch new instance](https://extensions.gnome.org/extension/600/launch-new-instance/)
- [Steal My Focus](https://extensions.gnome.org/extension/234/steal-my-focus/)
- [AlternateTab](https://extensions.gnome.org/extension/15/alternatetab/)
- [Window List](https://extensions.gnome.org/extension/602/window-list/)
- [Applications Menu](https://extensions.gnome.org/extension/6/applications-menu/)
- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
- [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)
- [Gistnotes](https://extensions.gnome.org/extension/917/gistnotes/)
- [OpenWeather](https://extensions.gnome.org/extension/750/openweather/)
- [Places Status Indicator](https://extensions.gnome.org/extension/8/places-status-indicator/)
- [System-monitor](https://extensions.gnome.org/extension/120/system-monitor/)
- [Todo.txt](https://extensions.gnome.org/extension/570/todotxt/)
- [TopIcons Plus](https://extensions.gnome.org/extension/1031/topicons/)
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)


## Development tools

Now, these are mostly objective choices and really doesn't matter as long as you are comfortable with the tools you choose. Below are my choices for some of the important categories for development. I'm not including obvious things like Vim, Git, NodeJS, Docker, Kubernetes, etc.

**Shell**: This is one of the most important for a developer. I use [ZSH](https://www.zsh.org/) along with the awesome [Oh My ZSH](https://ohmyz.sh/) as my shell. Now, this won't be complete without some nice plugins and theme. I use [powerlevel9k](https://github.com/bhilburn/powerlevel9k) theme with some customizations. I also use [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions), git, docker, docker-compose, autojump, [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting), dnf, and npm plugins for Oh My ZSH. Here is my [`.zshrc`](https://gist.github.com/deepu105/9723cb70032eca98ff09d110369af67a) with all the customizations. **Update**: A [comment](https://dev.to/java4africa/comment/c319) on this post suggested [powerlevel10k](https://github.com/romkatv/powerlevel10k) as an alternative theme and I tried it and turns out it is really way faster than `powerlevel9k`. So I think I'm gonna use `powerlevel10k` as my shell theme.

**Terminal**: What good is a nice shell without a good terminal. Fortunately, we have [Tilix](https://gnunn1.github.io/tilix-web/) one of the best terminal application out there. It has workspaces, tabs, split windows, Quake mode and so on.

![](https://thepracticaldev.s3.amazonaws.com/i/flq8pew1hr6l1hwj6egw.png)

**Integrated development environment(IDE)**: [IntelliJ IDEA ultimate](https://www.jetbrains.com/idea/) - I use this only for Java & other JVM language Development

**Code Editors**: [Visual Studio Code](https://code.visualstudio.com/) - My go-to editor. I love it. I use VSCode for web development, Go, Python, JS development, DevOps and everything other than JVM languages. A VSCode setup is never complete without some good plugins. [Here](https://gist.github.com/deepu105/4599d3b381218b9d1a63119fbf9ca537) are the plugins that I'm using. You can run the script to install those.

Other notable development tools I use are [GitKraken](https://www.gitkraken.com/) for Git repo management, [Beyond Compare](https://www.scootersoftware.com) for code comparisons, [VirtualBox](https://www.virtualbox.org/), [NVM](https://github.com/nvm-sh/nvm) for NodeJS version management and [SDKMan](https://sdkman.io) for JDK version management.

## Productivity tools

Productivity tools are also quite important and below are my choices.

**Browser**: Google Chrome is my primary browser. I also use Firefox & Opera sometimes. I do love Opera in terms of its UX, I would love to use it as my primary browser but I miss everything I have synchronized with my Google account in Chrome.

**Email**: I use [Mailspring](https://getmailspring.com/) as my e-mail client. Its a fairly decent mail client with nice themes and a simple UI.

**Office suite**: I mostly use Google Docs & Microsoft office online but when I have to work on something on my Desktop I use [LibreOffice](https://www.libreoffice.org/) which is a good office suite and even handles Microsoft Office & Keynote formats.

**Communication**: Of course I use [Slack](https://slack.com) and for video conference I use [BlueJeans](https://www.bluejeans.com/).

**Screen capture**: I use this nifty tool called [Peek](https://github.com/phw/peek) for screen recording and [Shutter](https://launchpad.net/shutter) for screenshots.

## Conclusion

There are many other small and nifty utilities that I use, most are command line utilities. There are some notable mentions like [Timeshift](https://github.com/teejee2008/timeshift) which is nice for backing up your machine.

Of course, not everything is perfect in the Linux world, but it is the same with every OS. I was a long time Windows user before switching to Linux. So like every Linux users I have from time to time messed things up(With great power comes great responsibility, Peter). There are many quirks in the Linux world but there is nothing that bothers me much. Some of the most annoying issues I had in the past are below and for now, I don't have any noticeable issues.

- Scroll position jumping when switching apps - Fixed after upgrading to Fedora 30
- Hibernation was broken - Fixed after upgrading to Fedora 30
- Audio output selection was broken when plugging in headphones- Fixed after Fedora 28 for me

{% twitter 1139602081935966210 %}

I hope you find this useful. If you have any question or if you think I missed something please add a comment.

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).