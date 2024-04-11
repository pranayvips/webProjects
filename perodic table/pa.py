f=open("a.txt")
data=f.read().split("\n")
f.close()
f=open("k.txt",'w')
for i in data:
    f.write("""<div class="ele">\n<div class="img"></div>\n<div class="info">""")
    i=i.split(",")
    for j in i:
        f.write(j[1:-1])
    f.write("</div>\n</div>")
f.close()