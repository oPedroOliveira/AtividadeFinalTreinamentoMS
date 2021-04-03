import React from 'react';
import api from '../apis';
import history from '../../history';

class AlbumDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objeto: null, carregando: true };
    }

    componentDidMount() {
        api.get(`/api/album/${this.props.match.params.id}`)
            .then(result => {
                this.setState({ objeto: result.data, carregando: false })
            })
    }

    excluir = () => {
        api.delete(`/api/album/${this.state.objeto.albumId}`)
        .then(result => {
            if (result.status === 204) {
                history.push('/album/');
            }
        });
    }

    render() {
        if(this.state.carregando){
            return <div>Carregando . . .</div>
        }

        const obj = this.state.objeto;

        return (
            <div className="ui container">
                <h2>Excluindo Album</h2>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className="disabled field" readOnly value={obj.nome} type="text" />
                        </div>
                    </div>
                    <div className="ui negative message">Deseja excluir o album acima?</div>
                </div>
                <button onClick={this.excluir} className="tiny ui red button">Excluir</button>
                <button onClick={() => {history.push("/album/")}} className="tiny ui grey button">Voltar</button>
            </div>
        );
    }
}

export default AlbumDelete;