# for i in range(26):
#     filenamename=chr(ord("A")+i)+".txt"
#     f=open(filenamename,"w")
#     line="Hello , i am a filename"
#     f.write(line)
#     f.flush()
#     f.close()
#     print(filenamename,"Created")
def counting_lines():
    filename = open("story.txt","r")
    countlines=0
    for lines in filename:
        if lines[0]!='T':
            countlines+= 1
    filename.close()
    print("No of lines not starting with 'T'=",countlines)

counting_lines()
