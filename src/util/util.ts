export function mostrarDuasLetras(nome: string): string {
  let partesNome = nome.split(' ');
  let primeiraLetra = partesNome[0].charAt(0);
  let segundaParte = partesNome.length > 1 ? partesNome[1] : '';
  let segundaLetra = segundaParte.charAt(0);

  return primeiraLetra + segundaLetra;
}
