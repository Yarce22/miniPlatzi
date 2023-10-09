function videoPlay (id) {
    const urlSecreta = 'https://urlsecretadelvideo.com' + id;
    console.log('Se esta reporduciento el video ' + urlSecreta);
}

function videoStop (id) {
    const urlSecreta = 'https://urlsecretadelvideo.com' + id;
    console.log('Pausammos el video ' + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    
    reproducir () {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}

class Courses {
    constructor ({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this._name = name;
        this.classes = classes
        this.isFree = isFree;
        this.lang = lang
    }
    get name () {
        return this._name;
    }
    set name (nuevoNombre) {
        if (nuevoNombre === "Curso Malo de Programacion Basica") {
            console.error('Nel prro');
        }else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Courses ({
    name: 'Curso Gratis de Programasion Básica',
    isFree: true
})
const cursoDefinitivoHTML = new Courses ({
    name: 'Curso Definitivo de HTML y CSS',
})
const cursoResDesign = new Courses ({
    name: 'Curso responsive design',
    lang: 'english'
})

class learningPaths {
    constructor ({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses; 
    }
}

const escuelaWeb = new learningPaths({
    name: 'Escuela de Desarrollo Web',
    Courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoResDesign
    ]
});
const escuelaData = new learningPaths({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        'Curso fundamental de bases de datos',
        'Curso de PostgreSQL',
        'Curso pratico de SQL'
    ]
});
const escuelaDesign = new learningPaths({
    name: 'Esuela de Diseño',
    courses: [
        cursoProgBasica,
        'Curso Para desarrollar tu creatividad',
        'Curso de uso y manejo de color',
        'Curso de ilustracion en productos digitales'
    ]
});

class Student {
    constructor({
        name,
        email,
        isername,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths
    }) {
        this.name = name;
        this.email = email;
        this.isername = isername;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.isFree) {
            this.approveCourse.push(newCourse);
        } else {
            console.warn('Lo sentimos ' + this.name + ', solo puedes tomar cursos gratis');
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== 'english') {
            this.approveCourse.push(newCourse);
        } else {
            console.warn('Lo sentimos ' + this.name + ', no puedes tomar cursos en ingles');
        }
    }
}

class EspertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
            this.approveCourse.push(newCourse);
    }
}

const juan = new FreeStudent ({
    name: 'JuanDC',
    username: 'JuanDC',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
});

const miguelito = new BasicStudent ({
    name: 'Miguel',
    username: 'miguelfeliz',
    email: 'miguel@miguel.com',
    instagram: 'miguelfeliz',
    learningPaths: [
        escuelaWeb,
        escuelaDesign
    ]
});