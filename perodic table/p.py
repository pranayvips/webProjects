f=open("PubChemElements_all.csv")
data=f.read()
f.close()
f = open("a.txt","w")
data = data.split("\n")
res = ["AtomicNumber",#0
 "Symbol",#1
 "Name",#2
 "AtomicMass",#3
 "CPKHexColor",#4
 "ElectronConfiguration",#5
 "Electronegativity",#6
 "AtomicRadius",#7
 "IonizationEnergy",#8
 "ElectronAffinity",#9
 "OxidationStates",#10
 "StandardState",#11
 "MeltingPoint",#12
 "BoilingPoint",#13
 "Density",#14
 "GroupBlock",#15
 "YearDiscovered"#16
 ]
l = []

# num, mass, symbol, name, grp

for i in data:
    i = i.split(",")
    
    try:
        f.write(str((
         i[3],
        i[11],
        i[5],
        i[10],
        i[6],
        i[7],
        i[8],
        i[9],
        i[12],
        i[13],
        i[14],
        i[-1]
        ))+"\n")
    except Exception as e:
        print(e,i)
