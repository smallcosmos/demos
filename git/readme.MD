# git commit message 简化规范

** Commit message 包括三个部分：jira【必需】，type【必需】，message【必需】, scope【可选】

### jira(工具自动带出)【必需】

jira号用于将代码与需求保持一致性

写一段代码通常意味着实现一个需求或修复一个缺陷，将代码与需求或缺陷关联对软件生命周期最长的维护阶段来说是一件非常有意义的事

commit message的jira号由工具自动带出

### type(#首字母，工具自动补全)【必需】

type用来说明commit的类别，只允许以下7个标识, 其中feature和fix出现在changelog

1. #f：新功能（#feature）
2. #b：修补bug（#fix）
3. #d：文档（#documentation）
4. #s： 格式（不影响代码运行的变动）(#style)
5. #r：重构（即不是新增功能，也不是修改bug的代码变动）（#refactor）
6. #t：增加测试（#test）
7. #c：构建过程或辅助工具的变动(#chore)

### message【必需】

message用于说明 commit 的描述

1. 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
2. 第一个字母小写
3. 结尾不加句号（.）

### scope【可选】

有必要的话可以说明此次提交的影响面 

### 参考

[参考链接【代码与需求保持一致】](https://yq.aliyun.com/articles/616714)
[参考链接【git message规范】](https://segmentfault.com/a/1190000009048911)