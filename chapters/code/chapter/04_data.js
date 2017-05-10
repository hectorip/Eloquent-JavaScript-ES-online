var diario = [];

function agregarEntrada(eventos, meVolviArdilla) {
  diario.push({
    eventos: eventos,
    ardilla: meVolviArdilla
  });
}

function phi(tabla) {
  return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt((tabla[2] + tabla[3]) *
              (tabla[0] + tabla[1]) *
              (tabla[1] + tabla[3]) *
              (tabla[0] + tabla[2]));
}

function tieneEvento(evento, entrada) {
  return entrada.eventos.indexOf(evento) != -1;
}

function tablaPara(evento, diario) {
  var tabla = [0, 0, 0, 0];
  for (var i = 0; i < diario.length; i++) {
    var entrada = diario[i], index = 0;
    if (tieneEvento(evento, entrada)) index += 1;
    if (entrada.ardilla) index += 2;
    tabla[index] += 1;
  }
  return tabla;
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
