//! Generated file, do not edit by hand, see `xtask/codegen`

use rome_analyze::declare_group;
mod use_shorthand_array_type;
mod use_ts_expect_error;
declare_group! { pub (crate) Ts { name : "ts" , rules : [use_shorthand_array_type :: UseShorthandArrayType , use_ts_expect_error :: UseTsExpectError ,] } }
