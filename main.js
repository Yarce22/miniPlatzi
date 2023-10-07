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

// prototipos con la sintaxis de clase
class Student2 {
    constructor (name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprpobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2(
    'Miguel', 
    28, 
    [
        'Curso de analisis de negocios para ciencias de datos',
        'curso de principios de visualizacion de datos para BI'
    ]
);