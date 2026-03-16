import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { t as Button } from "./button-HvQh1git.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import "./main-WDCfB6bP.js";
import { E as TriangleAlert, I as useParams, T as User, o as useTranslation, t as Badge } from "./index-CMkWjCvZ.js";
import { n as MOCK_CRM_LEADS } from "./mock-data-DXLf5JeC.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BukYRFNb.js";
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
//#endregion
//#region src/pages/LeadDetail.tsx
var import_jsx_runtime = require_jsx_runtime();
function LeadDetail() {
	const { id } = useParams();
	const t = useTranslation();
	const lead = MOCK_CRM_LEADS.find((l) => l.id === id) || MOCK_CRM_LEADS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/LeadDetail.tsx:16:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/LeadDetail.tsx:17:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border rounded-lg p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/LeadDetail.tsx:18:9",
				"data-prohibitions": "[editContent]",
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/LeadDetail.tsx:19:11",
					"data-prohibitions": "[]",
					className: "h-14 w-14 rounded-full bg-muted flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						"data-uid": "src/pages/LeadDetail.tsx:20:13",
						"data-prohibitions": "[editContent]",
						className: "h-6 w-6"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/LeadDetail.tsx:22:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-uid": "src/pages/LeadDetail.tsx:23:13",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold flex items-center gap-2",
						children: [
							lead.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								"data-uid": "src/pages/LeadDetail.tsx:24:27",
								"data-prohibitions": "[editContent]",
								variant: "outline",
								children: t(lead.stage)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-uid": "src/pages/LeadDetail.tsx:26:13",
						"data-prohibitions": "[editContent]",
						className: "text-muted-foreground text-sm mt-1",
						children: [
							lead.phone,
							" • ",
							t(lead.type)
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/LeadDetail.tsx:31:9",
				"data-prohibitions": "[editContent]",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/LeadDetail.tsx:32:11",
					"data-prohibitions": "[editContent]",
					variant: "outline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							"data-uid": "src/pages/LeadDetail.tsx:33:13",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}),
						" ",
						t("whatsapp")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/LeadDetail.tsx:35:11",
					"data-prohibitions": "[]",
					variant: "destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						"data-uid": "src/pages/LeadDetail.tsx:36:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), " B.O."]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			"data-uid": "src/pages/LeadDetail.tsx:41:7",
			"data-prohibitions": "[editContent]",
			defaultValue: "master",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					"data-uid": "src/pages/LeadDetail.tsx:42:9",
					"data-prohibitions": "[editContent]",
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						"data-uid": "src/pages/LeadDetail.tsx:43:11",
						"data-prohibitions": "[editContent]",
						value: "master",
						children: t("master_360")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						"data-uid": "src/pages/LeadDetail.tsx:44:11",
						"data-prohibitions": "[editContent]",
						value: "contract",
						children: t("contracts")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					"data-uid": "src/pages/LeadDetail.tsx:47:9",
					"data-prohibitions": "[editContent]",
					value: "master",
					className: "grid md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/LeadDetail.tsx:48:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							"data-uid": "src/pages/LeadDetail.tsx:49:13",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/LeadDetail.tsx:50:15",
								"data-prohibitions": "[editContent]",
								className: "text-lg",
								children: t("reg_data")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/LeadDetail.tsx:52:13",
							"data-prohibitions": "[editContent]",
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/LeadDetail.tsx:53:15",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/LeadDetail.tsx:54:17",
									"data-prohibitions": "[editContent]",
									className: "text-xs text-muted-foreground",
									children: t("cpf_rg")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/LeadDetail.tsx:55:17",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: [
										lead.cpf || "-",
										" / ",
										lead.rg || "-"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/LeadDetail.tsx:59:15",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/LeadDetail.tsx:60:17",
									"data-prohibitions": "[editContent]",
									className: "text-xs text-muted-foreground",
									children: t("email")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/LeadDetail.tsx:61:17",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: lead.email || "-"
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/LeadDetail.tsx:65:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							"data-uid": "src/pages/LeadDetail.tsx:66:13",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/LeadDetail.tsx:67:15",
								"data-prohibitions": "[editContent]",
								className: "text-lg",
								children: t("fin_contract_status")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/LeadDetail.tsx:69:13",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/LeadDetail.tsx:70:15",
								"data-prohibitions": "[editContent]",
								className: "flex gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/LeadDetail.tsx:71:17",
									"data-prohibitions": "[editContent]",
									variant: "secondary",
									children: t(lead.contractStatus)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/LeadDetail.tsx:72:17",
									"data-prohibitions": "[editContent]",
									variant: lead.financialStatus === "Adimplente" ? "outline" : "destructive",
									children: t(lead.financialStatus)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								"data-uid": "src/pages/LeadDetail.tsx:76:15",
								"data-prohibitions": "[editContent]",
								className: "text-sm",
								children: ["Score Preditivo: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									"data-uid": "src/pages/LeadDetail.tsx:77:34",
									"data-prohibitions": "[editContent]",
									children: lead.performanceScore || "N/A"
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					"data-uid": "src/pages/LeadDetail.tsx:82:9",
					"data-prohibitions": "[]",
					value: "contract",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/LeadDetail.tsx:83:11",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							"data-uid": "src/pages/LeadDetail.tsx:84:13",
							"data-prohibitions": "[]",
							className: "pt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/LeadDetail.tsx:85:15",
								"data-prohibitions": "[]",
								className: "text-muted-foreground",
								children: "Integração ZapSign - Contratos aqui."
							})
						})
					})
				})
			]
		})]
	});
}
//#endregion
export { LeadDetail as default };

//# sourceMappingURL=LeadDetail-BH5WO0Qo.js.map