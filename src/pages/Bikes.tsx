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
import { Bike as BikeIcon, Plus, Wrench } from 'lucide-react'
import { MOCK_BIKES } from '@/lib/mock-data'

export default function Bikes() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">Fleet Master</h1>
          <p className="text-muted-foreground">Comprehensive lifecycle management for all bikes.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Register Bike
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <BikeIcon className="w-5 h-5 text-primary" />
            Active Fleet Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chassi (ID)</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mileage</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_BIKES.map((bike) => (
                <TableRow key={bike.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono font-medium text-xs">{bike.chassi}</TableCell>
                  <TableCell>{bike.model}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        bike.status === 'In Use'
                          ? 'default'
                          : bike.status === 'Available'
                            ? 'secondary'
                            : 'destructive'
                      }
                      className={
                        bike.status === 'Available'
                          ? 'bg-primary text-white hover:bg-primary/80'
                          : ''
                      }
                    >
                      {bike.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{bike.mileage} km</TableCell>
                  <TableCell>
                    {bike.deliverer || (
                      <span className="text-muted-foreground italic">Unassigned</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/bikes/${bike.id}`} target="_blank">
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
