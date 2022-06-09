use crate::prelude::*;
use rome_formatter::{format_args, write};

use crate::utils::FormatWithSemicolon;
use crate::FormatNodeFields;
use rome_js_syntax::{TsGetterSignatureClassMember, TsGetterSignatureClassMemberFields};

impl FormatNodeFields<TsGetterSignatureClassMember>
    for FormatNodeRule<TsGetterSignatureClassMember>
{
    fn fmt_fields(node: &TsGetterSignatureClassMember, f: &mut JsFormatter) -> FormatResult<()> {
        let TsGetterSignatureClassMemberFields {
            modifiers,
            get_token,
            name,
            l_paren_token,
            r_paren_token,
            return_type,
            semicolon_token,
        } = node.as_fields();

        write!(
            f,
            [FormatWithSemicolon::new(
                &format_args!(
                    modifiers.format(),
                    space_token(),
                    get_token.format(),
                    space_token(),
                    name.format(),
                    l_paren_token.format(),
                    r_paren_token.format(),
                    return_type.format(),
                ),
                semicolon_token.as_ref()
            )]
        )
    }
}
