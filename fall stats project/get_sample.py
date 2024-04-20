import pandas as pd
import random

df2 = pd.read_excel('fall stats project//11th.xlsx')
df = pd.read_excel('fall stats project//12th.xlsx')

random_numbers = random.sample(range(130), 40)
population = []

for number in random_numbers:
    row = df.iloc[number]
    last_name = row['Last Name']
    first_name = row['First Name']
    population.append((first_name, last_name, number+2))

additional_info = random.sample(population, 20)
no_additional_info = [item for item in population if item not in additional_info]
# additional_info_names = [f"{person[0]} {person[1]}" for person in additional_info]
# no_additional_info_names = [f"{person[0]} {person[1]}" for person in no_additional_info]

random_numbers = random.sample(range(127), 40)
population = []

for number in random_numbers:
    row = df2.iloc[number]
    last_name = row['Last Name']
    first_name = row['First Name']
    population.append((first_name, last_name, number+2))

additional_info += random.sample(population, 20)
no_additional_info += [item for item in population if item not in additional_info]
additional_info_names = [f"{person[0]} {person[1]}" for person in additional_info]
no_additional_info_names = [f"{person[0]} {person[1]}" for person in no_additional_info]

print(additional_info_names)
print(no_additional_info_names)