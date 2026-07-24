module.exports = grammar({
  name: "dataweave",

  rules: {
    source_file: ($) => seq(optional($.header), $._expression),

    header: ($) =>
      seq(repeat(choice($.version_directive, $.import_directive)), "---"),

    version_directive: ($) => seq("%dw", /[0-9]+\.[0-9]+/),

    import_directive: ($) => seq("import", /[^\n]*/),

    _expression: ($) =>
      choice($.object, $.string, $.number, $.function_call, $.identifier),

    object: ($) => seq("{", repeat($.pair), "}"),

    pair: ($) =>
      seq(
        field("key", $.string),
        ":",
        field("value", $._expression),
        optional(","),
      ),

    function_call: ($) =>
      seq(
        field("name", $.identifier),
        "(",
        optional(seq($._expression, repeat(seq(",", $._expression)))),
        ")",
      ),

    string: ($) => /"[^"]*"/,

    number: ($) => /[0-9]+(\.[0-9]+)?/,

    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,
  },
});
