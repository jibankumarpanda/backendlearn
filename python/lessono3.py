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

#multiple lines
multiline = '''
Hey, how are you?                                

I was just checking in.    
                                All good?
'''
print(multiline)

#Escaping special chararacters
sentence = 'i\'m back at work!\tHey!\n\nWhere\'s this at\\located?'
print(sentence)

#string Methods
print(first)
print(first.lower())
print(first.upper())
print(first)
print(first.strip())

print(multiline.title())
print(multiline.replace("I", "We"))
print(multiline)

print(len(multiline))
multiline += ""
multiline = "                   "+multiline
print(multiline)
print(len(multiline))
print(len(multiline.strip()))
print(len(multiline.lstrip()))
print(len(multiline.rstrip()))
print(multiline.strip().capitalize())

print("")

#build a menu
title = "menu".upper()
print(title.center(20, "*"))
print("Coffee".center(16, "*"))
print("Coffe")