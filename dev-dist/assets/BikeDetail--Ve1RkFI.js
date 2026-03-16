import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import "./main-WDCfB6bP.js";
import { I as useParams, o as useTranslation, t as Badge } from "./index-BLu9849_.js";
import { t as MOCK_BIKES } from "./mock-data-DXLf5JeC.js";
//#region src/pages/BikeDetail.tsx
var import_jsx_runtime = require_jsx_runtime();
function BikeDetail() {
	const { id } = useParams();
	const bike = MOCK_BIKES.find((b) => b.id === id) || MOCK_BIKES[0];
	const t = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/BikeDetail.tsx:14:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/BikeDetail.tsx:15:7",
			"data-prohibitions": "[editContent]",
			className: "flex justify-between items-center bg-card border rounded-lg p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/BikeDetail.tsx:16:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/BikeDetail.tsx:17:11",
					"data-prohibitions": "[editContent]",
					className: "text-2xl font-bold font-mono",
					children: bike.chassi
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/BikeDetail.tsx:18:11",
					"data-prohibitions": "[editContent]",
					className: "text-muted-foreground mt-1",
					children: [
						bike.model,
						" • ",
						bike.project
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				"data-uid": "src/pages/BikeDetail.tsx:22:9",
				"data-prohibitions": "[editContent]",
				variant: "outline",
				className: "text-sm px-3 py-1",
				children: t(bike.status)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/BikeDetail.tsx:27:7",
			"data-prohibitions": "[editContent]",
			className: "grid md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/BikeDetail.tsx:28:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/BikeDetail.tsx:29:11",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/BikeDetail.tsx:30:13",
						"data-prohibitions": "[]",
						className: "text-lg",
						children: "Telemetria"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/BikeDetail.tsx:32:11",
					"data-prohibitions": "[editContent]",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/BikeDetail.tsx:33:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:34:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "KM Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:35:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium text-xl",
							children: [bike.mileage, " km"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/BikeDetail.tsx:37:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:38:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "Última Revisão"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:39:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium text-xl",
							children: [bike.lastRevisionKm, " km"]
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/BikeDetail.tsx:43:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/BikeDetail.tsx:44:11",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/BikeDetail.tsx:45:13",
						"data-prohibitions": "[]",
						className: "text-lg",
						children: "Segurança"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/BikeDetail.tsx:47:11",
					"data-prohibitions": "[editContent]",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/BikeDetail.tsx:48:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:49:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "Rastreador #"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:50:15",
							"data-prohibitions": "[editContent]",
							className: "font-mono",
							children: bike.trackerNum
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/BikeDetail.tsx:52:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:53:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground",
							children: "Bateria #"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/BikeDetail.tsx:54:15",
							"data-prohibitions": "[editContent]",
							className: "font-mono",
							children: bike.batteryNum
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { BikeDetail as default };

//# sourceMappingURL=BikeDetail--Ve1RkFI.js.map