import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-BMtR1LkV.js";
import "./react-dom-HlWLjPt3.js";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CUrQABng.js";
import { t as createLucideIcon } from "./createLucideIcon-u8GDakcF.js";
import { C as Cell, N as DollarSign, a as ChartTooltipContent, d as CartesianGrid, i as ChartTooltip, l as YAxis, m as Pie, n as ChartLegend, o as PieChart, p as Bar, r as ChartLegendContent, s as BarChart, t as ChartContainer, u as XAxis } from "./chart-B-78Radt.js";
import "./main-WDCfB6bP.js";
import { I as Link, O as TrendingDown, P as Bike, T as Users, o as useTranslation, t as Badge, w as Wrench } from "./index-B_b7nb4I.js";
import { r as MOCK_DELIVERERS, t as MOCK_BIKES } from "./mock-data-2D9abaOe.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-B-oYUfxR.js";
import { t as Progress } from "./progress-BzlJxxLy.js";
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
//#endregion
//#region src/components/dashboard/DashboardKPIs.tsx
var import_jsx_runtime = require_jsx_runtime();
function DashboardKPIs() {
	const t = useTranslation();
	const activeBikes = MOCK_BIKES.filter((b) => b.status === "Ativa").length;
	const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === "Active").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/dashboard/DashboardKPIs.tsx:12:5",
		"data-prohibitions": "[editContent]",
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/components/dashboard/DashboardKPIs.tsx:13:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:14:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:15:11",
						"data-prohibitions": "[editContent]",
						className: "text-sm font-medium",
						children: t("active_fleet")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:16:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:18:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:19:11",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold",
						children: activeBikes
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:20:11",
						"data-prohibitions": "[editContent]",
						className: "text-xs text-muted-foreground",
						children: [
							"de ",
							MOCK_BIKES.length,
							" totais"
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/components/dashboard/DashboardKPIs.tsx:24:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:25:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:26:11",
						"data-prohibitions": "[editContent]",
						className: "text-sm font-medium",
						children: t("active_deliverers")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:27:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:29:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:30:11",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold",
						children: activeDeliverers
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:31:11",
						"data-prohibitions": "[editContent]",
						className: "text-xs text-muted-foreground",
						children: [
							"de ",
							MOCK_DELIVERERS.length,
							" totais"
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/components/dashboard/DashboardKPIs.tsx:35:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:36:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:37:11",
						"data-prohibitions": "[editContent]",
						className: "text-sm font-medium",
						children: t("monthly_conversion")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:38:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:40:9",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:41:11",
						"data-prohibitions": "[]",
						className: "text-2xl font-bold",
						children: "+12.5%"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/components/dashboard/DashboardKPIs.tsx:45:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:46:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:47:11",
						"data-prohibitions": "[editContent]",
						className: "text-sm font-medium",
						children: t("mrr")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:48:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/components/dashboard/DashboardKPIs.tsx:50:9",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/dashboard/DashboardKPIs.tsx:51:11",
						"data-prohibitions": "[]",
						className: "text-2xl font-bold",
						children: "R$ 142k"
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/dashboard/FleetDistributionChart.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function FleetDistributionChart() {
	const t = useTranslation();
	const data = (0, import_react.useMemo)(() => [
		{
			segment: "fleet_segment_99food",
			value: 450,
			fill: "var(--color-fleet_segment_99food)"
		},
		{
			segment: "fleet_segment_other",
			value: 120,
			fill: "var(--color-fleet_segment_other)"
		},
		{
			segment: "fleet_segment_b2b",
			value: 80,
			fill: "var(--color-fleet_segment_b2b)"
		},
		{
			segment: "fleet_segment_intermediation",
			value: 50,
			fill: "var(--color-fleet_segment_intermediation)"
		},
		{
			segment: "fleet_segment_own",
			value: 200,
			fill: "var(--color-fleet_segment_own)"
		}
	], []);
	const config = (0, import_react.useMemo)(() => ({
		fleet_segment_99food: {
			label: t("fleet_segment_99food"),
			theme: {
				light: "#065f46",
				dark: "#34d399"
			}
		},
		fleet_segment_other: {
			label: t("fleet_segment_other"),
			theme: {
				light: "#4338ca",
				dark: "#818cf8"
			}
		},
		fleet_segment_b2b: {
			label: t("fleet_segment_b2b"),
			theme: {
				light: "#0369a1",
				dark: "#38bdf8"
			}
		},
		fleet_segment_intermediation: {
			label: t("fleet_segment_intermediation"),
			theme: {
				light: "#b45309",
				dark: "#fbbf24"
			}
		},
		fleet_segment_own: {
			label: t("fleet_segment_own"),
			theme: {
				light: "#be185d",
				dark: "#f472b6"
			}
		}
	}), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:58:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-full border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:59:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:60:9",
				"data-prohibitions": "[editContent]",
				children: t("fleet_distribution")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:61:9",
				"data-prohibitions": "[]",
				children: "Visão geral da categorização estratégica de ativos"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:63:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 pb-6 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:64:9",
				"data-prohibitions": "[editContent]",
				config,
				className: "mx-auto aspect-square max-h-[320px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
					"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:68:11",
					"data-prohibitions": "[editContent]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {
							"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:69:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
								"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:70:15",
								"data-prohibitions": "[]",
								id: "shadow",
								x: "-20%",
								y: "-20%",
								width: "140%",
								height: "140%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
									"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:71:17",
									"data-prohibitions": "[editContent]",
									dx: "0",
									dy: "4",
									stdDeviation: "6",
									floodOpacity: "0.15"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:74:13",
							"data-prohibitions": "[editContent]",
							data,
							dataKey: "value",
							nameKey: "segment",
							innerRadius: 80,
							outerRadius: 105,
							paddingAngle: 6,
							strokeWidth: 0,
							animationDuration: 1500,
							animationBegin: 200,
							cornerRadius: 10,
							style: { filter: "url(#shadow)" },
							children: data.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
								"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:88:17",
								"data-prohibitions": "[editContent]",
								fill: entry.fill,
								className: "transition-all hover:opacity-80"
							}, `cell-${index}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
							"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:95:13",
							"data-prohibitions": "[editContent]",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
								"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:96:24",
								"data-prohibitions": "[editContent]",
								hideLabel: true,
								className: "glass-card bg-background/90"
							}),
							cursor: { fill: "transparent" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegend, {
							"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:99:13",
							"data-prohibitions": "[editContent]",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegendContent, {
								"data-uid": "src/components/dashboard/FleetDistributionChart.tsx:100:24",
								"data-prohibitions": "[editContent]"
							}),
							className: "flex-wrap gap-x-4 gap-y-2 text-[11px] mt-4 font-medium"
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/FinancialPerformanceChart.tsx
function FinancialPerformanceChart() {
	const t = useTranslation();
	const data = (0, import_react.useMemo)(() => [
		{
			month: "Jan",
			revenue: 110,
			expenses: 40
		},
		{
			month: "Feb",
			revenue: 115,
			expenses: 42
		},
		{
			month: "Mar",
			revenue: 122,
			expenses: 39
		},
		{
			month: "Apr",
			revenue: 130,
			expenses: 45
		},
		{
			month: "May",
			revenue: 142,
			expenses: 41
		},
		{
			month: "Jun",
			revenue: 155,
			expenses: 48
		}
	], []);
	const config = (0, import_react.useMemo)(() => ({
		revenue: {
			label: t("revenue"),
			theme: {
				light: "#065f46",
				dark: "#34d399"
			}
		},
		expenses: {
			label: t("expenses"),
			theme: {
				light: "#b91c1c",
				dark: "#f87171"
			}
		}
	}), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:37:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-full border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:38:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:39:9",
				"data-prohibitions": "[editContent]",
				children: [t("financial_performance"), " (k)"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:40:9",
				"data-prohibitions": "[]",
				children: "Acompanhamento de receitas vs despesas operacionais"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:42:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 pb-4 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:43:9",
				"data-prohibitions": "[editContent]",
				config,
				className: "w-full h-full min-h-[280px] max-h-[320px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:47:11",
					"data-prohibitions": "[editContent]",
					data,
					margin: {
						top: 10,
						right: 10,
						left: -20,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:48:13",
							"data-prohibitions": "[editContent]",
							strokeDasharray: "4 4",
							vertical: false,
							stroke: "hsl(var(--border))",
							opacity: .4
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:54:13",
							"data-prohibitions": "[editContent]",
							dataKey: "month",
							tickLine: false,
							axisLine: false,
							tickMargin: 12,
							fontSize: 12,
							className: "text-muted-foreground font-medium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:62:13",
							"data-prohibitions": "[editContent]",
							tickLine: false,
							axisLine: false,
							tickMargin: 12,
							fontSize: 12,
							className: "text-muted-foreground font-medium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:69:13",
							"data-prohibitions": "[editContent]",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
								"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:70:24",
								"data-prohibitions": "[editContent]",
								className: "glass-card bg-background/90"
							}),
							cursor: { fill: "hsl(var(--muted)/0.3)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegend, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:73:13",
							"data-prohibitions": "[editContent]",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegendContent, {
								"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:73:35",
								"data-prohibitions": "[editContent]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:74:13",
							"data-prohibitions": "[editContent]",
							dataKey: "revenue",
							fill: "var(--color-revenue)",
							radius: [
								4,
								4,
								0,
								0
							],
							animationDuration: 2e3,
							barSize: 24,
							children: data.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
								"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:82:17",
								"data-prohibitions": "[editContent]",
								className: "hover:opacity-80 transition-opacity"
							}, `cell-${index}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:85:13",
							"data-prohibitions": "[editContent]",
							dataKey: "expenses",
							fill: "var(--color-expenses)",
							radius: [
								4,
								4,
								0,
								0
							],
							animationDuration: 2e3,
							barSize: 24,
							children: data.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
								"data-uid": "src/components/dashboard/FinancialPerformanceChart.tsx:93:17",
								"data-prohibitions": "[editContent]",
								className: "hover:opacity-80 transition-opacity"
							}, `cell-${index}`))
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/ContractsStatusChart.tsx
function ContractsStatusChart() {
	const t = useTranslation();
	const data = (0, import_react.useMemo)(() => [
		{
			status: "active_contracts",
			count: 850,
			fill: "var(--color-active_contracts)"
		},
		{
			status: "expiring_contracts",
			count: 120,
			fill: "var(--color-expiring_contracts)"
		},
		{
			status: "pending_contracts",
			count: 45,
			fill: "var(--color-pending_contracts)"
		}
	], []);
	const config = (0, import_react.useMemo)(() => ({
		active_contracts: {
			label: t("active_contracts"),
			color: "hsl(var(--primary))"
		},
		expiring_contracts: {
			label: t("expiring_contracts"),
			color: "#f59e0b"
		},
		pending_contracts: {
			label: t("pending_contracts"),
			color: "#64748b"
		}
	}), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:29:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-full border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:30:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:31:9",
				"data-prohibitions": "[editContent]",
				children: t("contracts_status")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:32:9",
				"data-prohibitions": "[]",
				children: "Volume de contratos por ciclo de vida atual"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:34:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 pb-4 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:35:9",
				"data-prohibitions": "[editContent]",
				config,
				className: "w-full h-[250px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:39:11",
					"data-prohibitions": "[editContent]",
					data,
					layout: "vertical",
					margin: {
						top: 0,
						right: 20,
						left: -20,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:44:13",
							"data-prohibitions": "[editContent]",
							strokeDasharray: "3 3",
							horizontal: false,
							stroke: "hsl(var(--border))",
							opacity: .4
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:50:13",
							"data-prohibitions": "[editContent]",
							type: "number",
							hide: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:51:13",
							"data-prohibitions": "[editContent]",
							dataKey: "status",
							type: "category",
							tickLine: false,
							axisLine: false,
							tickFormatter: (value) => t(value),
							width: 90,
							fontSize: 12,
							className: "font-medium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
							"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:61:13",
							"data-prohibitions": "[editContent]",
							cursor: { fill: "hsl(var(--muted)/0.3)" },
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
								"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:63:24",
								"data-prohibitions": "[editContent]",
								hideLabel: true,
								className: "glass-card bg-background/90"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:65:13",
							"data-prohibitions": "[editContent]",
							dataKey: "count",
							radius: [
								0,
								8,
								8,
								0
							],
							animationDuration: 1500,
							barSize: 36,
							children: data.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
								"data-uid": "src/components/dashboard/ContractsStatusChart.tsx:67:17",
								"data-prohibitions": "[editContent]",
								fill: entry.fill,
								className: "hover:opacity-80 transition-opacity"
							}, `cell-${index}`))
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/ChurnAnalysisChart.tsx
function ChurnAnalysisChart() {
	const t = useTranslation();
	const data = (0, import_react.useMemo)(() => [
		{
			reason: "Troca de emprego",
			count: 45
		},
		{
			reason: "Problemas fin.",
			count: 32
		},
		{
			reason: "Mudança",
			count: 18
		},
		{
			reason: "Insatisfação",
			count: 15
		},
		{
			reason: "Outros",
			count: 10
		}
	], []);
	const config = (0, import_react.useMemo)(() => ({ count: {
		label: t("churn_reasons"),
		color: "#ef4444"
	} }), [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:29:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-full border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:30:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:31:9",
				"data-prohibitions": "[editContent]",
				children: t("churn_reasons")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:32:9",
				"data-prohibitions": "[]",
				children: "Principais motivos de cancelamento identificados"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:34:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 pb-4 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:35:9",
				"data-prohibitions": "[editContent]",
				config,
				className: "w-full h-[250px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:39:11",
					"data-prohibitions": "[editContent]",
					data,
					margin: {
						top: 10,
						right: 10,
						left: -20,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:40:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:41:15",
								"data-prohibitions": "[]",
								id: "colorCount",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:42:17",
									"data-prohibitions": "[editContent]",
									offset: "5%",
									stopColor: "var(--color-count)",
									stopOpacity: .8
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:43:17",
									"data-prohibitions": "[editContent]",
									offset: "95%",
									stopColor: "var(--color-count)",
									stopOpacity: .4
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:46:13",
							"data-prohibitions": "[editContent]",
							strokeDasharray: "3 3",
							vertical: false,
							stroke: "hsl(var(--border))",
							opacity: .4
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:52:13",
							"data-prohibitions": "[editContent]",
							dataKey: "reason",
							tickLine: false,
							axisLine: false,
							tickMargin: 12,
							fontSize: 11,
							className: "font-medium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:60:13",
							"data-prohibitions": "[editContent]",
							tickLine: false,
							axisLine: false,
							tickMargin: 12,
							fontSize: 12
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:61:13",
							"data-prohibitions": "[editContent]",
							cursor: { fill: "hsl(var(--muted)/0.3)" },
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
								"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:63:24",
								"data-prohibitions": "[editContent]",
								className: "glass-card bg-background/90"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:65:13",
							"data-prohibitions": "[editContent]",
							dataKey: "count",
							fill: "url(#colorCount)",
							radius: [
								8,
								8,
								0,
								0
							],
							animationDuration: 1500,
							barSize: 40,
							children: data.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
								"data-uid": "src/components/dashboard/ChurnAnalysisChart.tsx:73:17",
								"data-prohibitions": "[editContent]",
								className: "hover:opacity-80 transition-opacity"
							}, `cell-${index}`))
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/LeadGoalControl.tsx
function LeadGoalControl() {
	const t = useTranslation();
	const goals = [
		{
			source: "Instagram (Meta)",
			actual: 320,
			target: 400
		},
		{
			source: "Indicação",
			actual: 150,
			target: 100
		},
		{
			source: "Site Orgânico",
			actual: 85,
			target: 150
		},
		{
			source: "Eventos",
			actual: 45,
			target: 50
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/LeadGoalControl.tsx:16:5",
		"data-prohibitions": "[editContent]",
		className: "glass-card border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/LeadGoalControl.tsx:17:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/LeadGoalControl.tsx:18:9",
				"data-prohibitions": "[editContent]",
				children: t("lead_goal_control")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/LeadGoalControl.tsx:19:9",
				"data-prohibitions": "[]",
				children: "Acompanhamento de conversão por origem da captação"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/LeadGoalControl.tsx:21:7",
			"data-prohibitions": "[editContent]",
			className: "space-y-6 pb-6",
			children: goals.map((g) => {
				const percent = Math.min(100, Math.round(g.actual / g.target * 100));
				const isOverGoal = g.actual >= g.target;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/dashboard/LeadGoalControl.tsx:26:13",
					"data-prohibitions": "[editContent]",
					className: "space-y-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/dashboard/LeadGoalControl.tsx:27:15",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between text-sm items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/components/dashboard/LeadGoalControl.tsx:28:17",
							"data-prohibitions": "[editContent]",
							className: "font-semibold text-foreground",
							children: g.source
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/components/dashboard/LeadGoalControl.tsx:29:17",
							"data-prohibitions": "[editContent]",
							className: "text-muted-foreground font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/components/dashboard/LeadGoalControl.tsx:30:19",
									"data-prohibitions": "[editContent]",
									className: isOverGoal ? "text-primary font-bold" : "",
									children: g.actual
								}),
								" /",
								" ",
								g.target,
								" (",
								percent,
								"%)"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						"data-uid": "src/components/dashboard/LeadGoalControl.tsx:34:15",
						"data-prohibitions": "[editContent]",
						value: percent,
						className: "h-2.5 bg-muted group-hover:bg-muted/80 transition-colors shadow-inner",
						indicatorClassName: isOverGoal ? "bg-primary shadow-[0_0_8px_var(--primary)]" : "bg-primary/70"
					})]
				}, g.source);
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/PartnerPerformance.tsx
function PartnerPerformance() {
	const t = useTranslation();
	const metrics = [
		{
			label: "Taxa de Aceite (99Food)",
			value: 92,
			target: 90
		},
		{
			label: "Conclusão de Corridas",
			value: 88,
			target: 85
		},
		{
			label: "Disponibilidade (Uptime)",
			value: 96,
			target: 95
		},
		{
			label: "Satisfação (NPS)",
			value: 92,
			target: 90
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/PartnerPerformance.tsx:16:5",
		"data-prohibitions": "[editContent]",
		className: "glass-card border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/PartnerPerformance.tsx:17:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/PartnerPerformance.tsx:18:9",
				"data-prohibitions": "[editContent]",
				children: t("partner_performance")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/PartnerPerformance.tsx:19:9",
				"data-prohibitions": "[]",
				children: "Métricas chaves de operação integradas via API"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/PartnerPerformance.tsx:21:7",
			"data-prohibitions": "[editContent]",
			className: "space-y-6 pb-6",
			children: metrics.map((m) => {
				const isOverGoal = m.value >= m.target;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/components/dashboard/PartnerPerformance.tsx:25:13",
					"data-prohibitions": "[editContent]",
					className: "space-y-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/dashboard/PartnerPerformance.tsx:26:15",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between text-sm items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/components/dashboard/PartnerPerformance.tsx:27:17",
							"data-prohibitions": "[editContent]",
							className: "font-semibold text-foreground",
							children: m.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/components/dashboard/PartnerPerformance.tsx:28:17",
							"data-prohibitions": "[editContent]",
							className: "text-muted-foreground font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"data-uid": "src/components/dashboard/PartnerPerformance.tsx:29:19",
									"data-prohibitions": "[editContent]",
									className: isOverGoal ? "text-blue-500 font-bold" : "",
									children: [m.value, "%"]
								}),
								" /",
								" ",
								m.target,
								"%"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						"data-uid": "src/components/dashboard/PartnerPerformance.tsx:33:15",
						"data-prohibitions": "[editContent]",
						value: m.value,
						className: "h-2.5 bg-muted group-hover:bg-muted/80 transition-colors shadow-inner",
						indicatorClassName: isOverGoal ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-blue-400/70"
					})]
				}, m.label);
			})
		})]
	});
}
//#endregion
//#region src/components/dashboard/FinancialContractsTable.tsx
function FinancialContractsTable() {
	const t = useTranslation();
	const contracts = [
		{
			id: "CTR-001",
			type: "fleet_segment_99food",
			value: "R$ 45.000",
			status: "Adimplente"
		},
		{
			id: "CTR-002",
			type: "fleet_segment_b2b",
			value: "R$ 12.500",
			status: "Adimplente"
		},
		{
			id: "CTR-003",
			type: "fleet_segment_other",
			value: "R$ 8.200",
			status: "Inadimplente"
		},
		{
			id: "CTR-004",
			type: "fleet_segment_own",
			value: "R$ 22.000",
			status: "Adimplente"
		},
		{
			id: "CTR-005",
			type: "fleet_segment_intermediation",
			value: "R$ 5.400",
			status: "Em avaliação"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:30:5",
		"data-prohibitions": "[editContent]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:31:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:32:9",
				"data-prohibitions": "[editContent]",
				children: t("financial_contracts_overview")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:33:9",
				"data-prohibitions": "[]",
				children: "Detalhamento de contratos gerais e status de adimplência"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:35:7",
			"data-prohibitions": "[editContent]",
			className: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
				"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:36:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:37:11",
					"data-prohibitions": "[editContent]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:38:13",
						"data-prohibitions": "[editContent]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:39:15",
								"data-prohibitions": "[editContent]",
								children: t("contract_id")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:40:15",
								"data-prohibitions": "[editContent]",
								children: t("contract_type")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:41:15",
								"data-prohibitions": "[editContent]",
								children: t("contract_value")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:42:15",
								"data-prohibitions": "[editContent]",
								children: t("status")
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:45:11",
					"data-prohibitions": "[editContent]",
					children: contracts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:47:15",
						"data-prohibitions": "[editContent]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:48:17",
								"data-prohibitions": "[editContent]",
								className: "font-medium",
								children: c.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:49:17",
								"data-prohibitions": "[editContent]",
								children: t(c.type)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:50:17",
								"data-prohibitions": "[editContent]",
								children: c.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:51:17",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/components/dashboard/FinancialContractsTable.tsx:52:19",
									"data-prohibitions": "[editContent]",
									variant: c.status === "Adimplente" ? "default" : c.status === "Inadimplente" ? "destructive" : "secondary",
									children: t(c.status)
								})
							})
						]
					}, c.id))
				})]
			})
		})]
	});
}
//#endregion
//#region src/pages/Index.tsx
function Index() {
	const t = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Index.tsx:18:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/Index.tsx:19:7",
				"data-prohibitions": "[editContent]",
				className: "flex justify-between items-start gap-4 flex-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:20:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/Index.tsx:21:11",
						"data-prohibitions": "[editContent]",
						className: "text-3xl font-bold tracking-tight",
						children: t("dashboard")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Index.tsx:22:11",
						"data-prohibitions": "[editContent]",
						className: "text-muted-foreground mt-1",
						children: t("index_desc")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:26:7",
				"data-prohibitions": "[editContent]",
				className: "grid gap-6 md:grid-cols-2 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/Index.tsx:27:9",
					"data-prohibitions": "[editContent]",
					to: "/maintenance",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/Index.tsx:28:11",
						"data-prohibitions": "[editContent]",
						className: "h-full hover:bg-muted/50 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/Index.tsx:29:13",
							"data-prohibitions": "[editContent]",
							className: "p-6 flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/Index.tsx:30:15",
								"data-prohibitions": "[]",
								className: "p-2 bg-orange-100 rounded-lg text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
									"data-uid": "src/pages/Index.tsx:31:17",
									"data-prohibitions": "[editContent]",
									className: "w-5 h-5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Index.tsx:33:15",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/Index.tsx:34:17",
									"data-prohibitions": "[editContent]",
									className: "font-semibold",
									children: t("maintenance_alert")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/Index.tsx:35:17",
									"data-prohibitions": "[]",
									className: "text-sm text-muted-foreground mt-1",
									children: "8 bikes atingirão o limite de 2500km esta semana."
								})]
							})]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/Index.tsx:42:9",
					"data-prohibitions": "[editContent]",
					to: "/crm/customers",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/Index.tsx:43:11",
						"data-prohibitions": "[editContent]",
						className: "h-full hover:bg-muted/50 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/Index.tsx:44:13",
							"data-prohibitions": "[editContent]",
							className: "p-6 flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/Index.tsx:45:15",
								"data-prohibitions": "[]",
								className: "p-2 bg-blue-100 rounded-lg text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, {
									"data-uid": "src/pages/Index.tsx:46:17",
									"data-prohibitions": "[editContent]",
									className: "w-5 h-5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/Index.tsx:48:15",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/Index.tsx:49:17",
									"data-prohibitions": "[editContent]",
									className: "font-semibold",
									children: t("predictive_churn")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/Index.tsx:50:17",
									"data-prohibitions": "[]",
									className: "text-sm text-muted-foreground mt-1",
									children: "15 entregadores apresentam sinais de inatividade."
								})]
							})]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardKPIs, {
				"data-uid": "src/pages/Index.tsx:59:7",
				"data-prohibitions": "[editContent]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:61:7",
				"data-prohibitions": "[]",
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetDistributionChart, {
					"data-uid": "src/pages/Index.tsx:62:9",
					"data-prohibitions": "[editContent]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialPerformanceChart, {
					"data-uid": "src/pages/Index.tsx:63:9",
					"data-prohibitions": "[editContent]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:66:7",
				"data-prohibitions": "[]",
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContractsStatusChart, {
					"data-uid": "src/pages/Index.tsx:67:9",
					"data-prohibitions": "[editContent]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChurnAnalysisChart, {
					"data-uid": "src/pages/Index.tsx:68:9",
					"data-prohibitions": "[editContent]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:71:7",
				"data-prohibitions": "[]",
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadGoalControl, {
					"data-uid": "src/pages/Index.tsx:72:9",
					"data-prohibitions": "[editContent]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerPerformance, {
					"data-uid": "src/pages/Index.tsx:73:9",
					"data-prohibitions": "[editContent]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialContractsTable, {
				"data-uid": "src/pages/Index.tsx:76:7",
				"data-prohibitions": "[editContent]"
			})
		]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=Index-CGIlGLm9.js.map