# 后端部署方式

### 远程连接服务器主机

使用本机命令行工具，输入：

`ssh Administrator@182.92.243.158`

输入密码；

进入远程主机界面，打开路径：

`C:\Users\Administrator\Documents\Server\`

新增本模块代码文件夹 `mkdir [ModuleName]`

### 复制本地文件至远程服务器

在本机执行：

`scp -r [后端文件夹] Administrator@182.92.243.158:C:\\Users\\Administrator\\Documents\\Server\\[ModuleName]`

将本地文件夹复制至远程服务器

### 安装与运行

在远程服务器本模块后端目录下执行：

`npm install`

`node [servername].js`

测试运行本模块的后端代码。

测试无问题后，使用`pm2`工具对后端项目进行部署（已执行 `npm install -g pm2` ）：

`pm2 start [servername].js`

查看所有已启动项目：

`pm2 list` 其中`Name`为项目名

重启：

`pm2 restart [Name]`

停止：

`pm2 stop [Name]`

删除：

`pm2 delete [Name]`



## 其他问题

1.使用pip工具

`py -m pip install [PackageName] -U pip` 

2.使用python运行

`py [FileName].py`

