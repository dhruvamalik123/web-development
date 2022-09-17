import sys
 
# To find the power of a prime
# p in factorial N
def findPowerOfP(N, p):
    count = 0
    r = p
    while (r <= N):
         
        # calculating floor(n/r)
        # and adding to the count
        count += int(N / r)
 
        # increasing the power of p
        # from 1 to 2 to 3 and so on
        r = r * p
     
    return count
 
# returns all the prime factors of k
def primeFactorsofB(B):
     
    # vector to store all the prime factors
    # along with their number of occurrence
    # in factorization of B'
    ans = []
    i = 2
 
    while(B!= 1):
        if (B % i == 0):
            count = 0
            while (B % i == 0):
                 
                B = int(B / i)
                count += 1
 
            ans.append((i, count))
 
        i += 1
     
    return ans
 
# Returns largest power of B that
# divides N!
def largestPowerOfB(N, B):
    vec = []
    vec = primeFactorsofB(B)
    ans = sys.maxsize
     
    # calculating minimum power of all
    # the prime factors of B
    ans = min(ans, int(findPowerOfP(N, vec[0][0]) /
                                       vec[0][1]))
 
    return ans
 
# Driver code
if __name__ == '__main__':
    print(largestPowerOfB(96, 2))
    print(largestPowerOfB(6, 9))