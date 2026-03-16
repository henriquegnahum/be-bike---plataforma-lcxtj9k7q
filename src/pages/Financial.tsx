import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DollarSign, ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Financial() {
  const t = useTranslation()

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('fin_title')}</h1>
        <p className="text-muted-foreground mt-1">{t('fin_desc')}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
              {t('accounts_receivable')} <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 142.500,00</div>
            <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
              <RefreshCcw className="w-3 h-3" /> {t('asaas_synced')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
              {t('accounts_payable')} <ArrowDownRight className="w-4 h-4 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 38.200,00</div>
            <p className="text-xs text-muted-foreground mt-1">{t('suppliers_workshops')}</p>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> {t('subsidy_pool')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 15.000,00</div>
            <p className="text-xs text-muted-foreground mt-1">{t('auto_discount')}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('recent_transactions')}</CardTitle>
          <CardDescription>{t('real_time_feed')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
            {t('transaction_placeholder')}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
