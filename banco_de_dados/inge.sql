
-- Criação da base de dados:
CREATE DATABASE inge;

-- Selecionando base de dados que sera utilizada:
USE inge;

-- Criação das tabelas:

CREATE TABLE recenseador(
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(64) NOT NULL,
    numero_conta VARCHAR(11) NOT NULL,
    data_adimicao DATE NOT NULL,
    PRIMARY KEY (cpf)
);

CREATE TABLE setor(
    codigo VARCHAR(10) NOT NULL,
    zona VARCHAR(30) NOT NULL,
    cpf_recenseador VARCHAR(11),
    PRIMARY KEY (codigo),
    FOREIGN KEY (cpf_recenseador) REFERENCES recenseador(cpf)
);

CREATE TABLE residencia(
    codigo VARCHAR(10) NOT NULL,
    tipo VARCHAR(24) NOT NULL,
    total_comodos INT NOT NULL,
    bairro VARCHAR(26) NOT NULL,
    logradouro VARCHAR(26) NOT NULL,
    numero INT,
    cep VARCHAR(8) NOT NULL,
    complemento VARCHAR(64),
    codigo_setor VARCHAR(10) NOT NULL,
    PRIMARY KEY (codigo),
    FOREIGN KEY (codigo_setor) REFERENCES setor(codigo)
);


CREATE TABLE morador(
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(54) NOT NULL,
    idade int NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    estado_civil VARCHAR(15) NOT NULL,
    raca VARCHAR(15) NOT NULL,
    escolaridade VARCHAR(15) NOT NULL,
    renda NUMERIC(9,2) NOT NULL,
    codigo_residencia VARCHAR(10) NOT NULL,
    PRIMARY KEY (cpf),
    FOREIGN KEY (codigo_residencia) REFERENCES residencia(codigo)
);

CREATE TABLE dependente(
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(64) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    idade INT NOT NULL,
    cpf_morador VARCHAR(11) NOT NULL,
    PRIMARY KEY (cpf, cpf_morador),
    FOREIGN KEY (cpf_morador) REFERENCES morador(cpf)
);

-- Inserção nas tabelas

INSERT INTO recenseador VALUES
    ('09132112343', 'Chagas Vera Cruz', '32212121', '3098-05-01'),
    ('12345678901', 'Vitor Cubecheque', '40028922', '3098-05-01'),
    ('09132112342', 'Jihn Linon', '7007', '3098-05-02');

INSERT INTO setor VALUES
    ('ABCD', 'Leste','09132112342'),
    ('QWER', "Sul", '12345678901'),
    ('LXSA', "Oeste", '12345678901');

INSERT INTO residencia VALUES
     ('A03', 'Edifício', 8, 'Aldeia de Konoha', 'Rua Tonkotsu', 123, '32109342', 'Próximo a changai', 'QWER'),
     ('B01', 'Alvenaria', 5, 'Parque das Nuvens', 'Rio Minha Nossa', 165, '64034380', 'Próximo ao bosque', 'ABCD');

INSERT INTO residencia(codigo, tipo, total_comodos, bairro, logradouro, numero, cep, codigo_setor) VALUES
    ('A01', 'Oca', 6, 'Jardim dos Sonhos', 'Rua Avenida', 0, '12345678', 'ABCD'),
    ('B02', 'Edifício', 12, 'Cidade das Estrelas', 'Avenida Rua', 342, '22222222', 'QWER'),
    ('A02', 'Oca', 1, 'Parque das Nuvens', 'Rio Minha Nossa', 171, '64034380', 'LXSA');

INSERT INTO morador VALUES
    ('09876543210', 'Sávio Silva Sousa Santos', 18, 'M', 'Solteiro', 'Preto', 'Superior', 45000.55, 'B02'),
    ('56748329109', 'Emily Elizabeth Williams', 98, 'F', 'Casada', 'Pardo', 'Doutorado', 3000, 'A01'),
    ('83291065743', 'Light Yagami', 19, 'M', 'Viúvo', 'Branco', 'Médio', 1200, 'A02');

INSERT INTO dependente VALUES
    ('65464816538', 'Monkey D. Luffy', 'M', 78, '56748329109'),
    ('10293845791', 'Eren Yeager', 'M', 28, '09876543210'),
    ('21384648488', 'Rintarou Okabe', 'M', 36, '09876543210');
