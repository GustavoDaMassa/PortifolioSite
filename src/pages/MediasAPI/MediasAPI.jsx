import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './MediasAPI.module.css';

const menuItems = [
  { label: 'Apresentação', href: '#apresentacao' },
  { label: 'Motivação e Solução', href: '#motivacao' },
  { label: 'Principais Funcionalidades', href: '#funcionalidades' },
  { label: 'Utilizando a API', href: '#utilizando-api' },
  { label: 'Práticas Adotadas', href: '#praticas' }
];

export const MediasAPI = () => {
  const navigate = useNavigate();

  useSwipe(
    () => navigate('/finance'), // Swipe left -> próxima
    () => navigate('/') // Swipe right -> anterior
  );

  return (
    <Layout>
      <NavArrows leftPath="/" rightPath="/finance" />
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>MediasAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="/assets/images/mediasVideo.mp4"
          posterSrc="/assets/images/capamedias.png"
        />

        <h1>API Rest de Gestão de Notas e Projeções Acadêmicas</h1>

        <p style={{ fontStyle: 'italic', color: 'var(--color-text-tertiary)' }}>AQUI</p>

        <div id="apresentacao">
          <h2>Apresentação</h2>
          <p>
            Acesse a{' '}
            <a href="https://github.com/GustavoDaMassa/MediasAPI" target="_blank" rel="noopener noreferrer">
              Documentação técnica
            </a>
          </p>
          <p>
            Uma plataforma inteligente de gestão acadêmica que transforma a maneira como estudantes e
            professores lidam com avaliações. A solução oferece armazenamento centralizado de notas,
            cálculo automático de médias e, principalmente, projeções estratégicas que permitem aos
            usuários simular cenários e planejar seu desempenho com antecedência.
          </p>
          <p>
            O diferencial está na flexibilidade: cada disciplina pode ter seu próprio método de cálculo
            personalizado através de expressões matemáticas customizáveis. O sistema processa essas
            expressões dinamicamente, identifica variáveis e constantes através de regex, e aplica o
            algoritmo Shunting Yard com notação polonesa reversa (RPN) para garantir a precedência
            correta dos operadores — tudo isso sem comprometer a performance ou usabilidade.
          </p>
          <p>
            Desenvolvida seguindo princípios SOLID e arquitetura em camadas, a API combina validações
            robustas (Bean Validation), autenticação JWT, testes automatizados com mocks e documentação
            OpenAPI 3. A solução foi containerizada com Docker e utiliza Spring Data JPA para consultas
            otimizadas, demonstrando uma implementação backend completa e profissional.
          </p>
        </div>

        <div id="motivacao">
          <h2>Motivação e Solução</h2>
          <p>
            Durante a jornada acadêmica na universidade, gerenciar as notas ou até mesmo apenas
            armazená-las é um processo que pode ser automatizado de maneira eficiente. No entanto,
            como cada professor e disciplina definem seus próprios métodos de avaliação e critérios
            de desempenho de acordo com suas preferências e abordagens, há uma grande variabilidade
            e flexibilidade nesse processo.
          </p>
          <p>
            Para que a aplicação possa suportar essas definições personalizadas, foi implementada
            uma solução baseada no processamento de expressões regulares, permitindo a identificação
            e manipulação dinâmica de variáveis, constantes e operadores. Dessa forma, o cálculo das
            médias finais é automatizado de maneira flexível e adaptável a diferentes regras de avaliação.
          </p>
          <p>
            Outro desafio foi a implementação desse cálculo dinâmico. A solução adotada utiliza a
            notação polonesa inversa (RPN), que elimina a necessidade de parênteses ao definir a ordem
            correta de precedência diretamente em sua estrutura. Além disso, foi empregada uma adaptação
            do algoritmo Shunting Yard, utilizando pilhas e listas como estruturas de dados para garantir
            a correta avaliação das expressões.
          </p>
        </div>

        <div id="funcionalidades">
          <h2>Principais Funcionalidades</h2>
          <ul>
            <li>Armazene notas de forma estruturada e eficiente.</li>
            <li>Defina métodos personalizados para cálculo de médias.</li>
            <li>Obtenha automaticamente a pontuação necessária para alcançar metas acadêmicas.</li>
            <li>Simule diferentes cenários para planejamento estratégico.</li>
            <li>Gerencie disciplinas.</li>
          </ul>
        </div>

        <div id="utilizando-api">
          <h2>Utilizando a API</h2>

          <h4>Login:</h4>
          <ul>
            <li>O usuário cria seu perfil se cadastrando no sistema.</li>
          </ul>

          <h4>Autenticação:</h4>
          <ul>
            <li>A API valida as credenciais e, se bem-sucedida, retorna um token JWT.</li>
          </ul>

          <h4>Disciplinas:</h4>
          <ul>
            <li>O usuário pode criar e editar suas disciplinas personalizadas.</li>
          </ul>

          <h4>Projeções:</h4>
          <ul>
            <li>
              Uma projeção é criada automaticamente na definição do método de cálculo no passo
              anterior. Usuários podem criar, editar e visualizar outras projeções.
            </li>
          </ul>

          <h4>Avaliações:</h4>
          <ul>
            <li>Também criadas automaticamente a cada projeção. Usuários podem lançar notas.</li>
          </ul>
        </div>

        <div id="praticas">
          <h2>Práticas Adotadas</h2>

          <h3>Arquitetura e Design</h3>
          <ul>
            <li>API REST com divisão em camadas</li>
            <li>Aplicação dos princípios SOLID</li>
            <li>Injeção de Dependências</li>
            <li>Uso do padrão Data Transfer Object (DTO)</li>
          </ul>

          <h3>Validação e Segurança</h3>
          <ul>
            <li>Validações personalizadas e uso do Bean Validation</li>
            <li>Implementação de autenticação e autorização via JWT</li>
          </ul>

          <h3>Tratamento de Erros e Respostas</h3>
          <ul>
            <li>Captura e tratamento de erros padronizados</li>
          </ul>

          <h3>Documentação</h3>
          <ul>
            <li>Documentação da API com diagramas e exemplos</li>
            <li>Documentação técnica dos endpoints com OpenAPI 3</li>
          </ul>

          <h3>Testes e Qualidade de Código</h3>
          <ul>
            <li>Testes automatizados com criação de mocks e ambiente separado</li>
          </ul>

          <h3>Banco de Dados</h3>
          <ul>
            <li>Modelagem do banco de dados relacional com definições de constraints</li>
            <li>Consultas JPQL e SQL nativo com Spring Data JPA</li>
          </ul>

          <h3>Ferramentas e Deploy</h3>
          <ul>
            <li>Uso de API Client e Database Client durante o desenvolvimento</li>
            <li>Encapsulamento da aplicação com Docker, criando imagens e containers personalizados</li>
            <li>Versionamento de código com Git</li>
          </ul>

          <h3>Tecnologias</h3>
          <ul>
            <li>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                Spring Boot
              </a>
            </li>
            <li>
              <a href="https://springdoc.org/v2/#spring-webflux-support" target="_blank" rel="noopener noreferrer">
                SpringDoc OpenAPI 3
              </a>
            </li>
            <li>
              <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
                Maven
              </a>
            </li>
            <li>
              <a href="https://www.h2database.com/html/main.html" target="_blank" rel="noopener noreferrer">
                H2 DataBase
              </a>
            </li>
            <li>
              <a href="https://beanvalidation.org/" target="_blank" rel="noopener noreferrer">
                Bean Validation
              </a>
            </li>
            <li>
              <a href="https://docs.spring.io/spring-security/reference/index.html" target="_blank" rel="noopener noreferrer">
                Spring Security
              </a>
            </li>
            <li>
              <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
                JUnit
              </a>
            </li>
            <li>
              <a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">
                Mysql
              </a>
            </li>
            <li>
              <a href="https://www.mysql.com/products/workbench/" target="_blank" rel="noopener noreferrer">
                Workbench
              </a>
            </li>
            <li>
              <a href="https://postman.com/" target="_blank" rel="noopener noreferrer">
                Postman
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/products/docker-hub/" target="_blank" rel="noopener noreferrer">
                Docker
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                Git
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};
