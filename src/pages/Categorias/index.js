import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalDialog from "../../components/Modal";
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import "./index.css"
import repository from "../../Repository.js"
import config from "../../config.js"

function CadastroCategoria() {
const { register, handleSubmit, errors } = useForm();
const history = useHistory();

const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {setOpen(true);};
const handleNo = () => {
setOpen(false);
history.push('/ ');
};
const handleYes = () => {
setOpen(false);
};


function onSubmit(dados) {
    console.log("Dados:", dados);
    fetch(`${config.URL_BACKEND}/categorias`, {
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
    .then(handleClickOpen())
    
    console.log(dados);
    }
    
return (

<div>
<Header />
<div className="corpo">
{/* <form onSubmit={handleSubmit(onSubmit)} className="form-group">  */}

<form className="container"id="video-form"onSubmit={handleSubmit(onSubmit)}
>
<h1> Cadastro de Categorias</h1>
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
<Link to="/">
    Ir para home
</Link>
</div>
    <ModalDialog
    open = {open}
    handleClose = {handleNo}
    titulo = 'Cadastrado com sucesso'
    texto = 'Deseja fazer outro cadastro?'
    handleSim = {handleYes}
    handleNao = {handleNo}
    />
    

<Footer />
</div>
);
}
export default CadastroCategoria;