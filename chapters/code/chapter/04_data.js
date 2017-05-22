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

function juntarCorrelaciones(diario) {
  var phis = {};
  for (var entrada = 0; entrada < diario.length; entrada++) {
    var eventos = diario[entrada].eventos;
    for (var i = 0; i < eventos.length; i++) {
      var evento = eventos[i];
      if (!(evento in phis))
        phis[evento] = phi(tablaPara(evento, diario));
    }
  }
  return phis;
}

var correlaciones = juntarCorrelaciones(DIARIO);

for (var i = 0; i < JOURNAL.length; i++) {
  var entrada = JOURNAL[i];
  if (hasEvent("peanuts", entrada) &&
     !hasEvent("brushed teeth", entrada))
    entrada.events.push("peanut teeth");
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
