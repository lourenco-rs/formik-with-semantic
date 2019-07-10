export const ActionTypes = {
  GET_NOTAS_REQUEST: 'notas/GET_NOTAS_REQUEST',
  GET_NOTAS_SUCCESS: 'notas/GET_NOTAS_SUCCESS',
};

export function getNotasRequest(id) {
  return {
    type: ActionTypes.GET_NOTAS_REQUEST,
    payload: { id },
  };
}
