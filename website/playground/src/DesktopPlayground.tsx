import { PlaygroundProps } from "./types";
import CodeMirror, {
	ReactCodeMirrorRef,
	useCodeMirror,
} from "@uiw/react-codemirror";
import { Diagnostic, setDiagnostics, linter } from "@codemirror/lint";
import { javascript } from "@codemirror/lang-javascript";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { SettingsMenu } from "./SettingsMenu";
import TreeView from "./TreeView";
//@ts-expect-error
import { ReactComponent as SuccessIcon } from "../assets/success.svg";
//@ts-expect-error
import { ReactComponent as FailedIcon } from "../assets/failed.svg";
//@ts-expect-error
import { ReactComponent as CopyIcon } from "../assets/copy.svg";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
import { RomeDiagnostic } from "../pkg/rome_playground";

export default function DesktopPlayground({
	setPlaygroundState,
	playgroundState: { code, ...settings },
	prettierOutput,
	romeOutput: { cst, ast, formatted_code, formatter_ir, errors },
}: PlaygroundProps) {
	const { isJsx, isTypeScript } = settings;
	const [clipboardStatus, setClipboardStatus] = useState<
		"success" | "failed" | "normal"
	>("normal");

	const extensions = [
		javascript({
			jsx: isJsx,
			typescript: isTypeScript,
		}),
	];
	let codeMirrorRef: Ref<ReactCodeMirrorRef> | null = useRef(null);
	useEffect(() => {
		if (clipboardStatus !== "normal") {
			setClipboardStatus("normal");
		}
	}, [formatter_ir]);
	useEffect(() => {
		let current = codeMirrorRef as any;
		if (current) {
			let { state, view } = current.current;
			if (!state && !view) {
				return;
			}
			// console.log(state, view);
			let diagnostics: Diagnostic[] = errors
				.filter((item) => item.message)
				.map((item) => {
					return {
						from: item.start,
						to: item.end,
						message: item.message
							.slice(1, -1)
							.replaceAll(`"<Emphasis>"`, "")
							.replaceAll(`"</Emphasis>"`, ""),
						severity: "error",
					};
				});
			view.dispatch(view.state.update(setDiagnostics(state, diagnostics)));
		}
	}, [errors]);
	const copyToClipboard = async () => {
		if (!navigator.clipboard) {
			setClipboardStatus("failed");
			console.error(
				"Your browser does not support clipboard, could not copy the text"
			);
		}
		try {
			await navigator.clipboard.writeText(formatter_ir);
			setClipboardStatus("success");
		} catch (err: any) {
			setClipboardStatus("failed");
			console.error(err.toString());
		}
	};

	const onChange = useCallback((value) => {
		setPlaygroundState((state) => ({ ...state, code: value }));
	}, []);

	return (
		<div className="divide-y divide-slate-300">
			<h1 className="p-4 text-xl">Rome Playground</h1>
			<SettingsMenu
				settings={settings}
				setPlaygroundState={setPlaygroundState}
			/>
			<div className="box-border flex h-screen divide-x divide-slate-300">
				<div className="w-1/2 p-5">
					<CodeMirror
						ref={codeMirrorRef}
						value={code}
						height="70vh"
						extensions={extensions}
						placeholder="Enter your code here"
						onChange={onChange}
					/>
				</div>
				<div className="w-1/2 p-5 flex flex-col">
					<Tabs>
						<TabList>
							<Tab selectedClassName="bg-slate-300">Formatter</Tab>
							<Tab selectedClassName="bg-slate-300">CST</Tab>
							<Tab selectedClassName="bg-slate-300">AST</Tab>
							<Tab selectedClassName="bg-slate-300">Rome IR</Tab>
							<Tab selectedClassName="bg-slate-300">Prettier IR</Tab>
							<Tab
								disabled={errors.length === 0}
								selectedClassName="bg-slate-300"
							>
								Diagnostics
							</Tab>
						</TabList>
						<TabPanel>
							<h1>Rome</h1>
							<CodeMirror
								value={formatted_code}
								extensions={extensions}
								placeholder="Rome Output"
								height="30vh"
								readOnly={true}
							/>
							<h1>Prettier</h1>
							<CodeMirror
								value={prettierOutput.code}
								extensions={extensions}
								placeholder="Prettier Output"
								height="30vh"
								readOnly={true}
							/>
						</TabPanel>
						<TabPanel>
							<TreeView tree={cst} />
						</TabPanel>
						<TabPanel>
							<TreeView tree={ast} />
						</TabPanel>
						<TabPanel>
							<button
								className="bg-gray-300 px-2 py-2 text-white absolute right-0 top--1 mr-5 flex items-center rounded-md"
								onClick={copyToClipboard}
							>
								{clipboardStatus === "success" && (
									<SuccessIcon
										style={{
											width: 16,
											height: 16,
											marginRight: 5,
										}}
									/>
								)}
								{clipboardStatus === "failed" && (
									<FailedIcon
										style={{
											width: 16,
											height: 16,
											marginRight: 5,
										}}
									/>
								)}
								<CopyIcon style={{ width: 16, height: 16 }} />
							</button>
							<pre className="h-screen overflow-scroll">{formatter_ir}</pre>
						</TabPanel>
						<TabPanel>
							<pre className="h-screen overflow-scroll">
								{prettierOutput.ir}
							</pre>
						</TabPanel>
						<TabPanel>
							<div
								className="h-screen overflow-scroll whitespace-pre-wrap text-red-500 text-xs error-panel"
								dangerouslySetInnerHTML={{ __html: errors.join("") }}
							/>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
