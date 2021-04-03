import React from 'react';

class AlbumList extends React.Component {
    renderItem(){
        return(
            this.props.objetos.map(a => {
                return(
                    <tr key={a.albumId}>
                        <td>{a.nome}</td>
                        <td>{a.ano}</td>
                        <td>
                        <a href={`/album/consultar/${a.albumId}`} className="tiny ui blue button">Consultar</a>
                        <a href={`/album/alterar/${a.albumId}`} className="tiny ui orange button">Alterar</a>
                        <a href={`/album/deletar/${a.albumId}`} className="tiny ui red button">Excluir</a>
                        </td>
                    </tr>
                );
            })
        );
    }

    render(){
        return(
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ano de Lançamento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        );
    }
}

export default AlbumList;