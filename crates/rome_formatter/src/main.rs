use rome_formatter::{
    fill_elements, format_elements, group_elements, indent, soft_line_break,
    soft_line_break_or_space, space_token, token, FormatOptions, Formatted,
};


// let elements = group_elements(format_elements![group_elements(format_elements![
//     token("bifornCringerMoshedPerplex"),
//     token("."),
//     token("bifornCringerMoshedPerplexSawder"),
//     token("."),
//     token("arrayOfNumbers"),
//     space_token(),
//     token("="),
//     group_elements(indent(format_elements![
//         soft_line_break_or_space(),
//         group_elements(format_elements![
//             token("["),
//             indent(format_elements![
//                 soft_line_break(),
//                 fill_elements([
//                     format_elements![token("1"), token(",")],
//                     format_elements![token("2"), token(",")],
//                     format_elements![token("3"), token(",")],
//                     format_elements![token("4"), token(",")],
//                     format_elements![token("5"), token(",")]
//                 ])
//             ]),
//             soft_line_break(),
//             token("]"),
//         ])
//     ]))
// ]),]);
fn main() {
    let elements = group_elements(format_elements![group_elements(format_elements![
        token("bifornCringerMoshedPerplex"),
        token("."),
        token("bifornCringerMoshedPerplexSawder"),
        token("."),
        token("arrayOfNumbers"),
        space_token(),
        token("="),
        group_elements(indent(format_elements![
            soft_line_break_or_space(),
            group_elements(format_elements![
                token("["),
                indent(format_elements![
                    soft_line_break(),
                    fill_elements([
                        format_elements![token("1"), token(",")],
                        format_elements![token("2"), token(",")],
                        format_elements![token("3"), token(",")],
                        format_elements![token("4"), token(",")],
                        format_elements![token("5"), token(",")]
                    ])
                ]),
                soft_line_break(),
                token("]"),
            ])
        ]))
    ]),]);
    println!(
        "{}",
        Formatted::new(elements, FormatOptions::default())
            .print()
            .as_code()
    );
}
