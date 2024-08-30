#A function is a chunk of code that only runs when it is called. Sometimes you want to write out some code, but aren't ready for it to run yet. That's where functions are useful.
#Functions are defined by using the abbreviation 'def', followed by what you want the function to be named, followed by parenthesis.
    #Example:
def weather():
    print("It's a soggy day outside!")
#The indented code will not run until the function that it is part of is called..
weather()
#This is useful to write and store code and set it to trigger at a different time.
#It's also helpful because you can define a function for code that you're using a lot in your program, then you can just call that function whenever you need to run that code.
    
    #Local Scope Variables
#Sometimes you want to create a variable inside of a function. This is called a Local Variable, and it can only be used inside of that function.
    #Example:
favorite = "I love juice"
def myfruit():
    fruit = "apple"
    print(fruit)
myfruit()
print(favorite)
#In this example, fruit is a local variable. It can only be called by the myfruit function.
    
    #Global Scope Variables
#Variables that are created outside functions are called global variables, and can be called by anything. In the above example, favorite is a global variable.
#If you want to create a variable inside of a function, but have it be global, you can use the 'global' keyword.
    #Example:
favorite = "I love juice"
def myfruit():
    global fruit
    fruit = "apple"
myfruit()
print(favorite)
print(fruit)
#To use this, though, you MUST call the function that the variable is created in before you attempt to use the variable outside of the function itself. If you don't, you will be given an error.

    #Function Parameters
#Function Parameters are what go inside of the parentheses of the function declaration. These parameters can then be used inside of the function.
    #Example:
def weather(type):
    print("It's a soggy day outside because it is " + type)
weather("") #Inside the parentheses, you put the Argument.

    #Arguments
#To determine what the paremeter is, you say so when you call the function. This is called the argument of a function.
    #Example:
def weather(forecast):
    print("It's a soggy day outside because it is " + forecast)
weather("raining")
#'forecast' is the paremeter, and it is defined as "raining" by the argument when the function weather() is called.
#You can call a function multiple times with different arguments for the same parameter.
    #Example:
def weather(forecast):
    print("It's a soggy day outside because it is " + forecast)

weather("raining")
weather("snowing")
weather("drizzling")

    #Multiple Function Parameters:
#You are able to list multiple parameters to modify functions.
    #Example:
def gifts(first, second):
    print("Your first choice for a birthday gift would be " + first)
    print("Your second choice for a birthday gift would be " + second)

gifts("bike", "basketball")
gifts("speaker", "tickets")
#You can have more than 2 parameters for a funcion, too.
    #Example:
def multiply(first, second, third):
    print(first * second * third)
multiply(2, 2, 2)