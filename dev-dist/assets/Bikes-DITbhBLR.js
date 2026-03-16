import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { t as Button } from "./button-HvQh1git.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import { t as Download } from "./download-DMRYypTY.js";
import { t as Plus } from "./plus-CnHCmGhv.js";
import "./main-WDCfB6bP.js";
import { F as Link, o as useTranslation, t as Badge } from "./index-vr4hJEso.js";
import { t as MOCK_BIKES } from "./mock-data-DXLf5JeC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DGTnT6Z9.js";
import { i as TabsTrigger, r as TabsList, t as Tabs } from "./tabs-DkqyypwR.js";
//#region src/pages/Bikes.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Bikes() {
	const t = useTranslation();
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("Todas");
	const filteredBikes = MOCK_BIKES.filter((b) => statusFilter === "Todas" || b.status === statusFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Bikes.tsx:28:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Bikes.tsx:29:7",
			"data-prohibitions": "[editContent]",
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Bikes.tsx:30:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/Bikes.tsx:31:11",
					"data-prohibitions": "[editContent]",
					className: "text-3xl font-bold tracking-tight",
					children: t("fleet_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Bikes.tsx:32:11",
					"data-prohibitions": "[editContent]",
					className: "text-muted-foreground mt-1",
					children: t("fleet_desc")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Bikes.tsx:34:9",
				"data-prohibitions": "[]",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/Bikes.tsx:35:11",
					"data-prohibitions": "[]",
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						"data-uid": "src/pages/Bikes.tsx:36:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), " CSV"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/Bikes.tsx:38:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"data-uid": "src/pages/Bikes.tsx:39:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), " Nova Bike"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			"data-uid": "src/pages/Bikes.tsx:44:7",
			"data-prohibitions": "[editContent]",
			defaultValue: "Todas",
			onValueChange: setStatusFilter,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				"data-uid": "src/pages/Bikes.tsx:45:9",
				"data-prohibitions": "[]",
				className: "mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						"data-uid": "src/pages/Bikes.tsx:46:11",
						"data-prohibitions": "[]",
						value: "Todas",
						children: "Todas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						"data-uid": "src/pages/Bikes.tsx:47:11",
						"data-prohibitions": "[]",
						value: "Ativa",
						children: "Ativas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						"data-uid": "src/pages/Bikes.tsx:48:11",
						"data-prohibitions": "[]",
						value: "Oficina",
						children: "Oficina"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/Bikes.tsx:51:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/Bikes.tsx:52:11",
					"data-prohibitions": "[]",
					className: "border-b",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/Bikes.tsx:53:13",
						"data-prohibitions": "[]",
						className: "text-lg",
						children: "Frota"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/pages/Bikes.tsx:55:11",
					"data-prohibitions": "[editContent]",
					className: "p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
						"data-uid": "src/pages/Bikes.tsx:56:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
							"data-uid": "src/pages/Bikes.tsx:57:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								"data-uid": "src/pages/Bikes.tsx:58:17",
								"data-prohibitions": "[]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:59:19",
										"data-prohibitions": "[]",
										children: "Chassi"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:60:19",
										"data-prohibitions": "[]",
										children: "Modelo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:61:19",
										"data-prohibitions": "[]",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:62:19",
										"data-prohibitions": "[]",
										children: "KM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:63:19",
										"data-prohibitions": "[]",
										children: "Entregador"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/Bikes.tsx:64:19",
										"data-prohibitions": "[]",
										className: "text-right",
										children: "Ação"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
							"data-uid": "src/pages/Bikes.tsx:67:15",
							"data-prohibitions": "[editContent]",
							children: filteredBikes.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								"data-uid": "src/pages/Bikes.tsx:69:19",
								"data-prohibitions": "[editContent]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:70:21",
										"data-prohibitions": "[editContent]",
										className: "font-mono text-sm",
										children: b.chassi
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:71:21",
										"data-prohibitions": "[editContent]",
										children: b.model
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:72:21",
										"data-prohibitions": "[editContent]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											"data-uid": "src/pages/Bikes.tsx:73:23",
											"data-prohibitions": "[editContent]",
											variant: b.status === "Ativa" ? "default" : b.status === "Oficina" ? "destructive" : "secondary",
											children: t(b.status)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:85:21",
										"data-prohibitions": "[editContent]",
										children: b.mileage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:86:21",
										"data-prohibitions": "[editContent]",
										children: b.deliverer || "-"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/Bikes.tsx:87:21",
										"data-prohibitions": "[]",
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/Bikes.tsx:88:23",
											"data-prohibitions": "[]",
											variant: "ghost",
											size: "sm",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												"data-uid": "src/pages/Bikes.tsx:89:25",
												"data-prohibitions": "[]",
												to: `/bikes/${b.id}`,
												children: "Ver"
											})
										})
									})
								]
							}, b.id))
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { Bikes as default };

//# sourceMappingURL=Bikes-DITbhBLR.js.map