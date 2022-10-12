export function formatCpf(strCpf: string): string {
  const cpf = strCpf.split(/[.-]/).join(''); 

  return cpf;
}