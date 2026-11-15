# GS-EDGE-METRO-SENSE
# MetroSense

## Monitoramento inteligente de condições ambientais em estações de metrô

### Sobre o projeto

O MetroSense é um projeto de IoT desenvolvido para monitorar as condições ambientais dentro de estações de metrô, utilizando um ESP32 e sensores para identificar alterações de temperatura e umidade.

A ideia é criar um sistema capaz de acompanhar o ambiente e emitir alertas automaticamente quando as condições monitoradas saírem dos limites definidos.

O diferencial do projeto é o uso de Edge Computing, permitindo que o próprio ESP32 processe as informações e tome decisões sem depender de um servidor ou conexão com a internet.

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

- **Ambiente normal:** temperatura entre 18 °C e 28 °C. O LED verde acende e o sistema informa que a operação está normal.
- **Calor excessivo:** temperatura acima de 28 °C. O LED vermelho acende e o sistema emite um alerta de calor.
- **Frio excessivo:** temperatura abaixo de 18 °C. O LED vermelho acende e o sistema emite um alerta de baixa temperatura.

Caso ocorra uma falha na leitura do sensor, o sistema também informa o erro.

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
3. Observe as informações e os alertas apresentados no display.
4. Altere a temperatura do DHT22 para testar as diferentes situações.
5. Observe a mudança dos LEDs conforme as condições detectadas.

### Link da simulação

https://wokwi.com/projects/480772350122977281

### Integrantes]

Gabriel Henrique Ongarelli Reis 572636
Vinicius Scalone Ramires 573783
Matheus de Amorim Brito RM572435
Eduardo Felix Frois Silva 574103
Lucas Rodrigues dos Santos 571778


---

**MetroSense — Monitoramento inteligente para ambientes metroviários.**
