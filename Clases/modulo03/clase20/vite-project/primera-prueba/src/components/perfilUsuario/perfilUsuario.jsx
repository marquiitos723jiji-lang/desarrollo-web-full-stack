<<<<<<< HEAD
import Subtitulo from "../subtitulo/subtitulo";
=======
import  Subtitulo from "../subtitulo/subtitulo";
>>>>>>> 1f0f1ce651fbe5e1e8629357ac9dbc83f25336ae
import Titulo from "../titulo/titulo";
import "./perfilUsuario.css";

export default function PerfilUsuario({ nombre, edad, trabajo }) {
  return (
    <article>
      <Titulo texto={nombre} />
      <Subtitulo titulo="Edad" valor={edad} />
      <Subtitulo titulo="Trabajo" valor={trabajo} />
    </article>
  );
}
