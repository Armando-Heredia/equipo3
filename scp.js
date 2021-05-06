// JavaScript source code
var prin = [
    "Anna",
    "Aurora",
    "Mulan",
    "Alicia",
    "Blanca Nieves",
    "Rapunzel",
    "Jasm\u00EDn",
    "Ariel",
    "Cenicienta",
    "Tiana",
    "M\u00E9rida",
    "Bella",
    "Elsa",
];

var desc = [
    "Anna es una feliz y despreocupada princesa. ",
    "Criada oculta en el bosque bajo la tutela de 3 hadas. ",
    "Procedente de China, Mulan es la m\u00E1s divertida e intr\u00E9pida de las Princesas Disney. ",
    "Alicia es una ni\u00F1a linda, dulce, amable y hermosa que vive en la era de la Inglaterra victoriana. ",
    "Una hermosa princesita que al intentar escapar de la reina malvada. ",
    "Naci\u00F3 como princesa, y fue retirada de la custodia de sus padres cuando era un beb\u00E9. ",
    "Jasm\u00EDn, de raza árabe, una muchacha de belleza ex\u00F3tica e ind\u00F3mita.",
    "Ariel, una sirena adolescente, sue\u00F1a con vivir en la superficie.",
    "Cenicienta vive con su madrastra y sus dos hermanastras. ",
    "Su historia se desarrolla en un per\u00EDodo de tiempo que es m\u00E1s cercano a nuestros d\u00EDas (Nueva Orleans en los a\u00F1os 1920).",
    "Al inicio M\u00E9rida se comporta como una adolescente mimada. ",
    "Bella es una joven muy hermosa espiritual e intelectualmente. ",
    "Elsa, es portadora de poderes criog\u00E9nicos."
];

var mas = [
    "Su hermana Elsa lucha por tratar de liberarse a s\u00ED misma de sus miedos, con la ayuda de su hermana peque\u00F1a.",
    "Aurora es la hermosa joven hija del Rey que es v\u00EDctima de un hechizo de la perversa y malvada Mal\u00E9fica, cayendo en un profundo sueño, del cual solo despierta por un beso del Pr\u00EDncipe Felipe.",
    "Por su esp\u00EDritu apasionado hace que su familia corra el peligro de caer en deshonor. Vive sus aventuras junto a sus amigos animales y su pequeño y fiel drag\u00F3n.",
    "Su mascota es un gatito llamado Dinah, y ella tiene una hermana mayor.",
    "Se cruza con los siete enanos, los animales del bosque y, el apuesto pr\u00EDncipe; quienes compartir\u00E1n una hermosa amistad y amor junto a ella.",
    "S\u00F3lo para reunirse con ellos en su adolescencia gracias a que decidi\u00F3 seguir sus sue\u00F1os. ",
    "Desea casarse por amor y ver como es la vida fuera de palacio, cosa que logra gracias al Pr\u00EDncipe Ali.",
    "Sus amigos el cangrejo Sebastian y el pez Flounder. Su principal enemiga es la malvada bruja del mar, Ursula.",
    "Ellas la obligan a trabajar el d\u00EDa entero, por lo que sue\u00F1a con liberarse y encontrar el amor. Y esto lo logra gracias a su hada madrina.",
    "A sus 19 a\u00F1os, Tiana se convierte en princesa despu\u00E9s de casarse con el Pr\u00EDncipe Naveen, el hijo mayor y heredero del rey de Maldonia.",
    "Pero al transcurso de la pel\u00EDcula aprende que su comportamiento no fue el ideal y que debe enmendar sus errores.",
    "Por lo que cuando vive en la mansi\u00F3n de la Bestia, el amor genera que el maleficio que pose\u00EDa el pr\u00EDncipe lo convierta en humano nuevamente y encuentre la felicidad so\u00F1ada.",
    "Elsa involuntariamente crean un eterno invierno el d\u00EDa de su coronaci\u00F3n."
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