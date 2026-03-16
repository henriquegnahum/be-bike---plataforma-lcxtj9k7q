import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DollarSign, ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react'

export default function Financial() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financial Governance Hub</h1>
        <p className="text-muted-foreground mt-1">
          AsaaS API integration, AP/AR, and Subsidy management.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
              Accounts Receivable <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 142.500,00</div>
            <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
              <RefreshCcw className="w-3 h-3" /> AsaaS Synced
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
              Accounts Payable <ArrowDownRight className="w-4 h-4 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 38.200,00</div>
            <p className="text-xs text-muted-foreground mt-1">Suppliers & Workshops</p>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> 99 Subsidy Pool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 15.000,00</div>
            <p className="text-xs text-muted-foreground mt-1">Automated discount applied</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions (Mock)</CardTitle>
          <CardDescription>Real-time feed from payment gateway.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
            Transaction table module to be populated by AsaaS API.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
