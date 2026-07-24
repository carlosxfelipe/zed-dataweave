; Local DataWeave Tree-sitter Queries

(string) @string
(number) @number
(version_directive) @keyword
(import_directive) @keyword.control.import

(function_call
  name: (identifier) @function)

(pair
  key: (string) @property)

(identifier) @variable
