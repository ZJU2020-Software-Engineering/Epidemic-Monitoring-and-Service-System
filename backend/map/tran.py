f = open("en2zh.txt",encoding='UTF-8')
fres = open("zh2en.txt",'w')
a = f.readlines()
res=[]
for i in a:
    c = i.split(':')
    if len(c)>1:
        res.append(c[1]+':'+c[0]+'\n')
fres.writelines(res)