var chapterData = [
  {
    "number": 0,
    "id": "00_intro",
    "title": "Introducción",
    "start_code": "console.log(sum(range(1, 10)));\n",
    "exercises": [],
    "include": [
      "code/intro.js"
    ]
  },
  {
    "number": 1,
    "id": "01_values",
    "title": "Values, Types, and Operators",
    "start_code": "",
    "exercises": [],
    "include": null
  },
  {
    "number": 2,
    "id": "02_program_structure",
    "title": "Program Structure",
    "start_code": "",
    "exercises": [
      {
        "name": "Looping a triangle",
        "file": "code/solutions/02_1_looping_a_triangle.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.",
        "solution": "for (var line = \"#\"; line.length < 8; line += \"#\")\n  console.log(line);"
      },
      {
        "name": "FizzBuzz",
        "file": "code/solutions/02_2_fizzbuzz.js",
        "number": 2,
        "type": "js",
        "code": "// Your code here.",
        "solution": "for (var n = 1; n <= 100; n++) {\n  var output = \"\";\n  if (n % 3 == 0)\n    output += \"Fizz\";\n  if (n % 5 == 0)\n    output += \"Buzz\";\n  console.log(output || n);\n}"
      },
      {
        "name": "Chess board",
        "file": "code/solutions/02_3_chess_board.js",
        "number": 3,
        "type": "js",
        "code": "// Your code here.",
        "solution": "var size = 8;\n\nvar board = \"\";\n\nfor (var y = 0; y < size; y++) {\n  for (var x = 0; x < size; x++) {\n    if ((x + y) % 2 == 0)\n      board += \" \";\n    else\n      board += \"#\";\n  }\n  board += \"\\n\";\n}\n\nconsole.log(board);"
      }
    ],
    "include": null
  },
  {
    "number": 3,
    "id": "03_functions",
    "title": "Functions",
    "start_code": "",
    "exercises": [
      {
        "name": "Minimum",
        "file": "code/solutions/03_1_minimum.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(min(0, 10));\n// → 0\nconsole.log(min(0, -10));\n// → -10",
        "solution": "function min(a, b) {\n  if (a < b)\n    return a;\n  else\n    return b;\n}\n\nconsole.log(min(0, 10));\n// → 0\nconsole.log(min(0, -10));\n// → -10"
      },
      {
        "name": "Recursion",
        "file": "code/solutions/03_2_recursion.js",
        "number": 2,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(isEven(50));\n// → true\nconsole.log(isEven(75));\n// → false\nconsole.log(isEven(-1));\n// → ??",
        "solution": "function isEven(n) {\n  if (n == 0)\n    return true;\n  else if (n == 1)\n    return false;\n  else if (n < 0)\n    return isEven(-n);\n  else\n    return isEven(n - 2);\n}\n\n\nconsole.log(isEven(50));\n// → true\nconsole.log(isEven(75));\n// → false\nconsole.log(isEven(-1));\n// → false"
      },
      {
        "name": "Bean counting",
        "file": "code/solutions/03_3_bean_counting.js",
        "number": 3,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(countBs(\"BBC\"));\n// → 2\nconsole.log(countChar(\"kakkerlak\", \"k\"));\n// → 4",
        "solution": "function countChar(string, ch) {\n  var counted = 0;\n  for (var i = 0; i < string.length; i++)\n    if (string.charAt(i) == ch)\n      counted += 1;\n  return counted;\n}\n\nfunction countBs(string) {\n  return countChar(string, \"B\");\n}\n\nconsole.log(countBs(\"BBC\"));\n// → 2\nconsole.log(countChar(\"kakkerlak\", \"k\"));\n// → 4"
      }
    ],
    "include": null
  },
  {
    "number": 4,
    "id": "04_data",
    "title": "Data Structures: Objects and Arrays",
    "start_code": "for (var event in correlations) {\n  var correlation = correlations[event];\n  if (correlation > 0.1 || correlation < -0.1)\n    console.log(event + \": \" + correlation);\n}\n// → brushed teeth: -0.3805211953\n// → work:          -0.1371988681\n// → reading:        0.1106828054\n",
    "exercises": [
      {
        "name": "The sum of a range",
        "file": "code/solutions/04_1_the_sum_of_a_range.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(sum(range(1, 10)));\n// → 55\nconsole.log(range(5, 2, -1));\n// → [5, 4, 3, 2]",
        "solution": "function range(start, end, step) {\n  if (step == null) step = 1;\n  var array = [];\n\n  if (step > 0) {\n    for (var i = start; i <= end; i += step)\n      array.push(i);\n  } else {\n    for (var i = start; i >= end; i += step)\n      array.push(i);\n  }\n  return array;\n}\n\nfunction sum(array) {\n  var total = 0;\n  for (var i = 0; i < array.length; i++)\n    total += array[i];\n  return total;\n}\n\nconsole.log(sum(range(1, 10)));\n// → 55\nconsole.log(range(5, 2, -1));\n// → [5, 4, 3, 2]"
      },
      {
        "name": "Reversing an array",
        "file": "code/solutions/04_2_reversing_an_array.js",
        "number": 2,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(reverseArray([\"A\", \"B\", \"C\"]));\n// → [\"C\", \"B\", \"A\"];\nvar arrayValue = [1, 2, 3, 4, 5];\nreverseArrayInPlace(arrayValue);\nconsole.log(arrayValue);\n// → [5, 4, 3, 2, 1]",
        "solution": "function reverseArray(array) {\n  var output = [];\n  for (var i = array.length - 1; i >= 0; i--)\n    output.push(array[i]);\n  return output;\n}\n\nfunction reverseArrayInPlace(array) {\n  for (var i = 0; i < Math.floor(array.length / 2); i++) {\n    var old = array[i];\n    array[i] = array[array.length - 1 - i];\n    array[array.length - 1 - i] = old;\n  }\n  return array;\n}\n\nconsole.log(reverseArray([\"A\", \"B\", \"C\"]));\n// → [\"C\", \"B\", \"A\"];\nvar arrayValue = [1, 2, 3, 4, 5];\nreverseArrayInPlace(arrayValue);\nconsole.log(arrayValue);\n// → [5, 4, 3, 2, 1]"
      },
      {
        "name": "A list",
        "file": "code/solutions/04_3_a_list.js",
        "number": 3,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(arrayToList([10, 20]));\n// → {value: 10, rest: {value: 20, rest: null}}\nconsole.log(listToArray(arrayToList([10, 20, 30])));\n// → [10, 20, 30]\nconsole.log(prepend(10, prepend(20, null)));\n// → {value: 10, rest: {value: 20, rest: null}}\nconsole.log(nth(arrayToList([10, 20, 30]), 1));\n// → 20",
        "solution": "function arrayToList(array) {\n  var list = null;\n  for (var i = array.length - 1; i >= 0; i--)\n    list = {value: array[i], rest: list};\n  return list;\n}\n\nfunction listToArray(list) {\n  var array = [];\n  for (var node = list; node; node = node.rest)\n    array.push(node.value);\n  return array;\n}\n\nfunction prepend(value, list) {\n  return {value: value, rest: list};\n}\n\nfunction nth(list, n) {\n  if (!list)\n    return undefined;\n  else if (n == 0)\n    return list.value;\n  else\n    return nth(list.rest, n - 1);\n}\n\nconsole.log(arrayToList([10, 20]));\n// → {value: 10, rest: {value: 20, rest: null}}\nconsole.log(listToArray(arrayToList([10, 20, 30])));\n// → [10, 20, 30]\nconsole.log(prepend(10, prepend(20, null)));\n// → {value: 10, rest: {value: 20, rest: null}}\nconsole.log(nth(arrayToList([10, 20, 30]), 1));\n// → 20"
      },
      {
        "name": "Deep comparison",
        "file": "code/solutions/04_4_deep_comparison.js",
        "number": 4,
        "type": "js",
        "code": "// Your code here.\n\nvar obj = {here: {is: \"an\"}, object: 2};\nconsole.log(deepEqual(obj, obj));\n// → true\nconsole.log(deepEqual(obj, {here: 1, object: 2}));\n// → false\nconsole.log(deepEqual(obj, {here: {is: \"an\"}, object: 2}));\n// → true",
        "solution": "function deepEqual(a, b) {\n  if (a === b) return true;\n  \n  if (a == null || typeof a != \"object\" ||\n      b == null || typeof b != \"object\")\n    return false;\n  \n  var propsInA = 0, propsInB = 0;\n\n  for (var prop in a)\n    propsInA += 1;\n\n  for (var prop in b) {\n    propsInB += 1;\n    if (!(prop in a) || !deepEqual(a[prop], b[prop]))\n      return false;\n  }\n\n  return propsInA == propsInB;\n}\n\nvar obj = {here: {is: \"an\"}, object: 2};\nconsole.log(deepEqual(obj, obj));\n// → true\nconsole.log(deepEqual(obj, {here: 1, object: 2}));\n// → false\nconsole.log(deepEqual(obj, {here: {is: \"an\"}, object: 2}));\n// → true"
      }
    ],
    "include": [
      "code/jacques_journal.js",
      "code/chapter/04_data.js"
    ],
    "links": [
      "code/chapter/04_data.zip"
    ]
  },
  {
    "number": 5,
    "id": "05_higher_order",
    "title": "Higher-Order Functions",
    "start_code": "var ph = byName[\"Philibert Haverbeke\"];\nconsole.log(reduceAncestors(ph, sharedDNA, 0) / 4);\n",
    "exercises": [
      {
        "name": "Flattening",
        "file": "code/solutions/05_1_flattening.js",
        "number": 1,
        "type": "js",
        "code": "var arrays = [[1, 2, 3], [4, 5], [6]];\n// Your code here.\n// → [1, 2, 3, 4, 5, 6]",
        "solution": "var arrays = [[1, 2, 3], [4, 5], [6]];\n\nconsole.log(arrays.reduce(function(flat, current) {\n  return flat.concat(current);\n}, []));\n\n// → [1, 2, 3, 4, 5, 6]"
      },
      {
        "name": "Mother-child age difference",
        "file": "code/solutions/05_2_mother-child_age_difference.js",
        "number": 2,
        "type": "js",
        "code": "function average(array) {\n  function plus(a, b) { return a + b; }\n  return array.reduce(plus) / array.length;\n}\n\nvar byName = {};\nancestry.forEach(function(person) {\n  byName[person.name] = person;\n});\n\n// Your code here.\n\n// → 31.2",
        "solution": "function average(array) {\n  function plus(a, b) { return a + b; }\n  return array.reduce(plus) / array.length;\n}\n\nvar byName = {};\nancestry.forEach(function(person) {\n  byName[person.name] = person;\n});\n\nvar differences = ancestry.filter(function(person) {\n  return byName[person.mother] != null;\n}).map(function(person) {\n  return person.born - byName[person.mother].born;\n});\n\nconsole.log(average(differences));\n// → 31.2"
      },
      {
        "name": "Historical life expectancy",
        "file": "code/solutions/05_3_historical_life_expectancy.js",
        "number": 3,
        "type": "js",
        "code": "function average(array) {\n  function plus(a, b) { return a + b; }\n  return array.reduce(plus) / array.length;\n}\n\n// Your code here.\n\n// → 16: 43.5\n//   17: 51.2\n//   18: 52.8\n//   19: 54.8\n//   20: 84.7\n//   21: 94",
        "solution": "function average(array) {\n  function plus(a, b) { return a + b; }\n  return array.reduce(plus) / array.length;\n}\n\nfunction groupBy(array, groupOf) {\n  var groups = {};\n  array.forEach(function(element) {\n    var groupName = groupOf(element);\n    if (groupName in groups)\n      groups[groupName].push(element);\n    else\n      groups[groupName] = [element];\n  });\n  return groups;\n}\n\nvar byCentury = groupBy(ancestry, function(person) {\n  return Math.ceil(person.died / 100);\n});\n\nfor (var century in byCentury) {\n  var ages = byCentury[century].map(function(person) {\n    return person.died - person.born;\n  });\n  console.log(century + \": \" + average(ages));\n}\n\n// → 16: 43.5\n//   17: 51.2\n//   18: 52.8\n//   19: 54.8\n//   20: 84.7\n//   21: 94"
      },
      {
        "name": "Every and then some",
        "file": "code/solutions/05_4_every_and_then_some.js",
        "number": 4,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(every([NaN, NaN, NaN], isNaN));\n// → true\nconsole.log(every([NaN, NaN, 4], isNaN));\n// → false\nconsole.log(some([NaN, 3, 4], isNaN));\n// → true\nconsole.log(some([2, 3, 4], isNaN));\n// → false",
        "solution": "function every(array, predicate) {\n  for (var i = 0; i < array.length; i++) {\n    if (!predicate(array[i]))\n      return false;\n  }\n  return true;\n}\n\nfunction some(array, predicate) {\n  for (var i = 0; i < array.length; i++) {\n    if (predicate(array[i]))\n      return true;\n  }\n  return false;\n}\n\nconsole.log(every([NaN, NaN, NaN], isNaN));\n// → true\nconsole.log(every([NaN, NaN, 4], isNaN));\n// → false\nconsole.log(some([NaN, 3, 4], isNaN));\n// → true\nconsole.log(some([2, 3, 4], isNaN));\n// → false"
      }
    ],
    "include": [
      "code/ancestry.js",
      "code/chapter/05_higher_order.js",
      "code/intro.js"
    ],
    "links": [
      "code/chapter/05_higher_order.zip"
    ]
  },
  {
    "number": 6,
    "id": "06_object",
    "title": "The Secret Life of Objects",
    "start_code": "console.log(drawTable(dataTable(MOUNTAINS)));\n",
    "exercises": [
      {
        "name": "A vector type",
        "file": "code/solutions/06_1_a_vector_type.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(new Vector(1, 2).plus(new Vector(2, 3)));\n// → Vector{x: 3, y: 5}\nconsole.log(new Vector(1, 2).minus(new Vector(2, 3)));\n// → Vector{x: -1, y: -1}\nconsole.log(new Vector(3, 4).length);\n// → 5",
        "solution": "function Vector(x, y) {\n  this.x = x;\n  this.y = y;\n}\n\nVector.prototype.plus = function(other) {\n  return new Vector(this.x + other.x, this.y + other.y);\n};\n\nVector.prototype.minus = function(other) {\n  return new Vector(this.x - other.x, this.y - other.y);\n};\n\nObject.defineProperty(Vector.prototype, \"length\", {\n  get: function() {\n    return Math.sqrt(this.x * this.x + this.y * this.y);\n  }\n});\n\nconsole.log(new Vector(1, 2).plus(new Vector(2, 3)));\n// → Vector{x: 3, y: 5}\nconsole.log(new Vector(1, 2).minus(new Vector(2, 3)));\n// → Vector{x: -1, y: -1}\nconsole.log(new Vector(3, 4).length);\n// → 5"
      },
      {
        "name": "Another cell",
        "file": "code/solutions/06_2_another_cell.js",
        "number": 2,
        "type": "js",
        "code": "// Your code here.\n\nvar sc = new StretchCell(new TextCell(\"abc\"), 1, 2);\nconsole.log(sc.minWidth());\n// → 3\nconsole.log(sc.minHeight());\n// → 2\nconsole.log(sc.draw(3, 2));\n// → [\"abc\", \"   \"]",
        "solution": "function StretchCell(inner, width, height) {\n  this.inner = inner;\n  this.width = width;\n  this.height = height;\n}\n\nStretchCell.prototype.minWidth = function() {\n  return Math.max(this.width, this.inner.minWidth());\n};\nStretchCell.prototype.minHeight = function() {\n  return Math.max(this.height, this.inner.minHeight());\n};\nStretchCell.prototype.draw = function(width, height) {\n  return this.inner.draw(width, height);\n};\n\nvar sc = new StretchCell(new TextCell(\"abc\"), 1, 2);\nconsole.log(sc.minWidth());\n// → 3\nconsole.log(sc.minHeight());\n// → 2\nconsole.log(sc.draw(3, 2));\n// → [\"abc\", \"   \"]"
      },
      {
        "name": "Sequence interface",
        "file": "code/solutions/06_3_sequence_interface.js",
        "number": 3,
        "type": "js",
        "code": "// Your code here.\n\nlogFive(new ArraySeq([1, 2]));\n// → 1\n// → 2\nlogFive(new RangeSeq(100, 1000));\n// → 100\n// → 101\n// → 102\n// → 103\n// → 104",
        "solution": "// I am going to use a system where a sequence object has two methods:\n//\n// * next(), which returns a boolean indicating whether there are more\n//   elements in the sequence, and moves it forward to the next\n//   element when there are.\n//\n// * current(), which returns the current element, and should only be\n//   called after next() has returned true at least once.\n\nfunction logFive(sequence) {\n  for (var i = 0; i < 5; i++) {\n    if (!sequence.next())\n      break;\n    console.log(sequence.current());\n  }\n}\n\nfunction ArraySeq(array) {\n  this.pos = -1;\n  this.array = array;\n}\nArraySeq.prototype.next = function() {\n  if (this.pos >= this.array.length - 1)\n    return false;\n  this.pos++;\n  return true;\n};\nArraySeq.prototype.current = function() {\n  return this.array[this.pos];\n};\n\nfunction RangeSeq(from, to) {\n  this.pos = from - 1;\n  this.to = to;\n}\nRangeSeq.prototype.next = function() {\n  if (this.pos >= this.to)\n    return false;\n  this.pos++;\n  return true;\n};\nRangeSeq.prototype.current = function() {\n  return this.pos;\n};\n\nlogFive(new ArraySeq([1, 2]));\n// → 1\n// → 2\nlogFive(new RangeSeq(100, 1000));\n// → 100\n// → 101\n// → 102\n// → 103\n// → 104\n\n// This alternative approach represents the empty sequence as null,\n// and gives non-empty sequences two methods:\n//\n// * head() returns the element at the start of the sequence.\n// \n// * rest() returns the rest of the sequence, or null if there are no\n//   elemements left.\n//\n// Because a JavaScript constructor can not return null, we add a make\n// function to constructors of this type of sequence, which constructs\n// a sequence, or returns null if the resulting sequence would be\n// empty.\n\nfunction logFive2(sequence) {\n  for (var i = 0; i < 5 && sequence != null; i++) {\n    console.log(sequence.head());\n    sequence = sequence.rest();\n  }\n}\n\nfunction ArraySeq2(array, offset) {\n  this.array = array;\n  this.offset = offset;\n}\nArraySeq2.prototype.rest = function() {\n  return ArraySeq2.make(this.array, this.offset + 1);\n};\nArraySeq2.prototype.head = function() {\n  return this.array[this.offset];\n};\nArraySeq2.make = function(array, offset) {\n  if (offset == null) offset = 0;\n  if (offset >= array.length)\n    return null;\n  else\n    return new ArraySeq2(array, offset);\n};\n\nfunction RangeSeq2(from, to) {\n  this.from = from;\n  this.to = to;\n}\nRangeSeq2.prototype.rest = function() {\n  return RangeSeq2.make(this.from + 1, this.to);\n};\nRangeSeq2.prototype.head = function() {\n  return this.from;\n};\nRangeSeq2.make = function(from, to) {\n  if (from > to)\n    return null;\n  else\n    return new RangeSeq2(from, to);\n};\n\nlogFive2(ArraySeq2.make([1, 2]));\n// → 1\n// → 2\nlogFive2(RangeSeq2.make(100, 1000));\n// → 100\n// → 101\n// → 102\n// → 103\n// → 104"
      }
    ],
    "include": [
      "code/mountains.js",
      "code/chapter/06_object.js"
    ],
    "links": [
      "code/chapter/06_object.zip"
    ]
  },
  {
    "number": 7,
    "id": "07_elife",
    "title": "Project: Electronic Life",
    "start_code": "animateWorld(valley);\n",
    "exercises": [
      {
        "name": "Artificial stupidity",
        "file": "code/solutions/07_1_artificial_stupidity.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here\nfunction SmartPlantEater() {}\n\nanimateWorld(new LifelikeWorld(\n  [\"############################\",\n   \"#####                 ######\",\n   \"##   ***                **##\",\n   \"#   *##**         **  O  *##\",\n   \"#    ***     O    ##**    *#\",\n   \"#       O         ##***    #\",\n   \"#                 ##**     #\",\n   \"#   O       #*             #\",\n   \"#*          #**       O    #\",\n   \"#***        ##**    O    **#\",\n   \"##****     ###***       *###\",\n   \"############################\"],\n  {\"#\": Wall,\n   \"O\": SmartPlantEater,\n   \"*\": Plant}\n));",
        "solution": "function SmartPlantEater() {\n  this.energy = 30;\n  this.direction = \"e\";\n}\nSmartPlantEater.prototype.act = function(context) {\n  var space = context.find(\" \");\n  if (this.energy > 90 && space)\n    return {type: \"reproduce\", direction: space};\n  var plants = context.findAll(\"*\");\n  if (plants.length > 1)\n    return {type: \"eat\", direction: randomElement(plants)};\n  if (context.look(this.direction) != \" \" && space)\n    this.direction = space;\n  return {type: \"move\", direction: this.direction};\n};\n\nanimateWorld(new LifelikeWorld(\n  [\"############################\",\n   \"#####                 ######\",\n   \"##   ***                **##\",\n   \"#   *##**         **  O  *##\",\n   \"#    ***     O    ##**    *#\",\n   \"#       O         ##***    #\",\n   \"#                 ##**     #\",\n   \"#   O       #*             #\",\n   \"#*          #**       O    #\",\n   \"#***        ##**    O    **#\",\n   \"##****     ###***       *###\",\n   \"############################\"],\n  {\"#\": Wall,\n   \"O\": SmartPlantEater,\n   \"*\": Plant}\n));"
      },
      {
        "name": "Predators",
        "file": "code/solutions/07_2_predators.js",
        "number": 2,
        "type": "js",
        "code": "// Your code here\nfunction Tiger() {}\n\nanimateWorld(new LifelikeWorld(\n  [\"####################################################\",\n   \"#                 ####         ****              ###\",\n   \"#   *  @  ##                 ########       OO    ##\",\n   \"#   *    ##        O O                 ****       *#\",\n   \"#       ##*                        ##########     *#\",\n   \"#      ##***  *         ****                     **#\",\n   \"#* **  #  *  ***      #########                  **#\",\n   \"#* **  #      *               #   *              **#\",\n   \"#     ##              #   O   #  ***          ######\",\n   \"#*            @       #       #   *        O  #    #\",\n   \"#*                    #  ######                 ** #\",\n   \"###          ****          ***                  ** #\",\n   \"#       O                        @         O       #\",\n   \"#   *     ##  ##  ##  ##               ###      *  #\",\n   \"#   **         #              *       #####  O     #\",\n   \"##  **  O   O  #  #    ***  ***        ###      ** #\",\n   \"###               #   *****                    ****#\",\n   \"####################################################\"],\n  {\"#\": Wall,\n   \"@\": Tiger,\n   \"O\": SmartPlantEater, // from previous exercise\n   \"*\": Plant}\n));",
        "solution": "function SmartPlantEater() {\n  this.energy = 30;\n  this.direction = \"e\";\n}\nSmartPlantEater.prototype.act = function(context) {\n  var space = context.find(\" \");\n  if (this.energy > 90 && space)\n    return {type: \"reproduce\", direction: space};\n  var plants = context.findAll(\"*\");\n  if (plants.length > 1)\n    return {type: \"eat\", direction: randomElement(plants)};\n  if (context.look(this.direction) != \" \" && space)\n    this.direction = space;\n  return {type: \"move\", direction: this.direction};\n};\n\nfunction Tiger() {\n  this.energy = 100;\n  this.direction = \"w\";\n  // Used to track the amount of prey seen per turn in the last six turns\n  this.preySeen = [];\n}\nTiger.prototype.act = function(context) {\n  // Average number of prey seen per turn\n  var seenPerTurn = this.preySeen.reduce(function(a, b) {\n    return a + b;\n  }, 0) / this.preySeen.length;\n  var prey = context.findAll(\"O\");\n  this.preySeen.push(prey.length);\n  // Drop the first element from the array when it is longer than 6\n  if (this.preySeen.length > 6)\n    this.preySeen.shift();\n\n  // Only eat if the predator saw more than ¼ prey animal per turn\n  if (prey.length && seenPerTurn > 0.25)\n    return {type: \"eat\", direction: randomElement(prey)};\n    \n  var space = context.find(\" \");\n  if (this.energy > 400 && space)\n    return {type: \"reproduce\", direction: space};\n  if (context.look(this.direction) != \" \" && space)\n    this.direction = space;\n  return {type: \"move\", direction: this.direction};\n};\n\nanimateWorld(new LifelikeWorld(\n  [\"####################################################\",\n   \"#                 ####         ****              ###\",\n   \"#   *  @  ##                 ########       OO    ##\",\n   \"#   *    ##        O O                 ****       *#\",\n   \"#       ##*                        ##########     *#\",\n   \"#      ##***  *         ****                     **#\",\n   \"#* **  #  *  ***      #########                  **#\",\n   \"#* **  #      *               #   *              **#\",\n   \"#     ##              #   O   #  ***          ######\",\n   \"#*            @       #       #   *        O  #    #\",\n   \"#*                    #  ######                 ** #\",\n   \"###          ****          ***                  ** #\",\n   \"#       O                        @         O       #\",\n   \"#   *     ##  ##  ##  ##               ###      *  #\",\n   \"#   **         #              *       #####  O     #\",\n   \"##  **  O   O  #  #    ***  ***        ###      ** #\",\n   \"###               #   *****                    ****#\",\n   \"####################################################\"],\n  {\"#\": Wall,\n   \"@\": Tiger,\n   \"O\": SmartPlantEater, // from previous exercise\n   \"*\": Plant}\n));"
      }
    ],
    "include": [
      "code/chapter/07_elife.js",
      "code/animateworld.js"
    ],
    "links": [
      "code/chapter/07_elife.zip"
    ]
  },
  {
    "number": 8,
    "id": "08_error",
    "title": "Bugs and Error Handling",
    "start_code": "",
    "exercises": [
      {
        "name": "Retry",
        "file": "code/solutions/08_1_retry.js",
        "number": 1,
        "type": "js",
        "code": "function MultiplicatorUnitFailure() {}\n\nfunction primitiveMultiply(a, b) {\n  if (Math.random() < 0.5)\n    return a * b;\n  else\n    throw new MultiplicatorUnitFailure();\n}\n\nfunction reliableMultiply(a, b) {\n  // Your code here.\n}\n\nconsole.log(reliableMultiply(8, 8));\n// → 64",
        "solution": "function MultiplicatorUnitFailure() {}\n\nfunction primitiveMultiply(a, b) {\n  if (Math.random() < 0.5)\n    return a * b;\n  else\n    throw new MultiplicatorUnitFailure();\n}\n\nfunction reliableMultiply(a, b) {\n  for (;;) {\n    try {\n      return primitiveMultiply(a, b);\n    } catch (e) {\n      if (!(e instanceof MultiplicatorUnitFailure))\n        throw e;\n    }\n  }\n}\n\nconsole.log(reliableMultiply(8, 8));\n// → 64"
      },
      {
        "name": "The locked box",
        "file": "code/solutions/08_2_the_locked_box.js",
        "number": 2,
        "type": "js",
        "code": "function withBoxUnlocked(body) {\n  // Your code here.\n}\n\nwithBoxUnlocked(function() {\n  box.content.push(\"gold piece\");\n});\n\ntry {\n  withBoxUnlocked(function() {\n    throw new Error(\"Pirates on the horizon! Abort!\");\n  });\n} catch (e) {\n  console.log(\"Error raised:\", e);\n}\nconsole.log(box.locked);\n// → true",
        "solution": "function withBoxUnlocked(body) {\n  var locked = box.locked;\n  if (!locked)\n    return body();\n\n  box.unlock();\n  try {\n    return body();\n  } finally {\n    box.lock();\n  }\n}\n\nwithBoxUnlocked(function() {\n  box.content.push(\"gold piece\");\n});\n\ntry {\n  withBoxUnlocked(function() {\n    throw new Error(\"Pirates on the horizon! Abort!\");\n  });\n} catch (e) {\n  console.log(\"Error raised:\", e);\n}\n\nconsole.log(box.locked);\n// → true"
      }
    ],
    "include": [
      "code/chapter/08_error.js"
    ]
  },
  {
    "number": 9,
    "id": "09_regexp",
    "title": "Regular Expressions",
    "start_code": "",
    "exercises": [
      {
        "name": "Regexp golf",
        "file": "code/solutions/09_1_regexp_golf.js",
        "number": 1,
        "type": "js",
        "code": "// Fill in the regular expressions\n\nverify(/.../,\n       [\"my car\", \"bad cats\"],\n       [\"camper\", \"high art\"]);\n\nverify(/.../,\n       [\"pop culture\", \"mad props\"],\n       [\"plop\"]);\n\nverify(/.../,\n       [\"ferret\", \"ferry\", \"ferrari\"],\n       [\"ferrum\", \"transfer A\"]);\n\nverify(/.../,\n       [\"how delicious\", \"spacious room\"],\n       [\"ruinous\", \"consciousness\"]);\n\nverify(/.../,\n       [\"bad punctuation .\"],\n       [\"escape the dot\"]);\n\nverify(/.../,\n       [\"hottentottententen\"],\n       [\"no\", \"hotten totten tenten\"]);\n\nverify(/.../,\n       [\"red platypus\", \"wobbling nest\"],\n       [\"earth bed\", \"learning ape\"]);\n\n\nfunction verify(regexp, yes, no) {\n  // Ignore unfinished exercises\n  if (regexp.source == \"...\") return;\n  yes.forEach(function(s) {\n    if (!regexp.test(s))\n      console.log(\"Failure to match '\" + s + \"'\");\n  });\n  no.forEach(function(s) {\n    if (regexp.test(s))\n      console.log(\"Unexpected match for '\" + s + \"'\");\n  });\n}",
        "solution": "// Fill in the regular expressions\n\nverify(/ca[rt]/,\n       [\"my car\", \"bad cats\"],\n       [\"camper\", \"high art\"]);\n\nverify(/pr?op/,\n       [\"pop culture\", \"mad props\"],\n       [\"plop\"]);\n\nverify(/ferr(et|y|ari)/,\n       [\"ferret\", \"ferry\", \"ferrari\"],\n       [\"ferrum\", \"transfer A\"]);\n\nverify(/ious\\b/,\n       [\"how delicious\", \"spacious room\"],\n       [\"ruinous\", \"consciousness\"]);\n\nverify(/\\s[.,;]/,\n       [\"bad punctuation .\"],\n       [\"escape the dot\"]);\n\nverify(/\\w{7,}/,\n       [\"hottentottententen\"],\n       [\"no\", \"hotten totten tenten\"]);\n\nverify(/\\b[a-df-z]+\\b/i,\n       [\"red platypus\", \"wobbling nest\"],\n       [\"earth bed\", \"learning ape\"]);\n\n\nfunction verify(regexp, yes, no) {\n  // Ignore unfinished exercises\n  if (regexp.source == \"...\") return;\n  yes.forEach(function(s) {\n    if (!regexp.test(s))\n      console.log(\"Failure to match '\" + s + \"'\");\n  });\n  no.forEach(function(s) {\n    if (regexp.test(s))\n      console.log(\"Unexpected match for '\" + s + \"'\");\n  });\n}"
      },
      {
        "name": "Quoting style",
        "file": "code/solutions/09_2_quoting_style.js",
        "number": 2,
        "type": "js",
        "code": "var text = \"'I'm the cook,' he said, 'it's my job.'\";\n// Change this call.\nconsole.log(text.replace(/A/g, \"B\"));\n// → \"I'm the cook,\" he said, \"it's my job.\"",
        "solution": "var text = \"'I'm the cook,' he said, 'it's my job.'\";\n\nconsole.log(text.replace(/(^|\\W)'|'(\\W|$)/g, '$1\"$2'));\n// → \"I'm the cook,\" he said, \"it's my job.\""
      },
      {
        "name": "Numbers again",
        "file": "code/solutions/09_3_numbers_again.js",
        "number": 3,
        "type": "js",
        "code": "// Fill in this regular expression.\nvar number = /^...$/;\n\n// Tests:\n[\"1\", \"-1\", \"+15\", \"1.55\", \".5\", \"5.\", \"1.3e2\", \"1E-4\",\n \"1e+12\"].forEach(function(s) {\n  if (!number.test(s))\n    console.log(\"Failed to match '\" + s + \"'\");\n});\n[\"1a\", \"+-1\", \"1.2.3\", \"1+1\", \"1e4.5\", \".5.\", \"1f5\",\n \".\"].forEach(function(s) {\n  if (number.test(s))\n    console.log(\"Incorrectly accepted '\" + s + \"'\");\n});",
        "solution": "// Fill in this regular expression.\nvar number = /^(\\+|-|)(\\d+(\\.\\d*)?|\\.\\d+)([eE](\\+|-|)\\d+)?$/;\n\n// Tests:\n[\"1\", \"-1\", \"+15\", \"1.55\", \".5\", \"5.\", \"1.3e2\", \"1E-4\",\n \"1e+12\"].forEach(function(s) {\n  if (!number.test(s))\n    console.log(\"Failed to match '\" + s + \"'\");\n});\n[\"1a\", \"+-1\", \"1.2.3\", \"1+1\", \"1e4.5\", \".5.\", \"1f5\",\n \".\"].forEach(function(s) {\n  if (number.test(s))\n    console.log(\"Incorrectly accepted '\" + s + \"'\");\n});"
      }
    ],
    "include": null
  },
  {
    "number": 10,
    "id": "10_modules",
    "title": "Modules",
    "start_code": "",
    "exercises": [
      {
        "name": "Month names",
        "file": "code/solutions/10_1_month_names.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.\n\nconsole.log(month.name(2));\n// → March\nconsole.log(month.number(\"November\"));\n// → 10",
        "solution": "var month = function() {\n  var names = [\"January\", \"February\", \"March\", \"April\", \"May\",\n               \"June\", \"July\", \"August\", \"September\", \"October\",\n               \"November\", \"December\"];\n  return {\n    name: function(number) { return names[number]; },\n    number: function(name) { return names.indexOf(name); }\n  };\n}();\n\n\nconsole.log(month.name(2));\n// → March\nconsole.log(month.number(\"November\"));\n// → 10"
      }
    ],
    "include": [
      "code/chapter/10_modules.js",
      "code/loadfile.js"
    ]
  },
  {
    "number": 11,
    "id": "11_language",
    "title": "Project: A Programming Language",
    "start_code": "run(\"do(define(plusOne, fun(a, +(a, 1))),\",\n    \"   print(plusOne(10)))\");\n\nrun(\"do(define(pow, fun(base, exp,\",\n    \"     if(==(exp, 0),\",\n    \"        1,\",\n    \"        *(base, pow(base, -(exp, 1)))))),\",\n    \"   print(pow(2, 10)))\");\n",
    "exercises": [
      {
        "name": "Arrays",
        "file": "code/solutions/11_1_arrays.js",
        "number": 1,
        "type": "js",
        "code": "// Modify these definitions...\n\ntopEnv[\"array\"] = \"...\";\n\ntopEnv[\"length\"] = \"...\";\n\ntopEnv[\"element\"] = \"...\";\n\nrun(\"do(define(sum, fun(array,\",\n    \"     do(define(i, 0),\",\n    \"        define(sum, 0),\",\n    \"        while(<(i, length(array)),\",\n    \"          do(define(sum, +(sum, element(array, i))),\",\n    \"             define(i, +(i, 1)))),\",\n    \"        sum))),\",\n    \"   print(sum(array(1, 2, 3))))\");\n// → 6",
        "solution": "topEnv[\"array\"] = function() {\n  return Array.prototype.slice.call(arguments, 0);\n};\n\ntopEnv[\"length\"] = function(array) {\n  return array.length;\n};\n\ntopEnv[\"element\"] = function(array, i) {\n  return array[i];\n};\n\nrun(\"do(define(sum, fun(array,\",\n    \"     do(define(i, 0),\",\n    \"        define(sum, 0),\",\n    \"        while(<(i, length(array)),\",\n    \"          do(define(sum, +(sum, element(array, i))),\",\n    \"             define(i, +(i, 1)))),\",\n    \"        sum))),\",\n    \"   print(sum(array(1, 2, 3))))\");\n// → 6"
      },
      {
        "name": "Comments",
        "file": "code/solutions/11_3_comments.js",
        "number": 3,
        "type": "js",
        "code": "// This is the old skipSpace. Modify it...\nfunction skipSpace(string) {\n  var first = string.search(/\\S/);\n  if (first == -1) return \"\";\n  return string.slice(first);\n}\n\nconsole.log(parse(\"# hello\\nx\"));\n// → {type: \"word\", name: \"x\"}\n\nconsole.log(parse(\"a # one\\n   # two\\n()\"));\n// → {type: \"apply\",\n//    operator: {type: \"word\", name: \"a\"},\n//    args: []}",
        "solution": "function skipSpace(string) {\n  var skippable = string.match(/^(\\s|#.*)*/);\n  return string.slice(skippable[0].length);\n}\n\nconsole.log(parse(\"# hello\\nx\"));\n// → {type: \"word\", name: \"x\"}\n\nconsole.log(parse(\"a # one\\n   # two\\n()\"));\n// → {type: \"apply\",\n//    operator: {type: \"word\", name: \"x\"},\n//    args: []}"
      },
      {
        "name": "Fixing scope",
        "file": "code/solutions/11_4_fixing_scope.js",
        "number": 4,
        "type": "js",
        "code": "specialForms[\"set\"] = function(args, env) {\n  // Your code here.\n};\n\nrun(\"do(define(x, 4),\",\n    \"   define(setx, fun(val, set(x, val))),\",\n    \"   setx(50),\",\n    \"   print(x))\");\n// → 50\nrun(\"set(quux, true)\");\n// → Some kind of ReferenceError",
        "solution": "specialForms[\"set\"] = function(args, env) {\n  if (args.length != 2 || args[0].type != \"word\")\n    throw new SyntaxError(\"Bad use of set\");\n  var varName = args[0].name;\n  var value = evaluate(args[1], env);\n\n  for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {\n    if (Object.prototype.hasOwnProperty.call(scope, varName)) {\n      scope[varName] = value;\n      return value;\n    }\n  }\n  throw new ReferenceError(\"Setting undefined variable \" + varName);\n};\n\nrun(\"do(define(x, 4),\",\n    \"   define(setx, fun(val, set(x, val))),\",\n    \"   setx(50),\",\n    \"   print(x))\");\n// → 50\nrun(\"set(quux, true)\");\n// → Some kind of ReferenceError"
      }
    ],
    "include": [
      "code/chapter/11_language.js"
    ],
    "links": [
      "code/chapter/11_language.zip"
    ]
  },
  {
    "number": 12,
    "id": "12_browser",
    "title": "JavaScript and the Browser",
    "start_code": "",
    "exercises": [],
    "include": null
  },
  {
    "number": 13,
    "id": "13_dom",
    "title": "The Document Object Model",
    "start_code": "",
    "exercises": [
      {
        "name": "Build a table",
        "file": "code/solutions/13_1_build_a_table.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<style>\n  /* Defines a cleaner look for tables */\n  table  { border-collapse: collapse; }\n  td, th { border: 1px solid black; padding: 3px 8px; }\n  th     { text-align: left; }\n</style>\n\n<script>\n  function buildTable(data) {\n    // Your code here.\n  }\n\n  document.body.appendChild(buildTable(MOUNTAINS));\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<style>\n  /* Defines a cleaner look for tables */\n  table  { border-collapse: collapse; }\n  td, th { border: 1px solid black; padding: 3px 8px; }\n  th     { text-align: left; }\n</style>\n\n<body>\n<script>\n  function buildTable(data) {\n    var table = document.createElement(\"table\");\n  \n    var fields = Object.keys(data[0]);\n    var headRow = document.createElement(\"tr\");\n    fields.forEach(function(field) {\n      var headCell = document.createElement(\"th\");\n      headCell.textContent = field;\n      headRow.appendChild(headCell);\n    });\n    table.appendChild(headRow);\n\n    data.forEach(function(object) {\n      var row = document.createElement(\"tr\");\n      fields.forEach(function(field) {\n        var cell = document.createElement(\"td\");\n        cell.textContent = object[field];\n        if (typeof object[field] == \"number\")\n          cell.style.textAlign = \"right\";\n        row.appendChild(cell);\n      });\n      table.appendChild(row);\n    });\n\n    return table;\n  }\n\n  document.body.appendChild(buildTable(MOUNTAINS));\n</script>\n</body>"
      },
      {
        "name": "Elements by tag name",
        "file": "code/solutions/13_2_elements_by_tag_name.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<h1>Heading with a <span>span</span> element.</h1>\n<p>A paragraph with <span>one</span>, <span>two</span>\n  spans.</p>\n\n<script>\n  function byTagName(node, tagName) {\n    // Your code here.\n  }\n\n  console.log(byTagName(document.body, \"h1\").length);\n  // → 1\n  console.log(byTagName(document.body, \"span\").length);\n  // → 3\n  var para = document.querySelector(\"p\");\n  console.log(byTagName(para, \"span\").length);\n  // → 2\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<h1>Heading with a <span>span</span> element.</h1>\n<p>A paragraph with <span>one</span>, <span>two</span>\n  spans.</p>\n\n<script>\n  function byTagName(node, tagName) {\n    var found = [];\n    tagName = tagName.toUpperCase();\n\n    function explore(node) {\n      for (var i = 0; i < node.childNodes.length; i++) {\n        var child = node.childNodes[i];\n        if (child.nodeType == document.ELEMENT_NODE) {\n          if (child.nodeName == tagName)\n            found.push(child);\n          explore(child);\n        }\n      }\n    }\n\n    explore(node);\n    return found;\n  }\n\n  console.log(byTagName(document.body, \"h1\").length);\n  // → 1\n  console.log(byTagName(document.body, \"span\").length);\n  // → 3\n  var para = document.querySelector(\"p\");\n  console.log(byTagName(para, \"span\").length);\n  // → 2\n</script>"
      },
      {
        "name": "The cat's hat",
        "file": "code/solutions/13_3_the_cats_hat.html",
        "number": 3,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<img src=\"img/cat.png\" id=\"cat\" style=\"position: absolute\">\n<img src=\"img/hat.png\" id=\"hat\" style=\"position: absolute\">\n\n<script>\n  var cat = document.querySelector(\"#cat\");\n  var hat = document.querySelector(\"#hat\");\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/mountains.js\"></script>\n<script src=\"code/chapter/13_dom.js\"></script>\n\n<body style=\"min-height: 200px\">\n\n<img src=\"img/cat.png\" id=\"cat\" style=\"position: absolute\">\n<img src=\"img/hat.png\" id=\"hat\" style=\"position: absolute\">\n\n<script>\n  var cat = document.querySelector(\"#cat\");\n  var hat = document.querySelector(\"#hat\");\n\n  var angle = 0, lastTime = null;\n  function animate(time) {\n    if (lastTime != null)\n      angle += (time - lastTime) * 0.0015;\n    lastTime = time;\n\n    cat.style.top = (Math.sin(angle) * 50 + 80) + \"px\";\n    cat.style.left = (Math.cos(angle) * 200 + 230) + \"px\";\n    // By adding π to the angle, the hat ends up half a circle ahead of the cat\n    var hatAngle = angle + Math.PI;\n    hat.style.top = (Math.sin(hatAngle) * 50 + 80) + \"px\";\n    hat.style.left = (Math.cos(hatAngle) * 200 + 230) + \"px\";\n\n    requestAnimationFrame(animate);\n  }\n  requestAnimationFrame(animate);\n</script>\n\n</body>"
      }
    ],
    "include": [
      "code/mountains.js",
      "code/chapter/13_dom.js"
    ]
  },
  {
    "number": 14,
    "id": "14_event",
    "title": "Handling Events",
    "start_code": "",
    "exercises": [
      {
        "name": "Censored keyboard",
        "file": "code/solutions/14_1_censored_keyboard.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n\n<input type=\"text\">\n<script>\n  var field = document.querySelector(\"input\");\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n\n<input type=\"text\">\n<script>\n  var field = document.querySelector(\"input\");\n  field.addEventListener(\"keydown\", function(event) {\n    if (event.keyCode == \"Q\".charCodeAt(0) ||\n        event.keyCode == \"W\".charCodeAt(0) ||\n        event.keyCode == \"X\".charCodeAt(0))\n      event.preventDefault();\n  });\n</script>"
      },
      {
        "name": "Mouse trail",
        "file": "code/solutions/14_2_mouse_trail.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n\n<style>\n  .trail { /* className for the trail elements */\n    position: absolute;\n    height: 6px; width: 6px;\n    border-radius: 3px;\n    background: teal;\n  }\n  body {\n    height: 300px;\n  }\n</style>\n\n<script>\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n\n<style>\n  .trail { /* className for the trail elements */\n    position: absolute;\n    height: 6px; width: 6px;\n    border-radius: 3px;\n    background: teal;\n  }\n  body {\n    height: 300px;\n  }\n</style>\n\n<body>\n<script>\n  var dots = [];\n  for (var i = 0; i < 12; i++) {\n    var node = document.createElement(\"div\");\n    node.className = \"trail\";\n    document.body.appendChild(node);\n    dots.push(node);\n  }\n  var currentDot = 0;\n  \n  addEventListener(\"mousemove\", function(event) {\n    var dot = dots[currentDot];\n    dot.style.left = (event.pageX - 3) + \"px\";\n    dot.style.top = (event.pageY - 3) + \"px\";\n    currentDot = (currentDot + 1) % dots.length;\n  });\n</script>\n</body>"
      },
      {
        "name": "Tabs",
        "file": "code/solutions/14_3_tabs.html",
        "number": 3,
        "type": "html",
        "code": "<!doctype html>\n\n<div id=\"wrapper\">\n  <div data-tabname=\"one\">Tab one</div>\n  <div data-tabname=\"two\">Tab two</div>\n  <div data-tabname=\"three\">Tab three</div>\n</div>\n<script>\n  function asTabs(node) {\n    // Your code here.\n  }\n  asTabs(document.querySelector(\"#wrapper\"));\n</script>",
        "solution": "<!doctype html>\n\n<div id=\"wrapper\">\n  <div data-tabname=\"one\">Tab one</div>\n  <div data-tabname=\"two\">Tab two</div>\n  <div data-tabname=\"three\">Tab three</div>\n</div>\n<script>\n  function asTabs(node) {\n    var tabs = [];\n    for (var i = 0; i < node.childNodes.length; i++) {\n      var child = node.childNodes[i];\n      if (child.nodeType == document.ELEMENT_NODE)\n        tabs.push(child);\n    }\n\n    var tabList = document.createElement(\"div\");\n    tabs.forEach(function(tab, i) {\n      var button = document.createElement(\"button\");\n      button.textContent = tab.getAttribute(\"data-tabname\");\n      button.addEventListener(\"click\", function() { selectTab(i); });\n      tabList.appendChild(button);\n    });\n    node.insertBefore(tabList, node.firstChild);\n\n    function selectTab(n) {\n      tabs.forEach(function(tab, i) {\n        if (i == n)\n          tab.style.display = \"\";\n        else\n          tab.style.display = \"none\";\n      });\n      for (var i = 0; i < tabList.childNodes.length; i++) {\n        if (i == n)\n          tabList.childNodes[i].style.background = \"violet\";\n        else\n          tabList.childNodes[i].style.background = \"\";\n      }\n    }\n    selectTab(0);\n  }\n  asTabs(document.querySelector(\"#wrapper\"));\n</script>"
      }
    ],
    "include": null
  },
  {
    "number": 15,
    "id": "15_game",
    "title": "Project: A Platform Game",
    "start_code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/game.css\">\n\n<body>\n  <script>\n    runGame(GAME_LEVELS, DOMDisplay);\n  </script>\n</body>\n",
    "exercises": [
      {
        "name": "Game over",
        "file": "code/solutions/15_1_game_over.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/game.css\">\n\n<body>\n<script>\n  // The old runGame function. Modify it...\n  function runGame(plans, Display) {\n    function startLevel(n) {\n      runLevel(new Level(plans[n]), Display, function(status) {\n        if (status == \"lost\")\n          startLevel(n);\n        else if (n < plans.length - 1)\n          startLevel(n + 1);\n        else\n          console.log(\"You win!\");\n      });\n    }\n    startLevel(0);\n  }\n  runGame(GAME_LEVELS, DOMDisplay);\n</script>\n</body>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/game.css\">\n\n<body>\n<script>\n  function runGame(plans, Display) {\n    function startLevel(n, lives) {\n      runLevel(new Level(plans[n]), Display, function(status) {\n        if (status == \"lost\") {\n          if (lives > 0) {\n            startLevel(n, lives - 1);\n          } else {\n            console.log(\"Game over\");\n            startLevel(0, 3);\n          }     \n        } else if (n < plans.length - 1) {\n          startLevel(n + 1, lives);\n        } else {\n          console.log(\"You win!\");\n        }\n      });\n    }\n    startLevel(0, 3);\n  }\n  runGame(GAME_LEVELS, DOMDisplay);\n</script>\n</body>"
      },
      {
        "name": "Pausing the game",
        "file": "code/solutions/15_2_pausing_the_game.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/game.css\">\n\n<body>\n<script>\n  // The old runLevel function. Modify this...\n  function runLevel(level, Display, andThen) {\n    var display = new Display(document.body, level);\n    runAnimation(function(step) {\n      level.animate(step, arrows);\n      display.drawFrame(step);\n      if (level.isFinished()) {\n        display.clear();\n        if (andThen)\n          andThen(level.status);\n        return false;\n      }\n    });\n  }\n  runGame(GAME_LEVELS, DOMDisplay);\n</script>\n</body>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/game.css\">\n\n<body>\n<script>\n  // To know when to stop and restart the animation, a level that is\n  // being displayed may be in three states:\n  //\n  // * \"yes\":     Running normally.\n  // * \"no\":      Paused, animation isn't running\n  // * \"pausing\": Must pause, but animation is still running\n  //\n  // The key handler, when it notices escape being pressed, will do a\n  // different thing depending on the current state. When running is\n  // \"yes\" or \"pausing\", it will switch to the other of those two\n  // states. When it is \"no\", it will restart the animation and switch\n  // the state to \"yes\".\n  //\n  // The animation function, when state is \"pausing\", will set the state\n  // to \"no\" and return false to stop the animation.\n\n  function runLevel(level, Display, andThen) {\n    var display = new Display(document.body, level);\n    var running = \"yes\";\n    function handleKey(event) {\n      if (event.keyCode == 27) {\n        if (running == \"no\") {\n          running = \"yes\";\n          runAnimation(animation);\n        } else if (running == \"pausing\") {\n          running = \"yes\";\n        } else if (running == \"yes\") {\n          running = \"pausing\";\n        }\n      }\n    }\n    addEventListener(\"keydown\", handleKey);\n    var arrows = trackKeys(arrowCodes);\n\n    function animation(step) {\n      if (running == \"pausing\") {\n        running = \"no\";\n        return false;\n      }\n\n      level.animate(step, arrows);\n      display.drawFrame(step);\n      if (level.isFinished()) {\n        display.clear();\n        // Here we remove all our event handlers\n        removeEventListener(\"keydown\", handleKey);\n        arrows.unregister(); // (see change to trackKeys below)\n        if (andThen)\n          andThen(level.status);\n        return false;\n      }\n    }\n    runAnimation(animation);\n  }\n\n  function trackKeys(codes) {\n    var pressed = Object.create(null);\n    function handler(event) {\n      if (codes.hasOwnProperty(event.keyCode)) {\n        var state = event.type == \"keydown\";\n        pressed[codes[event.keyCode]] = state;\n        event.preventDefault();\n      }\n    }\n    addEventListener(\"keydown\", handler);\n    addEventListener(\"keyup\", handler);\n\n    // This is new -- it allows runLevel to clean up its handlers\n    pressed.unregister = function() {\n      removeEventListener(\"keydown\", handler);\n      removeEventListener(\"keyup\", handler);\n    };\n    // End of new code\n    return pressed;\n  }\n\n  runGame(GAME_LEVELS, DOMDisplay);\n</script>\n</body>"
      }
    ],
    "include": [
      "code/chapter/15_game.js",
      "code/game_levels.js"
    ],
    "links": [
      "code/chapter/15_game.zip"
    ]
  },
  {
    "number": 16,
    "id": "16_canvas",
    "title": "Drawing on Canvas",
    "start_code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<body>\n  <script>\n    runGame(GAME_LEVELS, CanvasDisplay);\n  </script>\n</body>\n",
    "exercises": [
      {
        "name": "Shapes",
        "file": "code/solutions/16_1_shapes.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"600\" height=\"200\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"600\" height=\"200\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n\n  function parallelogram(x, y) {\n    cx.beginPath();\n    cx.moveTo(x, y);\n    cx.lineTo(x + 50, y);\n    cx.lineTo(x + 70, y + 50);\n    cx.lineTo(x - 20, y + 50);\n    cx.closePath();\n    cx.stroke();\n  }\n  parallelogram(30, 30);\n\n  function diamond(x, y) {\n    cx.translate(x + 30, y + 30);\n    cx.rotate(Math.PI / 4);\n    cx.fillStyle = \"red\";\n    cx.fillRect(-30, -30, 60, 60);\n    cx.resetTransform();\n  }\n  diamond(140, 30);\n\n  function zigzag(x, y) {\n    cx.beginPath();\n    cx.moveTo(x, y);\n    for (var i = 0; i < 8; i++) {\n      cx.lineTo(x + 80, y + i * 8 + 4);\n      cx.lineTo(x, y + i * 8 + 8);\n    }\n    cx.stroke();\n  }\n  zigzag(240, 20);\n\n  function spiral(x, y) {\n    var radius = 50, xCenter = x + radius, yCenter = y + radius;\n    cx.beginPath();\n    cx.moveTo(xCenter, yCenter);\n    for (var i = 0; i < 300; i++) {\n      var angle = i * Math.PI / 30;\n      var dist = radius * i / 300;\n      cx.lineTo(xCenter + Math.cos(angle) * dist,\n                yCenter + Math.sin(angle) * dist);\n    }\n    cx.stroke();\n  }\n  spiral(340, 20);\n\n  function star(x, y) {\n    var radius = 50, xCenter = x + radius, yCenter = y + radius;\n    cx.beginPath();\n    cx.moveTo(xCenter + radius, yCenter);\n    for (var i = 1; i <= 8; i++) {\n      var angle = i * Math.PI / 4;\n      cx.quadraticCurveTo(xCenter, yCenter,\n                          xCenter + Math.cos(angle) * radius,\n                          yCenter + Math.sin(angle) * radius);\n    }\n    cx.fillStyle = \"gold\";\n    cx.fill();\n  }\n  star(440, 20);\n</script>"
      },
      {
        "name": "The pie chart",
        "file": "code/solutions/16_2_the_pie_chart.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"600\" height=\"300\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n  var total = results.reduce(function(sum, choice) {\n    return sum + choice.count;\n  }, 0);\n\n  var currentAngle = -0.5 * Math.PI;\n  var centerX = 300, centerY = 150;\n  // Add code to draw the slice labels in this loop.\n  results.forEach(function(result) {\n    var sliceAngle = (result.count / total) * 2 * Math.PI;\n    cx.beginPath();\n    cx.arc(centerX, centerY, 100,\n           currentAngle, currentAngle + sliceAngle);\n    currentAngle += sliceAngle;\n    cx.lineTo(centerX, centerY);\n    cx.fillStyle = result.color;\n    cx.fill();\n  });\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"600\" height=\"300\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n  var total = results.reduce(function(sum, choice) {\n    return sum + choice.count;\n  }, 0);\n\n  var currentAngle = -0.5 * Math.PI;\n  var centerX = 300, centerY = 150;\n\n  results.forEach(function(result) {\n    var sliceAngle = (result.count / total) * 2 * Math.PI;\n    cx.beginPath();\n    cx.arc(centerX, centerY, 100,\n           currentAngle, currentAngle + sliceAngle);\n\n    var middleAngle = currentAngle + 0.5 * sliceAngle;\n    var textX = Math.cos(middleAngle) * 120 + centerX;\n    var textY = Math.sin(middleAngle) * 120 + centerY;\n    cx.textBaseLine = \"middle\";\n    if (Math.cos(middleAngle) > 0)\n      cx.textAlign = \"left\";\n    else\n      cx.textAlign = \"right\";\n    cx.font = \"15px sans-serif\";\n    cx.fillStyle = \"black\";\n    cx.fillText(result.name, textX, textY);\n\n    currentAngle += sliceAngle;\n    cx.lineTo(centerX, centerY);\n    cx.fillStyle = result.color;\n    cx.fill();\n  });\n</script>"
      },
      {
        "name": "A bouncing ball",
        "file": "code/solutions/16_3_a_bouncing_ball.html",
        "number": 3,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"400\" height=\"400\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n\n  var lastTime = null;\n  function frame(time) {\n    if (lastTime != null)\n      updateAnimation(Math.min(100, time - lastTime) / 1000);\n    lastTime = time;\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n\n  function updateAnimation(step) {\n    // Your code here.\n  }\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/15_game.js\"></script>\n<script src=\"code/game_levels.js\"></script>\n<script src=\"code/chapter/16_canvas.js\"></script>\n\n<canvas width=\"400\" height=\"400\"></canvas>\n<script>\n  var cx = document.querySelector(\"canvas\").getContext(\"2d\");\n\n  var lastTime = null;\n  function frame(time) {\n    if (lastTime != null)\n      updateAnimation(Math.min(100, time - lastTime) / 1000);\n    lastTime = time;\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n\n  var x = 100, y = 300;\n  var radius = 10;\n  var speedX = 100, speedY = 60;\n\n  function updateAnimation(step) {\n    cx.clearRect(0, 0, 400, 400);\n    cx.strokeStyle = \"blue\";\n    cx.lineWidth = 4;\n    cx.strokeRect(25, 25, 350, 350);\n    \n    x += step * speedX;\n    y += step * speedY;\n    if (x < 25 + radius || x > 375 - radius)\n      speedX = -speedX;\n    if (y < 25 + radius || y > 375 - radius)\n      speedY = -speedY;\n    cx.fillStyle = \"red\";\n    cx.beginPath();\n    cx.arc(x, y, radius, 0, 7);\n    cx.fill();\n  }\n</script>"
      }
    ],
    "include": [
      "code/chapter/15_game.js",
      "code/game_levels.js",
      "code/chapter/16_canvas.js"
    ],
    "links": [
      "code/chapter/16_canvas.zip"
    ]
  },
  {
    "number": 17,
    "id": "17_http",
    "title": "HTTP",
    "start_code": "",
    "exercises": [
      {
        "name": "Content negotiation",
        "file": "code/solutions/17_1_content_negotiation.js",
        "number": 1,
        "type": "js",
        "code": "// Your code here.",
        "solution": "function requestAuthor(type) {\n  var req = new XMLHttpRequest();\n  req.open(\"GET\", \"http://eloquentjavascript.net/author\", false);\n  req.setRequestHeader(\"accept\", type);\n  req.send(null);\n  return req.responseText;\n}\n\nvar types = [\"text/plain\",\n             \"text/html\",\n             \"application/json\",\n             \"application/rainbows+unicorns\"];\n\ntypes.forEach(function(type) {\n  try {\n    console.log(type + \":\\n\", requestAuthor(type), \"\\n\");\n  } catch (e) {\n    console.log(\"Raised error: \" + e);\n  }\n});"
      },
      {
        "name": "Waiting for multiple promises",
        "file": "code/solutions/17_2_waiting_for_multiple_promises.js",
        "number": 2,
        "type": "js",
        "code": "function all(promises) {\n  return new Promise(function(success, fail) {\n    // Your code here.\n  });\n}\n\n// Test code.\nall([]).then(function(array) {\n  console.log(\"This should be []:\", array);\n});\nfunction soon(val) {\n  return new Promise(function(success) {\n    setTimeout(function() { success(val); },\n               Math.random() * 500);\n  });\n}\nall([soon(1), soon(2), soon(3)]).then(function(array) {\n  console.log(\"This should be [1, 2, 3]:\", array);\n});\nfunction fail() {\n  return new Promise(function(success, fail) {\n    fail(new Error(\"boom\"));\n  });\n}\nall([soon(1), fail(), soon(3)]).then(function(array) {\n  console.log(\"We should not get here\");\n}, function(error) {\n  if (error.message != \"boom\")\n    console.log(\"Unexpected failure:\", error);\n});",
        "solution": "function all(promises) {\n  return new Promise(function(succeed, fail) {\n    var results = [], pending = promises.length;\n    promises.forEach(function(promise, i) {\n      promise.then(function(result) {\n        results[i] = result;\n        pending -= 1;\n        if (pending == 0)\n          succeed(results);\n      }, function(error) {\n        fail(error);\n      });\n    });\n    if (promises.length == 0)\n      succeed(results);\n  });\n}\n\n// Test code.\nall([]).then(function(array) {\n  console.log(\"This should be []:\", array);\n});\nfunction soon(val) {\n  return new Promise(function(success) {\n    setTimeout(function() { success(val); },\n               Math.random() * 500);\n  });\n}\nall([soon(1), soon(2), soon(3)]).then(function(array) {\n  console.log(\"This should be [1, 2, 3]:\", array);\n});\nfunction fail() {\n  return new Promise(function(success, fail) {\n    fail(new Error(\"boom\"));\n  });\n}\nall([soon(1), fail(), soon(3)]).then(function(array) {\n  console.log(\"We should not get here\");\n}, function(error) {\n  if (error.message != \"boom\")\n    console.log(\"Unexpected failure:\", error);\n});"
      }
    ],
    "include": [
      "code/chapter/17_http.js",
      "code/promise.js"
    ]
  },
  {
    "number": 18,
    "id": "18_forms",
    "title": "Forms and Form Fields",
    "start_code": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\nNotes: <select id=\"list\"></select>\n<button onclick=\"addNote()\">new</button><br>\n<textarea id=\"currentnote\" style=\"width: 100%; height: 10em\">\n</textarea>\n\n<script>\n  var list = document.querySelector(\"#list\");\n  function addToList(name) {\n    var option = document.createElement(\"option\");\n    option.textContent = name;\n    list.appendChild(option);\n  }\n\n  // Initialize the list from localStorage\n  var notes = JSON.parse(localStorage.getItem(\"notes\")) ||\n              {\"shopping list\": \"\"};\n  for (var name in notes)\n    if (notes.hasOwnProperty(name))\n      addToList(name);\n\n  function saveToStorage() {\n    localStorage.setItem(\"notes\", JSON.stringify(notes));\n  }\n\n  var current = document.querySelector(\"#currentnote\");\n  current.value = notes[list.value];\n\n  list.addEventListener(\"change\", function() {\n    current.value = notes[list.value];\n  });\n  current.addEventListener(\"change\", function() {\n    notes[list.value] = current.value;\n    saveToStorage();\n  });\n\n  function addNote() {\n    var name = prompt(\"Note name\", \"\");\n    if (!name) return;\n    if (!notes.hasOwnProperty(name)) {\n      notes[name] = \"\";\n      addToList(name);\n      saveToStorage();\n    }\n    list.value = name;\n    current.value = notes[name];\n  }\n</script>\n",
    "exercises": [
      {
        "name": "A JavaScript workbench",
        "file": "code/solutions/18_1_a_javascript_workbench.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<textarea id=\"code\">return \"hi\";</textarea>\n<button id=\"button\">Run</button>\n<pre id=\"output\"></pre>\n\n<script>\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<textarea id=\"code\">return \"hi\";</textarea>\n<button id=\"button\">Run</button>\n<pre id=\"output\"></pre>\n\n<script>\n  document.querySelector(\"#button\").addEventListener(\"click\", function() {\n    var code = document.querySelector(\"#code\").value;\n    var outputNode = document.querySelector(\"#output\");\n    try {\n      var result = new Function(code)();\n      outputNode.innerText = String(result);\n    } catch (e) {\n      outputNode.innerText = \"Error: \" + e;\n    }\n  });\n</script>"
      },
      {
        "name": "Autocompletion",
        "file": "code/solutions/18_2_autocompletion.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<input type=\"text\" id=\"field\">\n<div id=\"suggestions\" style=\"cursor: pointer\"></div>\n\n<script>\n  // Builds up an array with global variable names, like\n  // 'alert', 'document', and 'scrollTo'\n  var terms = [];\n  for (var name in window)\n    terms.push(name);\n\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<input type=\"text\" id=\"field\">\n<div id=\"suggestions\" style=\"cursor: pointer\"></div>\n\n<script>\n  // Builds up an array with global variable names, like\n  // 'alert', 'document', and 'scrollTo'\n  var terms = [];\n  for (var name in window)\n    terms.push(name);\n\n  var textfield = document.querySelector(\"#field\");\n  var suggestions = document.querySelector(\"#suggestions\");\n\n  textfield.addEventListener(\"input\", function() {\n    var matching = terms.filter(function(term) {\n      return term.indexOf(textfield.value) == 0;\n    });\n    suggestions.textContent = \"\";\n    matching.slice(0, 20).forEach(function(term) {\n      var node = document.createElement(\"div\");\n      node.textContent = term;\n      node.addEventListener(\"click\", function() {\n        textfield.value = term;\n        suggestions.textContent = \"\";\n      });\n      suggestions.appendChild(node);\n    });\n  });\n</script>"
      },
      {
        "name": "Conway's Game of Life",
        "file": "code/solutions/18_3_conways_game_of_life.html",
        "number": 3,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<div id=\"grid\"></div>\n<button id=\"next\">Next generation</button>\n\n<script>\n  // Your code here.\n</script>",
        "solution": "<!doctype html>\n<script src=\"code/promise.js\"></script>\n\n<div id=\"grid\"></div>\n<button id=\"next\">Next generation</button>\n<button id=\"run\">Auto run</button>\n\n<script>\n  var width = 30, height = 15;\n\n  // I will represent the grid as an array of booleans.\n\n  var gridNode = document.querySelector(\"#grid\");\n  // This holds the checkboxes that display the grid in the document.\n  var checkboxes = [];\n  for (var y = 0; y < height; y++) {\n    for (var x = 0; x < width; x++) {\n      var box = document.createElement(\"input\");\n      box.type = \"checkbox\";\n      gridNode.appendChild(box);\n      checkboxes.push(box);\n    }\n    gridNode.appendChild(document.createElement(\"br\"));\n  }\n\n  function gridFromCheckboxes() {\n    return checkboxes.map(function(box) { return box.checked; });\n  }\n  function checkboxesFromGrid(grid) {\n    return grid.forEach(function(value, i) { checkboxes[i].checked = value; });\n  }\n  function randomGrid() {\n    var result = [];\n    for (var i = 0; i < width * height; i++)\n      result.push(Math.random() < 0.3);\n    return result;\n  }\n\n  checkboxesFromGrid(randomGrid());\n\n  // This does a two-dimensional loop over the square around the given\n  // x,y position, counting all fields that have a cell but are not the\n  // center field.\n  function countNeighbors(grid, x, y) {\n    var count = 0;\n    for (var y1 = Math.max(0, y - 1); y1 <= Math.min(height - 1, y + 1); y1++) {\n      for (var x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1); x1++) {\n        if ((x1 != x || y1 != y) && grid[x1 + y1 * width])\n          count += 1;\n      }\n    }\n    return count;\n  }\n\n  function nextGeneration(grid) {\n    var newGrid = new Array(width * height);\n    for (var y = 0; y < height; y++) {\n      for (var x = 0; x < width; x++) {\n        var neighbors = countNeighbors(grid, x, y);\n        var offset = x + y * width;\n        if (neighbors < 2 || neighbors > 3)\n          newGrid[offset] = false;\n        else if (neighbors == 2)\n          newGrid[offset] = grid[offset];\n        else\n          newGrid[offset] = true;\n      }\n    }\n    return newGrid;\n  }\n\n  function turn() {\n    checkboxesFromGrid(nextGeneration(gridFromCheckboxes()));\n  }\n\n  document.querySelector(\"#next\").addEventListener(\"click\", turn);\n\n  var running = null;\n  document.querySelector(\"#run\").addEventListener(\"click\", function() {\n    if (running) {\n      clearInterval(running);\n      running = null;\n    } else {\n      running = setInterval(turn, 400);\n    }\n  });\n</script>"
      }
    ],
    "include": [
      "code/promise.js"
    ]
  },
  {
    "number": 19,
    "id": "19_paint",
    "title": "Project: A Paint Program",
    "start_code": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n\n<body>\n  <script>createPaint(document.body);</script>\n</body>\n",
    "exercises": [
      {
        "name": "Rectangles",
        "file": "code/solutions/19_1_rectangles.html",
        "number": 1,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  tools.Rectangle = function(event, cx) {\n    // Your code here.\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  function rectangleFrom(a, b) {\n    return {left: Math.min(a.x, b.x),\n            top: Math.min(a.y, b.y),\n            width: Math.abs(a.x - b.x),\n            height: Math.abs(a.y - b.y)};\n  }\n\n  tools.Rectangle = function(event, cx) {\n    var relativeStart = relativePos(event, cx.canvas);\n    var pageStart = {x: event.pageX, y: event.pageY};\n\n    var trackingNode = document.createElement(\"div\");\n    trackingNode.style.position = \"absolute\";\n    trackingNode.style.background = cx.fillStyle;\n    document.body.appendChild(trackingNode);\n\n    trackDrag(function(event) {\n      var rect = rectangleFrom(pageStart,\n                               {x: event.pageX, y: event.pageY});\n      trackingNode.style.left = rect.left + \"px\";\n      trackingNode.style.top = rect.top + \"px\";\n      trackingNode.style.width = rect.width + \"px\";\n      trackingNode.style.height = rect.height + \"px\";\n    }, function(event) {\n      var rect = rectangleFrom(relativeStart,\n                               relativePos(event, cx.canvas));\n      cx.fillRect(rect.left, rect.top, rect.width, rect.height);\n      document.body.removeChild(trackingNode);\n    });\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>"
      },
      {
        "name": "Color picker",
        "file": "code/solutions/19_2_color_picker.html",
        "number": 2,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  tools[\"Pick color\"] = function(event, cx) {\n    // Your code here.\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  function colorAt(cx, x, y) {\n    var pixel = cx.getImageData(x, y, 1, 1).data;\n    return \"rgb(\" + pixel[0] + \", \" + pixel[1] + \", \" + pixel[2] + \")\";\n  }\n\n  tools[\"Pick color\"] = function(event, cx) {\n    var pos = relativePos(event, cx.canvas);\n    try {\n      var color = colorAt(cx, pos.x, pos.y);\n    } catch(e) {\n      if (e instanceof SecurityError) {\n        alert(\"Unable to access your picture's pixel data\");\n        return;\n      } else {\n        throw e;\n      }\n    }\n    cx.fillStyle = color;\n    cx.strokeStyle = color;\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>"
      },
      {
        "name": "Flood fill",
        "file": "code/solutions/19_3_flood_fill.html",
        "number": 3,
        "type": "html",
        "code": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  tools[\"Flood fill\"] = function(event, cx) {\n    // Your code here.\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>",
        "solution": "<!doctype html>\n<script src=\"code/chapter/19_paint.js\"></script>\n\n<script>\n  // Call a given function for all horizontal and vertical neighbors\n  // of the given point.\n  function forAllNeighbors(point, fn) {\n    fn({x: point.x, y: point.y + 1});\n    fn({x: point.x, y: point.y - 1});\n    fn({x: point.x + 1, y: point.y});\n    fn({x: point.x - 1, y: point.y});\n  }\n\n  // Given two positions, returns true when they hold the same color.\n  function isSameColor(data, pos1, pos2) {\n    var offset1 = (pos1.x + pos1.y * data.width) * 4;\n    var offset2 = (pos2.x + pos2.y * data.width) * 4;\n    for (var i = 0; i < 4; i++) {\n      if (data.data[offset1 + i] != data.data[offset2 + i])\n        return false;\n    }\n    return true;\n  }\n\n  tools[\"Flood fill\"] = function(event, cx) {\n    var startPos = relativePos(event, cx.canvas);\n\n    var data = cx.getImageData(0, 0, cx.canvas.width,\n                               cx.canvas.height);\n    // An array with one place for each pixel in the image.\n    var alreadyFilled = new Array(data.width * data.height);\n\n    // This is a list of same-colored pixel coordinates that we have\n    // not handled yet.\n    var workList = [startPos];\n    while (workList.length) {\n      var pos = workList.pop();\n      var offset = pos.x + data.width * pos.y;\n      if (alreadyFilled[offset]) continue;\n\n      cx.fillRect(pos.x, pos.y, 1, 1);\n      alreadyFilled[offset] = true;\n\n      forAllNeighbors(pos, function(neighbor) {\n        if (neighbor.x >= 0 && neighbor.x < data.width &&\n            neighbor.y >= 0 && neighbor.y < data.height &&\n            isSameColor(data, startPos, neighbor))\n          workList.push(neighbor);\n      });\n    }\n  };\n</script>\n\n<link rel=\"stylesheet\" href=\"css/paint.css\">\n<body>\n  <script>createPaint(document.body);</script>\n</body>"
      }
    ],
    "include": [
      "code/chapter/19_paint.js"
    ],
    "links": [
      "code/chapter/19_paint.zip"
    ]
  },
  {
    "number": 20,
    "id": "20_node",
    "title": "Node.js",
    "start_code": "",
    "exercises": [
      {
        "name": "Content negotiation, again",
        "file": "code/solutions/20_1_content_negotiation_again.js",
        "number": 1,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "var http = require(\"http\");\n\nfunction readStreamAsString(stream, callback) {\n  var content = \"\";\n  stream.on(\"data\", function(chunk) {\n    content += chunk;\n  });\n  stream.on(\"end\", function() {\n    callback(null, content);\n  });\n  stream.on(\"error\", function(error) {\n    callback(error);\n  });\n}\n\n[\"text/plain\", \"text/html\", \"application/json\"].forEach(function(type) {\n  http.request({\n    hostname: \"eloquentjavascript.net\",\n    path: \"/author\",\n    headers: {Accept: type}\n  }, function(response) {\n    readStreamAsString(response, function(error, content) {\n      if (error) throw error;\n      console.log(\"Type \" + type + \": \" + content);\n    });\n  }).end();\n});\n"
      },
      {
        "name": "Fixing a leak",
        "file": "code/solutions/20_2_fixing_a_leak.js",
        "number": 2,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// The file server examples in code/file_server.js and\n// code/file_server_promises.js already contain this fixed version.\n\nfunction urlToPath(url) {\n  var path = url;\n  var decoded = decodeURIComponent(path);\n  return \".\" + decoded.replace(/(\\/|\\\\)\\.\\.(\\/|\\\\|$)/g, \"/\");\n}\n"
      },
      {
        "name": "Creating directories",
        "file": "code/solutions/20_3_creating_directories.js",
        "number": 3,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// This code won't work on its own, but is also included in the\n// code/file_server.js file, which defines the whole system.\n\nmethods.MKCOL = function(path, respond) {\n  fs.stat(path, function(error, stats) {\n    if (error && error.code == \"ENOENT\")\n      fs.mkdir(path, respondErrorOrNothing(respond));\n    else if (error)\n      respond(500, error.toString());\n    else if (stats.isDirectory())\n      respond(204);\n    else\n      respond(400, \"File exists\");\n  });\n};\n"
      },
      {
        "name": "A public space on the web",
        "file": "code/solutions/20_4_a_public_space_on_the_web",
        "number": 4,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// This solutions consists of multiple files. Download it\n// though the link below.\n"
      }
    ],
    "include": null,
    "links": [
      "code/file_server.js",
      "code/file_server_promises.js"
    ]
  },
  {
    "number": 21,
    "id": "21_skillsharing",
    "title": "Project: Skill-Sharing Website",
    "start_code": "",
    "exercises": [
      {
        "name": "Disk persistence",
        "file": "code/solutions/21_1_disk_persistence.js",
        "number": 1,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// This isn't a stand-alone file, only a redefinition of a few\n// fragments from skillsharing/skillsharing_server.js\n\nvar fs = require(\"fs\");\n\nvar talks = loadTalks();\n\nfunction loadTalks() {\n  var result = Object.create(null), json;\n  try {\n    json = JSON.parse(fs.readFileSync(\"./talks.json\", \"utf8\"));\n  } catch (e) {\n    json = {};\n  }\n  for (var title in json)\n    result[title] = json[title];\n  return result;\n}\n\nfunction registerChange(title) {\n  changes.push({title: title, time: Date.now()});\n  waiting.forEach(function(waiter) {\n    sendTalks(getChangedTalks(waiter.since), waiter.response);\n  });\n  waiting = [];\n\n  fs.writeFile(\"./talks.json\", JSON.stringify(talks));\n}\n"
      },
      {
        "name": "Comment field resets",
        "file": "code/solutions/21_2_comment_field_resets.js",
        "number": 2,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// This isn't a stand-alone file, only a redefinition of displayTalks\n// from skillsharing/public/skillsharing_client.js\n\nfunction displayTalks(talks) {\n  talks.forEach(function(talk) {\n    var shown = shownTalks[talk.title];\n    if (talk.deleted) {\n      if (shown) {\n        talkDiv.removeChild(shown);\n        delete shownTalks[talk.title];\n      }\n    } else {\n      var node = drawTalk(talk);\n      if (shown) {\n        var textField = shown.querySelector(\"input\");\n        var hasFocus = document.activeElement == textField;\n        var value = textField.value;\n        talkDiv.replaceChild(node, shown);\n        var newTextField = node.querySelector(\"input\");\n        newTextField.value = value;\n        if (hasFocus) newTextField.focus();\n      } else {\n        talkDiv.appendChild(node);\n      }\n      shownTalks[talk.title] = node;\n    }\n  });\n}\n"
      },
      {
        "name": "Better templates",
        "file": "code/solutions/21_3_better_templates.js",
        "number": 3,
        "type": "js",
        "code": "// Node exercises can not be ran in the browser,\n// but you can look at their solution here.\n",
        "solution": "// Note that the first argument to instantiateTemplate was changed to\n// be the template itself, not its name, to make testing easier.\n\nfunction instantiateTemplate(template, values) {\n  function instantiateText(text, values) {\n    return text.replace(/\\{\\{(\\w+)\\}\\}/g, function(_, name) {\n      return values[name];\n    });\n  }\n  function attr(node, attrName) {\n    return node.nodeType == document.ELEMENT_NODE &&\n      node.getAttribute(attrName);\n  }\n  function instantiate(node, values) {\n    if (node.nodeType == document.ELEMENT_NODE) {\n      var copy = node.cloneNode();\n      for (var i = 0; i < node.childNodes.length; i++) {\n        var child = node.childNodes[i];\n\n        var when = attr(child, \"template-when\"), unless = attr(child, \"template-unless\");\n        if (when && !values[when] || unless && values[unless])\n          continue;\n\n        var repeat = attr(child, \"template-repeat\");\n        if (repeat)\n          (values[repeat] || []).forEach(function(element) {\n            copy.appendChild(instantiate(child, element));\n          });\n        else\n          copy.appendChild(instantiate(child, values));\n      }\n      return copy;\n    } else if (node.nodeType == document.TEXT_NODE) {\n      return document.createTextNode(instantiateText(node.nodeValue, values));\n    }\n  }\n\n  return instantiate(template, values);\n}\n\n// A simple test function to verify that the above actually works\n\nfunction test(template, values, expected) {\n  var testTemplate = document.createElement(\"div\");\n  testTemplate.innerHTML = template;\n  var result = instantiateTemplate(testTemplate, values).innerHTML;\n  if (result != expected)\n    console.log(\"Unexpected instantiation. Expected\\n  \" + expected + \"\\ngot\\n  \" + result);\n}\n\ntest('<h1 template-when=\"header\">{{header}}</h1>',\n     {header: \"One\"},\n     '<h1 template-when=\"header\">One</h1>');\n\ntest('<h1 template-when=\"header\">{{header}}</h1>',\n     {header: false},\n     '');\n\ntest('<p><img src=\"icon.png\" template-unless=\"noicon\">Hello</p>',\n     {noicon: true},\n     '<p>Hello</p>');\n\ntest('<ol><li template-repeat=\"items\">{{name}}: {{score}}</li></ol>',\n     {items: [{name: \"Alice\", score: \"10\"}, {name: \"Bob\", score: \"7\"}]},\n     '<ol><li template-repeat=\"items\">Alice: 10</li><li template-repeat=\"items\">Bob: 7</li></ol>');\n"
      }
    ],
    "include": null,
    "links": [
      "code/skillsharing.zip"
    ]
  },
  {
    "title": "How JavaScript is so Fast",
    "number": 22,
    "start_code": "<!-- This chapter exists in the paper book, not in the online version -->\n\n<script>\n  runLayout(forceDirected_simple, treeGraph(4, 4));\n</script>\n",
    "include": [
      "code/draw_graph.js",
      "code/chapter/22_fast.js"
    ],
    "exercises": [
      {
        "name": "Pathfinding",
        "file": "code/solutions/22_1_pathfinding.js",
        "number": 1,
        "type": "js",
        "code": "function findPath(a, b) {\n  // Your code here...\n}\n\nvar graph = treeGraph(4, 4);\nvar root = graph[0], leaf = graph[graph.length - 1];\nconsole.log(findPath(root, leaf).length);\n// → 3\n\nleaf.connect(root);\nconsole.log(findPath(root, leaf).length);\n// → 1\n",
        "solution": "function findPath(a, b) {\n  var work = [[a]];\n  for (var i = 0; i < work.length; i++) {\n    var cur = work[i], end = cur[cur.length - 1];\n    if (end == b) return cur;\n    end.edges.forEach(function(next) {\n      if (!work.some(function(work) { return work[work.length - 1] == next; }))\n        work.push(cur.concat([next]));\n    });\n  }\n}\n\nvar graph = treeGraph(4, 4);\nvar root = graph[0], leaf = graph[graph.length - 1];\nconsole.log(findPath(root, leaf).length);\n// → 4\n\nleaf.connect(root);\nconsole.log(findPath(root, leaf).length);\n// → 2\n"
      },
      {
        "name": "Timing",
        "file": "code/solutions/22_2_timing.js",
        "number": 2,
        "type": "js",
        "code": "",
        "solution": "function findPath(a, b) {\n  var work = [[a]];\n  for (var i = 0; i < work.length; i++) {\n    var cur = work[i], end = cur[cur.length - 1];\n    if (end == b) return cur;\n    end.edges.forEach(function(next) {\n      if (!work.some(function(work) { return work[work.length - 1] == next; }))\n        work.push(cur.concat([next]));\n    });\n  }\n}\n\nvar graph = treeGraph(6, 5);\nvar startTime = Date.now();\nconsole.log(findPath(graph[0], graph[graph.length - 1]).length);\nconsole.log(\"Time taken:\", Date.now() - startTime);\n"
      },
      {
        "name": "Optimizing",
        "file": "code/solutions/22_3_optimizing.js",
        "number": 3,
        "type": "js",
        "code": "",
        "solution": "function withIDs(graph) {\n  for (var i = 0; i < graph.length; i++) graph[i].id = i;\n  return graph;\n}\nvar graph = withIDs(treeGraph(8, 5));\n\nfunction findPath_ids(a, b) {\n  var work = [[a]];\n  var seen = Object.create(null);\n  for (var i = 0; i < work.length; i++) {\n    var cur = work[i], end = cur[cur.length - 1];\n    if (end == b) return cur;\n    end.edges.forEach(function(next) {\n      if (!seen[next.id]) {\n        seen[next.id] = true;\n        work.push(cur.concat([next]));\n      }\n    });\n  }\n}\n\nvar startTime = Date.now();\nconsole.log(findPath_ids(graph[0], graph[graph.length - 1]).length);\nconsole.log(\"Time taken with ids:\", Date.now() - startTime);\n\nfunction listToArray(list) {\n  var result = [];\n  for (var cur = list; cur; cur = cur.via)\n    result.unshift(cur.last);\n  return result;\n}\n\nfunction findPath_list(a, b) {\n  var work = [{last: a, via: null}];\n  var seen = Object.create(null);\n  for (var i = 0; i < work.length; i++) {\n    var cur = work[i];\n    if (cur.last == b) return listToArray(cur);\n    cur.last.edges.forEach(function(next) {\n      if (!seen[next.id]) {\n        seen[next.id] = true;\n        work.push({last: next, via: cur});\n      }\n    });\n  }\n}\n\nvar startTime = Date.now();\nconsole.log(findPath_list(graph[0], graph[graph.length - 1]).length);\nconsole.log(\"Time taken with ids + lists:\", Date.now() - startTime);\n"
      }
    ]
  }
];
