//创建本地仓库(repository)，将会在文件夹下创建一个 .git 文件夹，.git 文件夹里存储了所有的版本信息、标记等内容
git init myObject
//取消和远程仓库关联起来
git remote rm origin
//把本地仓库和远程仓库关联起来。如果不执行这个命令的话，每次 push 的时候都需要指定远程服务器的地址
git remote add origin git@github.com:winter1991/helloworld.git 

//配置用户名，上传本地 repository 到服务器上的时候，在 Github 上会显示这里配置的上传者信息
git config --global user.name "hzlinxingjian"
//配置邮箱
git config --global user.email "hzlinxingjian@corp.netease.com"
//查看配置列表
git config --list

//clone by https
git clone [-b branchName] https://github.com/smallcosmos/demos.git
//or clone by ssh
git clone [-b branchName] git@github.com:smallcosmos/demos.git
/******* addition(config this, if git clone failed) ***********/
cd ~/.ssh
ssh-keygen -t rsa -C "hzlinxingjian@corp.netease.com"
//add id_rsa.pub into github and create file in /.ssh named config, content:
    Host github.com
    User hzlinxingjian
    Hostname ssh.github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    Port 443
//test
ssh -T git@github.com

//
git log --pretty=oneline filename
git show XXXXXXXXXXXXXXXXXXXXXXX

git reset --hard

//添加修改文件到暂存区
git add ./
//删除暂存区文件
git rm <filename>
//恢复文件状态
git reset HEAD <filename>
//恢复文件 
git checkout -- <filename>
//提交暂存区文件
git commit -m "commit info"
//提交暂存区之外，还提交changes but not updated文件
git commit -a -m "commit info"
//取消提交
git commit --amend
//
git push
//合并指定commit号到当前分支
git cherry-pick cfebxxxx
//删除未追踪文件untracked files
git clean -f
git clean -df

// working tree内回滚
git checkout file1
git checkout file1 file2 file3
git checkout .
// index(stage)内回滚
git status
git reset HEAD file1
// commit回滚
git reset HEAD^
git reset --soft HEAD~2
git status
git reset HEAD file1

// test git merge, this is master
