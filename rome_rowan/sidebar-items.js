initSidebarItems({"enum":[["Direction",""],["NodeOrToken",""],["SyntaxError",""],["SyntaxSlot","Each node has a slot for each of its children regardless if the child is present or not. A child that isn’t present either because it’s optional or because of a syntax error is stored in an [SyntaxSlot::Empty] to preserve the index of each child."],["TokenAtOffset","There might be zero, one or two leaves at a given offset."],["TriviaPieceKind",""],["WalkEvent","`WalkEvent` describes tree walking process."]],"fn":[["check_live",""]],"macro":[["declare_node_union","Declares a custom union AstNode type with an ungram-like syntax"],["static_assert",""]],"mod":[["cursor","Implementation of the cursors – API for convenient access to syntax trees."],["raw_language",""],["support",""],["syntax",""]],"struct":[["AstNodeListIterator",""],["AstSeparatedElement",""],["AstSeparatedListElementsIterator",""],["AstSeparatedListNodesIterator",""],["AstSeparatorIterator",""],["BatchMutation",""],["Checkpoint","A checkpoint for maybe wrapping a node. See `GreenNodeBuilder::checkpoint` for details."],["ParsedChildren","The parsed children of a node, not accounting for any missing children (required or optional)"],["ParsedChildrenIntoIterator",""],["ParsedChildrenIterator",""],["RawNodeSlots","Description of the slots of a node in combination with [ParsedChildren]. It stores for each slot if the node is present in [ParsedChildren] or not, allowing to generate a node with the right number of empty slots."],["RawSyntaxKind","RawSyntaxKind is a type tag for each token or node."],["RawSyntaxNode","New-type wrapper around a `GreenNode`."],["RawSyntaxNodeRef","New-type wrapper to a reference of a `GreenNode`."],["RawSyntaxToken","New-type wrapper around a `GreenToken`. Allows third-party crates to access limited information on not yet fully constructed nodes."],["RawSyntaxTokenRef","New-type wrapper to a reference of a `GreenToken`"],["SendNode","Language-agnostic representation of the root node of a syntax tree, can be sent or shared between threads"],["SyntaxElementChildren",""],["SyntaxKindSet","Represents a set of [SyntaxKind] as a bitfield, with each bit representing whether the corresponding [RawSyntaxKind] value is contained in the set"],["SyntaxNode",""],["SyntaxNodeChildren",""],["SyntaxNodeText",""],["SyntaxToken",""],["SyntaxTokenText","Reference to the text of a SyntaxToken without having to worry about the lifetime of `&str`."],["SyntaxTriviaPiece","[SyntaxTriviaPiece] gives access to the most granular information about the trivia that was specified by the lexer at the token creation time."],["SyntaxTriviaPieceComments",""],["TextRange","A range in text, represented as a pair of [`TextSize`][struct@TextSize]."],["TextRangeSchema",""],["TextSize","A measure of text length. Also, equivalently, an index into text."],["TreeBuilder","A builder for a syntax tree."],["TriviaPiece",""]],"trait":[["AstNode","The main trait to go from untyped `SyntaxNode`  to a typed ast. The conversion itself has zero runtime cost: ast and syntax nodes have exactly the same representation: a pointer to the tree root and a pointer to the node itself."],["AstNodeExt",""],["AstNodeList","List of homogenous nodes"],["AstNodeListExt",""],["AstSeparatedList","List of nodes where every two nodes are separated by a token. For example, the elements of an array where every two elements are separated by a comma token. The list expects that the underlying syntax node has a slot for every node and separator even if they are missing from the source code. For example, a list for `a b` where the `,` separator is missing contains the slots `Node(a), Empty, Node(b)`. This also applies for missing nodes: the list for `, b,` must have the slots `Empty, Token(,), Node(b), Token(,)`."],["AstSeparatedListExt",""],["BatchMutationExt",""],["SyntaxFactory","Factory for creating syntax nodes of a particular kind."],["SyntaxNodeCast",""],["TextLen","Primitives with a textual length that can be passed to [`TextSize::of`]."]],"type":[["RawSyntaxElement",""],["RawSyntaxElementRef",""],["SyntaxElement",""],["SyntaxResult","Specific result used when navigating nodes using AST APIs"]]});