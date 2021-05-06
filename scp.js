// JavaScript source code
var prin = [
    "El señor de los anillos",
    "El extraño mundo de Jack",
    "Shrek",
    "Moana",
    "Star wars",
    "Charlie y la fabrica de chocolates",
    "Iron Man",
    "Harry potter",
    "Contracara",
    "La naranja mecánica",
    "Batman",
    "Piratas del caribe",
];

var desc = [
    "La trilogía cinematográfica de El Señor de los Anillos, basada en la novela homónima del escritor británico J. R. R. Tolkien. ",
    "The Nightmare Before Christmas es una película de fantasía oscura animada en 1993, dirigida por Henry Selick, producida y concebida por Tim Burton. ",
    "Shrek es una película animada estadounidense de 2001, dirigida por el neozelandés Andrew Adamson y la estadounidense Vicky Jenson. ",
    "Moana es una película de animación por computadora de Walt Disney Animation Studios que se estrenó el 23 de noviembre de 2016 en Estados Unidos. ",
    "Star Wars, conocida también en español como La guerra de las galaxias,​ es una franquicia compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970 ",
    "Charlie y la fábrica de chocolate (Charlie and the Chocolate Factory en inglés) es una película estrenada en el año 2005, dirigida por Tim Burton.  ",
    "Iron Man titulada Iron Man: el hombre de hierro en Hispanoamérica, es la primera entrega del Universo cinematográfico de Marvel. ",
    "La serie cinematográfica de Harry Potter comprende películas basadas en Harry Potter, una serie de novelas juveniles escritas por la autora británica J. K. Rowling y protagonizadas por el mago ficticio del mismo nombre. ",
    "Face/Off es una película de acción dirigida por John Woo de 1997 y protagonizada por John Travolta y Nicolas Cage. ",
    "A Clockwork Orange (La naranja mecánica en Hispanoamérica y España) es una película angloestadounidense de ciencia ficción de 1971, producida y dirigida por Stanley Kubrick. ",
    "The Dark Knight (titulada El caballero oscuro en España y Batman: El caballero de la noche en Hispanoamérica) es una película de superhéroes británico-estadounidense de 2008 dirigida por Christopher Nolan. ",
    "Piratas del Caribe (en inglés, Pirates of the Caribbean) es el título de una franquicia cinematográfica de aventura fantástica y piratas, producida por Jerry Bruckheimer. ",
    "Hombres de negro1​  es una película de ciencia ficción del año 1997 protagonizada por Tommy Lee Jones y Will Smith. Narra la historia de una organización secreta que vigila la actividad alienígena en la Tierra."
];

var mas = [
    "Comprende tres películas épicas de fantasía, acción y aventuras: El Señor de los Anillos: la Comunidad del Anillo (2001), El Señor de los Anillos: las dos torres (2002) y El Señor de los Anillos: el retorno del Rey (2003).",
    "Cuenta la historia de Jack Skellington, el Rey de la Ciudad de Halloween, que tropieza a través de un portal a la Ciudad de la Navidad y decide celebrar la fiesta.",
    "La película ganó el Óscar a la mejor película animada y participó en la selección oficial del Festival de Cine de Cannes de 2001.​ Forma parte del AFI's 10 Top 10 en la categoría películas de animación.​ En 2020, fue seleccionada para su preservación en el National Film Registry de la Biblioteca del Congreso de los Estados Unidos.",
    "Se ha dicho que la historia se desarrollará en unas islas en el Océano Pacífico, la protagonista será la joven Moana, una chica aventurera que se adentrará en el Océano.",
    ", y producidas y distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía metafísico y omnipresente9​ que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo y el odio.",
    "Es la segunda adaptación cinematográfica de la novela homónima escrita por Roald Dahl en 1964, y está protagonizada por Johnny Depp como Willy Wonka y Freddie Highmore como Charlie Bucket. ",
    "Cuando Stark es capturado en territorio enemigo, construye una armadura de alta tecnología para escapar. Ahora, él está en una misión para salvar el mundo como un héroe que no nació para ser diferente a cualquier otro.",
    "Se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.",
    "La misma cuenta cómo un agente del FBI asume la apariencia física de su peor enemigo con el objetivo de parar un plan terrorista, y al mismo tiempo cómo el enemigo luego se convierte en él.",
    "La película se caracteriza por contenidos violentos que facilitan una crítica social en psiquiatría, el pandillerismo juvenil, las teorías conductistas en psicología y otros tópicos ubicados en una sociedad futurista distópica.",
    "Basada en el personaje Batman de DC Comics, la película es la segunda parte de la serie fílmica Batman de Nolan y una secuela de Batman Begins de 2005, protagonizada por Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal y Morgan Freeman.",
    "Esta saga de películas se basa libremente en mitos y leyendas de los mares, como el pirata Davy Jones y su tripulación fantasmal a bordo de El holandés errante; la mitología griega que incluye dioses como Poseidón, la ninfa Calipso, monstruos como el Kraken, sirenas, brujería y la vida de los piratas de la época.",
    "La película es una adaptación de la historieta homónima de Lowell Cunningham. A su vez, el título hace referencia a los Hombres de negro, unos personajes habituales en las teorías de la conspiración que supuestamente serían los encargados de ocultar a los ciudadanos la presencia de extraterrestres en la Tierra."
];


window.onload = function() {

    var crd = "<div class='card-columns'>";

    for (i = 0; i < 13; i++) {

        crd += "<div class='card'>";
        crd += "<img class='card-img-top' src='img/img" + i + ".jpg'>";
        crd += "<div class='card-body'>";
        crd += "<h5 class='card-title'>" + prin[i] + "</h5>";
        crd += "<p class='card-text'>" + desc[i] + "</p>";
        crd += "<div id='demo" + i + "' class='collapse'>";
        crd += mas[i];
        crd += "</div>";
        crd += "<button type='button' class='btn btn-primary mt-5' data-toggle='collapse' data-target='#demo" + i + "'>Leer mas</button>";
        crd += "</div>";
        crd += "</div>";

    }

    crd += "</div>";
    document.getElementById("salida").innerHTML = crd;
}