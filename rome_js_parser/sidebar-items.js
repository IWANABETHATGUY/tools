window.SIDEBAR_ITEMS = {"enum":[["Event","Events emitted by the Parser, these events are later made into a syntax tree with `process` into TreeSink."],["JsSyntaxFeature",""],["LexContext","Context in which the lexer should lex the next token"],["ReLexContext","Context in which the [LexContext]’s current should be re-lexed."]],"fn":[["parse","Parses the provided string as a EcmaScript program using the provided syntax features."],["parse_common",""],["parse_expression","Losslessly Parse text into an expression `Parse` which can then be turned into an untyped root `JsSyntaxNode`. Or turned into a typed `JsExpressionSnipped` with `tree`."],["parse_module","Same as `parse_text` but configures the parser to parse an ECMAScript module instead of a script"],["parse_script","Parse text into a `Parse` which can then be turned into an untyped root `JsSyntaxNode`. Or turned into a typed `JsScript` with `tree`."],["process","Generate the syntax tree with the control of events."]],"macro":[["token_set","Utility macro for making a new token set"]],"mod":[["syntax","The Js syntax itself and parser functions."]],"struct":[["FileId","An id that points into a file database."],["LosslessTreeSink","Structure for converting events to a syntax tree representation, while preserving whitespace."],["Parse","A utility struct for managing the result of a parser job"],["TokenSet",""]],"trait":[["TreeSink","An abstraction for syntax tree implementations"]],"type":[["ParseDiagnostic","The type of error emitted by the parser, this includes warnings, notes, and errors. It also includes labels and possibly notes"]]};