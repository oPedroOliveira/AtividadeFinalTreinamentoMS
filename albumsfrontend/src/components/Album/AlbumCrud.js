import React from 'react';
import AlbumList from './AlbumList';
import api from '../../components/apis';

class AlbumCrud extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            objetos: [],
            status: ETipoAcao.carregando
        };
    }

    componentDidMount() {
        this.viewData();
    }
    
    viewData = () => {
        api.get("/api/album")
            .then(result => {
                this.setState({ objetos: result.data, status: ETipoAcao.listando })
            })
    };

    renderComponent() {
        if(this.state.status === ETipoAcao.listando) {
            return(
                <div>
                    <a href="/album/novo" className="tiny ui green button">Incluir</a> 
                    <AlbumList objetos={this.state.objetos} consultar={this.read} alterar={this.change} deletar={this.delete} />
                </div>
            );
        }
        else {
            <div>Carregando . . .</div>
        }
    }

    render() {
        return(
            <div className="ui container">
                <h1>Coletânea de Albuns</h1>
                {this.renderComponent()}
            </div>
        )
    }
}

const ETipoAcao = Object.freeze({
    "carregando":1,
    "listando":2,
});

export default AlbumCrud;