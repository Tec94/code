def converter(number):
    ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    thousands = ["M", "MM", "MMM"]
    roman = ""
    while number > 0:
        if number >= 1000:
            roman += thousands[number//1000 - 1]
            number = number%1000
        if number >= 100:
            roman += hundreds[number//100 - 1]
            number = number%100
        if number >= 10:
            roman += tens[number//10 - 1]
            number = number%10
        if number >= 1:
            roman += ones[number//1 - 1]
            number = 0
    return roman


number = int(input("enter number: "))
print(converter(number))
