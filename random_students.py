# Random student picker
students = [
   'Rob',
   'Christopher',
   'Jim',
   'Jason',
   'Brian',
   'Brandon',
   'Zac',
   'JR',
   'Greg',
   'Ron',
   'Katie',
   'Sean',
   'Gbenga',
   'Khanh',
   'Connor',
   'Cody',
   'Michael',
   'Matt'
]

import random

def get_student():
    #Get a random student
    rand_student_index = random.randint(0, len(students) - 1)
    current_student = students[rand_student_index]
    # remove a student after he/she has been picked
    students.remove(current_student)
    return current_student

while (len(students) > 0):
   student1 = get_student()
   student2 = get_student()
   print "%s is paired with %s" % (student1, student2)