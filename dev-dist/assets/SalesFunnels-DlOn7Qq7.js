import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { t as Button } from "./button-HvQh1git.js";
import { n as CardContent, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-NwY-v_gp.js";
import { t as Plus } from "./plus-CnHCmGhv.js";
import { F as Link, t as Badge } from "./index-vr4hJEso.js";
import { n as MOCK_CRM_LEADS } from "./mock-data-DXLf5JeC.js";
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
//#endregion
//#region src/pages/sales/SalesFunnels.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	"Leads",
	"Contacted",
	"Analysis",
	"Negotiation",
	"Signed/Onboarding"
];
function SalesFunnels() {
	const [leads, setLeads] = (0, import_react.useState)(MOCK_CRM_LEADS);
	const [funnel, setFunnel] = (0, import_react.useState)("b2c");
	const moveLead = (e, id, direction) => {
		e.preventDefault();
		e.stopPropagation();
		setLeads((current) => current.map((lead) => {
			if (lead.id !== id) return lead;
			const currentIndex = STAGES.indexOf(lead.stage);
			const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
			if (newIndex >= 0 && newIndex < STAGES.length) return {
				...lead,
				stage: STAGES[newIndex]
			};
			return lead;
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/sales/SalesFunnels.tsx:37:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 h-[calc(100vh-8rem)] flex flex-col pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/sales/SalesFunnels.tsx:38:7",
			"data-prohibitions": "[]",
			className: "flex justify-between items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/sales/SalesFunnels.tsx:39:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:40:11",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold tracking-tight",
					children: "Funis de Vendas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:41:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mt-1",
					children: "Gestão de pipeline comercial."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/sales/SalesFunnels.tsx:43:9",
				"data-prohibitions": "[]",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:44:11",
					"data-prohibitions": "[]",
					value: funnel,
					onValueChange: setFunnel,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						"data-uid": "src/pages/sales/SalesFunnels.tsx:45:13",
						"data-prohibitions": "[]",
						className: "w-[200px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							"data-uid": "src/pages/sales/SalesFunnels.tsx:46:15",
							"data-prohibitions": "[editContent]",
							placeholder: "Funil"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						"data-uid": "src/pages/sales/SalesFunnels.tsx:48:13",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							"data-uid": "src/pages/sales/SalesFunnels.tsx:49:15",
							"data-prohibitions": "[]",
							value: "b2c",
							children: "B2C (Entregadores)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							"data-uid": "src/pages/sales/SalesFunnels.tsx:50:15",
							"data-prohibitions": "[]",
							value: "b2b",
							children: "B2B (Frotas)"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:53:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"data-uid": "src/pages/sales/SalesFunnels.tsx:54:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), " Novo"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/sales/SalesFunnels.tsx:59:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 flex gap-4 overflow-x-auto items-start min-h-0",
			children: STAGES.map((stage, stageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/sales/SalesFunnels.tsx:61:11",
				"data-prohibitions": "[editContent]",
				className: "w-80 flex-shrink-0 bg-muted/30 rounded-lg p-3 flex flex-col h-full border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:65:13",
					"data-prohibitions": "[editContent]",
					className: "flex items-center justify-between mb-3 px-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/sales/SalesFunnels.tsx:66:15",
						"data-prohibitions": "[editContent]",
						className: "font-semibold text-sm flex items-center gap-2",
						children: [stage, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							"data-uid": "src/pages/sales/SalesFunnels.tsx:68:17",
							"data-prohibitions": "[editContent]",
							variant: "secondary",
							className: "text-[10px]",
							children: leads.filter((l) => l.stage === stage).length
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/sales/SalesFunnels.tsx:73:13",
					"data-prohibitions": "[editContent]",
					className: "space-y-3 overflow-y-auto flex-1 pr-1",
					children: leads.filter((l) => l.stage === stage).map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/sales/SalesFunnels.tsx:77:19",
						"data-prohibitions": "[editContent]",
						to: `/sales/customers/${lead.id}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/sales/SalesFunnels.tsx:78:21",
							"data-prohibitions": "[editContent]",
							className: "cursor-pointer hover:border-primary/50 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/sales/SalesFunnels.tsx:79:23",
								"data-prohibitions": "[editContent]",
								className: "p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/sales/SalesFunnels.tsx:80:25",
										"data-prohibitions": "[editContent]",
										className: "font-medium text-sm",
										children: lead.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/sales/SalesFunnels.tsx:81:25",
										"data-prohibitions": "[editContent]",
										className: "text-xs text-muted-foreground mt-1",
										children: lead.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/sales/SalesFunnels.tsx:82:25",
										"data-prohibitions": "[editContent]",
										className: "flex items-center justify-between mt-3 pt-2 border-t",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/sales/SalesFunnels.tsx:83:27",
											"data-prohibitions": "[editContent]",
											className: "text-[10px] text-muted-foreground",
											children: lead.source
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/sales/SalesFunnels.tsx:84:27",
											"data-prohibitions": "[]",
											className: "flex gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/sales/SalesFunnels.tsx:85:29",
												"data-prohibitions": "[]",
												variant: "ghost",
												size: "icon",
												className: "h-6 w-6",
												disabled: stageIndex === 0,
												onClick: (e) => moveLead(e, lead.id, "prev"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
													"data-uid": "src/pages/sales/SalesFunnels.tsx:92:31",
													"data-prohibitions": "[editContent]",
													className: "w-3 h-3"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/sales/SalesFunnels.tsx:94:29",
												"data-prohibitions": "[]",
												variant: "ghost",
												size: "icon",
												className: "h-6 w-6",
												disabled: stageIndex === STAGES.length - 1,
												onClick: (e) => moveLead(e, lead.id, "next"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													"data-uid": "src/pages/sales/SalesFunnels.tsx:101:31",
													"data-prohibitions": "[editContent]",
													className: "w-3 h-3"
												})
											})]
										})]
									})
								]
							})
						})
					}, lead.id))
				})]
			}, stage))
		})]
	});
}
//#endregion
export { SalesFunnels as default };

//# sourceMappingURL=SalesFunnels-DlOn7Qq7.js.map