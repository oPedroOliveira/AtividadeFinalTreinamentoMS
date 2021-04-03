import React from 'react';
import api from '../../components/apis';
import history from '../../history';

class AlbumModify extends React.Component {
    constructor(props) {
        super(props);

        if(props.match.params.id) {
            this.state = { objeto: null, incluindo: false, carregando: true, inserirTitulo: '', inserirDuracao: ''}
        }
        else{
            this.state = { objeto: {nome: '', ano: '', musicas: [] }, incluindo: true, carregando: false }
        }
    }

    componentDidMount(){
        if(this.state.incluindo === false){
            api.get(`/api/album/${this.props.match.params.id}`)
                .then(result => {
                    this.setState({ objeto: result.data, carregando: false });
                });
        }
    }

    salvar = (e) => {
        e.preventDefault();

        if (this.state.incluindo) {
            this.incluir();
        } 
        else {
            this.alterar();
        }
    };

    alterar = () => {
        const objeto = this.state.objeto;

        api.put(`/api/album/${objeto.albumId}`, objeto)
            .then(result => {
                if(result.status === 204) {
                    history.push('/album/');
                }
            });
    };

    incluir = () => {
        const objeto = this.state.objeto; 

        api.post("/api/album", objeto)
            .then(result => {
                if(result.status === 201) {
                    history.push('/album/');
                }
            });
    };


    changeProp = (nameProp, valueProp) => {
        let obj = this.state.objeto;
        obj[nameProp] = valueProp;
        this.setState({ objeto: obj });
    };

    excluirMusica = (musicaParaRemover) => {
        const obj = {...this.state.objeto};
        
        obj.musicas = obj.musicas.filter(m => m.musicaId !== musicaParaRemover.musicaId ||  m.titulo !== musicaParaRemover.titulo);

        this.setState({ objeto: obj });
    }

    renderMusicas = () => {
        return (
            this.state.objeto.musicas.map(m => {
                return (
                    <tr key={m.musicaId}>
                        <td>{m.titulo}</td>
                        <td>{m.duracao}</td>
                        <td><button type="button" className="ui button red" onClick={() => {this.excluirMusica(m)}}>Excluir</button></td>
                    </tr>
                );
            })
        );
    };

    adicionarMusica = (e) => {
        e.preventDefault();
        
        let objeto = {...this.state.objeto};

        objeto.musicas.push(
            {
                titulo: this.state.inserirTitulo,
                duracao: this.state.inserirDuracao,
                albumId: objeto.albumId
            });

        this.setState({objeto, inserirMusica: ''});
        console.log(e);
    };

    render() {
        if(this.state.carregando) {
            return <div>Carregando . . .</div>
        }

        const obj = this.state.objeto;

        return(
            <div>
                <h2>{this.state.incluindo? "Incluindo" : "Alterando"} Album</h2>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input onChange={(e) => this.changeProp("nome", e.target.value)} value={obj.nome} type="text" />
                        </div>
                        <div>
                            <label>Ano de Lançamento</label>
                            <input onChange={(e) => this.changeProp("ano", e.target.value)} value={obj.ano} type="text" />
                        </div>
                    </div>
                    <h4>Músicas</h4>
                    <div className="fields">
                        <div className="field">
                            <label>Título</label>
                            <input onChange={(e) => this.setState({inserirTitulo: e.target.value})}  value={this.state.inserirTitulo} type="text" />
                        </div>
                        <div className="field">
                            <label>Duração (em segundos)</label>
                            <input onChange={(e) => this.setState({inserirDuracao: e.target.value})}  value={this.state.inserirDuracao} type="text" />
                        </div>
                        <div className="field">
                            <button type="button" style={{marginTop: "23px"}} onClick={this.adicionarMusica} className="ui button primary">Adicionar Música</button>
                        </div>
                    </div>
                    
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duração (em segundos)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderMusicas()}
                        </tbody>
                    </table>
                </form>
                <button onClick={this.salvar} className="tiny ui yellow button">Salvar</button>      
                <button onClick={() => {history.push("/album/")}} className="tiny ui grey button">Voltar</button>
            </div>
        );
    }
}

export default AlbumModify;