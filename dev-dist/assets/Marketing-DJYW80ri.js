import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CUrQABng.js";
import { t as Badge } from "./index-CMkWjCvZ.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DGTnT6Z9.js";
//#region src/pages/Marketing.tsx
var import_jsx_runtime = require_jsx_runtime();
function Marketing() {
	const campaigns = [{
		name: "Campanha SP (Meta)",
		platform: "Meta Ads",
		spend: "R$ 1.200",
		leads: 450,
		cpl: "R$ 2,66",
		status: "Ativa"
	}, {
		name: "Search Brand (Google)",
		platform: "Google Ads",
		spend: "R$ 800",
		leads: 320,
		cpl: "R$ 2,50",
		status: "Ativa"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Marketing.tsx:33:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Marketing.tsx:34:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/Marketing.tsx:35:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Marketing e Ads"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/Marketing.tsx:36:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mt-1",
				children: "Performance de aquisição."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/Marketing.tsx:39:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/pages/Marketing.tsx:40:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/Marketing.tsx:41:11",
					"data-prohibitions": "[]",
					children: "Campanhas Ativas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					"data-uid": "src/pages/Marketing.tsx:42:11",
					"data-prohibitions": "[]",
					children: "Integração com plataformas de anúncios."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/Marketing.tsx:44:9",
				"data-prohibitions": "[editContent]",
				className: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/Marketing.tsx:45:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/Marketing.tsx:46:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/Marketing.tsx:47:15",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:48:17",
									"data-prohibitions": "[]",
									children: "Campanha"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:49:17",
									"data-prohibitions": "[]",
									children: "Canal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:50:17",
									"data-prohibitions": "[]",
									children: "Gasto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:51:17",
									"data-prohibitions": "[]",
									children: "Leads"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:52:17",
									"data-prohibitions": "[]",
									children: "CPL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Marketing.tsx:53:17",
									"data-prohibitions": "[]",
									children: "Status"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/Marketing.tsx:56:13",
						"data-prohibitions": "[editContent]",
						children: campaigns.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/Marketing.tsx:58:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:59:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:60:19",
									"data-prohibitions": "[editContent]",
									children: c.platform
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:61:19",
									"data-prohibitions": "[editContent]",
									children: c.spend
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:62:19",
									"data-prohibitions": "[editContent]",
									children: c.leads
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:63:19",
									"data-prohibitions": "[editContent]",
									children: c.cpl
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Marketing.tsx:64:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/Marketing.tsx:65:21",
										"data-prohibitions": "[editContent]",
										children: c.status
									})
								})
							]
						}, i))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { Marketing as default };

//# sourceMappingURL=Marketing-DJYW80ri.js.map