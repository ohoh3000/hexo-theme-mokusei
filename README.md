<h1 align="center">mokusei</h1>
<p align="center"></p>
<p align="center">简单纯净的深色双栏响应式博客主题，运行在Hexo系统下</p>

[预览](https://iengu.github.io)   

## 安装

```
git clone --depth=1 https://github.com/iengu/hexo-theme-mokusei.git themes/mokusei
```
```
_config.yml

- theme: other themes
+ theme: mokusei
```

## 更新

```
cd themes/mokusei
git pull origin master
```

## 特征

* 图标自定义
* 社交账号设置
* 粒子动画
* 多语言（国际化）

## 配置

```yaml
# 站点设置
name: mokusei  
description: This is a hexo theme 
favicon: 
banner: /imgs/head.jpg
rss: 

# 导航栏
menu:
  主页:
    url: /
    icon: home
    iconType: fa
  归档:
    url: /archives/
  关于:
    url: none
    child:
        关于本站:
          url: /about

# 社交图标
account:
  github:
    url: /github
    icon: github
    iconType: fa
  mail:
    url: /mail
    icon: envelope
    iconType: fa
  twitter:
    url: /twitter
    icon: twitter
    iconType: fa

# 以下配置中的1为开启，0为关闭

# 布局
layout:
  columnPosition: 1 #边栏放置位置，默认右边，0为左边
  headSearchIcon: 1 #导航栏是否显示搜索图标

# 边栏小工具
toolbar:
  displaySwitch: 1 #是否显示边栏
  # 边栏各个小工具排列顺序，数字越大排在后面
  position:
    searchWidget: 0
    postWidget: 1
    tagsWidget: 2
    categoriesWidget: 3
  # 边栏各个小工具是否显示开关
  display:
    searchWidget: 0
    postWidget: 1
    tagsWidget: 1
    categoriesWidget: 1

# 文章相关
article:
  dateSwitch: 1 #是否显示文章日期
  categoriesSwitch: 1 #是否显示文章分类
  tagSwitch: 1 #是否显示文章标签

# disqus评论
comment:
  disqus:
    shortname: 

# 粒子特效开关
ifsparticle:  1

```

## 特性配置

### 导航栏二级下拉菜单（child关键字）
```
menu:
  关于:
    url: none
    child:
        关于本站:
          url: /about
```
### 图标自定义
主题图标使用第三方图标库 [font-awesome](https://fontawesome.com/)，更改主题配置选项内的<code>icontype</code>选项，值为对应在font-awesome的图标名。

## 贡献

期待你的贡献！

## 问题提交

[ISSUE](https://github.com/iengu/hexo-theme-mokusei/issues)

