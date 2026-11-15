# MetroSense

## Monitoramento inteligente de condições ambientais em estações de metrô

### Sobre o projeto

O MetroSense é um projeto de IoT desenvolvido para monitorar as condições ambientais dentro de estações de metrô, utilizando um ESP32 e sensores para identificar alterações de temperatura e umidade.

A ideia é criar um sistema capaz de acompanhar o ambiente e emitir alertas automaticamente quando as condições monitoradas saírem dos limites definidos.

O diferencial do projeto é o uso de Edge Computing, permitindo que o próprio ESP32 processe as informações e tome decisões sem depender de um servidor ou conexão com a internet.

## Demonstração do projeto

Abaixo estão alguns registros da simulação mostrando como o MetroSense reage em diferentes situações.

### 1. Temperatura normal

<img width="943" height="612" alt="image" src="https://github.com/user-attachments/assets/15b509b1-f428-4ce8-9b07-e29b2ef958c7" />


Quando a temperatura está entre 18 °C e 28 °C, o LED verde acende e o display informa que a operação está normal.

### 2. Calor excessivo

<img width="949" height="622" alt="image" src="https://github.com/user-attachments/assets/a8d935f0-2451-4059-9acd-e5a324c0c54e" />


Quando a temperatura passa de 28 °C, o LED vermelho acende e o display mostra o alerta de calor excessivo.

### 3. Frio excessivo

<img width="925" height="615" alt="image" src="https://github.com/user-attachments/assets/a087ccb0-128c-4500-8149-0360a10cfbf3" />


Quando a temperatura fica abaixo de 18 °C, o LED vermelho acende e o display informa o alerta de frio excessivo.

---

### Objetivo

Desenvolver uma solução que ajude no monitoramento ambiental de estações de metrô, identificando situações de calor ou frio excessivo e indicando quando o ambiente está dentro das condições estabelecidas para a simulação.

### Componentes utilizados

- ESP32
- Sensor DHT22 (temperatura e umidade)
- Display LCD 16x2 com I2C
- LED verde
- LED vermelho
- Resistores de 220 Ω
- Jumpers para as conexões

### Funcionamento

O sensor DHT22 realiza leituras de temperatura e umidade do ambiente. Essas informações são enviadas ao ESP32, que compara a temperatura com os limites definidos no código.

O sistema trabalha com três situações:

- **Ambiente normal:** temperatura entre 18 °C e 28 °C.
- **Calor excessivo:** temperatura acima de 28 °C.
- **Frio excessivo:** temperatura abaixo de 18 °C.

Os limites utilizados são valores definidos para demonstrar o funcionamento do protótipo, não limites oficiais de segurança do metrô.

### Edge Computing

O MetroSense utiliza Edge Computing porque todo o processamento acontece diretamente no ESP32.

Isso significa que o dispositivo recebe os dados do sensor, analisa as informações e aciona os alertas localmente, sem precisar enviar os dados para a nuvem para tomar decisões.

### Conexões dos componentes

| Componente | Pino ESP32 |
|---|---|
| DHT22 DATA | GPIO 15 |
| LED verde | GPIO 18 |
| LED vermelho | GPIO 19 |
| LCD SDA | GPIO 21 |
| LCD SCL | GPIO 22 |
| LCD VCC | VIN (5V) |
| LCD GND | GND |

### Tecnologias utilizadas

- Arduino C++
- Wokwi
- ESP32
- Biblioteca DHTesp
- Biblioteca LiquidCrystal_I2C

### Como executar a simulação

1. Acesse o link público do projeto no Wokwi.
2. Inicie a simulação.
3. Altere a temperatura do DHT22 para testar as diferentes situações.
4. Observe as informações no display e a mudança dos LEDs.

### Link da simulação

[INSERIR LINK PÚBLICO DO WOKWI](https://wokwi.com/projects/480772350122977281)

### Integrantes

- Gabriel Henrique Ongarelli Reis — RM: 572636
- Vinicius Scalone Ramires — RM: 573783
- Matheus de Amorim Brito — RM: 572435
- Eduardo Felix Frois Silva — RM: 574103
- Lucas Rodrigues dos Santos — RM: 571778

---

**MetroSense — Monitoramento inteligente para ambientes metroviários.**
