import { getCep } from "@/services/viacep";

export const tipodocumneto = [
  { label : "CPF", value : "CPF"},
  { label : "CNPJ", value : "CNPJ"},
  { label : "CNH", value : "CNH"},
]
export const bancos = [
  { label : "BANCO A.J. RENNER S.A.", value : "BANCO A.J. RENNER S.A."},
  { label : "BANCO ABC BRASIL S.A.", value : "BANCO ABC BRASIL S.A."},
  { label : "BANCO ABN AMRO S.A.", value : "BANCO ABN AMRO S.A."},
  { label : "BANCO AGIBANK S.A.", value : "BANCO AGIBANK S.A."},
  { label : "BANCO ALFA S.A.", value : "BANCO ALFA S.A."},
  { label : "BANCO ANDBANK BRASIL S.A.", value : "BANCO ANDBANK BRASIL S.A."},
  { label : "BANCO ARBI S.A.", value : "BANCO ARBI S.A."},
  { label : "BANCO B3 S.A.", value : "BANCO B3 S.A."},
  { label : "BANCO BANDEPE S.A.", value : "BANCO BANDEPE S.A."},
  { label : "BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A.", value : "BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A."},
  { label : "BANCO BMG S.A.", value : "BANCO BMG S.A."},
  { label : "BANCO BNP PARIBAS BRASIL S.A.", value : "BANCO BNP PARIBAS BRASIL S.A"},
  { label : "BANCO BOCOM BBM S.A.", value : "BANCO BOCOM BBM S.A"},
  { label : "BANCO BRADESCARD S.A.", value : "BANCO BRADESCARD S.A."},
  { label : "BANCO BRADESCO BBI S.A.", value : "BANCO BRADESCO BBI S.A."},
  { label : "BANCO BRADESCO BERJ S.A.", value : "BANCO BRADESCO BERJ S.A."},
  { label : "BANCO BRADESCO FINANCIAMENTOS S.A.", value : "BANCO BRADESCO FINANCIAMENTOS S.A."},
  { label : "BANCO BRADESCO S.A.", value : "BANCO BRADESCO S.A."},
  { label : "BANCO BS2 S.A.", value : "BANCO BS2 S.A."},
  { label : "BANCO BTG PACTUAL S.A.", value : "BANCO BTG PACTUAL S.A."},
  { label : "BANCO C6 S.A.", value : "BANCO C6 S.A."},
  { label : "BANCO CAIXA GERAL - BRASIL S.A.", value : "BANCO CAIXA GERAL - BRASIL S.A."},
  { label : "BANCO CAPITAL S.A.", value : "BANCO CAPITAL S.A."},
  { label : "BANCO CARGILL S.A.", value : "BANCO CARGILL S.A."},
  { label : "BANCO CATERPILLAR S.A.", value : "BANCO CARGILLAR S.A."},
  { label : "BANCO CEDULA S.A", value : "BANCO CEDULA S.A"},
  { label : "BANCO CETELEM S.A.", value : "BANCO CETELEM S.A."},
  { label : "BANCO CIFRA S.A.", value : "BANCO CIFRA S.A."},
  { label : "BANCO CITIBANK S.A.", value : "BANCO CITIBANK S.A."},
  { label : "BANCO CLÁSSICO S.A.", value : "BANCO CLÁSSICO S.A."},
  { label : "BANCO CNH INDUSTRIAL CAPITAL S.A.", value : "BANCO CNH INDUSTRIAL CAPITAL S.A"},
  { label : "BANCO COOPERATIVO DO BRASIL S.A. - BANCOOB", value : "BANCO COOPERATIVO DO BRASIL"},
  { label : "BANCO COOPERATIVO SICREDI S.A.", value : "BANCO COOPERATIVO SICREDI S.A."},
  { label : "BANCO CRÉDIT AGRICOLE BRASIL S.A.", value : "BANCO CRÉDIT AGRICOLE BRASIL"},
  { label : "BANCO CREDIT SUISSE BRASIL S.A.", value : "BANCO CREDIT SUISSE BRASIL"},
  { label : "BANCO CREFISA S.A.", value : "BANCO CREFISA S.A."},
  { label : "BANCO CSF S.A.", value : "BANCO CSF S.A."},
  { label : "BANCO DA AMAZONIA S.A.", value : "BANCO DA AMAZONIA S.A."},
  { label : "BANCO DA CHINA BRASIL S.A.", value : "BANCO DA CHINA BRASIL S.A."},
  { label : "BANCO DAYCOVAL S.A.", value : "BANCO DAYCOVAL S.A."},
  { label : "BANCO DE LA NACION ARGENTINA", value : "BANCO DE LA NACION ARGENTINA"},
  { label : "BANCO DE LA PROVINCIA DE BUENOS AIRES", value : "BANCO DE LA PROVINCIA DE BUENOS AIRES"},
  { label: "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY", value : "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY"},
  { label : "BANCO DE LAGE LANDEN BRASIL S.A.", value : "BANCO DE LAGE LANDEN BRASIL S.A."},
  { label : "BANCO DIGIO S.A.", value : "BANCO DIGIO S.A."},
  { label : "BANCO DO BRASIL S.A.", value : "BANCO DO BRASIL S.A."},
  { label : "BANCO DO ESTADO DE SERGIPE S.A.", value : "BANCO DO ESTADO DE SERGIPE S.A."},
  { label : "BANCO DO ESTADO DO PARÁ S.A.", value : "BANCO DO ESTADO DO PARÁ S.A."},
  { label : "BANCO DO ESTADO DO RIO GRANDE DO SUL S.A.", value : "BANCO DO ESTADO DO RIO GRANDE DO SUL S.A."},
  { label : "BANCO DO NORDESTE DO BRASIL S.A.", value : "BANCO DO NORDESTE DO BRASIL S.A."},
  { label : "BANCO FATOR S.A.", value : "BANCO FATOR S.A."},
  { label : "BANCO FIBRA S.A.", value : "BANCO FIBRA S.A."},
  { label : "BANCO FICSA S.A.", value : "BANCO FICSA S.A."},
  { label : "BANCO FIDIS S/A", value : "BANCO FIDIS S/A"},
  { label : "BANCO FINAXIS S.A.", value : "BANCO FINAXIS S.A."},
  { label : "BANCO FORD S.A.", value : "BANCO FORD S.A."},
  { label : "BANCO GMAC S.A.", value : "BANCO GMAC S.A."},
  { label : "BANCO GUANABARA S.A.", value : "BANCO GUANABARA S.A."},
  { label : "BANCO HONDA S.A.", value : "BANCO HONDA S.A."},
  { label : "BANCO HYUNDAI CAPITAL BRASIL S.A.", value : "BANCO HYUNDAI CAPITAL BRASIL S.A."},
  { label : "BANCO IBM S.A.", value : "BANCO IBM S.A."},
  { label : "BANCO INBURSA S.A.", value : "BANCO INBURSA S.A."},
  { label : "BANCO INDUSTRIAL DO BRASIL S.A.", value : "BANCO INDUSTRIAL DO BRASIL S.A."},
  { label : "BANCO INDUSVAL S.A.", value : "BANCO INDUSVAL S.A."},
  { label : "BANCO INTER S.A.", value : "BANCO INTER S.A."},
  { label : "BANCO INVESTCRED UNIBANCO S.A.", value : "BANCO INVESTCRED UNIBANCO S.A."},
  { label : "BANCO ITAÚ BBA S.A.", value : "BANCO ITAÚ BBA S.A."},
  { label : "BANCO ITAÚ CONSIGNADO S.A.", value : "BANCO ITAÚ CONSIGNADO S.A."},
  { label : "BANCO ITAÚ VEÍCULOS S.A.", value : "BANCO ITAÚ VEÍCULOS S.A."},
  { label : "BANCO ITAUBANK S.A.", value : "BANCO ITAUBANK S.A."},
  { label : "BANCO ITAUCARD S.A.", value : "BANCO ITAUCARD S.A."},
  { label : "BANCO ITAULEASING S.A.", value : "BANCO ITAULEASING S.A."},
  { label : "BANCO J. SAFRA S.A.", value : "BANCO J. SAFRA S.A."},
  { label : "BANCO J.P. MORGAN S.A.", value : "BANCO J.P. MORGAN S.A."},
  { label : "BANCO JOHN DEERE S.A.", value : "BANCO JOHN DEERE S.A."},
  { label : "BANCO KDB DO BRASIL S.A.", value : "BANCO KDB DO BRASIL S.A."},
  { label : "BANCO KEB HANA DO BRASIL S.A.", value : "BANCO KEB HANA DO BRASIL S.A."},
  { label : "BANCO KOMATSU DO BRASIL S.A.", value : "BANCO KOMATSU DO BRASIL S.A."},
  { label : "BANCO LOSANGO S.A. - BANCO MÚLTIPLO", value : "BANCO LOSANGO S.A. - BANCO MÚLTIPLO"},
  { label : "BANCO LUSO BRASILEIRO S.A.", value : "BANCO LUSO BRASILEIRO S.A."},
  { label : "BANCO MÁXIMA S.A.", value : "BANCO MÁXIMA S.A."},
  { label : "BANCO MAXINVEST S.A.", value : "BANCO MAXINVEST S.A."},
  { label : "BANCO MERCANTIL DO BRASIL S.A.", value : "BANCO MERCANTIL DO BRASIL S.A."},
  { label : "BANCO MERCEDES-BENZ DO BRASIL S.A.", value : "BANCO MERCEDES-BENZ DO BRASIL S.A."},
  { label : "BANCO MIZUHO DO BRASIL S.A.", value : "BANCO MIZUHO DO BRASIL S.A"},
  { label : "BANCO MODAL S.A.", value : "BANCO MODAL S.A"},
  { label : "BANCO MONEO S.A.", value : "BANCO MONEO S.A."},
  { label : "BANCO MORGAN STANLEY S.A.", value : "BANCO MORGAN STANLEY S.A."},
  { label : "BANCO MUFG BRASIL S.A.", value : "BANCO MUFG BRASIL S.A."},
  { label : "BANCO OLÉ BONSUCESSO CONSIGNADO S.A.", value : "BANCO OLÉ BONSUCESSO CONSIGNADO S.A."},
  { label : "BANCO ORIGINAL DO AGRONEGÓCIO S.A.", value : "BANCO ORIGINAL DO AGRONEGÓCIO S.A."},
  { label : "BANCO ORIGINAL S.A.", value : "BANCO ORIGINAL S.A."},
  { label : "BANCO OURINVEST S.A.", value : "BANCO OURINVEST S.A."},
  { label : "BANCO PACCAR S.A.", value : "BANCO PACCAR S.A."},
  { label : "BANCO PAN S.A.", value : "BANCO PAN S.A."},
  { label : "BANCO PAULISTA S.A.", value : "BANCO PAULISTA S.A."},
  { label : "BANCO PINE S.A.", value : "BANCO PINE S.A."},
  { label : "BANCO PSA FINANCE BRASIL S.A.", value : "BANCO PSA FINANCE BRASIL S.A."},
  { label : "BANCO RABOBANK INTERNATIONAL BRASIL S.A.", value : "BANCO RABOBANK INTERNATIONAL BRASIL S.A."},
  { label : "BANCO RANDON S.A.", value : "BANCO RANDON S.A."},
  { label : "BANCO RCI BRASIL S.A.", value : "BANCO RCI BRASIL S.A."},
  { label : "BANCO RENDIMENTO S.A.", value : "BANCO RENDIMENTO S.A."},
  { label : "BANCO RIBEIRÃO PRETO S.A.", value : "BANCO RIBEIRÃO PRETO S.A."},
  { label : "BANCO RODOBENS S.A.", value : "BANCO RODOBENS S.A."},
  { label : "BANCO SAFRA S.A", value : "BANCO SAFRA S.A"},
  { label : "BANCO SANTANDER BRASIL S.A.", value : "BANCO SANTANDER BRASIL S.A."},
  { label : "BANCO SEMEAR S.A.", value : "BANCO SEMEAR S.A."},
  { label : "BANCO SISTEMA S.A.", value : "BANCO SISTEMA S.A."},
  { label : "BANCO SMARTBANK S.A.", value : "BANCO SMARTBANK S.A."},
  { label : "BANCO SOCIETE GENERALE BRASIL S.A.", value : "BANCO SOCIETE GENERALE BRASIL S.A."},
  { label : "BANCO SOFISA S.A.", value : "BANCO SOFISA S.A."},
  { label : "BANCO SUMITOMO MITSUI BRASILEIRO S.A.", value : "BANCO SUMITOMO MITSUI BRASILEIRO S.A."},
  { label : "BANCO TOPÁZIO S.A.", value : "BANCO TOPÁZIO S.A."},
  { label : "BANCO TOYOTA DO BRASIL S.A.", value : "BANCO TOYOTA DO BRASIL S.A."},
  { label : "BANCO TRIÂNGULO S.A.", value : "BANCO TRIÂNGULO S.A."},
  { label : "BANCO TRICURY S.A.", value : "BANCO TRICURY S.A."},
  { label : "BANCO VIPAL S.A.", value : "BANCO VIPAL S.A."},
  { label : "BANCO VOLKSWAGEN S.A.", value : "BANCO VOLKSWAGEN S.A."},
  { label : "BANCO VOLVO BRASIL S.A.", value : "BANCO VOLVO BRASIL S.A."},
  { label : "BANCO VOTORANTIM S.A.", value : "BANCO VOTORANTIM S.A."},
  { label : "BANCO VR S.A.", value : "BANCO VR S.A."},
  { label : "BANCO WESTERN UNION DO BRASIL S.A.", value : "BANCO WESTERN UNION DO BRASIL S.A."},
  { label : "BANCO WOORI BANK DO BRASIL S.A.", value : "BANCO WOORI BANK DO BRASIL S.A."},
  { label : "BANCO YAMAHA MOTOR DO BRASIL S.A.", value : "BANCO YAMAHA MOTOR DO BRASIL S.A."},
  { label : "BANCOSEGURO S.A.", value : "BANCOSEGURO S.A."},
  { label : "BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO", value : "BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO"},
  { label : "BANK OF AMERICA MERRILL LYNCH BANCO MÚLTIPLO S.A.", value : "BANK OF AMERICA MERRILL LYNCH BANCO MÚLTIPLO S.A."},
  { label : "BCV - BANCO DE CRÉDITO E VAREJO S.A.", value : "BCV - BANCO DE CRÉDITO E VAREJO S.A."},
  { label : "BEXS BANCO DE CÂMBIO S/A", value : "BEXS BANCO DE CÂMBIO S/A"},
  { label : "BNY MELLON BANCO S.A.", value : "BNY MELLON BANCO S.A."},
  { label : "BRB - BANCO DE BRASILIA S.A.", value : "BRB - BANCO DE BRASILIA S.A."},
  { label : "CAIXA ECONÔMICA FEDERAL", value : "CAIXA ECONÔMICA FEDERAL"},
  { label : "CHINA CONSTRUCTION BANK BRASIL BANCO MÚLTIPLO S/A", value : "CHINA CONSTRUCTION BANK BRASIL BANCO MÚLTIPLO S/A"},
  { label : "CITIBANK N.A.", value : "CITIBANK N.A."},
  { label : "COMMERZBANK BRASIL S.A. - BANCO MÚLTIPLO", value : "COMMERZBANK BRASIL S.A. - BANCO MÚLTIPLO"},
  { label : "DAYCOVAL LEASING - BANCO MÚLTIPLO S.A.", value : "DAYCOVAL LEASING - BANCO MÚLTIPLO S.A."},
  { label : "DEUTSCHE BANK S.A. - BANCO ALEMAO", value : "DEUTSCHE BANK S.A. - BANCO ALEMAO"},
  { label : "GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A.", value : "GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A."},
  { label : "HIPERCARD BANCO MÚLTIPLO S.A.", value : "HIPERCARD BANCO MÚLTIPLO S.A."},
  { label : "ICBC DO BRASIL BANCO MÚLTIPLO S.A.", value : "ICBC DO BRASIL BANCO MÚLTIPLO S.A."},
  { label : "ING BANK N.V.", value : "ING BANK N.V."},
  { label : "INTESA SANPAOLO BRASIL S.A. - BANCO MÚLTIPLO", value : "INTESA SANPAOLO BRASIL S.A. - BANCO MÚLTIPLO"},
  { label : "INTL FCSTONE BANCO DE CÂMBIO S.A.", value : "INTL FCSTONE BANCO DE CÂMBIO S.A."},
  { label : "ITAÚ UNIBANCO HOLDING S.A.", value : "ITAÚ UNIBANCO HOLDING S.A."},
  { label : "ITAÚ UNIBANCO S.A.", value : "ITAÚ UNIBANCO S.A."},
  { label : "JPMORGAN CHASE BANK", value : "JPMORGAN CHASE BANK"},
  { label : "KIRTON BANK S.A. - BANCO MÚLTIPLO", value : "KIRTON BANK S.A. - BANCO MÚLTIPLO"},
  { label : "MONEYCORP BANCO DE CÂMBIO S.A.", value : "MONEYCORP BANCO DE CÂMBIO S.A."},
  { label : "MS BANK S.A. BANCO DE CÂMBIO", value : "MS BANK S.A. BANCO DE CÂMBIO"},
  { label : "NOVO BANCO CONTINENTAL S.A. - BANCO MÚLTIPLO", value : "NOVO BANCO CONTINENTAL S.A. - BANCO MÚLTIPLO"},
  { label : "OMNI BANCO S.A.", value : "OMNI BANCO S.A."},
  { label : "PARANÁ BANCO S.A.", value : "PARANÁ BANCO S.A."},
  { label : "PLURAL S.A. BANCO MÚLTIPLO", value : "PLURAL S.A. BANCO MÚLTIPLO"},
  { label : "SCANIA BANCO S.A.", value : "SCANIA BANCO S.A."},
  { label : "SCOTIABANK BRASIL S.A. BANCO MÚLTIPLO", value : "SCOTIABANK BRASIL S.A. BANCO MÚLTIPLO"},
  { label : "STATE STREET BRASIL S.A. – BANCO COMERCIAL", value : "STATE STREET BRASIL S.A. – BANCO COMERCIAL"},
  { label : "TRAVELEX BANCO DE CÂMBIO S.A.", value : "TRAVELEX BANCO DE CÂMBIO S.A."}
]
