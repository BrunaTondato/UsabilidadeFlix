import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from 'react-hook-form';
import "./index.css"
function CadastroCategoria() {
const { register, handleSubmit, errors } = useForm();

function onSubmit(dados) {
    console.log("Dados:", dados);
    fetch(`http://localhost:8080/categorias`, {
    method: "post",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
    })
    .then(function (response) {
    return response.json();
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", JSON.stringify(response)))
    
    console.log(dados);
    }
    
return (
<div className="corpo">
<Header />
<h1> Cadastro Categoria </h1>

<form onSubmit={handleSubmit(onSubmit)} className="form-group">

<input type="text" className="form-control" placeholder="Título" name="titulo" ref={register({required: true})} />

<br />

<input type="text" className="form-control" placeholder="Descrição Extra" name="descricao" ref={register({required: true})} />
<br />

<input type="text" className="form-control" placeholder="Link Extra" name="url" ref={register({required: true})} />

<br />

<input type="color" className="form-control" placeholder="Cor" name="cor" ref={register({required: true})} />

<br />

<input type="submit" className="btn btn-primary btn-lg" value="Salvar"/>

</form>
<Footer />
</div>
)
};
export default CadastroCategoria;