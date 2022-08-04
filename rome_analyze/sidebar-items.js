initSidebarItems({"enum":[["ActionCategory",""],["AnalyzerDiagnostic","Small wrapper for diagnostics during the analysis phase."],["CannotCreateServicesError",""],["Never","Utility type to be used as a default value for the `B` generic type on `analyze` when the provided callback never breaks"],["Phases","Defines all the phases that the [RuleRegistry] supports."],["QueryKey","Mirrors the variants of [QueryMatch] to statically compute which queries a given [Queryable] type can match"],["QueryMatch","Enumerate all the types of [Queryable] analyzer visitors may emit"],["RuleCategory",""],["RuleFilter","Allow filtering a single rule or group of rules by their names"]],"macro":[["declare_group","This macro is used by the codegen script to declare an analyzer rule group, and implement the [RuleGroup] trait for it"],["declare_rule","This macro is used to declare an analyzer rule type, and implement the [RuleMeta] trait for it"],["merge_node_visitors","Creates a single struct implementing [Visitor] over a collection of type implementing the [NodeVisitor] helper trait. Unlike the global [Visitor], node visitors are transient: they get instantiated when the traversal enters the corresponding node and destroyed when the node is exited. They are intended as a building blocks for creating and managing the state of complex visitors by allowing the implementation to be split over multiple smaller components."]],"mod":[["context",""]],"struct":[["AnalysisFilter","Allows filtering the list of rules that will be executed in a run of the analyzer, and at what source code range signals (diagnostics or actions) may be raised"],["Analyzer","The analyzer is the main entry point into the `rome_analyze` infrastructure. Its role is to run a collection of [Visitor]s over a syntax tree, with each visitor implementing various analysis over this syntax tree to generate auxiliary data structures as well as emit “query match” events to be processed by lint rules and in turn emit “analyzer signals” in the form of diagnostics, code actions or both"],["AnalyzerAction","Code Action object returned by the analyzer, generated from a [crate::RuleAction] with additional information about the rule injected by the analyzer"],["AnalyzerContext",""],["Ast","Query type usable by lint rules to match on specific [AstNode] types"],["RegistryRuleMetadata","Metadata entry for a rule and its group in the registry"],["RuleAction","Code Action object returned by a single analysis rule"],["RuleCategories",""],["RuleDiagnostic","Diagnostic object returned by a single analysis rule"],["RuleKey","Opaque identifier for a single rule"],["RuleMetadata","Static metadata containing information about a rule"],["RuleRegistry","The rule registry holds type-erased instances of all active analysis rules for each phase. What defines a phase is the set of services that a phase offers. Currently we have:"],["RuleSuppressions","Set of nodes this rule has suppressed from matching its query"],["ServiceBag",""],["SignalEntry","Entry for a pending signal in the `signal_queue`"],["SyntaxVisitor","The [SyntaxVisitor] is the simplest form of visitor implemented for the analyzer, it simply broadcast each [WalkEvent::Enter] as a query match event for the [SyntaxNode] being entered"],["VisitorContext","Mutable context objects shared by all visitors"],["VisitorFinishContext","Mutable context objects provided to the finish hook of visitors"]],"trait":[["AnalyzerSignal","Event raised by the analyzer when a Rule emits a diagnostic, a code action, or both"],["FromServices",""],["GroupLanguage","This trait is implemented for tuples of [Rule] types of size 1 to 20 if the query type of all the rules in the tuple share the same associated [Language] (which is then aliased as the `Language` associated type on [GroupLanguage] itself). It is used to ensure all the rules in a given group are all querying the same underlying language"],["NodeVisitor","A node visitor is a special kind of visitor that does not have a persistent state for the entire run of the analyzer. Instead these visitors are transient, they get instantiated when the traversal enters the corresponding node type and destroyed when the corresponding node exits"],["Phase","Defines which phase a rule will run. This will be defined by the set of services a rule demands."],["QueryMatcher","The [QueryMatcher] trait is responsible of running lint rules on [QueryMatch] instances emitted by the various Visitor and push signals wrapped in [SignalEntry] to the signal queue"],["Queryable","Trait implemented for all types, for example lint rules can query them to emit diagnostics or code actions."],["Rule","Trait implemented by all analysis rules: declares interest to a certain AstNode type, and a callback function to be executed on all nodes matching the query to possibly raise an analysis event"],["RuleGroup","A rule group is a collection of rules under a given name, serving as a “namespace” for lint rules and allowing the entire set of rules to be disabled at once"],["RuleMeta",""],["Visitor","Visitors are the main building blocks of the analyzer: they receive syntax [WalkEvent]s, process these events to build secondary data structures from the syntax tree, and emit rule query matches through the [crate::RuleRegistry]"]],"type":[["ControlFlow","Type alias of [ops::ControlFlow] with the `B` generic type defaulting to [Never]"],["LanguageRoot",""]]});