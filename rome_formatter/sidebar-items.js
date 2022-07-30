initSidebarItems({"enum":[["BufferSnapshot","Snapshot of a buffer state that can be restored at a later point."],["CommentKind",""],["FormatError","Series of errors encountered during formatting"],["IndentStyle",""],["ParseLineWidthError","Error type returned when parsing a [LineWidth] from a string fails"]],"fn":[["block_indent","Inserts a hard line break before and after the content and increases the indention level for the content by one."],["comment","Marks some content as a comment trivia."],["empty_line","A forced empty line. An empty line inserts enough line breaks in the output for the previous and next element to be separated by an empty line."],["format","The `format` function takes an [`Arguments`] struct and returns the resulting formatting IR."],["format_node","Formats a syntax node file based on its features."],["format_range","Formats a range within a file, supported by Rome"],["format_sub_tree","Formats a single node within a file, supported by Rome."],["get_lines_before","Get the number of line breaks between two consecutive SyntaxNodes in the tree"],["group","Creates a logical `Group` around the content that should either consistently be printed on a single line or broken across multiple lines."],["hard_line_break","A forced line break that are always printed. A hard line break forces any enclosing `Group` to be printed over multiple lines."],["if_group_breaks","Adds a conditional content that is emitted only if it isn’t inside an enclosing `Group` that is printed on a single line. The element allows, for example, to insert a trailing comma after the last array element only if the array doesn’t fit on a single line."],["if_group_fits_on_line","Adds a conditional content specific for `Group`s that fit on a single line. The content isn’t emitted for `Group`s spanning multiple lines."],["indent","It adds a level of indentation to the given content"],["labelled","Marks some content with a label."],["line_suffix","Pushes some content to the end of the current line"],["soft_block_indent","Indents the content by inserting a line break before and after the content and increasing the indention level for the content by one if the enclosing group doesn’t fit on a single line. Doesn’t change the formatting if the enclosing group fits on a single line."],["soft_line_break","A line break that only gets printed if the enclosing `Group` doesn’t fit on a single line. It’s omitted if the enclosing `Group` fits on a single line. A soft line break is identical to a hard line break when not enclosed inside of a `Group`."],["soft_line_break_or_space","A line break if the enclosing `Group` doesn’t fit on a single line, a space otherwise."],["soft_line_indent_or_space","If the enclosing `Group` doesn’t fit on a single line, inserts a line break and indent. Otherwise, just inserts a space."],["space","Inserts a single space. Allows to separate different tokens."],["text","Creates a token that gets written as is to the output. Make sure to properly escape the text if it’s user generated (e.g. a string and not a language keyword)."],["write","The `write` function takes a target buffer and an `Arguments` struct that can be precompiled with the `format_args!` macro."]],"macro":[["best_fitting","Provides multiple different alternatives and the printer picks the first one that fits. Use this as last resort because it requires that the printer must try all variants in the worst case. The passed variants must be in the following order:"],["dbg_write","Writes formatted data into the given buffer and prints all written elements for a quick and dirty debugging."],["format","Creates the Format IR for a value."],["format_args","Constructs the parameters for other formatting macros."],["write","Writes formatted data into a buffer."]],"mod":[["format_element",""],["formatter",""],["group_id",""],["intersperse","Copied from Rust’s unstable iter.intersperse()."],["macros",""],["prelude",""],["printed_tokens",""],["printer",""],["token",""]],"struct":[["Argument","Mono-morphed type to format an object. Used by the [crate::format!], [crate::format_args!], and [crate::write!] macros."],["Arguments","Sequence of objects that should be formatted in the specified order."],["BestFitting","The first variant is the most flat, and the last is the most expanded variant. See [`best_fitting!`] macro for a more in-detail documentation"],["Comments","Type that stores the comments of a tree and gives access to:"],["FormatOwnedWithRule","Formats the `item` with the specified rule."],["FormatRefWithRule","Formats the referenced `item` with the specified rule."],["FormatState","This structure stores the state that is relevant for the formatting of the whole document."],["FormatStateSnapshot",""],["Formatted",""],["HasLabelBuffer",""],["Inspect","Buffer that allows you inspecting elements as they get written to the formatter."],["LastTokenKind",""],["LineWidth","Validated value for the `line_width` formatter options"],["LineWidthFromIntError","Error type returned when converting a u16 to a [LineWidth] fails"],["PreambleBuffer","This struct wraps an existing buffer and emits a preamble text when the first text is written."],["Printed",""],["SimpleFormatContext",""],["SourceComment",""],["SourceMarker","Lightweight sourcemap marker between source and output tokens"],["VecBuffer","Vector backed [`Buffer`] implementation."],["WillBreakBuffer",""]],"trait":[["Buffer","A trait for writing or formatting into [FormatElement]-accepting buffers or streams."],["BufferExtensions",""],["CommentStyle","Defines how to format comments for a specific [Language]."],["CstFormatContext","The [CstFormatContext] is an extension of the CST unaware [FormatContext] and must be implemented by every language."],["Format","Formatting trait for types that can create a formatted representation. The `rome_formatter` equivalent to [std::fmt::Display]."],["FormatContext","Context configuring how an object gets formatted."],["FormatRule","Rule that knows how to format an object of type `T`."],["FormatRuleWithOptions","Rule that supports customizing how it formats an object of type `T`."],["FormatWithRule","Trait for an object that formats an object with a specified rule."]],"type":[["FormatResult","Public return type of the formatter"]]});