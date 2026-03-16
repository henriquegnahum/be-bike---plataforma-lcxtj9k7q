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
import { Bike as BikeIcon, Plus, Download, Upload } from 'lucide-react'
import { MOCK_BIKES } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'

export default function Bikes() {
  const { toast } = useToast()

  const handleExport = (type: string) => {
    toast({ title: `Exporting Data`, description: `Database is being exported as ${type}.` })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Ativa':
        return <Badge className="bg-primary hover:bg-primary/90">{status}</Badge>
      case 'Disponível':
        return (
          <Badge variant="outline" className="border-primary text-primary">
            {status}
          </Badge>
        )
      case 'Oficina':
        return (
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
            {status}
          </Badge>
        )
      case 'Perdida':
      case 'Apropriação indébita':
        return <Badge variant="destructive">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">Fleet Master</h1>
          <p className="text-muted-foreground">Comprehensive lifecycle and status management.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => handleExport('CSV')} size="sm">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button variant="outline" onClick={() => handleExport('XML')} size="sm">
            <Download className="w-4 h-4 mr-2" /> XML
          </Button>
          <Button variant="secondary" size="sm">
            <Upload className="w-4 h-4 mr-2" /> Bulk Import
          </Button>
          <Button className="bg-primary text-white">
            <Plus className="w-4 h-4 mr-2" /> New Bike
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <BikeIcon className="w-5 h-5 text-primary" /> Active Fleet Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chassi (ID)</TableHead>
                <TableHead>Model / Version</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Telemetry (KM)</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_BIKES.map((bike) => (
                <TableRow key={bike.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono font-medium text-xs">{bike.chassi}</TableCell>
                  <TableCell>
                    {bike.model}{' '}
                    <span className="text-muted-foreground text-xs block">{bike.version}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(bike.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{bike.mileage}</span>
                      {bike.mileage - bike.lastRevisionKm > 2300 && (
                        <span
                          className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"
                          title="Revision Due Soon"
                        ></span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {bike.deliverer || (
                      <span className="text-muted-foreground italic">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/bikes/${bike.id}`} target="_blank" rel="noopener noreferrer">
                        View Details
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
