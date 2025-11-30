import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './FinanceAPI.module.css';

const menuItems = [
  { label: 'Apresentação', href: '#apresentacao' },
  { label: 'Motivação e Solução', href: '#motivacao' },
  { label: 'Principais Funcionalidades', href: '#funcionalidades' },
  { label: 'Utilizando a API', href: '#utilizando-api' },
  { label: 'Práticas Adotadas', href: '#praticas' }
];

export const FinanceAPI = () => {
  const navigate = useNavigate();

  useSwipe(
    () => navigate('/projetos'), // Swipe left -> próxima
    () => navigate('/medias') // Swipe right -> anterior
  );

  return (
    <Layout>
      <NavArrows leftPath="/medias" rightPath="/projetos" />
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>FinanceAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="/assets/images/financeVideo.mp4"
          posterSrc="/assets/images/capafinance.png"
        />

        <h1>API GraphQL de Integração Bancária, Análise e Classificação de Transações</h1>

        <p style={{ fontStyle: 'italic', color: 'var(--color-text-tertiary)' }}>AQUI</p>

        <div id="apresentacao">
          <h2>Apresentação</h2>
          <p>
            <a href="https://github.com/GustavoDaMassa/FinanceAPI" target="_blank" rel="noopener noreferrer">
              Documentação técnica
            </a>
          </p>
          <p>
            Uma API GraphQL completa para gestão financeira inteligente que conecta o ecossistema Open
            Finance ao usuário final. A plataforma captura automaticamente transações bancárias via
            webhooks, organiza movimentações em categorias personalizadas e oferece análises detalhadas
            com cálculo automático de saldo — tudo através de consultas GraphQL flexíveis e precisas.
          </p>
          <p>
            O sistema foi projetado para resolver um problema real: a dificuldade de consolidar e
            categorizar movimentações financeiras de múltiplas contas. Através da integração com o
            agregador Pluggy em ambiente sandbox, a API simula o comportamento de uma instituição
            participante do Open Finance, processando webhooks em tempo real e persistindo dados com
            relacionamentos complexos em PostgreSQL.
          </p>
          <p>
            A arquitetura implementa mensageria com Kafka para processamento assíncrono, Spring Security
            com autenticação X-API-KEY, e utiliza GraphQL para proporcionar aos clientes (dashboards,
            apps mobile, integrações) a flexibilidade de requisitar exatamente os dados necessários.
            O projeto demonstra conhecimento profundo em integração de APIs externas, processamento de
            eventos em tempo real e design de APIs modernas orientadas a GraphQL.
          </p>
        </div>

        <div id="motivacao">
          <h2>Motivação e Solução</h2>
          <p>
            A intenção inicial era construir um sistema integrado e funcional capaz de processar
            automaticamente as movimentações financeiras. Acontece que obter, classificar e analisar
            transações bancárias em tempo real é um processo que demanda alto nível de integração com
            instituições financeiras. No entando, o acesso direto a dados bancários reais exige a
            habilitação como instituição autorizada no Open Finance. Para seguir com o propósito, foi
            implementada uma solução utilizando um agregador de dados financeiros que oferece um
            ambiente sandbox, simulando o comportamento de uma instituição participante do Open Finance.
            Assim, foi possível simular webhooks, testando cenários reais sem depender de dados sensíveis.
          </p>
          <p>
            Outro ponto relevante foi a escolha do GraphQL, que possibilita consultas flexíveis e
            precisas, retornando apenas os dados realmente necessários para cada cliente ou integração.
            Isso facilita a construção de dashboards dinâmicos e aplicações front-end, bem como a
            análise pessoal.
          </p>
          <p>
            Além disso, a API permite a categorização inteligente de transações, possibilitando ao
            usuário final ou à aplicação selecionar apenas os lançamentos relevantes e calcular
            automaticamente o saldo para análise, filtragem ou integração com relatórios financeiros
            personalizados.
          </p>
        </div>

        <div id="funcionalidades">
          <h2>Principais Funcionalidades</h2>
          <ul>
            <li>Receber transações de forma automática via webhook Pluggy.</li>
            <li>Persistir transações em banco de dados relacional.</li>
            <li>Classificar por categorias personalizadas.</li>
            <li>Consultar histórico de transações.</li>
            <li>Visualizar transações de acordo com filtros- por categoria,por período e por tipo.</li>
            <li>Cálculo automático do saldo de acordo com as transações selecionadas.</li>
          </ul>
        </div>

        <div id="utilizando-api">
          <h2>Utilizando a API</h2>

          <h4>Users:</h4>
          <ul>
            <li>O usuário cria seu perfil se cadastrando no sistema.</li>
          </ul>

          <h4>Accounts:</h4>
          <ul>
            <li>o usuário pode criar e editar suas contas, ainda sem conexão com o agregador.</li>
          </ul>

          <h4>FinancialIntegration:</h4>
          <ul>
            <li>Com a conta criada é possível conectá-la com uma instituição financeira.</li>
          </ul>

          <h4>Category:</h4>
          <ul>
            <li>
              Usuários criam e gerenciam suas próprias categorias e subcategorias que poderão ser
              atribuídas à transações
            </li>
          </ul>

          <h4>Transactions:</h4>
          <ul>
            <li>Armazene e selecione as transações desejadas calculando automaticamente o saldo.</li>
          </ul>
        </div>

        <div id="praticas">
          <h2>Práticas Adotadas</h2>

          <h3>Arquitetura e Design</h3>
          <ul>
            <li>API GraphQL com divisão em camadas</li>
            <li>Aplicação dos princípios SOLID</li>
            <li>Injeção de Dependências</li>
            <li>Uso do padrão Data Transfer Object (DTO)</li>
            <li>Uso de ferramenta de Tuneamento (Ngrok)</li>
            <li>Integração com modelo de dados de API externas (Pluggy)</li>
            <li>Mensageria com Kafka</li>
            <li>Armazenamento de credenciais em arquivos</li>
          </ul>

          <h3>Validação e Segurança</h3>
          <ul>
            <li>Validações personalizadas e uso do Bean Validation</li>
            <li>Implementação de autenticação por meio de X-API-KEY</li>
          </ul>

          <h3>Tratamento de Erros e Respostas</h3>
          <ul>
            <li>Captura e tratamento de erros padronizados</li>
          </ul>

          <h3>Documentação</h3>
          <ul>
            <li>Documentação da API com diagramas e exemplos</li>
            <li>Documentação técnica dos endpoints com GraphiQL</li>
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
            <li>Uso de API Client, Database Client e Ambiente Sandbox durante o desenvolvimento</li>
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
              <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
                Maven
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
            <li>
              <a href="https://docs.spring.io/spring-framework/reference/web/webflux-webclient.html" target="_blank" rel="noopener noreferrer">
                Spring WebClient
              </a>
            </li>
            <li>
              <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">
                Kafka
              </a>
            </li>
            <li>
              <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                GraphQL
              </a>
            </li>
            <li>
              <a href="https://www.pluggy.ai/" target="_blank" rel="noopener noreferrer">
                Pluggy
              </a>
            </li>
            <li>
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                PostgreSQL
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};
