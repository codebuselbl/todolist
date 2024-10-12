interface IError {
  error: string;
}
export const Error = ({ error }: IError) => {
  return <div>Error al cargar tareas: {error}</div>;
};
