import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { If } from "if-component-ts";
import { Input } from "@/components/Form/Input";
import { useForm } from "react-hook-form";
import { BookOpenCheck, Search } from "lucide-react";
import { AsyncFilter } from "@/components/Form/AsyncFilter";

const F3 = ({
  open = false,
  setOpen
}: any) => {
  const [option, setOption] = useState("default");

  const { control } = useForm();
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="w-dvw">
        <DialogHeader>
          <DialogTitle>Localizar Documento</DialogTitle>
          <DialogDescription>
            <div>
              Tipo de Pesquisa
              <RadioGroup onValueChange={e => setOption(e)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="codigo" id="option-one" />
                  <Label htmlFor="option-one">Código do Documento</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="criterio" id="option-one" />
                  <Label htmlFor="option-one">Critérios de Pesquisa</Label>
                </div>
              </RadioGroup>
            </div>
            <If test={option === "codigo"}>
              <Input
                name="codigo_documento"
                control={control}
                label="Código do Documento"
                mask="9999.99.99-9999"
              />
            </If>
            <If test={option === "criterio"}>
              <div className="mt-2">
              <AsyncFilter
               placeholder="Digite o Código ou Descrição do tipo de Documento..."
               required
               label="Tipo de Documento"
              />
              </div>
            </If>
            <div className="w-100 flex space-x-2 justify-end mt-7">
              <Button variant="success" className="gap-2">
                <Search size={15} />
                Localizar
              </Button>
              <Button variant="default" className="gap-2">
                <BookOpenCheck size={15} />
                Visualizar
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function Buttons() {
  const [f3, setF3] = useState(false);

  return (
    <>
      <Button onClick={() => setF3(true)}>
        Localizar ( F3 )
      </Button>
      <Button>
        Digitalizar ( F7 )
      </Button>
      <Button>
        Visualizar ( F9 )
      </Button>
      <Button>
        Enviar Email ( F3 )
      </Button>
      {/*
       Modals
      */}
      <F3 open={f3} setOpen={setF3} />
    </>
  )
}
