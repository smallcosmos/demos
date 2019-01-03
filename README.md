# demos

my demos

### codeFormat

js、css代码格式化工具

### css-lib

include css reset & nec

### CSS3

my CSS3 demos

### git

git配置以及命令行操作

##### git diff

1. 使用git diff > patch 生成补丁文件，patch可任意命名
2. 使用git apply --stat patch 查看补丁状态
3. 使用git apply --check patch 测试是否可以顺利接受补丁
4. 使用git apply --reject patch 将补丁先行打上，冲突的会生成.rej文件，需要手动处理
5. 使用git apply patch 接受补丁

##### git format-patch

1. 使用git format-patch -n 生成n个补丁，对应最新提交前的n次提交
2. 使用git apply *.patch 接受补丁

**git apply 是一个事务性操作的命令，也就是说，要么所有补丁都打上去，要么全部放弃**

### js-lib

包含了一些原生javascript的兼容性代码

### nicescroll

jQuery插件定制滚动条样式

### nodejs

some nodejs demos



