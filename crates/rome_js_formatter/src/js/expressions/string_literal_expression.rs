use crate::utils::format_string_literal_token_content;
use crate::{FormatElement, FormatNode, Formatter};
use rome_formatter::FormatResult;
use rome_formatter::Token;
use rome_js_syntax::JsSyntaxKind;
use rome_rowan::AstNode;

use crate::utils::format_string_literal_token;
use rome_js_syntax::JsStringLiteralExpression;
use rome_js_syntax::JsStringLiteralExpressionFields;

impl FormatNode for JsStringLiteralExpression {
    fn format_fields(&self, formatter: &Formatter) -> FormatResult<FormatElement> {
        let syntax_node = self.syntax();
        let is_expression_stmt = matches!(
            syntax_node.parent().map(|p| p.kind()),
            Some(JsSyntaxKind::JS_EXPRESSION_STATEMENT)
        );
        let JsStringLiteralExpressionFields { value_token } = self.as_fields();

        let value_token = value_token?;
        // let formatted_element =
        Ok(if is_expression_stmt {
            let formatted_content = format_string_literal_token_content(&value_token, formatter);
            let sorted_regex_literal = Token::from_syntax_token_cow_slice(
                std::borrow::Cow::Owned(format!("({})", &formatted_content,)),
                &value_token,
                value_token.text_trimmed_range().start(),
            );
            formatter.format_replaced(&value_token, sorted_regex_literal.into())
        // FormatElement::Token()
        // format_string_literal_token(sorted_regex_literal, formatter)
        } else {
            format_string_literal_token(value_token, formatter)
        })
    }
}
