import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { t as Button } from "./button-HvQh1git.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import "./main-WDCfB6bP.js";
import { F as Link, o as useTranslation, t as Badge } from "./index-CMkWjCvZ.js";
import { r as MOCK_DELIVERERS } from "./mock-data-DXLf5JeC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DGTnT6Z9.js";
//#region src/pages/Deliverers.tsx
var import_jsx_runtime = require_jsx_runtime();
function Deliverers() {
	const t = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Deliverers.tsx:20:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Deliverers.tsx:21:7",
			"data-prohibitions": "[editContent]",
			className: "flex justify-between items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Deliverers.tsx:22:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/Deliverers.tsx:23:11",
					"data-prohibitions": "[editContent]",
					className: "text-3xl font-bold tracking-tight",
					children: t("deliverer_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Deliverers.tsx:24:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mt-1",
					children: "Gestão de entregadores."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/Deliverers.tsx:28:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/Deliverers.tsx:29:9",
				"data-prohibitions": "[]",
				className: "border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/Deliverers.tsx:30:11",
					"data-prohibitions": "[]",
					className: "text-lg",
					children: "Diretório"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/Deliverers.tsx:32:9",
				"data-prohibitions": "[editContent]",
				className: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/Deliverers.tsx:33:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/Deliverers.tsx:34:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/Deliverers.tsx:35:15",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Deliverers.tsx:36:17",
									"data-prohibitions": "[]",
									children: "Nome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Deliverers.tsx:37:17",
									"data-prohibitions": "[]",
									children: "CPF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Deliverers.tsx:38:17",
									"data-prohibitions": "[]",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Deliverers.tsx:39:17",
									"data-prohibitions": "[]",
									children: "Situação Fin."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/Deliverers.tsx:40:17",
									"data-prohibitions": "[]",
									className: "text-right",
									children: "Ação"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/Deliverers.tsx:43:13",
						"data-prohibitions": "[editContent]",
						children: MOCK_DELIVERERS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/Deliverers.tsx:45:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Deliverers.tsx:46:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Deliverers.tsx:47:19",
									"data-prohibitions": "[editContent]",
									className: "text-muted-foreground",
									children: d.cpf
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Deliverers.tsx:48:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/Deliverers.tsx:49:21",
										"data-prohibitions": "[editContent]",
										variant: "outline",
										children: t(d.status)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Deliverers.tsx:51:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/Deliverers.tsx:52:21",
										"data-prohibitions": "[editContent]",
										variant: d.contractStatus === "Adimplente" ? "default" : "destructive",
										children: t(d.contractStatus)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/Deliverers.tsx:56:19",
									"data-prohibitions": "[]",
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/Deliverers.tsx:57:21",
										"data-prohibitions": "[]",
										variant: "ghost",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											"data-uid": "src/pages/Deliverers.tsx:58:23",
											"data-prohibitions": "[]",
											to: `/deliverers/${d.id}`,
											children: "Perfil"
										})
									})
								})
							]
						}, d.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { Deliverers as default };

//# sourceMappingURL=Deliverers-BXHVHHUP.js.map