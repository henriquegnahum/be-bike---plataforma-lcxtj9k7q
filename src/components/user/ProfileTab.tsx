import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUserStore } from '@/stores/user'
import { Camera, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ProfileTab() {
  const { profile, setProfile } = useUserStore()
  const [formData, setFormData] = useState(profile)
  const { toast } = useToast()

  const handleSave = () => {
    setProfile(formData)
    toast({ title: 'Perfil atualizado', description: 'Suas informações foram salvas com sucesso.' })
  }

  const handleAvatarUpdate = () => {
    // Mocking an avatar upload
    setFormData({
      ...formData,
      avatarUrl: `https://img.usecurling.com/ppl/thumbnail?seed=${Math.random()}`,
    })
  }

  return (
    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 pb-4 no-scrollbar">
      <div className="flex flex-col items-center justify-center p-4 bg-background/50 border border-border/60 rounded-2xl shadow-sm">
        <div className="relative group cursor-pointer" onClick={handleAvatarUpdate}>
          <div className="w-20 h-20 rounded-full border-2 border-primary/20 overflow-hidden shadow-inner bg-muted">
            {formData.avatarUrl ? (
              <img src={formData.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-2xl font-bold">
                {formData.name.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-medium">Clique para alterar a foto</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
          Identidade Profissional
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Nome Completo</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label>Cargo / Função</Label>
            <Input value={formData.role} disabled className="bg-muted/50 cursor-not-allowed" />
            <p className="text-[10px] text-muted-foreground">Somente admins podem alterar.</p>
          </div>
          <div className="space-y-2">
            <Label>Departamento</Label>
            <Input
              value={formData.department}
              disabled
              className="bg-muted/50 cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <Label>Data de Início</Label>
            <Input value={formData.startDate} disabled className="bg-muted/50 cursor-not-allowed" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
          Contato & Informações
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>E-mail Corporativo</Label>
            <Input
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label>Telefone / Celular</Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label>Ramal Interno</Label>
            <Input
              value={formData.extension}
              onChange={(e) => setFormData({ ...formData, extension: e.target.value })}
              className="bg-background/50"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Sobre mim</Label>
          <Textarea
            value={formData.aboutMe}
            onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value })}
            className="bg-background/50 resize-none h-20"
            placeholder="Conte um pouco sobre você e seu trabalho..."
          />
        </div>
      </div>

      <Button onClick={handleSave} className="w-full shadow-md font-bold">
        <Check className="w-4 h-4 mr-2" /> Salvar Alterações
      </Button>
    </div>
  )
}
