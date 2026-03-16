import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { n as CardContent, t as Card } from "./card-CUrQABng.js";
import { I as useParams } from "./index-BLu9849_.js";
//#region src/pages/Chat.tsx
var import_jsx_runtime = require_jsx_runtime();
function Chat() {
	const { channel } = useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Chat.tsx:7:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Chat.tsx:8:7",
			"data-prohibitions": "[editContent]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				"data-uid": "src/pages/Chat.tsx:9:9",
				"data-prohibitions": "[editContent]",
				className: "text-3xl font-bold tracking-tight",
				children: ["#", channel || "geral"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-uid": "src/pages/Chat.tsx:11:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/Chat.tsx:12:9",
				"data-prohibitions": "[]",
				className: "pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Chat.tsx:13:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground text-sm",
					children: "Histórico de chat indisponível."
				})
			})
		})]
	});
}
//#endregion
export { Chat as default };

//# sourceMappingURL=Chat-DTarldyR.js.map