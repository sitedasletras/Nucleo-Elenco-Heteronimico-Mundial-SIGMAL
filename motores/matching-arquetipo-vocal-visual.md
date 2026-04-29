# Motor de Matching Arquétipo Vocal-Visual SIGMAL

Este motor compara o arquétipo vocal com o arquétipo visual do ator, atriz, narrador ou personagem.

## Objetivo

Evitar escalações incoerentes entre voz, corpo, rosto, território dramático e função narrativa.

## Regra central

A combinação entre voz e imagem deve atingir pelo menos 90% de coincidência arquetípica.

Se o resultado for menor que 90%, o sistema deve alertar incompatibilidade e sugerir outra voz ou outra imagem.

## Entrada vocal

Cada voz deve receber pontuação de 0 a 10 nos seguintes campos:

- timbre
- peso vocal
- idade aparente
- ritmo de fala
- energia dramática
- autoridade
- suavidade
- agressividade
- comicidade
- nobreza
- urbanidade
- espiritualidade
- tensão emocional
- presença épica
- presença documental

## Entrada visual

Cada imagem/personagem deve receber pontuação de 0 a 10 nos seguintes campos:

- biotipo corporal
- idade aparente
- força física percebida
- delicadeza visual
- autoridade visual
- nobreza visual
- urbanidade visual
- comicidade visual
- dramaticidade facial
- presença épica
- presença documental
- presença musical
- presença infantil
- presença histórica
- presença fantástica

## Cruzamento

O motor calcula a compatibilidade entre os vetores vocal e visual.

Resultado mínimo aprovado: 90%.

## Saídas

- APROVADO: 90% a 100%
- AJUSTÁVEL: 80% a 89%
- REPROVADO: abaixo de 80%

## Uso no sistema

Antes de uma voz ser ligada a uma imagem, o motor deve comparar os arquétipos.

Antes de uma produção ser liberada, o motor deve verificar novamente:

- compatibilidade voz-imagem
- território narrativo
- exclusividade vocal por evento
- rodízio dramático
- assinatura dramática do personagem

## Exemplo

Uma voz grave, lenta e épica deve buscar personagem de porte forte, presença histórica, autoridade visual e território compatível com drama épico, fantasia, medieval ou institucional grave.

Uma voz leve, rápida e urbana deve buscar personagem contemporâneo, jovem, musical, cômico ou documental leve.
