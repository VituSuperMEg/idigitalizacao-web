import Crud from "@/components/Crud/Crud";

export default function OrgaoPage() {
  return (
    <div>
     <Crud 
      display={{ displayName : "Orgão", displayMenu : "Cadastro"}}
      fieldsTable={[
        { head : "Código", body : "codigo"},
        { head : "Nome", body : "nome"},
        { head : "Responsável", body : "responsavel"},
        { head : "CPF", body : "cpf"}
      ]}
     />
    </div>
  ) 
}