import { t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import { n as CardContent, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import { A as MapPin, I as Link, S as Button, T as Users, w as Wrench } from "./index-B_b7nb4I.js";
import { t as bebike_logo_5fe56_default } from "./bebike_logo-5fe56-Eu1m93m5.js";
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region src/pages/Landing.tsx
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Landing.tsx:9:5",
		"data-prohibitions": "[]",
		className: "min-h-screen bg-background text-foreground flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			"data-uid": "src/pages/Landing.tsx:10:7",
			"data-prohibitions": "[]",
			className: "border-b bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Landing.tsx:11:9",
				"data-prohibitions": "[]",
				className: "container mx-auto flex h-16 items-center justify-between px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					"data-uid": "src/pages/Landing.tsx:12:11",
					"data-prohibitions": "[editContent]",
					src: bebike_logo_5fe56_default,
					alt: "Be Bike",
					className: "h-8 dark:invert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Landing.tsx:13:11",
					"data-prohibitions": "[]",
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Landing.tsx:14:13",
						"data-prohibitions": "[]",
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/Landing.tsx:15:15",
							"data-prohibitions": "[]",
							to: "/login",
							children: "Login"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Landing.tsx:17:13",
						"data-prohibitions": "[]",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/Landing.tsx:18:15",
							"data-prohibitions": "[]",
							to: "/login",
							children: "Começar"
						})
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			"data-uid": "src/pages/Landing.tsx:23:7",
			"data-prohibitions": "[]",
			className: "flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-muted/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/Landing.tsx:24:9",
					"data-prohibitions": "[]",
					className: "text-4xl md:text-6xl font-extrabold tracking-tight mb-6",
					children: "Gestão Centralizada de Frota e Entregadores"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Landing.tsx:27:9",
					"data-prohibitions": "[]",
					className: "text-xl text-muted-foreground mb-10 max-w-2xl",
					children: "Acompanhamento em tempo real, manutenção preditiva e suporte em uma única plataforma."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Landing.tsx:30:9",
					"data-prohibitions": "[]",
					className: "flex gap-4 mb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Landing.tsx:31:11",
						"data-prohibitions": "[]",
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/Landing.tsx:32:13",
							"data-prohibitions": "[]",
							to: "/login",
							children: "Acessar Sistema"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Landing.tsx:36:9",
					"data-prohibitions": "[]",
					className: "grid md:grid-cols-4 gap-6 max-w-6xl w-full text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/Landing.tsx:37:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/Landing.tsx:38:13",
								"data-prohibitions": "[]",
								className: "pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										"data-uid": "src/pages/Landing.tsx:39:15",
										"data-prohibitions": "[editContent]",
										className: "w-8 h-8 text-primary mb-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/Landing.tsx:40:15",
										"data-prohibitions": "[]",
										className: "font-bold text-lg mb-2",
										children: "Rastreamento"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/Landing.tsx:41:15",
										"data-prohibitions": "[]",
										className: "text-muted-foreground",
										children: "Localização em tempo real de toda a frota."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/Landing.tsx:44:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/Landing.tsx:45:13",
								"data-prohibitions": "[]",
								className: "pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
										"data-uid": "src/pages/Landing.tsx:46:15",
										"data-prohibitions": "[editContent]",
										className: "w-8 h-8 text-primary mb-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/Landing.tsx:47:15",
										"data-prohibitions": "[]",
										className: "font-bold text-lg mb-2",
										children: "Manutenção"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/Landing.tsx:48:15",
										"data-prohibitions": "[]",
										className: "text-muted-foreground",
										children: "O.S. preditivas e controle de estoque."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/Landing.tsx:51:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/Landing.tsx:52:13",
								"data-prohibitions": "[]",
								className: "pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										"data-uid": "src/pages/Landing.tsx:53:15",
										"data-prohibitions": "[editContent]",
										className: "w-8 h-8 text-primary mb-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/Landing.tsx:54:15",
										"data-prohibitions": "[]",
										className: "font-bold text-lg mb-2",
										children: "Comunidade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/Landing.tsx:55:15",
										"data-prohibitions": "[]",
										className: "text-muted-foreground",
										children: "Gestão de entregadores e programa de pontos."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							"data-uid": "src/pages/Landing.tsx:58:11",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/Landing.tsx:59:13",
								"data-prohibitions": "[]",
								className: "pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										"data-uid": "src/pages/Landing.tsx:60:15",
										"data-prohibitions": "[editContent]",
										className: "w-8 h-8 text-primary mb-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/Landing.tsx:61:15",
										"data-prohibitions": "[]",
										className: "font-bold text-lg mb-2",
										children: "Segurança"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/Landing.tsx:62:15",
										"data-prohibitions": "[]",
										className: "text-muted-foreground",
										children: "Controle de inadimplência e recuperação."
									})
								]
							})
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Landing as default };

//# sourceMappingURL=Landing-D6r0dIMp.js.map