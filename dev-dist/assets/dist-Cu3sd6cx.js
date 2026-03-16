import { a as __toESM, n as require_react } from "./jsx-runtime-BMtR1LkV.js";
//#region ../../cache/modules/gestao-de-frota-centralizada-2a06a/node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
//#endregion
export { usePrevious as t };

//# sourceMappingURL=dist-Cu3sd6cx.js.map