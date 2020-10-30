import pandas as pd
from jinja2 import Environment, FileSystemLoader
from datetime import datetime

env = Environment(loader=FileSystemLoader('templates'))
template = env.get_template('./testimonial.md.j2')

df = pd.read_csv('/Users/patrickfalconer/Downloads/forms.csv')

testimonial_path = './src/pages/testimonials/'

for index, row in df.iterrows():
  name = row['NAME and GRAD. YEAR?'].replace(' ', '-')
  name  = name.replace('(', '-')
  name  = name.replace(')', '-')
  name  = name.replace(',', '-')
  name  = name.replace('/', '')
  name  = name.replace("'", '')
  print(name)
  date_object = datetime.strptime(row['Timestamp'], "%m/%d/%Y %H:%M:%S")
  simple_date = date_object.strftime("%Y-%m-%d")
  file_name = '{}-{}.md'.format(simple_date, name)
  data = {
    'name': row['NAME and GRAD. YEAR?'],
    'date': simple_date,
    'grad_class': row['NAME and GRAD. YEAR?'],
    'program_means': row['What does the program mean to you?'],
    'choose_msu': row['Why did you choose MSU?'],
    'life_lesson': row['Biggest life-lesson you are learning/learned from MSU?'],
  } 
  output_from_parsed_template = template.render(data=data)

  # to save the results
  with open("{}-{}".format(testimonial_path,file_name), "w") as fh:
      fh.write(output_from_parsed_template)


