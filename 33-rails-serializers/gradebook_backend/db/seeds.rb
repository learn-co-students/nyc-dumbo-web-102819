reina = Teacher.create(name: "Reina", subject: "Physical Education")
imade = Teacher.create(name: "Imade", subject: "Calculus")

sqDancing = Classroom.create(name: "Square Dancing", teacher: reina)

Assignment.create(name: "Do-see-do", classroom: sqDancing)
sqDancing.assignments.create(name: "Swing around your partner")




calc1 = imade.classrooms.create(name: "Calc 101")
Assignment.create(name: "Power Rule", classroom: calc1)

calc2 = Classroom.create(name: "Integrals", teacher: imade)
Assignment.create(name: "MVT", classroom: calc2)
