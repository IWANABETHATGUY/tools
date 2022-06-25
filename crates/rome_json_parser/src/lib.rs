pub mod lexer;
pub fn parse_json_root() {
    // let parser = rome_js_parser::Parser::new("", 0, SourceType::js_module());
    // let source = "(void b)";

    // // File id is used for the labels inside parser errors to report them, the file id
    // // is used to look up a file's source code and path inside of a codespan `Files` implementation.
    // let mut parser = Parser::new(source, 0, SourceType::default());

    // // Use one of the syntax parsing functions to parse an expression.
    // // This adds node and token events to the parser which are then used to make a node.
    // // A completed marker marks the start and end indices in the events vec which signify
    // // the Start event, and the Finish event.
    // // Completed markers can be turned into an ast node with parse_marker on the parser
    // parse_expression_snipped(&mut parser).unwrap();

    // // Consume the parser and get its events, then apply them to a tree sink with `process`.
    // let (events, tokens, errors) = parser.finish();

    // // Make a new text tree sink, its job is assembling events into a rowan GreenNode.
    // // At each point (Start, Token, Finish, Error) it also consumes whitespace.
    // // Other abstractions can also yield lossy syntax nodes if whitespace is not wanted.
    // // Swap this for a LossyTreeSink for a lossy AST result.
    // let mut sink = LosslessTreeSink::new(source, &tokens);

    // process(&mut sink, events, errors);

    // let (untyped_node, errors) = sink.finish();

    // assert!(errors.is_empty());
    // assert!(JsExpressionSnipped::can_cast(untyped_node.kind()));

    // // Convert the untyped SyntaxNode into a typed AST node
    // let expression_snipped = JsExpressionSnipped::cast(untyped_node).unwrap();
    // let expression = expression_snipped.expression().unwrap();

    // match expression {
    //     JsAnyExpression::JsParenthesizedExpression(parenthesized) => {
    //         assert_eq!(
    //             parenthesized.expression().unwrap().syntax().text(),
    //             "void b"
    //         );
    //     }
    //     _ => panic!("Expected parenthesized expression"),
    // }
}

use lexer::Lexer;
// use crate::lexer::{BufferedLexer, LexContext, Lexer, LexerCheckpoint, ReLexContext, TextRange};
use rome_diagnostics::file::FileId;
use rome_diagnostics::Diagnostic;
// use rome_js_syntax::JsonSyntaxKind;
// use rome_js_syntax::JsonSyntaxKind::EOF;
use rome_json_syntax::{
    JsonSyntaxKind::{self, EOF},
    TextRange,
};
use rome_rowan::{TextSize, TriviaPieceKind};
use std::collections::VecDeque;

/// A comment or a whitespace trivia in the source code.
#[derive(Debug, Copy, Clone)]
pub struct Trivia {
    /// The kind of the trivia token.
    kind: TriviaPieceKind,

    /// The range of the trivia in the source text
    range: TextRange,

    /// Whatever this is the trailing or leading trivia of a non-trivia token.
    trailing: bool,
}

impl Trivia {
    fn new(kind: TriviaPieceKind, range: TextRange, trailing: bool) -> Self {
        Self {
            kind,
            range,
            trailing,
        }
    }
    /// Returns the kind of the token
    pub fn kind(&self) -> TriviaPieceKind {
        self.kind
    }

    /// Returns the token's length in bytes
    pub fn len(&self) -> TextSize {
        self.range.len()
    }

    /// Returns the byte offset of the trivia in the source text
    pub fn offset(&self) -> TextSize {
        self.range.start()
    }

    /// Returns `true` if this is the trailing trivia of a non-trivia token or false otherwise.
    pub fn trailing(&self) -> bool {
        self.trailing
    }

    /// Returns the text range of this trivia
    pub fn text_range(&self) -> TextRange {
        self.range
    }
}

/// Token source for the parser that skips over any non-trivia token.
pub struct TokenSource<'l> {
    lexer: Lexer<'l>,

    /// List of the skipped trivia. Needed to construct the CST and compute the non-trivia token offsets.
    pub trivia_list: Vec<Trivia>,
}

#[derive(Debug, Copy, Clone)]
struct Lookahead {
    kind: JsonSyntaxKind,
    after_newline: bool,
}

