function hablar(linea) {
  console.log("El conejo " + this.tipo + " dice '" +
              line + "'");
}
var conejoBlanco = {tipo: "blanco", hablar: hablar};
var conejoGordo = {tipo: "gordo", hablar: hablar};

function Conejo(tipo) {
  this.tipo = tipo;
}

var conejoAsesino = new Conejo("asesino");
var conejoNegro = new Conejo("negro");

Conejo.prototype.hablar = function(linea) {
  console.log("El conejo " + this.tipo + " dice '" +
              linea + "'");
};

var mapa = {};
function guardarPhi(evento, phi) {
  mapa[evento] = phi;
}

guardarPhi("pizza", 0.069);
guardarPhi("árbol tocado", -0.081);

function alturasFila(filas) {
  return filas.map(function(fila) {
    return fila.reduce(function(max, celda) {
      return Math.max(max, celda.minAltura());
    }, 0);
  });
}

function anchurasColumna(filas) {
  return filas[0].map(function(_, i) {
    return filas.reduce(function(max, fila) {
      return Math.max(max, fila[i].minAnchura());
    }, 0);
  });
}

function dibujarTabla(filas) {
  var alturas = alturasFilas(filas);
  var anchuras = anchurasColumnas(filas);

  function dibujarLinea(bloques, numLinea) {
    return bloques.map(function(bloque) {
      return bloque[numLinea];
    }).join(" ");
  }

  function dibujarFila(fila, numFila) {
    var bloques = fila.map(function(celda, numColumna) {
      return celda.dibujar(anchuras[numColumna], alturas[numFila]);
    });
    return bloques[0].map(function(_, numLinea) {
      return dibujarLinea(bloques, numLinea);
    }).join("\n");
  }

  return filas.map(dibujarFila).join("\n");
}

function repetir(cadena, veces) {
  var resultado = "";
  for (var i = 0; i < veces; i++)
    resultado += cadena;
  return resultado;
}

function CeldaTexto(texto) {
  this.texto = texto.split("\n");
}
CeldaTexto.prototype.minAnchura = function() {
  return this.texto.reduce(function(anchura, linea) {
    return Math.max(anchura, linea.length);
  }, 0);
};
CeldaTexto.prototype.minAltura = function() {
  return this.texto.length;
};
CeldaTexto.prototype.dibujar = function(anchura, altura) {
  var resultado = [];
  for (var i = 0; i < altura; i++) {
    var linea = this.texto[i] || "";
    resultado.push(linea + repetir(" ", anchura - linea.length));
  }
  return resultado;
};

<<<<<<< HEAD
function CeldaSubrayada(contenido) {
  this.contenido = contenido;
};
CeldaSubrayada.prototype.minAnchura = function() {
  return this.contenido.minAnchura();
=======
function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
>>>>>>> marijnh/master
};
CeldaSubrayada.prototype.minAltura = function() {
  return this.contenido.minAltura() + 1;
};
CeldaSubrayada.prototype.dibujar = function(anchura, altura) {
  return this.contenido.dibujar(anchura, altura - 1)
    .concat([repetir("-", anchura)]);
};

function DCeldaTexto(texto) {
  CeldaTexto.call(this, texto);
}
DCeldaTexto.prototype = Object.create(CeldaTexto.prototype);
DCeldaTexto.prototype.dibujar = function(anchura, altura) {
  var resultado = [];
  for (var i = 0; i < altura; i++) {
    var linea = this.text[i] || "";
    resultado.push(repetir(" ", anchura - linea.length) + linea);
  }
  return resultado;
};

function datosTabla(datos) {
  var keys = Object.keys(datos[0]);
  var encabezados = keys.map(function(nombre) {
    return new CeldaSubrayada(new CeldaTexto(nombre));
  });
  var cuerpo = datos.map(function(row) {
    return keys.map(function(nombre) {
      var valor = row[nombre];
      // Esto ha cambiado:
      if (typeof valor == "number")
        return new DCeldaTexto(String(valor));
      else
        return new CeldaTexto(String(valor));
    });
  });
  return [encabezados].concat(cuerpo);
}
