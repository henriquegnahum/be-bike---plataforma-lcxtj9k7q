import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { t as Card } from "./card-CUrQABng.js";
import { t as Badge } from "./index-CMkWjCvZ.js";
import { a as taskColumns } from "./mock-data-DXLf5JeC.js";
//#region src/pages/Maintenance.tsx
var import_jsx_runtime = require_jsx_runtime();
function Maintenance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Maintenance.tsx:7:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Maintenance.tsx:8:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/Maintenance.tsx:9:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Manutenção e O.S."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/Maintenance.tsx:10:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mt-1",
				children: "Kanban de operações."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Maintenance.tsx:13:7",
			"data-prohibitions": "[editContent]",
			className: "flex gap-4 overflow-x-auto pb-4",
			children: taskColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Maintenance.tsx:15:11",
				"data-prohibitions": "[editContent]",
				className: "min-w-[300px] flex-1 bg-muted/30 rounded-lg p-4 border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Maintenance.tsx:16:13",
					"data-prohibitions": "[editContent]",
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-uid": "src/pages/Maintenance.tsx:17:15",
						"data-prohibitions": "[editContent]",
						className: "font-semibold",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						"data-uid": "src/pages/Maintenance.tsx:18:15",
						"data-prohibitions": "[editContent]",
						variant: "secondary",
						children: col.tasks.length
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Maintenance.tsx:20:13",
					"data-prohibitions": "[editContent]",
					className: "space-y-3",
					children: col.tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/Maintenance.tsx:22:17",
						"data-prohibitions": "[editContent]",
						className: "p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Maintenance.tsx:23:19",
							"data-prohibitions": "[editContent]",
							className: "flex justify-between items-start mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/Maintenance.tsx:24:21",
								"data-prohibitions": "[editContent]",
								className: "text-xs font-mono text-muted-foreground",
								children: task.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"data-uid": "src/pages/Maintenance.tsx:25:21",
								"data-prohibitions": "[editContent]",
								className: "text-xs font-medium",
								children: ["#", task.chassi]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/Maintenance.tsx:27:19",
							"data-prohibitions": "[editContent]",
							className: "text-sm",
							children: task.desc
						})]
					}, task.id))
				})]
			}, col.id))
		})]
	});
}
//#endregion
export { Maintenance as default };

//# sourceMappingURL=Maintenance-Bqg8l9Al.js.map