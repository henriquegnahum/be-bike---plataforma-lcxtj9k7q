import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { t as Button } from "./button-HvQh1git.js";
import { a as CardTitle, i as CardHeader, n as CardContent, o as cn, t as Card } from "./card-CUrQABng.js";
import { t as cva } from "./dist-CE6Zmojn.js";
import { t as useAppStore } from "./main-WDCfB6bP.js";
import { S as Input, x as Primitive } from "./index-BLu9849_.js";
import { t as bebike_logo_5fe56_default } from "./bebike_logo-5fe56-DS0kSrrh.js";
//#region ../../cache/modules/gestao-de-frota-centralizada-2a06a/node_modules/.pnpm/@radix-ui+react-label@2.1.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_55fa612a976b7bdfbf4dcdd93d861aab/node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var NAME = "Label";
var Label$1 = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
		...props,
		ref: forwardedRef,
		onMouseDown: (event) => {
			if (event.target.closest("button, input, select, textarea")) return;
			props.onMouseDown?.(event);
			if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		}
	});
});
Label$1.displayName = NAME;
var Root = Label$1;
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	"data-uid": "src/components/ui/label.tsx:16:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
//#endregion
//#region src/hooks/use-toast.ts
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
	if (toastTimeouts.has(toastId)) return;
	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		dispatch({
			type: "REMOVE_TOAST",
			toastId
		});
	}, TOAST_REMOVE_DELAY);
	toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TOAST": return {
			...state,
			toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
		};
		case "UPDATE_TOAST": return {
			...state,
			toasts: state.toasts.map((t) => t.id === action.toast.id ? {
				...t,
				...action.toast
			} : t)
		};
		case "DISMISS_TOAST": {
			const { toastId } = action;
			if (toastId) addToRemoveQueue(toastId);
			else state.toasts.forEach((toast) => {
				addToRemoveQueue(toast.id);
			});
			return {
				...state,
				toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? {
					...t,
					open: false
				} : t)
			};
		}
		case "REMOVE_TOAST":
			if (action.toastId === void 0) return {
				...state,
				toasts: []
			};
			return {
				...state,
				toasts: state.toasts.filter((t) => t.id !== action.toastId)
			};
	}
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
	memoryState = reducer(memoryState, action);
	listeners.forEach((listener) => {
		listener(memoryState);
	});
}
function toast({ ...props }) {
	const id = genId();
	const update = (props) => dispatch({
		type: "UPDATE_TOAST",
		toast: {
			...props,
			id
		}
	});
	const dismiss = () => dispatch({
		type: "DISMISS_TOAST",
		toastId: id
	});
	dispatch({
		type: "ADD_TOAST",
		toast: {
			...props,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) dismiss();
			}
		}
	});
	return {
		id,
		dismiss,
		update
	};
}
function useToast() {
	const [state, setState] = import_react.useState(memoryState);
	import_react.useEffect(() => {
		listeners.push(setState);
		return () => {
			const index = listeners.indexOf(setState);
			if (index > -1) listeners.splice(index, 1);
		};
	}, [state]);
	return {
		...state,
		toast,
		dismiss: (toastId) => dispatch({
			type: "DISMISS_TOAST",
			toastId
		})
	};
}
//#endregion
//#region src/pages/Login.tsx
function Login() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const { setIsAuthenticated } = useAppStore();
	const { toast } = useToast();
	const handleLogin = (e) => {
		e.preventDefault();
		if (email === "thiago@bebike.com.br" && password === "123456") setIsAuthenticated(true);
		else toast({
			title: "Erro",
			description: "Credenciais inválidas. Tente thiago@bebike.com.br / 123456",
			variant: "destructive"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Login.tsx:30:5",
		"data-prohibitions": "[]",
		className: "min-h-screen flex flex-col items-center justify-center bg-muted/20 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Login.tsx:31:7",
			"data-prohibitions": "[]",
			className: "mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				"data-uid": "src/pages/Login.tsx:32:9",
				"data-prohibitions": "[editContent]",
				src: bebike_logo_5fe56_default,
				alt: "Be Bike",
				className: "h-10 dark:invert"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/Login.tsx:34:7",
			"data-prohibitions": "[]",
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/Login.tsx:35:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/Login.tsx:36:11",
					"data-prohibitions": "[]",
					className: "text-2xl text-center",
					children: "Login"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/Login.tsx:38:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/Login.tsx:39:11",
					"data-prohibitions": "[]",
					onSubmit: handleLogin,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Login.tsx:40:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/Login.tsx:41:15",
								"data-prohibitions": "[]",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/Login.tsx:42:15",
								"data-prohibitions": "[editContent]",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "thiago@bebike.com.br",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Login.tsx:50:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/Login.tsx:51:15",
								"data-prohibitions": "[]",
								children: "Senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/Login.tsx:52:15",
								"data-prohibitions": "[editContent]",
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								placeholder: "••••••",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/Login.tsx:60:13",
							"data-prohibitions": "[]",
							type: "submit",
							className: "w-full",
							children: "Entrar"
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { Login as default };

//# sourceMappingURL=Login-BaKPTI09.js.map