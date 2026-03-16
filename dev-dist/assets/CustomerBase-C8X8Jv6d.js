import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { t as Button } from "./button-HvQh1git.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-D3Wnj-VK.js";
import { t as Download } from "./download-DMRYypTY.js";
import { F as Link, S as Input, t as Badge } from "./index-BLu9849_.js";
import { n as MOCK_CRM_LEADS } from "./mock-data-DXLf5JeC.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-DGTnT6Z9.js";
var Funnel = createLucideIcon("funnel", [["path", {
	d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
	key: "sc7q7i"
}]]);
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
//#endregion
//#region src/pages/sales/CustomerBase.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CustomerBase() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filteredCustomers = MOCK_CRM_LEADS.filter((c) => {
		const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.cpf.includes(search);
		const matchesStatus = statusFilter === "all" || c.stage === statusFilter;
		return matchesSearch && matchesStatus;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/sales/CustomerBase.tsx:37:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/sales/CustomerBase.tsx:38:7",
			"data-prohibitions": "[]",
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/sales/CustomerBase.tsx:39:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/sales/CustomerBase.tsx:40:11",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold tracking-tight",
					children: "Base de Clientes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/sales/CustomerBase.tsx:41:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mt-1",
					children: "Gestão consolidada de leads e clientes."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				"data-uid": "src/pages/sales/CustomerBase.tsx:43:9",
				"data-prohibitions": "[]",
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					"data-uid": "src/pages/sales/CustomerBase.tsx:44:11",
					"data-prohibitions": "[editContent]",
					className: "w-4 h-4 mr-2"
				}), " Exportar"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/sales/CustomerBase.tsx:48:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/sales/CustomerBase.tsx:49:9",
				"data-prohibitions": "[]",
				className: "border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/sales/CustomerBase.tsx:50:11",
					"data-prohibitions": "[]",
					className: "flex flex-col sm:flex-row gap-4 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/sales/CustomerBase.tsx:51:13",
						"data-prohibitions": "[]",
						className: "text-lg",
						children: "Clientes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/sales/CustomerBase.tsx:52:13",
						"data-prohibitions": "[]",
						className: "flex items-center gap-3 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/sales/CustomerBase.tsx:53:15",
							"data-prohibitions": "[]",
							className: "relative w-full sm:w-64",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								"data-uid": "src/pages/sales/CustomerBase.tsx:54:17",
								"data-prohibitions": "[editContent]",
								className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/sales/CustomerBase.tsx:55:17",
								"data-prohibitions": "[editContent]",
								placeholder: "Buscar...",
								value: search,
								onChange: (e) => setSearch(e.target.value),
								className: "pl-9"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/sales/CustomerBase.tsx:62:15",
							"data-prohibitions": "[]",
							value: statusFilter,
							onValueChange: setStatusFilter,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
								"data-uid": "src/pages/sales/CustomerBase.tsx:63:17",
								"data-prohibitions": "[]",
								className: "w-[160px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:64:19",
										"data-prohibitions": "[editContent]",
										className: "w-4 h-4 mr-2"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:64:55",
										"data-prohibitions": "[editContent]",
										placeholder: "Status"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								"data-uid": "src/pages/sales/CustomerBase.tsx:66:17",
								"data-prohibitions": "[]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:67:19",
										"data-prohibitions": "[]",
										value: "all",
										children: "Todos"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:68:19",
										"data-prohibitions": "[]",
										value: "Leads",
										children: "Leads"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:69:19",
										"data-prohibitions": "[]",
										value: "Contacted",
										children: "Contatados"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:70:19",
										"data-prohibitions": "[]",
										value: "Analysis",
										children: "Em Análise"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:71:19",
										"data-prohibitions": "[]",
										value: "Negotiation",
										children: "Negociação"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:72:19",
										"data-prohibitions": "[]",
										value: "Signed/Onboarding",
										children: "Assinado"
									})
								]
							})]
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/sales/CustomerBase.tsx:78:9",
				"data-prohibitions": "[editContent]",
				className: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/sales/CustomerBase.tsx:79:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/sales/CustomerBase.tsx:80:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/sales/CustomerBase.tsx:81:15",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:82:17",
									"data-prohibitions": "[]",
									children: "Nome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:83:17",
									"data-prohibitions": "[]",
									children: "CPF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:84:17",
									"data-prohibitions": "[]",
									children: "Telefone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:85:17",
									"data-prohibitions": "[]",
									children: "Estágio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:86:17",
									"data-prohibitions": "[]",
									children: "Origem"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:87:17",
									"data-prohibitions": "[]",
									className: "text-right",
									children: "Ação"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/sales/CustomerBase.tsx:90:13",
						"data-prohibitions": "[editContent]",
						children: filteredCustomers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/sales/CustomerBase.tsx:92:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:93:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:94:19",
									"data-prohibitions": "[editContent]",
									className: "text-muted-foreground",
									children: c.cpf || "-"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:95:19",
									"data-prohibitions": "[editContent]",
									children: c.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:96:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:97:21",
										"data-prohibitions": "[editContent]",
										variant: c.stage === "Signed/Onboarding" ? "default" : "secondary",
										children: c.stage
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:101:19",
									"data-prohibitions": "[editContent]",
									className: "text-muted-foreground",
									children: c.source
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/sales/CustomerBase.tsx:102:19",
									"data-prohibitions": "[]",
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/sales/CustomerBase.tsx:103:21",
										"data-prohibitions": "[]",
										variant: "ghost",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											"data-uid": "src/pages/sales/CustomerBase.tsx:104:23",
											"data-prohibitions": "[]",
											to: `/sales/customers/${c.id}`,
											children: "Perfil"
										})
									})
								})
							]
						}, c.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { CustomerBase as default };

//# sourceMappingURL=CustomerBase-C8X8Jv6d.js.map