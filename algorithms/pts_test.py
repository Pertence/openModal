import sys

print ('Number of arguments:', len(sys.argv), 'arguments.')
print ('Argument List:', str(sys.argv))

f=open("client/public/results/report.txt","w+")
for i in range(10):
    f.write("This is line %d\r\n" % (i+1))

f.write('Number of arguments: %d arguments' % len(sys.argv))

f.write(str(sys.argv))

f.close() 

sys.stdout.flush()
