import React from 'react';
import api from '../../components/apis';
import history from '../../history';

class AlbumRead extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objeto: { nome: "" }, carregando: true };
    }

    componentDidMount() {
        api.get(`/api/album/${this.props.match.params.id}`)
            .then(result => {
                this.setState({ objeto: result.data, carregando: false })
            })
    }

    renderMusicas = () => {
        return (
            this.state.objeto.musicas.map(m => {
                return (
                    <tr key={m.musicaId}>
                        <td>{m.titulo}</td>
                        <td>{m.duracao}</td>
                    </tr>
                );
            })
        );
    };

    render() {
        if(this.state.carregando){
            return <div>Carregando . . .</div>
        }

        const obj = this.state.objeto;

        return (
            <div className="ui container">
                <h2>Consultando Album</h2>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className="disable field" readOnly value={obj.nome} type="text" />
                            <label>Ano de Lançamento</label>
                            <input className="disable field" readOnly value={obj.ano} type="text" />
                        </div>
                    </div>
                    <div>
                        <br />
                        <h4>Músicas</h4>
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Duração (em segundos)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderMusicas()}
                            </tbody>
                        </table>
                        <br />
                    </div>
                </div>
                <button onClick={() => {history.push("/album/")}} className="tiny ui grey button">Voltar</button>
            </div>
        );
    }
}

export default AlbumRead;