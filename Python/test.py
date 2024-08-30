#def duplicate_count(text):
#    duplicates = 0
#    num_of_chars = {}
#    text = text.lower()
#    for char in text:
#        if char in num_of_chars:
#            num_of_chars[char] = 2
#        else:
#            num_of_chars[char] = 1
#    
#    for char in num_of_chars:
#        if num_of_chars[char] > 1:
#            duplicates += 1
#    print(duplicates)
#
#duplicate_count("Indivisibilities")


#def solution(s):
#    sol = []
#    for i in s:
#        if i != i.upper():
#            sol.extend(i)
#        elif i == i.upper():
#            sol.extend(" ")
#            sol.extend(i)
#    done = ''.join(sol)
#    print(done)
#
#solution("helloWorld")
#solution("camelCase")
#solution("breakCamelCase")


#def array_diff(a, b):
#    if b in a:
#        print([x for x in a if x not in b])
#
#array_diff([1, 2, 2, 3], [2])


# names = {
#     1: "Georgie",
#     2: "Melanie",
#     3: "Jonathan",
#     4: "Martin",
#     5: "Tim",
#     6: "Sasha",
#     7: "Daisy",
#     8: "Basira",
#     9: "Elias",
#     10: "Peter",
# }
# print(names)
#
# entities = {
#     1: "The Eye",
#     2: "The Buried",
#     3: "The Corruption",
#     4: "The End",
#     5: "The Desolation",
#     6: "The Vast",
#     7: "The Lonely", 
#     8: "The Stranger",
#     9: "The Spiral",
#     10: "The Hunt",
#     11: "The Slaughter",
#     12: "The Web",
#     13: "The Extinction",
#     14: "The Flesh",
#     15: "The Dark",
# }
# print(entities)


