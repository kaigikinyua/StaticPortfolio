import sys,os
from utils import Files,JsonFile,Console
class MiniProjectConfigs:
    rootDir="./mini/mini_project_test_dir"
    genericStatic='./mini/genericstatic'
class MiniProject:
    def __init__(self):
        pass
    def listprojects(self):
        allProjects=os.listdir(MiniProjectConfigs.rootDir)
        Console.log(allProjects)
        
    def createMiniProject(self,projectname):
        #check if name is already taken
        projectDir=MiniProjectConfigs.rootDir+'/'+str(projectname)
        if(os.path.isdir(projectDir)):
            Console.error("Project Name is already in use")
            return False
        f=Files(projectDir)
        f.createDir()
        setUpProject=[
            {"type":"file","name":"/{n}.html".format(n=projectname)},
            {"type":"folder","name":"/static"},
            {"type":"folder","name":"/static/css"},
            {"type":"folder","name":"/static/css/main"},
            {"type":"folder","name":"/static/js"},
            {"type":"folder","name":"/static/js/libs"},
            {"type":"folder","name":"/static/images"},
        ]
        #creating generic directories and files
        for f in setUpProject:
            created=False
            if(f["type"]=="file"):
                gfile=Files(projectDir+f["name"])
                created=gfile.createFile()
            elif(f["type"]=="folder"):
                gfolder=Files(projectDir+f["name"])
                created=gfolder.createDir()
            else:
                Console.error("Unkown type '{n}'".format(n=f["type"]))
            if(created!=True):
                Console.error("Error while creating {t} in the destination {d}".format(t=f["type"],d=projectDir))
        #copy generic static files[fontawsome[all.min.css,webfonts],react,babel,vue]
        genericLibs=[
            #{"optional":True/False,"src":"base dir is MiniProjectConfigs.genericStatic","destination":"base dir is projectDir"}
            {"optional":False,"src":"/css/base.scss","destination":"static/css"},
            {"optional":False,"src":"/fonts/all.min.css","destination":"static/css/main/"},
            {"optional":True,"src":"/js/vue.js","destination":"static/js/libs/vue.js"},
            {"optional":True,"src":"/js/react.js","destination":"static/js/libs/react.js"},
            {"optional":True,"src":"/js/react-dom.js","destination":"static/js/libs/react-dom.js"},
            {"optional":True,"src":"/js/babel.js","destination":"static/js/libs/babel.js"},
            #edge case for webfonts directory
        ]
        for genLib in genericLibs:
            if(genLib["optional"]==True):
                ans=input("Copy {l} to project {pname} \nY/N \n".format(l=genLib["src"],pname=projectname))
                if(ans.lower()=='y'):
                    copyfile=Files(genLib["src"])
                    copyfile.copyFile(MiniProjectConfigs.genericStatic+genLib["src"],projectDir+"/"+genLib["destination"])
            else:
                copyfile=Files(genLib["src"])
                copyfile.copyFile(MiniProjectConfigs.genericStatic+genLib["src"],projectDir+"/"+genLib["destination"])

    def publishMiniProject(self):
        pass

    def deleteMiniProject(self):
        pass

def commandLine(args):
    actionArg=["createproject","listprojects","editproject","publishproject","deleteproject"]
    if(args[0].lower() in actionArg):
        miniP=MiniProject()
        if(args[0].lower()==actionArg[0]):
            pname=input("Type the project name\n")
            miniP.createMiniProject(str(pname))
        elif(args[0].lower()==actionArg[1]):
            miniP.listprojects()
    else:
        Console.error("Command not found")
    

if __name__=="__main__":
    commandLine(sys.argv[1:len(sys.argv)])