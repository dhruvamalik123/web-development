class Parentclass :
    def parentmethod(self) :
        print("This is parent class")
class Childclass(Parentclass) :
    def childmethod(self) :
        print("This is child class")
class Ans :
    @staticmethod
    def main( args) :
        obj1 = Parentclass()
        obj2 = Childclass()
        obj1.parentmethod()
        obj2.childmethod()
        obj2.parentmethod()
if __name__=="__main__":
    Ans.main([])