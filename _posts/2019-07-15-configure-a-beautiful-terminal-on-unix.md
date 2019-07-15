---
title: Configure a beautiful terminal on Unix with Zsh
published: true
description: See how you can configure a beautiful terminal on Unix with Zsh and Oh-My-Zsh
tags: linux, terminal, oh-my-zsh, zsh
image: https://thepracticaldev.s3.amazonaws.com/i/vt2sh5znt9ks31xn0040.png
cover_image: https://thepracticaldev.s3.amazonaws.com/i/vt2sh5znt9ks31xn0040.png
series: Linux environment for developers
---

I was a long time Windows user, a fairly happy one, but as a developer, there were a lot of things that were missing for me and one of the main was the terminal experience. I'm not a fan of the closed ecosystem of Apple so Linux was an easy choice for me and I switched to Linux almost 3 years ago. I did start out with Ubuntu and later switched to Fedora which is my primary OS now. You can read about my setup [here](https://dev.to/deepu105/my-beautiful-linux-development-environment-2afc)

As a senior developer and open source community lead, I spent a lot of time on the terminal and a terminal with a nice developer experience instantly makes you happier and more productive. The default bash terminal is good for beginners but if you really want a powerful terminal you need something more than bash.

Let's see how to configure a powerful and productive terminal experience. The setup is based on what I have configured on my Fedora machine. The same setup can be recreated on any other Linux distribution, BSD or Mac as well. You just need to use the installation instruction from the tools for the given platform.

