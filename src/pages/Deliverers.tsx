import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Plus, Star } from 'lucide-react'
import { MOCK_DELIVERERS } from '@/lib/mock-data'

export default function Deliverers() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-primary text-white border-primary'
      case 'Onboarding':
        return 'bg-blue-500 text-white border-blue-500'
      case 'In Debt':
        return 'bg-destructive text-white border-destructive'
      default:
        return 'bg-secondary text-white border-secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">Deliverer Master</h1>
          <p className="text-muted-foreground">Centralized repository for deliverer lifecycles.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Deliverer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <Users className="w-5 h-5 text-primary" />
            Deliverers Directory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deliverer Name</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Active Bike</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_DELIVERERS.map((deliverer) => (
                <TableRow key={deliverer.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{deliverer.name}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {deliverer.cpf}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(deliverer.status)}>
                      {deliverer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      {deliverer.rating > 0 ? deliverer.rating : '-'}
                      <span className="text-muted-foreground text-xs ml-1">
                        ({deliverer.trips} trips)
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {deliverer.activeBike ? (
                      <Badge variant="outline" className="font-mono text-[10px]">
                        {deliverer.activeBike}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground italic text-sm">None</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/deliverers/${deliverer.id}`} target="_blank">
                        View Profile
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
