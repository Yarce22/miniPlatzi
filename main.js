const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
    ],
    apobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    },
};