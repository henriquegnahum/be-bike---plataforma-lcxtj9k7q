import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CUrQABng.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-B-oYUfxR.js";
//#region src/pages/community/PointsProgram.tsx
var import_jsx_runtime = require_jsx_runtime();
function PointsProgram() {
	const users = [{
		id: 1,
		name: "Lucas Mendes",
		level: "Ouro",
		points: 15400
	}, {
		id: 2,
		name: "Rafael Costa",
		level: "Prata",
		points: 8200
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/community/PointsProgram.tsx:17:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/community/PointsProgram.tsx:18:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/community/PointsProgram.tsx:19:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Programa de Pontos"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/community/PointsProgram.tsx:21:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/community/PointsProgram.tsx:22:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/community/PointsProgram.tsx:23:11",
					"data-prohibitions": "[]",
					children: "Ranking de Entregadores"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/community/PointsProgram.tsx:25:9",
				"data-prohibitions": "[editContent]",
				className: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/community/PointsProgram.tsx:26:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/community/PointsProgram.tsx:27:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/community/PointsProgram.tsx:28:15",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/community/PointsProgram.tsx:29:17",
									"data-prohibitions": "[]",
									children: "Nome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/community/PointsProgram.tsx:30:17",
									"data-prohibitions": "[]",
									children: "Nível"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/community/PointsProgram.tsx:31:17",
									"data-prohibitions": "[]",
									children: "Pontos"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/community/PointsProgram.tsx:34:13",
						"data-prohibitions": "[editContent]",
						children: users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/community/PointsProgram.tsx:36:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/community/PointsProgram.tsx:37:19",
									"data-prohibitions": "[editContent]",
									children: u.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/community/PointsProgram.tsx:38:19",
									"data-prohibitions": "[editContent]",
									children: u.level
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/community/PointsProgram.tsx:39:19",
									"data-prohibitions": "[editContent]",
									children: u.points
								})
							]
						}, u.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { PointsProgram as default };

//# sourceMappingURL=PointsProgram-B3CrHLU5.js.map