+++
title = 'Two things you need(?) to do when you get your reMarkable 2'
date = 2024-01-02T12:14:06+08:00
author = "xyji"
searchHidden = false
description = "This post shows font installation and black bar text fix"
tags = ["rm2", "fix"]
+++

# Useful ReMarkable 2 Fixes

This post shows two things that you probably need to do when you get one
ReMarkable 2. Hope this will save you some time.

## Chinese Font Installation

By default, Remarkable 2 does not have a built-in Chinese/Japanese/Korean font
support. Therefore, we need to manually install them.

Luckily, Remarkable 2 is Linux-based eReader with **built-in** ssh-server
support. This means that we can login into the shell of Remarkable 2 and
install the fonts by ourselves.

Here is the step by step procedure.

### Login the shell of your rM2

Open the **menu** of your rM2 and open **Settings**. In the **Help** section,
click on the **About**. Click on the **Copyrights and licenses**.

You will see the IP Address and the root password of your rM2 in the page.

Then you could login your rm2 using ssh.
```shell
ssh root@<your rm2 IP>
```

### Install the fonts

The following codes install the fonts for Chinese-simplified and Chinese-traditional.
For more info, see [here](https://www.reddit.com/r/RemarkableTablet/comments/m8s74a/easily_install_chinese_japanese_or_korean_fonts/).

```shell
cd /tmp;
wget https://files.davisr.me/projects/rcu/download-fontrmpkg/NotoSansCSFont.rmpkg
wget https://files.davisr.me/projects/rcu/download-fontrmpkg/NotoSansCTFont.rmpkg
chmod +x *.rmpkg
./NotoSansCSFont.rmpkg --install
./NotoSansCTFont.rmpkg --install
rm -f *.rmpkg
```

## Fix Blank/Black Bar Text

Sometimes, for **some(not all)** epub format files, reMarkable 2 will render the text with blank black boxes.
The root cause for this is that rM2 does not support some type of the css tags used by the epub book.

To solve this, you can do the following things.

### Download calibre

[Calibre](https://calibre-ebook.com/) is a cross-platform ebook manager that allows you to edit and manager your ebooks.
You can fix your "wrecked" ebook with it!

### Use a usable style sheet

- Import a ebook that is working fine on your rM2(`book1`) and the ebook that you want to fix(`book2`).

- Use the **edit book** functionality of **Calibre**, copy and replace the **stylesheet**(the one under style section when you click **edit book**)
  of `book2` using `book1`'s.

Import the edited ebook(`book2`) to your rM2 and the book will be rendered ok.

