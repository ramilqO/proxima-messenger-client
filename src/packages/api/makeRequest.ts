type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export default (url: string, method: TMethod, headers: HeadersInit, body?: BodyInit) => {
  if (!localStorage.getItem('token')) throw new Error('Пользователь не авторизован. Запрос отклонён.');
  return fetch(url, { method, headers, body });
};