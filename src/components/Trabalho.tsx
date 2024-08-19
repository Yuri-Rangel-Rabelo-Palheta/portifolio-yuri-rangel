import React from 'react';

interface TrabalhoProps {
    logo: string;
    empresa: string;
    cargo: string;
    periodo: string;
    localizacao?: string;
    descricao?: string;
    competencias: string;
}

const Trabalho: React.FC<TrabalhoProps> = ({ logo, empresa, cargo, periodo, localizacao, descricao, competencias }) => {
    return (
        <div className="trabalho">
            <img src={logo} alt={`${empresa} logo`} className="logo"/>
            <h2>{empresa}</h2>
            <h3>{cargo}</h3>
            <p><strong>Período:</strong> {periodo}</p>
            {localizacao && <p><strong>Localização:</strong> {localizacao}</p>}
            {descricao && <p>{descricao}</p>}
            <p><strong>Competências:</strong> {competencias}</p>
        </div>
    );
}

export default Trabalho;
