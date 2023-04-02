import types from "./types";
import produce from 'immer'

const INITIAL_STATE = {
  servicos: [],
  agenda:[],
  barbeiros: [],
  cliente: {
    id: null,
    email: null,
    senha: null,
    nome: null
  },
  agendamento:{
    cienteId: null,
    barbeiroId: null,
    servicos:[],
    data: null,
    hora: null

  },
  form: {
    modalMenu: false,
    modalBarbeiros: false,
    modalServicos: false,
    modalAgendamento: false,
    modalFinalizarAgendamento: false,
    finalizarLoading: false,
    modalVerAgendamentos: false

  }
};



function barbearia(state = INITIAL_STATE, action){
  switch(action.type){
    default:
        return state;
  }
}

export default barbearia;