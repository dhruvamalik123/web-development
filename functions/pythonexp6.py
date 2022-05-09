from random import shuffle

class Card:
    def __init__(self, Suite, Val_ue):
        self.Suite = Suite
        self.Val_ue = Val_ue
    def __repr__(self):
        return "(%s,%s)" %(self.Val_ue, self.Suite)
class Deck:
    def __init__(self):
        Suites = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        Val_ues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.Car_ds = [Card(Suite, Val_ue) for Suite in Suites for Val_ue in Val_ues]
        for i in self.Car_ds:
            print(i)
    def __repr__(self):
        return "Cards that are left in the deck: {}".format(len(self.Car_ds))   
    def shuffle(self):
        if len(self.Car_ds) == 52:
            shuffle(self.Car_ds)
            return self.Car_ds
        else:
            return("Cant shuffle as some cards have been dealt, can shuffle only when deck is full")
    def deal(self):
        if len(self.Car_ds) != 0:
            return self.Car_ds.pop()
        else:
            return("All Cards have been dealt successfully")
d=Deck()
print("Deck created")
print("\n \nShuffling the deck")
x=d.shuffle()
for i in x:
    print(i)
a=int(input("\n \nPress 1 and enter to deal the cards \n"))
while(a==1):
    print(d.deal())
    print(d)
    a=int(input("again press 1 and enter if you want to deal,or enter anyother key to exit \n"))
print(d.shuffle())
