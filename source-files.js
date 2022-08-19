var sourcesIndex = {};
sourcesIndex["rome_analyze"] = {"name":"","files":["categories.rs","context.rs","lib.rs","matcher.rs","query.rs","registry.rs","rule.rs","services.rs","signals.rs","syntax.rs","visitor.rs"]};
sourcesIndex["rome_cli"] = {"name":"","dirs":[{"name":"commands","files":["check.rs","ci.rs","format.rs","help.rs","init.rs","mod.rs"]}],"files":["execute.rs","lib.rs","metrics.rs","panic.rs","termination.rs","traversal.rs"]};
sourcesIndex["rome_console"] = {"name":"","dirs":[{"name":"codespan","files":["mod.rs","render.rs"]},{"name":"write","files":["html.rs","termcolor.rs"]}],"files":["diff.rs","fmt.rs","lib.rs","markup.rs","write.rs"]};
sourcesIndex["rome_control_flow"] = {"name":"","files":["builder.rs","lib.rs"]};
sourcesIndex["rome_css_factory"] = {"name":"","dirs":[{"name":"generated","files":["node_factory.rs","syntax_factory.rs"]}],"files":["generated.rs","lib.rs"]};
sourcesIndex["rome_css_syntax"] = {"name":"","dirs":[{"name":"generated","files":["kind.rs","macros.rs","nodes.rs","nodes_mut.rs"]}],"files":["generated.rs","lib.rs","syntax_node.rs"]};
sourcesIndex["rome_diagnostics"] = {"name":"","files":["diagnostic.rs","emit.rs","file.rs","lib.rs","suggestion.rs"]};
sourcesIndex["rome_formatter"] = {"name":"","dirs":[{"name":"printer","dirs":[{"name":"printer_options","files":["mod.rs"]}],"files":["mod.rs"]}],"files":["arguments.rs","buffer.rs","builders.rs","comments.rs","format_element.rs","format_extensions.rs","formatter.rs","group_id.rs","intersperse.rs","lib.rs","macros.rs","prelude.rs","printed_tokens.rs","token.rs"]};
sourcesIndex["rome_js_analyze"] = {"name":"","dirs":[{"name":"analyzers","dirs":[{"name":"js","files":["no_async_promise_executor.rs","no_compare_neg_zero.rs","no_dead_code.rs","no_debugger.rs","no_delete.rs","no_double_equals.rs","no_empty_pattern.rs","no_extra_boolean_cast.rs","no_negation_else.rs","no_shadow_restricted_names.rs","no_sparse_array.rs","no_unnecessary_continue.rs","no_unsafe_negation.rs","no_unused_template_literal.rs","use_block_statements.rs","use_simplified_logic_expression.rs","use_single_case_statement.rs","use_single_var_declarator.rs","use_template.rs","use_valid_typeof.rs","use_while.rs"]},{"name":"jsx","files":["no_comment_text.rs","no_implicit_boolean.rs","use_self_closing_elements.rs"]},{"name":"regex","files":["no_multiple_spaces_in_regular_expression_literals.rs"]},{"name":"ts","files":["use_shorthand_array_type.rs"]}],"files":["js.rs","jsx.rs","regex.rs","ts.rs"]},{"name":"assists","dirs":[{"name":"js","files":["flip_bin_exp.rs","inline_variable.rs"]}],"files":["js.rs"]},{"name":"control_flow","dirs":[{"name":"nodes","files":["block.rs","break_stmt.rs","continue_stmt.rs","do_while.rs","for_in.rs","for_of.rs","for_stmt.rs","if_stmt.rs","return_stmt.rs","statement.rs","switch_stmt.rs","throw_stmt.rs","try_catch.rs","variable.rs","while_stmt.rs"]}],"files":["nodes.rs","visitor.rs"]},{"name":"semantic_analyzers","dirs":[{"name":"js","files":["no_arguments.rs","no_catch_assign.rs","no_function_assign.rs","no_import_assign.rs","no_label_var.rs","no_shouty_constants.rs","no_unused_variables.rs","use_camel_case.rs"]}],"files":["js.rs"]},{"name":"utils","files":["batch.rs","rename.rs"]}],"files":["analyzers.rs","assists.rs","control_flow.rs","lib.rs","registry.rs","semantic_analyzers.rs","semantic_services.rs","utils.rs"]};
sourcesIndex["rome_js_factory"] = {"name":"","dirs":[{"name":"generated","files":["node_factory.rs","syntax_factory.rs"]}],"files":["generated.rs","lib.rs","make.rs"]};
sourcesIndex["rome_js_formatter"] = {"name":"","dirs":[{"name":"js","dirs":[{"name":"any","files":["array_assignment_pattern_element.rs","array_binding_pattern_element.rs","array_element.rs","arrow_function_parameters.rs","assignment.rs","assignment_pattern.rs","binding.rs","binding_pattern.rs","call_argument.rs","class.rs","class_member.rs","class_member_name.rs","constructor_parameter.rs","declaration.rs","declaration_clause.rs","export_clause.rs","export_default_declaration.rs","export_named_specifier.rs","expression.rs","for_in_or_of_initializer.rs","for_initializer.rs","formal_parameter.rs","function.rs","function_body.rs","import_assertion_entry.rs","import_clause.rs","in_property.rs","literal_expression.rs","method_modifier.rs","mod.rs","module_item.rs","name.rs","named_import.rs","named_import_specifier.rs","object_assignment_pattern_member.rs","object_binding_pattern_member.rs","object_member.rs","object_member_name.rs","parameter.rs","property_modifier.rs","root.rs","statement.rs","switch_clause.rs","template_element.rs"]},{"name":"assignments","files":["array_assignment_pattern.rs","array_assignment_pattern_rest_element.rs","assignment_with_default.rs","computed_member_assignment.rs","identifier_assignment.rs","mod.rs","object_assignment_pattern.rs","object_assignment_pattern_property.rs","object_assignment_pattern_rest.rs","object_assignment_pattern_shorthand_property.rs","parenthesized_assignment.rs","static_member_assignment.rs"]},{"name":"auxiliary","files":["array_hole.rs","case_clause.rs","catch_clause.rs","default_clause.rs","directive.rs","else_clause.rs","expression_snipped.rs","finally_clause.rs","function_body.rs","initializer_clause.rs","mod.rs","module.rs","name.rs","new_target.rs","private_name.rs","reference_identifier.rs","script.rs","spread.rs","static_modifier.rs","variable_declaration_clause.rs","variable_declarator.rs"]},{"name":"bindings","files":["array_binding_pattern.rs","array_binding_pattern_rest_element.rs","binding_pattern_with_default.rs","constructor_parameters.rs","formal_parameter.rs","identifier_binding.rs","mod.rs","object_binding_pattern.rs","object_binding_pattern_property.rs","object_binding_pattern_rest.rs","object_binding_pattern_shorthand_property.rs","parameters.rs","rest_parameter.rs"]},{"name":"classes","files":["constructor_class_member.rs","empty_class_member.rs","extends_clause.rs","getter_class_member.rs","method_class_member.rs","mod.rs","property_class_member.rs","setter_class_member.rs","static_initialization_block_class_member.rs"]},{"name":"declarations","files":["catch_declaration.rs","class_declaration.rs","class_export_default_declaration.rs","for_variable_declaration.rs","function_declaration.rs","function_export_default_declaration.rs","mod.rs","variable_declaration.rs"]},{"name":"expressions","files":["array_expression.rs","arrow_function_expression.rs","assignment_expression.rs","await_expression.rs","big_int_literal_expression.rs","binary_expression.rs","boolean_literal_expression.rs","call_arguments.rs","call_expression.rs","class_expression.rs","computed_member_expression.rs","conditional_expression.rs","function_expression.rs","identifier_expression.rs","import_call_expression.rs","in_expression.rs","instanceof_expression.rs","logical_expression.rs","mod.rs","new_expression.rs","null_literal_expression.rs","number_literal_expression.rs","object_expression.rs","parenthesized_expression.rs","post_update_expression.rs","pre_update_expression.rs","regex_literal_expression.rs","sequence_expression.rs","static_member_expression.rs","string_literal_expression.rs","super_expression.rs","template.rs","template_chunk_element.rs","template_element.rs","this_expression.rs","unary_expression.rs","yield_argument.rs","yield_expression.rs"]},{"name":"lists","files":["array_assignment_pattern_element_list.rs","array_binding_pattern_element_list.rs","array_element_list.rs","call_argument_list.rs","class_member_list.rs","constructor_modifier_list.rs","constructor_parameter_list.rs","directive_list.rs","export_named_from_specifier_list.rs","export_named_specifier_list.rs","import_assertion_entry_list.rs","method_modifier_list.rs","mod.rs","module_item_list.rs","named_import_specifier_list.rs","object_assignment_pattern_property_list.rs","object_binding_pattern_property_list.rs","object_member_list.rs","parameter_list.rs","property_modifier_list.rs","statement_list.rs","switch_case_list.rs","template_element_list.rs","variable_declarator_list.rs"]},{"name":"module","files":["default_import_specifier.rs","export.rs","export_as_clause.rs","export_default_declaration_clause.rs","export_default_expression_clause.rs","export_from_clause.rs","export_named_clause.rs","export_named_from_clause.rs","export_named_from_specifier.rs","export_named_shorthand_specifier.rs","export_named_specifier.rs","import.rs","import_assertion.rs","import_assertion_entry.rs","import_bare_clause.rs","import_default_clause.rs","import_meta.rs","import_named_clause.rs","import_namespace_clause.rs","literal_export_name.rs","mod.rs","module_source.rs","named_import_specifier.rs","named_import_specifiers.rs","namespace_import_specifier.rs","shorthand_named_import_specifier.rs"]},{"name":"objects","files":["computed_member_name.rs","getter_object_member.rs","literal_member_name.rs","method_object_member.rs","mod.rs","private_class_member_name.rs","property_object_member.rs","setter_object_member.rs","shorthand_property_object_member.rs"]},{"name":"statements","files":["block_statement.rs","break_statement.rs","continue_statement.rs","debugger_statement.rs","do_while_statement.rs","empty_statement.rs","expression_statement.rs","for_in_statement.rs","for_of_statement.rs","for_statement.rs","if_statement.rs","labeled_statement.rs","mod.rs","return_statement.rs","switch_statement.rs","throw_statement.rs","try_finally_statement.rs","try_statement.rs","variable_statement.rs","while_statement.rs","with_statement.rs"]},{"name":"unknown","files":["mod.rs","unknown.rs","unknown_assignment.rs","unknown_binding.rs","unknown_expression.rs","unknown_import_assertion_entry.rs","unknown_member.rs","unknown_named_import_specifier.rs","unknown_parameter.rs","unknown_statement.rs"]}],"files":["mod.rs"]},{"name":"jsx","dirs":[{"name":"any","files":["attribute.rs","attribute_name.rs","attribute_value.rs","child.rs","element_name.rs","mod.rs","name.rs","object_name.rs","tag.rs"]},{"name":"attribute","files":["attribute.rs","attribute_initializer_clause.rs","expression_attribute_value.rs","mod.rs","spread_attribute.rs"]},{"name":"auxiliary","files":["expression_child.rs","mod.rs","name.rs","namespace_name.rs","reference_identifier.rs","spread_child.rs","string.rs","text.rs"]},{"name":"expressions","files":["mod.rs","tag_expression.rs"]},{"name":"lists","files":["attribute_list.rs","child_list.rs","mod.rs"]},{"name":"objects","files":["member_name.rs","mod.rs"]},{"name":"tag","files":["closing_element.rs","closing_fragment.rs","element.rs","fragment.rs","mod.rs","opening_element.rs","opening_fragment.rs","self_closing_element.rs"]}],"files":["mod.rs"]},{"name":"ts","dirs":[{"name":"any","files":["external_module_declaration_body.rs","index_signature_modifier.rs","method_signature_modifier.rs","mod.rs","module_name.rs","module_reference.rs","name.rs","property_annotation.rs","property_parameter_modifier.rs","property_signature_annotation.rs","property_signature_modifier.rs","return_type.rs","template_element.rs","ts_type.rs","tuple_type_element.rs","type_member.rs","type_predicate_parameter_name.rs","variable_annotation.rs"]},{"name":"assignments","files":["as_assignment.rs","mod.rs","non_null_assertion_assignment.rs","type_assertion_assignment.rs"]},{"name":"auxiliary","files":["abstract_modifier.rs","accessibility_modifier.rs","asserts_condition.rs","call_signature_type_member.rs","construct_signature_type_member.rs","declare_modifier.rs","default_type_clause.rs","definite_property_annotation.rs","definite_variable_annotation.rs","empty_external_module_declaration_body.rs","enum_member.rs","external_module_reference.rs","getter_signature_type_member.rs","implements_clause.rs","index_signature_type_member.rs","mapped_type_as_clause.rs","mapped_type_optional_modifier_clause.rs","mapped_type_readonly_modifier_clause.rs","method_signature_type_member.rs","mod.rs","module_block.rs","named_tuple_type_element.rs","optional_property_annotation.rs","optional_tuple_type_element.rs","override_modifier.rs","property_signature_type_member.rs","qualified_module_name.rs","qualified_name.rs","readonly_modifier.rs","rest_tuple_type_element.rs","return_type_annotation.rs","setter_signature_type_member.rs","type_annotation.rs","type_constraint_clause.rs","type_parameter_name.rs"]},{"name":"bindings","files":["identifier_binding.rs","index_signature_parameter.rs","mod.rs","property_parameter.rs","this_parameter.rs","type_parameter.rs","type_parameters.rs"]},{"name":"classes","files":["constructor_signature_class_member.rs","extends_clause.rs","getter_signature_class_member.rs","index_signature_class_member.rs","method_signature_class_member.rs","mod.rs","property_signature_class_member.rs","setter_signature_class_member.rs"]},{"name":"declarations","files":["declare_function_declaration.rs","enum_declaration.rs","external_module_declaration.rs","global_declaration.rs","import_equals_declaration.rs","interface_declaration.rs","mod.rs","module_declaration.rs","type_alias_declaration.rs"]},{"name":"expressions","files":["as_expression.rs","mod.rs","name_with_type_arguments.rs","non_null_assertion_expression.rs","template_chunk_element.rs","template_element.rs","template_literal_type.rs","type_arguments.rs","type_assertion_expression.rs"]},{"name":"lists","files":["enum_member_list.rs","index_signature_modifier_list.rs","intersection_type_element_list.rs","method_signature_modifier_list.rs","mod.rs","property_parameter_modifier_list.rs","property_signature_modifier_list.rs","template_element_list.rs","tuple_type_element_list.rs","type_argument_list.rs","type_list.rs","type_member_list.rs","type_parameter_list.rs","union_type_variant_list.rs"]},{"name":"module","files":["export_as_namespace_clause.rs","export_assignment_clause.rs","export_declare_clause.rs","import_type.rs","import_type_qualifier.rs","mod.rs"]},{"name":"statements","files":["declare_statement.rs","mod.rs"]},{"name":"types","files":["any_type.rs","array_type.rs","asserts_return_type.rs","big_int_literal_type.rs","bigint_type.rs","boolean_literal_type.rs","boolean_type.rs","conditional_type.rs","constructor_type.rs","function_type.rs","indexed_access_type.rs","infer_type.rs","intersection_type.rs","mapped_type.rs","mod.rs","never_type.rs","non_primitive_type.rs","null_literal_type.rs","number_literal_type.rs","number_type.rs","object_type.rs","parenthesized_type.rs","predicate_return_type.rs","reference_type.rs","string_literal_type.rs","string_type.rs","symbol_type.rs","this_type.rs","tuple_type.rs","type_operator_type.rs","typeof_type.rs","undefined_type.rs","union_type.rs","unknown_type.rs","void_type.rs"]}],"files":["mod.rs"]},{"name":"utils","dirs":[{"name":"member_chain","files":["chain_member.rs","groups.rs","mod.rs","simple_argument.rs"]}],"files":["array.rs","assignment_like.rs","binary_like_expression.rs","conditional.rs","format_class.rs","jsx.rs","mod.rs","object.rs","object_like.rs","object_pattern_like.rs","simple.rs","string_utils.rs","typescript.rs"]}],"files":["builders.rs","context.rs","cst.rs","generated.rs","lib.rs","parentheses.rs","prelude.rs","separated.rs"]};
sourcesIndex["rome_js_parser"] = {"name":"","dirs":[{"name":"lexer","files":["buffered_lexer.rs","bytes.rs","errors.rs","mod.rs","tables.rs"]},{"name":"parser","files":["parse_error.rs","parse_lists.rs","parse_recovery.rs","parsed_syntax.rs","rewrite_parser.rs","single_token_parse_recovery.rs"]},{"name":"syntax","dirs":[{"name":"jsx","files":["jsx_parse_errors.rs","mod.rs"]},{"name":"typescript","files":["statement.rs","ts_parse_error.rs","types.rs"]}],"files":["assignment.rs","auxiliary.rs","binding.rs","class.rs","expr.rs","function.rs","js_parse_error.rs","module.rs","object.rs","pattern.rs","program.rs","stmt.rs","typescript.rs"]}],"files":["event.rs","lib.rs","lossless_tree_sink.rs","parse.rs","parser.rs","state.rs","syntax.rs","token_set.rs","token_source.rs"]};
sourcesIndex["rome_js_syntax"] = {"name":"","dirs":[{"name":"generated","files":["kind.rs","macros.rs","nodes.rs","nodes_mut.rs"]}],"files":["expr_ext.rs","generated.rs","lib.rs","modifier_ext.rs","numbers.rs","source_type.rs","stmt_ext.rs","suppression.rs","syntax_node.rs","union_ext.rs"]};
sourcesIndex["rome_json_factory"] = {"name":"","dirs":[{"name":"generated","files":["node_factory.rs","syntax_factory.rs"]}],"files":["generated.rs","lib.rs"]};
sourcesIndex["rome_json_syntax"] = {"name":"","dirs":[{"name":"generated","files":["kind.rs","macros.rs","nodes.rs"]}],"files":["generated.rs","lib.rs","syntax_node.rs"]};
sourcesIndex["rome_rowan"] = {"name":"","dirs":[{"name":"ast","files":["batch.rs","mod.rs","mutation.rs"]},{"name":"cursor","files":["element.rs","node.rs","token.rs","trivia.rs"]},{"name":"green","files":["element.rs","node.rs","node_cache.rs","token.rs","trivia.rs"]},{"name":"syntax","files":["element.rs","node.rs","token.rs","trivia.rs"]},{"name":"syntax_factory","files":["parsed_children.rs","raw_syntax.rs"]}],"files":["arc.rs","cow_mut.rs","cursor.rs","green.rs","lib.rs","macros.rs","raw_language.rs","serde_impls.rs","syntax.rs","syntax_factory.rs","syntax_node_text.rs","syntax_token_text.rs","tree_builder.rs","utility_types.rs"]};
sourcesIndex["rome_service"] = {"name":"","dirs":[{"name":"configuration","dirs":[{"name":"linter","files":["mod.rs","rules.rs"]}],"files":["formatter.rs","javascript.rs","mod.rs"]},{"name":"file_handlers","files":["javascript.rs","json.rs","mod.rs","unknown.rs"]},{"name":"workspace","files":["client.rs","server.rs"]}],"files":["lib.rs","settings.rs","workspace.rs"]};
createSourceSidebar();
