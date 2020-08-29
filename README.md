<h1 align="center">Mokusei</h1>
<p align="center">桂花是一个深色的Hexo主题，它致力于提供安静的阅读环境</p>

[Preview](https://blog.shijukun.com)   
[English document](./doc/en/README.md) 

## 安装

```
git clone https://github.com/shijuuu/hexo-theme-mokusei.git themes/Mokusei
```
修改位于博客根目录下的<code>_config.yml</code>内的<code>theme</code>选项值为<code>Mokusei</code>

## 更新

```
cd themes/mokusei
git pull
```

## 特征

* 三栏布局
* 评论系统（Disqus）
* 图标自定义
* 社交账号设置
* 文章目录（滚动监听）
* 专注模式
* 文章封面
* 粒子动画
* 多语言（国际化）

## 多语言

主题支持11个国家的语言，默认语言为中文。
更改语言请修改位于博客根目录下的<code>_config.yml</code>内<code>language</code>选项

## 主题配置

```yaml
# 站点设置
name: 站点名称
description: 站点描述
favicon: 地址栏图标
banner: 头图
rss:  
# 导航设置
menu:
  Home:
    url: /
    icon: home
    iconType: fa
  Archives:
    url: /archives/
    icon: archive
    iconType: fa
# 社交账号设置
account:
  github:
    url: /
    icon: github
    iconType: fa
  twitter:
    url: /
    icon: twitter
    iconType: fa
# 评论系统
comment:
  disqus:
    shortname:  
# 功能开关
ifsparticle:  false   # 是否显示粒子动画
```

## 主题功能配置

### 开启文章目录

编辑文章的MD文件，在头部加上<code>tocifs: true</code> ，如下：

```
---
title: article title
date: 2019-01-21 09:28:48
tocifs: true
---
```

### 设置文章封面

编辑文章的MD文件，在头部加上<code>photos</code>，如下：

```
---
title: article
date: 2019-01-21 09:28:48
photos:
- "image url"
---
```

## 第三方库

* 使用了[jQuery.NiceScroll](https://github.com/inuyaksa/jquery.nicescroll)

## 参考

参考了<code>clean-blog</code> 和 <code>landscape</code> 主题, 感谢！

## 贡献

期待你的贡献！

## 问题提交

[ISSUE](https://github.com/shijuuu/hexo-theme-mokusei/issues/)

## 其他

主题内使用图片素材均来自网络，如有侵犯了您的权利，请告知删除。
