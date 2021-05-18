import os,json
class Files:
    def __init__(self,path):
        self.path=path

    def fileExists(self):
        if(os.path.isfile(self.path)):
            return True
        return False

    def createFile(self):
        if(self.fileExists()==False):
            try:
                f=open(self.path,"w")
                f.close()
                return True
            except PermissionError:
                Console.error("Permission error while trying to write to {d}".format(self.path))
                #print access to directory is denied
            except:
                Console.error("Unkown exception occurred while writing to {d}".format(self.path))
                #unkown error
        return False

    def createDir(self):
        if(os.path.isdir(self.path)):
            return False
        else:
            os.mkdir(self.path)
            return True
    
    def copyFile(self,src,destination):
        return_code=os.system('cp {src} {dst}'.format(src=src,dst=destination))
        if(return_code!=0):
            Console.error("Could not copy file from {src} to {dst}\n Return code {rC}".format(src=src,dst=destination,rC=return_code))
            return False
        return True

    def copyFolder(self,src,destination):
        return_code=os.system('cp -r {src} {dst}'.format(src=src,dst=destination))
        if(return_code!=0):
            Console.error("Could not copy folder from {src} to {dst}\n Return code {rC}".format(src=src,dst=destination,rC=return_code))
            return False
        return True

class JsonFile:
    def __init__(self,path):
        self.filepath=path

    def loadJson(self):
        data=None
        with open(self.filepath,'r') as f:
            try:
                data=json.load(f)
            except:
                Console.error("Error while reading json file {f}".format(f=self.filepath))
                data=False
        return data

    def exportJson(self,data):
        rslt=False
        with open(self.filepath,"w") as f:
            #try:
            json.dump(data,f,indent=4)
            rslt=True
            #except:
            #    print(data)
            #    Console.error("Error while writing to {f}".format(f=self.filepath))
        return rslt

class Console:
    @staticmethod
    def error(message):
        Console.print(message,'red')
    @staticmethod
    def success(message):
        Console.print(message,'green')
    @staticmethod
    def warning(message):
        Console.print(message,'yellow')
    @staticmethod
    def print(message,color=None):
        print(message)
    @staticmethod
    def log(message):
        print(message)
    @staticmethod
    def userInput(message):
        print('{m}'.format(m=message))
        userInput=input()
        return userInput