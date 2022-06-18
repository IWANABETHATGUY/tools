use rome_analyze::{
    context::RuleContext, declare_rule, ActionCategory, Rule, RuleCategory, RuleDiagnostic,
};
use rome_console::markup;
use rome_diagnostics::Applicability;
use rome_js_factory::make;
use rome_js_syntax::{JsAnyStatement, JsForStatement, JsForStatementFields, JsSwitchStatement, T};
use rome_rowan::AstNodeExt;

use crate::JsRuleAction;

declare_rule! {
    /// Enforce the use of `while` loops instead of `for` loops when the
    /// initializer and update expressions are not needed
    ///
    /// ## Examples
    ///
    /// ### Invalid
    ///
    /// ```js,expect_diagnostic
    /// for (; x.running;) {
    ///     x.step();
    /// }
    /// ```
    pub(crate) UseWhile = "useWhile"
}

impl Rule for UseWhile {
    const CATEGORY: RuleCategory = RuleCategory::Lint;

    type Query = JsSwitchStatement;
    type State = ();

    fn run(ctx: &RuleContext<Self>) -> Option<Self::State> {
        let n = ctx.query();

        None
    }

    fn diagnostic(ctx: &RuleContext<Self>, _: &Self::State) -> Option<RuleDiagnostic> {
        let node = ctx.query();

        // SAFETY: These tokens have been checked for errors in `run` already

        Some(RuleDiagnostic::warning(
            node.range(),
            markup! {
                "Use "<Emphasis>"while"</Emphasis>" loops instead of "<Emphasis>"for"</Emphasis>" loops."
            },
        ))
    }
}
