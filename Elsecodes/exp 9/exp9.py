# for i in range(26):
#     filename=chr(ord("A")+i)+".txt"
#     f=open(filename,"w")
#     f.close()
#     print(filename,"Created")
# def count_the():
#     filename = open("story.txt","r")
#     countthe = 0
#     lines = filename.read()
#     Allwords = lines.split()
#     for word in Allwords:
#         if word in ["the","The"]:
#             countthe += 1
#     print(countthe)
#     filename.close()
# count_the()
from cv2 import distanceTransform


def get_dist_scale(enteredVal):

  while True:

    try:

      enteredInt = int(enteredVal)

      assert (enteredInt <= int(9)), "Value greater than 9"

      assert (enteredInt >= int(1)), "Value less than 1"

      return enteredInt      

    except ValueError:

      print("Invalid Input, try again\n")

      enteredVal = input("Enter distance parameter: \n1: for Manhattan\n2: for Euclidean\n>=3: for Minkowski\n")

      return get_dist_scale(enteredVal)

    except AssertionError:

      print("Value outside 1-9.\n")

      enteredVal = input("Enter distance parameter: \n1: for Manhattan\n2: for Euclidean\n>=3: for Minkowski\n")

      return get_dist_scale(enteredVal)



enteredVal = input("Enter distance parameter: \n1: for Manhattan\n2: for Euclidean\n>=3: for Minkowski\n")
if __name__=="__main__":
    distanceType = get_dist_scale(enteredVal)
    # print(distanceType)
