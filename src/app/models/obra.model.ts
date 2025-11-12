export interface Obra {
  id: string;
  nome: string;
  responsavel: string;
  status: 'Em andamento' | 'Concluída' | 'Pausada';
}

export interface ObraDetails extends Obra {
  endereco: string;
  dataInicio: string;
  dataFimPrevista: string;
  custoEstimado: number;
}
