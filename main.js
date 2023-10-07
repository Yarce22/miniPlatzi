const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    },
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'Curso de introduccion a los videojuegos',
        'Curso de creacion de personajes'
    ]
);