import React from 'react';
import Trabalho from './Trabalho';

const Experiencia: React.FC = () => {
    return (
        <div>
            <h1>Trabalhos e Experiências</h1>
            <Trabalho 
                logo="/path/to/ufra-logo.png" 
                empresa="Ufra - Universidade Federal Rural da Amazônia" 
                cargo="Analista de Desenvolvimento"
                periodo="set de 2022 - o momento · 2 anos"
                localizacao="Belém, Pará, Brasil"
                competencias="SQL, Banco de dados e mais 15 competências"
            />
            <Trabalho 
                logo="/path/to/ufpa-logo.png" 
                empresa="Universidade Federal do Pará" 
                cargo="Técnico Administrativo da Educação - Técnico em Tecnologia da Informação"
                periodo="set de 2017 - out de 2022 · 5 anos 2 meses"
                competencias="SQL, Banco de dados e mais 10 competências"
            />
            <Trabalho 
                logo="/path/to/ufpa-logo.png" 
                empresa="Universidade Federal do Pará" 
                cargo="Bolsista"
                periodo="jan de 2014 - dez de 2014 · 1 ano"
                localizacao="Belém, Pará, Brasil"
                descricao="Em 2014, fui contratado como bolsista no Laboratório de Modelagem Hidroclimático da Amazônia da UFPA..."
                competencias="SQL, Banco de dados e mais 7 competências"
            />
            <Trabalho 
                logo="/path/to/ufpa-logo.png" 
                empresa="Universidade Federal do Pará" 
                cargo="Bolsista"
                periodo="jan de 2012 - jan de 2013 · 1 ano 1 mês"
                localizacao="Belém, Pará, Brasil"
                descricao="Em 2012, tornei-me bolsista no Programa de Pós-Graduação de Psicologia da UFPA..."
                competencias="SQL, Banco de dados e mais 7 competências"
            />
            <Trabalho 
                logo="/path/to/ufpa-logo.png" 
                empresa="Universidade Federal do Pará" 
                cargo="Estagiário"
                periodo="jan de 2009 - jan de 2010 · 1 ano 1 mês"
                localizacao="Belém, Pará, Brasil"
                descricao="Em 2009, fui estagiário no Centro de Tecnologia da Informação e Comunicação (CTIC)..."
                competencias="Linux, Redes de computadores e mais 4 competências"
            />
        </div>
    );
}

export default Experiencia;
