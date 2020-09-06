预览地址：[https://iengu.github.io](https://iengu.github.io)   

### 主题介绍
一个基于hexo系统个人博客主题，全站自适应双栏布局，深色色块板块区分，风格简单干净，整体现代感较强，适合科技、技术、文字类博客使用。本主题内ICON图标使用第三方图标库 [font-awesome](https://fontawesome.com/)。

### 使用指南
* 克隆项目到HEXO博客根目录themes文件夹下
```
git clone --depth=1 https://github.com/iengu/hexo-theme-mokusei.git themes/mokusei
```
* 更改博客配置文件_config.yml, theme选项值设为mokusei
```
_config.yml

- theme: other themes
+ theme: mokusei
```
* 关于代码高亮  (更改博客配置文件_config.yml为以下推荐配置)
```
_config.yml

highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: false
  hljs: true
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```
* 主题内详细配置请见：[wiki](https://github.com/iengu/hexo-theme-mokusei/wiki/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6_config.yml)
* 更新主题
```
cd themes/mokusei
git pull origin master
```