![](https://thepracticaldev.s3.amazonaws.com/i/fhwstp9251al105hp899.gif)

Below are the tools we would need for this.

## Zsh

[Zsh](https://www.zsh.org/) is one of the most feature-rich shells for Unix. It works on Linux, Mac, [WSL](https://docs.microsoft.com/en-us/windows/wsl/about), and BSD. There are alternatives like [Fish](https://fishshell.com/) which also offers similar features but I personally like Zsh.

1. Check if Zsh is already installed by running `zsh --version` on your terminal. If not found, install it using your package manager.
    - Fedora: `sudo dnf install zsh`
    - Mac: `brew install zsh zsh-completions`
    - RHEL/CentOS: `sudo yum update && sudo yum -y install zsh`
    - Ubuntu/Debian: `sudo apt install zsh`
    - For other platform refer [this](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH#how-to-install-zsh-in-many-platforms)

2. Now make Zsh your default shell by running `chsh -s $(which zsh)`.
3. Log out and log in back again to use your new default shell.
4. Test that it worked with echo `$SHELL`. Expected result: `/bin/zsh` or similar.
5. Test with `$SHELL --version`. Expected result: `zsh 5.6.2` or similar

Note: If you have installed Zsh for the first time and launch the shell it would prompt you to configure some settings. You can choose to ignore that by hitting `q` as we will configure it later on.

## Oh-My-Zsh

[Oh-My-Zsh](https://ohmyz.sh/) gives the Zsh shell superpowers. Its a framework to manage Zsh configuration. It has plugins and themes for Zsh(A lot of them). 

From their Github page:

> Once installed, your terminal shell will become the talk of the town or your money back! With each keystroke in your command prompt, you'll take advantage of the hundreds of powerful plugins and beautiful themes. Strangers will come up to you in cafés and ask you, "that is amazing! are you some sort of genius?"

Just install it. You need it :)

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## Terminal emulator/multiplexer

Optionally you can use a Terminal emulator that can manage windows and panes for you. 

For Linux I would recommend using [Tilix](https://gnunn1.github.io/tilix-web/), I have been using it for 3 years and its just amazing. 

For Mac, you can use [iTerm2](https://iterm2.com/index.html) which is very popular.

Alternatively, you can also use [tmux](https://github.com/tmux/tmux) if you want something lighter on your existing Terminal app on Linux, BSD or Mac.

## Configuring Zsh

This is the fun part. Let us make the terminal awesome.

### Install plugins
First, let us install some additional plugins that are not bundled with Oh-My-Zsh.

#### [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
Provides auto completion for shell commands. 

Run `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions` to install
#### [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
Provides syntax highlighting on the shell. 

Run `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting` to install

#### [autojump](https://github.com/wting/autojump)
Provides a smarter directory navigation system.
Install autojump for your OS following instructions [here](https://github.com/wting/autojump#automatic).

Now let us configure the `~/.zshrc` file with some settings. [Here](https://gist.github.com/deepu105/9723cb70032eca98ff09d110369af67a) is my full `.zshrc` file. Your mileage may vary.

### Add exports
We will start with some exports.

```bash
export TERM="xterm-256color" # This sets up colors properly

# set shell
export SHELL=/usr/bin/zsh

# If you come from bash you might have to change your $PATH.
export NODE_PATH=$NODE_PATH:$HOME/.npm-global/lib/node_modules
export JAVA_HOME=/usr/java/latest
export PATH=$JAVA_HOME/bin:~/.npm-global/bin:$HOME/bin:/usr/local/bin:$PATH

# Add exports from your profile
source ~/.profile
# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh
```

### Zsh settings

Now we can configure some Zsh specific settings

```bash
DISABLE_MAGIC_FUNCTIONS=true
ZSH_AUTOSUGGEST_MANUAL_REBIND=1
COMPLETION_WAITING_DOTS=true
DISABLE_UNTRACKED_FILES_DIRTY=true
```

### Zsh theme

Now, Let's set up a nice theme. I'm using [**powerlevel10k**](https://github.com/romkatv/powerlevel10k) as my current theme and it's fast and looks great. You can use the default or you can choose any theme you like from the list [here](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes). If you like my theme then follow these instructions. Thanks to [Roman Perepelitsa](https://github.com/romkatv) for some [cool tips](https://github.com/romkatv/powerlevel10k/issues/90#issuecomment-503599702) 

Run `git clone https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k` to install the theme. 

Install a [Powerline font](https://github.com/bhilburn/powerlevel9k/wiki/Install-Instructions#step-2-install-a-powerline-font). I use [Adobe Source Code Pro](https://github.com/adobe-fonts/source-code-pro)

Add the below configuration to the `~/.zshrc` file.
{% raw %}
```bash
# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="powerlevel10k/powerlevel10k"

############ POWERLEVEL THEME SETTINGS ##############
POWERLEVEL9K_MODE='awesome-fontconfig'

POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(dir vcs nvm)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(disk_usage time)

POWERLEVEL9K_PROMPT_ADD_NEWLINE=true
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
POWERLEVEL9K_SHOW_RULER=true
POWERLEVEL9K_RULER_CHAR='─'
POWERLEVEL9K_RULER_BACKGROUND=none
POWERLEVEL9K_RULER_FOREGROUND=237

POWERLEVEL9K_LEFT_SEGMENT_END_SEPARATOR=
POWERLEVEL9K_LEFT_SEGMENT_SEPARATOR=
POWERLEVEL9K_LEFT_SUBSEGMENT_SEPARATOR=' '
POWERLEVEL9K_RIGHT_SEGMENT_END_SEPARATOR=
POWERLEVEL9K_RIGHT_SEGMENT_SEPARATOR=
POWERLEVEL9K_RIGHT_SUBSEGMENT_SEPARATOR=
POWERLEVEL9K_WHITESPACE_BETWEEN_LEFT_SEGMENTS=

POWERLEVEL9K_SHORTEN_DIR_LENGTH=2
POWERLEVEL9K_SHORTEN_STRATEGY="truncate_middle"

POWERLEVEL9K_DIR_SHOW_WRITABLE=true

POWERLEVEL9K_DISK_USAGE_NORMAL_BACKGROUND=none
POWERLEVEL9K_DISK_USAGE_WARNING_BACKGROUND=magenta
POWERLEVEL9K_DISK_USAGE_CRITICAL_BACKGROUND=red
POWERLEVEL9K_TIME_BACKGROUND=none
POWERLEVEL9K_TIME_FOREGROUND=white

POWERLEVEL9K_DIR_HOME_BACKGROUND=none
POWERLEVEL9K_DIR_HOME_SUBFOLDER_BACKGROUND=none
POWERLEVEL9K_DIR_ETC_BACKGROUND=none
POWERLEVEL9K_DIR_DEFAULT_BACKGROUND=none
POWERLEVEL9K_DIR_NOT_WRITABLE_BACKGROUND=none

POWERLEVEL9K_DIR_HOME_FOREGROUND=blue
POWERLEVEL9K_DIR_HOME_SUBFOLDER_FOREGROUND=blue
POWERLEVEL9K_DIR_ETC_FOREGROUND=blue
POWERLEVEL9K_DIR_DEFAULT_FOREGROUND=blue
POWERLEVEL9K_DIR_NOT_WRITABLE_FOREGROUND=red

POWERLEVEL9K_OS_ICON_BACKGROUND="white"
POWERLEVEL9K_OS_ICON_FOREGROUND="blue"

POWERLEVEL9K_VCS_GIT_ICON='%fon %F{040}\uf1d3 '
POWERLEVEL9K_VCS_GIT_GITHUB_ICON='%fon %F{040}\uf09b '
POWERLEVEL9K_VCS_GIT_BITBUCKET_ICON='%fon %F{040}\uf171 '
POWERLEVEL9K_VCS_GIT_GIT_GITLAB_ICON='%fon %F{040}\uf296 '

POWERLEVEL9K_VCS_CLEAN_BACKGROUND=none
POWERLEVEL9K_VCS_UNTRACKED_BACKGROUND=none
POWERLEVEL9K_VCS_MODIFIED_BACKGROUND=none
POWERLEVEL9K_VCS_LOADING_BACKGROUND=none
POWERLEVEL9K_VCS_CLEAN_FOREGROUND="040"
POWERLEVEL9K_VCS_UNTRACKED_FOREGROUND="red"
POWERLEVEL9K_VCS_MODIFIED_FOREGROUND="yellow"
POWERLEVEL9K_VCS_LOADING_FOREGROUND="grey"

POWERLEVEL9K_VCS_UNTRACKED_ICON=$'%{\b?%}'
POWERLEVEL9K_VCS_UNSTAGED_ICON=$'%{\b!%}'
POWERLEVEL9K_VCS_STAGED_ICON=$'%{\b+%}'

POWERLEVEL9K_DIR_NOT_WRITABLE_VISUAL_IDENTIFIER_COLOR=red
POWERLEVEL9K_LOCK_ICON=$'\uf023'

POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX=''
local p='%F{%(?.green.red)}${${${KEYMAP:-0}:#vicmd}:+❯}${${$((!${#${KEYMAP:-0}:#vicmd})):#0}:+❮}%f '
POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="$p"

POWERLEVEL9K_NVM_BACKGROUND=none
POWERLEVEL9K_NVM_FOREGROUND=green
POWERLEVEL9K_NODE_ICON='%fvia %F{green}⬢'

############ END- POWERLEVEL THEME SETTINGS ##############
```
{% endraw %}

### Enable plugins

We can finish off by enabling the plugins and some tweaks

```bash
plugins=(zsh-autosuggestions git docker docker-compose autojump zsh-syntax-highlighting dnf npm)

source $ZSH/oh-my-zsh.sh

```

And that's it we are ready. Start a new terminal session and enjoy.

### Issues & workarounds

If you use Tilix as your terminal emulator, then this might be required for proper pane splitting. Add this to your `~/.zshrc`
```bash
if [[ $TILIX_ID ]]; then
        source /etc/profile.d/vte.sh
fi
```

If you are getting errors from the zsh-completion plugin, you might want to add this to the beginning of your `~/.zshrc`

```bash
# workaround as per https://superuser.com/questions/1222867/zsh-completion-functions-broken
FPATH=$HOME/.oh-my-zsh/plugins/git:$HOME/.oh-my-zsh/functions:$HOME/.oh-my-zsh/completions:/usr/share/zsh/site-functions:/usr/share/zsh/$ZSH_VERSION/functions

export FPATH
```

If you encounter an error from Oh-My-Zsh saying `[oh-my-zsh] Insecure completion-dependent directories detected`, set `ZSH_DISABLE_COMPFIX=true` right before the line `source $ZSH/oh-my-zsh.sh` in your `~/.zshrc` file and restart your session or run `exec zsh`

## Dockerized playground.

If you have Docker installed then you can use the below snippet to try this setup in a sandbox without installing anything or affecting your existing setup.

```bash
docker run -e LANG=C.UTF-8 -e LC_ALL=C.UTF-8 -e TERM=$TERM -it --rm ubuntu bash -uexc '
  apt update && apt install -y git curl zsh autojump && cd /root
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" --skip-chsh --unattended
  git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
  git clone https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
  curl -fsSLO http://bit.ly/Spaceship10kTheme
  echo "source ~/Spaceship10kTheme" >~/.zshrc
  exec zsh'
```

## VSCode Tip

If you are using VSCode like me, you might want to do the below to get the same terminal experience in the integrated VSCode terminal as well.

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

I hope you like it. If you have any question or if you think I missed something please add a comment.

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).