import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ArrowLeft,
  Wrench,
  Settings,
  History,
  Bike as BikeIcon,
  Calendar,
  CheckCircle2,
} from 'lucide-react'
import { MOCK_BIKES, MOCK_BIKE_OS, MOCK_BIKE_PARTS } from '@/lib/mock-data'

export default function BikeDetail() {
  const { id } = useParams()
  const bike = MOCK_BIKES.find((b) => b.id === id) || MOCK_BIKES[0]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/bikes">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-mono text-secondary">
            {bike.chassi}
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <BikeIcon className="w-4 h-4 text-primary" /> {bike.model} • Lifecycle Dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="md:col-span-1 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">State</p>
              <Badge className="text-sm px-3 py-1">{bike.status}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Deliverer</p>
              <p className="font-medium">{bike.deliverer || 'None'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Mileage</p>
              <p className="font-medium">{bike.mileage} km</p>
            </div>
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <Wrench className="w-4 h-4 mr-2" /> New Service Order
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardContent className="p-0">
            <Tabs defaultValue="maintenance" className="w-full">
              <div className="px-6 py-4 border-b border-border bg-muted/20">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="maintenance">
                    <Wrench className="w-4 h-4 mr-2" /> OrdSrv
                  </TabsTrigger>
                  <TabsTrigger value="parts">
                    <Settings className="w-4 h-4 mr-2" /> Parts
                  </TabsTrigger>
                  <TabsTrigger value="history">
                    <History className="w-4 h-4 mr-2" /> Timeline
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="maintenance" className="p-6 m-0">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-secondary">Service Orders History</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>OS Number</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_BIKE_OS.map((os) => (
                      <TableRow key={os.id}>
                        <TableCell className="font-medium">{os.id}</TableCell>
                        <TableCell>{os.date}</TableCell>
                        <TableCell>{os.description}</TableCell>
                        <TableCell>${os.cost.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={os.status === 'Completed' ? 'default' : 'secondary'}
                            className={os.status === 'Completed' ? 'bg-primary' : ''}
                          >
                            {os.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="parts" className="p-6 m-0">
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Parts & Inventory Tracker
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {MOCK_BIKE_PARTS.map((part) => (
                    <div
                      key={part.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{part.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {part.id}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className={
                            part.status === 'Critical' ? 'border-red-500 text-red-500' : ''
                          }
                        >
                          Stock: {part.stock}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="p-6 m-0">
                <h3 className="text-lg font-semibold text-secondary mb-6">
                  Chronological Timeline
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border bg-card shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-secondary">Maintenance Completed</div>
                        <time className="text-xs font-medium text-muted-foreground">
                          Mar 15, 2024
                        </time>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Brake pad replacement done by Workshop Team.
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border bg-card shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-secondary">Assigned to Carlos</div>
                        <time className="text-xs font-medium text-muted-foreground">
                          Nov 10, 2023
                        </time>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Contract signed and bike delivered in perfect condition.
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
