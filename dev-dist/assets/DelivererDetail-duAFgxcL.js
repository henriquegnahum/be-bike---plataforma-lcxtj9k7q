import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import "./main-WDCfB6bP.js";
import { I as useParams, T as User, o as useTranslation, t as Badge } from "./index-BLu9849_.js";
import { r as MOCK_DELIVERERS } from "./mock-data-DXLf5JeC.js";
//#region src/pages/DelivererDetail.tsx
var import_jsx_runtime = require_jsx_runtime();
function DelivererDetail() {
	const { id } = useParams();
	const deliverer = MOCK_DELIVERERS.find((d) => d.id === id) || MOCK_DELIVERERS[0];
	const t = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DelivererDetail.tsx:14:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/DelivererDetail.tsx:15:7",
			"data-prohibitions": "[editContent]",
			className: "flex items-center gap-4 bg-card border rounded-lg p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/DelivererDetail.tsx:16:9",
				"data-prohibitions": "[]",
				className: "h-14 w-14 rounded-full bg-muted flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
					"data-uid": "src/pages/DelivererDetail.tsx:17:11",
					"data-prohibitions": "[editContent]",
					className: "h-6 w-6"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DelivererDetail.tsx:19:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					"data-uid": "src/pages/DelivererDetail.tsx:20:11",
					"data-prohibitions": "[editContent]",
					className: "text-2xl font-bold",
					children: [
						deliverer.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							"data-uid": "src/pages/DelivererDetail.tsx:21:30",
							"data-prohibitions": "[editContent]",
							className: "ml-2",
							children: t(deliverer.status)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/DelivererDetail.tsx:23:11",
					"data-prohibitions": "[editContent]",
					className: "text-muted-foreground mt-1",
					children: ["CPF: ", deliverer.cpf]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/DelivererDetail.tsx:27:7",
			"data-prohibitions": "[editContent]",
			className: "grid md:grid-cols-2 gap-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/DelivererDetail.tsx:28:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/DelivererDetail.tsx:29:11",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/DelivererDetail.tsx:30:13",
						"data-prohibitions": "[]",
						className: "text-lg",
						children: "Informações"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/DelivererDetail.tsx:32:11",
					"data-prohibitions": "[editContent]",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DelivererDetail.tsx:33:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/DelivererDetail.tsx:34:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "Telefone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/DelivererDetail.tsx:35:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium",
							children: deliverer.phone
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DelivererDetail.tsx:37:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/DelivererDetail.tsx:38:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "Bike Ativa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/DelivererDetail.tsx:39:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium",
							children: deliverer.activeBike || "-"
						})]
					})]
				})]
			})
		})]
	});
}
//#endregion
export { DelivererDetail as default };

//# sourceMappingURL=DelivererDetail-duAFgxcL.js.map