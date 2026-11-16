# MetroSense

## Monitoramento inteligente de condições ambientais em estações de metrô

### Sobre o projeto

O MetroSense é um projeto de IoT desenvolvido para monitorar as condições ambientais dentro de estações de metrô, utilizando um ESP32 e sensores para acompanhar temperatura e umidade.

O sistema identifica alterações na temperatura e emite alertas visuais e sonoros quando os valores saem dos limites definidos.

O projeto utiliza Edge Computing para processar as informações diretamente no ESP32, além de uma integração com a plataforma ThingSpeak para armazenar e acompanhar os dados por meio de um dashboard web.

## Demonstração do projeto

Abaixo estão alguns registros da simulação mostrando como o MetroSense reage em diferentes situações.

### 1. Temperatura normal

<img width="943" height="612" alt="image" src="https://github.com/user-attachments/assets/15b509b1-f428-4ce8-9b07-e29b2ef958c7" />

Quando a temperatura está entre 18 °C e 28 °C, o LED verde acende e o display informa que a operação está normal.

### 2. Calor excessivo

<img width="949" height="622" alt="image" src="https://github.com/user-attachments/assets/a8d935f0-2451-4059-9acd-e5a324c0c54e" />

Quando a temperatura passa de 28 °C, o LED vermelho acende, o buzzer emite um alerta sonoro e o display mostra o aviso de calor excessivo.

### 3. Frio excessivo

<img width="925" height="615" alt="image" src="https://github.com/user-attachments/assets/a087ccb0-128c-4500-8149-0360a10cfbf3" />

Quando a temperatura fica abaixo de 18 °C, o LED vermelho acende, o buzzer emite um alerta sonoro diferente e o display informa o alerta de frio excessivo.

## Dashboard e monitoramento em nuvem

O MetroSense também possui integração com a plataforma ThingSpeak, responsável por receber e armazenar os dados enviados pelo ESP32.

As informações são utilizadas em um dashboard web desenvolvido com HTML, CSS e JavaScript, permitindo acompanhar:

- Temperatura atual.
- Umidade do ambiente.
- Estado atual da estação.
- Histórico das medições.
- Atualização periódica dos dados.

Essa integração permite acompanhar as condições ambientais de maneira visual, complementando os alertas locais do dispositivo.

## Objetivo

Desenvolver uma solução que ajude no monitoramento ambiental de estações de metrô, identificando situações de calor ou frio excessivo e indicando quando o ambiente está dentro das condições estabelecidas para a simulação.

## Componentes utilizados

- ESP32
- Sensor DHT22 (temperatura e umidade)
- Display LCD 16x2 com I2C
- LED verde
- LED vermelho
- Buzzer
- Resistores de 220 Ω
- Jumpers para as conexões

## Funcionamento

O sensor DHT22 realiza leituras de temperatura e umidade do ambiente. Essas informações são recebidas pelo ESP32, que compara a temperatura com os limites definidos no código.

O sistema trabalha com três situações:

- **Ambiente normal:** temperatura entre 18 °C e 28 °C.
- **Calor excessivo:** temperatura acima de 28 °C.
- **Frio excessivo:** temperatura abaixo de 18 °C.

Cada situação possui uma resposta específica:

- **Normal:** LED verde aceso e buzzer desligado.
- **Calor excessivo:** LED vermelho aceso, alerta sonoro e mensagem no display.
- **Frio excessivo:** LED vermelho aceso, alerta sonoro diferente e mensagem no display.

Os limites utilizados são valores definidos para demonstrar o funcionamento do protótipo, não limites oficiais de segurança do metrô.

## Edge Computing e IoT Cloud

O MetroSense utiliza Edge Computing porque as decisões e o processamento dos alertas acontecem diretamente no ESP32.

O dispositivo recebe os dados do sensor, analisa as informações e aciona os componentes localmente, sem depender da nuvem para identificar uma situação de alerta.

Além disso, o ESP32 envia periodicamente os dados para o ThingSpeak, permitindo armazenar as medições e acompanhar o comportamento do ambiente pelo dashboard.

A arquitetura do projeto é dividida em três partes:

1. **Dispositivo IoT:** ESP32, sensor DHT22, display, LEDs e buzzer.
2. **IoT Cloud:** ThingSpeak, responsável por receber e armazenar os dados.
3. **Dashboard:** interface web para visualizar as informações e o histórico das medições.

## Conexões dos componentes

| Componente | Pino ESP32 |
|---|---|
| DHT22 DATA | GPIO 15 |
| LED verde | GPIO 18 |
| LED vermelho | GPIO 19 |
| Buzzer positivo | GPIO 23 |
| LCD SDA | GPIO 21 |
| LCD SCL | GPIO 22 |
| LCD VCC | VIN (5V) |
| LCD GND | GND |
| Buzzer negativo | GND |

## Tecnologias utilizadas

- Arduino C++
- ESP32
- Wokwi
- ThingSpeak
- HTML
- CSS
- JavaScript
- Chart.js
- Biblioteca DHTesp
- Biblioteca LiquidCrystal_I2C

## Como executar a simulação

1. Acesse o link público do projeto no Wokwi.
2. Inicie a simulação.
3. Altere a temperatura do DHT22 para testar as diferentes situações.
4. Observe as informações no display, a mudança dos LEDs e os alertas sonoros.
5. Para acompanhar os dados enviados, acesse o canal público do ThingSpeak.

### Link da simulação

https://wokwi.com/projects/480772350122977281

### Canal ThingSpeak

https://thingspeak.com/channels/3581964

## Integrantes

- Gabriel Henrique Ongarelli Reis — RM: 572636
- Vinicius Scalone Ramires — RM: 573783
- Matheus de Amorim Brito — RM: 572435
- Eduardo Felix Frois Silva — RM: 574103
- Lucas Rodrigues dos Santos — RM: 571778

---

**MetroSense — Monitoramento inteligente para ambientes metroviários.**