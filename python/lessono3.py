#string data type

# literal assignment
first = "Dave"
last = "Gray"

# constructor function
# first = str("Dave")
# last = str("Gray")

#print(type(first))
#print(type(first) == str)
#print(isinstance(first, str))#isinstance is used to check the type of object

#concatenation
fullname = first + " " + last
print(fullname)

#casting a number to a string
decade = str(1980)#decade is a string now , 
#the work of decade and the work of str() is to convert the number to a string
print(type(decade))#printing the type of decade
print(decade)

statement = "I like rock music from the " + decade + "s."
print(statement)

