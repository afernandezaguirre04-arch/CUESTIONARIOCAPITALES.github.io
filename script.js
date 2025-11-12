// --- FUNCIÓN DE BARAJADO (Fisher-Yates) ---
function shuffleArray(array) {
    var newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}
// --- FIN FUNCIÓN DE BARAJADO ---


// --- Bancos de Preguntas (Organizados por Continente) ---

var questions = {
    //--- EUROPA ---
    'europa': [
        { question: 'España', code: 'es', answers: [{ text: 'Madrid', correct: true }, { text: 'Lisboa', correct: false }, { text: 'París', correct: false }, { text: 'Roma', correct: false }] },
        { question: 'Francia', code: 'fr', answers: [{ text: 'París', correct: true }, { text: 'Berlín', correct: false }, { text: 'Bruselas', correct: false }, { text: 'Madrid', correct: false }] },
        { question: 'Alemania', code: 'de', answers: [{ text: 'Viena', correct: false }, { text: 'Berlín', correct: true }, { text: 'Praga', correct: false }, { text: 'Varsovia', correct: false }] },
        { question: 'Italia', code: 'it', answers: [{ text: 'Atenas', correct: false }, { text: 'Zagreb', correct: false }, { text: 'Roma', correct: true }, { text: 'Viena', correct: false }] },
        { question: 'Reino Unido', code: 'gb', answers: [{ text: 'Dublín', correct: false }, { text: 'Oslo', correct: false }, { text: 'Copenhague', correct: false }, { text: 'Londres', correct: true }] },
        { question: 'Portugal', code: 'pt', answers: [{ text: 'Lisboa', correct: true }, { text: 'Madrid', correct: false }, { text: 'Roma', correct: false }, { text: 'Atenas', correct: false }] },
        { question: 'Grecia', code: 'gr', answers: [{ text: 'Sofía', correct: false }, { text: 'Atenas', correct: true }, { text: 'Bucarest', correct: false }, { text: 'Zagreb', correct: false }] },
        { question: 'Noruega', code: 'no', answers: [{ text: 'Estocolmo', correct: false }, { text: 'Helsinki', correct: false }, { text: 'Oslo', correct: true }, { text: 'Copenhague', correct: false }] },
        { question: 'Suecia', code: 'se', answers: [{ text: 'Reikiavik', correct: false }, { text: 'Oslo', correct: false }, { text: 'Estocolmo', correct: true }, { text: 'Helsinki', correct: false }] },
        { question: 'Finlandia', code: 'fi', answers: [{ text: 'Tallin', correct: false }, { text: 'Riga', correct: false }, { text: 'Helsinki', correct: true }, { text: 'Vilna', correct: false }] },
        { question: 'Irlanda', code: 'ie', answers: [{ text: 'Londres', correct: false }, { text: 'Reikiavik', correct: false }, { text: 'Dublín', correct: true }, { text: 'Oslo', correct: false }] },
        { question: 'Polonia', code: 'pl', answers: [{ text: 'Varsovia', correct: true }, { text: 'Praga', correct: false }, { text: 'Bratislava', correct: false }, { text: 'Berlín', correct: false }] },
        { question: 'Bélgica', code: 'be', answers: [{ text: 'Ámsterdam', correct: false }, { text: 'Bruselas', correct: true }, { text: 'Luxemburgo', correct: false }, { text: 'París', correct: false }] },
        { question: 'Países Bajos', code: 'nl', answers: [{ text: 'Bruselas', correct: false }, { text: 'Copenhague', correct: false }, { text: 'Ámsterdam', correct: true }, { text: 'Luxemburgo', correct: false }] },
        { question: 'Suiza', code: 'ch', answers: [{ text: 'Vaduz', correct: false }, { text: 'Viena', correct: false }, { text: 'Berna', correct: true }, { text: 'Liubliana', correct: false }] },
        { question: 'Austria', code: 'at', answers: [{ text: 'Berna', correct: false }, { text: 'Praga', correct: false }, { text: 'Budapest', correct: false }, { text: 'Viena', correct: true }] },
        { question: 'República Checa', code: 'cz', answers: [{ text: 'Bratislava', correct: false }, { text: 'Praga', correct: true }, { text: 'Varsovia', correct: false }, { text: 'Viena', correct: false }] },
        { question: 'Hungría', code: 'hu', answers: [{ text: 'Bucarest', correct: false }, { text: 'Sofía', correct: false }, { text: 'Budapest', correct: true }, { text: 'Belgrado', correct: false }] },
        { question: 'Dinamarca', code: 'dk', answers: [{ text: 'Copenhague', correct: true }, { text: 'Oslo', correct: false }, { text: 'Estocolmo', correct: false }, { text: 'Helsinki', correct: false }] },
        { question: 'Rumanía', code: 'ro', answers: [{ text: 'Sofía', correct: false }, { text: 'Kiev', correct: false }, { text: 'Budapest', correct: false }, { text: 'Bucarest', correct: true }] },
        { question: 'Ucrania', code: 'ua', answers: [{ text: 'Minsk', correct: false }, { text: 'Kiev', correct: true }, { text: 'Varsovia', correct: false }, { text: 'Moscú', correct: false }] },
        { question: 'Rusia', code: 'ru', answers: [{ text: 'Moscú', correct: true }, { text: 'Kiev', correct: false }, { text: 'Minsk', correct: false }, { text: 'Ankara', correct: false }] },
        { question: 'Croacia', code: 'hr', answers: [{ text: 'Liubliana', correct: false }, { text: 'Zagreb', correct: true }, { text: 'Sarajevo', correct: false }, { text: 'Belgrado', correct: false }] },
        { question: 'Bulgaria', code: 'bg', answers: [{ text: 'Atenas', correct: false }, { text: 'Bucarest', correct: false }, { text: 'Sofía', correct: true }, { text: 'Skopie', correct: false }] },
        { question: 'Islandia', code: 'is', answers: [{ text: 'Dublín', correct: false }, { text: 'Oslo', correct: false }, { text: 'Reikiavik', correct: true }, { text: 'Copenhague', correct: false }] },
        { question: 'Eslovaquia', code: 'sk', answers: [{ text: 'Praga', correct: false }, { text: 'Liubliana', correct: false }, { text: 'Bratislava', correct: true }, { text: 'Viena', correct: false }] },
        { question: 'Serbia', code: 'rs', answers: [{ text: 'Sarajevo', correct: false }, { text: 'Podgorica', correct: false }, { text: 'Belgrado', correct: true }, { text: 'Zagreb', correct: false }] },
        { question: 'Lituania', code: 'lt', answers: [{ text: 'Riga', correct: false }, { text: 'Vilna', correct: true }, { text: 'Tallin', correct: false }, { text: 'Minsk', correct: false }] },
        { question: 'Letonia', code: 'lv', answers: [{ text: 'Vilna', correct: false }, { text: 'Tallin', correct: false }, { text: 'Riga', correct: true }, { text: 'Helsinki', correct: false }] },
        { question: 'Estonia', code: 'ee', answers: [{ text: 'Riga', correct: false }, { text: 'Helsinki', correct: false }, { text: 'Vilna', correct: false }, { text: 'Tallin', correct: true }] },
        { question: 'Eslovenia', code: 'si', answers: [{ text: 'Bratislava', correct: false }, { text: 'Liubliana', correct: true }, { text: 'Zagreb', correct: false }, { text: 'Viena', correct: false }] },
        { question: 'Bielorrusia', code: 'by', answers: [{ text: 'Kiev', correct: false }, { text: 'Minsk', correct: true }, { text: 'Moscú', correct: false }, { text: 'Varsovia', correct: false }] },
        { question: 'Albania', code: 'al', answers: [{ text: 'Skopie', correct: false }, { text: 'Tirana', correct: true }, { text: 'Atenas', correct: false }, { text: 'Podgorica', correct: false }] },
        { question: 'Macedonia del Norte', code: 'mk', answers: [{ text: 'Tirana', correct: false }, { text: 'Sofía', correct: false }, { text: 'Skopie', correct: true }, { text: 'Pristina', correct: false }] },
        { question: 'Andorra', code: 'ad', answers: [{ text: 'Mónaco', correct: false }, { text: 'San Marino', correct: false }, { text: 'Vaduz', correct: false }, { text: 'Andorra la Vella', correct: true }] }
    ],
    //--- ASIA ---
    'asia': [
        { question: 'China', code: 'cn', answers: [{ text: 'Pekín', correct: true }, { text: 'Seúl', correct: false }, { text: 'Tokio', correct: false }, { text: 'Taipéi', correct: false }] },
        { question: 'India', code: 'in', answers: [{ text: 'Islamabad', correct: false }, { text: 'Nueva Delhi', correct: true }, { text: 'Katmandú', correct: false }, { text: 'Daca', correct: false }] },
        { question: 'Japón', code: 'jp', answers: [{ text: 'Pekín', correct: false }, { text: 'Seúl', correct: false }, { text: 'Tokio', correct: true }, { text: 'Hanói', correct: false }] },
        { question: 'Corea del Sur', code: 'kr', answers: [{ text: 'Pionyang', correct: false }, { text: 'Tokio', correct: false }, { text: 'Pekín', correct: false }, { text: 'Seúl', correct: true }] },
        { question: 'Tailandia', code: 'th', answers: [{ text: 'Bangkok', correct: true }, { text: 'Hanói', correct: false }, { text: 'Manila', correct: false }, { text: 'Kuala Lumpur', correct: false }] },
        { question: 'Turquía', code: 'tr', answers: [{ text: 'Estambul', correct: false }, { text: 'Ankara', correct: true }, { text: 'Damasco', correct: false }, { text: 'Teherán', correct: false }] },
        { question: 'Arabia Saudita', code: 'sa', answers: [{ text: 'Abu Dabi', correct: false }, { text: 'Doha', correct: false }, { text: 'Riad', correct: true }, { text: 'Mascate', correct: false }] },
        { question: 'Vietnam', code: 'vn', answers: [{ text: 'Bangkok', correct: false }, { text: 'Nom Pen', correct: false }, { text: 'Vientián', correct: false }, { text: 'Hanói', correct: true }] },
        { question: 'Indonesia', code: 'id', answers: [{ text: 'Yakarta', correct: true }, { text: 'Kuala Lumpur', correct: false }, { text: 'Singapur', correct: false }, { text: 'Manila', correct: false }] },
        { question: 'Filipinas', code: 'ph', answers: [{ text: 'Yakarta', correct: false }, { text: 'Manila', correct: true }, { text: 'Kuala Lumpur', correct: false }, { text: 'Bangkok', correct: false }] },
        { question: 'Irán', code: 'ir', answers: [{ text: 'Bagdad', correct: false }, { text: 'Kabul', correct: false }, { text: 'Teherán', correct: true }, { text: 'Riad', correct: false }] },
        { question: 'Irak', code: 'iq', answers: [{ text: 'Teherán', correct: false }, { text: 'Damasco', correct: false }, { text: 'Ammán', correct: false }, { text: 'Bagdad', correct: true }] },
        { question: 'Pakistán', code: 'pk', answers: [{ text: 'Nueva Delhi', correct: false }, { text: 'Islamabad', correct: true }, { text: 'Kabul', correct: false }, { text: 'Katmandú', correct: false }] },
        { question: 'Malasia', code: 'my', answers: [{ text: 'Singapur', correct: false }, { text: 'Yakarta', correct: false }, { text: 'Kuala Lumpur', correct: true }, { text: 'Manila', correct: false }] },
        { question: 'Afganistán', code: 'af', answers: [{ text: 'Teherán', correct: false }, { text: 'Islamabad', correct: false }, { text: 'Kabul', correct: true }, { text: 'Dusambé', correct: false }] },
        { question: 'Corea del Norte', code: 'kp', answers: [{ text: 'Seúl', correct: false }, { text: 'Pionyang', correct: true }, { text: 'Pekín', correct: false }, { text: 'Ulán Bator', correct: false }] },
        { question: 'Emiratos Árabes Unidos', code: 'ae', answers: [{ text: 'Doha', correct: false }, { text: 'Riad', correct: false }, { text: 'Mascate', correct: false }, { text: 'Abu Dabi', correct: true }] },
        { question: 'Israel', code: 'il', answers: [{ text: 'Jerusalén', correct: true }, { text: 'Beirut', correct: false }, { text: 'Ammán', correct: false }, { text: 'Damasco', correct: false }] },
        { question: 'Nepal', code: 'np', answers: [{ text: 'Daca', correct: false }, { text: 'Timbu', correct: false }, { text: 'Katmandú', correct: true }, { text: 'Nueva Delhi', correct: false }] },
        { question: 'Siria', code: 'sy', answers: [{ text: 'Beirut', correct: false }, { text: 'Ammán', correct: false }, { text: 'Damasco', correct: true }, { text: 'Bagdad', correct: false }] },
        { question: 'Catar', code: 'qa', answers: [{ text: 'Abu Dabi', correct: false }, { text: 'Manama', correct: false }, { text: 'Kuwait', correct: false }, { text: 'Doha', correct: true }] },
        { question: 'Jordania', code: 'jo', answers: [{ text: 'Damasco', correct: false }, { text: 'Ammán', correct: true }, { text: 'Jerusalén', correct: false }, { text: 'Beirut', correct: false }] },
        { question: 'Singapur', code: 'sg', answers: [{ text: 'Kuala Lumpur', correct: false }, { text: 'Yakarta', correct: false }, { text: 'Singapur', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Mongolia', code: 'mn', answers: [{ text: 'Pekín', correct: false }, { text: 'Astaná', correct: false }, { text: 'Ulán Bator', correct: true }, { text: 'Moscú', correct: false }] },
        { question: 'Líbano', code: 'lb', answers: [{ text: 'Damasco', correct: false }, { text: 'Beirut', correct: true }, { text: 'Jerusalén', correct: false }, { text: 'Ammán', correct: false }] },
        { question: 'Camboya', code: 'kh', answers: [{ text: 'Vientián', correct: false }, { text: 'Hanói', correct: false }, { text: 'Nom Pen', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Kazajistán', code: 'kz', answers: [{ text: 'Taskent', correct: false }, { text: 'Biskek', correct: false }, { text: 'Astaná', correct: true }, { text: 'Ulán Bator', correct: false }] },
        { question: 'Uzbekistán', code: 'uz', answers: [{ text: 'Asjabad', correct: false }, { text: 'Taskent', correct: true }, { text: 'Dusambé', correct: false }, { text: 'Biskek', correct: false }] },
        { question: 'Sri Lanka', code: 'lk', answers: [{ text: 'Malé', correct: false }, { text: 'Nueva Delhi', correct: false }, { text: 'Colombo', correct: true }, { text: 'Katmandú', correct: false }] },
        { question: 'Laos', code: 'la', answers: [{ text: 'Hanói', correct: false }, { text: 'Nom Pen', correct: false }, { text: 'Vientián', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Bangladés', code: 'bd', answers: [{ text: 'Nueva Delhi', correct: false }, { text: 'Daca', correct: true }, { text: 'Katmandú', correct: false }, { text: 'Islamabad', correct: false }] },
        { question: 'Kirguistán', code: 'kg', answers: [{ text: 'Dusambé', correct: false }, { text: 'Taskent', correct: false }, { text: 'Biskek', correct: true }, { text: 'Astaná', correct: false }] },
        { question: 'Omán', code: 'om', answers: [{ text: 'Saná', correct: false }, { text: 'Mascate', correct: true }, { text: 'Abu Dabi', correct: false }, { text: 'Riad', correct: false }] },
        { question: 'Bután', code: 'bt', answers: [{ text: 'Katmandú', correct: false }, { text: 'Daca', correct: false }, { text: 'Timbu', correct: true }, { text: 'Nueva Delhi', correct: false }] },
        { question: 'Kuwait', code: 'kw', answers: [{ text: 'Manama', correct: false }, { text: 'Doha', correct: false }, { text: 'Bagdad', correct: false }, { text: 'Kuwait', correct: true }] }
    ],
    //--- AMÉRICA ---
    'america': [
        { question: 'Estados Unidos', code: 'us', answers: [{ text: 'Washington D.C.', correct: true }, { text: 'Nueva York', correct: false }, { text: 'Ottawa', correct: false }, { text: 'Ciudad de México', correct: false }] },
        { question: 'Canadá', code: 'ca', answers: [{ text: 'Toronto', correct: false }, { text: 'Ottawa', correct: true }, { text: 'Vancouver', correct: false }, { text: 'Washington D.C.', correct: false }] },
        { question: 'México', code: 'mx', answers: [{ text: 'Bogotá', correct: false }, { text: 'Lima', correct: false }, { text: 'Ciudad de México', correct: true }, { text: 'La Habana', correct: false }] },
        { question: 'Brasil', code: 'br', answers: [{ text: 'Río de Janeiro', correct: false }, { text: 'São Paulo', correct: false }, { text: 'Buenos Aires', correct: false }, { text: 'Brasilia', correct: true }] },
        { question: 'Argentina', code: 'ar', answers: [{ text: 'Buenos Aires', correct: true }, { text: 'Santiago', correct: false }, { text: 'Montevideo', correct: false }, { text: 'Lima', correct: false }] },
        { question: 'Colombia', code: 'co', answers: [{ text: 'Caracas', correct: false }, { text: 'Bogotá', correct: true }, { text: 'Quito', correct: false }, { text: 'Lima', correct: false }] },
        { question: 'Perú', code: 'pe', answers: [{ text: 'Quito', correct: false }, { text: 'Santiago', correct: false }, { text: 'Lima', correct: true }, { text: 'La Paz', correct: false }] },
        { question: 'Chile', code: 'cl', answers: [{ text: 'Buenos Aires', correct: false }, { text: 'Montevideo', correct: false }, { text: 'Santiago', correct: true }, { text: 'Asunción', correct: false }] },
        { question: 'Venezuela', code: 've', answers: [{ text: 'Bogotá', correct: false }, { text: 'Georgetown', correct: false }, { text: 'Caracas', correct: true }, { text: 'Quito', correct: false }] },
        { question: 'Cuba', code: 'cu', answers: [{ text: 'Kingston', correct: false }, { text: 'Santo Domingo', correct: false }, { text: 'San Juan', correct: false }, { text: 'La Habana', correct: true }] },
        { question: 'Ecuador', code: 'ec', answers: [{ text: 'Quito', correct: true }, { text: 'Lima', correct: false }, { text: 'Bogotá', correct: false }, { text: 'Caracas', correct: false }] },
        { question: 'Guatemala', code: 'gt', answers: [{ text: 'San Salvador', correct: false }, { text: 'Ciudad de Guatemala', correct: true }, { text: 'Tegucigalpa', correct: false }, { text: 'Managua', correct: false }] },
        { question: 'Costa Rica', code: 'cr', answers: [{ text: 'Panamá', correct: false }, { text: 'San Salvador', correct: false }, { text: 'San José', correct: true }, { text: 'Tegucigalpa', correct: false }] },
        { question: 'Panamá', code: 'pa', answers: [{ text: 'San José', correct: false }, { text: 'Bogotá', correct: false }, { text: 'Panamá', correct: true }, { text: 'Caracas', correct: false }] },
        { question: 'República Dominicana', code: 'do', answers: [{ text: 'La Habana', correct: false }, { text: 'San Juan', correct: false }, { text: 'Puerto Príncipe', correct: false }, { text: 'Santo Domingo', correct: true }] },
        { question: 'Bolivia', code: 'bo', answers: [{ text: 'Sucre', correct: true }, { text: 'Lima', correct: false }, { text: 'Asunción', correct: false }, { text: 'Santiago', correct: false }] },
        { question: 'Honduras', code: 'hn', answers: [{ text: 'Managua', correct: false }, { text: 'Tegucigalpa', correct: true }, { text: 'San Salvador', correct: false }, { text: 'Ciudad de Guatemala', correct: false }] },
        { question: 'Paraguay', code: 'py', answers: [{ text: 'Montevideo', correct: false }, { text: 'Sucre', correct: false }, { text: 'Asunción', correct: true }, { text: 'Buenos Aires', correct: false }] },
        { question: 'El Salvador', code: 'sv', answers: [{ text: 'Tegucigalpa', correct: false }, { text: 'Managua', correct: false }, { text: 'Ciudad de Guatemala', correct: false }, { text: 'San Salvador', correct: true }] },
        { question: 'Uruguay', code: 'uy', answers: [{ text: 'Montevideo', correct: true }, { text: 'Buenos Aires', correct: false }, { text: 'Asunción', correct: false }, { text: 'Santiago', correct: false }] },
        { question: 'Nicaragua', code: 'ni', answers: [{ text: 'San José', correct: false }, { text: 'Managua', correct: true }, { text: 'Tegucigalpa', correct: false }, { text: 'San Salvador', correct: false }] },
        { question: 'Jamaica', code: 'jm', answers: [{ text: 'La Habana', correct: false }, { text: 'Kingston', correct: true }, { text: 'Nasáu', correct: false }, { text: 'Santo Domingo', correct: false }] },
        { question: 'Puerto Rico', code: 'pr', answers: [{ text: 'Santo Domingo', correct: false }, { text: 'La Habana', correct: false }, { text: 'San Juan', correct: true }, { text: 'Kingston', correct: false }] },
        { question: 'Haití', code: 'ht', answers: [{ text: 'Kingston', correct: false }, { text: 'Santo Domingo', correct: false }, { text: 'Puerto Príncipe', correct: true }, { text: 'La Habana', correct: false }] },
        { question: 'Belice', code: 'bz', answers: [{ text: 'Ciudad de Guatemala', correct: false }, { text: 'Belmopán', correct: true }, { text: 'San Salvador', correct: false }, { text: 'Tegucigalpa', correct: false }] },
        { question: 'Bahamas', code: 'bs', answers: [{ text: 'La Habana', correct: false }, { text: 'Kingston', correct: false }, { text: 'Nasáu', correct: true }, { text: 'San Juan', correct: false }] },
        { question: 'Barbados', code: 'bb', answers: [{ text: 'Castries', correct: false }, { text: 'Puerto España', correct: false }, { text: 'Kingstown', correct: false }, { text: 'Bridgetown', correct: true }] },
        { question: 'Santa Lucía', code: 'lc', answers: [{ text: 'Bridgetown', correct: false }, { text: 'Castries', correct: true }, { text: 'Kingstown', correct: false }, { text: 'Saint George', correct: false }] },
        { question: 'Trinidad y Tobago', code: 'tt', answers: [{ text: 'Caracas', correct: false }, { text: 'Georgetown', correct: false }, { text: 'Puerto España', correct: true }, { text: 'Paramaribo', correct: false }] },
        { question: 'Guyana', code: 'gy', answers: [{ text: 'Paramaribo', correct: false }, { text: 'Caracas', correct: false }, { text: 'Georgetown', correct: true }, { text: 'Bogotá', correct: false }] },
        { question: 'Surinam', code: 'sr', answers: [{ text: 'Georgetown', correct: false }, { text: 'Paramaribo', correct: true }, { text: 'Cayena', correct: false }, { text: 'Caracas', correct: false }] },
        { question: 'Antigua y Barbuda', code: 'ag', answers: [{ text: 'Saint John\'s', correct: true }, { text: 'Kingstown', correct: false }, { text: 'Castries', correct: false }, { text: 'Bridgetown', correct: false }] },
        { question: 'San Vicente y las Granadinas', code: 'vc', answers: [{ text: 'Castries', correct: false }, { text: 'Saint George\'s', correct: false }, { text: 'Bridgetown', correct: false }, { text: 'Kingstown', correct: true }] },
        { question: 'Granada', code: 'gd', answers: [{ text: 'Kingstown', correct: false }, { text: 'Saint George\'s', correct: true }, { text: 'Puerto España', correct: false }, { text: 'Castries', correct: false }] },
        { question: 'San Cristóbal y Nieves', code: 'kn', answers: [{ text: 'Saint John\'s', correct: false }, { text: 'Roseau', correct: false }, { text: 'Basseterre', correct: true }, { text: 'Castries', correct: false }] }
    ],
    //--- ÁFRICA ---
    'africa': [
        { question: 'Egipto', code: 'eg', answers: [{ text: 'El Cairo', correct: true }, { text: 'Argel', correct: false }, { text: 'Rabat', correct: false }, { text: 'Trípoli', correct: false }] },
        { question: 'Sudáfrica', code: 'za', answers: [{ text: 'Nairobi', correct: false }, { text: 'Pretoria', correct: true }, { text: 'Kinsasa', correct: false }, { text: 'Lagos', correct: false }] },
        { question: 'Nigeria', code: 'ng', answers: [{ text: 'Lagos', correct: false }, { text: 'Acra', correct: false }, { text: 'Abuya', correct: true }, { text: 'Dakar', correct: false }] },
        { question: 'Marruecos', code: 'ma', answers: [{ text: 'Casablanca', correct: false }, { text: 'Argel', correct: false }, { text: 'Túnez', correct: false }, { text: 'Rabat', correct: true }] },
        { question: 'Kenia', code: 'ke', answers: [{ text: 'Adís Abeba', correct: false }, { text: 'Nairobi', correct: true }, { text: 'Mogadiscio', correct: false }, { text: 'Dodoma', correct: false }] },
        { question: 'Etiopía', code: 'et', answers: [{ text: 'Jartum', correct: false }, { text: 'Yuba', correct: false }, { text: 'Adís Abeba', correct: true }, { text: 'Nairobi', correct: false }] },
        { question: 'Argelia', code: 'dz', answers: [{ text: 'Argel', correct: true }, { text: 'Túnez', correct: false }, { text: 'Rabat', correct: false }, { text: 'Trípoli', correct: false }] },
        { question: 'Ghana', code: 'gh', answers: [{ text: 'Lomé', correct: false }, { text: 'Acra', correct: true }, { text: 'Abuya', correct: false }, { text: 'Dakar', correct: false }] },
        { question: 'Senegal', code: 'sn', answers: [{ text: 'Bamako', correct: false }, { text: 'Nuakchot', correct: false }, { text: 'Dakar', correct: true }, { text: 'Conakri', correct: false }] },
        { question: 'Madagascar', code: 'mg', answers: [{ text: 'Maputo', correct: false }, { text: 'Lusaka', correct: false }, { text: 'Antananarivo', correct: true }, { text: 'Pretoria', correct: false }] },
        { question: 'Túnez', code: 'tn', answers: [{ text: 'Rabat', correct: false }, { text: 'Argel', correct: false }, { text: 'Trípoli', correct: false }, { text: 'Túnez', correct: true }] },
        { question: 'Angola', code: 'ao', answers: [{ text: 'Luanda', correct: true }, { text: 'Kinsasa', correct: false }, { text: 'Lusaka', correct: false }, { text: 'Windhoek', correct: false }] },
        { question: 'Rep. Dem. del Congo', code: 'cd', answers: [{ text: 'Brazzaville', correct: false }, { text: 'Kinsasa', correct: true }, { text: 'Luanda', correct: false }, { text: 'Yaundé', correct: false }] },
        { question: 'Tanzania', code: 'tz', answers: [{ text: 'Nairobi', correct: false }, { text: 'Kampala', correct: false }, { text: 'Dodoma', correct: true }, { text: 'Maputo', correct: false }] },
        { question: 'Camerún', code: 'cm', answers: [{ text: 'Abuya', correct: false }, { text: 'Libreville', correct: false }, { text: 'Yaundé', correct: true }, { text: 'Kinsasa', correct: false }] },
        { question: 'Costa de Marfil', code: 'ci', answers: [{ text: 'Acra', correct: false }, { text: 'Dakar', correct: false }, { text: 'Yamusukro', correct: true }, { text: 'Lomé', correct: false }] },
        { question: 'Sudán', code: 'sd', answers: [{ text: 'Yuba', correct: false }, { text: 'El Cairo', correct: false }, { text: 'Adís Abeba', correct: false }, { text: 'Jartum', correct: true }] },
        { question: 'Libia', code: 'ly', answers: [{ text: 'Trípoli', correct: true }, { text: 'Argel', correct: false }, { text: 'Túnez', correct: false }, { text: 'El Cairo', correct: false }] },
        { question: 'Malí', code: 'ml', answers: [{ text: 'Nuakchot', correct: false }, { text: 'Bamako', correct: true }, { text: 'Dakar', correct: false }, { text: 'Uagadugú', correct: false }] },
        { question: 'Zambia', code: 'zm', answers: [{ text: 'Harare', correct: false }, { text: 'Maputo', correct: false }, { text: 'Lusaka', correct: true }, { text: 'Luanda', correct: false }] },
        { question: 'Mozambique', code: 'mz', answers: [{ text: 'Maputo', correct: true }, { text: 'Lusaka', correct: false }, { text: 'Harare', correct: false }, { text: 'Pretoria', correct: false }] },
        { question: 'Uganda', code: 'ug', answers: [{ text: 'Kigali', correct: false }, { text: 'Nairobi', correct: false }, { text: 'Kampala', correct: true }, { text: 'Dodoma', correct: false }] },
        { question: 'Níger', code: 'ne', answers: [{ text: 'Abuya', correct: false }, { text: 'Bamako', correct: false }, { text: 'Niamey', correct: true }, { text: 'Yamena', correct: false }] },
        { question: 'Chad', code: 'td', answers: [{ text: 'Jartum', correct: false }, { text: 'Niamey', correct: false }, { text: 'Yamena', correct: true }, { text: 'Abuya', correct: false }] },
        { question: 'Zimbabue', code: 'zw', answers: [{ text: 'Lusaka', correct: false }, { text: 'Gaborone', correct: false }, { text: 'Harare', correct: true }, { text: 'Maputo', correct: false }] },
        { question: 'Ruanda', code: 'rw', answers: [{ text: 'Kampala', correct: false }, { text: 'Brazzaville', correct: false }, { text: 'Kigali', correct: true }, { text: 'Kinsasa', correct: false }] },
        { question: 'Guinea', code: 'gn', answers: [{ text: 'Conakri', correct: true }, { text: 'Dakar', correct: false }, { text: 'Freetown', correct: false }, { text: 'Bamako', correct: false }] },
        { question: 'Benín', code: 'bj', answers: [{ text: 'Lomé', correct: false }, { text: 'Acra', correct: false }, { text: 'Porto Novo', correct: true }, { text: 'Abuya', correct: false }] },
        { question: 'Somalia', code: 'so', answers: [{ text: 'Adís Abeba', correct: false }, { text: 'Mogadiscio', correct: true }, { text: 'Jartum', correct: false }, { text: 'Nairobi', correct: false }] },
        { question: 'Burkina Faso', code: 'bf', answers: [{ text: 'Bamako', correct: false }, { text: 'Acra', correct: false }, { text: 'Uagadugú', correct: true }, { text: 'Niamey', correct: false }] },
        { question: 'Namibia', code: 'na', answers: [{ text: 'Gaborone', correct: false }, { text: 'Windhoek', correct: true }, { text: 'Luanda', correct: false }, { text: 'Pretoria', correct: false }] },
        { question: 'República del Congo', code: 'cg', answers: [{ text: 'Kinsasa', correct: false }, { text: 'Yaundé', correct: false }, { text: 'Brazzaville', correct: true }, { text: 'Libreville', correct: false }] },
        { question: 'Togo', code: 'tg', answers: [{ text: 'Porto Novo', correct: false }, { text: 'Lomé', correct: true }, { text: 'Acra', correct: false }, { text: 'Uagadugú', correct: false }] },
        { question: 'Sierra Leona', code: 'sl', answers: [{ text: 'Monrovia', correct: false }, { text: 'Conakri', correct: false }, { text: 'Freetown', correct: true }, { text: 'Dakar', correct: false }] },
        { question: 'Mauritania', code: 'mr', answers: [{ text: 'Dakar', correct: false }, { text: 'Bamako', correct: false }, { text: 'Rabat', correct: false }, { text: 'Nuakchot', correct: true }] }
    ],
    //--- OCEANÍA ---
    'oceania': [
        { question: 'Australia', code: 'au', answers: [{ text: 'Sídney', correct: false }, { text: 'Melbourne', correct: false }, { text: 'Canberra', correct: true }, { text: 'Wellington', correct: false }] },
        { question: 'Nueva Zelanda', code: 'nz', answers: [{ text: 'Auckland', correct: false }, { text: 'Wellington', correct: true }, { text: 'Suva', correct: false }, { text: 'Canberra', correct: false }] },
        { question: 'Fiyi', code: 'fj', answers: [{ text: 'Suva', correct: true }, { text: 'Apia', correct: false }, { text: 'Port Moresby', correct: false }, { text: 'Ngerulmud', correct: false }] },
        { question: 'Papúa Nueva Guinea', code: 'pg', answers: [{ text: 'Honiara', correct: false }, { text: 'Port Moresby', correct: true }, { text: 'Canberra', correct: false }, { text: 'Suva', correct: false }] },
        { question: 'Samoa', code: 'ws', answers: [{ text: 'Nukualofa', correct: false }, { text: 'Wellington', correct: false }, { text: 'Apia', correct: true }, { text: 'Funafuti', correct: false }] },
        { question: 'Tonga', code: 'to', answers: [{ text: 'Nukualofa', correct: true }, { text: 'Suva', correct: false }, { text: 'Apia', correct: false }, { text: 'Palikir', correct: false }] },
        { question: 'Palaos', code: 'pw', answers: [{ text: 'Yaren', correct: false }, { text: 'Majuro', correct: false }, { text: 'Ngerulmud', correct: true }, { text: 'Canberra', correct: false }] },
        { question: 'Vanuatu', code: 'vu', answers: [{ text: 'Port Vila', correct: true }, { text: 'Suva', correct: false }, { text: 'Honiara', correct: false }, { text: 'Wellington', correct: false }] },
        { question: 'Islas Marshall', code: 'mh', answers: [{ text: 'Palikir', correct: false }, { text: 'Majuro', correct: true }, { text: 'Tarawa', correct: false }, { text: 'Apia', correct: false }] },
        { question: 'Kiribati', code: 'ki', answers: [{ text: 'Funafuti', correct: false }, { text: 'Yaren', correct: false }, { text: 'Honiara', correct: false }, { text: 'Tarawa', correct: true }] },
        { question: 'Islas Salomón', code: 'sb', answers: [{ text: 'Port Moresby', correct: false }, { text: 'Honiara', correct: true }, { text: 'Suva', correct: false }, { text: 'Apia', correct: false }] },
        { question: 'Tuvalu', code: 'tv', answers: [{ text: 'Tarawa', correct: false }, { text: 'Nukualofa', correct: false }, { text: 'Funafuti', correct: true }, { text: 'Yaren', correct: false }] },
        { question: 'Micronesia', code: 'fm', answers: [{ text: 'Majuro', correct: false }, { text: 'Palikir', correct: true }, { text: 'Ngerulmud', correct: false }, { text: 'Tarawa', correct: false }] },
        { question: 'Nauru', code: 'nr', answers: [{ text: 'Funafuti', correct: false }, { text: 'Majuro', correct: false }, { text: 'Yaren', correct: true }, { text: 'Palikir', correct: false }] }
    ]
};

//--- MODO MUNDO (Se construye dinámicamente) ---
questions['mundo'] = [].concat(
    questions.europa, 
    questions.asia, 
    questions.america, 
    questions.africa, 
    questions.oceania
);


// --- Elementos del DOM ---
var mainMenu = document.getElementById('main-menu');
var difficultySelector = document.getElementById('difficulty-selector'); 
var quizMain = document.getElementById('quiz-main');

var topicButtons = document.querySelectorAll('.topic-btn');
var btnBackToTopics = document.getElementById('btn-back-to-topics'); 

var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question-text');
var flagImage = document.getElementById('flag-image'); // <-- NUEVA VARIABLE PARA LA BANDERA
var answerButtonsElement = document.getElementById('answer-buttons');

var statsBar = document.querySelector('.stats-bar'); 
var quizFooter = document.querySelector('.quiz-footer');
var controlsDiv = document.querySelector('.controls');
var prevButton = document.getElementById('prev-btn');
var menuButton = document.getElementById('menu-btn');
var nextButton = document.getElementById('next-btn');

var scoreText = document.getElementById('score-text');
var errorsText = document.getElementById('errors-text'); 

// --- VARIABLES DE EXPLICACIÓN ELIMINADAS ---

var btnEasy = document.getElementById('btn-easy');
var btnMedium = document.getElementById('btn-medium');
var btnHard = document.getElementById('btn-hard');

var endGameControls = document.getElementById('end-game-controls');
var resultText = document.getElementById('result-text');
var restartButton = document.getElementById('restart-btn');

var difficultyTitle = document.getElementById('difficulty-title');
var quizTitle = document.getElementById('quiz-title');


// --- Variables del Quiz ---
var selectedContinent = ''; 
var selectedContinentName = ''; 
var questionsBank = []; 
var shuffledQuestions, currentQuestionIndex;
var score = 0;
var errors = 0; 
var totalQuestions = 0; 
var scoreHistory = {}; 

// --- Funciones del Quiz ---

// PASO 1: Seleccionar Continente
function selectContinent(continent, continentName) {
    selectedContinent = continent; 
    selectedContinentName = continentName; 
    
    questionsBank = questions[selectedContinent];
    totalQuestions = questionsBank.length; 

    mainMenu.classList.add('hide');
    endGameControls.classList.add('hide');
    quizMain.classList.remove('hide');
    quizFooter.classList.remove('hide');
    statsBar.classList.remove('hide'); 

    score = 0;
    errors = 0;
    scoreHistory = {};
    updateStats(); 
    
    quizTitle.innerText = "Capitales de " + selectedContinentName;
    
    shuffledQuestions = shuffleArray(questionsBank);
    shuffledQuestions.forEach(function(q) {
        q.isAnswered = false;
        q.userAnswerText = null; 
    });

    currentQuestionIndex = 0;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


// Muestra una pregunta y sus respuestas (MODIFICADA PARA BANDERAS)
function showQuestion(question) {
    resetState();
    questionText.innerText = question.question; 
    
    // --- *** NUEVO: MOSTRAR BANDERA *** ---
    if (question.code) {
        flagImage.src = 'https://flagcdn.com/w160/' + question.code + '.png';
        flagImage.classList.remove('hide');
    }
    // --- *** FIN MOSTRAR BANDERA *** ---


    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('invisible');
    } else {
        prevButton.classList.add('invisible');
    }
    
    if (question.isAnswered) {
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.innerText = "Siguiente";
        } else {
            nextButton.innerText = "Finalizar Quiz";
        }
        nextButton.classList.remove('invisible');
    } else {
        nextButton.classList.add('invisible');
    }

    var shuffledAnswers = shuffleArray(question.answers); 

    shuffledAnswers.forEach(function(answer) {
        var button = document.createElement('button');
        button.innerText = answer.text; 
        button.classList.add('btn');
        
        if (answer.correct) {
            button.dataset.correct = true; 
        }
        
        if (!question.isAnswered) {
             button.addEventListener('click', selectAnswer);
        }
       
        answerButtonsElement.appendChild(button);
    });

    // Si la pregunta YA ha sido respondida (al navegar atrás/adelante)
    if (question.isAnswered) {
        for (var i = 0; i < answerButtonsElement.children.length; i++) {
            var btn = answerButtonsElement.children[i];
            btn.disabled = true; 
            setStatusClass(btn, btn.dataset.correct === "true"); 
        }
        
        // --- BLOQUE DE EXPLICACIÓN ELIMINADO ---
    }
}

// Resetea el estado entre preguntas (MODIFICADO PARA BANDERAS)
function resetState() {
    flagImage.classList.add('hide'); // <-- Ocultar la bandera anterior
    flagImage.src = ""; // Limpiar la imagen
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Se ejecuta al hacer clic en una respuesta
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct === "true";
    var selectedText = selectedButton.innerText; 

    var currentQuestion = shuffledQuestions[currentQuestionIndex];
    var firstAttempt = !currentQuestion.isAnswered;
    
    currentQuestion.isAnswered = true;
    currentQuestion.userAnswerText = selectedText; 

    if (correct) {
        scoreHistory[currentQuestionIndex] = 1;
    } else {
        scoreHistory[currentQuestionIndex] = 0;
        if (firstAttempt) { 
            errors++;
        }
    }
    recalculateScore(); 
    updateStats(); 

    // --- BLOQUE DE EXPLICACIÓN ELIMINADO ---

    for (var i = 0; i < answerButtonsElement.children.length; i++) {
        var button = answerButtonsElement.children[i];
        button.disabled = true; 
        setStatusClass(button, button.dataset.correct === "true");
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.innerText = "Siguiente";
    } else {
        nextButton.innerText = "Finalizar Quiz";
    }
    nextButton.classList.remove('invisible'); 
}

// Pone la clase 'correct' o 'wrong' a los botones
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        if (element.disabled) { 
             var answeredText = shuffledQuestions[currentQuestionIndex].userAnswerText;
             if (element.innerText === answeredText && !correct) {
                 element.classList.add('wrong');
             }
        }
    }
}

// Limpia las clases de estado
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Recalcula el score total
function recalculateScore() {
    score = 0;
    for (var key in scoreHistory) {
        score += scoreHistory[key];
    }
}

// Actualiza el texto de los contadores (CON ERROR CORREGIDO)
function updateStats() {
    scoreText.innerText = 'Puntuación: ' + score + ' / ' + totalQuestions;
    errorsText.innerText = 'Errores: ' + errors; // <-- ¡ERROR DE LA 'T' CORREGIDO!
}

// --- Funciones de Navegación ---
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function showPrevQuestion() {
    currentQuestionIndex--;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Finaliza el quiz y muestra resultados
function endQuiz() {
    questionContainer.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    quizFooter.classList.add('hide');
    statsBar.classList.add('hide'); 
    quizMain.classList.add('hide');
    
    if (difficultySelector) {
        difficultySelector.classList.add('hide');
    }
    quizMain.classList.remove('hide'); 
    
    document.getElementById('quiz-header').classList.add('hide');
    
    var finalScore = (score / questionsBank.length) * 10;
    resultText.innerHTML = '<h2>¡Quiz completado!</h2><p>Tu puntuación final es: ' + score + ' de ' + questionsBank.length + '.</p><p>Total de errores (al primer intento): ' + errors + '</p><h3>(' + finalScore.toFixed(1) + '/10)</h3>';
    
    endGameControls.classList.remove('hide');
}

// Vuelve al menú de CONTINENTES (botón en-juego)
function showMainMenu() {
    quizMain.classList.add('hide');
    quizFooter.classList.add('hide'); 
    statsBar.classList.add('hide'); 
    endGameControls.classList.add('hide');
    
    if (difficultySelector) {
        difficultySelector.classList.add('hide');
    }
    
    document.getElementById('quiz-header').classList.remove('hide');
    questionContainer.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    
    mainMenu.classList.remove('hide');
}

// --- Event Listeners (Versión compatible) ---

// Menú Principal (Continentes)
topicButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.disabled) return;
        var continent = button.dataset.continent; // Usa 'data-continent'
        var continentName = button.innerText.split(' (')[0];
        // Quita "Modo: " del nombre si existe
        continentName = continentName.replace('Modo: ', ''); 
        
        selectContinent(continent, continentName);
    });
});

// Botones de Dificultad (ya no se usan)
if (btnEasy) {
    btnEasy.addEventListener('click', null); 
    btnMedium.addEventListener('click', null);
    btnHard.addEventListener('click', null);
}
if (btnBackToTopics) {
    btnBackToTopics.addEventListener('click', showMainMenu);
}

// Controles del Quiz
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPrevQuestion);
menuButton.addEventListener('click', showMainMenu); // Vuelve al menú principal
restartButton.addEventListener('click', showMainMenu); // Vuelve al menú principal