---
slug: "kafka-com-pouca-ram"
title: "Rodando Kafka com 256MB de heap em ambiente com recursos limitados"
title_en: "Running Kafka with a 256MB heap in a resource-constrained environment"
date: "2026-04-17"
tags: ["Kafka", "Docker", "Infraestrutura", "Java"]
excerpt: "Como configurar o Kafka para rodar de forma estável em um servidor com poucos recursos — sem matar a aplicação principal."
excerpt_en: "How to run Kafka stably on a low-resource server without starving the main application."
---

<!-- NARRATIVA -->
## O problema

Ao montar o MSFinanceApi no home server, precisei rodar Kafka, Zookeeper, quatro serviços Spring Boot, PostgreSQL e Nginx em uma máquina com apenas 8GB de RAM compartilhados.

O Kafka por padrão aloca 1GB de heap (`-Xmx1G`). Com tudo rodando junto, o servidor ficava sem memória e derrubava os containers.

## A solução

Reduzir o heap do Kafka e do Zookeeper via variáveis de ambiente no `docker-compose`:

```yaml
kafka:
  image: confluentinc/cp-kafka:7.0.1
  environment:
    KAFKA_HEAP_OPTS: "-Xmx256m -Xms128m"
    ZOOKEEPER_CLIENT_PORT: 2181
```

```yaml
zookeeper:
  image: confluentinc/cp-zookeeper:7.0.1
  environment:
    ZOOKEEPER_HEAP_OPTS: "-Xmx128m -Xms64m"
```

## Por que funciona

O Kafka usa o heap principalmente para buffers de produção e consumo. Com mensagens pequenas e baixo volume (como webhooks de uma API pessoal), 256MB são suficientes. O risco seria em cenários de alto throughput — nesse caso, precisaria reavaliar.

## Resultado

Consumo de memória do Kafka caiu de ~1GB para ~180MB em uso real. O servidor passou a rodar todos os containers de forma estável com ~5.5GB de RAM total utilizada.

## Conclusão

Configuração padrão do Kafka assume servidores robustos. Em ambientes com restrição de recursos — seja um home server, uma instância `t2.micro` na AWS ou um container com limite de memória — é essencial ajustar o heap. O mínimo viável depende do volume de mensagens da sua aplicação.

<!-- NARRATIVA_EN -->
## The problem

While setting up `MSFinanceApi` on my home server, I needed to run Kafka, Zookeeper, four Spring Boot services, PostgreSQL, and Nginx on a machine with only 8GB of shared RAM.

By default, Kafka allocates 1GB of heap (`-Xmx1G`). With everything running together, the server ran out of memory and started killing containers.

## The solution

Reduce Kafka and Zookeeper heap usage through environment variables in `docker-compose`:

```yaml
kafka:
  image: confluentinc/cp-kafka:7.0.1
  environment:
    KAFKA_HEAP_OPTS: "-Xmx256m -Xms128m"
    ZOOKEEPER_CLIENT_PORT: 2181
```

```yaml
zookeeper:
  image: confluentinc/cp-zookeeper:7.0.1
  environment:
    ZOOKEEPER_HEAP_OPTS: "-Xmx128m -Xms64m"
```

## Why it works

Kafka mainly uses heap for producer and consumer buffers. With small messages and low throughput, such as webhooks from a personal API, 256MB is enough. The risk would appear in high-throughput scenarios, where this setting should be reassessed.

## Result

Kafka memory consumption dropped from about 1GB to roughly 180MB in real usage. The server was then able to run all containers stably with around 5.5GB of total RAM in use.

## Conclusion

Kafka's default configuration assumes robust servers. In constrained environments, whether that is a home server, an AWS `t2.micro`, or a memory-limited container, tuning heap size is essential. The minimum viable value depends on your application's message volume.
