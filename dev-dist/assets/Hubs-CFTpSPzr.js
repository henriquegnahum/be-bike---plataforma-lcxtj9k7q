import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import { n as ArrowDownLeft, t as ArrowUpRight } from "./arrow-up-right-BIxCRi5o.js";
import "./main-WDCfB6bP.js";
import { D as TriangleAlert, F as Activity, S as Button, o as useTranslation, t as Badge, w as Wrench } from "./index-B_b7nb4I.js";
import { t as Progress } from "./progress-BzlJxxLy.js";
var Building2 = createLucideIcon("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]);
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region src/pages/Hubs.tsx
var import_jsx_runtime = require_jsx_runtime();
function Hubs() {
	const t = useTranslation();
	const hubs = [
		{
			id: "HUB-SP-C",
			name: "SP Centro",
			status: "Operacional",
			withdrawals: 12,
			returns: 4,
			stockHealth: 85,
			techProd: 92,
			statusIcon: CircleCheck,
			statusColor: "bg-emerald-500"
		},
		{
			id: "HUB-SP-S",
			name: "SP Sul",
			status: "Sobrecarga",
			withdrawals: 28,
			returns: 15,
			stockHealth: 45,
			techProd: 65,
			statusIcon: TriangleAlert,
			statusColor: "bg-red-500"
		},
		{
			id: "HUB-RJ-C",
			name: "RJ Centro",
			status: "Operacional",
			withdrawals: 8,
			returns: 2,
			stockHealth: 90,
			techProd: 88,
			statusIcon: CircleCheck,
			statusColor: "bg-emerald-500"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Hubs.tsx:56:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Hubs.tsx:57:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/Hubs.tsx:58:9",
				"data-prohibitions": "[editContent]",
				className: "text-3xl font-bold tracking-tight",
				children: t("hubs")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/Hubs.tsx:59:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mt-1",
				children: "Controle Integrado de Operações, Estoque e Produtividade."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Hubs.tsx:64:7",
			"data-prohibitions": "[editContent]",
			className: "grid gap-6 md:grid-cols-3",
			children: hubs.map((hub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/Hubs.tsx:66:11",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/Hubs.tsx:67:13",
					"data-prohibitions": "[editContent]",
					className: "pb-4 border-b",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/Hubs.tsx:68:15",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Hubs.tsx:69:17",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								"data-uid": "src/pages/Hubs.tsx:70:19",
								"data-prohibitions": "[editContent]",
								className: "flex items-center gap-2 text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										"data-uid": "src/pages/Hubs.tsx:71:21",
										"data-prohibitions": "[editContent]",
										className: "w-4 h-4"
									}),
									" ",
									hub.name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								"data-uid": "src/pages/Hubs.tsx:73:19",
								"data-prohibitions": "[editContent]",
								className: "font-mono text-xs mt-1",
								children: hub.id
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							"data-uid": "src/pages/Hubs.tsx:75:17",
							"data-prohibitions": "[editContent]",
							variant: hub.status === "Operacional" ? "default" : "destructive",
							className: "gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(hub.statusIcon, {
									"data-uid": "src/pages/Hubs.tsx:79:19",
									"data-prohibitions": "[editContent]",
									className: "w-3 h-3"
								}),
								" ",
								hub.status
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/Hubs.tsx:83:13",
					"data-prohibitions": "[editContent]",
					className: "pt-6 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Hubs.tsx:84:15",
							"data-prohibitions": "[editContent]",
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Hubs.tsx:85:17",
								"data-prohibitions": "[editContent]",
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/Hubs.tsx:86:19",
									"data-prohibitions": "[editContent]",
									className: "text-xs font-medium text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											"data-uid": "src/pages/Hubs.tsx:87:21",
											"data-prohibitions": "[editContent]",
											className: "w-3 h-3"
										}),
										" ",
										t("withdrawals")
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/Hubs.tsx:89:19",
									"data-prohibitions": "[editContent]",
									className: "text-2xl font-bold",
									children: hub.withdrawals
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Hubs.tsx:91:17",
								"data-prohibitions": "[editContent]",
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/Hubs.tsx:92:19",
									"data-prohibitions": "[editContent]",
									className: "text-xs font-medium text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, {
											"data-uid": "src/pages/Hubs.tsx:93:21",
											"data-prohibitions": "[editContent]",
											className: "w-3 h-3"
										}),
										" ",
										t("returns")
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/Hubs.tsx:95:19",
									"data-prohibitions": "[editContent]",
									className: "text-2xl font-bold",
									children: hub.returns
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Hubs.tsx:99:15",
							"data-prohibitions": "[editContent]",
							className: "space-y-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Hubs.tsx:100:17",
								"data-prohibitions": "[editContent]",
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Hubs.tsx:101:19",
									"data-prohibitions": "[editContent]",
									className: "flex justify-between text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										"data-uid": "src/pages/Hubs.tsx:102:21",
										"data-prohibitions": "[editContent]",
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
												"data-uid": "src/pages/Hubs.tsx:103:23",
												"data-prohibitions": "[editContent]",
												className: "w-3 h-3"
											}),
											" ",
											t("stock_health")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										"data-uid": "src/pages/Hubs.tsx:105:21",
										"data-prohibitions": "[editContent]",
										children: [hub.stockHealth, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									"data-uid": "src/pages/Hubs.tsx:107:19",
									"data-prohibitions": "[editContent]",
									value: hub.stockHealth,
									className: "h-2"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Hubs.tsx:110:17",
								"data-prohibitions": "[editContent]",
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/Hubs.tsx:111:19",
									"data-prohibitions": "[editContent]",
									className: "flex justify-between text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										"data-uid": "src/pages/Hubs.tsx:112:21",
										"data-prohibitions": "[editContent]",
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
												"data-uid": "src/pages/Hubs.tsx:113:23",
												"data-prohibitions": "[editContent]",
												className: "w-3 h-3"
											}),
											" ",
											t("tech_productivity")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										"data-uid": "src/pages/Hubs.tsx:115:21",
										"data-prohibitions": "[editContent]",
										children: [hub.techProd, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									"data-uid": "src/pages/Hubs.tsx:117:19",
									"data-prohibitions": "[editContent]",
									value: hub.techProd,
									className: "h-2"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/Hubs.tsx:121:15",
							"data-prohibitions": "[editContent]",
							className: "w-full mt-4",
							variant: "outline",
							children: t("manage_hub")
						})
					]
				})]
			}, hub.id))
		})]
	});
}
//#endregion
export { Hubs as default };

//# sourceMappingURL=Hubs-CFTpSPzr.js.map