impl<'l> TokenSource<'l> {
    /// Creates a new token source.
    pub(crate) fn new(lexer: Lexer<'l>) -> TokenSource<'l> {
        TokenSource {
            lexer,
            trivia_list: vec![],
        }
    }

    /// Creates a new token source for the given string
    pub fn from_str(source: &'l str, file_id: FileId) -> TokenSource<'l> {
        let lexer = Lexer::from_str(source, file_id);
        let mut source = TokenSource::new(lexer);

        source.next_non_trivia_token(true);
        source
    }

    #[inline]
    pub fn next_non_trivia_token(&mut self, first_token: bool) {
        let mut trailing = !first_token;


        loop {
            let kind = self.lexer.current_token();

            let trivia_kind = TriviaPieceKind::try_from(kind);

            match trivia_kind {
                Err(_) => break,
                Ok(trivia_kind) => {
                    // Trivia after and including the newline is considered the leading trivia of the next token
                    if trivia_kind.is_newline() {
                        trailing = false;
                    }
                    let current_range = self.current_range();
                    self.trivia_list
                        .push(Trivia::new(trivia_kind, current_range, trailing));
                }
            }
            self.lexer.advance();
        }

    }

    /// Returns the kind of the current non-trivia token
    #[inline(always)]
    pub fn current(&mut self) -> JsonSyntaxKind {
        self.lexer.current_token()
    }

    /// Returns the range of the current non-trivia token
    #[inline(always)]
    pub fn current_range(&mut self) -> TextRange {
        self.lexer.current_range()
    }

    /// Gets the kind of the nth non-trivia token
    // #[inline(always)]
    // pub fn nth(&mut self, n: usize) -> JsonSyntaxKind {
    //     if n == 0 {
    //         self.current()
    //     } else {
    //         self.lookahead(n).map_or(EOF, |lookahead| lookahead.kind)
    //     }
    // }

    /// Returns true if the current token is preceded by a line break
    #[inline(always)]
    pub fn has_preceding_line_break(&self) -> bool {
        self.lexer.has_preceding_line_break()
    }

    /// Returns true if the nth non-trivia token is preceded by a line break
    // #[inline(always)]
    // pub fn has_nth_preceding_line_break(&mut self, n: usize) -> bool {
    //     if n == 0 {
    //         self.has_preceding_line_break()
    //     } else {
    //         self.lookahead(n)
    //             .map_or(false, |lookahead| lookahead.after_newline)
    //     }
    // }

    /// Returns `true` if the next token has any preceding trivia (either trailing trivia of the current
    /// token or leading trivia of the next token)
    // pub fn has_next_preceding_trivia(&mut self) -> bool {
    //     let next_token_trivia = self
    //         .lexer
    //         .lookahead()
    //         .next()
    //         .and_then(|lookahead| TriviaPieceKind::try_from(lookahead.kind()).ok());
    //     next_token_trivia.is_some()
    // }

    // #[inline(always)]
    // fn lookahead(&mut self, n: usize) -> Option<Lookahead> {
    //     assert_ne!(n, 0);

    //     // Return the cached token if any
    //     if let Some(lookahead) = self.non_trivia_lookahead.get(n - 1) {
    //         return Some(*lookahead);
    //     }

    //     // Jump right to where we've left of last time rather than going through all tokens again.
    //     let iter = self.lexer.lookahead().skip(self.lookahead_offset);
    //     let mut remaining = n - self.non_trivia_lookahead.len();

    //     for item in iter {
    //         self.lookahead_offset += 1;

    //         if !item.kind().is_trivia() {
    //             remaining -= 1;

    //             let lookahead = Lookahead {
    //                 after_newline: item.has_preceding_line_break(),
    //                 kind: item.kind(),
    //             };

    //             self.non_trivia_lookahead.push_back(lookahead);

    //             if remaining == 0 {
    //                 return Some(lookahead);
    //             }
    //         }
    //     }

    //     None
    // }

    // pub fn rewind(&mut self, checkpoint: TokenSourceCheckpoint) {
    //     assert!(self.trivia_list.len() >= checkpoint.trivia_len as usize);
    //     self.trivia_list.truncate(checkpoint.trivia_len as usize);
    //     self.lexer.rewind(checkpoint.lexer);
    //     self.non_trivia_lookahead.clear();
    //     self.lookahead_offset = 0;
    // }

    // pub fn checkpoint(&self) -> TokenSourceCheckpoint {
    //     TokenSourceCheckpoint {
    //         trivia_len: self.trivia_list.len() as u32,
    //         lexer: self.lexer.checkpoint(),
    //     }
    // }

    /// Returns the source text
    #[inline(always)]
    pub fn source(&self) -> &'l str {
        self.lexer.source()
    }

    /// Bumps the current token and moves the parser to the next non-trivia token
    #[inline(always)]
    pub fn bump(&mut self) {
        if self.current() != EOF {
            // if !context.is_regular() {
            //     self.lookahead_offset = 0;
            //     self.non_trivia_lookahead.clear();
            // }

            self.next_non_trivia_token(false);
        }
    }

    pub fn advance(&mut self) {
        self.lexer.advance();
    }

    /// Skips the current token as skipped token trivia
    // pub fn skip_as_trivia(&mut self, context: LexContext) {
    //     if self.current() != EOF {
    //         if !context.is_regular() {
    //             self.lookahead_offset = 0;
    //             self.non_trivia_lookahead.clear();
    //         }

    //         self.trivia_list.push(Trivia::new(
    //             TriviaPieceKind::Skipped,
    //             self.current_range(),
    //             false,
    //         ));

    //         self.next_non_trivia_token(context, true)
    //     }
    // }

    // pub fn re_lex(&mut self, mode: ReLexContext) -> JsonSyntaxKind {
    //     let current_kind = self.current();

    //     let new_kind = self.lexer.re_lex(mode);

    //     // Only need to clear the lookahead cache when the token did change
    //     if current_kind != new_kind {
    //         self.non_trivia_lookahead.clear();
    //         self.lookahead_offset = 0;
    //     }

    //     new_kind
    // }

    /// Returns the byte offset of the current token from the start of the source document
    #[inline(always)]
    pub fn position(&mut self) -> TextSize {
        self.current_range().start()
    }

    /// Ends this token source and returns the source text's trivia
    pub fn finish(self) -> (Vec<Trivia>, Vec<Diagnostic>) {
        (self.trivia_list, self.lexer.finish())
    }
}

// #[derive(Debug)]
// pub struct TokenSourceCheckpoint {
//     lexer: LexerCheckpoint,
//     /// A `u32` should be enough because `TextSize` is also limited to `u32`.
//     /// The worst case is a document where every character is its own token. This would
//     /// result in `u32::MAX` tokens
//     trivia_len: u32,
// }

// impl TokenSourceCheckpoint {
//     /// byte offset in the source text
//     pub(crate) fn current_start(&self) -> TextSize {
//         self.lexer.current_start()
//     }

//     pub(crate) fn trivia_position(&self) -> usize {
//         self.trivia_len as usize
//     }
// }
